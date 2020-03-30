define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular_router = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/angular_router/angular_router", {
    "package:angular_router/angular_router.dart": angular_router
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"angular_router.ddc.js"}');
  // Exports:
  return {
    angular_router: angular_router
  };
});

//# sourceMappingURL=angular_router.ddc.js.map
