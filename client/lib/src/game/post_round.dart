import 'dart:html';
import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_router/angular_router.dart';
import 'package:angular_components/laminate/components/modal/modal.dart';
import 'package:angular_components/laminate/overlay/module.dart';
import 'package:angular_components/material_checkbox/material_checkbox.dart';
import 'package:angular_components/material_dialog/material_dialog.dart';
import 'package:angular_components/material_icon/material_icon.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:quiver/strings.dart';

import '../api_client.dart';
import '../api_classes.dart';

@Component(
  selector: 'post-round',
  templateUrl: 'post_round.html',
  styleUrls: ['post_round.css'],
  directives: [
    materialInputDirectives,
    MaterialButtonComponent,
    MaterialCheckboxComponent,
    MaterialDialogComponent,
    MaterialIconComponent,
    ModalComponent,
    NgIf,
    NgFor
  ],
)
class PostRoundComponent {
  /// Can be null if refreshed.
  @Input()
  int round;

  @Input()
  bool isHost;

  @Input()
  String player;

  @Input()
  set endRound(EndRound value) {
    _playerToCategoryToGradedAnswers = value.playerToCategoryToGradedAnswers;
    _players = _playerToCategoryToGradedAnswers.keys.toList();
    _categories = _playerToCategoryToGradedAnswers.values.first.keys.toList();

    // Temp storage of unsorted map.
    final unsorted = value.playerToScore;
    // Sort the map so that the highest scores come first.
    final sortedKeys = unsorted.keys.toList()
      ..sort((k1, k2) => unsorted[k2].compareTo(unsorted[k1]));
    _playerToScore =
        Map.fromIterable(sortedKeys, value: (key) => unsorted[key]);
    _nextRound = value.nextRound;
  }

  String answer(String player, String category) =>
      _playerToCategoryToGradedAnswers[player][category].text;
  bool isBlankAnswer(String player, String category) =>
      isBlank(answer(player, category));

  List<String> _players = [];
  List<String> get players => _players;

  List<String> _categories = [];
  List<String> get categories => _categories;

  final ApiClient _apiClient;

  Map<String, Map<String, Answer>> _playerToCategoryToGradedAnswers = {};
  Map<String, Map<String, Answer>> get playerToCategoryToGradedAnswers =>
      _playerToCategoryToGradedAnswers;

  Map<String, int> _playerToScore = {};
  Map<String, int> get playerToScore => _playerToScore;

  /// True if a next round exists.
  bool _nextRound = true;
  bool get nextRound => _nextRound;

  PostRoundComponent(this._apiClient);

  final _onNewGame = StreamController<void>.broadcast();
  Stream<void> get onNewGame => _onNewGame.stream;

  void newGame() {
    _onNewGame.add(null);
  }

  void startRound() => _apiClient.sendRequest(StartRound.request());
}
