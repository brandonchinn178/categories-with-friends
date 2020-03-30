define(['dart_sdk', 'packages/angular/src/core/application_tokens.template', 'packages/angular/src/core/change_detection/change_detection.template'], function(dart_sdk, packages__angular__src__core__application_tokens$46template, packages__angular__src__core__change_detection__change_detection$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const application_tokens$46template = packages__angular__src__core__application_tokens$46template.src__core__application_tokens$46template;
  const change_detection$46template = packages__angular__src__core__application_tokens$46template.src__core__change_detection$46template;
  const zone$46template = packages__angular__src__core__application_tokens$46template.src__core__zone$46template;
  const di$46template = packages__angular__src__core__change_detection__change_detection$46template.src__core__di$46template;
  const metadata$46template = packages__angular__src__core__change_detection__change_detection$46template.src__core__metadata$46template;
  const exception_handler$46template = packages__angular__src__core__change_detection__change_detection$46template.src__facade__exception_handler$46template;
  const core$46template = Object.create(dart.library);
  const CT = Object.create(null);
  core$46template.initReflector = function initReflector() {
    if (dart.test(core$46template._visited)) {
      return;
    }
    core$46template._visited = true;
    application_tokens$46template.initReflector();
    change_detection$46template.initReflector();
    di$46template.initReflector();
    metadata$46template.initReflector();
    zone$46template.initReflector();
    exception_handler$46template.initReflector();
  };
  dart.defineLazy(core$46template, {
    /*core$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular/core.template", {
    "package:angular/core.template.dart": core$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["core.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;AAeE,kBAAI;AACF;;AAEa,IAAf,2BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAbI,wBAAQ;YAAG","file":"core.template.ddc.js"}');
  // Exports:
  return {
    core$46template: core$46template
  };
});

//# sourceMappingURL=core.template.ddc.js.map
