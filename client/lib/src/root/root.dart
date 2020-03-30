import 'package:angular/angular.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:angular_router/angular_router.dart';
import 'package:quiver/strings.dart';

import '../routes.dart';

@Component(
  selector: 'root',
  templateUrl: 'root.html',
  styleUrls: ['root.css'],
  directives: [materialInputDirectives, MaterialButtonComponent],
)
class RootComponent {
  final Router _router;
  RootComponent(this._router);

  String gameId = '';
  String get _gameUrl =>
      RoutePaths.gameHome.toUrl(parameters: {gameIdParam: gameId});

  String _errorMsg = '';
  String get errorMsg => _errorMsg;

  void onEnter() {
    _errorMsg = '';

    if (isBlank(gameId)) {
      _errorMsg = "Game id can't be blank";
      return;
    }

    // TODO: Call API, only navigate after success.
    _router.navigate(_gameUrl);
  }
}
