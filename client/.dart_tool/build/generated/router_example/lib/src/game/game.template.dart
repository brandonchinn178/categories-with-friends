// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'game.dart';
export 'game.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:router_example/src/game/game.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'game.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import9;

final List<dynamic> styles$GameComponent = [import0.styles];

class ViewGameComponent0 extends AppView<import2.GameComponent> {
  static import3.ComponentStyles _componentStyles;
  ViewGameComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import6.document.createElement('game');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:router_example/lib/src/game/game.dart' : null);
  }

  @override
  ComponentRef<import2.GameComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import6.document;
    final _el_0 = import9.appendElement(doc, parentRenderNode, 'h1');
    addShimE(_el_0);
    final _text_1 = import9.appendText(_el_0, 'Game');
    init0();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import3.ComponentStyles.scoped(styles$GameComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.GameComponent> _GameComponentNgFactory = const ComponentFactory('game', viewFactory_GameComponentHost0);
ComponentFactory<import2.GameComponent> get GameComponentNgFactory {
  return _GameComponentNgFactory;
}

final List<dynamic> styles$GameComponentHost = const [];

class _ViewGameComponentHost0 extends AppView<import2.GameComponent> {
  ViewGameComponent0 _compView_0;
  import2.GameComponent _GameComponent_0_5;
  _ViewGameComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.GameComponent> build() {
    _compView_0 = ViewGameComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _GameComponent_0_5 = import2.GameComponent();
    _compView_0.create(_GameComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _GameComponent_0_5);
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

AppView<import2.GameComponent> viewFactory_GameComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewGameComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(GameComponent, GameComponentNgFactory);
  _ref0.initReflector();
}
