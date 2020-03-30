// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'testability.dart';
export 'testability.dart';
import 'package:angular/src/core/testability/testability.template.dart' as _ref0;
import 'package:angular/src/runtime.template.dart' as _ref1;
import 'package:angular/src/testability/js_api.template.dart' as _ref2;

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
