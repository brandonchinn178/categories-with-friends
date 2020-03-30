// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'component_loader.dart';
export 'component_loader.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../../di/injector/injector.template.dart' as _ref0;
import '../di/decorators.template.dart' as _ref1;
import 'component_factory.template.dart' as _ref2;
import 'view_container_ref.template.dart' as _ref3;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(ComponentLoader, () => ComponentLoader());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
