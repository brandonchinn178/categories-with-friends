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
import '../routes.dart';

// One word selectors don't seem to work???
@Component(
  selector: 'validation-a',
  templateUrl: 'validation.html',
  styleUrls: ['validation.css'],
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
  providers: [
    overlayBindings,
  ],
)
class ValidationComponent {
  /// Can be null if refreshed.
  @Input()
  int round;

  @Input()
  bool isHost;

  @Input()
  String player;

  @Input()
  set startValidation(StartValidation value) {
    _playerToCategoryToAnswers = value.playerToCategoryToAnswers;
    _playerToCategoryToValid = {};

    _players = _playerToCategoryToAnswers.keys.toList();
    _categories = _playerToCategoryToAnswers.values.first.keys.toList();

    for (final player in players) {
      for (final category in categories) {
        // Initialize validity to true, unless answer is blank.
        _playerToCategoryToValid[player] ??= {};
        _playerToCategoryToValid[player][category] =
            !isBlankAnswer(player, category);
      }
    }
  }

  final ApiClient _apiClient;

  Map<String, Map<String, String>> _playerToCategoryToAnswers = {};
  Map<String, Map<String, String>> get playerToCategoryToAnswers =>
      _playerToCategoryToAnswers;

  List<String> _players = [];
  List<String> get players => _players;

  List<String> _categories = [];
  List<String> get categories => _categories;

  String answer(String player, String category) =>
      _playerToCategoryToAnswers[player][category];
  bool isBlankAnswer(String player, String category) =>
      isBlank(answer(player, category));

  Map<String, Map<String, bool>> _playerToCategoryToValid = {};
  Map<String, Map<String, bool>> get playerToCategoryToValid =>
      _playerToCategoryToValid;

  bool _submittedAnswers = false;
  bool get submittedAnswers => _submittedAnswers;

  Map<String, String> _categoryToAnswer = {};
  Map<String, String> get categoryToAnswer => _categoryToAnswer;

  bool showVoteDialog = false;
  String _voteTargetCategory = '';
  String get voteTargetCategory => _voteTargetCategory;
  String _voteTargetAnswer = '';
  String get voteTargetAnswer => _voteTargetAnswer;

  int _currentYesVotes = 0;
  int get currentYesVotes => _currentYesVotes;

  int _currentNoVotes = 0;
  int get currentNoVotes => _currentNoVotes;

  bool _alreadyVoted = false;
  bool get alreadyVoted => _alreadyVoted;

  // Links to Google search.
  Uri _googleUrl(String answer) => Uri(
      scheme: 'https',
      host: 'google.com',
      path: 'search',
      queryParameters: {'q': answer});
  String googleUrl(String answer) => '${_googleUrl(answer)}';

  ValidationComponent(this._apiClient) {
    _apiClient
      ..onSyncValidation.listen(_onSyncValidation)
      ..onRequestForVotes.listen(_onRequestForVotes)
      ..onVoteValue.listen(_onVoteValue)
      ..onCloseVoting.listen(_onCloseVoting);
  }

  void _onSyncValidation(
      Map<String, Map<String, bool>> playerToCategoryToValid) {
    // Host sent out the data in the first place
    if (isHost) return;
    _playerToCategoryToValid = playerToCategoryToValid;
  }

  // Returns {'category': _, 'player': _, 'answer': _}
  void _onRequestForVotes(Map<String, String> data) {
    showVoteDialog = true;
    _alreadyVoted = false;
    _currentYesVotes = 0;
    _currentNoVotes = 0;

    _voteTargetCategory = data['category'];
    _voteTargetAnswer = data['answer'];
  }

  void voteYes() {
    _apiClient.sendRequest(SendToAll.voteValue(player, true));
    _alreadyVoted = true;
  }

  void voteNo() {
    _apiClient.sendRequest(SendToAll.voteValue(player, false));
    _alreadyVoted = true;
  }

  void _onVoteValue(bool value) {
    if (value) {
      _currentYesVotes++;
    } else {
      _currentNoVotes++;
    }
  }

  void _onCloseVoting(_) {
    showVoteDialog = false;
  }

  void submitValidation() {
    _apiClient.sendRequest(EndRound.request(playerToCategoryToValid));
  }

  void updateValidity(String player, String category, bool value) {
    _playerToCategoryToValid[player][category] = value;
    syncValidation();
  }

  void syncValidation() {
    // Only the host should be syncing validation.
    if (!isHost) {
      return;
    }
    _apiClient
        .sendRequest(SendToAll.syncValidation(player, playerToCategoryToValid));
  }

  void requestForVotes(String category, String player) {
    // Only the host can request votes.
    if (!isHost) {
      return;
    }

    _apiClient.sendRequest(SendToAll.requestForVotes(
        player, category, player, playerToCategoryToAnswers[player][category]));
  }

  void closeVote() {
    // Only the host can stop voting.
    if (!isHost) {
      return;
    }

    _apiClient.sendRequest(SendToAll.closeVoting(player));
  }
}
