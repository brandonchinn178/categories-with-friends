// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'radio_control_value_accessor.dart';
export 'radio_control_value_accessor.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'control_value_accessor.template.dart' as _ref0;
import 'ng_control.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular_forms/src/directives/shared.template.dart' as _ref3;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(RadioControlRegistry, () => RadioControlRegistry());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
