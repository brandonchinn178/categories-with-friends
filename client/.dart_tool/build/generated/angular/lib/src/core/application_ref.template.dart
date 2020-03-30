// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'application_ref.dart';
export 'application_ref.dart';
import '../facade/exception_handler.template.dart' as _ref0;
import 'change_detection/host.template.dart' as _ref1;
import 'di.template.dart' as _ref2;
import 'linker/component_factory.template.dart' as _ref3;
import 'package:angular/src/core/change_detection/host.template.dart' as _ref4;
import 'package:angular/src/runtime.template.dart' as _ref5;
import 'testability/testability.template.dart' as _ref6;
import 'zone/ng_zone.template.dart' as _ref7;

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
  _ref6.initReflector();
  _ref7.initReflector();
}
