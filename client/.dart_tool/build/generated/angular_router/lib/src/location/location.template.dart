// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'location.dart';
export 'location.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'location_strategy.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_router/src/location/location_strategy.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(Location, (_i1.LocationStrategy p0) => Location(p0));
  _ngRef.registerDependencies(Location, const [
    [_i1.LocationStrategy]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
}
