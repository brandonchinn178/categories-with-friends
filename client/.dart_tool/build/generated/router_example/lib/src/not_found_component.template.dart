// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'not_found_component.dart';
export 'not_found_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular/src/core/linker/app_view.dart';
import 'not_found_component.dart' as import1;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import2;
import 'package:angular/src/core/linker/view_type.dart' as import3;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import5;
import 'package:angular/src/runtime.dart' as import6;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import8;

final List<dynamic> styles$NotFoundComponent = const [];

class ViewNotFoundComponent0 extends AppView<import1.NotFoundComponent> {
  static import2.ComponentStyles _componentStyles;
  ViewNotFoundComponent0(AppView<dynamic> parentView, int parentIndex) : super(import3.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import5.document.createElement('my-not-found');
  }
  static String get _debugComponentUrl {
    return (import6.isDevMode ? 'asset:router_example/lib/src/not_found_component.dart' : null);
  }

  @override
  ComponentRef<import1.NotFoundComponent> build() {
    final _rootEl = rootEl;
    final import5.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import5.document;
    final _el_0 = import8.appendElement(doc, parentRenderNode, 'h2');
    final _text_1 = import8.appendText(_el_0, 'Page not found');
    init0();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import2.ComponentStyles.unscoped(styles$NotFoundComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import1.NotFoundComponent> _NotFoundComponentNgFactory = const ComponentFactory('my-not-found', viewFactory_NotFoundComponentHost0);
ComponentFactory<import1.NotFoundComponent> get NotFoundComponentNgFactory {
  return _NotFoundComponentNgFactory;
}

final List<dynamic> styles$NotFoundComponentHost = const [];

class _ViewNotFoundComponentHost0 extends AppView<import1.NotFoundComponent> {
  ViewNotFoundComponent0 _compView_0;
  import1.NotFoundComponent _NotFoundComponent_0_5;
  _ViewNotFoundComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import3.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import1.NotFoundComponent> build() {
    _compView_0 = ViewNotFoundComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _NotFoundComponent_0_5 = import1.NotFoundComponent();
    _compView_0.create(_NotFoundComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _NotFoundComponent_0_5);
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

AppView<import1.NotFoundComponent> viewFactory_NotFoundComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewNotFoundComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(NotFoundComponent, NotFoundComponentNgFactory);
  _ref0.initReflector();
}
