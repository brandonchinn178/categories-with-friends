// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'empty.dart';
export 'empty.dart';
import 'hierarchical.template.dart' as _ref0;
import 'injector.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
