// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'ng_if.dart';
export 'ng_if.dart';
import 'package:angular/core.template.dart' as _ref0;
import 'package:angular/src/core/linker.template.dart' as _ref1;
import 'package:angular/src/core/linker/app_view_utils.template.dart' as _ref2;

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
