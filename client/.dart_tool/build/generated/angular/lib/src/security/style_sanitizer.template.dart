// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'style_sanitizer.dart';
export 'style_sanitizer.dart';
import 'package:angular/src/runtime.template.dart' as _ref0;
import 'url_sanitizer.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
