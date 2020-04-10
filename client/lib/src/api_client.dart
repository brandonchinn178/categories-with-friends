import 'dart:convert';
import 'dart:html';
import 'dart:async';
import 'package:angular/di.dart';
import 'package:quiver/strings.dart';
import 'api_classes.dart';

@Injectable()
class ApiClient {
  final apiHost = window.location.hostname;
  // Locally use 8000, otherwise when deployed we don't need port.
  String get _apiPort => apiHost == 'localhost' ? ':8000' : '';

  final _onPlayerList = StreamController<PlayerList>.broadcast();
  Stream<PlayerList> get onPlayerList => _onPlayerList.stream;

  final _onStartRound = StreamController<StartRound>.broadcast();
  Stream<StartRound> get onStartRound => _onStartRound.stream;

  final _onStartValidation = StreamController<StartValidation>.broadcast();
  Stream<StartValidation> get onStartValidation => _onStartValidation.stream;

  final _onEndRound = StreamController<EndRound>.broadcast();
  Stream<EndRound> get onEndRound => _onEndRound.stream;

  final _onSyncValidation =
      StreamController<Map<String, Map<String, bool>>>.broadcast();
  Stream<Map<String, Map<String, bool>>> get onSyncValidation =>
      _onSyncValidation.stream;

  final _onRequestForVotes = StreamController<Map<String, String>>.broadcast();
  Stream<Map<String, String>> get onRequestForVotes =>
      _onRequestForVotes.stream;

  final _onVoteValue = StreamController<bool>.broadcast();
  Stream<bool> get onVoteValue => _onVoteValue.stream;

  final _onError = StreamController<String>.broadcast();
  Stream<String> get onError => _onError.stream;

  WebSocket _webSocket;

  void init(String gameId, String player) {
    final protocol = window.location.protocol.contains('https') ? 'wss' : 'ws';
    _webSocket = WebSocket(
        '${protocol}://${apiHost}${_apiPort}/game/${gameId}/${player}');
    _webSocket.onMessage.listen((MessageEvent e) => _routeResponse(e.data));
  }

  void sendRequest(String json) {
    if (_webSocket != null && _webSocket.readyState == WebSocket.OPEN) {
      _webSocket.send(json);
    } else {
      print('WebSocket not connected, message $json not sent');
    }
  }

  void _routeResponse(String json) {
    final object = jsonDecode(json);
    print('HELLO ' + object.toString());
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
      // send_to_all consists of misc UI defined messages.
      case 'send_to_all':
        final type = object['payload']['type'];
        switch (type) {
          case SendToAll.syncValidationType:
            _onSyncValidation.add(SendToAll.parseSyncValidation(object));
            return;
          case SendToAll.requestForVotesType:
            _onRequestForVotes.add(SendToAll.parseRequestForVotes(object));
            return;
          case SendToAll.voteValueType:
            _onVoteValue.add(SendToAll.parseVoteValue(object));
            return;
          default:
            throw ArgumentError('send_to_all type $type is hnhandled');
        }
        return;
      default:
        throw ArgumentError('Event $event is hnhandled');
    }
  }
}
