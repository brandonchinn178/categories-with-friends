define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/angular.template', 'packages/angular_router/src/directives/router_outlet_directive'], function(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular__angular$46template, packages__angular_router__src__directives__router_outlet_directive) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const route_path = packages__angular_router__src__directives__router_outlet_directive.src__route_path;
  const route_definition = packages__angular_router__src__directives__router_outlet_directive.src__route_definition;
  const game$46css$46shim = Object.create(dart.library);
  const game = Object.create(dart.library);
  const not_found_component = Object.create(dart.library);
  const game$46template = Object.create(dart.library);
  const game_home$46css$46shim = Object.create(dart.library);
  const root$46css$46shim = Object.create(dart.library);
  const root = Object.create(dart.library);
  const game_home = Object.create(dart.library);
  const game_home$46template = Object.create(dart.library);
  const route_paths = Object.create(dart.library);
  const routes = Object.create(dart.library);
  const not_found_component$46template = Object.create(dart.library);
  const root$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $_get = dartx._get;
  let ComponentRefOfGameComponent = () => (ComponentRefOfGameComponent = dart.constFn(component_factory.ComponentRef$(game.GameComponent)))();
  let ComponentFactoryOfGameComponent = () => (ComponentFactoryOfGameComponent = dart.constFn(component_factory.ComponentFactory$(game.GameComponent)))();
  let AppViewOfGameComponent = () => (AppViewOfGameComponent = dart.constFn(app_view.AppView$(game.GameComponent)))();
  let AppViewAndintToAppViewOfGameComponent = () => (AppViewAndintToAppViewOfGameComponent = dart.constFn(dart.fnType(AppViewOfGameComponent(), [app_view.AppView, core.int])))();
  let ComponentRefOfGameHomeComponent = () => (ComponentRefOfGameHomeComponent = dart.constFn(component_factory.ComponentRef$(game_home.GameHomeComponent)))();
  let ComponentFactoryOfGameHomeComponent = () => (ComponentFactoryOfGameHomeComponent = dart.constFn(component_factory.ComponentFactory$(game_home.GameHomeComponent)))();
  let AppViewOfGameHomeComponent = () => (AppViewOfGameHomeComponent = dart.constFn(app_view.AppView$(game_home.GameHomeComponent)))();
  let AppViewAndintToAppViewOfGameHomeComponent = () => (AppViewAndintToAppViewOfGameHomeComponent = dart.constFn(dart.fnType(AppViewOfGameHomeComponent(), [app_view.AppView, core.int])))();
  let JSArrayOfRouteDefinition = () => (JSArrayOfRouteDefinition = dart.constFn(_interceptors.JSArray$(route_definition.RouteDefinition)))();
  let ComponentRefOfNotFoundComponent = () => (ComponentRefOfNotFoundComponent = dart.constFn(component_factory.ComponentRef$(not_found_component.NotFoundComponent)))();
  let ComponentFactoryOfNotFoundComponent = () => (ComponentFactoryOfNotFoundComponent = dart.constFn(component_factory.ComponentFactory$(not_found_component.NotFoundComponent)))();
  let AppViewOfNotFoundComponent = () => (AppViewOfNotFoundComponent = dart.constFn(app_view.AppView$(not_found_component.NotFoundComponent)))();
  let AppViewAndintToAppViewOfNotFoundComponent = () => (AppViewAndintToAppViewOfNotFoundComponent = dart.constFn(dart.fnType(AppViewOfNotFoundComponent(), [app_view.AppView, core.int])))();
  let ComponentRefOfRootComponent = () => (ComponentRefOfRootComponent = dart.constFn(component_factory.ComponentRef$(root.RootComponent)))();
  let ComponentFactoryOfRootComponent = () => (ComponentFactoryOfRootComponent = dart.constFn(component_factory.ComponentFactory$(root.RootComponent)))();
  let AppViewOfRootComponent = () => (AppViewOfRootComponent = dart.constFn(app_view.AppView$(root.RootComponent)))();
  let AppViewAndintToAppViewOfRootComponent = () => (AppViewAndintToAppViewOfRootComponent = dart.constFn(dart.fnType(AppViewOfRootComponent(), [app_view.AppView, core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(game$46template.viewFactory_GameComponentHost0, AppViewAndintToAppViewOfGameComponent());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfGameComponent().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "game"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    },
    get C4() {
      return C4 = dart.fn(game_home$46template.viewFactory_GameHomeComponentHost0, AppViewAndintToAppViewOfGameHomeComponent());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfGameHomeComponent().prototype,
        [ComponentFactory__viewFactory]: C4 || CT.C4,
        [ComponentFactory_selector]: "game-home"
      });
    },
    get C6() {
      return C6 = dart.fn(not_found_component$46template.viewFactory_NotFoundComponentHost0, AppViewAndintToAppViewOfNotFoundComponent());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ComponentFactoryOfNotFoundComponent().prototype,
        [ComponentFactory__viewFactory]: C6 || CT.C6,
        [ComponentFactory_selector]: "my-not-found"
      });
    },
    get C8() {
      return C8 = dart.fn(root$46template.viewFactory_RootComponentHost0, AppViewAndintToAppViewOfRootComponent());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ComponentFactoryOfRootComponent().prototype,
        [ComponentFactory__viewFactory]: C8 || CT.C8,
        [ComponentFactory_selector]: "root"
      });
    }
  });
  dart.defineLazy(game$46css$46shim, {
    /*game$46css$46shim.styles*/get styles() {
      return [""];
    }
  });
  game.GameComponent = class GameComponent extends core.Object {};
  (game.GameComponent.new = function() {
    ;
  }).prototype = game.GameComponent.prototype;
  dart.addTypeTests(game.GameComponent);
  dart.setLibraryUri(game.GameComponent, "package:router_example/src/game/game.dart");
  not_found_component.NotFoundComponent = class NotFoundComponent extends core.Object {};
  (not_found_component.NotFoundComponent.new = function() {
    ;
  }).prototype = not_found_component.NotFoundComponent.prototype;
  dart.addTypeTests(not_found_component.NotFoundComponent);
  dart.setLibraryUri(not_found_component.NotFoundComponent, "package:router_example/src/not_found_component.dart");
  game$46template.ViewGameComponent0 = class ViewGameComponent0 extends app_view.AppView$(game.GameComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:router_example/lib/src/game/game.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendElement(doc, parentRenderNode, "h1");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "Game");
      this.init0();
    }
    initComponentStyles() {
      let styles = game$46template.ViewGameComponent0._componentStyles;
      if (styles == null) {
        game$46template.ViewGameComponent0._componentStyles = styles = game$46template.ViewGameComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(game$46template.styles$GameComponent, game$46template.ViewGameComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (game$46template.ViewGameComponent0.new = function(parentView, parentIndex) {
    game$46template.ViewGameComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("game"));
  }).prototype = game$46template.ViewGameComponent0.prototype;
  dart.addTypeTests(game$46template.ViewGameComponent0);
  dart.setLibraryUri(game$46template.ViewGameComponent0, "package:router_example/src/game/game.template.dart");
  dart.defineLazy(game$46template.ViewGameComponent0, {
    /*game$46template.ViewGameComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _compView_0 = dart.privateName(game$46template, "_compView_0");
  const _GameComponent_0_5 = dart.privateName(game$46template, "_GameComponent_0_5");
  game$46template._ViewGameComponentHost0 = class _ViewGameComponentHost0 extends app_view.AppView$(game.GameComponent) {
    build() {
      this[_compView_0] = new game$46template.ViewGameComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_GameComponent_0_5] = new game.GameComponent.new();
      this[_compView_0].create(this[_GameComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfGameComponent()).new(0, this, this.rootEl, this[_GameComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (game$46template._ViewGameComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_GameComponent_0_5] = null;
    game$46template._ViewGameComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = game$46template._ViewGameComponentHost0.prototype;
  dart.addTypeTests(game$46template._ViewGameComponentHost0);
  dart.setLibraryUri(game$46template._ViewGameComponentHost0, "package:router_example/src/game/game.template.dart");
  dart.setFieldSignature(game$46template._ViewGameComponentHost0, () => ({
    __proto__: dart.getFields(game$46template._ViewGameComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(game$46template.ViewGameComponent0),
    [_GameComponent_0_5]: dart.fieldType(game.GameComponent)
  }));
  game$46template.viewFactory_GameComponentHost0 = function viewFactory_GameComponentHost0(parentView, parentIndex) {
    return new game$46template._ViewGameComponentHost0.new(parentView, parentIndex);
  };
  game$46template.initReflector = function initReflector() {
    if (dart.test(game$46template._visited)) {
      return;
    }
    game$46template._visited = true;
    reflector.registerComponent(dart.wrapType(game.GameComponent), game$46template.GameComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.copyProperties(game$46template, {
    get GameComponentNgFactory() {
      return game$46template._GameComponentNgFactory;
    }
  });
  let C1;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C0;
  let C2;
  dart.defineLazy(game$46template, {
    /*game$46template.styles$GameComponent*/get styles$GameComponent() {
      return [game$46css$46shim.styles];
    },
    /*game$46template._GameComponentNgFactory*/get _GameComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*game$46template.styles$GameComponentHost*/get styles$GameComponentHost() {
      return C2 || CT.C2;
    },
    /*game$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.defineLazy(game_home$46css$46shim, {
    /*game_home$46css$46shim.styles*/get styles() {
      return [""];
    }
  });
  dart.defineLazy(root$46css$46shim, {
    /*root$46css$46shim.styles*/get styles() {
      return [""];
    }
  });
  root.RootComponent = class RootComponent extends core.Object {};
  (root.RootComponent.new = function() {
    ;
  }).prototype = root.RootComponent.prototype;
  dart.addTypeTests(root.RootComponent);
  dart.setLibraryUri(root.RootComponent, "package:router_example/src/root/root.dart");
  game_home.GameHomeComponent = class GameHomeComponent extends core.Object {};
  (game_home.GameHomeComponent.new = function() {
    ;
  }).prototype = game_home.GameHomeComponent.prototype;
  dart.addTypeTests(game_home.GameHomeComponent);
  dart.setLibraryUri(game_home.GameHomeComponent, "package:router_example/src/game/game_home.dart");
  game_home$46template.ViewGameHomeComponent0 = class ViewGameHomeComponent0 extends app_view.AppView$(game_home.GameHomeComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:router_example/lib/src/game/game_home.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendElement(doc, parentRenderNode, "h1");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "Game home");
      this.init0();
    }
    initComponentStyles() {
      let styles = game_home$46template.ViewGameHomeComponent0._componentStyles;
      if (styles == null) {
        game_home$46template.ViewGameHomeComponent0._componentStyles = styles = game_home$46template.ViewGameHomeComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(game_home$46template.styles$GameHomeComponent, game_home$46template.ViewGameHomeComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (game_home$46template.ViewGameHomeComponent0.new = function(parentView, parentIndex) {
    game_home$46template.ViewGameHomeComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("game-home"));
  }).prototype = game_home$46template.ViewGameHomeComponent0.prototype;
  dart.addTypeTests(game_home$46template.ViewGameHomeComponent0);
  dart.setLibraryUri(game_home$46template.ViewGameHomeComponent0, "package:router_example/src/game/game_home.template.dart");
  dart.defineLazy(game_home$46template.ViewGameHomeComponent0, {
    /*game_home$46template.ViewGameHomeComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _compView_0$ = dart.privateName(game_home$46template, "_compView_0");
  const _GameHomeComponent_0_5 = dart.privateName(game_home$46template, "_GameHomeComponent_0_5");
  game_home$46template._ViewGameHomeComponentHost0 = class _ViewGameHomeComponentHost0 extends app_view.AppView$(game_home.GameHomeComponent) {
    build() {
      this[_compView_0$] = new game_home$46template.ViewGameHomeComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_GameHomeComponent_0_5] = new game_home.GameHomeComponent.new();
      this[_compView_0$].create(this[_GameHomeComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfGameHomeComponent()).new(0, this, this.rootEl, this[_GameHomeComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
    }
  };
  (game_home$46template._ViewGameHomeComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_GameHomeComponent_0_5] = null;
    game_home$46template._ViewGameHomeComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = game_home$46template._ViewGameHomeComponentHost0.prototype;
  dart.addTypeTests(game_home$46template._ViewGameHomeComponentHost0);
  dart.setLibraryUri(game_home$46template._ViewGameHomeComponentHost0, "package:router_example/src/game/game_home.template.dart");
  dart.setFieldSignature(game_home$46template._ViewGameHomeComponentHost0, () => ({
    __proto__: dart.getFields(game_home$46template._ViewGameHomeComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(game_home$46template.ViewGameHomeComponent0),
    [_GameHomeComponent_0_5]: dart.fieldType(game_home.GameHomeComponent)
  }));
  game_home$46template.viewFactory_GameHomeComponentHost0 = function viewFactory_GameHomeComponentHost0(parentView, parentIndex) {
    return new game_home$46template._ViewGameHomeComponentHost0.new(parentView, parentIndex);
  };
  game_home$46template.initReflector = function initReflector$() {
    if (dart.test(game_home$46template._visited)) {
      return;
    }
    game_home$46template._visited = true;
    reflector.registerComponent(dart.wrapType(game_home.GameHomeComponent), game_home$46template.GameHomeComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.copyProperties(game_home$46template, {
    get GameHomeComponentNgFactory() {
      return game_home$46template._GameHomeComponentNgFactory;
    }
  });
  let C4;
  let C3;
  dart.defineLazy(game_home$46template, {
    /*game_home$46template.styles$GameHomeComponent*/get styles$GameHomeComponent() {
      return [game_home$46css$46shim.styles];
    },
    /*game_home$46template._GameHomeComponentNgFactory*/get _GameHomeComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*game_home$46template.styles$GameHomeComponentHost*/get styles$GameHomeComponentHost() {
      return C2 || CT.C2;
    },
    /*game_home$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  route_paths.RoutePaths = class RoutePaths extends core.Object {};
  (route_paths.RoutePaths.new = function() {
    ;
  }).prototype = route_paths.RoutePaths.prototype;
  dart.addTypeTests(route_paths.RoutePaths);
  dart.setLibraryUri(route_paths.RoutePaths, "package:router_example/src/route_paths.dart");
  dart.defineLazy(route_paths.RoutePaths, {
    /*route_paths.RoutePaths.root*/get root() {
      return new route_path.RoutePath.new({path: "/"});
    },
    /*route_paths.RoutePaths.gameHome*/get gameHome() {
      return new route_path.RoutePath.new({path: ":" + "gameid"});
    },
    /*route_paths.RoutePaths.game*/get game() {
      return new route_path.RoutePath.new({path: dart.str(route_paths.RoutePaths.gameHome.path) + "/:" + "player"});
    }
  });
  route_paths.getGameId = function getGameId(parameters) {
    return parameters[$_get]("gameid");
  };
  route_paths.getPlayer = function getPlayer(parameters) {
    return parameters[$_get]("player");
  };
  dart.defineLazy(route_paths, {
    /*route_paths.gameIdParam*/get gameIdParam() {
      return "gameid";
    },
    /*route_paths.playerParam*/get playerParam() {
      return "player";
    }
  });
  routes.RoutePaths = class RoutePaths extends core.Object {};
  (routes.RoutePaths.new = function() {
    ;
  }).prototype = routes.RoutePaths.prototype;
  dart.addTypeTests(routes.RoutePaths);
  dart.setLibraryUri(routes.RoutePaths, "package:router_example/src/routes.dart");
  dart.defineLazy(routes.RoutePaths, {
    /*routes.RoutePaths.root*/get root() {
      return new route_path.RoutePath.new({path: "/"});
    },
    /*routes.RoutePaths.gameHome*/get gameHome() {
      return new route_path.RoutePath.new({path: ":" + "gameid"});
    },
    /*routes.RoutePaths.game*/get game() {
      return new route_path.RoutePath.new({path: dart.str(routes.RoutePaths.gameHome.path) + "/:" + "player"});
    }
  });
  routes.Routes = class Routes extends core.Object {
    getGameId(parameters) {
      return parameters[$_get]("gameid");
    }
    getPlayer(parameters) {
      return parameters[$_get]("player");
    }
  };
  (routes.Routes.new = function() {
    ;
  }).prototype = routes.Routes.prototype;
  dart.addTypeTests(routes.Routes);
  dart.setMethodSignature(routes.Routes, () => ({
    __proto__: dart.getMethods(routes.Routes.__proto__),
    getGameId: dart.fnType(core.String, [core.Map$(core.String, core.String)]),
    getPlayer: dart.fnType(core.String, [core.Map$(core.String, core.String)])
  }));
  dart.setLibraryUri(routes.Routes, "package:router_example/src/routes.dart");
  dart.defineLazy(routes.Routes, {
    /*routes.Routes.root*/get root() {
      return new route_definition.ComponentRouteDefinition.__({routePath: routes.RoutePaths.root, component: root$46template.RootComponentNgFactory});
    },
    /*routes.Routes.gameHome*/get gameHome() {
      return new route_definition.ComponentRouteDefinition.__({routePath: routes.RoutePaths.gameHome, component: game_home$46template.GameHomeComponentNgFactory});
    },
    /*routes.Routes.game*/get game() {
      return new route_definition.ComponentRouteDefinition.__({routePath: routes.RoutePaths.game, component: game_home$46template.GameHomeComponentNgFactory});
    },
    /*routes.Routes.all*/get all() {
      return JSArrayOfRouteDefinition().of([routes.Routes.root, routes.Routes.gameHome, routes.Routes.game, new route_definition.RedirectRouteDefinition.__({path: "", redirectTo: routes.RoutePaths.root.toUrl()}), new route_definition.ComponentRouteDefinition.__({path: ".*", component: not_found_component$46template.NotFoundComponentNgFactory})]);
    }
  });
  dart.defineLazy(routes, {
    /*routes.gameIdParam*/get gameIdParam() {
      return "gameid";
    },
    /*routes.playerParam*/get playerParam() {
      return "player";
    }
  });
  not_found_component$46template.ViewNotFoundComponent0 = class ViewNotFoundComponent0 extends app_view.AppView$(not_found_component.NotFoundComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:router_example/lib/src/not_found_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendElement(doc, parentRenderNode, "h2");
      let _text_1 = dom_helpers.appendText(_el_0, "Page not found");
      this.init0();
    }
    initComponentStyles() {
      let styles = not_found_component$46template.ViewNotFoundComponent0._componentStyles;
      if (styles == null) {
        not_found_component$46template.ViewNotFoundComponent0._componentStyles = styles = not_found_component$46template.ViewNotFoundComponent0._componentStyles = new style_encapsulation._UnscopedComponentStyles.new(not_found_component$46template.styles$NotFoundComponent, not_found_component$46template.ViewNotFoundComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (not_found_component$46template.ViewNotFoundComponent0.new = function(parentView, parentIndex) {
    not_found_component$46template.ViewNotFoundComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-not-found"));
  }).prototype = not_found_component$46template.ViewNotFoundComponent0.prototype;
  dart.addTypeTests(not_found_component$46template.ViewNotFoundComponent0);
  dart.setLibraryUri(not_found_component$46template.ViewNotFoundComponent0, "package:router_example/src/not_found_component.template.dart");
  dart.defineLazy(not_found_component$46template.ViewNotFoundComponent0, {
    /*not_found_component$46template.ViewNotFoundComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _compView_0$0 = dart.privateName(not_found_component$46template, "_compView_0");
  const _NotFoundComponent_0_5 = dart.privateName(not_found_component$46template, "_NotFoundComponent_0_5");
  not_found_component$46template._ViewNotFoundComponentHost0 = class _ViewNotFoundComponentHost0 extends app_view.AppView$(not_found_component.NotFoundComponent) {
    build() {
      this[_compView_0$0] = new not_found_component$46template.ViewNotFoundComponent0.new(this, 0);
      this.rootEl = this[_compView_0$0].rootEl;
      this[_NotFoundComponent_0_5] = new not_found_component.NotFoundComponent.new();
      this[_compView_0$0].create(this[_NotFoundComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfNotFoundComponent()).new(0, this, this.rootEl, this[_NotFoundComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroyInternalState();
    }
  };
  (not_found_component$46template._ViewNotFoundComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_NotFoundComponent_0_5] = null;
    not_found_component$46template._ViewNotFoundComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = not_found_component$46template._ViewNotFoundComponentHost0.prototype;
  dart.addTypeTests(not_found_component$46template._ViewNotFoundComponentHost0);
  dart.setLibraryUri(not_found_component$46template._ViewNotFoundComponentHost0, "package:router_example/src/not_found_component.template.dart");
  dart.setFieldSignature(not_found_component$46template._ViewNotFoundComponentHost0, () => ({
    __proto__: dart.getFields(not_found_component$46template._ViewNotFoundComponentHost0.__proto__),
    [_compView_0$0]: dart.fieldType(not_found_component$46template.ViewNotFoundComponent0),
    [_NotFoundComponent_0_5]: dart.fieldType(not_found_component.NotFoundComponent)
  }));
  not_found_component$46template.viewFactory_NotFoundComponentHost0 = function viewFactory_NotFoundComponentHost0(parentView, parentIndex) {
    return new not_found_component$46template._ViewNotFoundComponentHost0.new(parentView, parentIndex);
  };
  not_found_component$46template.initReflector = function initReflector$0() {
    if (dart.test(not_found_component$46template._visited)) {
      return;
    }
    not_found_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(not_found_component.NotFoundComponent), not_found_component$46template.NotFoundComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.copyProperties(not_found_component$46template, {
    get NotFoundComponentNgFactory() {
      return not_found_component$46template._NotFoundComponentNgFactory;
    }
  });
  let C6;
  let C5;
  dart.defineLazy(not_found_component$46template, {
    /*not_found_component$46template.styles$NotFoundComponent*/get styles$NotFoundComponent() {
      return C2 || CT.C2;
    },
    /*not_found_component$46template._NotFoundComponentNgFactory*/get _NotFoundComponentNgFactory() {
      return C5 || CT.C5;
    },
    /*not_found_component$46template.styles$NotFoundComponentHost*/get styles$NotFoundComponentHost() {
      return C2 || CT.C2;
    },
    /*not_found_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  root$46template.ViewRootComponent0 = class ViewRootComponent0 extends app_view.AppView$(root.RootComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:router_example/lib/src/root/root.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendElement(doc, parentRenderNode, "h1");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "Root");
      this.init0();
    }
    initComponentStyles() {
      let styles = root$46template.ViewRootComponent0._componentStyles;
      if (styles == null) {
        root$46template.ViewRootComponent0._componentStyles = styles = root$46template.ViewRootComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(root$46template.styles$RootComponent, root$46template.ViewRootComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (root$46template.ViewRootComponent0.new = function(parentView, parentIndex) {
    root$46template.ViewRootComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("root"));
  }).prototype = root$46template.ViewRootComponent0.prototype;
  dart.addTypeTests(root$46template.ViewRootComponent0);
  dart.setLibraryUri(root$46template.ViewRootComponent0, "package:router_example/src/root/root.template.dart");
  dart.defineLazy(root$46template.ViewRootComponent0, {
    /*root$46template.ViewRootComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _compView_0$1 = dart.privateName(root$46template, "_compView_0");
  const _RootComponent_0_5 = dart.privateName(root$46template, "_RootComponent_0_5");
  root$46template._ViewRootComponentHost0 = class _ViewRootComponentHost0 extends app_view.AppView$(root.RootComponent) {
    build() {
      this[_compView_0$1] = new root$46template.ViewRootComponent0.new(this, 0);
      this.rootEl = this[_compView_0$1].rootEl;
      this[_RootComponent_0_5] = new root.RootComponent.new();
      this[_compView_0$1].create(this[_RootComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfRootComponent()).new(0, this, this.rootEl, this[_RootComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$1].destroyInternalState();
    }
  };
  (root$46template._ViewRootComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$1] = null;
    this[_RootComponent_0_5] = null;
    root$46template._ViewRootComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = root$46template._ViewRootComponentHost0.prototype;
  dart.addTypeTests(root$46template._ViewRootComponentHost0);
  dart.setLibraryUri(root$46template._ViewRootComponentHost0, "package:router_example/src/root/root.template.dart");
  dart.setFieldSignature(root$46template._ViewRootComponentHost0, () => ({
    __proto__: dart.getFields(root$46template._ViewRootComponentHost0.__proto__),
    [_compView_0$1]: dart.fieldType(root$46template.ViewRootComponent0),
    [_RootComponent_0_5]: dart.fieldType(root.RootComponent)
  }));
  root$46template.viewFactory_RootComponentHost0 = function viewFactory_RootComponentHost0(parentView, parentIndex) {
    return new root$46template._ViewRootComponentHost0.new(parentView, parentIndex);
  };
  root$46template.initReflector = function initReflector$1() {
    if (dart.test(root$46template._visited)) {
      return;
    }
    root$46template._visited = true;
    reflector.registerComponent(dart.wrapType(root.RootComponent), root$46template.RootComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.copyProperties(root$46template, {
    get RootComponentNgFactory() {
      return root$46template._RootComponentNgFactory;
    }
  });
  let C8;
  let C7;
  dart.defineLazy(root$46template, {
    /*root$46template.styles$RootComponent*/get styles$RootComponent() {
      return [root$46css$46shim.styles];
    },
    /*root$46template._RootComponentNgFactory*/get _RootComponentNgFactory() {
      return C7 || CT.C7;
    },
    /*root$46template.styles$RootComponentHost*/get styles$RootComponentHost() {
      return C2 || CT.C2;
    },
    /*root$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/router_example/src/game/game.css.shim", {
    "package:router_example/src/game/game.css.shim.dart": game$46css$46shim,
    "package:router_example/src/game/game.dart": game,
    "package:router_example/src/not_found_component.dart": not_found_component,
    "package:router_example/src/game/game.template.dart": game$46template,
    "package:router_example/src/game/game_home.css.shim.dart": game_home$46css$46shim,
    "package:router_example/src/root/root.css.shim.dart": root$46css$46shim,
    "package:router_example/src/root/root.dart": root,
    "package:router_example/src/game/game_home.dart": game_home,
    "package:router_example/src/game/game_home.template.dart": game_home$46template,
    "package:router_example/src/route_paths.dart": route_paths,
    "package:router_example/src/routes.dart": routes,
    "package:router_example/src/not_found_component.template.dart": not_found_component$46template,
    "package:router_example/src/root/root.template.dart": root$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["game.css.shim.dart","game.dart","../not_found_component.dart","game.template.dart","game_home.css.shim.dart","../root/root.css.shim.dart","../root/root.dart","game_home.dart","game_home.template.dart","../route_paths.dart","../routes.dart","../not_found_component.template.dart","../root/root.template.dart"],"names":[],"mappings":"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","file":"game.css.shim.ddc.js"}');
  // Exports:
  return {
    src__game__game$46css$46shim: game$46css$46shim,
    src__game__game: game,
    src__not_found_component: not_found_component,
    src__game__game$46template: game$46template,
    src__game__game_home$46css$46shim: game_home$46css$46shim,
    src__root__root$46css$46shim: root$46css$46shim,
    src__root__root: root,
    src__game__game_home: game_home,
    src__game__game_home$46template: game_home$46template,
    src__route_paths: route_paths,
    src__routes: routes,
    src__not_found_component$46template: not_found_component$46template,
    src__root__root$46template: root$46template
  };
});

//# sourceMappingURL=game.css.shim.ddc.js.map
