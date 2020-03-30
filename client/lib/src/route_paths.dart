import 'package:angular_router/angular_router.dart';

const gameIdParam = 'gameid';
const playerParam = 'player';

class RoutePaths {
  static final root = RoutePath(path: '/');
  static final gameHome = RoutePath(path: ':$gameIdParam');
  static final game = RoutePath(path: '${gameHome.path}/:$playerParam');
}

String getGameId(Map<String, String> parameters) => parameters[gameIdParam];

String getPlayer(Map<String, String> parameters) => parameters[playerParam];
