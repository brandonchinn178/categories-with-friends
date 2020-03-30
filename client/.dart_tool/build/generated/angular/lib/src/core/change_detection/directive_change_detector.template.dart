// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'directive_change_detector.dart';
export 'directive_change_detector.dart';
import 'package:angular/src/core/change_detection/host.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.template.dart' as _ref1;
import 'package:angular/src/runtime.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
