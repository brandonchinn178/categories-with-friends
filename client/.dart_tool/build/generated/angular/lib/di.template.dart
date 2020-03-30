// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'di.dart';
export 'di.dart';
import 'src/core/change_detection/pipe_transform.template.dart' as _ref0;
import 'src/core/di.template.dart' as _ref1;
import 'src/core/metadata.template.dart' as _ref2;
import 'src/core/metadata.template.dart' as _ref3;
import 'src/core/zone/ng_zone.template.dart' as _ref4;
import 'src/facade/exception_handler.template.dart' as _ref5;

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
}
