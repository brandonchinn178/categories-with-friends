define(['dart_sdk', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, packages__angular__src__bootstrap__modules) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const text_binding = Object.create(dart.library);
  const $text = dartx.text;
  const CT = Object.create(null);
  const _currentValue = dart.privateName(text_binding, "_currentValue");
  const element = dart.privateName(text_binding, "TextBinding.element");
  text_binding.TextBinding = class TextBinding extends core.Object {
    get element() {
      return this[element];
    }
    set element(value) {
      super.element = value;
    }
    updateText(newValue) {
      if (dart.test(app_view_utils.checkBinding(this[_currentValue], newValue))) {
        this.element[$text] = newValue;
        this[_currentValue] = newValue;
      }
    }
  };
  (text_binding.TextBinding.new = function() {
    this[_currentValue] = "";
    this[element] = html.Text.new("");
    ;
  }).prototype = text_binding.TextBinding.prototype;
  dart.addTypeTests(text_binding.TextBinding);
  dart.setMethodSignature(text_binding.TextBinding, () => ({
    __proto__: dart.getMethods(text_binding.TextBinding.__proto__),
    updateText: dart.fnType(dart.void, [core.String])
  }));
  dart.setLibraryUri(text_binding.TextBinding, "package:angular/src/runtime/text_binding.dart");
  dart.setFieldSignature(text_binding.TextBinding, () => ({
    __proto__: dart.getFields(text_binding.TextBinding.__proto__),
    [_currentValue]: dart.fieldType(core.String),
    element: dart.finalFieldType(html.Text)
  }));
  dart.trackLibraries("packages/angular/src/runtime/text_binding", {
    "package:angular/src/runtime/text_binding.dart": text_binding
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_binding.dart"],"names":[],"mappings":";;;;;;;;;;;;;IAaa;;;;;;eAUY;AACrB,oBAAI,4BAAa,qBAAe,QAAQ;AACf,QAAvB,AAAQ,sBAAO,QAAQ;AACC,QAAxB,sBAAgB,QAAQ;;IAE5B;;;IAhBO,sBAAgB;IACZ,gBAAU,cAAK;;EAOb","file":"text_binding.ddc.js"}');
  // Exports:
  return {
    src__runtime__text_binding: text_binding
  };
});

//# sourceMappingURL=text_binding.ddc.js.map
