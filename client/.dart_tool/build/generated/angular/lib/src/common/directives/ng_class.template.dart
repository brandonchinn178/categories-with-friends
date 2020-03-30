// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'ng_class.dart';
export 'ng_class.dart';
import 'package:angular/core.template.dart' as _ref0;
import 'package:angular/src/core/change_detection/differs/default_iterable_differ.template.dart' as _ref1;
import 'package:angular/src/core/change_detection/differs/default_keyvalue_differ.template.dart' as _ref2;
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
