// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'common_tools.dart';
export 'common_tools.dart';
import 'package:angular/src/core/application_ref.template.dart' as _ref0;
import 'package:angular/src/core/linker/component_factory.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
