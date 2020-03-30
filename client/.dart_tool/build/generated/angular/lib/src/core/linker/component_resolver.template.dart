// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'component_resolver.dart';
export 'component_resolver.dart';
import 'component_factory.template.dart' as _ref0;
import 'package:angular/src/di/reflector.template.dart' as _ref1;
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
