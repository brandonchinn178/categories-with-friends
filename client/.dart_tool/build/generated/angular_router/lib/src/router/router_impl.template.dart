// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'router_impl.dart';
export 'router_impl.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../directives/router_outlet_directive.template.dart' as _ref0;
import '../lifecycle.template.dart' as _ref1;
import '../location.template.dart' as _ref2;
import '../route_definition.template.dart' as _ref3;
import '../router_hook.template.dart' as _ref4;
import '../url.template.dart' as _ref5;
import 'navigation_params.template.dart' as _ref6;
import 'package:angular/angular.template.dart' as _ref7;
import 'router.template.dart' as _ref8;
import 'router_outlet_token.template.dart' as _ref9;
import 'router_state.template.dart' as _ref10;
import 'package:angular_router/src/location/location.dart' as _i1;
import 'package:angular_router/src/router_hook.dart' as _i2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(RouterImpl, (_i1.Location p0, _i2.RouterHook p1) => RouterImpl(p0, p1));
  _ngRef.registerDependencies(RouterImpl, const [
    [_i1.Location],
    [_i2.RouterHook, _ngRef.Optional()]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
  _ref10.initReflector();
}
