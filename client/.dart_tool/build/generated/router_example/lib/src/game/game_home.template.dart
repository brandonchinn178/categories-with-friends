// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'game_home.dart';
export 'game_home.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:router_example/src/game/game_home.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'game_home.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import9;

final List<dynamic> styles$GameHomeComponent = [import0.styles];

class ViewGameHomeComponent0 extends AppView<import2.GameHomeComponent> {
  static import3.ComponentStyles _componentStyles;
  ViewGameHomeComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import6.document.createElement('game-home');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:router_example/lib/src/game/game_home.dart' : null);
  }

  @override
  ComponentRef<import2.GameHomeComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import6.document;
    final _el_0 = import9.appendElement(doc, parentRenderNode, 'h1');
    addShimE(_el_0);
    final _text_1 = import9.appendText(_el_0, 'Game home');
    init0();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import3.ComponentStyles.scoped(styles$GameHomeComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.GameHomeComponent> _GameHomeComponentNgFactory = const ComponentFactory('game-home', viewFactory_GameHomeComponentHost0);
ComponentFactory<import2.GameHomeComponent> get GameHomeComponentNgFactory {
  return _GameHomeComponentNgFactory;
}

final List<dynamic> styles$GameHomeComponentHost = const [];

class _ViewGameHomeComponentHost0 extends AppView<import2.GameHomeComponent> {
  ViewGameHomeComponent0 _compView_0;
  import2.GameHomeComponent _GameHomeComponent_0_5;
  _ViewGameHomeComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.GameHomeComponent> build() {
    _compView_0 = ViewGameHomeComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _GameHomeComponent_0_5 = import2.GameHomeComponent();
    _compView_0.create(_GameHomeComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _GameHomeComponent_0_5);
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

AppView<import2.GameHomeComponent> viewFactory_GameHomeComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewGameHomeComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(GameHomeComponent, GameHomeComponentNgFactory);
  _ref0.initReflector();
}
