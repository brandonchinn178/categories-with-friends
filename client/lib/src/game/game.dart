import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/material_checkbox/material_checkbox.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_button/material_button.dart';

import '../api_client.dart';
import '../api_classes.dart';
import '../routes.dart';

enum Phase { lobby, inRound, postRound, endGame }

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

  bool _isHost = false;
  bool get isHost => _isHost;

  Phase _phase = Phase.lobby;
  Phase get phase => _phase;

  String _host = '';
  String get host => _host;

  List<String> _players = [];
  List<String> get players => _players;

  Map<String, Map<String, String>> _playerToCategoryToAnswers = {};
  Map<String, Map<String, String>> get playerToCategoryToAnswers =>
      _playerToCategoryToAnswers;

  Map<String, Map<String, String>> _categoryToPlayerToAnswers = {};
  Map<String, Map<String, String>> get categoryToPlayerToAnswers =>
      _categoryToPlayerToAnswers;

  Map<String, Map<String, bool>> _playerToCategoryToValid = {};
  Map<String, Map<String, bool>> get playerToCategoryToValid =>
      _playerToCategoryToValid;

  int _round = 0;
  int get round => _round;

  List<String> _categories;
  List<String> get categories => _categories;

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
    _apiClient.onEndGame.listen(_endGame);
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

    _categoryToAnswer = Map.fromIterable(_categories, value: (_) => _letter);

    // TODO: Count down before starting.
    _phase = Phase.inRound;
  }

  void _startValidation(StartValidation value) {
    _playerToCategoryToAnswers = value.playerToCategoryToAnswers;

    _categoryToPlayerToAnswers =
        Map.fromIterable(_categories, value: (_) => <String, String>{});

    _playerToCategoryToValid = {};

    for (final player in players) {
      final categoryToAnswers = _playerToCategoryToAnswers[player];
      for (final category in categories) {
        _categoryToPlayerToAnswers[category][player] =
            categoryToAnswers[category];

        // Initialize all validity to true.
        _playerToCategoryToValid[player] ??= {};
        _playerToCategoryToValid[player][category] = true;
      }
    }
  }

  void _endRound(EndRound value) {}
  void _endGame(EndGame value) {}
  void _onError(String value) {}

  void startGame() => _apiClient.sendRequest(StartRound.request());
  void submitAnswers() =>
      _apiClient.sendRequest(StartValidation.request(categoryToAnswer));

  void submitValidation() {
    _apiClient.sendRequest(EndRound.request(playerToCategoryToValid));
  }
}
