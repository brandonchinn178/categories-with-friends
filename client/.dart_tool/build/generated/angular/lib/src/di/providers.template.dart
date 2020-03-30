// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'providers.dart';
export 'providers.dart';
import '../core/di/opaque_token.template.dart' as _ref0;
import 'package:angular/src/runtime.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
