// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'angular.dart';
export 'angular.dart';
import 'core.template.dart' as _ref0;
import 'src/bootstrap/run.template.dart' as _ref1;
import 'src/common/common_directives.template.dart' as _ref2;
import 'src/common/directives.template.dart' as _ref3;
import 'src/common/pipes.template.dart' as _ref4;
import 'src/core/application_ref.template.dart' as _ref5;
import 'src/core/linker.template.dart' as _ref6;
import 'src/core/testability/testability.template.dart' as _ref7;
import 'src/platform/browser/tools/tools.template.dart' as _ref8;

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
}
