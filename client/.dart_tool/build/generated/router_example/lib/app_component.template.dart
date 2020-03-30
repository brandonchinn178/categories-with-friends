// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_router/angular_router.template.dart' as _ref1;
import 'src/routes.template.dart' as _ref2;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import1;
import 'package:angular_router/src/directives/router_link_directive.template.dart' as import2;
import 'package:angular_router/src/directives/router_link_active_directive.dart' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular_router/src/directives/router_outlet_directive.dart' as import5;
import 'dart:html' as import6;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/runtime.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import12;
import 'package:angular/src/di/errors.dart' as import13;
import 'package:angular_router/src/directives/router_link_directive.dart' as import14;
import 'package:angular_router/src/router/router.dart' as import15;
import 'package:angular_router/src/location/location.dart' as import16;
import 'package:angular_router/src/router/router_outlet_token.dart' as import17;
import 'package:angular_router/src/router_hook.dart' as import18;
import 'src/routes.dart' as import19;
import 'package:angular/src/core/linker/app_view_utils.dart' as import20;

final List<dynamic> styles$AppComponent = ['.active-route._ngcontent-%ID%{color:#039be5}'];

class ViewAppComponent0 extends AppView<import1.AppComponent> {
  import2.RouterLinkNgCd _RouterLink_3_5;
  import3.RouterLinkActive _RouterLinkActive_3_6;
  ViewContainer _appEl_5;
  import5.RouterOutlet _RouterOutlet_5_8;
  String _expr_0;
  import6.AnchorElement _el_3;
  static import7.ComponentStyles _componentStyles;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import6.document.createElement('my-app');
  }
  static String get _debugComponentUrl {
    return (import10.isDevMode ? 'asset:router_example/lib/app_component.dart' : null);
  }

  @override
  ComponentRef<import1.AppComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import6.document;
    final _el_0 = import12.appendElement(doc, parentRenderNode, 'h1');
    addShimE(_el_0);
    final _text_1 = import12.appendText(_el_0, 'Generic Category Game');
    final _el_2 = import12.appendElement(doc, parentRenderNode, 'nav');
    addShimE(_el_2);
    _el_3 = import12.appendElement(doc, _el_2, 'a');
    addShimC(_el_3);
    _RouterLink_3_5 = import2.RouterLinkNgCd((import10.isDevMode
        ? import13.debugInjectorWrap(import14.RouterLink, () {
            return import14.RouterLink(parentView.injectorGet(import15.Router, viewData.parentIndex), parentView.injectorGet(import16.Location, viewData.parentIndex), null, _el_3);
          })
        : import14.RouterLink(parentView.injectorGet(import15.Router, viewData.parentIndex), parentView.injectorGet(import16.Location, viewData.parentIndex), null, _el_3)));
    _RouterLinkActive_3_6 = (import10.isDevMode
        ? import13.debugInjectorWrap(import3.RouterLinkActive, () {
            return import3.RouterLinkActive(_el_3, parentView.injectorGet(import15.Router, viewData.parentIndex));
          })
        : import3.RouterLinkActive(_el_3, parentView.injectorGet(import15.Router, viewData.parentIndex)));
    final _text_4 = import12.appendText(_el_3, 'Home');
    _RouterLinkActive_3_6.links = [_RouterLink_3_5.instance];
    final _el_5 = import12.appendElement(doc, parentRenderNode, 'router-outlet');
    addShimE(_el_5);
    _appEl_5 = ViewContainer(5, null, this, _el_5);
    _RouterOutlet_5_8 = (import10.isDevMode
        ? import13.debugInjectorWrap(import5.RouterOutlet, () {
            return import5.RouterOutlet(parentView.injectorGetOptional(import17.RouterOutletToken, viewData.parentIndex), _appEl_5, parentView.injectorGet(import15.Router, viewData.parentIndex), parentView.injectorGetOptional(import18.RouterHook, viewData.parentIndex));
          })
        : import5.RouterOutlet(parentView.injectorGetOptional(import17.RouterOutletToken, viewData.parentIndex), _appEl_5, parentView.injectorGet(import15.Router, viewData.parentIndex), parentView.injectorGetOptional(import18.RouterHook, viewData.parentIndex)));
    _el_3.addEventListener('click', eventHandler1(_RouterLink_3_5.instance.onClick));
    init0();
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = import19.RoutePaths.root.toUrl();
    if (import20.checkBinding(_expr_0, currVal_0)) {
      _RouterLink_3_5.instance.routerLink = currVal_0;
      _expr_0 = currVal_0;
    }
    if (firstCheck) {
      _RouterLinkActive_3_6.routerLinkActive = 'active-route';
      if (!identical(import19.Routes.all, null)) {
        (_RouterOutlet_5_8.routes = import19.Routes.all);
      }
    }
    if (((!import20.AppViewUtils.throwOnChanges) && firstCheck)) {
      _RouterOutlet_5_8.ngOnInit();
    }
    _appEl_5.detectChangesInNestedViews();
    _RouterLink_3_5.detectHostChanges(this, _el_3);
    if ((!import20.AppViewUtils.throwOnChanges)) {
      if (firstCheck) {
        _RouterLinkActive_3_6.ngAfterViewInit();
      }
    }
  }

  @override
  void destroyInternal() {
    _appEl_5.destroyNestedViews();
    _RouterLink_3_5.instance.ngOnDestroy();
    _RouterLinkActive_3_6.ngOnDestroy();
    _RouterOutlet_5_8.ngOnDestroy();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import7.ComponentStyles.scoped(styles$AppComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import1.AppComponent> _AppComponentNgFactory = const ComponentFactory('my-app', viewFactory_AppComponentHost0);
ComponentFactory<import1.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<import1.AppComponent> {
  ViewAppComponent0 _compView_0;
  import1.AppComponent _AppComponent_0_5;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.AppComponent> build() {
    _compView_0 = ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = import1.AppComponent();
    _compView_0.create(_AppComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import1.AppComponent> viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
