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

  GameComponent(this._apiClient);

  @override
  void onActivate(_, RouterState current) {
    _gameId = RoutePaths.getGameId(current.parameters);
    _player = RoutePaths.getPlayer(current.parameters);
    _apiClient.init(_gameId, _player);
  }
}
