// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'runtime.dart';
export 'runtime.dart';
import '../../core/di/decorators.template.dart' as _ref0;
import '../../core/di/opaque_token.template.dart' as _ref1;
import '../errors.template.dart' as _ref2;
import '../module.template.dart' as _ref3;
import '../providers.template.dart' as _ref4;
import '../reflector.template.dart' as _ref5;
import 'empty.template.dart' as _ref6;
import 'hierarchical.template.dart' as _ref7;
import 'injector.template.dart' as _ref8;
import 'package:angular/src/runtime.template.dart' as _ref9;

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
