define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const di = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/angular/di", {
    "package:angular/di.dart": di
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"di.ddc.js"}');
  // Exports:
  return {
    di: di
  };
});

//# sourceMappingURL=di.ddc.js.map
