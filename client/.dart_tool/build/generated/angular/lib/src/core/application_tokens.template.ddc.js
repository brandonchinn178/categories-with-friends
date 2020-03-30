define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection.template'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const di$46template = packages__angular__src__core__change_detection__change_detection$46template.src__core__di$46template;
  const ng_zone$46template = packages__angular__src__core__change_detection__change_detection$46template.src__core__zone__ng_zone$46template;
  const change_detection$46template = packages__angular__src__core__change_detection__change_detection$46template.src__core__change_detection__change_detection$46template;
  const default_iterable_differ$46template = packages__angular__src__core__change_detection__change_detection$46template.src__core__change_detection__differs__default_iterable_differ$46template;
  const application_tokens$46template = Object.create(dart.library);
  const zone$46template = Object.create(dart.library);
  const component_state$46template = Object.create(dart.library);
  const change_detection$46template$ = Object.create(dart.library);
  const CT = Object.create(null);
  application_tokens$46template.initReflector = function initReflector() {
    if (dart.test(application_tokens$46template._visited)) {
      return;
    }
    application_tokens$46template._visited = true;
    di$46template.initReflector();
  };
  dart.defineLazy(application_tokens$46template, {
    /*application_tokens$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  zone$46template.initReflector = function initReflector$() {
    if (dart.test(zone$46template._visited)) {
      return;
    }
    zone$46template._visited = true;
    ng_zone$46template.initReflector();
  };
  dart.defineLazy(zone$46template, {
    /*zone$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  component_state$46template.initReflector = function initReflector$0() {
  };
  change_detection$46template$.initReflector = function initReflector$1() {
    if (dart.test(change_detection$46template$._visited)) {
      return;
    }
    change_detection$46template$._visited = true;
    change_detection$46template.initReflector();
    component_state$46template.initReflector();
    default_iterable_differ$46template.initReflector();
  };
  dart.defineLazy(change_detection$46template$, {
    /*change_detection$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular/src/core/application_tokens.template", {
    "package:angular/src/core/application_tokens.template.dart": application_tokens$46template,
    "package:angular/src/core/zone.template.dart": zone$46template,
    "package:angular/src/core/change_detection/component_state.template.dart": component_state$46template,
    "package:angular/src/core/change_detection.template.dart": change_detection$46template$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["application_tokens.template.dart","zone.template.dart","change_detection/component_state.template.dart","change_detection.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;AAUE,kBAAI;AACF;;AAEa,IAAf,yCAAW;AAEU,IAArB;EACF;;MARI,sCAAQ;YAAG;;;;;ACEb,kBAAI;AACF;;AAEa,IAAf,2BAAW;AAEU,IAArB;EACF;;MARI,wBAAQ;YAAG;;;;;ECAO;;ACIpB,kBAAI;AACF;;AAEa,IAAf,wCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,qCAAQ;YAAG","file":"application_tokens.template.ddc.js"}');
  // Exports:
  return {
    src__core__application_tokens$46template: application_tokens$46template,
    src__core__zone$46template: zone$46template,
    src__core__change_detection__component_state$46template: component_state$46template,
    src__core__change_detection$46template: change_detection$46template$
  };
});

//# sourceMappingURL=application_tokens.template.ddc.js.map
