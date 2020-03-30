// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'modules.dart';
export 'modules.dart';
import 'modules.template.dart' as _ref0;
import 'package:angular/src/core/application_ref.template.dart' as _ref1;
import 'package:angular/src/core/application_tokens.template.dart' as _ref2;
import 'package:angular/src/core/di.template.dart' as _ref3;
import 'package:angular/src/core/linker/app_view_utils.template.dart' as _ref4;
import 'package:angular/src/core/linker/component_loader.template.dart' as _ref5;
import 'package:angular/src/core/linker/dynamic_component_loader.template.dart' as _ref6;
import 'package:angular/src/core/testability/testability.template.dart' as _ref7;
import 'package:angular/src/core/zone.template.dart' as _ref8;
import 'package:angular/src/di/providers.template.dart' as _ref9;
import 'package:angular/src/facade/exception_handler.template.dart' as _ref10;
import 'package:angular/src/platform/browser/exceptions.template.dart' as _ref11;
import 'package:angular/src/runtime.template.dart' as _ref12;
import 'package:angular/src/runtime/dom_events.template.dart' as _ref13;
import 'package:angular/src/security/dom_sanitization_service.template.dart' as _ref14;
import 'package:angular/src/security/dom_sanitization_service_impl.template.dart' as _ref15;
import 'package:angular/src/di/injector/injector.dart' as _i1;
import 'package:angular/src/di/injector/hierarchical.dart' as _i2;
import 'package:angular/src/bootstrap/modules.dart' as _i3;
import 'package:angular/src/core/linker/component_loader.dart' as _i4;
import 'package:angular/src/security/dom_sanitization_service_impl.dart' as _i5;
import 'package:angular/src/platform/browser/exceptions.dart' as _i6;
import 'package:angular/src/security/dom_sanitization_service.dart' as _i7;
import 'package:angular/src/core/linker/dynamic_component_loader.dart' as _i8;
import 'package:angular/src/core/di/opaque_token.dart' as _i9;
import 'package:angular/src/core/security.dart' as _i10;
import 'package:angular/src/facade/exception_handler.dart' as _i11;

_i1.Injector minimalApp$Injector([_i1.Injector parent]) => _Injector$minimalApp._(parent);

class _Injector$minimalApp extends _i2.HierarchicalInjector {
  _Injector$minimalApp._([_i1.Injector parent]) : super(parent);

  _i3.ThrowingSlowComponentLoader _field0;

  _i4.ComponentLoader _field1;

  dynamic _field2;

  _i5.DomSanitizationServiceImpl _field3;

  _i6.BrowserExceptionHandler _field5;

  _i3.ThrowingSlowComponentLoader _getThrowingSlowComponentLoader$0() => _field0 ??= _i3.ThrowingSlowComponentLoader();
  _i4.ComponentLoader _getComponentLoader$1() => _field1 ??= _i4.ComponentLoader();
  dynamic _getdynamic$2() => _field2 ??= _i3.createRandomAppId();
  _i5.DomSanitizationServiceImpl _getDomSanitizationServiceImpl$3() => _field3 ??= _i5.DomSanitizationServiceImpl();
  dynamic _getExisting$4() => this.get(_i7.DomSanitizationService);
  _i6.BrowserExceptionHandler _getBrowserExceptionHandler$5() => _field5 ??= _i6.BrowserExceptionHandler();
  _i1.Injector _getInjector$6() => this;
  @override
  Object injectFromSelfOptional(Object token, [Object orElse = _i1.throwIfNotFound]) {
    if (identical(token, _i8.SlowComponentLoader)) {
      return _getThrowingSlowComponentLoader$0();
    }
    if (identical(token, _i4.ComponentLoader)) {
      return _getComponentLoader$1();
    }
    if (identical(token, const _i9.OpaqueToken<String>('APP_ID'))) {
      return _getdynamic$2();
    }
    if (identical(token, _i7.DomSanitizationService)) {
      return _getDomSanitizationServiceImpl$3();
    }
    if (identical(token, _i10.SanitizationService)) {
      return _getExisting$4();
    }
    if (identical(token, _i11.ExceptionHandler)) {
      return _getBrowserExceptionHandler$5();
    }
    if (identical(token, _i1.Injector)) {
      return _getInjector$6();
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
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
  _ref10.initReflector();
  _ref11.initReflector();
  _ref12.initReflector();
  _ref13.initReflector();
  _ref14.initReflector();
  _ref15.initReflector();
}
