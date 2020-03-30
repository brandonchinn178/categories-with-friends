// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'view_container_ref.dart';
export 'view_container_ref.dart';
import 'component_factory.template.dart' as _ref0;
import 'component_loader.template.dart' as _ref1;
import 'element_ref.template.dart' as _ref2;
import 'package:angular/src/di/injector/injector.template.dart' as _ref3;
import 'template_ref.template.dart' as _ref4;
import 'view_ref.template.dart' as _ref5;

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
}
