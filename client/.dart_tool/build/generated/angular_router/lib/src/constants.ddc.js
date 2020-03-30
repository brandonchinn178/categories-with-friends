define(['dart_sdk', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/angular/src/core/change_detection/change_detection', 'packages/collection/src/comparators'], function(dart_sdk, packages__angular_router__src__directives__router_outlet_directive, packages__angular__src__core__change_detection__change_detection, packages__collection__src__comparators) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const url = packages__angular_router__src__directives__router_outlet_directive.src__url;
  const navigation_params = packages__angular_router__src__directives__router_outlet_directive.src__router__navigation_params;
  const router = packages__angular_router__src__directives__router_outlet_directive.src__router__router;
  const location = packages__angular_router__src__directives__router_outlet_directive.src__location__location;
  const router_state = packages__angular_router__src__directives__router_outlet_directive.src__router__router_state;
  const router_outlet_directive = packages__angular_router__src__directives__router_outlet_directive.src__directives__router_outlet_directive;
  const path_location_strategy = packages__angular_router__src__directives__router_outlet_directive.src__location__path_location_strategy;
  const location_strategy = packages__angular_router__src__directives__router_outlet_directive.src__location__location_strategy;
  const browser_platform_location = packages__angular_router__src__directives__router_outlet_directive.src__location__browser_platform_location;
  const platform_location = packages__angular_router__src__directives__router_outlet_directive.src__location__platform_location;
  const router_impl = packages__angular_router__src__directives__router_outlet_directive.src__router__router_impl;
  const hash_location_strategy = packages__angular_router__src__directives__router_outlet_directive.src__location__hash_location_strategy;
  const lifecycle_hooks = packages__angular__src__core__change_detection__change_detection.src__core__metadata__lifecycle_hooks;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const providers = packages__angular__src__core__change_detection__change_detection.src__di__providers;
  const equality = packages__collection__src__comparators.src__equality;
  const router_link_directive = Object.create(dart.library);
  const router_link_active_directive = Object.create(dart.library);
  const constants = Object.create(dart.library);
  const $onKeyPress = dartx.onKeyPress;
  const $isNotEmpty = dartx.isNotEmpty;
  const $classes = dartx.classes;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let DefaultEqualityOfNull = () => (DefaultEqualityOfNull = dart.constFn(equality.DefaultEquality$(core.Null)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: DefaultEqualityOfNull().prototype
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: equality.MapEquality.prototype,
        [MapEquality__valueEquality]: C1 || CT.C1,
        [MapEquality__keyEquality]: C1 || CT.C1
      });
    },
    get C3() {
      return C3 = dart.wrapType(router_outlet_directive.RouterOutlet);
    },
    get C4() {
      return C4 = dart.wrapType(router_link_directive.RouterLink);
    },
    get C5() {
      return C5 = dart.wrapType(router_link_active_directive.RouterLinkActive);
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], core.Type);
    },
    get C8() {
      return C8 = dart.wrapType(path_location_strategy.PathLocationStrategy);
    },
    get C9() {
      return C9 = dart.wrapType(location_strategy.LocationStrategy);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C8 || CT.C8,
        [Provider_token]: C9 || CT.C9
      });
    },
    get C11() {
      return C11 = dart.wrapType(browser_platform_location.BrowserPlatformLocation);
    },
    get C12() {
      return C12 = dart.wrapType(platform_location.PlatformLocation);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C11 || CT.C11,
        [Provider_token]: C12 || CT.C12
      });
    },
    get C14() {
      return C14 = dart.wrapType(location.Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C14 || CT.C14
      });
    },
    get C16() {
      return C16 = dart.wrapType(router_impl.RouterImpl);
    },
    get C17() {
      return C17 = dart.wrapType(router.Router);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C16 || CT.C16,
        [Provider_token]: C17 || CT.C17
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C10 || CT.C10, C13 || CT.C13, C15 || CT.C15], providers.Provider);
    },
    get C20() {
      return C20 = dart.wrapType(hash_location_strategy.HashLocationStrategy);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C20 || CT.C20,
        [Provider_token]: C9 || CT.C9
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C10 || CT.C10, C13 || CT.C13, C15 || CT.C15], providers.Provider);
    }
  });
  const _keyPressSubscription = dart.privateName(router_link_directive, "_keyPressSubscription");
  const _routerLink = dart.privateName(router_link_directive, "_routerLink");
  const _cachedVisibleHref = dart.privateName(router_link_directive, "_cachedVisibleHref");
  const _cachedUrl = dart.privateName(router_link_directive, "_cachedUrl");
  const _router$ = dart.privateName(router_link_directive, "_router");
  const _location$ = dart.privateName(router_link_directive, "_location");
  const _target$ = dart.privateName(router_link_directive, "_target");
  const _onKeyPress = dart.privateName(router_link_directive, "_onKeyPress");
  const _trigger = dart.privateName(router_link_directive, "_trigger");
  router_link_directive.RouterLink = class RouterLink extends core.Object {
    set routerLink(routerLink) {
      this[_routerLink] = routerLink;
      this[_cachedVisibleHref] = null;
      this[_cachedUrl] = null;
    }
    get url() {
      if (this[_cachedUrl] == null) {
        let parsedUrl = url.Url.parse(this[_routerLink]);
        this[_cachedUrl] = new url.Url.new(this[_location$].normalizePath(parsedUrl.path), {fragment: parsedUrl.fragment, queryParameters: parsedUrl.queryParameters});
      }
      return this[_cachedUrl];
    }
    get visibleHref() {
      let t0;
      t0 = this[_cachedVisibleHref];
      return t0 == null ? this[_cachedVisibleHref] = this[_location$].prepareExternalUrl(this[_routerLink]) : t0;
    }
    ngOnDestroy() {
      let t0;
      t0 = this[_keyPressSubscription];
      t0 == null ? null : t0.cancel();
    }
    onClick(event) {
      if (dart.test(event.ctrlKey) || dart.test(event.metaKey)) return;
      this[_trigger](event);
    }
    [_onKeyPress](event) {
      if (event.keyCode !== 13 || dart.test(event.ctrlKey) || dart.test(event.metaKey)) {
        return;
      }
      this[_trigger](event);
    }
    [_trigger](event) {
      if (this[_target$] == null || this[_target$] === "_self") {
        event.preventDefault();
        this[_router$].navigate(this.url.path, new navigation_params.NavigationParams.new({queryParameters: this.url.queryParameters, fragment: this.url.fragment}));
      }
    }
  };
  (router_link_directive.RouterLink.new = function(_router, _location, _target, element) {
    this[_keyPressSubscription] = null;
    this[_routerLink] = null;
    this[_cachedVisibleHref] = null;
    this[_cachedUrl] = null;
    this[_router$] = _router;
    this[_location$] = _location;
    this[_target$] = _target;
    if (!html.AnchorElement.is(element)) {
      this[_keyPressSubscription] = element[$onKeyPress].listen(dart.bind(this, _onKeyPress));
    }
  }).prototype = router_link_directive.RouterLink.prototype;
  dart.addTypeTests(router_link_directive.RouterLink);
  router_link_directive.RouterLink[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(router_link_directive.RouterLink, () => ({
    __proto__: dart.getMethods(router_link_directive.RouterLink.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    onClick: dart.fnType(dart.void, [html.MouseEvent]),
    [_onKeyPress]: dart.fnType(dart.void, [html.KeyboardEvent]),
    [_trigger]: dart.fnType(dart.void, [html.Event])
  }));
  dart.setGetterSignature(router_link_directive.RouterLink, () => ({
    __proto__: dart.getGetters(router_link_directive.RouterLink.__proto__),
    url: url.Url,
    visibleHref: core.String
  }));
  dart.setSetterSignature(router_link_directive.RouterLink, () => ({
    __proto__: dart.getSetters(router_link_directive.RouterLink.__proto__),
    routerLink: core.String
  }));
  dart.setLibraryUri(router_link_directive.RouterLink, "package:angular_router/src/directives/router_link_directive.dart");
  dart.setFieldSignature(router_link_directive.RouterLink, () => ({
    __proto__: dart.getFields(router_link_directive.RouterLink.__proto__),
    [_router$]: dart.finalFieldType(router.Router),
    [_location$]: dart.finalFieldType(location.Location),
    [_target$]: dart.finalFieldType(core.String),
    [_keyPressSubscription]: dart.fieldType(async.StreamSubscription$(html.KeyboardEvent)),
    [_routerLink]: dart.fieldType(core.String),
    [_cachedVisibleHref]: dart.fieldType(core.String),
    [_cachedUrl]: dart.fieldType(url.Url)
  }));
  const _routeChanged = dart.privateName(router_link_active_directive, "_routeChanged");
  const _classes = dart.privateName(router_link_active_directive, "_classes");
  const _element$ = dart.privateName(router_link_active_directive, "_element");
  const _router$0 = dart.privateName(router_link_active_directive, "_router");
  const _update = dart.privateName(router_link_active_directive, "_update");
  let C1;
  const MapEquality__valueEquality = dart.privateName(equality, "MapEquality._valueEquality");
  const MapEquality__keyEquality = dart.privateName(equality, "MapEquality._keyEquality");
  let C0;
  const links = dart.privateName(router_link_active_directive, "RouterLinkActive.links");
  router_link_active_directive.RouterLinkActive = class RouterLinkActive extends core.Object {
    get links() {
      return this[links];
    }
    set links(value) {
      this[links] = value;
    }
    ngOnDestroy() {
      let t0;
      t0 = this[_routeChanged];
      return t0 == null ? null : t0.cancel();
    }
    ngAfterViewInit() {
      this[_routeChanged] = this[_router$0].stream.listen(dart.bind(this, _update));
      this[_update](this[_router$0].current);
    }
    set routerLinkActive(classes) {
      if (typeof classes == 'string') {
        this[_classes] = JSArrayOfString().of([classes]);
      } else if (ListOfString().is(classes)) {
        this[_classes] = classes;
      } else if (dart.test(optimizations.isDevMode)) {
        dart.throw(new core.ArgumentError.new("Expected a string or list of strings. Got " + dart.str(classes) + "."));
      }
    }
    [_update](routerState) {
      let isActive = false;
      if (routerState != null) {
        for (let link of this.links) {
          let url = link.url;
          if (url.path != routerState.path) continue;
          if (dart.test(url.queryParameters[$isNotEmpty]) && !dart.test((C0 || CT.C0).equals(url.queryParameters, routerState.queryParameters))) {
            continue;
          }
          if (url.fragment[$isNotEmpty] && url.fragment != routerState.fragment) {
            continue;
          }
          isActive = true;
          break;
        }
      }
      this[_element$][$classes].toggleAll(this[_classes], isActive);
    }
  };
  (router_link_active_directive.RouterLinkActive.new = function(_element, _router) {
    this[_routeChanged] = null;
    this[_classes] = null;
    this[links] = null;
    this[_element$] = _element;
    this[_router$0] = _router;
    ;
  }).prototype = router_link_active_directive.RouterLinkActive.prototype;
  dart.addTypeTests(router_link_active_directive.RouterLinkActive);
  router_link_active_directive.RouterLinkActive[dart.implements] = () => [lifecycle_hooks.AfterViewInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(router_link_active_directive.RouterLinkActive, () => ({
    __proto__: dart.getMethods(router_link_active_directive.RouterLinkActive.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    ngAfterViewInit: dart.fnType(dart.void, []),
    [_update]: dart.fnType(dart.void, [router_state.RouterState])
  }));
  dart.setSetterSignature(router_link_active_directive.RouterLinkActive, () => ({
    __proto__: dart.getSetters(router_link_active_directive.RouterLinkActive.__proto__),
    routerLinkActive: core.Object
  }));
  dart.setLibraryUri(router_link_active_directive.RouterLinkActive, "package:angular_router/src/directives/router_link_active_directive.dart");
  dart.setFieldSignature(router_link_active_directive.RouterLinkActive, () => ({
    __proto__: dart.getFields(router_link_active_directive.RouterLinkActive.__proto__),
    [_element$]: dart.finalFieldType(html.Element),
    [_router$0]: dart.finalFieldType(router.Router),
    [_routeChanged]: dart.fieldType(async.StreamSubscription),
    [_classes]: dart.fieldType(core.List$(core.String)),
    links: dart.fieldType(core.List$(router_link_directive.RouterLink))
  }));
  let C3;
  let C4;
  let C5;
  let C2;
  const Provider_multi = dart.privateName(providers, "Provider.multi");
  const Provider_deps = dart.privateName(providers, "Provider.deps");
  const Provider_useFactory = dart.privateName(providers, "Provider.useFactory");
  const Provider_useExisting = dart.privateName(providers, "Provider.useExisting");
  const Provider_useValue = dart.privateName(providers, "Provider.useValue");
  let C8;
  const Provider_useClass = dart.privateName(providers, "Provider.useClass");
  let C9;
  const Provider_token = dart.privateName(providers, "Provider.token");
  let C7;
  let C11;
  let C12;
  let C10;
  let C14;
  let C13;
  let C16;
  let C17;
  let C15;
  let C6;
  let C20;
  let C19;
  let C18;
  dart.defineLazy(constants, {
    /*constants.routerDirectives*/get routerDirectives() {
      return C2 || CT.C2;
    },
    /*constants.routerProviders*/get routerProviders() {
      return C6 || CT.C6;
    },
    /*constants.routerProvidersHash*/get routerProvidersHash() {
      return C18 || CT.C18;
    }
  });
  dart.trackLibraries("packages/angular_router/src/constants", {
    "package:angular_router/src/directives/router_link_directive.dart": router_link_directive,
    "package:angular_router/src/directives/router_link_active_directive.dart": router_link_active_directive,
    "package:angular_router/src/constants.dart": constants
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["directives/router_link_directive.dart","directives/router_link_active_directive.dart","constants.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mBAkDwB;AACI,MAAxB,oBAAc,UAAU;AACC,MAAzB,2BAAqB;AACJ,MAAjB,mBAAa;IACf;;AAGE,UAAI,AAAW,oBAAG;AACV,wBAAgB,cAAM;AAK3B,QAJD,mBAAa,gBACX,AAAU,+BAAc,AAAU,SAAD,mBACvB,AAAU,SAAD,4BACF,AAAU,SAAD;;AAG9B,YAAO;IACT;;;AAME,WAAO;mBAAmB,OAAnB,2BAAuB,AAAU,oCAAmB;IAC7D;;;AAIiC,WAA/B;0BAAuB;IACzB;YAGwB;AAEtB,oBAAI,AAAM,KAAD,uBAAY,AAAM,KAAD,WAAU;AACrB,MAAf,eAAS,KAAK;IAChB;kBAE+B;AAE7B,UAAI,AAAM,KAAD,6BAA6B,AAAM,KAAD,uBAAY,AAAM,KAAD;AAC1D;;AAEa,MAAf,eAAS,KAAK;IAChB;eAEoB;AAElB,UAAI,AAAQ,kBAAG,QAAQ,AAAQ,mBAAG;AACV,QAAtB,AAAM,KAAD;AAIiE,QAHtE,AAAQ,wBACJ,AAAI,eACJ,6DACqB,AAAI,oCAA2B,AAAI;;IAEhE;;mDAjEgB,SAAc,WAAqC,SACvD;IANsB;IAC3B;IACA;IACH;IAEY;IAAc;IAAqC;AAKjE,SAAY,sBAAR,OAAO;AACqD,MAA9D,8BAAwB,AAAQ,AAAW,OAAZ,+BAAmB;;EAEtD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICTiB;;;;;;;;AAKK;iCAAe;IAAQ;;AAIG,MAA9C,sBAAgB,AAAQ,AAAO,wCAAO;AACd,MAAxB,cAAQ,AAAQ;IAClB;yBAG4B;AAC1B,UAAY,OAAR,OAAO;AACW,QAApB,iBAAW,sBAAC,OAAO;YACd,KAAY,kBAAR,OAAO;AACE,QAAlB,iBAAW,OAAO;YACb,eAAI;AAGR,QAFD,WAAM,2BACJ,AAAqD,wDAAT,OAAO;;IAGzD;cAEyB;AACnB,qBAAW;AACf,UAAI,WAAW,IAAI;AACjB,iBAAS,OAAQ;AACT,oBAAM,AAAK,IAAD;AAChB,cAAI,AAAI,GAAD,SAAS,AAAY,WAAD,OAAO;AAElC,wBAAI,AAAI,AAAgB,GAAjB,6CAEE,qBAAO,AAAI,GAAD,kBAAkB,AAAY,WAAD;AAC9C;;AAGF,cAAI,AAAI,AAAS,GAAV,0BAAwB,AAAI,GAAD,aAAa,AAAY,WAAD;AACxD;;AAGa,UAAf,WAAW;AACX;;;AAG0C,MAA9C,AAAS,AAAQ,oCAAU,gBAAU,QAAQ;IAC/C;;gEA9CsB,UAAe;IANlB;IACN;IAGI;IAEK;IAAe;;EAAQ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MCfzC,0BAAgB;;;MAShB,yBAAe;;;MAcf,6BAAmB","file":"constants.ddc.js"}');
  // Exports:
  return {
    src__directives__router_link_directive: router_link_directive,
    src__directives__router_link_active_directive: router_link_active_directive,
    src__constants: constants
  };
});

//# sourceMappingURL=constants.ddc.js.map
