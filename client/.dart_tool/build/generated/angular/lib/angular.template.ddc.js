define(['dart_sdk', 'packages/angular/core.template', 'packages/angular/src/bootstrap/run.template', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, packages__angular__core$46template, packages__angular__src__bootstrap__run$46template, packages__angular__src__bootstrap__modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$46template = packages__angular__core$46template.core$46template;
  const run$46template = packages__angular__src__bootstrap__run$46template.src__bootstrap__run$46template;
  const common_directives$46template = packages__angular__src__bootstrap__run$46template.src__common__common_directives$46template;
  const directives$46template = packages__angular__src__bootstrap__run$46template.src__common__directives$46template;
  const pipes$46template = packages__angular__src__bootstrap__run$46template.src__common__pipes$46template;
  const linker$46template = packages__angular__src__bootstrap__run$46template.src__core__linker$46template;
  const tools$46template = packages__angular__src__bootstrap__run$46template.src__platform__browser__tools__tools$46template;
  const application_ref$46template = packages__angular__src__bootstrap__modules.src__core__application_ref$46template;
  const testability$46template = packages__angular__src__bootstrap__modules.src__core__testability__testability$46template;
  const angular$46template = Object.create(dart.library);
  const CT = Object.create(null);
  angular$46template.initReflector = function initReflector() {
    if (dart.test(angular$46template._visited)) {
      return;
    }
    angular$46template._visited = true;
    core$46template.initReflector();
    run$46template.initReflector();
    common_directives$46template.initReflector();
    directives$46template.initReflector();
    pipes$46template.initReflector();
    application_ref$46template.initReflector();
    linker$46template.initReflector();
    testability$46template.initReflector();
    tools$46template.initReflector();
  };
  dart.defineLazy(angular$46template, {
    /*angular$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular/angular.template", {
    "package:angular/angular.template.dart": angular$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["angular.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;AAkBE,kBAAI;AACF;;AAEa,IAAf,8BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAhBI,2BAAQ;YAAG","file":"angular.template.ddc.js"}');
  // Exports:
  return {
    angular$46template: angular$46template
  };
});

//# sourceMappingURL=angular.template.ddc.js.map
