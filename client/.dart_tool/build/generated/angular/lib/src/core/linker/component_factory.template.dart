// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'component_factory.dart';
export 'component_factory.dart';
import '../change_detection/change_detection.template.dart' as _ref0;
import 'app_view.template.dart' as _ref1;
import 'package:angular/src/core/di.template.dart' as _ref2;
import 'view_ref.template.dart' as _ref3;

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
}
