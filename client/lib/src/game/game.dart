import 'dart:html';
import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_checkbox/material_checkbox.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:quiver/strings.dart';

import 'lobby.dart';
import 'in_round.dart';
import 'validation.dart';
import 'post_round.dart';
import '../api_client.dart';
import '../api_classes.dart';
import '../routes.dart';

enum Phase { lobby, inRound, validation, postRound }
const second = const Duration(seconds: 1);

@Component(
  selector: 'game',
  templateUrl: 'game.html',
  styleUrls: ['game.css'],
  directives: [
    InRoundComponent,
    LobbyComponent,
    materialInputDirectives,
    MaterialButtonComponent,
    MaterialCheckboxComponent,
    MaterialDialogComponent,
    MaterialIconComponent,
    ModalComponent,
    NgIf,
    NgFor,
    PostRoundComponent,
    ValidationComponent,
  ],
  exports: [Phase],
  providers: [
    ClassProvider(ApiClient),
    overlayBindings,
  ],
)
class GameComponent implements OnActivate {
  final ApiClient _apiClient;

  PlayerList _playerList;
  PlayerList get playerList => _playerList;

  StartRound _startRound;
  StartRound get startRound => _startRound;

  StartValidation _startValidation;
  StartValidation get startValidation => _startValidation;

  EndRound _endRound;
  EndRound get endRound => _endRound;

  String _gameId;
  String get gameId => _gameId;

  String _player;
  String get player => _player;

  bool get isHost => _host == _player;

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

  String answer(String player, String category) =>
      _playerToCategoryToAnswers[player][category];
  bool isBlankAnswer(String player, String category) =>
      isBlank(answer(player, category));

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
  int _secondsRemaining;
  String _timeRemaining = '';
  String get timeRemaining => _timeRemaining;

  List<String> _categories;
  List<String> get categories => _categories;

  bool _submittedAnswers = false;
  bool get submittedAnswers => _submittedAnswers;

  Map<String, String> _categoryToAnswer = {};
  Map<String, String> get categoryToAnswer => _categoryToAnswer;

  String _letter;
  String get letter => _letter;

  bool showVoteDialog = false;
  String _voteTargetCategory = '';
  String get voteTargetCategory => _voteTargetCategory;
  String _voteTargetAnswer = '';
  String get voteTargetAnswer => _voteTargetAnswer;

  int _currentYesVotes = 0;
  int get currentYesVotes => _currentYesVotes;

  int _currentNoVotes = 0;
  int get currentNoVotes => _currentNoVotes;

  bool _alreadyVoted = false;
  bool get alreadyVoted => _alreadyVoted;

  // Links to Google search.
  Uri _googleUrl(String answer) => Uri(
      scheme: 'https',
      host: 'google.com',
      path: 'search',
      queryParameters: {'q': answer});
  String googleUrl(String answer) => '${_googleUrl(answer)}';

  // TODO: Remove hash if we switch to non-hash location strategy.
  String get gameHomeUrl => _gameId == null
      ? ''
      : '${_uri.origin}/#${RoutePaths.gameHome.toUrl(parameters: {
          gameIdParam: _gameId
        })}';

  Uri _uri;

  GameComponent(this._apiClient) {
    _uri = Uri.base;
    _apiClient
      ..onHostChange.listen((host) => _host = host)
      ..onPlayerList.listen(_updatePlayerList)
      ..onStartRound.listen(_onStartRound)
      ..onStartValidation.listen(_onStartValidation)
      ..onEndRound.listen(_onEndRound)
      ..onError.listen(_onError);
  }

  @override
  void onActivate(_, RouterState current) {
    _gameId = RoutePaths.getGameId(current.parameters);
    _player = RoutePaths.getPlayer(current.parameters);
    _apiClient.init(_gameId, _player);
  }

  void _updatePlayerList(PlayerList value) {
    _clearError();
    _playerList = value;
  }

  void _onStartRound(StartRound value) {
    _clearError();
    _startRound = value;
    _round = value.round;
    _phase = Phase.inRound;
    _scrollToTop();
  }

  void _onStartValidation(StartValidation value) {
    _clearError();
    _startValidation = value;
    _phase = Phase.validation;
    _scrollToTop();
  }

  void _onEndRound(EndRound value) {
    _clearError();
    _endRound = value;
    _phase = Phase.postRound;
    _scrollToTop();
  }

  void _onError(String value) {
    _error = value;
  }

  void newGame() {
    _phase = Phase.lobby;
  }

  void _clearError() {
    _error = '';
  }

  void _scrollToTop() {
    window.scrollTo(0, 0);
  }
}
