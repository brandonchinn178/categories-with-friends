define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/collection/src/comparators'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular__src__bootstrap__modules, packages__collection__src__comparators) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const map = packages__angular__src__core__change_detection__change_detection.src__di__injector__map;
  const hierarchical = packages__angular__src__core__change_detection__change_detection.src__di__injector__hierarchical;
  const lifecycle_hooks = packages__angular__src__core__change_detection__change_detection.src__core__metadata__lifecycle_hooks;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const view_container_ref = packages__angular__src__bootstrap__modules.src__core__linker__view_container_ref;
  const equality = packages__collection__src__comparators.src__equality;
  const location_strategy = Object.create(dart.library);
  const router_outlet_directive = Object.create(dart.library);
  const router_hook = Object.create(dart.library);
  const router_state = Object.create(dart.library);
  const url$ = Object.create(dart.library);
  const route_path = Object.create(dart.library);
  const route_definition = Object.create(dart.library);
  const location = Object.create(dart.library);
  const platform_location = Object.create(dart.library);
  const path_location_strategy = Object.create(dart.library);
  const location$ = Object.create(dart.library);
  const hash_location_strategy = Object.create(dart.library);
  const browser_platform_location = Object.create(dart.library);
  const base_href = Object.create(dart.library);
  const navigation_params = Object.create(dart.library);
  const router_outlet_token = Object.create(dart.library);
  const router = Object.create(dart.library);
  const lifecycle = Object.create(dart.library);
  const router_impl = Object.create(dart.library);
  const $_get = dartx._get;
  const $values = dartx.values;
  const $putIfAbsent = dartx.putIfAbsent;
  const $remove = dartx.remove;
  const $startsWith = dartx.startsWith;
  const $substring = dartx.substring;
  const $endsWith = dartx.endsWith;
  const $isNotEmpty = dartx.isNotEmpty;
  const $keys = dartx.keys;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $last = dartx.last;
  const $length = dartx.length;
  const $take = dartx.take;
  const $replaceFirst = dartx.replaceFirst;
  const $replaceAll = dartx.replaceAll;
  const $contains = dartx.contains;
  const $where = dartx.where;
  const $isEmpty = dartx.isEmpty;
  const $location = dartx.location;
  const $addEventListener = dartx.addEventListener;
  const $pushState = dartx.pushState;
  const $replaceState = dartx.replaceState;
  const $getAttribute = dartx.getAttribute;
  const $fold = dartx.fold;
  const $matchAsPrefix = dartx.matchAsPrefix;
  const $insert = dartx.insert;
  const $_set = dartx._set;
  const $add = dartx.add;
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(opaque_token.OpaqueToken$(core.String)))();
  let LinkedMapOfComponentFactory$ComponentRef = () => (LinkedMapOfComponentFactory$ComponentRef = dart.constFn(_js_helper.LinkedMap$(component_factory.ComponentFactory, component_factory.ComponentRef)))();
  let JSArrayOfRouteDefinition = () => (JSArrayOfRouteDefinition = dart.constFn(_interceptors.JSArray$(route_definition.RouteDefinition)))();
  let LinkedMapOfObject$Object = () => (LinkedMapOfObject$Object = dart.constFn(_js_helper.LinkedMap$(core.Object, core.Object)))();
  let VoidToComponentRef = () => (VoidToComponentRef = dart.constFn(dart.fnType(component_factory.ComponentRef, [])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let ListOfRouteDefinition = () => (ListOfRouteDefinition = dart.constFn(core.List$(route_definition.RouteDefinition)))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let JSArrayOfComponentRef = () => (JSArrayOfComponentRef = dart.constFn(_interceptors.JSArray$(component_factory.ComponentRef)))();
  let LinkedMapOfComponentRef$ComponentFactory = () => (LinkedMapOfComponentRef$ComponentFactory = dart.constFn(_js_helper.LinkedMap$(component_factory.ComponentRef, component_factory.ComponentFactory)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let RegExpMatchToString = () => (RegExpMatchToString = dart.constFn(dart.fnType(core.String, [core.RegExpMatch])))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let StreamControllerOfRouterState = () => (StreamControllerOfRouterState = dart.constFn(async.StreamController$(router_state.RouterState)))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let NavigationResultToNull = () => (NavigationResultToNull = dart.constFn(dart.fnType(core.Null, [router.NavigationResult])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let StreamControllerOfString = () => (StreamControllerOfString = dart.constFn(async.StreamController$(core.String)))();
  let CompleterOfNavigationResult = () => (CompleterOfNavigationResult = dart.constFn(async.Completer$(router.NavigationResult)))();
  let voidToFutureOfvoid = () => (voidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [dart.void])))();
  let DefaultEqualityOfNull = () => (DefaultEqualityOfNull = dart.constFn(equality.DefaultEquality$(core.Null)))();
  let StringAndRouteDefinitionToString = () => (StringAndRouteDefinitionToString = dart.constFn(dart.fnType(core.String, [core.String, route_definition.RouteDefinition])))();
  let FutureOfMutableRouterState = () => (FutureOfMutableRouterState = dart.constFn(async.Future$(router_state.MutableRouterState)))();
  let MutableRouterStateToFutureOfMutableRouterState = () => (MutableRouterStateToFutureOfMutableRouterState = dart.constFn(dart.fnType(FutureOfMutableRouterState(), [router_state.MutableRouterState])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: OpaqueTokenOfString().prototype,
        [OpaqueToken__uniqueName]: "appBaseHref"
      });
    },
    get C1() {
      return C1 = dart.constList([], route_definition.RouteDefinition);
    },
    get C2() {
      return C2 = dart.constMap(core.String, core.String, []);
    },
    get C3() {
      return C3 = dart.fn(base_href.baseHrefFromDOM, VoidToString());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: router.NavigationResult.prototype,
        [_name$]: "NavigationResult.SUCCESS",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: router.NavigationResult.prototype,
        [_name$]: "NavigationResult.BLOCKED_BY_GUARD",
        index: 1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: router.NavigationResult.prototype,
        [_name$]: "NavigationResult.INVALID_ROUTE",
        index: 2
      });
    },
    get C7() {
      return C7 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], router.NavigationResult);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: DefaultEqualityOfNull().prototype
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: equality.MapEquality.prototype,
        [MapEquality__valueEquality]: C9 || CT.C9,
        [MapEquality__keyEquality]: C9 || CT.C9
      });
    }
  });
  location_strategy.LocationStrategy = class LocationStrategy extends core.Object {};
  (location_strategy.LocationStrategy.new = function() {
    ;
  }).prototype = location_strategy.LocationStrategy.prototype;
  dart.addTypeTests(location_strategy.LocationStrategy);
  dart.setLibraryUri(location_strategy.LocationStrategy, "package:angular_router/src/location/location_strategy.dart");
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C0;
  dart.defineLazy(location_strategy, {
    /*location_strategy.appBaseHref*/get appBaseHref() {
      return C0 || CT.C0;
    }
  });
  const _loadedComponents = dart.privateName(router_outlet_directive, "_loadedComponents");
  const _activeComponentFactory = dart.privateName(router_outlet_directive, "_activeComponentFactory");
  const _routes = dart.privateName(router_outlet_directive, "_routes");
  let C1;
  const _viewContainerRef$ = dart.privateName(router_outlet_directive, "_viewContainerRef");
  const _router$ = dart.privateName(router_outlet_directive, "_router");
  const _routerHook$ = dart.privateName(router_outlet_directive, "_routerHook");
  const _activeComponent = dart.privateName(router_outlet_directive, "_activeComponent");
  const _shouldReuse = dart.privateName(router_outlet_directive, "_shouldReuse");
  router_outlet_directive.RouterOutlet = class RouterOutlet extends core.Object {
    get [_activeComponent]() {
      return this[_loadedComponents][$_get](this[_activeComponentFactory]);
    }
    set routes(routes) {
      if (dart.test(optimizations.isDevMode)) {
        for (let route of routes) {
          route.assertValid();
        }
        let hasDefault = false;
        for (let route of routes) {
          if (dart.test(route.useAsDefault)) {
            if (hasDefault) {
              dart.throw(new core.StateError.new("Only one route can be used as default"));
            }
            hasDefault = true;
          }
        }
      }
      this[_routes] = routes;
    }
    get routes() {
      let t0;
      t0 = this[_routes];
      return t0 == null ? JSArrayOfRouteDefinition().of([]) : t0;
    }
    ngOnInit() {
      this[_router$].registerRootOutlet(this);
    }
    ngOnDestroy() {
      for (let loadedComponent of this[_loadedComponents][$values]) {
        loadedComponent.destroy();
      }
      this[_viewContainerRef$].clear();
      this[_router$].unregisterRootOutlet(this);
    }
    prepare(componentFactory) {
      return this[_loadedComponents][$putIfAbsent](componentFactory, dart.fn(() => {
        let componentRef = componentFactory.create(new map.MapInjector.new(new (LinkedMapOfObject$Object()).from([dart.wrapType(router_outlet_token.RouterOutletToken), new router_outlet_token.RouterOutletToken.new()]), hierarchical.HierarchicalInjector._check(this[_viewContainerRef$].injector)));
        componentRef.changeDetectorRef.detectChanges();
        return componentRef;
      }, VoidToComponentRef()));
    }
    activate(componentFactory, oldState, newState) {
      return async.async(core.Null, (function* activate() {
        let activeComponent = this[_activeComponent];
        if (activeComponent != null) {
          let shouldReuse = (yield this[_shouldReuse](activeComponent.instance, oldState, newState));
          if (dart.test(shouldReuse)) {
            if (this[_activeComponentFactory] == componentFactory) return;
            for (let i = dart.notNull(this[_viewContainerRef$].length) - 1; i >= 0; i = i - 1) {
              this[_viewContainerRef$].detach(i);
            }
          } else {
            this[_loadedComponents][$remove](this[_activeComponentFactory]);
            activeComponent.destroy();
            this[_viewContainerRef$].clear();
          }
        }
        this[_activeComponentFactory] = componentFactory;
        let component = this.prepare(componentFactory);
        this[_viewContainerRef$].insert(component.hostView);
        component.changeDetectorRef.detectChanges();
      }).bind(this));
    }
    [_shouldReuse](instance, oldState, newState) {
      if (lifecycle.CanReuse.is(instance)) {
        return instance.canReuse(oldState, newState);
      }
      if (this[_routerHook$] != null) {
        return this[_routerHook$].canReuse(instance, oldState, newState);
      }
      return false;
    }
  };
  (router_outlet_directive.RouterOutlet.new = function(token, _viewContainerRef, _router, _routerHook) {
    let t0;
    this[_loadedComponents] = new (LinkedMapOfComponentFactory$ComponentRef()).new();
    this[_activeComponentFactory] = null;
    this[_routes] = C1 || CT.C1;
    this[_viewContainerRef$] = _viewContainerRef;
    this[_router$] = _router;
    this[_routerHook$] = _routerHook;
    t0 = token;
    t0 == null ? null : t0.routerOutlet = this;
  }).prototype = router_outlet_directive.RouterOutlet.prototype;
  dart.addTypeTests(router_outlet_directive.RouterOutlet);
  router_outlet_directive.RouterOutlet[dart.implements] = () => [lifecycle_hooks.OnInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(router_outlet_directive.RouterOutlet, () => ({
    __proto__: dart.getMethods(router_outlet_directive.RouterOutlet.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    prepare: dart.fnType(component_factory.ComponentRef, [component_factory.ComponentFactory]),
    activate: dart.fnType(async.Future$(core.Null), [component_factory.ComponentFactory, router_state.RouterState, router_state.RouterState]),
    [_shouldReuse]: dart.fnType(async.FutureOr$(core.bool), [core.Object, router_state.RouterState, router_state.RouterState])
  }));
  dart.setGetterSignature(router_outlet_directive.RouterOutlet, () => ({
    __proto__: dart.getGetters(router_outlet_directive.RouterOutlet.__proto__),
    [_activeComponent]: component_factory.ComponentRef,
    routes: core.List$(route_definition.RouteDefinition)
  }));
  dart.setSetterSignature(router_outlet_directive.RouterOutlet, () => ({
    __proto__: dart.getSetters(router_outlet_directive.RouterOutlet.__proto__),
    routes: core.List$(route_definition.RouteDefinition)
  }));
  dart.setLibraryUri(router_outlet_directive.RouterOutlet, "package:angular_router/src/directives/router_outlet_directive.dart");
  dart.setFieldSignature(router_outlet_directive.RouterOutlet, () => ({
    __proto__: dart.getFields(router_outlet_directive.RouterOutlet.__proto__),
    [_viewContainerRef$]: dart.finalFieldType(view_container_ref.ViewContainerRef),
    [_router$]: dart.finalFieldType(router.Router),
    [_routerHook$]: dart.finalFieldType(router_hook.RouterHook),
    [_loadedComponents]: dart.finalFieldType(core.Map$(component_factory.ComponentFactory, component_factory.ComponentRef)),
    [_activeComponentFactory]: dart.fieldType(component_factory.ComponentFactory),
    [_routes]: dart.fieldType(core.List$(route_definition.RouteDefinition))
  }));
  router_hook.RouterHook = class RouterHook extends core.Object {
    navigationPath(path, params) {
      return async.async(core.String, function* navigationPath() {
        return path;
      });
    }
    navigationParams(path, params) {
      return async.async(navigation_params.NavigationParams, function* navigationParams() {
        return params;
      });
    }
    canActivate(componentInstance, oldState, newState) {
      return async.async(core.bool, function* canActivate() {
        return true;
      });
    }
    canDeactivate(componentInstance, oldState, newState) {
      return async.async(core.bool, function* canDeactivate() {
        return true;
      });
    }
    canNavigate() {
      return async.async(core.bool, function* canNavigate() {
        return true;
      });
    }
    canReuse(componentInstance, oldState, newState) {
      return async.async(core.bool, function* canReuse() {
        return false;
      });
    }
  };
  (router_hook.RouterHook.new = function() {
    ;
  }).prototype = router_hook.RouterHook.prototype;
  dart.addTypeTests(router_hook.RouterHook);
  dart.setMethodSignature(router_hook.RouterHook, () => ({
    __proto__: dart.getMethods(router_hook.RouterHook.__proto__),
    navigationPath: dart.fnType(async.Future$(core.String), [core.String, navigation_params.NavigationParams]),
    navigationParams: dart.fnType(async.Future$(navigation_params.NavigationParams), [core.String, navigation_params.NavigationParams]),
    canActivate: dart.fnType(async.Future$(core.bool), [core.Object, router_state.RouterState, router_state.RouterState]),
    canDeactivate: dart.fnType(async.Future$(core.bool), [core.Object, router_state.RouterState, router_state.RouterState]),
    canNavigate: dart.fnType(async.Future$(core.bool), []),
    canReuse: dart.fnType(async.Future$(core.bool), [core.Object, router_state.RouterState, router_state.RouterState])
  }));
  dart.setLibraryUri(router_hook.RouterHook, "package:angular_router/src/router_hook.dart");
  const _routePath = dart.privateName(router_state, "_routePath");
  const fragment$ = dart.privateName(url$, "Url.fragment");
  const path$ = dart.privateName(url$, "Url.path");
  const queryParameters$ = dart.privateName(url$, "Url.queryParameters");
  url$.Url = class Url extends core.Object {
    get fragment() {
      return this[fragment$];
    }
    set fragment(value) {
      super.fragment = value;
    }
    get path() {
      return this[path$];
    }
    set path(value) {
      super.path = value;
    }
    get queryParameters() {
      return this[queryParameters$];
    }
    set queryParameters(value) {
      super.queryParameters = value;
    }
    static parse(url) {
      let uri = core.Uri.parse(url);
      return new url$.Url.new(uri.path, {fragment: uri.fragment, queryParameters: uri.queryParameters});
    }
    static normalizeHash(hash) {
      if (hash[$startsWith]("#")) {
        return hash[$substring](1);
      }
      return hash;
    }
    static trimSlashes(path) {
      if (path == null) return null;
      if (path[$startsWith]("/")) path = path[$substring](1);
      if (path[$endsWith]("/")) path = path[$substring](0, path.length - 1);
      return path;
    }
    toUrl() {
      let t0, t0$, t0$0, t0$1;
      let buffer = new core.StringBuffer.new();
      buffer.write(this.path);
      if (dart.equals((t0 = this.queryParameters, t0 == null ? null : t0[$isNotEmpty]), true)) {
        t0$ = buffer;
        t0$.write("?");
        t0$.writeAll(this.queryParameters[$keys][$map](dart.dynamic, dart.fn(k => {
          let v = this.queryParameters[$_get](k);
          k = core.Uri.encodeComponent(k);
          return v != null ? dart.str(k) + "=" + dart.str(core.Uri.encodeComponent(v)) : k;
        }, StringToString())), "&");
        t0$;
      }
      if (dart.equals((t0$0 = this.fragment, t0$0 == null ? null : t0$0[$isNotEmpty]), true)) {
        t0$1 = buffer;
        t0$1.write("#");
        t0$1.write(this.fragment);
        t0$1;
      }
      return buffer.toString();
    }
    toString() {
      return this.toUrl();
    }
  };
  (url$.Url.new = function(path, opts) {
    let t0, t0$, t0$0;
    let fragment = opts && 'fragment' in opts ? opts.fragment : "";
    let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
    this[path$] = (t0 = path, t0 == null ? "" : t0);
    this[fragment$] = (t0$ = fragment, t0$ == null ? "" : t0$);
    this[queryParameters$] = MapOfString$String().unmodifiable((t0$0 = queryParameters, t0$0 == null ? new _js_helper.LinkedMap.new() : t0$0));
    ;
  }).prototype = url$.Url.prototype;
  dart.addTypeTests(url$.Url);
  dart.setMethodSignature(url$.Url, () => ({
    __proto__: dart.getMethods(url$.Url.__proto__),
    toUrl: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(url$.Url, "package:angular_router/src/url.dart");
  dart.setFieldSignature(url$.Url, () => ({
    __proto__: dart.getFields(url$.Url.__proto__),
    fragment: dart.finalFieldType(core.String),
    path: dart.finalFieldType(core.String),
    queryParameters: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  dart.defineExtensionMethods(url$.Url, ['toString']);
  dart.defineLazy(url$.Url, {
    /*url$.Url.isHashStrategy*/get isHashStrategy() {
      return false;
    },
    set isHashStrategy(_) {}
  });
  const routes$ = dart.privateName(router_state, "RouterState.routes");
  const parameters$ = dart.privateName(router_state, "RouterState.parameters");
  router_state.RouterState = class RouterState extends url$.Url {
    get routes() {
      return this[routes$];
    }
    set routes(value) {
      super.routes = value;
    }
    get parameters() {
      return this[parameters$];
    }
    set parameters(value) {
      super.parameters = value;
    }
    get routePath() {
      let t0;
      t0 = this[_routePath];
      return t0 == null ? this[_routePath] = new route_path.RoutePath.fromRoutes(this.routes) : t0;
    }
    toString() {
      return "#" + dart.str(dart.wrapType(router_state.RouterState)) + " {" + dart.str(super.toString()) + "}";
    }
  };
  (router_state.RouterState.new = function(path, routes, opts) {
    let t0, t0$;
    let parameters = opts && 'parameters' in opts ? opts.parameters : null;
    let fragment = opts && 'fragment' in opts ? opts.fragment : "";
    let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
    this[_routePath] = null;
    this[parameters$] = MapOfString$String().unmodifiable((t0 = parameters, t0 == null ? new _js_helper.LinkedMap.new() : t0));
    this[routes$] = ListOfRouteDefinition().unmodifiable((t0$ = routes, t0$ == null ? [] : t0$));
    router_state.RouterState.__proto__.new.call(this, path, {queryParameters: queryParameters, fragment: fragment});
    ;
  }).prototype = router_state.RouterState.prototype;
  dart.addTypeTests(router_state.RouterState);
  dart.setGetterSignature(router_state.RouterState, () => ({
    __proto__: dart.getGetters(router_state.RouterState.__proto__),
    routePath: route_path.RoutePath
  }));
  dart.setLibraryUri(router_state.RouterState, "package:angular_router/src/router/router_state.dart");
  dart.setFieldSignature(router_state.RouterState, () => ({
    __proto__: dart.getFields(router_state.RouterState.__proto__),
    routes: dart.finalFieldType(core.List$(route_definition.RouteDefinition)),
    parameters: dart.finalFieldType(core.Map$(core.String, core.String)),
    [_routePath]: dart.fieldType(route_path.RoutePath)
  }));
  dart.defineExtensionMethods(router_state.RouterState, ['toString']);
  const components = dart.privateName(router_state, "MutableRouterState.components");
  const factories = dart.privateName(router_state, "MutableRouterState.factories");
  const parameters = dart.privateName(router_state, "MutableRouterState.parameters");
  const routes = dart.privateName(router_state, "MutableRouterState.routes");
  const fragment = dart.privateName(router_state, "MutableRouterState.fragment");
  const path = dart.privateName(router_state, "MutableRouterState.path");
  const queryParameters = dart.privateName(router_state, "MutableRouterState.queryParameters");
  router_state.MutableRouterState = class MutableRouterState extends core.Object {
    get components() {
      return this[components];
    }
    set components(value) {
      super.components = value;
    }
    get factories() {
      return this[factories];
    }
    set factories(value) {
      super.factories = value;
    }
    get parameters() {
      return this[parameters];
    }
    set parameters(value) {
      super.parameters = value;
    }
    get routes() {
      return this[routes];
    }
    set routes(value) {
      super.routes = value;
    }
    get fragment() {
      return this[fragment];
    }
    set fragment(value) {
      this[fragment] = value;
    }
    get path() {
      return this[path];
    }
    set path(value) {
      this[path] = value;
    }
    get queryParameters() {
      return this[queryParameters];
    }
    set queryParameters(value) {
      this[queryParameters] = value;
    }
    build() {
      return new router_state.RouterState.new(this.path, this.routes[$toList](), {fragment: this.fragment, queryParameters: this.queryParameters, parameters: this.parameters});
    }
  };
  (router_state.MutableRouterState.new = function() {
    this[components] = JSArrayOfComponentRef().of([]);
    this[factories] = new (LinkedMapOfComponentRef$ComponentFactory()).new();
    this[parameters] = new (IdentityMapOfString$String()).new();
    this[routes] = JSArrayOfRouteDefinition().of([]);
    this[fragment] = "";
    this[path] = "";
    this[queryParameters] = new (IdentityMapOfString$String()).new();
    ;
  }).prototype = router_state.MutableRouterState.prototype;
  dart.addTypeTests(router_state.MutableRouterState);
  dart.setMethodSignature(router_state.MutableRouterState, () => ({
    __proto__: dart.getMethods(router_state.MutableRouterState.__proto__),
    build: dart.fnType(router_state.RouterState, [])
  }));
  dart.setLibraryUri(router_state.MutableRouterState, "package:angular_router/src/router/router_state.dart");
  dart.setFieldSignature(router_state.MutableRouterState, () => ({
    __proto__: dart.getFields(router_state.MutableRouterState.__proto__),
    components: dart.finalFieldType(core.List$(component_factory.ComponentRef)),
    factories: dart.finalFieldType(core.Map$(component_factory.ComponentRef, component_factory.ComponentFactory)),
    parameters: dart.finalFieldType(core.Map$(core.String, core.String)),
    routes: dart.finalFieldType(core.List$(route_definition.RouteDefinition)),
    fragment: dart.fieldType(core.String),
    path: dart.fieldType(core.String),
    queryParameters: dart.fieldType(core.Map$(core.String, core.String))
  }));
  const path$0 = dart.privateName(route_path, "RoutePath.path");
  const parent$ = dart.privateName(route_path, "RoutePath.parent");
  const useAsDefault$ = dart.privateName(route_path, "RoutePath.useAsDefault");
  const additionalData$ = dart.privateName(route_path, "RoutePath.additionalData");
  route_path.RoutePath = class RoutePath extends core.Object {
    get path() {
      return this[path$0];
    }
    set path(value) {
      super.path = value;
    }
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    get useAsDefault() {
      return this[useAsDefault$];
    }
    set useAsDefault(value) {
      super.useAsDefault = value;
    }
    get additionalData() {
      return this[additionalData$];
    }
    set additionalData(value) {
      super.additionalData = value;
    }
    toUrl(opts) {
      let parameters = opts && 'parameters' in opts ? opts.parameters : null;
      let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : null;
      let fragment = opts && 'fragment' in opts ? opts.fragment : null;
      let parentUrl = this.parent != null ? this.parent.toUrl() : "/";
      let url = location$.Location.joinWithSlash(parentUrl, this.path);
      if (parameters != null) {
        for (let key of parameters[$keys]) {
          url = url[$replaceFirst](":" + dart.str(key), core.Uri.encodeComponent(parameters[$_get](key)));
        }
      }
      return new url$.Url.new(url, {queryParameters: queryParameters, fragment: fragment}).toString();
    }
  };
  (route_path.RoutePath.new = function(opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let useAsDefault = opts && 'useAsDefault' in opts ? opts.useAsDefault : false;
    let additionalData = opts && 'additionalData' in opts ? opts.additionalData : null;
    this[parent$] = parent;
    this[useAsDefault$] = useAsDefault;
    this[additionalData$] = additionalData;
    this[path$0] = url$.Url.trimSlashes(path);
    ;
  }).prototype = route_path.RoutePath.prototype;
  (route_path.RoutePath.fromRoutes = function(routes) {
    this[path$0] = dart.test(routes[$isNotEmpty]) ? url$.Url.trimSlashes(routes[$last].path) : "";
    this[useAsDefault$] = dart.test(routes[$isNotEmpty]) ? routes[$last].useAsDefault : false;
    this[additionalData$] = dart.test(routes[$isNotEmpty]) ? routes[$last].additionalData : null;
    this[parent$] = dart.notNull(routes[$length]) > 1 ? new route_path.RoutePath.fromRoutes(routes[$take](dart.notNull(routes[$length]) - 1)) : null;
    ;
  }).prototype = route_path.RoutePath.prototype;
  dart.addTypeTests(route_path.RoutePath);
  dart.setMethodSignature(route_path.RoutePath, () => ({
    __proto__: dart.getMethods(route_path.RoutePath.__proto__),
    toUrl: dart.fnType(core.String, [], {fragment: core.String, parameters: core.Map$(core.String, core.String), queryParameters: core.Map$(core.String, core.String)}, {})
  }));
  dart.setLibraryUri(route_path.RoutePath, "package:angular_router/src/route_path.dart");
  dart.setFieldSignature(route_path.RoutePath, () => ({
    __proto__: dart.getFields(route_path.RoutePath.__proto__),
    path: dart.finalFieldType(core.String),
    parent: dart.finalFieldType(route_path.RoutePath),
    useAsDefault: dart.finalFieldType(core.bool),
    additionalData: dart.finalFieldType(dart.dynamic)
  }));
  let C2;
  const path$1 = dart.privateName(route_definition, "RouteDefinition.path");
  const useAsDefault$0 = dart.privateName(route_definition, "RouteDefinition.useAsDefault");
  const additionalData$0 = dart.privateName(route_definition, "RouteDefinition.additionalData");
  route_definition.RouteDefinition = class RouteDefinition extends core.Object {
    get path() {
      return this[path$1];
    }
    set path(value) {
      super.path = value;
    }
    get useAsDefault() {
      return this[useAsDefault$0];
    }
    set useAsDefault(value) {
      super.useAsDefault = value;
    }
    get additionalData() {
      return this[additionalData$0];
    }
    set additionalData(value) {
      super.additionalData = value;
    }
    assertValid() {
      if (!dart.test(optimizations.isDevMode)) {
        return;
      }
      if (this.path == null) {
        dart.throw(new core.StateError.new("Must have a non-null `path` string"));
      }
    }
    get parameters() {
      return route_definition.RouteDefinition._findParameters.allMatches(this.path)[$map](core.String, dart.fn(m => m._get(1), RegExpMatchToString()));
    }
    toRegExp() {
      return core.RegExp.new("/?" + this.path[$replaceAll](route_definition.RouteDefinition._findParameters, "((?:[\\w'\\.\\-~!\\$&\\(\\)\\*\\+,;=:@]|%[0-9a-fA-F]{2})+)"));
    }
    toUrl(paramValues) {
      if (paramValues === void 0) paramValues = C2 || CT.C2;
      if (dart.test(optimizations.isDevMode) && paramValues == null) {
        dart.throw(new core.ArgumentError.notNull("paramValues"));
      }
      let url = "/" + dart.notNull(this.path);
      for (let parameter of this.parameters) {
        url = url[$replaceFirst](":" + dart.str(parameter), core.Uri.encodeComponent(paramValues[$_get](parameter)));
      }
      return url;
    }
  };
  (route_definition.RouteDefinition.__ = function(opts) {
    let t1, t0, t1$, t0$, t0$0, t1$0, t0$1;
    let path = opts && 'path' in opts ? opts.path : null;
    let useAsDefault = opts && 'useAsDefault' in opts ? opts.useAsDefault : null;
    let additionalData = opts && 'additionalData' in opts ? opts.additionalData : null;
    let routePath = opts && 'routePath' in opts ? opts.routePath : null;
    this[path$1] = url$.Url.trimSlashes((t0 = path, t0 == null ? (t1 = routePath, t1 == null ? null : t1.path) : t0));
    this[useAsDefault$0] = (t0$0 = (t0$ = useAsDefault, t0$ == null ? (t1$ = routePath, t1$ == null ? null : t1$.useAsDefault) : t0$), t0$0 == null ? false : t0$0);
    this[additionalData$0] = (t0$1 = additionalData, t0$1 == null ? (t1$0 = routePath, t1$0 == null ? null : t1$0.additionalData) : t0$1);
    ;
  }).prototype = route_definition.RouteDefinition.prototype;
  dart.addTypeTests(route_definition.RouteDefinition);
  dart.setMethodSignature(route_definition.RouteDefinition, () => ({
    __proto__: dart.getMethods(route_definition.RouteDefinition.__proto__),
    assertValid: dart.fnType(dart.void, []),
    toRegExp: dart.fnType(core.RegExp, []),
    toUrl: dart.fnType(core.String, [], [core.Map$(core.String, core.String)])
  }));
  dart.setGetterSignature(route_definition.RouteDefinition, () => ({
    __proto__: dart.getGetters(route_definition.RouteDefinition.__proto__),
    parameters: core.Iterable$(core.String)
  }));
  dart.setLibraryUri(route_definition.RouteDefinition, "package:angular_router/src/route_definition.dart");
  dart.setFieldSignature(route_definition.RouteDefinition, () => ({
    __proto__: dart.getFields(route_definition.RouteDefinition.__proto__),
    path: dart.finalFieldType(core.String),
    useAsDefault: dart.finalFieldType(core.bool),
    additionalData: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineLazy(route_definition.RouteDefinition, {
    /*route_definition.RouteDefinition._findParameters*/get _findParameters() {
      return core.RegExp.new(":([\\w-]+)");
    }
  });
  const component$ = dart.privateName(route_definition, "ComponentRouteDefinition.component");
  route_definition.ComponentRouteDefinition = class ComponentRouteDefinition extends route_definition.RouteDefinition {
    get component() {
      return this[component$];
    }
    set component(value) {
      super.component = value;
    }
    assertValid() {
      if (!dart.test(optimizations.isDevMode)) {
        return;
      }
      if (this.component == null) {
        dart.throw(new core.StateError.new("Must have a non-null `component` factory"));
      }
      super.assertValid();
    }
  };
  (route_definition.ComponentRouteDefinition.__ = function(opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let component = opts && 'component' in opts ? opts.component : null;
    let useAsDefault = opts && 'useAsDefault' in opts ? opts.useAsDefault : null;
    let additionalData = opts && 'additionalData' in opts ? opts.additionalData : null;
    let routePath = opts && 'routePath' in opts ? opts.routePath : null;
    this[component$] = component;
    route_definition.ComponentRouteDefinition.__proto__.__.call(this, {path: path, useAsDefault: useAsDefault, additionalData: additionalData, routePath: routePath});
    ;
  }).prototype = route_definition.ComponentRouteDefinition.prototype;
  dart.addTypeTests(route_definition.ComponentRouteDefinition);
  dart.setLibraryUri(route_definition.ComponentRouteDefinition, "package:angular_router/src/route_definition.dart");
  dart.setFieldSignature(route_definition.ComponentRouteDefinition, () => ({
    __proto__: dart.getFields(route_definition.ComponentRouteDefinition.__proto__),
    component: dart.finalFieldType(component_factory.ComponentFactory)
  }));
  const loader$ = dart.privateName(route_definition, "DeferredRouteDefinition.loader");
  route_definition.DeferredRouteDefinition = class DeferredRouteDefinition extends route_definition.RouteDefinition {
    get loader() {
      return this[loader$];
    }
    set loader(value) {
      super.loader = value;
    }
    assertValid() {
      if (!dart.test(optimizations.isDevMode)) {
        return;
      }
      if (this.loader == null) {
        dart.throw(new core.StateError.new("Must have a non-null `loader` function"));
      }
      super.assertValid();
    }
  };
  (route_definition.DeferredRouteDefinition.__ = function(opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let loader = opts && 'loader' in opts ? opts.loader : null;
    let useAsDefault = opts && 'useAsDefault' in opts ? opts.useAsDefault : null;
    let additionalData = opts && 'additionalData' in opts ? opts.additionalData : null;
    let routePath = opts && 'routePath' in opts ? opts.routePath : null;
    this[loader$] = loader;
    route_definition.DeferredRouteDefinition.__proto__.__.call(this, {path: path, useAsDefault: useAsDefault, additionalData: additionalData, routePath: routePath});
    ;
  }).prototype = route_definition.DeferredRouteDefinition.prototype;
  dart.addTypeTests(route_definition.DeferredRouteDefinition);
  dart.setLibraryUri(route_definition.DeferredRouteDefinition, "package:angular_router/src/route_definition.dart");
  dart.setFieldSignature(route_definition.DeferredRouteDefinition, () => ({
    __proto__: dart.getFields(route_definition.DeferredRouteDefinition.__proto__),
    loader: dart.finalFieldType(dart.fnType(async.Future$(component_factory.ComponentFactory), []))
  }));
  const _redirectToParameters = dart.privateName(route_definition, "_redirectToParameters");
  const redirectTo$ = dart.privateName(route_definition, "RedirectRouteDefinition.redirectTo");
  route_definition.RedirectRouteDefinition = class RedirectRouteDefinition extends route_definition.RouteDefinition {
    get redirectTo() {
      return this[redirectTo$];
    }
    set redirectTo(value) {
      super.redirectTo = value;
    }
    assertValid() {
      if (!dart.test(optimizations.isDevMode)) {
        return;
      }
      if (this.redirectTo == null) {
        dart.throw(new core.StateError.new("Must have a non-null `redirectTo` string"));
      }
      if (this.redirectTo == this.path) {
        dart.throw(new core.StateError.new("Cannot redirect from `redirectTo` to `path"));
      }
      let pathParameters = this.parameters;
      let unknownRedirectToParameters = this[_redirectToParameters][$where](dart.fn(redirectToParameter => !dart.test(pathParameters[$contains](redirectToParameter)), StringTobool()));
      if (dart.test(unknownRedirectToParameters[$isNotEmpty])) {
        dart.throw(new core.StateError.new("Parameters in `redirectTo` are not in `path`: " + dart.str(unknownRedirectToParameters)));
      }
      super.assertValid();
    }
    redirectToUrl(paramValues) {
      if (paramValues === void 0) paramValues = C2 || CT.C2;
      if (dart.test(optimizations.isDevMode) && paramValues == null) {
        dart.throw(new core.ArgumentError.notNull("paramValues"));
      }
      let url = this.redirectTo;
      for (let parameter of this[_redirectToParameters]) {
        url = url[$replaceFirst](":" + dart.str(parameter), core.Uri.encodeComponent(paramValues[$_get](parameter)));
      }
      return url;
    }
    get [_redirectToParameters]() {
      return route_definition.RouteDefinition._findParameters.allMatches(this.redirectTo)[$map](core.String, dart.fn(m => m._get(1), RegExpMatchToString()));
    }
  };
  (route_definition.RedirectRouteDefinition.__ = function(opts) {
    let path = opts && 'path' in opts ? opts.path : null;
    let redirectTo = opts && 'redirectTo' in opts ? opts.redirectTo : null;
    let useAsDefault = opts && 'useAsDefault' in opts ? opts.useAsDefault : null;
    let additionalData = opts && 'additionalData' in opts ? opts.additionalData : null;
    let routePath = opts && 'routePath' in opts ? opts.routePath : null;
    this[redirectTo$] = redirectTo;
    route_definition.RedirectRouteDefinition.__proto__.__.call(this, {path: path, useAsDefault: useAsDefault, additionalData: additionalData, routePath: routePath});
    ;
  }).prototype = route_definition.RedirectRouteDefinition.prototype;
  dart.addTypeTests(route_definition.RedirectRouteDefinition);
  dart.setMethodSignature(route_definition.RedirectRouteDefinition, () => ({
    __proto__: dart.getMethods(route_definition.RedirectRouteDefinition.__proto__),
    redirectToUrl: dart.fnType(core.String, [], [core.Map$(core.String, core.String)])
  }));
  dart.setGetterSignature(route_definition.RedirectRouteDefinition, () => ({
    __proto__: dart.getGetters(route_definition.RedirectRouteDefinition.__proto__),
    [_redirectToParameters]: core.Iterable$(core.String)
  }));
  dart.setLibraryUri(route_definition.RedirectRouteDefinition, "package:angular_router/src/route_definition.dart");
  dart.setFieldSignature(route_definition.RedirectRouteDefinition, () => ({
    __proto__: dart.getFields(route_definition.RedirectRouteDefinition.__proto__),
    redirectTo: dart.finalFieldType(core.String)
  }));
  platform_location.PlatformLocation = class PlatformLocation extends core.Object {};
  (platform_location.PlatformLocation.new = function() {
    ;
  }).prototype = platform_location.PlatformLocation.prototype;
  dart.addTypeTests(platform_location.PlatformLocation);
  dart.setLibraryUri(platform_location.PlatformLocation, "package:angular_router/src/location/platform_location.dart");
  dart.defineLazy(platform_location, {
    /*platform_location.baseHRefFromDOM*/get baseHRefFromDOM() {
      return null;
    },
    set baseHRefFromDOM(_) {}
  });
  const _baseHref = dart.privateName(path_location_strategy, "_baseHref");
  const _platformLocation$ = dart.privateName(path_location_strategy, "_platformLocation");
  path_location_strategy.PathLocationStrategy = class PathLocationStrategy extends location_strategy.LocationStrategy {
    onPopState(fn) {
      this[_platformLocation$].onPopState(fn);
    }
    getBaseHref() {
      return this[_baseHref];
    }
    prepareExternalUrl(internal) {
      return location$.Location.joinWithSlash(this[_baseHref], internal);
    }
    hash() {
      return this[_platformLocation$].hash;
    }
    path() {
      return dart.notNull(this[_platformLocation$].pathname) + dart.notNull(location$.Location.normalizeQueryParams(this[_platformLocation$].search));
    }
    pushState(state, title, url, queryParams) {
      let externalUrl = this.prepareExternalUrl(dart.notNull(url) + dart.notNull(location$.Location.normalizeQueryParams(queryParams)));
      this[_platformLocation$].pushState(state, title, externalUrl);
    }
    replaceState(state, title, url, queryParams) {
      let externalUrl = this.prepareExternalUrl(dart.notNull(url) + dart.notNull(location$.Location.normalizeQueryParams(queryParams)));
      this[_platformLocation$].replaceState(state, title, externalUrl);
    }
    forward() {
      this[_platformLocation$].forward();
    }
    back() {
      this[_platformLocation$].back();
    }
  };
  (path_location_strategy.PathLocationStrategy.new = function(_platformLocation, href) {
    if (href === void 0) href = null;
    this[_baseHref] = null;
    this[_platformLocation$] = _platformLocation;
    href == null ? href = this[_platformLocation$].getBaseHrefFromDOM() : null;
    if (href == null) {
      dart.throw(new core.ArgumentError.new("No base href set. Please provide a value for the appBaseHref token or add a base element to the document."));
    }
    this[_baseHref] = href;
  }).prototype = path_location_strategy.PathLocationStrategy.prototype;
  dart.addTypeTests(path_location_strategy.PathLocationStrategy);
  dart.setMethodSignature(path_location_strategy.PathLocationStrategy, () => ({
    __proto__: dart.getMethods(path_location_strategy.PathLocationStrategy.__proto__),
    onPopState: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [html.Event])]),
    getBaseHref: dart.fnType(core.String, []),
    prepareExternalUrl: dart.fnType(core.String, [core.String]),
    hash: dart.fnType(core.String, []),
    path: dart.fnType(core.String, []),
    pushState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String, core.String]),
    replaceState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String, core.String]),
    forward: dart.fnType(dart.void, []),
    back: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(path_location_strategy.PathLocationStrategy, "package:angular_router/src/location/path_location_strategy.dart");
  dart.setFieldSignature(path_location_strategy.PathLocationStrategy, () => ({
    __proto__: dart.getFields(path_location_strategy.PathLocationStrategy.__proto__),
    [_platformLocation$]: dart.fieldType(platform_location.PlatformLocation),
    [_baseHref]: dart.fieldType(core.String)
  }));
  const _subject = dart.privateName(location$, "_subject");
  const _baseHref$ = dart.privateName(location$, "_baseHref");
  const locationStrategy$ = dart.privateName(location$, "Location.locationStrategy");
  location$.Location = class Location extends core.Object {
    get locationStrategy() {
      return this[locationStrategy$];
    }
    set locationStrategy(value) {
      super.locationStrategy = value;
    }
    static _sanitizeBaseHref(platformStrategy) {
      let browserBaseHref = platformStrategy.getBaseHref();
      return location$.Location.stripTrailingSlash(location$._stripIndexHtml(browserBaseHref));
    }
    path() {
      return this.normalize(this.locationStrategy.path());
    }
    hash() {
      return this.normalize(this.locationStrategy.hash());
    }
    normalize(url) {
      return location$.Location.stripTrailingSlash(location$._stripBaseHref(this[_baseHref$], location$._stripIndexHtml(url)));
    }
    normalizePath(path) {
      if (path == null) return null;
      if (!path[$startsWith]("/")) {
        path = "/" + dart.str(path);
      }
      if (path[$endsWith]("/")) {
        path = path[$substring](0, path.length - 1);
      }
      return path;
    }
    prepareExternalUrl(url) {
      if (url[$isNotEmpty] && !url[$startsWith]("/")) {
        url = "/" + dart.str(url);
      }
      return this.locationStrategy.prepareExternalUrl(url);
    }
    go(path, query) {
      if (query === void 0) query = "";
      this.locationStrategy.pushState(null, "", path, query);
    }
    replaceState(path, query) {
      if (query === void 0) query = "";
      this.locationStrategy.replaceState(null, "", path, query);
    }
    forward() {
      this.locationStrategy.forward();
    }
    back() {
      this.locationStrategy.back();
    }
    subscribe(onNext, onThrow, onReturn) {
      if (onThrow === void 0) onThrow = null;
      if (onReturn === void 0) onReturn = null;
      return this[_subject].stream.listen(onNext, {onError: onThrow, onDone: onReturn});
    }
    static normalizeQueryParams(params) {
      return params[$isEmpty] || params[$startsWith]("?") ? params : "?" + dart.str(params);
    }
    static joinWithSlash(start, end) {
      if (start[$isEmpty]) {
        return end;
      }
      if (end[$isEmpty]) {
        return start;
      }
      let slashes = 0;
      if (start[$endsWith]("/")) {
        slashes = slashes + 1;
      }
      if (end[$startsWith]("/")) {
        slashes = slashes + 1;
      }
      if (slashes === 2) {
        return dart.notNull(start) + end[$substring](1);
      }
      if (slashes === 1) {
        return dart.notNull(start) + dart.notNull(end);
      }
      return dart.str(start) + "/" + dart.str(end);
    }
    static stripTrailingSlash(url) {
      if (url[$endsWith]("/")) {
        url = url[$substring](0, url.length - 1);
      }
      return url;
    }
  };
  (location$.Location.new = function(locationStrategy) {
    this[_subject] = async.StreamController.new();
    this[locationStrategy$] = locationStrategy;
    this[_baseHref$] = location$.Location._sanitizeBaseHref(locationStrategy);
    this.locationStrategy.onPopState(dart.fn(ev => {
      this[_subject].add(new (IdentityMapOfString$Object()).from(["url", this.path(), "pop", true, "type", ev.type]));
    }, EventToNull()));
  }).prototype = location$.Location.prototype;
  dart.addTypeTests(location$.Location);
  dart.setMethodSignature(location$.Location, () => ({
    __proto__: dart.getMethods(location$.Location.__proto__),
    path: dart.fnType(core.String, []),
    hash: dart.fnType(core.String, []),
    normalize: dart.fnType(core.String, [core.String]),
    normalizePath: dart.fnType(core.String, [core.String]),
    prepareExternalUrl: dart.fnType(core.String, [core.String]),
    go: dart.fnType(dart.void, [core.String], [core.String]),
    replaceState: dart.fnType(dart.void, [core.String], [core.String]),
    forward: dart.fnType(dart.void, []),
    back: dart.fnType(dart.void, []),
    subscribe: dart.fnType(core.Object, [dart.fnType(dart.void, [dart.dynamic])], [dart.fnType(dart.void, [dart.dynamic]), dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(location$.Location, "package:angular_router/src/location/location.dart");
  dart.setFieldSignature(location$.Location, () => ({
    __proto__: dart.getFields(location$.Location.__proto__),
    locationStrategy: dart.finalFieldType(location_strategy.LocationStrategy),
    [_subject]: dart.finalFieldType(async.StreamController),
    [_baseHref$]: dart.finalFieldType(core.String)
  }));
  location$._stripBaseHref = function _stripBaseHref(baseHref, url) {
    if (baseHref[$isNotEmpty] && url[$startsWith](baseHref)) {
      return url[$substring](baseHref.length);
    }
    return url;
  };
  location$._stripIndexHtml = function _stripIndexHtml(url) {
    if (url[$endsWith]("/index.html")) {
      return url[$substring](0, url.length - 11);
    }
    return url;
  };
  const _platformLocation$0 = dart.privateName(hash_location_strategy, "_platformLocation");
  const _baseHref$0 = dart.privateName(hash_location_strategy, "_baseHref");
  hash_location_strategy.HashLocationStrategy = class HashLocationStrategy extends location_strategy.LocationStrategy {
    onPopState(fn) {
      this[_platformLocation$0].onPopState(fn);
    }
    getBaseHref() {
      return this[_baseHref$0];
    }
    hash() {
      return this[_platformLocation$0].hash;
    }
    path() {
      let t0;
      let path = (t0 = this[_platformLocation$0].hash, t0 == null ? "" : t0);
      return path[$isEmpty] ? path : path[$substring](1);
    }
    prepareExternalUrl(internal) {
      let url = location$.Location.joinWithSlash(this[_baseHref$0], internal);
      return url[$isEmpty] ? dart.str(this[_platformLocation$0].pathname) + dart.str(this[_platformLocation$0].search) : "#" + dart.str(url);
    }
    pushState(state, title, path, queryParams) {
      let url = this.prepareExternalUrl(dart.notNull(path) + dart.notNull(location$.Location.normalizeQueryParams(queryParams)));
      this[_platformLocation$0].pushState(state, title, url);
    }
    replaceState(state, title, path, queryParams) {
      let url = this.prepareExternalUrl(dart.notNull(path) + dart.notNull(location$.Location.normalizeQueryParams(queryParams)));
      this[_platformLocation$0].replaceState(state, title, url);
    }
    forward() {
      this[_platformLocation$0].forward();
    }
    back() {
      this[_platformLocation$0].back();
    }
  };
  (hash_location_strategy.HashLocationStrategy.new = function(_platformLocation, baseHref) {
    let t0;
    if (baseHref === void 0) baseHref = null;
    this[_platformLocation$0] = _platformLocation;
    this[_baseHref$0] = (t0 = baseHref, t0 == null ? "" : t0);
    ;
  }).prototype = hash_location_strategy.HashLocationStrategy.prototype;
  dart.addTypeTests(hash_location_strategy.HashLocationStrategy);
  dart.setMethodSignature(hash_location_strategy.HashLocationStrategy, () => ({
    __proto__: dart.getMethods(hash_location_strategy.HashLocationStrategy.__proto__),
    onPopState: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [html.Event])]),
    getBaseHref: dart.fnType(core.String, []),
    hash: dart.fnType(core.String, []),
    path: dart.fnType(core.String, []),
    prepareExternalUrl: dart.fnType(core.String, [core.String]),
    pushState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String, core.String]),
    replaceState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String, core.String]),
    forward: dart.fnType(dart.void, []),
    back: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(hash_location_strategy.HashLocationStrategy, "package:angular_router/src/location/hash_location_strategy.dart");
  dart.setFieldSignature(hash_location_strategy.HashLocationStrategy, () => ({
    __proto__: dart.getFields(hash_location_strategy.HashLocationStrategy.__proto__),
    [_platformLocation$0]: dart.finalFieldType(platform_location.PlatformLocation),
    [_baseHref$0]: dart.finalFieldType(core.String)
  }));
  const _location = dart.privateName(browser_platform_location, "_location");
  const _history = dart.privateName(browser_platform_location, "_history");
  let C3;
  const _init = dart.privateName(browser_platform_location, "_init");
  browser_platform_location.BrowserPlatformLocation = class BrowserPlatformLocation extends platform_location.PlatformLocation {
    [_init]() {
      this[_location] = html.window[$location];
      this[_history] = html.window.history;
    }
    get location() {
      return this[_location];
    }
    getBaseHrefFromDOM() {
      return platform_location.baseHRefFromDOM();
    }
    onPopState(fn) {
      html.window[$addEventListener]("popstate", fn, false);
    }
    onHashChange(fn) {
      html.window[$addEventListener]("hashchange", fn, false);
    }
    get pathname() {
      return this[_location].pathname;
    }
    get search() {
      return this[_location].search;
    }
    get hash() {
      return this[_location].hash;
    }
    set pathname(newPath) {
      this[_location].pathname = newPath;
    }
    pushState(state, title, url) {
      this[_history][$pushState](state, title, url);
    }
    replaceState(state, title, url) {
      this[_history][$replaceState](state, title, url);
    }
    forward() {
      this[_history].forward();
    }
    back() {
      this[_history].back();
    }
  };
  (browser_platform_location.BrowserPlatformLocation.new = function() {
    this[_location] = null;
    this[_history] = null;
    platform_location.baseHRefFromDOM = C3 || CT.C3;
    this[_init]();
  }).prototype = browser_platform_location.BrowserPlatformLocation.prototype;
  dart.addTypeTests(browser_platform_location.BrowserPlatformLocation);
  dart.setMethodSignature(browser_platform_location.BrowserPlatformLocation, () => ({
    __proto__: dart.getMethods(browser_platform_location.BrowserPlatformLocation.__proto__),
    [_init]: dart.fnType(dart.void, []),
    getBaseHrefFromDOM: dart.fnType(core.String, []),
    onPopState: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [html.Event])]),
    onHashChange: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [html.Event])]),
    pushState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String]),
    replaceState: dart.fnType(dart.void, [dart.dynamic, core.String, core.String]),
    forward: dart.fnType(dart.void, []),
    back: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(browser_platform_location.BrowserPlatformLocation, () => ({
    __proto__: dart.getGetters(browser_platform_location.BrowserPlatformLocation.__proto__),
    location: html.Location,
    pathname: core.String,
    search: core.String,
    hash: core.String
  }));
  dart.setSetterSignature(browser_platform_location.BrowserPlatformLocation, () => ({
    __proto__: dart.getSetters(browser_platform_location.BrowserPlatformLocation.__proto__),
    pathname: core.String
  }));
  dart.setLibraryUri(browser_platform_location.BrowserPlatformLocation, "package:angular_router/src/location/browser_platform_location.dart");
  dart.setFieldSignature(browser_platform_location.BrowserPlatformLocation, () => ({
    __proto__: dart.getFields(browser_platform_location.BrowserPlatformLocation.__proto__),
    [_location]: dart.fieldType(html.Location),
    [_history]: dart.fieldType(html.History)
  }));
  base_href.baseHrefFromDOM = function baseHrefFromDOM() {
    let href = base_href._getBaseElementHref();
    if (href == null) {
      return null;
    }
    return base_href._relativePath(href);
  };
  base_href._getBaseElementHref = function _getBaseElementHref() {
    if (base_href._baseElement == null) {
      base_href._baseElement = html.document.querySelector("base");
      if (base_href._baseElement == null) {
        return null;
      }
    }
    return base_href._baseElement[$getAttribute]("href");
  };
  base_href._relativePath = function _relativePath(url) {
    base_href._urlParsingNode == null ? base_href._urlParsingNode = html.AnchorElement.new() : null;
    base_href._urlParsingNode.href = url;
    let pathname = base_href._urlParsingNode.pathname;
    return pathname[$isEmpty] || pathname[$_get](0) === "/" ? pathname : "/" + dart.str(pathname);
  };
  dart.defineLazy(base_href, {
    /*base_href._urlParsingNode*/get _urlParsingNode() {
      return null;
    },
    set _urlParsingNode(_) {},
    /*base_href._baseElement*/get _baseElement() {
      return null;
    },
    set _baseElement(_) {}
  });
  const queryParameters$0 = dart.privateName(navigation_params, "NavigationParams.queryParameters");
  const fragment$0 = dart.privateName(navigation_params, "NavigationParams.fragment");
  const reload$ = dart.privateName(navigation_params, "NavigationParams.reload");
  const replace$ = dart.privateName(navigation_params, "NavigationParams.replace");
  const updateUrl$ = dart.privateName(navigation_params, "NavigationParams.updateUrl");
  navigation_params.NavigationParams = class NavigationParams extends core.Object {
    get queryParameters() {
      return this[queryParameters$0];
    }
    set queryParameters(value) {
      super.queryParameters = value;
    }
    get fragment() {
      return this[fragment$0];
    }
    set fragment(value) {
      super.fragment = value;
    }
    get reload() {
      return this[reload$];
    }
    set reload(value) {
      super.reload = value;
    }
    get replace() {
      return this[replace$];
    }
    set replace(value) {
      super.replace = value;
    }
    get updateUrl() {
      return this[updateUrl$];
    }
    set updateUrl(value) {
      super.updateUrl = value;
    }
    assertValid() {
      if (!dart.test(optimizations.isDevMode)) {
        return;
      }
      if (this.fragment == null) {
        dart.throw(new core.StateError.new("Must have a non-null `fragment` type"));
      }
      if (this.queryParameters == null) {
        dart.throw(new core.StateError.new("Must have a non-null `query` type"));
      }
    }
  };
  (navigation_params.NavigationParams.new = function(opts) {
    let queryParameters = opts && 'queryParameters' in opts ? opts.queryParameters : C2 || CT.C2;
    let fragment = opts && 'fragment' in opts ? opts.fragment : "";
    let reload = opts && 'reload' in opts ? opts.reload : false;
    let replace = opts && 'replace' in opts ? opts.replace : false;
    let updateUrl = opts && 'updateUrl' in opts ? opts.updateUrl : true;
    this[queryParameters$0] = queryParameters;
    this[fragment$0] = fragment;
    this[reload$] = reload;
    this[replace$] = replace;
    this[updateUrl$] = updateUrl;
    ;
  }).prototype = navigation_params.NavigationParams.prototype;
  dart.addTypeTests(navigation_params.NavigationParams);
  dart.setMethodSignature(navigation_params.NavigationParams, () => ({
    __proto__: dart.getMethods(navigation_params.NavigationParams.__proto__),
    assertValid: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(navigation_params.NavigationParams, "package:angular_router/src/router/navigation_params.dart");
  dart.setFieldSignature(navigation_params.NavigationParams, () => ({
    __proto__: dart.getFields(navigation_params.NavigationParams.__proto__),
    queryParameters: dart.finalFieldType(core.Map$(core.String, core.String)),
    fragment: dart.finalFieldType(core.String),
    reload: dart.finalFieldType(core.bool),
    replace: dart.finalFieldType(core.bool),
    updateUrl: dart.finalFieldType(core.bool)
  }));
  const routerOutlet = dart.privateName(router_outlet_token, "RouterOutletToken.routerOutlet");
  router_outlet_token.RouterOutletToken = class RouterOutletToken extends core.Object {
    get routerOutlet() {
      return this[routerOutlet];
    }
    set routerOutlet(value) {
      this[routerOutlet] = value;
    }
  };
  (router_outlet_token.RouterOutletToken.new = function() {
    this[routerOutlet] = null;
    ;
  }).prototype = router_outlet_token.RouterOutletToken.prototype;
  dart.addTypeTests(router_outlet_token.RouterOutletToken);
  dart.setLibraryUri(router_outlet_token.RouterOutletToken, "package:angular_router/src/router/router_outlet_token.dart");
  dart.setFieldSignature(router_outlet_token.RouterOutletToken, () => ({
    __proto__: dart.getFields(router_outlet_token.RouterOutletToken.__proto__),
    routerOutlet: dart.fieldType(router_outlet_directive.RouterOutlet)
  }));
  const _name$ = dart.privateName(router, "_name");
  let C4;
  let C5;
  let C6;
  let C7;
  router.NavigationResult = class NavigationResult extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (router.NavigationResult.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = router.NavigationResult.prototype;
  dart.addTypeTests(router.NavigationResult);
  dart.setLibraryUri(router.NavigationResult, "package:angular_router/src/router/router.dart");
  dart.setFieldSignature(router.NavigationResult, () => ({
    __proto__: dart.getFields(router.NavigationResult.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(router.NavigationResult, ['toString']);
  router.NavigationResult.SUCCESS = C4 || CT.C4;
  router.NavigationResult.BLOCKED_BY_GUARD = C5 || CT.C5;
  router.NavigationResult.INVALID_ROUTE = C6 || CT.C6;
  router.NavigationResult.values = C7 || CT.C7;
  router.Router = class Router extends core.Object {
    get onRouteActivated() {
      return this.stream;
    }
  };
  (router.Router.new = function() {
    ;
  }).prototype = router.Router.prototype;
  dart.addTypeTests(router.Router);
  dart.setGetterSignature(router.Router, () => ({
    __proto__: dart.getGetters(router.Router.__proto__),
    onRouteActivated: async.Stream$(router_state.RouterState)
  }));
  dart.setLibraryUri(router.Router, "package:angular_router/src/router/router.dart");
  lifecycle.CanActivate = class CanActivate extends core.Object {
    canActivate(current, next) {
      return async.async(core.bool, function* canActivate() {
        return true;
      });
    }
  };
  (lifecycle.CanActivate.new = function() {
    ;
  }).prototype = lifecycle.CanActivate.prototype;
  dart.addTypeTests(lifecycle.CanActivate);
  dart.setMethodSignature(lifecycle.CanActivate, () => ({
    __proto__: dart.getMethods(lifecycle.CanActivate.__proto__),
    canActivate: dart.fnType(async.Future$(core.bool), [router_state.RouterState, router_state.RouterState])
  }));
  dart.setLibraryUri(lifecycle.CanActivate, "package:angular_router/src/lifecycle.dart");
  lifecycle.CanDeactivate = class CanDeactivate extends core.Object {
    canDeactivate(current, next) {
      return async.async(core.bool, function* canDeactivate() {
        return true;
      });
    }
  };
  (lifecycle.CanDeactivate.new = function() {
    ;
  }).prototype = lifecycle.CanDeactivate.prototype;
  dart.addTypeTests(lifecycle.CanDeactivate);
  dart.setMethodSignature(lifecycle.CanDeactivate, () => ({
    __proto__: dart.getMethods(lifecycle.CanDeactivate.__proto__),
    canDeactivate: dart.fnType(async.Future$(core.bool), [router_state.RouterState, router_state.RouterState])
  }));
  dart.setLibraryUri(lifecycle.CanDeactivate, "package:angular_router/src/lifecycle.dart");
  lifecycle.CanNavigate = class CanNavigate extends core.Object {};
  (lifecycle.CanNavigate.new = function() {
    ;
  }).prototype = lifecycle.CanNavigate.prototype;
  dart.addTypeTests(lifecycle.CanNavigate);
  dart.setLibraryUri(lifecycle.CanNavigate, "package:angular_router/src/lifecycle.dart");
  lifecycle.CanReuse = class CanReuse extends core.Object {
    canReuse(current, next) {
      return async.async(core.bool, function* canReuse() {
        return true;
      });
    }
  };
  (lifecycle.CanReuse.new = function() {
    ;
  }).prototype = lifecycle.CanReuse.prototype;
  dart.addTypeTests(lifecycle.CanReuse);
  dart.setMethodSignature(lifecycle.CanReuse, () => ({
    __proto__: dart.getMethods(lifecycle.CanReuse.__proto__),
    canReuse: dart.fnType(async.Future$(core.bool), [router_state.RouterState, router_state.RouterState])
  }));
  dart.setLibraryUri(lifecycle.CanReuse, "package:angular_router/src/lifecycle.dart");
  lifecycle.OnActivate = class OnActivate extends core.Object {};
  (lifecycle.OnActivate.new = function() {
    ;
  }).prototype = lifecycle.OnActivate.prototype;
  dart.addTypeTests(lifecycle.OnActivate);
  dart.setLibraryUri(lifecycle.OnActivate, "package:angular_router/src/lifecycle.dart");
  lifecycle.OnDeactivate = class OnDeactivate extends core.Object {};
  (lifecycle.OnDeactivate.new = function() {
    ;
  }).prototype = lifecycle.OnDeactivate.prototype;
  dart.addTypeTests(lifecycle.OnDeactivate);
  dart.setLibraryUri(lifecycle.OnDeactivate, "package:angular_router/src/lifecycle.dart");
  const _onRouteActivated = dart.privateName(router_impl, "_onRouteActivated");
  const _activeState = dart.privateName(router_impl, "_activeState");
  const _activeComponentRefs = dart.privateName(router_impl, "_activeComponentRefs");
  const _onNavigationStart = dart.privateName(router_impl, "_onNavigationStart");
  const _rootOutlet = dart.privateName(router_impl, "_rootOutlet");
  const _lastNavigation = dart.privateName(router_impl, "_lastNavigation");
  const _location$ = dart.privateName(router_impl, "_location");
  const _routerHook$0 = dart.privateName(router_impl, "_routerHook");
  const _enqueueNavigation = dart.privateName(router_impl, "_enqueueNavigation");
  const _getAbsolutePath = dart.privateName(router_impl, "_getAbsolutePath");
  const _navigate = dart.privateName(router_impl, "_navigate");
  const _canNavigate = dart.privateName(router_impl, "_canNavigate");
  let C9;
  const MapEquality__valueEquality = dart.privateName(equality, "MapEquality._valueEquality");
  const MapEquality__keyEquality = dart.privateName(equality, "MapEquality._keyEquality");
  let C8;
  const _resolveState = dart.privateName(router_impl, "_resolveState");
  const _canDeactivate = dart.privateName(router_impl, "_canDeactivate");
  const _canActivate = dart.privateName(router_impl, "_canActivate");
  const _activateRouterState = dart.privateName(router_impl, "_activateRouterState");
  const _resolveStateForOutlet = dart.privateName(router_impl, "_resolveStateForOutlet");
  const _attachDefaultChildren = dart.privateName(router_impl, "_attachDefaultChildren");
  const _getTypeFromRoute = dart.privateName(router_impl, "_getTypeFromRoute");
  router_impl.RouterImpl = class RouterImpl extends router.Router {
    get current() {
      return this[_activeState];
    }
    get onNavigationStart() {
      this[_onNavigationStart] == null ? this[_onNavigationStart] = StreamControllerOfString().broadcast({sync: true}) : null;
      return this[_onNavigationStart].stream;
    }
    get stream() {
      return this[_onRouteActivated].stream;
    }
    registerRootOutlet(routerOutlet) {
      if (this[_rootOutlet] == null) {
        this[_rootOutlet] = routerOutlet;
        let url = url$.Url.parse(this[_location$].path());
        this[_enqueueNavigation](url.path, new navigation_params.NavigationParams.new({queryParameters: url.queryParameters, fragment: dart.test(url$.Url.isHashStrategy) ? url.fragment : url$.Url.normalizeHash(this[_location$].hash()), replace: true}));
      }
    }
    unregisterRootOutlet(routerOutlet) {
      if (dart.equals(this[_rootOutlet], routerOutlet)) {
        this[_rootOutlet] = null;
        this[_activeState] = null;
      }
    }
    navigate(path, navigationParams) {
      if (navigationParams === void 0) navigationParams = null;
      let absolutePath = this[_getAbsolutePath](path, this[_activeState]);
      return this[_enqueueNavigation](absolutePath, navigationParams);
    }
    navigateByUrl(url, opts) {
      let reload = opts && 'reload' in opts ? opts.reload : false;
      let replace = opts && 'replace' in opts ? opts.replace : false;
      let parsed = url$.Url.parse(url);
      return this.navigate(parsed.path, new navigation_params.NavigationParams.new({fragment: parsed.fragment, queryParameters: parsed.queryParameters, reload: reload, replace: replace}));
    }
    [_enqueueNavigation](path, navigationParams) {
      let navigationCompleter = CompleterOfNavigationResult().sync();
      this[_lastNavigation] = this[_lastNavigation].then(dart.void, dart.fn(_ => this[_navigate](path, navigationParams).then(dart.void, dart.bind(navigationCompleter, 'complete')).catchError(dart.bind(navigationCompleter, 'completeError')), voidToFutureOfvoid()));
      return navigationCompleter.future;
    }
    [_navigate](path, navigationParams, opts) {
      let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
      return async.async(router.NavigationResult, (function* _navigate$() {
        let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8;
        if (!dart.test(isRedirect)) {
          if (!dart.test(yield this[_canNavigate]())) {
            return router.NavigationResult.BLOCKED_BY_GUARD;
          } else {
            t0 = this[_onNavigationStart];
            t0 == null ? null : t0.add(path);
          }
        }
        t0$ = navigationParams;
        t0$ == null ? null : t0$.assertValid();
        path = (t0$1 = (yield (t0$0 = this[_routerHook$0], t0$0 == null ? null : t0$0.navigationPath(path, navigationParams))), t0$1 == null ? path : t0$1);
        path = this[_location$].normalizePath(path);
        navigationParams = (t0$3 = (yield (t0$2 = this[_routerHook$0], t0$2 == null ? null : t0$2.navigationParams(path, navigationParams))), t0$3 == null ? navigationParams : t0$3);
        t0$4 = navigationParams;
        t0$4 == null ? null : t0$4.assertValid();
        let queryParameters = (t0$6 = (t0$5 = navigationParams, t0$5 == null ? null : t0$5.queryParameters), t0$6 == null ? new (IdentityMapOfString$String()).new() : t0$6);
        let reload = navigationParams != null ? navigationParams.reload : false;
        if (!dart.test(reload) && this.current != null && path == this.current.path && (t0$8 = (t0$7 = navigationParams, t0$7 == null ? null : t0$7.fragment), t0$8 == null ? "" : t0$8) == this.current.fragment && dart.test((C8 || CT.C8).equals(queryParameters, this.current.queryParameters))) {
          return router.NavigationResult.SUCCESS;
        }
        let nextState = (yield this[_resolveState](path, navigationParams));
        if (nextState == null || dart.test(nextState.routes[$isEmpty])) {
          return router.NavigationResult.INVALID_ROUTE;
        }
        if (dart.test(nextState.routes[$isNotEmpty])) {
          let leaf = nextState.routes[$last];
          if (route_definition.RedirectRouteDefinition.is(leaf)) {
            let newPath = this[_getAbsolutePath](leaf.redirectToUrl(nextState.parameters), nextState.build());
            return this[_navigate](newPath, navigationParams, {isRedirect: true});
          }
        }
        if (!dart.test(yield this[_canDeactivate](nextState))) {
          return router.NavigationResult.BLOCKED_BY_GUARD;
        }
        if (!dart.test(yield this[_canActivate](nextState))) {
          return router.NavigationResult.BLOCKED_BY_GUARD;
        }
        yield this[_activateRouterState](nextState);
        if (navigationParams == null || dart.test(navigationParams.updateUrl)) {
          let url = nextState.build().toUrl();
          if (navigationParams != null && dart.test(navigationParams.replace)) {
            this[_location$].replaceState(url);
          } else {
            this[_location$].go(url);
          }
        }
        return router.NavigationResult.SUCCESS;
      }).bind(this));
    }
    [_getAbsolutePath](path, state) {
      if (path[$startsWith]("./")) {
        let currentRoutes = state.routes[$take](dart.notNull(state.routes[$length]) - 1);
        let currentPath = currentRoutes[$fold](core.String, "", dart.fn((soFar, route) => dart.notNull(soFar) + dart.notNull(route.toUrl(state.parameters)), StringAndRouteDefinitionToString()));
        return location$.Location.joinWithSlash(currentPath, path[$substring](2));
      }
      return path;
    }
    [_resolveState](path, navigationParams) {
      return this[_resolveStateForOutlet](this[_rootOutlet], path).then(router_state.MutableRouterState, dart.fn(routerState => {
        if (routerState != null) {
          routerState.path = path;
          if (navigationParams != null) {
            routerState.fragment = navigationParams.fragment;
            routerState.queryParameters = navigationParams.queryParameters;
          }
          return this[_attachDefaultChildren](routerState);
        }
      }, MutableRouterStateToFutureOfMutableRouterState()));
    }
    [_resolveStateForOutlet](outlet, path) {
      return async.async(router_state.MutableRouterState, (function* _resolveStateForOutlet$() {
        let t0, t0$;
        if (outlet == null) {
          if (path === "") {
            return new router_state.MutableRouterState.new();
          }
          return null;
        }
        for (let route of outlet.routes) {
          let match = route.toRegExp()[$matchAsPrefix](path);
          if (match != null) {
            let routerState = null;
            let component = (yield this[_getTypeFromRoute](route));
            let componentRef = component != null ? outlet.prepare(component) : null;
            if (match.end !== path.length) {
              if (componentRef == null) {
                continue;
              }
              let nextOutlet = router_outlet_directive.RouterOutlet._check(dart.dload(componentRef.injector.get(dart.wrapType(router_outlet_token.RouterOutletToken)), 'routerOutlet'));
              if (nextOutlet == null) {
                continue;
              }
            }
            if (componentRef != null) {
              let nextOutlet = router_outlet_directive.RouterOutlet._check(dart.dload(componentRef.injector.get(dart.wrapType(router_outlet_token.RouterOutletToken)), 'routerOutlet'));
              routerState = (yield this[_resolveStateForOutlet](nextOutlet, path[$substring](match.end)));
            }
            if (routerState == null) {
              if (match.end !== path.length) {
                continue;
              }
              routerState = new router_state.MutableRouterState.new();
            }
            routerState.routes[$insert](0, route);
            if (component != null) {
              t0 = routerState;
              t0.factories[$_set](componentRef, component);
              t0.components[$insert](0, componentRef);
              t0;
            }
            let parameters = route.parameters;
            let index = 1;
            for (let parameter of parameters) {
              routerState.parameters[$_set](parameter, core.Uri.decodeComponent(match._get((t0$ = index, index = t0$ + 1, t0$))));
            }
            return routerState;
          }
        }
        if (path === "") {
          return new router_state.MutableRouterState.new();
        }
        return null;
      }).bind(this));
    }
    [_getTypeFromRoute](route) {
      if (route_definition.ComponentRouteDefinition.is(route)) {
        return route.component;
      }
      if (route_definition.DeferredRouteDefinition.is(route)) {
        return route.loader();
      }
      return null;
    }
    [_attachDefaultChildren](stateSoFar) {
      return async.async(router_state.MutableRouterState, (function* _attachDefaultChildren$() {
        let t0;
        let nextOutlet = null;
        if (dart.test(stateSoFar.routes[$isEmpty])) {
          nextOutlet = this[_rootOutlet];
        } else {
          let component = (yield this[_getTypeFromRoute](stateSoFar.routes[$last]));
          if (component == null) {
            return stateSoFar;
          }
          nextOutlet = router_outlet_directive.RouterOutlet._check(dart.dload(stateSoFar.components[$last].injector.get(dart.wrapType(router_outlet_token.RouterOutletToken)), 'routerOutlet'));
        }
        if (nextOutlet == null) {
          return stateSoFar;
        }
        for (let route of nextOutlet.routes) {
          if (dart.test(route.useAsDefault)) {
            stateSoFar.routes[$add](route);
            let component = (yield this[_getTypeFromRoute](stateSoFar.routes[$last]));
            if (component != null) {
              let instance = nextOutlet.prepare(component);
              t0 = stateSoFar;
              t0.factories[$_set](instance, component);
              t0.components[$add](instance);
              t0;
              return this[_attachDefaultChildren](stateSoFar);
            }
            return stateSoFar;
          }
        }
        return stateSoFar;
      }).bind(this));
    }
    [_canNavigate]() {
      return async.async(core.bool, (function* _canNavigate() {
        for (let componentRef of this[_activeComponentRefs]) {
          let component = componentRef.instance;
          if (lifecycle.CanNavigate.is(component) && !dart.test(yield component.canNavigate())) {
            return false;
          }
        }
        if (this[_routerHook$0] != null && !dart.test(yield this[_routerHook$0].canNavigate())) {
          return false;
        }
        return true;
      }).bind(this));
    }
    [_canDeactivate](mutableNextState) {
      return async.async(core.bool, (function* _canDeactivate() {
        let nextState = mutableNextState.build();
        for (let componentRef of this[_activeComponentRefs]) {
          let component = componentRef.instance;
          if (lifecycle.CanDeactivate.is(component) && !dart.test(yield component.canDeactivate(this[_activeState], nextState))) {
            return false;
          }
          if (this[_routerHook$0] != null && !dart.test(yield this[_routerHook$0].canDeactivate(component, this[_activeState], nextState))) {
            return false;
          }
        }
        return true;
      }).bind(this));
    }
    [_canActivate](mutableNextState) {
      return async.async(core.bool, (function* _canActivate() {
        let nextState = mutableNextState.build();
        for (let componentRef of mutableNextState.components) {
          let component = componentRef.instance;
          if (lifecycle.CanActivate.is(component) && !dart.test(yield component.canActivate(this[_activeState], nextState))) {
            return false;
          }
          if (this[_routerHook$0] != null && !dart.test(yield this[_routerHook$0].canActivate(component, this[_activeState], nextState))) {
            return false;
          }
        }
        return true;
      }).bind(this));
    }
    [_activateRouterState](mutableNextState) {
      return async.async(dart.dynamic, (function* _activateRouterState() {
        let nextState = mutableNextState.build();
        for (let componentRef of this[_activeComponentRefs]) {
          let component = componentRef.instance;
          if (lifecycle.OnDeactivate.is(component)) {
            component.onDeactivate(this[_activeState], nextState);
          }
        }
        let currentOutlet = this[_rootOutlet];
        for (let i = 0, len = mutableNextState.components[$length]; i < dart.notNull(len); i = i + 1) {
          let resolvedComponentRef = mutableNextState.components[$_get](i);
          let componentFactory = mutableNextState.factories[$_get](resolvedComponentRef);
          yield currentOutlet.activate(componentFactory, this[_activeState], nextState);
          let componentRef = currentOutlet.prepare(componentFactory);
          if (componentRef != resolvedComponentRef) {
            mutableNextState.components[$_set](i, componentRef);
          }
          currentOutlet = router_outlet_directive.RouterOutlet._check(dart.dload(componentRef.injector.get(dart.wrapType(router_outlet_token.RouterOutletToken)), 'routerOutlet'));
          let component = componentRef.instance;
          if (lifecycle.OnActivate.is(component)) {
            component.onActivate(this[_activeState], nextState);
          }
        }
        this[_onRouteActivated].add(nextState);
        this[_activeState] = nextState;
        this[_activeComponentRefs] = mutableNextState.components;
      }).bind(this));
    }
  };
  (router_impl.RouterImpl.new = function(_location, _routerHook) {
    this[_onRouteActivated] = StreamControllerOfRouterState().broadcast({sync: true});
    this[_activeState] = null;
    this[_activeComponentRefs] = JSArrayOfComponentRef().of([]);
    this[_onNavigationStart] = null;
    this[_rootOutlet] = null;
    this[_lastNavigation] = FutureOfvoid().value();
    this[_location$] = _location;
    this[_routerHook$0] = _routerHook;
    url$.Url.isHashStrategy = hash_location_strategy.HashLocationStrategy.is(this[_location$].locationStrategy);
    this[_location$].subscribe(dart.fn(_ => {
      let url = url$.Url.parse(this[_location$].path());
      let fragment = dart.test(url$.Url.isHashStrategy) ? url.fragment : url$.Url.normalizeHash(this[_location$].hash());
      let navigationParams = new navigation_params.NavigationParams.new({queryParameters: url.queryParameters, fragment: fragment, updateUrl: false});
      this[_enqueueNavigation](url.path, navigationParams).then(core.Null, dart.fn(navigationResult => {
        if (dart.equals(navigationResult, router.NavigationResult.BLOCKED_BY_GUARD)) {
          this[_location$].replaceState(this[_activeState].toUrl());
        }
      }, NavigationResultToNull()));
    }, dynamicToNull()));
  }).prototype = router_impl.RouterImpl.prototype;
  dart.addTypeTests(router_impl.RouterImpl);
  dart.setMethodSignature(router_impl.RouterImpl, () => ({
    __proto__: dart.getMethods(router_impl.RouterImpl.__proto__),
    registerRootOutlet: dart.fnType(dart.void, [router_outlet_directive.RouterOutlet]),
    unregisterRootOutlet: dart.fnType(dart.void, [router_outlet_directive.RouterOutlet]),
    navigate: dart.fnType(async.Future$(router.NavigationResult), [core.String], [navigation_params.NavigationParams]),
    navigateByUrl: dart.fnType(async.Future$(router.NavigationResult), [core.String], {reload: core.bool, replace: core.bool}, {}),
    [_enqueueNavigation]: dart.fnType(async.Future$(router.NavigationResult), [core.String, navigation_params.NavigationParams]),
    [_navigate]: dart.fnType(async.Future$(router.NavigationResult), [core.String, navigation_params.NavigationParams], {isRedirect: core.bool}, {}),
    [_getAbsolutePath]: dart.fnType(core.String, [core.String, router_state.RouterState]),
    [_resolveState]: dart.fnType(async.Future$(router_state.MutableRouterState), [core.String, navigation_params.NavigationParams]),
    [_resolveStateForOutlet]: dart.fnType(async.Future$(router_state.MutableRouterState), [router_outlet_directive.RouterOutlet, core.String]),
    [_getTypeFromRoute]: dart.fnType(async.FutureOr$(component_factory.ComponentFactory), [route_definition.RouteDefinition]),
    [_attachDefaultChildren]: dart.fnType(async.Future$(router_state.MutableRouterState), [router_state.MutableRouterState]),
    [_canNavigate]: dart.fnType(async.Future$(core.bool), []),
    [_canDeactivate]: dart.fnType(async.Future$(core.bool), [router_state.MutableRouterState]),
    [_canActivate]: dart.fnType(async.Future$(core.bool), [router_state.MutableRouterState]),
    [_activateRouterState]: dart.fnType(async.Future, [router_state.MutableRouterState])
  }));
  dart.setGetterSignature(router_impl.RouterImpl, () => ({
    __proto__: dart.getGetters(router_impl.RouterImpl.__proto__),
    current: router_state.RouterState,
    onNavigationStart: async.Stream$(core.String),
    stream: async.Stream$(router_state.RouterState)
  }));
  dart.setLibraryUri(router_impl.RouterImpl, "package:angular_router/src/router/router_impl.dart");
  dart.setFieldSignature(router_impl.RouterImpl, () => ({
    __proto__: dart.getFields(router_impl.RouterImpl.__proto__),
    [_onRouteActivated]: dart.finalFieldType(async.StreamController$(router_state.RouterState)),
    [_location$]: dart.finalFieldType(location$.Location),
    [_routerHook$0]: dart.finalFieldType(router_hook.RouterHook),
    [_activeState]: dart.fieldType(router_state.RouterState),
    [_activeComponentRefs]: dart.fieldType(core.Iterable$(component_factory.ComponentRef)),
    [_onNavigationStart]: dart.fieldType(async.StreamController$(core.String)),
    [_rootOutlet]: dart.fieldType(router_outlet_directive.RouterOutlet),
    [_lastNavigation]: dart.fieldType(async.Future$(dart.void))
  }));
  dart.trackLibraries("packages/angular_router/src/directives/router_outlet_directive", {
    "package:angular_router/src/location/location_strategy.dart": location_strategy,
    "package:angular_router/src/directives/router_outlet_directive.dart": router_outlet_directive,
    "package:angular_router/src/router_hook.dart": router_hook,
    "package:angular_router/src/router/router_state.dart": router_state,
    "package:angular_router/src/url.dart": url$,
    "package:angular_router/src/route_path.dart": route_path,
    "package:angular_router/src/route_definition.dart": route_definition,
    "package:angular_router/src/location.dart": location,
    "package:angular_router/src/location/platform_location.dart": platform_location,
    "package:angular_router/src/location/path_location_strategy.dart": path_location_strategy,
    "package:angular_router/src/location/location.dart": location$,
    "package:angular_router/src/location/hash_location_strategy.dart": hash_location_strategy,
    "package:angular_router/src/location/browser_platform_location.dart": browser_platform_location,
    "package:angular_router/src/location/base_href.dart": base_href,
    "package:angular_router/src/router/navigation_params.dart": navigation_params,
    "package:angular_router/src/router/router_outlet_token.dart": router_outlet_token,
    "package:angular_router/src/router/router.dart": router,
    "package:angular_router/src/lifecycle.dart": lifecycle,
    "package:angular_router/src/router/router_impl.dart": router_impl
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../location/location_strategy.dart","router_outlet_directive.dart","../router_hook.dart","../url.dart","../router/router_state.dart","../route_path.dart","../route_definition.dart","../location/platform_location.dart","../location/path_location_strategy.dart","../location/location.dart","../location/hash_location_strategy.dart","../location/browser_platform_location.dart","../location/base_href.dart","../router/navigation_params.dart","../router/router_outlet_token.dart","../router/router.dart","../lifecycle.dart","../router/router_impl.dart"],"names":[],"mappings":"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","file":"router_outlet_directive.ddc.js"}');
  // Exports:
  return {
    src__location__location_strategy: location_strategy,
    src__directives__router_outlet_directive: router_outlet_directive,
    src__router_hook: router_hook,
    src__router__router_state: router_state,
    src__url: url$,
    src__route_path: route_path,
    src__route_definition: route_definition,
    src__location: location,
    src__location__platform_location: platform_location,
    src__location__path_location_strategy: path_location_strategy,
    src__location__location: location$,
    src__location__hash_location_strategy: hash_location_strategy,
    src__location__browser_platform_location: browser_platform_location,
    src__location__base_href: base_href,
    src__router__navigation_params: navigation_params,
    src__router__router_outlet_token: router_outlet_token,
    src__router__router: router,
    src__lifecycle: lifecycle,
    src__router__router_impl: router_impl
  };
});

//# sourceMappingURL=router_outlet_directive.ddc.js.map
