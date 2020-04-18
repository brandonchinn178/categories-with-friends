import 'dart:html';
import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:quiver/strings.dart';

import '../api_client.dart';
import '../api_classes.dart';
import '../routes.dart';

const second = const Duration(seconds: 1);

@Component(
  selector: 'in-round',
  templateUrl: 'in_round.html',
  styleUrls: ['in_round.css'],
  directives: [materialInputDirectives, MaterialButtonComponent, NgIf, NgFor],
)
class InRoundComponent {
  @Input()
  bool isHost;

  @Input()
  set startRound(StartRound value) {
    _startRound = value;

    // In case the user reloads the page, calculate the end time.
    final durationRemaining = value.endTime.difference(DateTime.now().toUtc());
    _secondsRemaining = durationRemaining.inSeconds;

    if (_secondsRemaining <= 0) {
      submitAnswers();
    }

    _timeRemaining = _calculateTimeRemaining();

    _categoryToAnswer = {for (final category in value.categories) category: ''};

    _timer = Timer.periodic(second, _updateTimer);
    _submittedAnswers = false;
  }

  InRoundComponent(this._apiClient);

  StartRound _startRound;
  StartRound get startRound => _startRound;
  List<String> get categories => _startRound?.categories ?? [];

  final ApiClient _apiClient;

  Timer _timer;
  int _secondsRemaining;
  String _timeRemaining = '';
  String get timeRemaining => _timeRemaining;

  bool _submittedAnswers = false;
  bool get submittedAnswers => _submittedAnswers;

  Map<String, String> _categoryToAnswer = {};
  Map<String, String> get categoryToAnswer => _categoryToAnswer;

  String _calculateTimeRemaining() {
    String _minutesToDisplay = '${(_secondsRemaining / 60).floor()}';
    String _secondsToDisplay = '${_secondsRemaining % 60}';
    return '${_minutesToDisplay.padLeft(2, '0')}:'
        '${_secondsToDisplay.padLeft(2, '0')}';
  }

  // Called once every second.
  String _updateTimer(Timer timer) {
    _secondsRemaining--;
    _timeRemaining = _calculateTimeRemaining();
    if (_secondsRemaining == 0) {
      timer.cancel();
      submitAnswers();
    }
  }

  void submitAnswers() {
    // Cancel timer in case it wasn't yet.
    _timer.cancel();

    _submittedAnswers = true;
    _apiClient.sendRequest(StartValidation.request(categoryToAnswer));
  }
}
