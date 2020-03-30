// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'app_view_utils.dart';
export 'app_view_utils.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'exceptions.template.dart' as _ref0;
import 'package:angular/di.template.dart' as _ref1;
import 'package:angular/src/core/application_tokens.template.dart' as _ref2;
import 'package:angular/src/core/change_detection/change_detection.template.dart' as _ref3;
import 'package:angular/src/core/security.template.dart' as _ref4;
import 'package:angular/src/runtime.template.dart' as _ref5;
import 'package:angular/src/runtime/dom_events.template.dart' as _ref6;
import 'package:angular/src/core/security.dart' as _i1;
import 'package:angular/src/runtime/dom_events.dart' as _i2;
import 'package:angular/src/core/di/opaque_token.dart' as _i3;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(AppViewUtils, (String p0, _i1.SanitizationService p1, _i2.EventManager p2) => AppViewUtils(p0, p1, p2));
  _ngRef.registerDependencies(AppViewUtils, const [
    [_ngRef.Inject(_i3.OpaqueToken<String>('APP_ID'))],
    [_i1.SanitizationService],
    [_i2.EventManager]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
