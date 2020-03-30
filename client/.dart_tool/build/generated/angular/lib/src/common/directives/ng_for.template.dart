// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'ng_for.dart';
export 'ng_for.dart';
import '../../core/change_detection/differs/default_iterable_differ.template.dart' as _ref0;
import '../../core/linker.template.dart' as _ref1;
import 'package:angular/core.template.dart' as _ref2;
import 'package:angular/src/runtime.template.dart' as _ref3;

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
