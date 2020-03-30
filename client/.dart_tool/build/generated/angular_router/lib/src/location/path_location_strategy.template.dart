// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'path_location_strategy.dart';
export 'path_location_strategy.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'location.template.dart' as _ref0;
import 'location_strategy.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'platform_location.template.dart' as _ref3;
import 'package:angular_router/src/location/platform_location.dart' as _i1;
import 'package:angular/src/core/di/opaque_token.dart' as _i2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(PathLocationStrategy, (_i1.PlatformLocation p0, String p1) => PathLocationStrategy(p0, p1));
  _ngRef.registerDependencies(PathLocationStrategy, const [
    [_i1.PlatformLocation],
    [_ngRef.Inject(_i2.OpaqueToken<String>('appBaseHref')), _ngRef.Optional()]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
