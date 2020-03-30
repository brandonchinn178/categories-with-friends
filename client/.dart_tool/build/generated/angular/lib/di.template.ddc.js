define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection.template'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const pipe_transform$46template = packages__angular__src__core__change_detection__change_detection$46template.src__core__change_detection__pipe_transform$46template;
  const di$46template = packages__angular__src__core__change_detection__change_detection$46template.src__core__di$46template;
  const metadata$46template = packages__angular__src__core__change_detection__change_detection$46template.src__core__metadata$46template;
  const ng_zone$46template = packages__angular__src__core__change_detection__change_detection$46template.src__core__zone__ng_zone$46template;
  const exception_handler$46template = packages__angular__src__core__change_detection__change_detection$46template.src__facade__exception_handler$46template;
  const di$46template$ = Object.create(dart.library);
  const CT = Object.create(null);
  di$46template$.initReflector = function initReflector() {
    if (dart.test(di$46template$._visited)) {
      return;
    }
    di$46template$._visited = true;
    pipe_transform$46template.initReflector();
    di$46template.initReflector();
    metadata$46template.initReflector();
    metadata$46template.initReflector();
    ng_zone$46template.initReflector();
    exception_handler$46template.initReflector();
  };
  dart.defineLazy(di$46template$, {
    /*di$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular/di.template", {
    "package:angular/di.template.dart": di$46template$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["di.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAeE,kBAAI;AACF;;AAEa,IAAf,0BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAbI,uBAAQ;YAAG","file":"di.template.ddc.js"}');
  // Exports:
  return {
    di$46template: di$46template$
  };
});

//# sourceMappingURL=di.template.ddc.js.map
