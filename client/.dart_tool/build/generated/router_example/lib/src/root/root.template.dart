// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'root.dart';
export 'root.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:router_example/src/root/root.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'root.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import9;

final List<dynamic> styles$RootComponent = [import0.styles];

class ViewRootComponent0 extends AppView<import2.RootComponent> {
  static import3.ComponentStyles _componentStyles;
  ViewRootComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import6.document.createElement('root');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:router_example/lib/src/root/root.dart' : null);
  }

  @override
  ComponentRef<import2.RootComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import6.document;
    final _el_0 = import9.appendElement(doc, parentRenderNode, 'h1');
    addShimE(_el_0);
    final _text_1 = import9.appendText(_el_0, 'Root');
    init0();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import3.ComponentStyles.scoped(styles$RootComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.RootComponent> _RootComponentNgFactory = const ComponentFactory('root', viewFactory_RootComponentHost0);
ComponentFactory<import2.RootComponent> get RootComponentNgFactory {
  return _RootComponentNgFactory;
}

final List<dynamic> styles$RootComponentHost = const [];

class _ViewRootComponentHost0 extends AppView<import2.RootComponent> {
  ViewRootComponent0 _compView_0;
  import2.RootComponent _RootComponent_0_5;
  _ViewRootComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.RootComponent> build() {
    _compView_0 = ViewRootComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _RootComponent_0_5 = import2.RootComponent();
    _compView_0.create(_RootComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _RootComponent_0_5);
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

AppView<import2.RootComponent> viewFactory_RootComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewRootComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(RootComponent, RootComponentNgFactory);
  _ref0.initReflector();
}
