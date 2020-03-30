// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'browser_platform_location.dart';
export 'browser_platform_location.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'base_href.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'platform_location.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(BrowserPlatformLocation, () => BrowserPlatformLocation());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
