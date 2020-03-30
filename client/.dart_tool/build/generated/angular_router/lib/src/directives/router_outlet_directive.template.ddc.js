define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection.template', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular/angular.template'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection$46template, packages__angular__src__core__change_detection__change_detection, packages__angular_router__src__directives__router_outlet_directive, packages__angular__angular$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const runtime$46template = packages__angular__src__core__change_detection__change_detection$46template.src__runtime$46template;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const decorators = packages__angular__src__core__change_detection__change_detection.src__core__di__decorators;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const path_location_strategy = packages__angular_router__src__directives__router_outlet_directive.src__location__path_location_strategy;
  const platform_location = packages__angular_router__src__directives__router_outlet_directive.src__location__platform_location;
  const location = packages__angular_router__src__directives__router_outlet_directive.src__location__location;
  const location_strategy = packages__angular_router__src__directives__router_outlet_directive.src__location__location_strategy;
  const hash_location_strategy = packages__angular_router__src__directives__router_outlet_directive.src__location__hash_location_strategy;
  const browser_platform_location = packages__angular_router__src__directives__router_outlet_directive.src__location__browser_platform_location;
  const router_impl = packages__angular_router__src__directives__router_outlet_directive.src__router__router_impl;
  const router_hook = packages__angular_router__src__directives__router_outlet_directive.src__router_hook;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const navigation_params$46template = Object.create(dart.library);
  const path_location_strategy$46template = Object.create(dart.library);
  const platform_location$46template = Object.create(dart.library);
  const location_strategy$46template = Object.create(dart.library);
  const location$46template = Object.create(dart.library);
  const hash_location_strategy$46template = Object.create(dart.library);
  const router$46template = Object.create(dart.library);
  const router_state$46template = Object.create(dart.library);
  const url$46template = Object.create(dart.library);
  const route_path$46template = Object.create(dart.library);
  const route_definition$46template = Object.create(dart.library);
  const location$46template$ = Object.create(dart.library);
  const browser_platform_location$46template = Object.create(dart.library);
  const base_href$46template = Object.create(dart.library);
  const router_outlet_directive$46template = Object.create(dart.library);
  const router_hook$46template = Object.create(dart.library);
  const router_outlet_token$46template = Object.create(dart.library);
  const lifecycle$46template = Object.create(dart.library);
  const router_impl$46template = Object.create(dart.library);
  let PlatformLocationAndStringToPathLocationStrategy = () => (PlatformLocationAndStringToPathLocationStrategy = dart.constFn(dart.fnType(path_location_strategy.PathLocationStrategy, [platform_location.PlatformLocation, core.String])))();
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(opaque_token.OpaqueToken$(core.String)))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let LocationStrategyToLocation = () => (LocationStrategyToLocation = dart.constFn(dart.fnType(location.Location, [location_strategy.LocationStrategy])))();
  let PlatformLocationAndStringToHashLocationStrategy = () => (PlatformLocationAndStringToHashLocationStrategy = dart.constFn(dart.fnType(hash_location_strategy.HashLocationStrategy, [platform_location.PlatformLocation, core.String])))();
  let VoidToBrowserPlatformLocation = () => (VoidToBrowserPlatformLocation = dart.constFn(dart.fnType(browser_platform_location.BrowserPlatformLocation, [])))();
  let LocationAndRouterHookToRouterImpl = () => (LocationAndRouterHookToRouterImpl = dart.constFn(dart.fnType(router_impl.RouterImpl, [location.Location, router_hook.RouterHook])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.wrapType(platform_location.PlatformLocation);
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], core.Object);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: OpaqueTokenOfString().prototype,
        [OpaqueToken__uniqueName]: "appBaseHref"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: decorators.Inject.prototype,
        [Inject_token]: C5 || CT.C5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: decorators.Optional.prototype
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C6 || CT.C6], core.Object);
    },
    get C0() {
      return C0 = dart.constList([C1 || CT.C1, C3 || CT.C3], ListOfObject());
    },
    get C9() {
      return C9 = dart.wrapType(location_strategy.LocationStrategy);
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], core.Object);
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], ListOfObject());
    },
    get C12() {
      return C12 = dart.wrapType(location.Location);
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], core.Object);
    },
    get C14() {
      return C14 = dart.wrapType(router_hook.RouterHook);
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C6 || CT.C6], core.Object);
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C13 || CT.C13], ListOfObject());
    }
  });
  navigation_params$46template.initReflector = function initReflector() {
    if (dart.test(navigation_params$46template._visited)) {
      return;
    }
    navigation_params$46template._visited = true;
    runtime$46template.initReflector();
  };
  dart.defineLazy(navigation_params$46template, {
    /*navigation_params$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let C2;
  let C1;
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C5;
  const Inject_token = dart.privateName(decorators, "Inject.token");
  let C4;
  let C6;
  let C3;
  let C0;
  path_location_strategy$46template.initReflector = function initReflector$() {
    if (dart.test(path_location_strategy$46template._visited)) {
      return;
    }
    path_location_strategy$46template._visited = true;
    reflector.registerFactory(dart.wrapType(path_location_strategy.PathLocationStrategy), dart.fn((p0, p1) => new path_location_strategy.PathLocationStrategy.new(p0, p1), PlatformLocationAndStringToPathLocationStrategy()));
    reflector.registerDependencies(dart.wrapType(path_location_strategy.PathLocationStrategy), C0 || CT.C0);
    location$46template.initReflector();
    location_strategy$46template.initReflector();
    angular$46template.initReflector();
    platform_location$46template.initReflector();
  };
  dart.defineLazy(path_location_strategy$46template, {
    /*path_location_strategy$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  platform_location$46template.initReflector = function initReflector$0() {
  };
  location_strategy$46template.initReflector = function initReflector$1() {
    if (dart.test(location_strategy$46template._visited)) {
      return;
    }
    location_strategy$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.defineLazy(location_strategy$46template, {
    /*location_strategy$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let C9;
  let C8;
  let C7;
  location$46template.initReflector = function initReflector$2() {
    if (dart.test(location$46template._visited)) {
      return;
    }
    location$46template._visited = true;
    reflector.registerFactory(dart.wrapType(location.Location), dart.fn(p0 => new location.Location.new(p0), LocationStrategyToLocation()));
    reflector.registerDependencies(dart.wrapType(location.Location), C7 || CT.C7);
    location_strategy$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(location$46template, {
    /*location$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  hash_location_strategy$46template.initReflector = function initReflector$3() {
    if (dart.test(hash_location_strategy$46template._visited)) {
      return;
    }
    hash_location_strategy$46template._visited = true;
    reflector.registerFactory(dart.wrapType(hash_location_strategy.HashLocationStrategy), dart.fn((p0, p1) => new hash_location_strategy.HashLocationStrategy.new(p0, p1), PlatformLocationAndStringToHashLocationStrategy()));
    reflector.registerDependencies(dart.wrapType(hash_location_strategy.HashLocationStrategy), C0 || CT.C0);
    location$46template.initReflector();
    location_strategy$46template.initReflector();
    angular$46template.initReflector();
    platform_location$46template.initReflector();
  };
  dart.defineLazy(hash_location_strategy$46template, {
    /*hash_location_strategy$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  router$46template.initReflector = function initReflector$4() {
    if (dart.test(router$46template._visited)) {
      return;
    }
    router$46template._visited = true;
    router_outlet_directive$46template.initReflector();
    navigation_params$46template.initReflector();
    router_state$46template.initReflector();
  };
  dart.defineLazy(router$46template, {
    /*router$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  router_state$46template.initReflector = function initReflector$5() {
    if (dart.test(router_state$46template._visited)) {
      return;
    }
    router_state$46template._visited = true;
    route_definition$46template.initReflector();
    route_path$46template.initReflector();
    url$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(router_state$46template, {
    /*router_state$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  url$46template.initReflector = function initReflector$6() {
  };
  route_path$46template.initReflector = function initReflector$7() {
    if (dart.test(route_path$46template._visited)) {
      return;
    }
    route_path$46template._visited = true;
    location$46template$.initReflector();
    route_definition$46template.initReflector();
    url$46template.initReflector();
  };
  dart.defineLazy(route_path$46template, {
    /*route_path$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  route_definition$46template.initReflector = function initReflector$8() {
    if (dart.test(route_definition$46template._visited)) {
      return;
    }
    route_definition$46template._visited = true;
    angular$46template.initReflector();
    runtime$46template.initReflector();
    route_path$46template.initReflector();
    url$46template.initReflector();
  };
  dart.defineLazy(route_definition$46template, {
    /*route_definition$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  location$46template$.initReflector = function initReflector$9() {
    if (dart.test(location$46template$._visited)) {
      return;
    }
    location$46template$._visited = true;
    browser_platform_location$46template.initReflector();
    hash_location_strategy$46template.initReflector();
    location$46template.initReflector();
    location_strategy$46template.initReflector();
    path_location_strategy$46template.initReflector();
    platform_location$46template.initReflector();
  };
  dart.defineLazy(location$46template$, {
    /*location$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  browser_platform_location$46template.initReflector = function initReflector$10() {
    if (dart.test(browser_platform_location$46template._visited)) {
      return;
    }
    browser_platform_location$46template._visited = true;
    reflector.registerFactory(dart.wrapType(browser_platform_location.BrowserPlatformLocation), dart.fn(() => new browser_platform_location.BrowserPlatformLocation.new(), VoidToBrowserPlatformLocation()));
    base_href$46template.initReflector();
    angular$46template.initReflector();
    platform_location$46template.initReflector();
  };
  dart.defineLazy(browser_platform_location$46template, {
    /*browser_platform_location$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  base_href$46template.initReflector = function initReflector$11() {
  };
  router_outlet_directive$46template.initReflector = function initReflector$12() {
    if (dart.test(router_outlet_directive$46template._visited)) {
      return;
    }
    router_outlet_directive$46template._visited = true;
    lifecycle$46template.initReflector();
    route_definition$46template.initReflector();
    router$46template.initReflector();
    router_outlet_token$46template.initReflector();
    router_state$46template.initReflector();
    router_hook$46template.initReflector();
    angular$46template.initReflector();
    runtime$46template.initReflector();
  };
  dart.defineLazy(router_outlet_directive$46template, {
    /*router_outlet_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  router_hook$46template.initReflector = function initReflector$13() {
    if (dart.test(router_hook$46template._visited)) {
      return;
    }
    router_hook$46template._visited = true;
    navigation_params$46template.initReflector();
    router_state$46template.initReflector();
  };
  dart.defineLazy(router_hook$46template, {
    /*router_hook$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  router_outlet_token$46template.initReflector = function initReflector$14() {
    if (dart.test(router_outlet_token$46template._visited)) {
      return;
    }
    router_outlet_token$46template._visited = true;
    router_outlet_directive$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(router_outlet_token$46template, {
    /*router_outlet_token$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  lifecycle$46template.initReflector = function initReflector$15() {
    if (dart.test(lifecycle$46template._visited)) {
      return;
    }
    lifecycle$46template._visited = true;
    router_state$46template.initReflector();
  };
  dart.defineLazy(lifecycle$46template, {
    /*lifecycle$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let C12;
  let C11;
  let C14;
  let C13;
  let C10;
  router_impl$46template.initReflector = function initReflector$16() {
    if (dart.test(router_impl$46template._visited)) {
      return;
    }
    router_impl$46template._visited = true;
    reflector.registerFactory(dart.wrapType(router_impl.RouterImpl), dart.fn((p0, p1) => new router_impl.RouterImpl.new(p0, p1), LocationAndRouterHookToRouterImpl()));
    reflector.registerDependencies(dart.wrapType(router_impl.RouterImpl), C10 || CT.C10);
    router_outlet_directive$46template.initReflector();
    lifecycle$46template.initReflector();
    location$46template$.initReflector();
    route_definition$46template.initReflector();
    router_hook$46template.initReflector();
    url$46template.initReflector();
    navigation_params$46template.initReflector();
    angular$46template.initReflector();
    router$46template.initReflector();
    router_outlet_token$46template.initReflector();
    router_state$46template.initReflector();
  };
  dart.defineLazy(router_impl$46template, {
    /*router_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_router/src/directives/router_outlet_directive.template", {
    "package:angular_router/src/router/navigation_params.template.dart": navigation_params$46template,
    "package:angular_router/src/location/path_location_strategy.template.dart": path_location_strategy$46template,
    "package:angular_router/src/location/platform_location.template.dart": platform_location$46template,
    "package:angular_router/src/location/location_strategy.template.dart": location_strategy$46template,
    "package:angular_router/src/location/location.template.dart": location$46template,
    "package:angular_router/src/location/hash_location_strategy.template.dart": hash_location_strategy$46template,
    "package:angular_router/src/router/router.template.dart": router$46template,
    "package:angular_router/src/router/router_state.template.dart": router_state$46template,
    "package:angular_router/src/url.template.dart": url$46template,
    "package:angular_router/src/route_path.template.dart": route_path$46template,
    "package:angular_router/src/route_definition.template.dart": route_definition$46template,
    "package:angular_router/src/location.template.dart": location$46template$,
    "package:angular_router/src/location/browser_platform_location.template.dart": browser_platform_location$46template,
    "package:angular_router/src/location/base_href.template.dart": base_href$46template,
    "package:angular_router/src/directives/router_outlet_directive.template.dart": router_outlet_directive$46template,
    "package:angular_router/src/router_hook.template.dart": router_hook$46template,
    "package:angular_router/src/router/router_outlet_token.template.dart": router_outlet_token$46template,
    "package:angular_router/src/lifecycle.template.dart": lifecycle$46template,
    "package:angular_router/src/router/router_impl.template.dart": router_impl$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../router/navigation_params.template.dart","../location/path_location_strategy.template.dart","../location/platform_location.template.dart","../location/location_strategy.template.dart","../location/location.template.dart","../location/hash_location_strategy.template.dart","../router/router.template.dart","../router/router_state.template.dart","../url.template.dart","../route_path.template.dart","../route_definition.template.dart","../location.template.dart","../location/browser_platform_location.template.dart","../location/base_href.template.dart","router_outlet_directive.template.dart","../router_hook.template.dart","../router/router_outlet_token.template.dart","../lifecycle.template.dart","../router/router_impl.template.dart"],"names":[],"mappings":"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","file":"router_outlet_directive.template.ddc.js"}');
  // Exports:
  return {
    src__router__navigation_params$46template: navigation_params$46template,
    src__location__path_location_strategy$46template: path_location_strategy$46template,
    src__location__platform_location$46template: platform_location$46template,
    src__location__location_strategy$46template: location_strategy$46template,
    src__location__location$46template: location$46template,
    src__location__hash_location_strategy$46template: hash_location_strategy$46template,
    src__router__router$46template: router$46template,
    src__router__router_state$46template: router_state$46template,
    src__url$46template: url$46template,
    src__route_path$46template: route_path$46template,
    src__route_definition$46template: route_definition$46template,
    src__location$46template: location$46template$,
    src__location__browser_platform_location$46template: browser_platform_location$46template,
    src__location__base_href$46template: base_href$46template,
    src__directives__router_outlet_directive$46template: router_outlet_directive$46template,
    src__router_hook$46template: router_hook$46template,
    src__router__router_outlet_token$46template: router_outlet_token$46template,
    src__lifecycle$46template: lifecycle$46template,
    src__router__router_impl$46template: router_impl$46template
  };
});

//# sourceMappingURL=router_outlet_directive.template.ddc.js.map
