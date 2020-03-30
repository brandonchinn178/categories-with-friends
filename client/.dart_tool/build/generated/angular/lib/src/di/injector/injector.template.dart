// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'injector.dart';
export 'injector.dart';
import '../../core/di/opaque_token.template.dart' as _ref0;
import '../errors.template.dart' as _ref1;
import '../module.template.dart' as _ref2;
import 'empty.template.dart' as _ref3;
import 'hierarchical.template.dart' as _ref4;
import 'map.template.dart' as _ref5;
import 'package:angular/src/core/di/opaque_token.template.dart' as _ref6;
import 'package:angular/src/runtime.template.dart' as _ref7;
import 'runtime.template.dart' as _ref8;

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
  _ref8.initReflector();
}
