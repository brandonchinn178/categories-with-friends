define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const application_tokens = Object.create(dart.library);
  const zone = Object.create(dart.library);
  const change_detection = Object.create(dart.library);
  const component_state = Object.create(dart.library);
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(opaque_token.OpaqueToken$(core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: OpaqueTokenOfString().prototype,
        [OpaqueToken__uniqueName]: "APP_ID"
      });
    }
  });
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C0;
  dart.defineLazy(application_tokens, {
    /*application_tokens.APP_ID*/get APP_ID() {
      return C0 || CT.C0;
    }
  });
  const _onStateChanged = dart.privateName(component_state, "_onStateChanged");
  component_state.ComponentState = class ComponentState extends core.Object {
    setState(scheduleChangeDetectionAfter) {
      scheduleChangeDetectionAfter();
      this.deliverStateChanges();
    }
    deliverStateChanges() {
      let onStateChanged = this[_onStateChanged];
      if (onStateChanged != null) {
        onStateChanged();
      }
    }
  };
  (component_state.ComponentState.new = function() {
    this[_onStateChanged] = null;
    ;
  }).prototype = component_state.ComponentState.prototype;
  dart.addTypeTests(component_state.ComponentState);
  dart.setMethodSignature(component_state.ComponentState, () => ({
    __proto__: dart.getMethods(component_state.ComponentState.__proto__),
    setState: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    deliverStateChanges: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(component_state.ComponentState, "package:angular/src/core/change_detection/component_state.dart");
  dart.setFieldSignature(component_state.ComponentState, () => ({
    __proto__: dart.getFields(component_state.ComponentState.__proto__),
    [_onStateChanged]: dart.fieldType(dart.fnType(dart.void, []))
  }));
  component_state.internalSetStateChanged = function internalSetStateChanged(component, onStateChanged) {
    component[_onStateChanged] = onStateChanged;
  };
  dart.trackLibraries("packages/angular/src/core/application_tokens", {
    "package:angular/src/core/application_tokens.dart": application_tokens,
    "package:angular/src/core/zone.dart": zone,
    "package:angular/src/core/change_detection.dart": change_detection,
    "package:angular/src/core/change_detection/component_state.dart": component_state
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["application_tokens.dart","change_detection/component_state.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;MAeM,yBAAM;;;;;;aCkCoB;AACE,MAA9B,AAA4B,4BAAA;AACP,MAArB;IACF;;AAUQ,2BAAiB;AACvB,UAAI,cAAc,IAAI;AACJ,QAAhB,AAAc,cAAA;;IAElB;;;IA3CgB;;EA4ClB;;;;;;;;;;;;6EAKiB,WACC;AAE0B,IAA1C,AAAU,SAAD,oBAAmB,cAAc;EAC5C","file":"application_tokens.ddc.js"}');
  // Exports:
  return {
    src__core__application_tokens: application_tokens,
    src__core__zone: zone,
    src__core__change_detection: change_detection,
    src__core__change_detection__component_state: component_state
  };
});

//# sourceMappingURL=application_tokens.ddc.js.map
