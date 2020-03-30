// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'reflector.dart';
export 'reflector.dart';
import '../core/di/decorators.template.dart' as _ref0;
import '../core/di/opaque_token.template.dart' as _ref1;
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
