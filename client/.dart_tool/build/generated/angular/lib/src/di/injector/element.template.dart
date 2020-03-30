// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'element.dart';
export 'element.dart';
import '../../core/linker/app_view.template.dart' as _ref0;
import 'hierarchical.template.dart' as _ref1;
import 'injector.template.dart' as _ref2;

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
