define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/angular/angular", {
    "package:angular/angular.dart": angular
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"angular.ddc.js"}');
  // Exports:
  return {
    angular: angular
  };
});

//# sourceMappingURL=angular.ddc.js.map
