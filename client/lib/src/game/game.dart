import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';

import '../api_client.dart';
import '../routes.dart';

@Component(
  selector: 'game',
  templateUrl: 'game.html',
  styleUrls: ['game.css'],
  directives: [],
  providers: [
    ClassProvider(ApiClient),
  ],
)
class GameComponent implements OnActivate {
  final ApiClient _apiClient;
  String _gameId;
  String _player;

  String get gameHomeUrl => _gameId == null
      ? ''
      : '${_uri.origin}${RoutePaths.gameHome.toUrl(parameters: {
          gameIdParam: _gameId
        })}';

  Uri _uri;

  GameComponent(this._apiClient) {
    _uri = Uri.base;
  }

  @override
  void onActivate(_, RouterState current) {
    _gameId = RoutePaths.getGameId(current.parameters);
    _player = RoutePaths.getPlayer(current.parameters);
    _apiClient.init(_gameId, _player);
  }
}
