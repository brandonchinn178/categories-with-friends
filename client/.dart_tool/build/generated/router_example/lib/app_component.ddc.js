define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_component = Object.create(dart.library);
  const CT = Object.create(null);
  app_component.AppComponent = class AppComponent extends core.Object {};
  (app_component.AppComponent.new = function() {
    ;
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  dart.setLibraryUri(app_component.AppComponent, "package:router_example/app_component.dart");
  dart.trackLibraries("packages/router_example/app_component", {
    "package:router_example/app_component.dart": app_component
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;;;EAmBoB","file":"app_component.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
});

//# sourceMappingURL=app_component.ddc.js.map
