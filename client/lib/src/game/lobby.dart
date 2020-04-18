import 'package:angular/angular.dart';
import 'package:angular_components/material_button/material_button.dart';

import '../api_client.dart';
import '../api_classes.dart';
import '../routes.dart';

// One word selectors don't seem to work???
@Component(
  selector: 'lobby-a',
  templateUrl: 'lobby.html',
  styleUrls: ['lobby.css'],
  directives: [
    MaterialButtonComponent,
    NgIf,
    NgFor,
  ],
)
class LobbyComponent {
  @Input()
  PlayerList playerList;

  /// Current player.
  @Input()
  String player;

  @Input()
  String gameId;

  final ApiClient _apiClient;

  String get host => playerList?.host ?? '';
  bool get isHost => host == player;
  List<String> get players => playerList?.players ?? [];

  // TODO: Remove hash if we switch to non-hash location strategy.
  String get gameHomeUrl => gameId == null
      ? ''
      : '${_uri.origin}/#${RoutePaths.gameHome.toUrl(parameters: {
          gameIdParam: gameId
        })}';

  Uri _uri;

  LobbyComponent(this._apiClient) : _uri = Uri.base;

  void startRound() => _apiClient.sendRequest(StartRound.request());
}
