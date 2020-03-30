// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'change_detection.dart';
export 'change_detection.dart';
import 'change_detection_util.template.dart' as _ref0;
import 'change_detector_ref.template.dart' as _ref1;
import 'constants.template.dart' as _ref2;
import 'differs/default_iterable_differ.template.dart' as _ref3;
import 'differs/default_keyvalue_differ.template.dart' as _ref4;
import 'pipe_transform.template.dart' as _ref5;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
