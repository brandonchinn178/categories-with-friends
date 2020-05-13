import 'dart:html';
import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/material_input/material_input.dart';
import 'package:angular_components/material_button/material_button.dart';
import 'package:quiver/strings.dart';

import '../api_client.dart';
import '../api_classes.dart';
import '../routes.dart';

// Check the timer every 100 ms so we can update it accurately.
const timePeriod = const Duration(milliseconds: 100);

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

    _utcEndTime = value.endTime;

    final currentTime = _currentUtcTime();
    if (_utcEndTime.isBefore(currentTime)) {
      submitAnswers();
    }

    _timeRemaining = _calculateTimeRemaining(currentTime);

    _categoryToAnswer = {for (final category in value.categories) category: ''};

    _timer = Timer.periodic(timePeriod, _updateTimer);
    _submittedAnswers = false;
  }

  InRoundComponent(this._apiClient);

  DateTime _currentUtcTime() => DateTime.now().toUtc();

  StartRound _startRound;
  StartRound get startRound => _startRound;
  List<String> get categories => _startRound?.categories ?? [];

  final ApiClient _apiClient;

  Timer _timer;
  DateTime _utcEndTime;
  String _timeRemaining = '';
  String get timeRemaining => _timeRemaining;

  bool _submittedAnswers = false;
  bool get submittedAnswers => _submittedAnswers;

  Map<String, String> _categoryToAnswer = {};
  Map<String, String> get categoryToAnswer => _categoryToAnswer;

  int _calculateSecondsRemaining(DateTime currentTime, DateTime endTime) {
    final durationRemaining = endTime.difference(currentTime);
    return durationRemaining.inSeconds;
  }

  // Compare inputted current time to the end time.
  String _calculateTimeRemaining(DateTime currentUtcTime) {
    final secondsRemaining =
        _calculateSecondsRemaining(currentUtcTime, _utcEndTime);
    String minutesToDisplay = '${(secondsRemaining / 60).floor()}';
    String secondsToDisplay = '${secondsRemaining % 60}';
    return '${minutesToDisplay.padLeft(2, '0')}:'
        '${secondsToDisplay.padLeft(2, '0')}';
  }

  // Called once every second.
  String _updateTimer(Timer timer) {
    final currentTime = _currentUtcTime();
    _timeRemaining = _calculateTimeRemaining(currentTime);
    final secondsRemaining =
        _calculateSecondsRemaining(currentTime, _utcEndTime);

    if (secondsRemaining <= 0) {
      timer.cancel();

      if (!_submittedAnswers) {
        submitAnswers();
      }
    }
  }

  void submitAnswers() {
    _submittedAnswers = true;
    _apiClient.sendRequest(StartValidation.request(categoryToAnswer));
  }
}
