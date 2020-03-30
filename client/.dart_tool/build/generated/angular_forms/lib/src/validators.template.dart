// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'validators.dart';
export 'validators.dart';
import 'directives/validators.template.dart' as _ref0;
import 'model.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;

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
