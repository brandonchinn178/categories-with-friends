import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_router/angular_router.dart';
import 'package:quiver/strings.dart';

import '../routes.dart';

/// Can be used for sharing links.
@Component(
  selector: 'game-home',
  templateUrl: 'game_home.html',
  styleUrls: ['game_home.css'],
  directives: [materialInputDirectives, MaterialButtonComponent],
)
class GameHomeComponent implements OnActivate {
  final Router _router;
  GameHomeComponent(this._router);

  String player = '';
  String get _gameUrl => RoutePaths.game
      .toUrl(parameters: {gameIdParam: _gameId, playerParam: player});

  String _errorMsg = '';
  String get errorMsg => _errorMsg;

  String _gameId = '';

  @override
  void onActivate(_, RouterState current) {
    _gameId = RoutePaths.getGameId(current.parameters);
  }

  void onPlayerKeypress(KeyboardEvent e) {
    if (e.key == 'Enter') {
      onEnter();
    }
  }

  void onEnter() {
    _errorMsg = '';

    if (isBlank(player)) {
      _errorMsg = "Username can't be blank";
      return;
    }

    _router.navigate(_gameUrl);
  }
}
