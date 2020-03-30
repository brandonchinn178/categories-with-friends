// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'main.dart';
export 'main.dart';
import 'main.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular_router/angular_router.template.dart' as _ref2;
import 'package:router_example/app_component.template.dart' as _ref3;
import 'package:angular/src/di/injector/injector.dart' as _i1;
import 'package:angular/src/di/injector/hierarchical.dart' as _i2;
import 'package:angular_router/src/router/router_impl.dart' as _i3;
import 'package:angular_router/src/location/location.dart' as _i4;
import 'package:angular_router/src/location/browser_platform_location.dart' as _i5;
import 'package:angular_router/src/location/hash_location_strategy.dart' as _i6;
import 'package:angular_router/src/router_hook.dart' as _i7;
import 'package:angular_router/src/location/location_strategy.dart' as _i8;
import 'package:angular_router/src/location/platform_location.dart' as _i9;
import 'package:angular/src/core/di/opaque_token.dart' as _i10;
import 'package:angular_router/src/router/router.dart' as _i11;

_i1.Injector injector$Injector([_i1.Injector parent]) => _Injector$injector._(parent);

class _Injector$injector extends _i2.HierarchicalInjector {
  _Injector$injector._([_i1.Injector parent]) : super(parent);

  _i3.RouterImpl _field0;

  _i4.Location _field1;

  _i5.BrowserPlatformLocation _field2;

  _i6.HashLocationStrategy _field3;

  _i3.RouterImpl _getRouterImpl$0() => _field0 ??= _i3.RouterImpl(this.get(_i4.Location), provideUntyped(_i7.RouterHook, null));
  _i4.Location _getLocation$1() => _field1 ??= _i4.Location(this.get(_i8.LocationStrategy));
  _i5.BrowserPlatformLocation _getBrowserPlatformLocation$2() => _field2 ??= _i5.BrowserPlatformLocation();
  _i6.HashLocationStrategy _getHashLocationStrategy$3() => _field3 ??= _i6.HashLocationStrategy(this.get(_i9.PlatformLocation), provideUntyped(const _i10.OpaqueToken<String>('appBaseHref'), null));
  _i1.Injector _getInjector$4() => this;
  @override
  Object injectFromSelfOptional(Object token, [Object orElse = _i1.throwIfNotFound]) {
    if (identical(token, _i11.Router)) {
      return _getRouterImpl$0();
    }
    if (identical(token, _i4.Location)) {
      return _getLocation$1();
    }
    if (identical(token, _i9.PlatformLocation)) {
      return _getBrowserPlatformLocation$2();
    }
    if (identical(token, _i8.LocationStrategy)) {
      return _getHashLocationStrategy$3();
    }
    if (identical(token, _i1.Injector)) {
      return _getInjector$4();
    }
    return orElse;
  }
}

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
