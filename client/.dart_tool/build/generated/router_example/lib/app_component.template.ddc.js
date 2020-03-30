define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular_router/angular_router.template', 'packages/angular_router/src/constants', 'packages/angular_router/src/directives/router_outlet_directive', 'packages/router_example/src/game/game.css.shim', 'packages/router_example/app_component', 'packages/angular/angular.template'], function(dart_sdk, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular_router__angular_router$46template, packages__angular_router__src__constants, packages__angular_router__src__directives__router_outlet_directive, packages__router_example__src__game__game$46css$46shim, packages__router_example__app_component, packages__angular__angular$46template) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const router_link_directive$46template = packages__angular_router__angular_router$46template.src__directives__router_link_directive$46template;
  const angular_router$46template = packages__angular_router__angular_router$46template.angular_router$46template;
  const router_link_directive = packages__angular_router__src__constants.src__directives__router_link_directive;
  const router_link_active_directive = packages__angular_router__src__constants.src__directives__router_link_active_directive;
  const router = packages__angular_router__src__directives__router_outlet_directive.src__router__router;
  const location = packages__angular_router__src__directives__router_outlet_directive.src__location__location;
  const router_outlet_directive = packages__angular_router__src__directives__router_outlet_directive.src__directives__router_outlet_directive;
  const router_outlet_token = packages__angular_router__src__directives__router_outlet_directive.src__router__router_outlet_token;
  const router_hook = packages__angular_router__src__directives__router_outlet_directive.src__router_hook;
  const routes = packages__router_example__src__game__game$46css$46shim.src__routes;
  const game$46template = packages__router_example__src__game__game$46css$46shim.src__game__game$46template;
  const game_home$46template = packages__router_example__src__game__game$46css$46shim.src__game__game_home$46template;
  const not_found_component$46template = packages__router_example__src__game__game$46css$46shim.src__not_found_component$46template;
  const root$46template = packages__router_example__src__game__game$46css$46shim.src__root__root$46template;
  const app_component = packages__router_example__app_component.app_component;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const app_component$46template = Object.create(dart.library);
  const routes$46template = Object.create(dart.library);
  const route_paths$46template = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $addEventListener = dartx.addEventListener;
  let VoidToRouterLink = () => (VoidToRouterLink = dart.constFn(dart.fnType(router_link_directive.RouterLink, [])))();
  let VoidToRouterLinkActive = () => (VoidToRouterLinkActive = dart.constFn(dart.fnType(router_link_active_directive.RouterLinkActive, [])))();
  let JSArrayOfRouterLink = () => (JSArrayOfRouterLink = dart.constFn(_interceptors.JSArray$(router_link_directive.RouterLink)))();
  let VoidToRouterOutlet = () => (VoidToRouterOutlet = dart.constFn(dart.fnType(router_outlet_directive.RouterOutlet, [])))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(component_factory.ComponentRef$(app_component.AppComponent)))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(component_factory.ComponentFactory$(app_component.AppComponent)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(app_view.AppView$(app_component.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [app_view.AppView, core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppViewOfAppComponent());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfAppComponent().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "my-app"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    }
  });
  const _RouterLink_3_5 = dart.privateName(app_component$46template, "_RouterLink_3_5");
  const _RouterLinkActive_3_6 = dart.privateName(app_component$46template, "_RouterLinkActive_3_6");
  const _appEl_5 = dart.privateName(app_component$46template, "_appEl_5");
  const _RouterOutlet_5_8 = dart.privateName(app_component$46template, "_RouterOutlet_5_8");
  const _expr_0 = dart.privateName(app_component$46template, "_expr_0");
  const _el_3 = dart.privateName(app_component$46template, "_el_3");
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends app_view.AppView$(app_component.AppComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:router_example/lib/app_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendElement(doc, parentRenderNode, "h1");
      this.addShimE(_el_0);
      let _text_1 = dom_helpers.appendText(_el_0, "Generic Category Game");
      let _el_2 = dom_helpers.appendElement(doc, parentRenderNode, "nav");
      this.addShimE(_el_2);
      this[_el_3] = html.AnchorElement._check(dom_helpers.appendElement(doc, _el_2, "a"));
      this.addShimC(this[_el_3]);
      this[_RouterLink_3_5] = new router_link_directive$46template.RouterLinkNgCd.new(dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(router_link_directive.RouterLink, dart.wrapType(router_link_directive.RouterLink), dart.fn(() => new router_link_directive.RouterLink.new(router.Router._check(this.parentView.injectorGet(dart.wrapType(router.Router), this.viewData.parentIndex)), location.Location._check(this.parentView.injectorGet(dart.wrapType(location.Location), this.viewData.parentIndex)), null, this[_el_3]), VoidToRouterLink())) : new router_link_directive.RouterLink.new(router.Router._check(this.parentView.injectorGet(dart.wrapType(router.Router), this.viewData.parentIndex)), location.Location._check(this.parentView.injectorGet(dart.wrapType(location.Location), this.viewData.parentIndex)), null, this[_el_3]));
      this[_RouterLinkActive_3_6] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(router_link_active_directive.RouterLinkActive, dart.wrapType(router_link_active_directive.RouterLinkActive), dart.fn(() => new router_link_active_directive.RouterLinkActive.new(this[_el_3], router.Router._check(this.parentView.injectorGet(dart.wrapType(router.Router), this.viewData.parentIndex))), VoidToRouterLinkActive())) : new router_link_active_directive.RouterLinkActive.new(this[_el_3], router.Router._check(this.parentView.injectorGet(dart.wrapType(router.Router), this.viewData.parentIndex)));
      let _text_4 = dom_helpers.appendText(this[_el_3], "Home");
      this[_RouterLinkActive_3_6].links = JSArrayOfRouterLink().of([this[_RouterLink_3_5].instance]);
      let _el_5 = dom_helpers.appendElement(doc, parentRenderNode, "router-outlet");
      this.addShimE(_el_5);
      this[_appEl_5] = new view_container.ViewContainer.new(5, null, this, _el_5);
      this[_RouterOutlet_5_8] = dart.test(optimizations.isDevMode) ? errors.debugInjectorWrap(router_outlet_directive.RouterOutlet, dart.wrapType(router_outlet_directive.RouterOutlet), dart.fn(() => new router_outlet_directive.RouterOutlet.new(router_outlet_token.RouterOutletToken._check(this.parentView.injectorGetOptional(dart.wrapType(router_outlet_token.RouterOutletToken), this.viewData.parentIndex)), this[_appEl_5], router.Router._check(this.parentView.injectorGet(dart.wrapType(router.Router), this.viewData.parentIndex)), router_hook.RouterHook._check(this.parentView.injectorGetOptional(dart.wrapType(router_hook.RouterHook), this.viewData.parentIndex))), VoidToRouterOutlet())) : new router_outlet_directive.RouterOutlet.new(router_outlet_token.RouterOutletToken._check(this.parentView.injectorGetOptional(dart.wrapType(router_outlet_token.RouterOutletToken), this.viewData.parentIndex)), this[_appEl_5], router.Router._check(this.parentView.injectorGet(dart.wrapType(router.Router), this.viewData.parentIndex)), router_hook.RouterHook._check(this.parentView.injectorGetOptional(dart.wrapType(router_hook.RouterHook), this.viewData.parentIndex)));
      this[_el_3][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_RouterLink_3_5].instance, 'onClick')));
      this.init0();
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      let currVal_0 = routes.RoutePaths.root.toUrl();
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_RouterLink_3_5].instance.routerLink = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (firstCheck) {
        this[_RouterLinkActive_3_6].routerLinkActive = "active-route";
        if (routes.Routes.all != null) {
          this[_RouterOutlet_5_8].routes = routes.Routes.all;
        }
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_RouterOutlet_5_8].ngOnInit();
      }
      this[_appEl_5].detectChangesInNestedViews();
      this[_RouterLink_3_5].detectHostChanges(this, this[_el_3]);
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_RouterLinkActive_3_6].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_5].destroyNestedViews();
      this[_RouterLink_3_5].instance.ngOnDestroy();
      this[_RouterLinkActive_3_6].ngOnDestroy();
      this[_RouterOutlet_5_8].ngOnDestroy();
    }
    initComponentStyles() {
      let styles = app_component$46template.ViewAppComponent0._componentStyles;
      if (styles == null) {
        app_component$46template.ViewAppComponent0._componentStyles = styles = app_component$46template.ViewAppComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(app_component$46template.styles$AppComponent, app_component$46template.ViewAppComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_RouterLink_3_5] = null;
    this[_RouterLinkActive_3_6] = null;
    this[_appEl_5] = null;
    this[_RouterOutlet_5_8] = null;
    this[_expr_0] = null;
    this[_el_3] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-app"));
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setLibraryUri(app_component$46template.ViewAppComponent0, "package:router_example/app_component.template.dart");
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_RouterLink_3_5]: dart.fieldType(router_link_directive$46template.RouterLinkNgCd),
    [_RouterLinkActive_3_6]: dart.fieldType(router_link_active_directive.RouterLinkActive),
    [_appEl_5]: dart.fieldType(view_container.ViewContainer),
    [_RouterOutlet_5_8]: dart.fieldType(router_outlet_directive.RouterOutlet),
    [_expr_0]: dart.fieldType(core.String),
    [_el_3]: dart.fieldType(html.AnchorElement)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _compView_0 = dart.privateName(app_component$46template, "_compView_0");
  const _AppComponent_0_5 = dart.privateName(app_component$46template, "_AppComponent_0_5");
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends app_view.AppView$(app_component.AppComponent) {
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppComponent_0_5] = new app_component.AppComponent.new();
      this[_compView_0].create(this[_AppComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppComponent_0_5] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setLibraryUri(app_component$46template._ViewAppComponentHost0, "package:router_example/app_component.template.dart");
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_AppComponent_0_5]: dart.fieldType(app_component.AppComponent)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function viewFactory_AppComponentHost0(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  app_component$46template.initReflector = function initReflector() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(app_component.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    angular_router$46template.initReflector();
    routes$46template.initReflector();
  };
  dart.copyProperties(app_component$46template, {
    get AppComponentNgFactory() {
      return app_component$46template._AppComponentNgFactory;
    }
  });
  let C1;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C0;
  let C2;
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return [".active-route._ngcontent-%ID%{color:#039be5}"];
    },
    /*app_component$46template._AppComponentNgFactory*/get _AppComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return C2 || CT.C2;
    },
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  routes$46template.initReflector = function initReflector$() {
    if (dart.test(routes$46template._visited)) {
      return;
    }
    routes$46template._visited = true;
    game$46template.initReflector();
    game_home$46template.initReflector();
    not_found_component$46template.initReflector();
    angular_router$46template.initReflector();
    angular_router$46template.initReflector();
    root$46template.initReflector();
    route_paths$46template.initReflector();
    route_paths$46template.initReflector();
  };
  dart.defineLazy(routes$46template, {
    /*routes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  route_paths$46template.initReflector = function initReflector$0() {
    if (dart.test(route_paths$46template._visited)) {
      return;
    }
    route_paths$46template._visited = true;
    angular_router$46template.initReflector();
  };
  dart.defineLazy(route_paths$46template, {
    /*route_paths$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/router_example/app_component.template", {
    "package:router_example/app_component.template.dart": app_component$46template,
    "package:router_example/src/routes.template.dart": routes$46template,
    "package:router_example/src/route_paths.template.dart": route_paths$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart","src/routes.template.dart","src/route_paths.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template,
    src__routes$46template: routes$46template,
    src__route_paths$46template: route_paths$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
