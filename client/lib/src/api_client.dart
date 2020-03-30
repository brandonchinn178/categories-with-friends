import 'dart:convert';
import 'dart:async';
import 'package:angular/di.dart';
import 'package:quiver/strings.dart';
import 'api_classes.dart';

@Injectable()
class ApiClient {
  final _onPlayerList = StreamController<PlayerList>.broadcast();
  Stream<PlayerList> get onPlayerList => _onPlayerList.stream;

  final _onStartRound = StreamController<StartRound>.broadcast();
  Stream<StartRound> get onStartRound => _onStartRound.stream;

  final _onStartValidation = StreamController<StartValidation>.broadcast();
  Stream<StartValidation> get onStartValidation => _onStartValidation.stream;

  final _onEndRound = StreamController<EndRound>.broadcast();
  Stream<EndRound> get onEndRound => _onEndRound.stream;

  final _onEndGame = StreamController<EndGame>.broadcast();
  Stream<EndGame> get onEndGame => _onEndGame.stream;

  final _onError = StreamController<String>.broadcast();
  Stream<String> get onError => _onError.stream;

  // TODO: Setup web socket if not yet setup..
  void init(String gameId, String player) {}

  // TODO: Parse errors.
  void _routeResponse(String json) {
    final object = jsonDecode(json);
    String error = object['error'];
    if (isNotBlank(error)) {
      switch (error) {
        case 'server_error':
        case 'unexpected_event':
        case 'cannot_join_game':
          _onError.add('${error}: ${object['message']}');
          return;
        case 'not_host':
          _onError.add('Only the host can do that');
          return;
        default:
          throw ArgumentError('Error $error is unhandled');
      }
    }

    final event = object['event'];
    switch (event) {
      case 'refresh_player_list':
        _onPlayerList.add(PlayerList(object));
        return;
      case 'start_round':
        _onStartRound.add(StartRound(object));
        return;
      case 'start_validation':
        _onStartValidation.add(StartValidation(object));
        return;
      case 'end_round':
        _onEndRound.add(EndRound(object));
        return;
      case 'end_game':
        _onEndGame.add(EndGame());
        return;
      default:
        throw ArgumentError('Event $event is hnhandled');
    }
  }
}
