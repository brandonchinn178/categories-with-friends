import 'dart:convert';

class PlayerList {
  List<String> _players;
  List<String> get players => _players;

  String _host;
  String get host => _host;

  PlayerList(String json) {
    final object = jsonDecode(json);
    _players = object['players'];
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

  String _endTime;
  String get endTime => _endTime;

  StartRound(String json) {
    final object = jsonDecode(json);
    _categories = object['categories'];
    _round = object['round_num'];
    _letter = object['letter'];
    // TODO: Parse end_time.
    _endTime = object['end_time'];
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

  StartValidation(String json) {
    final object = jsonDecode(json);
    _playerToCategoryToAnswers = object['answers'];
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
  Map<String, Map<String, Answer>> _playerToCategoryToAnswers;
  Map<String, Map<String, Answer>> get playerToCategoryToAnswers =>
      _playerToCategoryToAnswers;

  Map<String, int> _playerToScore;
  Map<String, int> get playerToScore => _playerToScore;

  bool _nextRound;
  bool get nextRound => _nextRound;

  EndRound(String json) {
    final object = jsonDecode(json);
    // TODO: Parse the Answers might take more time.
    _playerToCategoryToAnswers = object['answers'];
    _playerToScore = object['scores'];
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

class EndGame {
  static String request() {
    final object = {'event': 'end_game'};
    return jsonEncode(object);
  }
}
