import 'package:angular_router/angular_router.dart';

import 'root/root.template.dart';
import 'game/game_home.template.dart';
import 'game/game.template.dart';
import 'not_found_component.template.dart' as not_found_template;

import 'package:angular_router/angular_router.dart';

const gameIdParam = 'gameid';
const playerParam = 'player';

class RoutePaths {
  static final root = RoutePath(path: '/');
  static final gameHome = RoutePath(path: ':$gameIdParam');
  static final game = RoutePath(path: '${gameHome.path}/:$playerParam');
}

class Routes {
  String getGameId(Map<String, String> parameters) => parameters[gameIdParam];
  String getPlayer(Map<String, String> parameters) => parameters[playerParam];

  static final root = RouteDefinition(
    routePath: RoutePaths.root,
    component: RootComponentNgFactory,
  );

  static final gameHome = RouteDefinition(
    routePath: RoutePaths.gameHome,
    component: GameHomeComponentNgFactory,
  );

  static final game = RouteDefinition(
    routePath: RoutePaths.game,
    component: GameHomeComponentNgFactory,
  );

  static final all = <RouteDefinition>[
    root,
    gameHome,
    game,
    RouteDefinition.redirect(
      path: '',
      redirectTo: RoutePaths.root.toUrl(),
    ),
    RouteDefinition(
      path: '.*',
      component: not_found_template.NotFoundComponentNgFactory,
    ),
  ];
}
