// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'mock_location_strategy.dart';
export 'mock_location_strategy.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_router/src/location/location_strategy.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(MockLocationStrategy, () => MockLocationStrategy());
  _ref0.initReflector();
  _ref1.initReflector();
}
