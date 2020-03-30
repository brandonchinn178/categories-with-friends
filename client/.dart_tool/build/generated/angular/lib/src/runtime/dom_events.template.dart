// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'dom_events.dart';
export 'dom_events.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/core.template.dart' as _ref0;
import 'package:angular/src/core/zone/ng_zone.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(EventManager, (_i1.NgZone p0) => EventManager(p0));
  _ngRef.registerDependencies(EventManager, const [
    [_i1.NgZone]
  ]);
  _ref0.initReflector();
}
