// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'tools.dart';
export 'tools.dart';
import 'common_tools.template.dart' as _ref0;
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
