import 'dart:convert';

class PlayerList {
  List<String> _players;
  List<String> get players => _players;

  String _host;
  String get host => _host;

  PlayerList(Map<String, dynamic> object) {
    _players = new List<String>.from(object['players']);
    _host = object['host'];
  }
}

class StartRound {
  int _round;
  int get round => _round;

  List<String> _categories;
  List<String> get categories => _categories;

  String _letter;
  String get letter => _letter;

  // UTC time.
  DateTime _endTime;
  DateTime get endTime => _endTime;

  StartRound(Map<String, dynamic> object) {
    _categories = new List<String>.from(object['categories']);
    _round = object['round_num'];
    _letter = object['letter'];
    // Server sends UTC time but DateTime interprets as local by default, so
    // force it to parse as UTC.
    _endTime = DateTime.parse('${object['end_time']}z');
  }

  static String request() {
    final object = {'event': 'start_round'};
    return jsonEncode(object);
  }
}

class StartValidation {
  Map<String, Map<String, String>> _playerToCategoryToAnswers;
  Map<String, Map<String, String>> get playerToCategoryToAnswers =>
      _playerToCategoryToAnswers;

  StartValidation(Map<String, dynamic> object) {
    Map<String, dynamic> answers = object['answers'];
    _playerToCategoryToAnswers = {};
    for (final entry in answers.entries) {
      final player = entry.key;
      Map<String, String> categoryToAnswer = entry.value.cast<String, String>();
      _playerToCategoryToAnswers[player] = categoryToAnswer;
    }
  }

  static String request(Map<String, String> categoryToAnswer) {
    final object = {'event': 'submit_answers', 'answers': categoryToAnswer};
    return jsonEncode(object);
  }
}

class Answer {
  String _text;
  String get text => _text;

  bool _valid;
  bool get valid => _valid;

  Answer(this._text, this._valid);
}

class EndRound {
  Map<String, Map<String, Answer>> _playerToCategoryToGradedAnswers;
  Map<String, Map<String, Answer>> get playerToCategoryToGradedAnswers =>
      _playerToCategoryToGradedAnswers;

  Map<String, int> _playerToScore;
  Map<String, int> get playerToScore => _playerToScore;

  bool _nextRound;
  bool get nextRound => _nextRound;

  EndRound(Map<String, dynamic> object) {
    _playerToCategoryToGradedAnswers = {};
    Map<String, dynamic> answers = object['answers'];
    for (final entry in answers.entries) {
      final player = entry.key;
      Map<String, Answer> categoryToGradedAnswer =
          Map.fromIterable(entry.value.entries,
              key: (entry) => entry.key,
              // entry.value: Tuple (String answerText, bool valid)
              value: (entry) => Answer(entry.value[0], entry.value[1]));
      ;
      _playerToCategoryToGradedAnswers[player] = categoryToGradedAnswer;
    }

    _playerToScore = object['scores'].cast<String, int>();
    _nextRound = object['next_round'];
  }

  static String request(
      Map<String, Map<String, bool>> playerToCategoryToValid) {
    final object = {
      'event': 'end_validation',
      'votes': playerToCategoryToValid
    };
    return jsonEncode(object);
  }
}
