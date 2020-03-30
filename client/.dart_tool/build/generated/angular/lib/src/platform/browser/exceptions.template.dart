// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'exceptions.dart';
export 'exceptions.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/core.template.dart' as _ref0;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(BrowserExceptionHandler, () => BrowserExceptionHandler());
  _ref0.initReflector();
}
