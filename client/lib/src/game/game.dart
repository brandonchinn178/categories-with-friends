import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/material_checkbox/material_checkbox.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_button/material_button.dart';

import '../api_client.dart';
import '../api_classes.dart';
import '../routes.dart';

enum Phase { lobby, inRound, validation, postRound }
const second = const Duration(seconds: 1);
const secondsPerRound = 3 * 60; // 3 minutes

@Component(
  selector: 'game',
  templateUrl: 'game.html',
  styleUrls: ['game.css'],
  directives: [
    materialInputDirectives,
    MaterialButtonComponent,
    MaterialCheckboxComponent,
    NgIf,
    NgFor
  ],
  exports: [Phase],
  providers: [
    ClassProvider(ApiClient),
  ],
)
class GameComponent implements OnActivate {
  final ApiClient _apiClient;
  String _gameId;
  String _player;
  String get player => _player;

  bool _isHost = false;
  bool get isHost => _isHost;

  Phase _phase = Phase.lobby;
  Phase get phase => _phase;

  String _host = '';
  String get host => _host;

  String _error = '';
  String get error => _error;

  List<String> _players = [];
  List<String> get players => _players;

  Map<String, Map<String, String>> _playerToCategoryToAnswers = {};
  Map<String, Map<String, String>> get playerToCategoryToAnswers =>
      _playerToCategoryToAnswers;

  Map<String, Map<String, Answer>> _playerToCategoryToGradedAnswers = {};
  Map<String, Map<String, Answer>> get playerToCategoryToGradedAnswers =>
      _playerToCategoryToGradedAnswers;

  Map<String, Map<String, bool>> _playerToCategoryToValid = {};
  Map<String, Map<String, bool>> get playerToCategoryToValid =>
      _playerToCategoryToValid;

  Map<String, int> _playerToScore = {};
  Map<String, int> get playerToScore => _playerToScore;

  int _round = 0;
  int get round => _round;

  /// True if a next round exists.
  bool _nextRound = true;
  bool get nextRound => _nextRound;

  Timer _timer;
  String _timeRemaining = '';
  String get timeRemaining => _timeRemaining;

  List<String> _categories;
  List<String> get categories => _categories;

  bool _submittedAnswers;
  bool submittedAnswers = false;

  Map<String, String> _categoryToAnswer = {};
  Map<String, String> get categoryToAnswer => _categoryToAnswer;

  String _letter;
  String get letter => _letter;

  String _endTime;
  String get endTime => _endTime;

  String get gameHomeUrl => _gameId == null
      ? ''
      : '${_uri.origin}${RoutePaths.gameHome.toUrl(parameters: {
          gameIdParam: _gameId
        })}';

  Uri _uri;

  GameComponent(this._apiClient) {
    _uri = Uri.base;
    _apiClient.onPlayerList.listen(_updatePlayerList);
    _apiClient.onStartRound.listen(_startRound);
    _apiClient.onStartValidation.listen(_startValidation);
    _apiClient.onEndRound.listen(_endRound);
    _apiClient.onError.listen(_onError);
  }

  @override
  void onActivate(_, RouterState current) {
    _gameId = RoutePaths.getGameId(current.parameters);
    _player = RoutePaths.getPlayer(current.parameters);
    _apiClient.init(_gameId, _player);
  }

  void _updatePlayerList(PlayerList value) {
    _host = value.host;
    _players = value.players;
    _isHost = value.host == _player;
  }

  void _startRound(StartRound value) {
    _round = value.round;
    _categories = value.categories;
    _letter = value.letter;
    _endTime = value.endTime;
    _timeRemaining = _calculateTimeRemaining(secondsPerRound);

    _categoryToAnswer = Map.fromIterable(_categories, value: (_) => _letter);

    _timer = Timer.periodic(second, _updateTimer);
    _submittedAnswers = false;
    _phase = Phase.inRound;
  }

  String _calculateTimeRemaining(int secondsLeft) {
    String _minutesToDisplay = '${(secondsLeft / 60).floor()}';
    String _secondsToDisplay = '${secondsLeft % 60}';
    return '${_minutesToDisplay.padLeft(2, '0')}:${_secondsToDisplay.padLeft(2, '0')}';
  }

  String _updateTimer(Timer timer) {
    final elapsedSeconds = timer.tick;
    final secondsLeft = secondsPerRound - elapsedSeconds;
    _timeRemaining = _calculateTimeRemaining(secondsLeft);
    if (secondsLeft == 0) {
      timer.cancel();
      submitAnswers();
    }
  }

  void _startValidation(StartValidation value) {
    _playerToCategoryToAnswers = value.playerToCategoryToAnswers;

    _playerToCategoryToValid = {};

    for (final player in players) {
      for (final category in categories) {
        // Initialize all validity to true.
        _playerToCategoryToValid[player] ??= {};
        _playerToCategoryToValid[player][category] = true;
      }
    }

    _phase = Phase.validation;
  }

  void _endRound(EndRound value) {
    _playerToCategoryToGradedAnswers = value.playerToCategoryToGradedAnswers;
    // Temp storage of unsorted map.
    final unsorted = value.playerToScore;
    // Sort the map so that the highest scores come first.
    final sortedKeys = unsorted.keys.toList()
      ..sort((k1, k2) => unsorted[k1].compareTo(unsorted[k2]));
    _playerToScore =
        Map.fromIterable(sortedKeys, value: (key) => unsorted[key]);
    _nextRound = value.nextRound;
    _phase = Phase.postRound;
  }

  // TODO
  void newGame() {
    _phase = Phase.lobby;
  }

  void _onError(String value) {
    _error = value;
  }

  void startRound() => _apiClient.sendRequest(StartRound.request());
  void submitAnswers() {
    _submittedAnswers = true;
    _apiClient.sendRequest(StartValidation.request(categoryToAnswer));
  }

  void submitValidation() {
    _apiClient.sendRequest(EndRound.request(playerToCategoryToValid));
  }
}
