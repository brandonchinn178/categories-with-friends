// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'dom_sanitization_service_impl.dart';
export 'dom_sanitization_service_impl.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../core/di.template.dart' as _ref0;
import '../core/security.template.dart' as _ref1;
import 'dom_sanitization_service.template.dart' as _ref2;
import 'html_sanitizer.template.dart' as _ref3;
import 'package:angular/src/runtime.template.dart' as _ref4;
import 'style_sanitizer.template.dart' as _ref5;
import 'url_sanitizer.template.dart' as _ref6;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(DomSanitizationServiceImpl, () => DomSanitizationServiceImpl());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
