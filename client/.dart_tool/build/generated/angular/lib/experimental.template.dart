// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'experimental.dart';
export 'experimental.dart';
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/runtime.template.dart' as _ref1;
import 'src/bootstrap/modules.template.dart' as _ref2;
import 'src/bootstrap/run.template.dart' as _ref3;
import 'src/common/directives/ng_for_identity.template.dart' as _ref4;
import 'src/core/linker/component_resolver.template.dart' as _ref5;
import 'src/core/zone/ng_zone.template.dart' as _ref6;
import 'src/di/injector/injector.template.dart' as _ref7;
import 'src/runtime.template.dart' as _ref8;
import 'src/runtime/dom_helpers.template.dart' as _ref9;

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
  _ref9.initReflector();
}
