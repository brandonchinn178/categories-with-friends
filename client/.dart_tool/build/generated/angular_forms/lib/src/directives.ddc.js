define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/core/application_tokens'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular__src__core__application_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const js_util = dart_sdk.js_util;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const lifecycle_hooks = packages__angular__src__core__change_detection__change_detection.src__core__metadata__lifecycle_hooks;
  const lang = packages__angular__src__core__change_detection__change_detection.src__facade__lang;
  const providers = packages__angular__src__core__change_detection__change_detection.src__di__providers;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const component_state = packages__angular__src__core__application_tokens.src__core__change_detection__component_state;
  const validators = Object.create(dart.library);
  const validators$ = Object.create(dart.library);
  const model = Object.create(dart.library);
  const ng_control_group = Object.create(dart.library);
  const shared = Object.create(dart.library);
  const select_control_value_accessor = Object.create(dart.library);
  const control_value_accessor = Object.create(dart.library);
  const radio_control_value_accessor = Object.create(dart.library);
  const ng_control = Object.create(dart.library);
  const abstract_control_directive = Object.create(dart.library);
  const number_value_accessor = Object.create(dart.library);
  const normalize_validator = Object.create(dart.library);
  const default_value_accessor = Object.create(dart.library);
  const control_container = Object.create(dart.library);
  const form_interface = Object.create(dart.library);
  const checkbox_value_accessor = Object.create(dart.library);
  const ng_form = Object.create(dart.library);
  const abstract_form = Object.create(dart.library);
  const ng_form_model = Object.create(dart.library);
  const ng_control_status = Object.create(dart.library);
  const directives = Object.create(dart.library);
  const ng_model = Object.create(dart.library);
  const ng_form_control = Object.create(dart.library);
  const ng_control_name = Object.create(dart.library);
  const memorized_form = Object.create(dart.library);
  const form_builder = Object.create(dart.library);
  const $toString = dartx.toString;
  const $isEmpty = dartx.isEmpty;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $addAll = dartx.addAll;
  const $split = dartx.split;
  const $isNotEmpty = dartx.isNotEmpty;
  const $keys = dartx.keys;
  const $_set = dartx._set;
  const $containsKey = dartx.containsKey;
  const $values = dartx.values;
  const $remove = dartx.remove;
  const $insert = dartx.insert;
  const $removeAt = dartx.removeAt;
  const $fold = dartx.fold;
  const $toList = dartx.toList;
  const $join = dartx.join;
  const $map = dartx.map;
  const $substring = dartx.substring;
  const $removeLast = dartx.removeLast;
  let IdentityMapOfString$int = () => (IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let IdentityMapOfString$bool = () => (IdentityMapOfString$bool = dart.constFn(_js_helper.IdentityMap$(core.String, core.bool)))();
  let IdentityMapOfString$num = () => (IdentityMapOfString$num = dart.constFn(_js_helper.IdentityMap$(core.String, core.num)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let AbstractControlToMapOfString$dynamic = () => (AbstractControlToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [model.AbstractControl])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let LinkedMapOfString$dynamic = () => (LinkedMapOfString$dynamic = dart.constFn(_js_helper.LinkedMap$(core.String, dart.dynamic)))();
  let StreamControllerOfString = () => (StreamControllerOfString = dart.constFn(async.StreamController$(core.String)))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let AbstractControlTovoid = () => (AbstractControlTovoid = dart.constFn(dart.fnType(dart.void, [model.AbstractControl])))();
  let AbstractControlTobool = () => (AbstractControlTobool = dart.constFn(dart.fnType(core.bool, [model.AbstractControl])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let AbstractControlAndStringToAbstractControl = () => (AbstractControlAndStringToAbstractControl = dart.constFn(dart.fnType(model.AbstractControl, [model.AbstractControl, core.String])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfAbstractControlToMapOfString$dynamic = () => (JSArrayOfAbstractControlToMapOfString$dynamic = dart.constFn(_interceptors.JSArray$(AbstractControlToMapOfString$dynamic())))();
  let dynamic__ToNull = () => (dynamic__ToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic], {rawValue: core.String}, {})))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicToFn = () => (dynamicToFn = dart.constFn(dart.fnType(AbstractControlToMapOfString$dynamic(), [dart.dynamic])))();
  let ListOfControlValueAccessor = () => (ListOfControlValueAccessor = dart.constFn(core.List$(control_value_accessor.ControlValueAccessor)))();
  let ExistingProviderOfListOfControlValueAccessor = () => (ExistingProviderOfListOfControlValueAccessor = dart.constFn(providers.ExistingProvider$(ListOfControlValueAccessor())))();
  let MultiTokenOfControlValueAccessor = () => (MultiTokenOfControlValueAccessor = dart.constFn(opaque_token.MultiToken$(control_value_accessor.ControlValueAccessor)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let IdentityMapOfString$AbstractControl = () => (IdentityMapOfString$AbstractControl = dart.constFn(_js_helper.IdentityMap$(core.String, model.AbstractControl)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfNgControl = () => (JSArrayOfNgControl = dart.constFn(_interceptors.JSArray$(ng_control.NgControl)))();
  let dynamicToAbstractControl = () => (dynamicToAbstractControl = dart.constFn(dart.fnType(model.AbstractControl, [dart.dynamic])))();
  let MapEntryOfString$AbstractControl = () => (MapEntryOfString$AbstractControl = dart.constFn(core.MapEntry$(core.String, model.AbstractControl)))();
  let StringAnddynamicToMapEntryOfString$AbstractControl = () => (StringAnddynamicToMapEntryOfString$AbstractControl = dart.constFn(dart.fnType(MapEntryOfString$AbstractControl(), [core.String, dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: opaque_token.MultiToken.prototype,
        [OpaqueToken__uniqueName]: "NgValidators"
      });
    },
    get C1() {
      return C1 = dart.fn(normalize_validator.normalizeValidator, dynamicToFn());
    },
    get C3() {
      return C3 = dart.wrapType(select_control_value_accessor.SelectControlValueAccessor);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: MultiTokenOfControlValueAccessor().prototype,
        [OpaqueToken__uniqueName]: "NgValueAccessor"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ExistingProviderOfListOfControlValueAccessor().prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: C3 || CT.C3,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C4 || CT.C4
      });
    },
    get C6() {
      return C6 = dart.wrapType(radio_control_value_accessor.RadioControlValueAccessor);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ExistingProviderOfListOfControlValueAccessor().prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: C6 || CT.C6,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C4 || CT.C4
      });
    },
    get C8() {
      return C8 = dart.wrapType(number_value_accessor.NumberValueAccessor);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ExistingProviderOfListOfControlValueAccessor().prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: C8 || CT.C8,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C4 || CT.C4
      });
    },
    get C10() {
      return C10 = dart.wrapType(default_value_accessor.DefaultValueAccessor);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ExistingProviderOfListOfControlValueAccessor().prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: C10 || CT.C10,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C4 || CT.C4
      });
    },
    get C12() {
      return C12 = dart.wrapType(checkbox_value_accessor.CheckboxControlValueAccessor);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ExistingProviderOfListOfControlValueAccessor().prototype,
        [Provider_multi]: null,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: C12 || CT.C12,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C4 || CT.C4
      });
    },
    get C14() {
      return C14 = dart.wrapType(ng_control_name.NgControlName);
    },
    get C15() {
      return C15 = dart.wrapType(ng_control_group.NgControlGroup);
    },
    get C16() {
      return C16 = dart.wrapType(ng_form_control.NgFormControl);
    },
    get C17() {
      return C17 = dart.wrapType(ng_model.NgModel);
    },
    get C18() {
      return C18 = dart.wrapType(ng_form_model.NgFormModel);
    },
    get C19() {
      return C19 = dart.wrapType(ng_form.NgForm);
    },
    get C20() {
      return C20 = dart.wrapType(memorized_form.MemorizedForm);
    },
    get C21() {
      return C21 = dart.wrapType(select_control_value_accessor.NgSelectOption);
    },
    get C22() {
      return C22 = dart.wrapType(validators.RequiredValidator);
    },
    get C23() {
      return C23 = dart.wrapType(validators.MinLengthValidator);
    },
    get C24() {
      return C24 = dart.wrapType(validators.MaxLengthValidator);
    },
    get C25() {
      return C25 = dart.wrapType(validators.PatternValidator);
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C10 || CT.C10, C8 || CT.C8, C12 || CT.C12, C3 || CT.C3, C6 || CT.C6, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25], core.Type);
    },
    get C26() {
      return C26 = dart.fn(form_builder.FormBuilder._createControl, dynamicToAbstractControl());
    }
  });
  validators.Validator = class Validator extends core.Object {};
  (validators.Validator.new = function() {
    ;
  }).prototype = validators.Validator.prototype;
  dart.addTypeTests(validators.Validator);
  dart.setLibraryUri(validators.Validator, "package:angular_forms/src/directives/validators.dart");
  const required = dart.privateName(validators, "RequiredValidator.required");
  validators.RequiredValidator = class RequiredValidator extends core.Object {
    get required() {
      return this[required];
    }
    set required(value) {
      this[required] = value;
    }
    validate(c) {
      return dart.test(this.required) ? validators$.Validators.required(c) : null;
    }
  };
  (validators.RequiredValidator.new = function() {
    this[required] = true;
    ;
  }).prototype = validators.RequiredValidator.prototype;
  dart.addTypeTests(validators.RequiredValidator);
  validators.RequiredValidator[dart.implements] = () => [validators.Validator];
  dart.setMethodSignature(validators.RequiredValidator, () => ({
    __proto__: dart.getMethods(validators.RequiredValidator.__proto__),
    validate: dart.fnType(core.Map$(core.String, dart.dynamic), [model.AbstractControl])
  }));
  dart.setLibraryUri(validators.RequiredValidator, "package:angular_forms/src/directives/validators.dart");
  dart.setFieldSignature(validators.RequiredValidator, () => ({
    __proto__: dart.getFields(validators.RequiredValidator.__proto__),
    required: dart.fieldType(core.bool)
  }));
  const _minLength = dart.privateName(validators, "_minLength");
  const minLengthAttr = dart.privateName(validators, "MinLengthValidator.minLengthAttr");
  validators.MinLengthValidator = class MinLengthValidator extends core.Object {
    get minLengthAttr() {
      return this[minLengthAttr];
    }
    set minLengthAttr(value) {
      this[minLengthAttr] = value;
    }
    get minLength() {
      return this[_minLength];
    }
    set minLength(value) {
      let t0;
      this[_minLength] = value;
      this.minLengthAttr = (t0 = value, t0 == null ? null : dart.toString(t0));
    }
    validate(c) {
      let t0, t0$;
      let v = (t0$ = (t0 = c, t0 == null ? null : t0.value), t0$ == null ? null : dart.toString(t0$));
      if (v == null || v === "") return null;
      return v.length < dart.notNull(this.minLength) ? new (IdentityMapOfString$dynamic()).from(["minlength", new (IdentityMapOfString$int()).from(["requiredLength", this.minLength, "actualLength", v.length])]) : null;
    }
  };
  (validators.MinLengthValidator.new = function() {
    this[minLengthAttr] = null;
    this[_minLength] = null;
    ;
  }).prototype = validators.MinLengthValidator.prototype;
  dart.addTypeTests(validators.MinLengthValidator);
  validators.MinLengthValidator[dart.implements] = () => [validators.Validator];
  dart.setMethodSignature(validators.MinLengthValidator, () => ({
    __proto__: dart.getMethods(validators.MinLengthValidator.__proto__),
    validate: dart.fnType(core.Map$(core.String, dart.dynamic), [model.AbstractControl])
  }));
  dart.setGetterSignature(validators.MinLengthValidator, () => ({
    __proto__: dart.getGetters(validators.MinLengthValidator.__proto__),
    minLength: core.int
  }));
  dart.setSetterSignature(validators.MinLengthValidator, () => ({
    __proto__: dart.getSetters(validators.MinLengthValidator.__proto__),
    minLength: core.int
  }));
  dart.setLibraryUri(validators.MinLengthValidator, "package:angular_forms/src/directives/validators.dart");
  dart.setFieldSignature(validators.MinLengthValidator, () => ({
    __proto__: dart.getFields(validators.MinLengthValidator.__proto__),
    minLengthAttr: dart.fieldType(core.String),
    [_minLength]: dart.fieldType(core.int)
  }));
  const _maxLength = dart.privateName(validators, "_maxLength");
  const maxLengthAttr = dart.privateName(validators, "MaxLengthValidator.maxLengthAttr");
  validators.MaxLengthValidator = class MaxLengthValidator extends core.Object {
    get maxLengthAttr() {
      return this[maxLengthAttr];
    }
    set maxLengthAttr(value) {
      this[maxLengthAttr] = value;
    }
    get maxLength() {
      return this[_maxLength];
    }
    set maxlength(value) {
      let t0;
      this[_maxLength] = value;
      this.maxLengthAttr = (t0 = value, t0 == null ? null : dart.toString(t0));
    }
    validate(c) {
      let t0, t0$;
      let v = (t0$ = (t0 = c, t0 == null ? null : t0.value), t0$ == null ? null : dart.toString(t0$));
      if (v == null || v === "") return null;
      return v.length > dart.notNull(this.maxLength) ? new (IdentityMapOfString$dynamic()).from(["maxlength", new (IdentityMapOfString$int()).from(["requiredLength", this.maxLength, "actualLength", v.length])]) : null;
    }
  };
  (validators.MaxLengthValidator.new = function() {
    this[maxLengthAttr] = null;
    this[_maxLength] = null;
    ;
  }).prototype = validators.MaxLengthValidator.prototype;
  dart.addTypeTests(validators.MaxLengthValidator);
  validators.MaxLengthValidator[dart.implements] = () => [validators.Validator];
  dart.setMethodSignature(validators.MaxLengthValidator, () => ({
    __proto__: dart.getMethods(validators.MaxLengthValidator.__proto__),
    validate: dart.fnType(core.Map$(core.String, dart.dynamic), [model.AbstractControl])
  }));
  dart.setGetterSignature(validators.MaxLengthValidator, () => ({
    __proto__: dart.getGetters(validators.MaxLengthValidator.__proto__),
    maxLength: core.int
  }));
  dart.setSetterSignature(validators.MaxLengthValidator, () => ({
    __proto__: dart.getSetters(validators.MaxLengthValidator.__proto__),
    maxlength: core.int
  }));
  dart.setLibraryUri(validators.MaxLengthValidator, "package:angular_forms/src/directives/validators.dart");
  dart.setFieldSignature(validators.MaxLengthValidator, () => ({
    __proto__: dart.getFields(validators.MaxLengthValidator.__proto__),
    maxLengthAttr: dart.fieldType(core.String),
    [_maxLength]: dart.fieldType(core.int)
  }));
  const pattern = dart.privateName(validators, "PatternValidator.pattern");
  validators.PatternValidator = class PatternValidator extends core.Object {
    get pattern() {
      return this[pattern];
    }
    set pattern(value) {
      this[pattern] = value;
    }
    validate(c) {
      return validators$.Validators.pattern(this.pattern)(c);
    }
  };
  (validators.PatternValidator.new = function() {
    this[pattern] = null;
    ;
  }).prototype = validators.PatternValidator.prototype;
  dart.addTypeTests(validators.PatternValidator);
  validators.PatternValidator[dart.implements] = () => [validators.Validator];
  dart.setMethodSignature(validators.PatternValidator, () => ({
    __proto__: dart.getMethods(validators.PatternValidator.__proto__),
    validate: dart.fnType(core.Map$(core.String, dart.dynamic), [model.AbstractControl])
  }));
  dart.setLibraryUri(validators.PatternValidator, "package:angular_forms/src/directives/validators.dart");
  dart.setFieldSignature(validators.PatternValidator, () => ({
    __proto__: dart.getFields(validators.PatternValidator.__proto__),
    pattern: dart.fieldType(core.String)
  }));
  validators$.Validators = class Validators extends core.Object {
    static required(control) {
      return control.value == null || dart.equals(control.value, "") ? new (IdentityMapOfString$bool()).from(["required", true]) : null;
    }
    static minLength(minLength) {
      return dart.fn(control => {
        if (validators$.Validators.required(control) != null) return null;
        let v = core.String._check(control.value);
        return v.length < dart.notNull(minLength) ? new (IdentityMapOfString$dynamic()).from(["minlength", new (IdentityMapOfString$num()).from(["requiredLength", minLength, "actualLength", v.length])]) : null;
      }, AbstractControlToMapOfString$dynamic());
    }
    static maxLength(maxLength) {
      return dart.fn(control => {
        if (validators$.Validators.required(control) != null) return null;
        let v = core.String._check(control.value);
        return v.length > dart.notNull(maxLength) ? new (IdentityMapOfString$dynamic()).from(["maxlength", new (IdentityMapOfString$num()).from(["requiredLength", maxLength, "actualLength", v.length])]) : null;
      }, AbstractControlToMapOfString$dynamic());
    }
    static pattern(pattern) {
      return dart.fn(control => {
        if (validators$.Validators.required(control) != null) return null;
        let regex = core.RegExp.new("^" + dart.str(pattern) + "$");
        let v = core.String._check(control.value);
        return dart.test(regex.hasMatch(v)) ? null : new (IdentityMapOfString$dynamic()).from(["pattern", new (IdentityMapOfString$String()).from(["requiredPattern", "^" + dart.str(pattern) + "$", "actualValue", v])]);
      }, AbstractControlToMapOfString$dynamic());
    }
    static nullValidator(c) {
      return null;
    }
    static compose(validators) {
      if (validators == null) return null;
      let presentValidators = validators$.Validators._removeNullValidators(AbstractControlToMapOfString$dynamic(), validators);
      if (dart.test(presentValidators[$isEmpty])) return null;
      return dart.fn(control => validators$._executeValidators(control, presentValidators), AbstractControlToMapOfString$dynamic());
    }
    static _removeNullValidators(T, validators) {
      let result = _interceptors.JSArray$(T).of([]);
      for (let i = 0, len = validators[$length]; i < dart.notNull(len); i = i + 1) {
        let validator = validators[$_get](i);
        if (validator != null) result[$add](validator);
      }
      return result;
    }
  };
  (validators$.Validators.new = function() {
    ;
  }).prototype = validators$.Validators.prototype;
  dart.addTypeTests(validators$.Validators);
  dart.setLibraryUri(validators$.Validators, "package:angular_forms/src/validators.dart");
  validators$._executeValidators = function _executeValidators(control, validators) {
    let result = new (LinkedMapOfString$dynamic()).new();
    for (let i = 0, len = validators[$length]; i < dart.notNull(len); i = i + 1) {
      let validator = validators[$_get](i);
      if (!(validator != null)) dart.assertFailed("Validator should be non-null", "org-dartlang-app:///packages/angular_forms/src/validators.dart", 111, 12, "validator != null");
      let localResult = validator(control);
      if (localResult != null) result[$addAll](localResult);
    }
    return dart.test(result[$isEmpty]) ? null : result;
  };
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C0;
  dart.defineLazy(validators$, {
    /*validators$.NG_VALIDATORS*/get NG_VALIDATORS() {
      return C0 || CT.C0;
    }
  });
  const _valueChanges = dart.privateName(model, "_valueChanges");
  const _statusChanges = dart.privateName(model, "_statusChanges");
  const _disabledChanges = dart.privateName(model, "_disabledChanges");
  const _status = dart.privateName(model, "_status");
  const _errors = dart.privateName(model, "_errors");
  const _pristine = dart.privateName(model, "_pristine");
  const _touched = dart.privateName(model, "_touched");
  const _parent = dart.privateName(model, "_parent");
  const _value = dart.privateName(model, "_value");
  const _forEachChild = dart.privateName(model, "_forEachChild");
  const _updateTouched = dart.privateName(model, "_updateTouched");
  const _updatePristine = dart.privateName(model, "_updatePristine");
  const _emitEvent = dart.privateName(model, "_emitEvent");
  const _updateAncestors = dart.privateName(model, "_updateAncestors");
  const _runValidator = dart.privateName(model, "_runValidator");
  const _calculateStatus = dart.privateName(model, "_calculateStatus");
  const _updateControlsErrors = dart.privateName(model, "_updateControlsErrors");
  const _allControlsHaveStatus = dart.privateName(model, "_allControlsHaveStatus");
  const _anyControlsHaveStatus = dart.privateName(model, "_anyControlsHaveStatus");
  const _anyControlsTouched = dart.privateName(model, "_anyControlsTouched");
  const _anyControlsDirty = dart.privateName(model, "_anyControlsDirty");
  const _anyControls = dart.privateName(model, "_anyControls");
  const _is_AbstractControl_default = Symbol('_is_AbstractControl_default');
  const validator$ = dart.privateName(model, "AbstractControl.validator");
  model.AbstractControl$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class AbstractControl extends core.Object {
      get validator() {
        return this[validator$];
      }
      set validator(value) {
        this[validator$] = value;
      }
      get value() {
        return this[_value];
      }
      get status() {
        return this[_status];
      }
      get valid() {
        return this[_status] === "VALID";
      }
      get invalid() {
        return this[_status] === "INVALID";
      }
      get disabled() {
        return this[_status] === "DISABLED";
      }
      get enabled() {
        return !dart.test(this.disabled);
      }
      get errors() {
        return this[_errors];
      }
      get pristine() {
        return this[_pristine];
      }
      get dirty() {
        return !dart.test(this.pristine);
      }
      get touched() {
        return this[_touched];
      }
      get untouched() {
        return !dart.test(this[_touched]);
      }
      get valueChanges() {
        return this[_valueChanges].stream;
      }
      get statusChanges() {
        return this[_statusChanges].stream;
      }
      get disabledChanges() {
        return this[_disabledChanges].stream;
      }
      get pending() {
        return this[_status] === "PENDING";
      }
      markAsTouched(opts) {
        let t0;
        let updateParent = opts && 'updateParent' in opts ? opts.updateParent : null;
        updateParent = (t0 = updateParent, t0 == null ? true : t0);
        this[_touched] = true;
        if (this[_parent] != null && dart.test(updateParent)) {
          this[_parent].markAsTouched({updateParent: updateParent});
        }
      }
      markAsUntouched(opts) {
        let t0;
        let updateParent = opts && 'updateParent' in opts ? opts.updateParent : null;
        updateParent = (t0 = updateParent, t0 == null ? true : t0);
        this[_touched] = false;
        this[_forEachChild](dart.fn(c => c.markAsUntouched({updateParent: false}), AbstractControlTovoid()));
        if (this[_parent] != null && dart.test(updateParent)) {
          this[_parent][_updateTouched]({updateParent: updateParent});
        }
      }
      markAsDirty(opts) {
        let t0;
        let onlySelf = opts && 'onlySelf' in opts ? opts.onlySelf : null;
        let emitEvent = opts && 'emitEvent' in opts ? opts.emitEvent : null;
        onlySelf = dart.equals(onlySelf, true);
        emitEvent = (t0 = emitEvent, t0 == null ? true : t0);
        this[_pristine] = false;
        if (dart.test(emitEvent)) this[_statusChanges].add(this[_status]);
        if (this[_parent] != null && !dart.test(onlySelf)) {
          this[_parent].markAsDirty({onlySelf: onlySelf});
        }
      }
      markAsPristine(opts) {
        let t0;
        let updateParent = opts && 'updateParent' in opts ? opts.updateParent : null;
        updateParent = (t0 = updateParent, t0 == null ? true : t0);
        this[_pristine] = true;
        this[_forEachChild](dart.fn(c => c.markAsPristine({updateParent: false}), AbstractControlTovoid()));
        if (this[_parent] != null && dart.test(updateParent)) {
          this[_parent][_updatePristine]({updateParent: updateParent});
        }
      }
      markAsPending(opts) {
        let onlySelf = opts && 'onlySelf' in opts ? opts.onlySelf : null;
        onlySelf = dart.equals(onlySelf, true);
        this[_status] = "PENDING";
        if (this[_parent] != null && !dart.test(onlySelf)) {
          this[_parent].markAsPending({onlySelf: onlySelf});
        }
      }
      markAsDisabled(opts) {
        let t0, t0$;
        let updateParent = opts && 'updateParent' in opts ? opts.updateParent : null;
        let emitEvent = opts && 'emitEvent' in opts ? opts.emitEvent : null;
        updateParent = (t0 = updateParent, t0 == null ? true : t0);
        emitEvent = (t0$ = emitEvent, t0$ == null ? true : t0$);
        this[_status] = "DISABLED";
        this[_forEachChild](dart.fn(c => c.markAsDisabled({updateParent: false, emitEvent: emitEvent}), AbstractControlTovoid()));
        this.onUpdate();
        if (dart.test(emitEvent)) this[_emitEvent]();
        this[_updateAncestors]({updateParent: updateParent, emitEvent: emitEvent});
        this[_disabledChanges].add(true);
      }
      markAsEnabled(opts) {
        let t0, t0$;
        let updateParent = opts && 'updateParent' in opts ? opts.updateParent : null;
        let emitEvent = opts && 'emitEvent' in opts ? opts.emitEvent : null;
        updateParent = (t0 = updateParent, t0 == null ? true : t0);
        emitEvent = (t0$ = emitEvent, t0$ == null ? true : t0$);
        this[_status] = "VALID";
        this[_forEachChild](dart.fn(c => c.markAsEnabled({updateParent: false, emitEvent: emitEvent}), AbstractControlTovoid()));
        this.updateValueAndValidity({onlySelf: true, emitEvent: emitEvent});
        this[_updateAncestors]({updateParent: updateParent, emitEvent: emitEvent});
        this[_disabledChanges].add(false);
      }
      reset(opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        T._check(value);
        let isDisabled = opts && 'isDisabled' in opts ? opts.isDisabled : null;
        let updateParent = opts && 'updateParent' in opts ? opts.updateParent : null;
        let emitEvent = opts && 'emitEvent' in opts ? opts.emitEvent : null;
        updateParent == null ? updateParent = true : null;
        emitEvent == null ? emitEvent = true : null;
        this.updateValue(value, {onlySelf: !dart.test(updateParent), emitEvent: emitEvent});
        if (isDisabled != null) {
          dart.test(isDisabled) ? this.markAsDisabled({updateParent: updateParent, emitEvent: emitEvent}) : this.markAsEnabled({updateParent: updateParent, emitEvent: emitEvent});
        }
        this.markAsPristine({updateParent: updateParent});
        this.markAsUntouched({updateParent: updateParent});
      }
      [_updateAncestors](opts) {
        let updateParent = opts && 'updateParent' in opts ? opts.updateParent : null;
        let emitEvent = opts && 'emitEvent' in opts ? opts.emitEvent : null;
        if (this[_parent] != null && dart.test(updateParent)) {
          this[_parent].updateValueAndValidity({onlySelf: !dart.test(updateParent), emitEvent: emitEvent});
        }
      }
      setParent(parent) {
        this[_parent] = parent;
      }
      updateValueAndValidity(opts) {
        let t0;
        let onlySelf = opts && 'onlySelf' in opts ? opts.onlySelf : null;
        let emitEvent = opts && 'emitEvent' in opts ? opts.emitEvent : null;
        onlySelf = dart.equals(onlySelf, true);
        emitEvent = (t0 = emitEvent, t0 == null ? true : t0);
        this.onUpdate();
        this[_errors] = this[_runValidator]();
        this[_status] = this[_calculateStatus]();
        if (dart.test(emitEvent)) this[_emitEvent]();
        if (this[_parent] != null && !dart.test(onlySelf)) {
          this[_parent].updateValueAndValidity({onlySelf: onlySelf, emitEvent: emitEvent});
        }
      }
      [_emitEvent]() {
        this[_valueChanges].add(this.value);
        this[_statusChanges].add(this[_status]);
      }
      [_runValidator]() {
        return this.validator != null ? this.validator(this) : null;
      }
      setErrors(errors, opts) {
        let t0, t0$;
        let emitEvent = opts && 'emitEvent' in opts ? opts.emitEvent : null;
        emitEvent = (t0 = emitEvent, t0 == null ? true : t0);
        this[_errors] = errors;
        this[_status] = this[_calculateStatus]();
        if (dart.test(emitEvent)) {
          this[_statusChanges].add(this[_status]);
        }
        t0$ = this[_parent];
        t0$ == null ? null : t0$[_updateControlsErrors]();
        this.markAsDirty({emitEvent: false});
      }
      find(path) {
        let t0;
        return this.findPath((t0 = path, t0 == null ? null : t0[$split]("/")));
      }
      findPath(path) {
        return model._find(this, path);
      }
      getError(errorCode, path) {
        if (path === void 0) path = null;
        let control = this;
        if (path != null && dart.test(path[$isNotEmpty])) {
          control = this.findPath(path);
        }
        if (control == null || control[_errors] == null) {
          return null;
        }
        return control[_errors][$_get](errorCode);
      }
      hasError(errorCode, path) {
        if (path === void 0) path = null;
        return this.getError(errorCode, path) != null;
      }
      get root() {
        let x = this;
        while (x[_parent] != null) {
          x = x[_parent];
        }
        return x;
      }
      [_updateControlsErrors]() {
        let t0;
        this[_status] = this[_calculateStatus]();
        t0 = this[_parent];
        t0 == null ? null : t0[_updateControlsErrors]();
      }
      [_calculateStatus]() {
        if (dart.test(this[_allControlsHaveStatus]("DISABLED"))) return "DISABLED";
        if (this[_errors] != null) return "INVALID";
        if (dart.test(this[_anyControlsHaveStatus]("PENDING"))) return "PENDING";
        if (dart.test(this[_anyControlsHaveStatus]("INVALID"))) return "INVALID";
        return "VALID";
      }
      [_updateTouched](opts) {
        let updateParent = opts && 'updateParent' in opts ? opts.updateParent : null;
        this[_touched] = this[_anyControlsTouched]();
        if (this[_parent] != null && dart.test(updateParent)) {
          this[_parent][_updateTouched]({updateParent: updateParent});
        }
      }
      [_updatePristine](opts) {
        let updateParent = opts && 'updateParent' in opts ? opts.updateParent : null;
        this[_pristine] = !dart.test(this[_anyControlsDirty]());
        if (this[_parent] != null && dart.test(updateParent)) {
          this[_parent][_updatePristine]({updateParent: updateParent});
        }
      }
      [_anyControlsHaveStatus](status) {
        return this[_anyControls](dart.fn(c => c.status == status, AbstractControlTobool()));
      }
      [_anyControlsTouched]() {
        return this[_anyControls](dart.fn(c => c.touched, AbstractControlTobool()));
      }
      [_anyControlsDirty]() {
        return this[_anyControls](dart.fn(c => c.dirty, AbstractControlTobool()));
      }
    }
    (AbstractControl.new = function(validator, opts) {
      let value = opts && 'value' in opts ? opts.value : null;
      this[_valueChanges] = StreamControllerOfT().broadcast();
      this[_statusChanges] = StreamControllerOfString().broadcast();
      this[_disabledChanges] = StreamControllerOfbool().broadcast();
      this[_status] = null;
      this[_errors] = null;
      this[_pristine] = true;
      this[_touched] = false;
      this[_parent] = null;
      this[validator$] = validator;
      this[_value] = T._check(value);
      this.updateValueAndValidity({onlySelf: true, emitEvent: false});
    }).prototype = AbstractControl.prototype;
    dart.addTypeTests(AbstractControl);
    AbstractControl.prototype[_is_AbstractControl_default] = true;
    dart.setMethodSignature(AbstractControl, () => ({
      __proto__: dart.getMethods(AbstractControl.__proto__),
      markAsTouched: dart.fnType(dart.void, [], {updateParent: core.bool}, {}),
      markAsUntouched: dart.fnType(dart.void, [], {updateParent: core.bool}, {}),
      markAsDirty: dart.fnType(dart.void, [], {emitEvent: core.bool, onlySelf: core.bool}, {}),
      markAsPristine: dart.fnType(dart.void, [], {updateParent: core.bool}, {}),
      markAsPending: dart.fnType(dart.void, [], {onlySelf: core.bool}, {}),
      markAsDisabled: dart.fnType(dart.void, [], {emitEvent: core.bool, updateParent: core.bool}, {}),
      markAsEnabled: dart.fnType(dart.void, [], {emitEvent: core.bool, updateParent: core.bool}, {}),
      reset: dart.fnType(dart.void, [], {emitEvent: core.bool, isDisabled: core.bool, updateParent: core.bool, value: core.Object}, {}),
      [_updateAncestors]: dart.fnType(dart.void, [], {emitEvent: core.bool, updateParent: core.bool}, {}),
      setParent: dart.fnType(dart.void, [model.AbstractControl]),
      updateValueAndValidity: dart.fnType(dart.void, [], {emitEvent: core.bool, onlySelf: core.bool}, {}),
      [_emitEvent]: dart.fnType(dart.void, []),
      [_runValidator]: dart.fnType(core.Map$(core.String, dart.dynamic), []),
      setErrors: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)], {emitEvent: core.bool}, {}),
      find: dart.fnType(model.AbstractControl, [core.String]),
      findPath: dart.fnType(model.AbstractControl, [core.List$(core.String)]),
      getError: dart.fnType(dart.dynamic, [core.String], [core.List$(core.String)]),
      hasError: dart.fnType(core.bool, [core.String], [core.List$(core.String)]),
      [_updateControlsErrors]: dart.fnType(dart.void, []),
      [_calculateStatus]: dart.fnType(core.String, []),
      [_updateTouched]: dart.fnType(dart.void, [], {updateParent: core.bool}, {}),
      [_updatePristine]: dart.fnType(dart.void, [], {updateParent: core.bool}, {}),
      [_anyControlsHaveStatus]: dart.fnType(core.bool, [core.String]),
      [_anyControlsTouched]: dart.fnType(core.bool, []),
      [_anyControlsDirty]: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(AbstractControl, () => ({
      __proto__: dart.getGetters(AbstractControl.__proto__),
      value: T,
      status: core.String,
      valid: core.bool,
      invalid: core.bool,
      disabled: core.bool,
      enabled: core.bool,
      errors: core.Map$(core.String, dart.dynamic),
      pristine: core.bool,
      dirty: core.bool,
      touched: core.bool,
      untouched: core.bool,
      valueChanges: async.Stream$(T),
      statusChanges: async.Stream$(core.String),
      disabledChanges: async.Stream$(core.bool),
      pending: core.bool,
      root: model.AbstractControl
    }));
    dart.setLibraryUri(AbstractControl, "package:angular_forms/src/model.dart");
    dart.setFieldSignature(AbstractControl, () => ({
      __proto__: dart.getFields(AbstractControl.__proto__),
      validator: dart.fieldType(dart.fnType(core.Map$(core.String, dart.dynamic), [model.AbstractControl])),
      [_value]: dart.fieldType(T),
      [_valueChanges]: dart.finalFieldType(async.StreamController$(T)),
      [_statusChanges]: dart.finalFieldType(async.StreamController$(core.String)),
      [_disabledChanges]: dart.finalFieldType(async.StreamController$(core.bool)),
      [_status]: dart.fieldType(core.String),
      [_errors]: dart.fieldType(core.Map$(core.String, dart.dynamic)),
      [_pristine]: dart.fieldType(core.bool),
      [_touched]: dart.fieldType(core.bool),
      [_parent]: dart.fieldType(model.AbstractControl)
    }));
    return AbstractControl;
  });
  model.AbstractControl = model.AbstractControl$();
  dart.defineLazy(model.AbstractControl, {
    /*model.AbstractControl.VALID*/get VALID() {
      return "VALID";
    },
    /*model.AbstractControl.INVALID*/get INVALID() {
      return "INVALID";
    },
    /*model.AbstractControl.PENDING*/get PENDING() {
      return "PENDING";
    },
    /*model.AbstractControl.DISABLED*/get DISABLED() {
      return "DISABLED";
    }
  });
  dart.addTypeTests(model.AbstractControl, _is_AbstractControl_default);
  const _onChange = dart.privateName(model, "_onChange");
  const _rawValue = dart.privateName(model, "_rawValue");
  const _is_Control_default = Symbol('_is_Control_default');
  model.Control$ = dart.generic(T => {
    class Control extends model.AbstractControl$(T) {
      updateValue(value, opts) {
        let t0;
        T._check(value);
        let onlySelf = opts && 'onlySelf' in opts ? opts.onlySelf : null;
        let emitEvent = opts && 'emitEvent' in opts ? opts.emitEvent : null;
        let emitModelToViewChange = opts && 'emitModelToViewChange' in opts ? opts.emitModelToViewChange : null;
        let rawValue = opts && 'rawValue' in opts ? opts.rawValue : null;
        emitModelToViewChange = (t0 = emitModelToViewChange, t0 == null ? true : t0);
        this[_value] = value;
        this[_rawValue] = rawValue;
        if (this[_onChange] != null && dart.test(emitModelToViewChange)) dart.dsend(this, _onChange, [this[_value]]);
        this.updateValueAndValidity({onlySelf: onlySelf, emitEvent: emitEvent});
      }
      get rawValue() {
        return this[_rawValue];
      }
      onUpdate() {
      }
      [_anyControls](_) {
        return false;
      }
      [_allControlsHaveStatus](status) {
        return this.status == status;
      }
      [_forEachChild](callback) {
      }
      registerOnChange(fn) {
        this[_onChange] = fn;
      }
    }
    (Control.new = function(value, validator) {
      if (value === void 0) value = null;
      if (validator === void 0) validator = null;
      this[_onChange] = null;
      this[_rawValue] = null;
      Control.__proto__.new.call(this, validator, {value: value});
      ;
    }).prototype = Control.prototype;
    dart.addTypeTests(Control);
    Control.prototype[_is_Control_default] = true;
    dart.setMethodSignature(Control, () => ({
      __proto__: dart.getMethods(Control.__proto__),
      updateValue: dart.fnType(dart.void, [core.Object], {emitEvent: core.bool, emitModelToViewChange: core.bool, onlySelf: core.bool, rawValue: core.String}, {}),
      onUpdate: dart.fnType(dart.void, []),
      [_anyControls]: dart.fnType(core.bool, [dart.fnType(core.bool, [model.AbstractControl])]),
      [_allControlsHaveStatus]: dart.fnType(core.bool, [core.String]),
      [_forEachChild]: dart.fnType(dart.void, [dart.fnType(dart.void, [model.AbstractControl])]),
      registerOnChange: dart.fnType(dart.void, [core.Function])
    }));
    dart.setGetterSignature(Control, () => ({
      __proto__: dart.getGetters(Control.__proto__),
      rawValue: core.String
    }));
    dart.setLibraryUri(Control, "package:angular_forms/src/model.dart");
    dart.setFieldSignature(Control, () => ({
      __proto__: dart.getFields(Control.__proto__),
      [_onChange]: dart.fieldType(core.Function),
      [_rawValue]: dart.fieldType(core.String)
    }));
    return Control;
  });
  model.Control = model.Control$();
  dart.addTypeTests(model.Control, _is_Control_default);
  const _checkAllValuesPresent = dart.privateName(model, "_checkAllValuesPresent");
  const _reduceValue = dart.privateName(model, "_reduceValue");
  const _is_AbstractControlGroup_default = Symbol('_is_AbstractControlGroup_default');
  const controls$ = dart.privateName(model, "AbstractControlGroup.controls");
  model.AbstractControlGroup$ = dart.generic(T => {
    class AbstractControlGroup extends model.AbstractControl$(T) {
      get controls() {
        return this[controls$];
      }
      set controls(value) {
        super.controls = value;
      }
      addControl(name, control) {
        this.controls[$_set](name, control);
        control.setParent(this);
      }
      removeControl(name) {
        this.controls[$remove](name);
      }
      contains(controlName) {
        return dart.test(this.controls[$containsKey](controlName)) && dart.test(this.controls[$_get](controlName).enabled);
      }
      [_anyControls](condition) {
        for (let name of this.controls[$keys]) {
          if (dart.test(this.contains(name)) && dart.test(condition(this.controls[$_get](name)))) return true;
        }
        return false;
      }
      [_allControlsHaveStatus](status) {
        if (dart.test(this.controls[$isEmpty])) return this.status == status;
        for (let name of this.controls[$keys]) {
          if (this.controls[$_get](name).status != status) return false;
        }
        return true;
      }
      [_forEachChild](callback) {
        for (let control of this.controls[$values]) {
          callback(control);
        }
      }
      included(controlName) {
        let t0, t0$;
        t0$ = (t0 = this.controls[$_get](controlName), t0 == null ? null : t0.enabled);
        return t0$ == null ? false : t0$;
      }
    }
    (AbstractControlGroup.new = function(controls, validator) {
      if (validator === void 0) validator = null;
      this[controls$] = controls;
      AbstractControlGroup.__proto__.new.call(this, validator);
      model._setParentForControls(this, this.controls[$values]);
    }).prototype = AbstractControlGroup.prototype;
    dart.addTypeTests(AbstractControlGroup);
    AbstractControlGroup.prototype[_is_AbstractControlGroup_default] = true;
    dart.setMethodSignature(AbstractControlGroup, () => ({
      __proto__: dart.getMethods(AbstractControlGroup.__proto__),
      addControl: dart.fnType(dart.void, [core.String, model.AbstractControl]),
      removeControl: dart.fnType(dart.void, [core.String]),
      contains: dart.fnType(core.bool, [core.String]),
      [_anyControls]: dart.fnType(core.bool, [dart.fnType(core.bool, [model.AbstractControl])]),
      [_allControlsHaveStatus]: dart.fnType(core.bool, [core.String]),
      [_forEachChild]: dart.fnType(dart.void, [dart.fnType(dart.void, [model.AbstractControl])]),
      included: dart.fnType(core.bool, [core.String])
    }));
    dart.setLibraryUri(AbstractControlGroup, "package:angular_forms/src/model.dart");
    dart.setFieldSignature(AbstractControlGroup, () => ({
      __proto__: dart.getFields(AbstractControlGroup.__proto__),
      controls: dart.finalFieldType(core.Map$(core.String, model.AbstractControl))
    }));
    return AbstractControlGroup;
  });
  model.AbstractControlGroup = model.AbstractControlGroup$();
  dart.addTypeTests(model.AbstractControlGroup, _is_AbstractControlGroup_default);
  model.ControlGroup = class ControlGroup extends model.AbstractControlGroup$(core.Map$(core.String, dart.dynamic)) {
    updateValue(value, opts) {
      let t0, t0$;
      MapOfString$dynamic()._check(value);
      let onlySelf = opts && 'onlySelf' in opts ? opts.onlySelf : null;
      let emitEvent = opts && 'emitEvent' in opts ? opts.emitEvent : null;
      let emitModelToViewChange = opts && 'emitModelToViewChange' in opts ? opts.emitModelToViewChange : null;
      let rawValue = opts && 'rawValue' in opts ? opts.rawValue : null;
      if (dart.test((t0$ = (t0 = value, t0 == null ? null : t0[$isEmpty]), t0$ == null ? false : t0$))) value = null;
      this[_checkAllValuesPresent](value);
      for (let name of this.controls[$keys]) {
        this.controls[$_get](name).updateValue(value == null ? null : value[$_get](name), {onlySelf: true, emitEvent: emitEvent, emitModelToViewChange: emitModelToViewChange});
      }
      this.updateValueAndValidity({onlySelf: onlySelf, emitEvent: emitEvent});
    }
    onUpdate() {
      this[_value] = this[_reduceValue]();
    }
    [_reduceValue]() {
      let res = new (IdentityMapOfString$dynamic()).new();
      for (let name of this.controls[$keys]) {
        if (dart.test(this.included(name)) || dart.test(this.disabled)) {
          res[$_set](name, this.controls[$_get](name).value);
        }
      }
      return res;
    }
    [_checkAllValuesPresent](value) {
      if (value == null) return;
      if (!dart.test(dart.fn(() => {
        for (let name of this.controls[$keys]) {
          if (!dart.test(value[$containsKey](name))) {
            dart.throw(new core.ArgumentError.value(value, "Must supply a value for form control with name: " + dart.str(name) + "."));
          }
        }
        for (let name of value[$keys]) {
          if (!dart.test(this.controls[$containsKey](name))) {
            dart.throw(new core.ArgumentError.value(value, "No form control found with name: " + dart.str(name) + "."));
          }
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/angular_forms/src/model.dart", 517, 12, "() {\n      for (var name in controls.keys) {\n        if (!value.containsKey(name)) {\n          throw ArgumentError.value(\n              value, 'Must supply a value for form control with name: $name.');\n        }\n      }\n      for (var name in value.keys) {\n        if (!controls.containsKey(name)) {\n          throw ArgumentError.value(\n              value, 'No form control found with name: $name.');\n        }\n      }\n      return true;\n    }()");
    }
  };
  (model.ControlGroup.new = function(controls, validator) {
    if (validator === void 0) validator = null;
    model.ControlGroup.__proto__.new.call(this, controls, validator);
    ;
  }).prototype = model.ControlGroup.prototype;
  dart.addTypeTests(model.ControlGroup);
  dart.setMethodSignature(model.ControlGroup, () => ({
    __proto__: dart.getMethods(model.ControlGroup.__proto__),
    updateValue: dart.fnType(dart.void, [core.Object], {emitEvent: core.bool, emitModelToViewChange: core.bool, onlySelf: core.bool, rawValue: core.String}, {}),
    onUpdate: dart.fnType(dart.void, []),
    [_reduceValue]: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    [_checkAllValuesPresent]: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setLibraryUri(model.ControlGroup, "package:angular_forms/src/model.dart");
  const controls$0 = dart.privateName(model, "ControlArray.controls");
  model.ControlArray = class ControlArray extends model.AbstractControl$(core.List) {
    get controls() {
      return this[controls$0];
    }
    set controls(value) {
      this[controls$0] = value;
    }
    at(index) {
      return this.controls[$_get](dart.asInt(index));
    }
    push(control) {
      this.controls[$add](control);
      control.setParent(this);
      this.updateValueAndValidity();
    }
    insert(index, control) {
      this.controls[$insert](dart.asInt(index), control);
      control.setParent(this);
      this.updateValueAndValidity();
    }
    removeAt(index) {
      this.controls[$removeAt](dart.asInt(index));
      this.updateValueAndValidity();
    }
    get length() {
      return this.controls[$length];
    }
    updateValue(value, opts) {
      let t0, t0$;
      core.List._check(value);
      let onlySelf = opts && 'onlySelf' in opts ? opts.onlySelf : null;
      let emitEvent = opts && 'emitEvent' in opts ? opts.emitEvent : null;
      let emitModelToViewChange = opts && 'emitModelToViewChange' in opts ? opts.emitModelToViewChange : null;
      let rawValue = opts && 'rawValue' in opts ? opts.rawValue : null;
      if (dart.test((t0$ = (t0 = value, t0 == null ? null : t0[$isEmpty]), t0$ == null ? false : t0$))) value = null;
      this[_checkAllValuesPresent](value);
      for (let i = 0; i < dart.notNull(this.controls[$length]); i = i + 1) {
        this.controls[$_get](i).updateValue(value == null ? null : value[$_get](i), {onlySelf: true, emitEvent: emitEvent, emitModelToViewChange: emitModelToViewChange});
      }
      this.updateValueAndValidity({onlySelf: onlySelf, emitEvent: emitEvent});
    }
    onUpdate() {
      this[_value] = [];
      for (let control of this.controls) {
        if (dart.test(control.enabled) || dart.test(this.disabled)) {
          this[_value][$add](control.value);
        }
      }
    }
    [_anyControls](condition) {
      for (let control of this.controls) {
        if (dart.test(condition(control))) return true;
      }
      return false;
    }
    [_allControlsHaveStatus](status) {
      if (dart.test(this.controls[$isEmpty])) return this.status == status;
      for (let control of this.controls) {
        if (control.status != status) return false;
      }
      return true;
    }
    [_forEachChild](callback) {
      for (let control of this.controls) {
        callback(control);
      }
    }
    [_checkAllValuesPresent](value) {
      if (value == null) return;
      if (!dart.test(dart.fn(() => {
        if (value[$length] != this.controls[$length]) {
          dart.throw(new core.ArgumentError.value(value, "ControlArray has " + dart.str(this.controls[$length]) + " controls, but received a list " + "of " + dart.str(value[$length]) + " values."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/angular_forms/src/model.dart", 698, 12, "() {\n      if (value.length != controls.length) {\n        throw ArgumentError.value(\n            value,\n            'ControlArray has ${controls.length} controls, but received a list '\n            'of ${value.length} values.');\n      }\n      return true;\n    }()");
    }
  };
  (model.ControlArray.new = function(controls, validator) {
    if (validator === void 0) validator = null;
    this[controls$0] = controls;
    model.ControlArray.__proto__.new.call(this, validator);
    model._setParentForControls(this, this.controls);
  }).prototype = model.ControlArray.prototype;
  dart.addTypeTests(model.ControlArray);
  dart.setMethodSignature(model.ControlArray, () => ({
    __proto__: dart.getMethods(model.ControlArray.__proto__),
    at: dart.fnType(model.AbstractControl, [core.num]),
    push: dart.fnType(dart.void, [model.AbstractControl]),
    insert: dart.fnType(dart.void, [core.num, model.AbstractControl]),
    removeAt: dart.fnType(dart.void, [core.num]),
    updateValue: dart.fnType(dart.void, [core.Object], {emitEvent: core.bool, emitModelToViewChange: core.bool, onlySelf: core.bool, rawValue: core.String}, {}),
    onUpdate: dart.fnType(dart.void, []),
    [_anyControls]: dart.fnType(core.bool, [dart.fnType(core.bool, [model.AbstractControl])]),
    [_allControlsHaveStatus]: dart.fnType(core.bool, [core.String]),
    [_forEachChild]: dart.fnType(dart.void, [dart.fnType(dart.void, [model.AbstractControl])]),
    [_checkAllValuesPresent]: dart.fnType(dart.void, [core.List])
  }));
  dart.setGetterSignature(model.ControlArray, () => ({
    __proto__: dart.getGetters(model.ControlArray.__proto__),
    length: core.num
  }));
  dart.setLibraryUri(model.ControlArray, "package:angular_forms/src/model.dart");
  dart.setFieldSignature(model.ControlArray, () => ({
    __proto__: dart.getFields(model.ControlArray.__proto__),
    controls: dart.fieldType(core.List$(model.AbstractControl))
  }));
  model._find = function _find(control, path) {
    if (path == null || dart.test(path[$isEmpty])) return null;
    return path[$fold](model.AbstractControl, control, dart.fn((v, name) => {
      if (model.AbstractControlGroup.is(v)) {
        return v.controls[$_get](name);
      } else if (model.ControlArray.is(v)) {
        let index = core.int.parse(name);
        return v.at(index);
      } else {
        return null;
      }
    }, AbstractControlAndStringToAbstractControl()));
  };
  model._setParentForControls = function _setParentForControls(parent, children) {
    for (let control of children) {
      control.setParent(parent);
    }
  };
  const _isDisabled = dart.privateName(ng_control_group, "_isDisabled");
  const _disabledChanged = dart.privateName(ng_control_group, "_disabledChanged");
  const _parent$ = dart.privateName(ng_control_group, "_parent");
  const _is_AbstractControlDirective_default = Symbol('_is_AbstractControlDirective_default');
  const name = dart.privateName(abstract_control_directive, "AbstractControlDirective.name");
  abstract_control_directive.AbstractControlDirective$ = dart.generic(T => {
    class AbstractControlDirective extends core.Object {
      get name() {
        return this[name];
      }
      set name(value) {
        this[name] = value;
      }
      get value() {
        let t0;
        t0 = this.control;
        return t0 == null ? null : t0.value;
      }
      get valid() {
        let t0;
        t0 = this.control;
        return t0 == null ? null : t0.valid;
      }
      get disabled() {
        let t0;
        t0 = this.control;
        return t0 == null ? null : t0.disabled;
      }
      get enabled() {
        let t0;
        t0 = this.control;
        return t0 == null ? null : t0.enabled;
      }
      get errors() {
        let t0;
        t0 = this.control;
        return t0 == null ? null : t0.errors;
      }
      get pristine() {
        let t0;
        t0 = this.control;
        return t0 == null ? null : t0.pristine;
      }
      get dirty() {
        let t0;
        t0 = this.control;
        return t0 == null ? null : t0.dirty;
      }
      get touched() {
        let t0;
        t0 = this.control;
        return t0 == null ? null : t0.touched;
      }
      get untouched() {
        let t0;
        t0 = this.control;
        return t0 == null ? null : t0.untouched;
      }
      get path() {
        return null;
      }
      toggleDisabled(isDisabled) {
        if (dart.test(isDisabled) && !dart.test(this.control.disabled)) this.control.markAsDisabled();
        if (!dart.test(isDisabled) && !dart.test(this.control.enabled)) this.control.markAsEnabled();
      }
      reset(opts) {
        let t0;
        let value = opts && 'value' in opts ? opts.value : null;
        t0 = this.control;
        t0 == null ? null : t0.reset({value: value});
      }
    }
    (AbstractControlDirective.new = function() {
      this[name] = null;
      ;
    }).prototype = AbstractControlDirective.prototype;
    dart.addTypeTests(AbstractControlDirective);
    AbstractControlDirective.prototype[_is_AbstractControlDirective_default] = true;
    dart.setMethodSignature(AbstractControlDirective, () => ({
      __proto__: dart.getMethods(AbstractControlDirective.__proto__),
      toggleDisabled: dart.fnType(dart.void, [core.bool]),
      reset: dart.fnType(dart.void, [], {value: dart.dynamic}, {})
    }));
    dart.setGetterSignature(AbstractControlDirective, () => ({
      __proto__: dart.getGetters(AbstractControlDirective.__proto__),
      value: dart.dynamic,
      valid: core.bool,
      disabled: core.bool,
      enabled: core.bool,
      errors: core.Map$(core.String, dart.dynamic),
      pristine: core.bool,
      dirty: core.bool,
      touched: core.bool,
      untouched: core.bool,
      path: core.List$(core.String)
    }));
    dart.setLibraryUri(AbstractControlDirective, "package:angular_forms/src/directives/abstract_control_directive.dart");
    dart.setFieldSignature(AbstractControlDirective, () => ({
      __proto__: dart.getFields(AbstractControlDirective.__proto__),
      name: dart.fieldType(core.String)
    }));
    return AbstractControlDirective;
  });
  abstract_control_directive.AbstractControlDirective = abstract_control_directive.AbstractControlDirective$();
  dart.addTypeTests(abstract_control_directive.AbstractControlDirective, _is_AbstractControlDirective_default);
  const _is_ControlContainer_default = Symbol('_is_ControlContainer_default');
  control_container.ControlContainer$ = dart.generic(T => {
    class ControlContainer extends abstract_control_directive.AbstractControlDirective$(T) {}
    (ControlContainer.new = function() {
      ControlContainer.__proto__.new.call(this);
      ;
    }).prototype = ControlContainer.prototype;
    dart.addTypeTests(ControlContainer);
    ControlContainer.prototype[_is_ControlContainer_default] = true;
    dart.setLibraryUri(ControlContainer, "package:angular_forms/src/directives/control_container.dart");
    return ControlContainer;
  });
  control_container.ControlContainer = control_container.ControlContainer$();
  dart.addTypeTests(control_container.ControlContainer, _is_ControlContainer_default);
  const validator = dart.privateName(ng_control_group, "NgControlGroup.validator");
  ng_control_group.NgControlGroup = class NgControlGroup extends control_container.ControlContainer$(model.AbstractControlGroup) {
    get validator() {
      return this[validator];
    }
    set validator(value) {
      super.validator = value;
    }
    set name(value) {
      super.name = value;
    }
    get name() {
      return super.name;
    }
    set disabled(isDisabled) {
      this[_isDisabled] = isDisabled;
      if (this.control != null) {
        this[_disabledChanged] = false;
        this.toggleDisabled(isDisabled);
      } else {
        this[_disabledChanged] = true;
      }
    }
    get disabled() {
      return super.disabled;
    }
    ngOnInit() {
      this.formDirective.addControlGroup(this);
      if (dart.test(this[_disabledChanged])) {
        async.scheduleMicrotask(dart.fn(() => {
          this[_disabledChanged] = false;
          this.toggleDisabled(this[_isDisabled]);
        }, VoidToNull()));
      }
    }
    ngOnDestroy() {
      this.formDirective.removeControlGroup(this);
    }
    get control() {
      return this.formDirective.getControlGroup(this);
    }
    get path() {
      return shared.controlPath(this.name, this[_parent$]);
    }
    get formDirective() {
      return this[_parent$].formDirective;
    }
  };
  (ng_control_group.NgControlGroup.new = function(_parent, validators) {
    this[_isDisabled] = false;
    this[_disabledChanged] = false;
    this[_parent$] = _parent;
    this[validator] = shared.composeValidators(validators);
    ng_control_group.NgControlGroup.__proto__.new.call(this);
    ;
  }).prototype = ng_control_group.NgControlGroup.prototype;
  dart.addTypeTests(ng_control_group.NgControlGroup);
  ng_control_group.NgControlGroup[dart.implements] = () => [lifecycle_hooks.OnInit, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(ng_control_group.NgControlGroup, () => ({
    __proto__: dart.getMethods(ng_control_group.NgControlGroup.__proto__),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(ng_control_group.NgControlGroup, () => ({
    __proto__: dart.getGetters(ng_control_group.NgControlGroup.__proto__),
    control: model.AbstractControlGroup,
    formDirective: form_interface.Form
  }));
  dart.setSetterSignature(ng_control_group.NgControlGroup, () => ({
    __proto__: dart.getSetters(ng_control_group.NgControlGroup.__proto__),
    name: core.String,
    disabled: core.bool
  }));
  dart.setLibraryUri(ng_control_group.NgControlGroup, "package:angular_forms/src/directives/ng_control_group.dart");
  dart.setFieldSignature(ng_control_group.NgControlGroup, () => ({
    __proto__: dart.getFields(ng_control_group.NgControlGroup.__proto__),
    validator: dart.finalFieldType(dart.fnType(core.Map$(core.String, dart.dynamic), [model.AbstractControl])),
    [_parent$]: dart.finalFieldType(control_container.ControlContainer$(model.AbstractControlGroup)),
    [_isDisabled]: dart.fieldType(core.bool),
    [_disabledChanged]: dart.fieldType(core.bool)
  }));
  let C1;
  shared.controlPath = function controlPath(name, parent) {
    let t0;
    t0 = parent.path[$toList]();
    t0[$add](name);
    return t0;
  };
  shared.setUpControl = function setUpControl(control, dir) {
    let t0;
    if (control == null) shared._throwError(dir, "Cannot find control");
    if (!(dir.valueAccessor != null)) dart.assertFailed("No value accessor for " + "(" + dart.str(dir.path[$join](" -> ")) + ") or you may be missing formDirectives in " + "your directives list.", "org-dartlang-app:///packages/angular_forms/src/directives/shared.dart", 25, 7, "dir.valueAccessor != null");
    control.validator = validators$.Validators.compose(JSArrayOfAbstractControlToMapOfString$dynamic().of([control.validator, dir.validator]));
    dir.valueAccessor.writeValue(control.value);
    dir.valueAccessor.registerOnChange(dart.fn((newValue, opts) => {
      let rawValue = opts && 'rawValue' in opts ? opts.rawValue : null;
      dir.viewToModelUpdate(newValue);
      control.updateValue(newValue, {emitModelToViewChange: false, rawValue: rawValue});
      control.markAsDirty({emitEvent: false});
    }, dynamic__ToNull()));
    control.registerOnChange(dart.fn(newValue => {
      let t0;
      t0 = dir.valueAccessor;
      return t0 == null ? null : t0.writeValue(newValue);
    }, dynamicTovoid()));
    control.disabledChanges.listen((t0 = dir.valueAccessor, t0 == null ? null : dart.bind(t0, 'onDisabledChanged')));
    dir.valueAccessor.registerOnTouched(dart.fn(() => control.markAsTouched(), VoidTovoid()));
  };
  shared.setUpControlGroup = function setUpControlGroup(control, dir) {
    if (control == null) shared._throwError(dir, "Cannot find control");
    control.validator = validators$.Validators.compose(JSArrayOfAbstractControlToMapOfString$dynamic().of([control.validator, dir.validator]));
  };
  shared._throwError = function _throwError(dir, message) {
    let t0;
    if ((t0 = dir, t0 == null ? null : t0.path) != null) {
      message = dart.str(message) + " (" + dart.str(dir.path[$join](" -> ")) + ")";
    }
    dart.throw(new core.ArgumentError.new(message));
  };
  shared.composeValidators = function composeValidators(validators) {
    return validators != null ? validators$.Validators.compose(validators[$map](AbstractControlToMapOfString$dynamic(), C1 || CT.C1)[$toList]()) : null;
  };
  shared.selectValueAccessor = function selectValueAccessor(valueAccessors) {
    if (valueAccessors == null) return null;
    let defaultAccessor = null;
    let builtinAccessor = null;
    let customAccessor = null;
    for (let v of valueAccessors) {
      if (default_value_accessor.DefaultValueAccessor.is(v)) {
        defaultAccessor = v;
      } else if (checkbox_value_accessor.CheckboxControlValueAccessor.is(v) || number_value_accessor.NumberValueAccessor.is(v) || select_control_value_accessor.SelectControlValueAccessor.is(v) || radio_control_value_accessor.RadioControlValueAccessor.is(v)) {
        if (builtinAccessor != null) shared._throwError(null, "More than one built-in value accessor matches");
        builtinAccessor = v;
      } else {
        if (customAccessor != null) shared._throwError(null, "More than one custom value accessor matches");
        customAccessor = v;
      }
    }
    if (customAccessor != null) return customAccessor;
    if (builtinAccessor != null) return builtinAccessor;
    if (defaultAccessor != null) return defaultAccessor;
    shared._throwError(null, "No valid value accessor for");
    return null;
  };
  shared.setElementDisabled = function setElementDisabled(element, isDisabled) {
    js_util.setProperty(element, "disabled", isDisabled);
  };
  const _optionMap = dart.privateName(select_control_value_accessor, "_optionMap");
  const _idCounter = dart.privateName(select_control_value_accessor, "_idCounter");
  const _element = dart.privateName(select_control_value_accessor, "_element");
  const _getOptionValue = dart.privateName(select_control_value_accessor, "_getOptionValue");
  const _getOptionId = dart.privateName(select_control_value_accessor, "_getOptionId");
  const _registerOption = dart.privateName(select_control_value_accessor, "_registerOption");
  const onTouched = dart.privateName(control_value_accessor, "TouchHandler.onTouched");
  control_value_accessor.TouchHandler = class TouchHandler extends core.Object {
    get onTouched() {
      return this[onTouched];
    }
    set onTouched(value) {
      this[onTouched] = value;
    }
    touchHandler() {
      this.onTouched();
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
  };
  (control_value_accessor.TouchHandler.new = function() {
    this[onTouched] = dart.fn(() => {
    }, VoidToNull());
    ;
  }).prototype = control_value_accessor.TouchHandler.prototype;
  dart.addTypeTests(control_value_accessor.TouchHandler);
  dart.setMethodSignature(control_value_accessor.TouchHandler, () => ({
    __proto__: dart.getMethods(control_value_accessor.TouchHandler.__proto__),
    touchHandler: dart.fnType(dart.void, []),
    registerOnTouched: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [])])
  }));
  dart.setLibraryUri(control_value_accessor.TouchHandler, "package:angular_forms/src/directives/control_value_accessor.dart");
  dart.setFieldSignature(control_value_accessor.TouchHandler, () => ({
    __proto__: dart.getFields(control_value_accessor.TouchHandler.__proto__),
    onTouched: dart.fieldType(dart.fnType(dart.dynamic, []))
  }));
  const _is_ChangeHandler_default = Symbol('_is_ChangeHandler_default');
  const onChange = dart.privateName(control_value_accessor, "ChangeHandler.onChange");
  control_value_accessor.ChangeHandler$ = dart.generic(T => {
    let T__ToNull = () => (T__ToNull = dart.constFn(dart.fnType(core.Null, [T], {rawValue: core.String}, {})))();
    class ChangeHandler extends core.Object {
      get onChange() {
        return this[onChange];
      }
      set onChange(value) {
        this[onChange] = value;
      }
      registerOnChange(fn) {
        this.onChange = fn;
      }
    }
    (ChangeHandler.new = function() {
      this[onChange] = dart.fn((_, opts) => {
        let rawValue = opts && 'rawValue' in opts ? opts.rawValue : null;
      }, T__ToNull());
      ;
    }).prototype = ChangeHandler.prototype;
    dart.addTypeTests(ChangeHandler);
    ChangeHandler.prototype[_is_ChangeHandler_default] = true;
    dart.setMethodSignature(ChangeHandler, () => ({
      __proto__: dart.getMethods(ChangeHandler.__proto__),
      registerOnChange: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [T], {rawValue: core.String}, {})])
    }));
    dart.setLibraryUri(ChangeHandler, "package:angular_forms/src/directives/control_value_accessor.dart");
    dart.setFieldSignature(ChangeHandler, () => ({
      __proto__: dart.getFields(ChangeHandler.__proto__),
      onChange: dart.fieldType(dart.fnType(dart.dynamic, [T], {rawValue: core.String}, {}))
    }));
    return ChangeHandler;
  });
  control_value_accessor.ChangeHandler = control_value_accessor.ChangeHandler$();
  dart.addTypeTests(control_value_accessor.ChangeHandler, _is_ChangeHandler_default);
  const value$ = dart.privateName(select_control_value_accessor, "SelectControlValueAccessor.value");
  const Object_TouchHandler$36 = class Object_TouchHandler extends core.Object {};
  (Object_TouchHandler$36.new = function() {
    control_value_accessor.TouchHandler.new.call(this);
  }).prototype = Object_TouchHandler$36.prototype;
  dart.applyMixin(Object_TouchHandler$36, control_value_accessor.TouchHandler);
  const Object_ChangeHandler$36 = class Object_ChangeHandler extends Object_TouchHandler$36 {};
  (Object_ChangeHandler$36.new = function() {
    control_value_accessor.ChangeHandler.new.call(this);
    Object_ChangeHandler$36.__proto__.new.call(this);
  }).prototype = Object_ChangeHandler$36.prototype;
  dart.applyMixin(Object_ChangeHandler$36, control_value_accessor.ChangeHandler);
  select_control_value_accessor.SelectControlValueAccessor = class SelectControlValueAccessor extends Object_ChangeHandler$36 {
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    handleChange(value) {
      this.onChange(this[_getOptionValue](value), {rawValue: value});
    }
    writeValue(value) {
      this.value = value;
      let valueString = select_control_value_accessor._buildValueString(this[_getOptionId](value), value);
      this[_element].value = valueString;
    }
    onDisabledChanged(isDisabled) {
      this[_element].disabled = isDisabled;
    }
    [_registerOption]() {
      let t0;
      return dart.toString((t0 = this[_idCounter], this[_idCounter] = dart.notNull(t0) + 1, t0));
    }
    [_getOptionId](value) {
      for (let id of this[_optionMap][$keys]) {
        if (core.identical(this[_optionMap][$_get](id), value)) return id;
      }
      return null;
    }
    [_getOptionValue](valueString) {
      let t0;
      let value = this[_optionMap][$_get](select_control_value_accessor._extractId(valueString));
      t0 = value;
      return t0 == null ? valueString : t0;
    }
  };
  (select_control_value_accessor.SelectControlValueAccessor.new = function(element) {
    this[value$] = null;
    this[_optionMap] = new (LinkedMapOfString$dynamic()).new();
    this[_idCounter] = 0;
    this[_element] = html.SelectElement.as(element);
    select_control_value_accessor.SelectControlValueAccessor.__proto__.new.call(this);
    ;
  }).prototype = select_control_value_accessor.SelectControlValueAccessor.prototype;
  dart.addTypeTests(select_control_value_accessor.SelectControlValueAccessor);
  select_control_value_accessor.SelectControlValueAccessor[dart.implements] = () => [control_value_accessor.ControlValueAccessor];
  dart.setMethodSignature(select_control_value_accessor.SelectControlValueAccessor, () => ({
    __proto__: dart.getMethods(select_control_value_accessor.SelectControlValueAccessor.__proto__),
    handleChange: dart.fnType(dart.void, [core.String]),
    writeValue: dart.fnType(dart.void, [core.Object]),
    onDisabledChanged: dart.fnType(dart.void, [core.bool]),
    [_registerOption]: dart.fnType(core.String, []),
    [_getOptionId]: dart.fnType(core.String, [dart.dynamic]),
    [_getOptionValue]: dart.fnType(dart.dynamic, [core.String])
  }));
  dart.setLibraryUri(select_control_value_accessor.SelectControlValueAccessor, "package:angular_forms/src/directives/select_control_value_accessor.dart");
  dart.setFieldSignature(select_control_value_accessor.SelectControlValueAccessor, () => ({
    __proto__: dart.getFields(select_control_value_accessor.SelectControlValueAccessor.__proto__),
    [_element]: dart.finalFieldType(html.SelectElement),
    value: dart.fieldType(dart.dynamic),
    [_optionMap]: dart.finalFieldType(core.Map$(core.String, dart.dynamic)),
    [_idCounter]: dart.fieldType(core.num)
  }));
  const _select$ = dart.privateName(select_control_value_accessor, "_select");
  const _setElementValue = dart.privateName(select_control_value_accessor, "_setElementValue");
  const id = dart.privateName(select_control_value_accessor, "NgSelectOption.id");
  select_control_value_accessor.NgSelectOption = class NgSelectOption extends core.Object {
    get id() {
      return this[id];
    }
    set id(value) {
      this[id] = value;
    }
    set ngValue(value) {
      if (this[_select$] == null) return;
      this[_select$][_optionMap][$_set](this.id, value);
      this[_setElementValue](select_control_value_accessor._buildValueString(this.id, value));
      this[_select$].writeValue(this[_select$].value);
    }
    set value(value) {
      this[_setElementValue](core.String._check(value));
      if (this[_select$] != null) this[_select$].writeValue(this[_select$].value);
    }
    [_setElementValue](value) {
      this[_element].value = value;
    }
    ngOnDestroy() {
      if (this[_select$] != null) {
        dart.test(this[_select$][_optionMap][$containsKey](this.id)) && (this[_select$][_optionMap][$remove](this.id) != null || true);
        this[_select$].writeValue(this[_select$].value);
      }
    }
  };
  (select_control_value_accessor.NgSelectOption.new = function(element, _select) {
    this[id] = null;
    this[_select$] = _select;
    this[_element] = html.OptionElement.as(element);
    if (this[_select$] != null) this.id = this[_select$][_registerOption]();
  }).prototype = select_control_value_accessor.NgSelectOption.prototype;
  dart.addTypeTests(select_control_value_accessor.NgSelectOption);
  select_control_value_accessor.NgSelectOption[dart.implements] = () => [lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(select_control_value_accessor.NgSelectOption, () => ({
    __proto__: dart.getMethods(select_control_value_accessor.NgSelectOption.__proto__),
    [_setElementValue]: dart.fnType(dart.void, [core.String]),
    ngOnDestroy: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(select_control_value_accessor.NgSelectOption, () => ({
    __proto__: dart.getSetters(select_control_value_accessor.NgSelectOption.__proto__),
    ngValue: dart.dynamic,
    value: dart.dynamic
  }));
  dart.setLibraryUri(select_control_value_accessor.NgSelectOption, "package:angular_forms/src/directives/select_control_value_accessor.dart");
  dart.setFieldSignature(select_control_value_accessor.NgSelectOption, () => ({
    __proto__: dart.getFields(select_control_value_accessor.NgSelectOption.__proto__),
    [_element]: dart.finalFieldType(html.OptionElement),
    [_select$]: dart.fieldType(select_control_value_accessor.SelectControlValueAccessor),
    id: dart.fieldType(core.String)
  }));
  select_control_value_accessor._buildValueString = function _buildValueString(id, value) {
    if (id == null) return dart.str(value);
    if (!dart.test(lang.isPrimitive(value))) value = "Object";
    let s = dart.str(id) + ": " + dart.str(value);
    if (s.length > 50) {
      s = s[$substring](0, 50);
    }
    return s;
  };
  select_control_value_accessor._extractId = function _extractId(valueString) {
    return valueString[$split](":")[$_get](0);
  };
  const Provider_multi = dart.privateName(providers, "Provider.multi");
  const Provider_deps = dart.privateName(providers, "Provider.deps");
  const Provider_useFactory = dart.privateName(providers, "Provider.useFactory");
  let C3;
  const Provider_useExisting = dart.privateName(providers, "Provider.useExisting");
  const Provider_useValue = dart.privateName(providers, "Provider.useValue");
  const Provider_useClass = dart.privateName(providers, "Provider.useClass");
  let C4;
  const Provider_token = dart.privateName(providers, "Provider.token");
  let C2;
  dart.defineLazy(select_control_value_accessor, {
    /*select_control_value_accessor.SELECT_VALUE_ACCESSOR*/get SELECT_VALUE_ACCESSOR() {
      return C2 || CT.C2;
    }
  });
  const _is_ControlValueAccessor_default = Symbol('_is_ControlValueAccessor_default');
  control_value_accessor.ControlValueAccessor$ = dart.generic(T => {
    class ControlValueAccessor extends core.Object {}
    (ControlValueAccessor.new = function() {
      ;
    }).prototype = ControlValueAccessor.prototype;
    dart.addTypeTests(ControlValueAccessor);
    ControlValueAccessor.prototype[_is_ControlValueAccessor_default] = true;
    dart.setLibraryUri(ControlValueAccessor, "package:angular_forms/src/directives/control_value_accessor.dart");
    return ControlValueAccessor;
  });
  control_value_accessor.ControlValueAccessor = control_value_accessor.ControlValueAccessor$();
  dart.addTypeTests(control_value_accessor.ControlValueAccessor, _is_ControlValueAccessor_default);
  dart.defineLazy(control_value_accessor, {
    /*control_value_accessor.ngValueAccessor*/get ngValueAccessor() {
      return C4 || CT.C4;
    }
  });
  const _accessors = dart.privateName(radio_control_value_accessor, "_accessors");
  const _control = dart.privateName(radio_control_value_accessor, "_control");
  radio_control_value_accessor.RadioControlRegistry = class RadioControlRegistry extends core.Object {
    add(control, accessor) {
      this[_accessors][$add](JSArrayOfObject().of([control, accessor]));
    }
    remove(accessor) {
      let indexToRemove = -1;
      for (let i = 0; i < dart.notNull(this[_accessors][$length]); i = i + 1) {
        if (core.identical(dart.dsend(this[_accessors][$_get](i), '_get', [1]), accessor)) {
          indexToRemove = i;
        }
      }
      this[_accessors][$removeAt](indexToRemove);
    }
    select(accessor) {
      for (let c of this[_accessors]) {
        if (core.identical(dart.dload(dart.dload(dart.dsend(c, '_get', [0]), 'control'), 'root'), accessor[_control].control.root) && !core.identical(dart.dsend(c, '_get', [1]), accessor)) {
          dart.dsend(dart.dsend(c, '_get', [1]), 'fireUncheck', []);
        }
      }
    }
  };
  (radio_control_value_accessor.RadioControlRegistry.new = function() {
    this[_accessors] = [];
    ;
  }).prototype = radio_control_value_accessor.RadioControlRegistry.prototype;
  dart.addTypeTests(radio_control_value_accessor.RadioControlRegistry);
  dart.setMethodSignature(radio_control_value_accessor.RadioControlRegistry, () => ({
    __proto__: dart.getMethods(radio_control_value_accessor.RadioControlRegistry.__proto__),
    add: dart.fnType(dart.void, [ng_control.NgControl, radio_control_value_accessor.RadioControlValueAccessor]),
    remove: dart.fnType(dart.void, [radio_control_value_accessor.RadioControlValueAccessor]),
    select: dart.fnType(dart.void, [radio_control_value_accessor.RadioControlValueAccessor])
  }));
  dart.setLibraryUri(radio_control_value_accessor.RadioControlRegistry, "package:angular_forms/src/directives/radio_control_value_accessor.dart");
  dart.setFieldSignature(radio_control_value_accessor.RadioControlRegistry, () => ({
    __proto__: dart.getFields(radio_control_value_accessor.RadioControlRegistry.__proto__),
    [_accessors]: dart.finalFieldType(core.List)
  }));
  const checked$ = dart.privateName(radio_control_value_accessor, "RadioButtonState.checked");
  const value$0 = dart.privateName(radio_control_value_accessor, "RadioButtonState.value");
  radio_control_value_accessor.RadioButtonState = class RadioButtonState extends core.Object {
    get checked() {
      return this[checked$];
    }
    set checked(value) {
      super.checked = value;
    }
    get value() {
      return this[value$0];
    }
    set value(value) {
      super.value = value;
    }
  };
  (radio_control_value_accessor.RadioButtonState.new = function(checked, value) {
    this[checked$] = checked;
    this[value$0] = value;
    ;
  }).prototype = radio_control_value_accessor.RadioButtonState.prototype;
  dart.addTypeTests(radio_control_value_accessor.RadioButtonState);
  dart.setLibraryUri(radio_control_value_accessor.RadioButtonState, "package:angular_forms/src/directives/radio_control_value_accessor.dart");
  dart.setFieldSignature(radio_control_value_accessor.RadioButtonState, () => ({
    __proto__: dart.getFields(radio_control_value_accessor.RadioButtonState.__proto__),
    checked: dart.finalFieldType(core.bool),
    value: dart.finalFieldType(core.String)
  }));
  const _state = dart.privateName(radio_control_value_accessor, "_state");
  const _element$ = dart.privateName(radio_control_value_accessor, "_element");
  const _registry$ = dart.privateName(radio_control_value_accessor, "_registry");
  const _injector$ = dart.privateName(radio_control_value_accessor, "_injector");
  const name$ = dart.privateName(radio_control_value_accessor, "RadioControlValueAccessor.name");
  const Object_TouchHandler$36$ = class Object_TouchHandler extends core.Object {};
  (Object_TouchHandler$36$.new = function() {
    control_value_accessor.TouchHandler.new.call(this);
  }).prototype = Object_TouchHandler$36$.prototype;
  dart.applyMixin(Object_TouchHandler$36$, control_value_accessor.TouchHandler);
  const Object_ChangeHandler$36$ = class Object_ChangeHandler extends Object_TouchHandler$36$ {};
  (Object_ChangeHandler$36$.new = function() {
    control_value_accessor.ChangeHandler$(radio_control_value_accessor.RadioButtonState).new.call(this);
    Object_ChangeHandler$36$.__proto__.new.call(this);
  }).prototype = Object_ChangeHandler$36$.prototype;
  dart.applyMixin(Object_ChangeHandler$36$, control_value_accessor.ChangeHandler$(radio_control_value_accessor.RadioButtonState));
  radio_control_value_accessor.RadioControlValueAccessor = class RadioControlValueAccessor extends Object_ChangeHandler$36$ {
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    changeHandler() {
      this.onChange(new radio_control_value_accessor.RadioButtonState.new(true, this[_state].value), {rawValue: this[_state].value});
      this[_registry$].select(this);
    }
    ngOnInit() {
      this[_control] = ng_control.NgControl._check(this[_injector$].get(dart.wrapType(ng_control.NgControl)));
      this[_registry$].add(this[_control], this);
    }
    ngOnDestroy() {
      this[_registry$].remove(this);
    }
    writeValue(value) {
      let t0, t0$;
      radio_control_value_accessor.RadioButtonState._check(value);
      this[_state] = value;
      if (dart.test((t0$ = (t0 = value, t0 == null ? null : t0.checked), t0$ == null ? false : t0$))) {
        js_util.setProperty(this[_element$], "checked", true);
      }
    }
    fireUncheck() {
      this.onChange(new radio_control_value_accessor.RadioButtonState.new(false, this[_state].value), {rawValue: this[_state].value});
    }
    onDisabledChanged(isDisabled) {
      shared.setElementDisabled(this[_element$], isDisabled);
    }
  };
  (radio_control_value_accessor.RadioControlValueAccessor.new = function(_element, _registry, _injector) {
    this[_state] = null;
    this[_control] = null;
    this[name$] = null;
    this[_element$] = _element;
    this[_registry$] = _registry;
    this[_injector$] = _injector;
    radio_control_value_accessor.RadioControlValueAccessor.__proto__.new.call(this);
    ;
  }).prototype = radio_control_value_accessor.RadioControlValueAccessor.prototype;
  dart.addTypeTests(radio_control_value_accessor.RadioControlValueAccessor);
  radio_control_value_accessor.RadioControlValueAccessor[dart.implements] = () => [control_value_accessor.ControlValueAccessor$(radio_control_value_accessor.RadioButtonState), lifecycle_hooks.OnDestroy, lifecycle_hooks.OnInit];
  dart.setMethodSignature(radio_control_value_accessor.RadioControlValueAccessor, () => ({
    __proto__: dart.getMethods(radio_control_value_accessor.RadioControlValueAccessor.__proto__),
    changeHandler: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    writeValue: dart.fnType(dart.void, [core.Object]),
    fireUncheck: dart.fnType(dart.void, []),
    onDisabledChanged: dart.fnType(dart.void, [core.bool])
  }));
  dart.setLibraryUri(radio_control_value_accessor.RadioControlValueAccessor, "package:angular_forms/src/directives/radio_control_value_accessor.dart");
  dart.setFieldSignature(radio_control_value_accessor.RadioControlValueAccessor, () => ({
    __proto__: dart.getFields(radio_control_value_accessor.RadioControlValueAccessor.__proto__),
    [_element$]: dart.finalFieldType(html.HtmlElement),
    [_registry$]: dart.finalFieldType(radio_control_value_accessor.RadioControlRegistry),
    [_injector$]: dart.finalFieldType(injector.Injector),
    [_state]: dart.fieldType(radio_control_value_accessor.RadioButtonState),
    [_control]: dart.fieldType(ng_control.NgControl),
    name: dart.fieldType(core.String)
  }));
  let C6;
  let C5;
  dart.defineLazy(radio_control_value_accessor, {
    /*radio_control_value_accessor.RADIO_VALUE_ACCESSOR*/get RADIO_VALUE_ACCESSOR() {
      return C5 || CT.C5;
    }
  });
  const valueAccessor = dart.privateName(ng_control, "NgControl.valueAccessor");
  const validator$0 = dart.privateName(ng_control, "NgControl.validator");
  ng_control.NgControl = class NgControl extends abstract_control_directive.AbstractControlDirective$(model.Control) {
    get valueAccessor() {
      return this[valueAccessor];
    }
    set valueAccessor(value) {
      this[valueAccessor] = value;
    }
    get validator() {
      return this[validator$0];
    }
    set validator(value) {
      super.validator = value;
    }
  };
  (ng_control.NgControl.new = function(valueAccessors, validators) {
    this[valueAccessor] = shared.selectValueAccessor(valueAccessors);
    this[validator$0] = shared.composeValidators(validators);
    ng_control.NgControl.__proto__.new.call(this);
    ;
  }).prototype = ng_control.NgControl.prototype;
  dart.addTypeTests(ng_control.NgControl);
  dart.setLibraryUri(ng_control.NgControl, "package:angular_forms/src/directives/ng_control.dart");
  dart.setFieldSignature(ng_control.NgControl, () => ({
    __proto__: dart.getFields(ng_control.NgControl.__proto__),
    valueAccessor: dart.fieldType(control_value_accessor.ControlValueAccessor),
    validator: dart.finalFieldType(dart.fnType(core.Map$(core.String, dart.dynamic), [model.AbstractControl]))
  }));
  const _element$0 = dart.privateName(number_value_accessor, "_element");
  const Object_TouchHandler$36$0 = class Object_TouchHandler extends core.Object {};
  (Object_TouchHandler$36$0.new = function() {
    control_value_accessor.TouchHandler.new.call(this);
  }).prototype = Object_TouchHandler$36$0.prototype;
  dart.applyMixin(Object_TouchHandler$36$0, control_value_accessor.TouchHandler);
  const Object_ChangeHandler$36$0 = class Object_ChangeHandler extends Object_TouchHandler$36$0 {};
  (Object_ChangeHandler$36$0.new = function() {
    control_value_accessor.ChangeHandler$(core.double).new.call(this);
    Object_ChangeHandler$36$0.__proto__.new.call(this);
  }).prototype = Object_ChangeHandler$36$0.prototype;
  dart.applyMixin(Object_ChangeHandler$36$0, control_value_accessor.ChangeHandler$(core.double));
  number_value_accessor.NumberValueAccessor = class NumberValueAccessor extends Object_ChangeHandler$36$0 {
    handleChange(value) {
      this.onChange(value === "" ? null : core.double.parse(value), {rawValue: value});
    }
    writeValue(value) {
      this[_element$0].value = dart.str(value);
    }
    onDisabledChanged(isDisabled) {
      this[_element$0].disabled = isDisabled;
    }
  };
  (number_value_accessor.NumberValueAccessor.new = function(element) {
    this[_element$0] = html.InputElement.as(element);
    number_value_accessor.NumberValueAccessor.__proto__.new.call(this);
    ;
  }).prototype = number_value_accessor.NumberValueAccessor.prototype;
  dart.addTypeTests(number_value_accessor.NumberValueAccessor);
  number_value_accessor.NumberValueAccessor[dart.implements] = () => [control_value_accessor.ControlValueAccessor];
  dart.setMethodSignature(number_value_accessor.NumberValueAccessor, () => ({
    __proto__: dart.getMethods(number_value_accessor.NumberValueAccessor.__proto__),
    handleChange: dart.fnType(dart.void, [core.String]),
    writeValue: dart.fnType(dart.void, [core.Object]),
    onDisabledChanged: dart.fnType(dart.void, [core.bool])
  }));
  dart.setLibraryUri(number_value_accessor.NumberValueAccessor, "package:angular_forms/src/directives/number_value_accessor.dart");
  dart.setFieldSignature(number_value_accessor.NumberValueAccessor, () => ({
    __proto__: dart.getFields(number_value_accessor.NumberValueAccessor.__proto__),
    [_element$0]: dart.finalFieldType(html.InputElement)
  }));
  let C8;
  let C7;
  dart.defineLazy(number_value_accessor, {
    /*number_value_accessor.NUMBER_VALUE_ACCESSOR*/get NUMBER_VALUE_ACCESSOR() {
      return C7 || CT.C7;
    }
  });
  normalize_validator.normalizeValidator = function normalizeValidator(validator) {
    if (validators.Validator.is(validator)) {
      return dart.fn(c => validator.validate(c), AbstractControlToMapOfString$dynamic());
    } else if (core.Function.is(validator)) {
      return AbstractControlToMapOfString$dynamic().as(validator);
    } else {
      return AbstractControlToMapOfString$dynamic().as(dart.dload(validator, 'call'));
    }
  };
  const _element$1 = dart.privateName(default_value_accessor, "_element");
  const Object_TouchHandler$36$1 = class Object_TouchHandler extends core.Object {};
  (Object_TouchHandler$36$1.new = function() {
    control_value_accessor.TouchHandler.new.call(this);
  }).prototype = Object_TouchHandler$36$1.prototype;
  dart.applyMixin(Object_TouchHandler$36$1, control_value_accessor.TouchHandler);
  const Object_ChangeHandler$36$1 = class Object_ChangeHandler extends Object_TouchHandler$36$1 {};
  (Object_ChangeHandler$36$1.new = function() {
    control_value_accessor.ChangeHandler$(core.String).new.call(this);
    Object_ChangeHandler$36$1.__proto__.new.call(this);
  }).prototype = Object_ChangeHandler$36$1.prototype;
  dart.applyMixin(Object_ChangeHandler$36$1, control_value_accessor.ChangeHandler$(core.String));
  default_value_accessor.DefaultValueAccessor = class DefaultValueAccessor extends Object_ChangeHandler$36$1 {
    handleChange(value) {
      this.onChange(value, {rawValue: value});
    }
    writeValue(value) {
      let t0;
      let normalizedValue = (t0 = value, t0 == null ? "" : t0);
      js_util.setProperty(this[_element$1], "value", normalizedValue);
    }
    onDisabledChanged(isDisabled) {
      shared.setElementDisabled(this[_element$1], isDisabled);
    }
  };
  (default_value_accessor.DefaultValueAccessor.new = function(_element) {
    this[_element$1] = _element;
    default_value_accessor.DefaultValueAccessor.__proto__.new.call(this);
    ;
  }).prototype = default_value_accessor.DefaultValueAccessor.prototype;
  dart.addTypeTests(default_value_accessor.DefaultValueAccessor);
  default_value_accessor.DefaultValueAccessor[dart.implements] = () => [control_value_accessor.ControlValueAccessor];
  dart.setMethodSignature(default_value_accessor.DefaultValueAccessor, () => ({
    __proto__: dart.getMethods(default_value_accessor.DefaultValueAccessor.__proto__),
    handleChange: dart.fnType(dart.void, [core.String]),
    writeValue: dart.fnType(dart.void, [core.Object]),
    onDisabledChanged: dart.fnType(dart.void, [core.bool])
  }));
  dart.setLibraryUri(default_value_accessor.DefaultValueAccessor, "package:angular_forms/src/directives/default_value_accessor.dart");
  dart.setFieldSignature(default_value_accessor.DefaultValueAccessor, () => ({
    __proto__: dart.getFields(default_value_accessor.DefaultValueAccessor.__proto__),
    [_element$1]: dart.finalFieldType(html.HtmlElement)
  }));
  let C10;
  let C9;
  dart.defineLazy(default_value_accessor, {
    /*default_value_accessor.DEFAULT_VALUE_ACCESSOR*/get DEFAULT_VALUE_ACCESSOR() {
      return C9 || CT.C9;
    }
  });
  form_interface.Form = class Form extends core.Object {};
  (form_interface.Form.new = function() {
    ;
  }).prototype = form_interface.Form.prototype;
  dart.addTypeTests(form_interface.Form);
  dart.setLibraryUri(form_interface.Form, "package:angular_forms/src/directives/form_interface.dart");
  const _element$2 = dart.privateName(checkbox_value_accessor, "_element");
  const Object_TouchHandler$36$2 = class Object_TouchHandler extends core.Object {};
  (Object_TouchHandler$36$2.new = function() {
    control_value_accessor.TouchHandler.new.call(this);
  }).prototype = Object_TouchHandler$36$2.prototype;
  dart.applyMixin(Object_TouchHandler$36$2, control_value_accessor.TouchHandler);
  const Object_ChangeHandler$36$2 = class Object_ChangeHandler extends Object_TouchHandler$36$2 {};
  (Object_ChangeHandler$36$2.new = function() {
    control_value_accessor.ChangeHandler$(core.bool).new.call(this);
    Object_ChangeHandler$36$2.__proto__.new.call(this);
  }).prototype = Object_ChangeHandler$36$2.prototype;
  dart.applyMixin(Object_ChangeHandler$36$2, control_value_accessor.ChangeHandler$(core.bool));
  checkbox_value_accessor.CheckboxControlValueAccessor = class CheckboxControlValueAccessor extends Object_ChangeHandler$36$2 {
    handleChange(checked) {
      this.onChange(checked, {rawValue: dart.str(checked)});
    }
    writeValue(value) {
      core.bool._check(value);
      this[_element$2].checked = value;
    }
    onDisabledChanged(isDisabled) {
      this[_element$2].disabled = isDisabled;
    }
  };
  (checkbox_value_accessor.CheckboxControlValueAccessor.new = function(element) {
    this[_element$2] = html.InputElement.as(element);
    checkbox_value_accessor.CheckboxControlValueAccessor.__proto__.new.call(this);
    ;
  }).prototype = checkbox_value_accessor.CheckboxControlValueAccessor.prototype;
  dart.addTypeTests(checkbox_value_accessor.CheckboxControlValueAccessor);
  checkbox_value_accessor.CheckboxControlValueAccessor[dart.implements] = () => [control_value_accessor.ControlValueAccessor$(core.bool)];
  dart.setMethodSignature(checkbox_value_accessor.CheckboxControlValueAccessor, () => ({
    __proto__: dart.getMethods(checkbox_value_accessor.CheckboxControlValueAccessor.__proto__),
    handleChange: dart.fnType(dart.void, [core.bool]),
    writeValue: dart.fnType(dart.void, [core.Object]),
    onDisabledChanged: dart.fnType(dart.void, [core.bool])
  }));
  dart.setLibraryUri(checkbox_value_accessor.CheckboxControlValueAccessor, "package:angular_forms/src/directives/checkbox_value_accessor.dart");
  dart.setFieldSignature(checkbox_value_accessor.CheckboxControlValueAccessor, () => ({
    __proto__: dart.getFields(checkbox_value_accessor.CheckboxControlValueAccessor.__proto__),
    [_element$2]: dart.finalFieldType(html.InputElement)
  }));
  let C12;
  let C11;
  dart.defineLazy(checkbox_value_accessor, {
    /*checkbox_value_accessor.CHECKBOX_VALUE_ACCESSOR*/get CHECKBOX_VALUE_ACCESSOR() {
      return C11 || CT.C11;
    }
  });
  const _ngSubmit = dart.privateName(abstract_form, "_ngSubmit");
  const _ngBeforeSubmit = dart.privateName(abstract_form, "_ngBeforeSubmit");
  const _is_AbstractForm_default = Symbol('_is_AbstractForm_default');
  abstract_form.AbstractForm$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class AbstractForm extends control_container.ControlContainer$(T) {
      get ngSubmit() {
        return this[_ngSubmit].stream;
      }
      get ngBeforeSubmit() {
        return this[_ngBeforeSubmit].stream;
      }
      onSubmit(event) {
        let t0;
        this[_ngBeforeSubmit].add(this.form);
        this[_ngSubmit].add(this.form);
        t0 = event;
        t0 == null ? null : t0.preventDefault();
      }
      onReset(event) {
        let t0;
        this.reset();
        t0 = event;
        t0 == null ? null : t0.preventDefault();
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return JSArrayOfString().of([]);
      }
      getControl(dir) {
        let t0;
        return model.Control.as((t0 = this.form, t0 == null ? null : t0.findPath(dir.path)));
      }
      getControlGroup(dir) {
        let t0;
        return model.AbstractControlGroup.as((t0 = this.form, t0 == null ? null : t0.findPath(dir.path)));
      }
      updateModel(dir, value) {
        let t0;
        let ctrl = this.getControl(dir);
        t0 = ctrl;
        t0 == null ? null : t0.updateValue(value);
      }
    }
    (AbstractForm.new = function() {
      this[_ngSubmit] = StreamControllerOfT().broadcast({sync: true});
      this[_ngBeforeSubmit] = StreamControllerOfT().broadcast({sync: true});
      AbstractForm.__proto__.new.call(this);
      ;
    }).prototype = AbstractForm.prototype;
    dart.addTypeTests(AbstractForm);
    AbstractForm.prototype[_is_AbstractForm_default] = true;
    AbstractForm[dart.implements] = () => [form_interface.Form];
    dart.setMethodSignature(AbstractForm, () => ({
      __proto__: dart.getMethods(AbstractForm.__proto__),
      onSubmit: dart.fnType(dart.void, [html.Event]),
      onReset: dart.fnType(dart.void, [html.Event]),
      getControl: dart.fnType(model.Control, [ng_control.NgControl]),
      getControlGroup: dart.fnType(model.AbstractControlGroup, [ng_control_group.NgControlGroup]),
      updateModel: dart.fnType(dart.void, [ng_control.NgControl, dart.dynamic])
    }));
    dart.setGetterSignature(AbstractForm, () => ({
      __proto__: dart.getGetters(AbstractForm.__proto__),
      ngSubmit: async.Stream$(T),
      ngBeforeSubmit: async.Stream$(T),
      formDirective: form_interface.Form,
      control: T
    }));
    dart.setLibraryUri(AbstractForm, "package:angular_forms/src/directives/abstract_form.dart");
    dart.setFieldSignature(AbstractForm, () => ({
      __proto__: dart.getFields(AbstractForm.__proto__),
      [_ngSubmit]: dart.finalFieldType(async.StreamController$(T)),
      [_ngBeforeSubmit]: dart.finalFieldType(async.StreamController$(T))
    }));
    return AbstractForm;
  });
  abstract_form.AbstractForm = abstract_form.AbstractForm$();
  dart.addTypeTests(abstract_form.AbstractForm, _is_AbstractForm_default);
  const _is_AbstractNgForm_default = Symbol('_is_AbstractNgForm_default');
  const form = dart.privateName(ng_form, "AbstractNgForm.form");
  ng_form.AbstractNgForm$ = dart.generic(T => {
    class AbstractNgForm extends abstract_form.AbstractForm$(T) {
      get form() {
        return this[form];
      }
      set form(value) {
        this[form] = T._check(value);
      }
      set disabled(isDisabled) {
        this.toggleDisabled(isDisabled);
      }
      get disabled() {
        return super.disabled;
      }
      get controls() {
        return this.form.controls;
      }
      createControl(_) {
        return new model.Control.new();
      }
      addControl(dir) {
        let container = this.findContainer(dir.path);
        let ctrl = this.createControl(dir);
        container.addControl(dir.name, ctrl);
        async.scheduleMicrotask(dart.fn(() => {
          shared.setUpControl(ctrl, dir);
          ctrl.updateValueAndValidity({emitEvent: false});
        }, VoidToNull()));
      }
      removeControl(dir) {
        async.scheduleMicrotask(dart.fn(() => {
          let container = this.findContainer(dir.path);
          if (container != null) {
            container.removeControl(dir.name);
            container.updateValueAndValidity({emitEvent: false});
          }
        }, VoidToNull()));
      }
      addControlGroup(dir) {
        let container = this.findContainer(dir.path);
        let group = this.createGroup(dir);
        container.addControl(dir.name, group);
        async.scheduleMicrotask(dart.fn(() => {
          shared.setUpControlGroup(group, dir);
          group.updateValueAndValidity({emitEvent: false});
        }, VoidToNull()));
      }
      removeControlGroup(dir) {
        async.scheduleMicrotask(dart.fn(() => {
          let container = this.findContainer(dir.path);
          if (container != null) {
            container.removeControl(dir.name);
            container.updateValueAndValidity({emitEvent: false});
          }
        }, VoidToNull()));
      }
      updateModel(dir, value) {
        async.scheduleMicrotask(dart.fn(() => {
          super.updateModel(dir, value);
        }, VoidToNull()));
      }
      findContainer(path) {
        path[$removeLast]();
        return dart.test(path[$isEmpty]) ? this.form : T.as(this.form.findPath(path));
      }
    }
    (AbstractNgForm.new = function() {
      this[form] = null;
      AbstractNgForm.__proto__.new.call(this);
      ;
    }).prototype = AbstractNgForm.prototype;
    dart.addTypeTests(AbstractNgForm);
    AbstractNgForm.prototype[_is_AbstractNgForm_default] = true;
    dart.setMethodSignature(AbstractNgForm, () => ({
      __proto__: dart.getMethods(AbstractNgForm.__proto__),
      createControl: dart.fnType(model.Control, [ng_control.NgControl]),
      addControl: dart.fnType(dart.void, [ng_control.NgControl]),
      removeControl: dart.fnType(dart.void, [ng_control.NgControl]),
      addControlGroup: dart.fnType(dart.void, [ng_control_group.NgControlGroup]),
      removeControlGroup: dart.fnType(dart.void, [ng_control_group.NgControlGroup]),
      findContainer: dart.fnType(T, [core.List$(core.String)])
    }));
    dart.setGetterSignature(AbstractNgForm, () => ({
      __proto__: dart.getGetters(AbstractNgForm.__proto__),
      controls: core.Map$(core.String, model.AbstractControl)
    }));
    dart.setSetterSignature(AbstractNgForm, () => ({
      __proto__: dart.getSetters(AbstractNgForm.__proto__),
      disabled: core.bool
    }));
    dart.setLibraryUri(AbstractNgForm, "package:angular_forms/src/directives/ng_form.dart");
    dart.setFieldSignature(AbstractNgForm, () => ({
      __proto__: dart.getFields(AbstractNgForm.__proto__),
      form: dart.fieldType(T)
    }));
    return AbstractNgForm;
  });
  ng_form.AbstractNgForm = ng_form.AbstractNgForm$();
  dart.addTypeTests(ng_form.AbstractNgForm, _is_AbstractNgForm_default);
  ng_form.NgForm = class NgForm extends ng_form.AbstractNgForm$(model.ControlGroup) {
    createGroup(_) {
      return new model.ControlGroup.new(new (IdentityMapOfString$AbstractControl()).new());
    }
  };
  (ng_form.NgForm.new = function(validators) {
    ng_form.NgForm.__proto__.new.call(this);
    this.form = new model.ControlGroup.new(new (IdentityMapOfString$AbstractControl()).new(), shared.composeValidators(validators));
  }).prototype = ng_form.NgForm.prototype;
  dart.addTypeTests(ng_form.NgForm);
  dart.setMethodSignature(ng_form.NgForm, () => ({
    __proto__: dart.getMethods(ng_form.NgForm.__proto__),
    createGroup: dart.fnType(model.ControlGroup, [ng_control_group.NgControlGroup])
  }));
  dart.setLibraryUri(ng_form.NgForm, "package:angular_forms/src/directives/ng_form.dart");
  const _formChanged = dart.privateName(ng_form_model, "_formChanged");
  const _form = dart.privateName(ng_form_model, "_form");
  const _validator = dart.privateName(ng_form_model, "_validator");
  const _checkFormPresent = dart.privateName(ng_form_model, "_checkFormPresent");
  const _updateDomValue = dart.privateName(ng_form_model, "_updateDomValue");
  const directives$ = dart.privateName(ng_form_model, "NgFormModel.directives");
  ng_form_model.NgFormModel = class NgFormModel extends abstract_form.AbstractForm$(model.AbstractControlGroup) {
    get directives() {
      return this[directives$];
    }
    set directives(value) {
      this[directives$] = value;
    }
    get form() {
      return this[_form];
    }
    set form(value) {
      this[_form] = value;
      this[_formChanged] = true;
    }
    ngAfterChanges() {
      this[_checkFormPresent]();
      if (dart.test(this[_formChanged])) {
        this[_formChanged] = false;
        this[_form].validator = validators$.Validators.compose(JSArrayOfAbstractControlToMapOfString$dynamic().of([this[_form].validator, this[_validator]]));
        this[_form].updateValueAndValidity({onlySelf: true, emitEvent: false});
      }
      this[_updateDomValue]();
    }
    addControl(dir) {
      let ctrl = this.getControl(dir);
      shared.setUpControl(ctrl, dir);
      ctrl.updateValueAndValidity({emitEvent: false});
      this.directives[$add](dir);
    }
    removeControl(dir) {
      this.directives[$remove](dir);
    }
    addControlGroup(dir) {
      let ctrl = this.form.findPath(dir.path);
      shared.setUpControlGroup(model.AbstractControlGroup._check(ctrl), dir);
      ctrl.updateValueAndValidity({emitEvent: false});
    }
    removeControlGroup(dir) {
    }
    [_updateDomValue]() {
      for (let dir of this.directives) {
        let ctrl = this.form.findPath(dir.path);
        dir.valueAccessor.writeValue(ctrl.value);
      }
    }
    [_checkFormPresent]() {
      if (this.form == null) {
        dart.throw(new core.StateError.new("ngFormModel expects a form. Please pass one in. Example: " + "<form [ngFormModel]=\"myCoolForm\">"));
      }
    }
  };
  (ng_form_model.NgFormModel.new = function(validators) {
    this[_formChanged] = false;
    this[_form] = null;
    this[directives$] = JSArrayOfNgControl().of([]);
    this[_validator] = shared.composeValidators(validators);
    ng_form_model.NgFormModel.__proto__.new.call(this);
    ;
  }).prototype = ng_form_model.NgFormModel.prototype;
  dart.addTypeTests(ng_form_model.NgFormModel);
  ng_form_model.NgFormModel[dart.implements] = () => [lifecycle_hooks.AfterChanges];
  dart.setMethodSignature(ng_form_model.NgFormModel, () => ({
    __proto__: dart.getMethods(ng_form_model.NgFormModel.__proto__),
    ngAfterChanges: dart.fnType(dart.void, []),
    addControl: dart.fnType(dart.void, [ng_control.NgControl]),
    removeControl: dart.fnType(dart.void, [ng_control.NgControl]),
    addControlGroup: dart.fnType(dart.void, [ng_control_group.NgControlGroup]),
    removeControlGroup: dart.fnType(dart.void, [ng_control_group.NgControlGroup]),
    [_updateDomValue]: dart.fnType(dart.void, []),
    [_checkFormPresent]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(ng_form_model.NgFormModel, () => ({
    __proto__: dart.getGetters(ng_form_model.NgFormModel.__proto__),
    form: model.AbstractControlGroup
  }));
  dart.setSetterSignature(ng_form_model.NgFormModel, () => ({
    __proto__: dart.getSetters(ng_form_model.NgFormModel.__proto__),
    form: model.AbstractControlGroup
  }));
  dart.setLibraryUri(ng_form_model.NgFormModel, "package:angular_forms/src/directives/ng_form_model.dart");
  dart.setFieldSignature(ng_form_model.NgFormModel, () => ({
    __proto__: dart.getFields(ng_form_model.NgFormModel.__proto__),
    [_validator]: dart.finalFieldType(dart.fnType(core.Map$(core.String, dart.dynamic), [model.AbstractControl])),
    [_formChanged]: dart.fieldType(core.bool),
    [_form]: dart.fieldType(model.AbstractControlGroup),
    directives: dart.fieldType(core.List$(ng_control.NgControl))
  }));
  const _cd$ = dart.privateName(ng_control_status, "_cd");
  ng_control_status.NgControlStatus = class NgControlStatus extends core.Object {
    get ngClassUntouched() {
      return this[_cd$].control != null ? this[_cd$].control.untouched : false;
    }
    get ngClassTouched() {
      return this[_cd$].control != null ? this[_cd$].control.touched : false;
    }
    get ngClassPristine() {
      return this[_cd$].control != null ? this[_cd$].control.pristine : false;
    }
    get ngClassDirty() {
      return this[_cd$].control != null ? this[_cd$].control.dirty : false;
    }
    get ngClassValid() {
      return this[_cd$].control != null ? this[_cd$].control.valid : false;
    }
    get ngClassInvalid() {
      return this[_cd$].control != null ? !dart.test(this[_cd$].control.valid) : false;
    }
  };
  (ng_control_status.NgControlStatus.new = function(_cd) {
    this[_cd$] = _cd;
    ;
  }).prototype = ng_control_status.NgControlStatus.prototype;
  dart.addTypeTests(ng_control_status.NgControlStatus);
  dart.setGetterSignature(ng_control_status.NgControlStatus, () => ({
    __proto__: dart.getGetters(ng_control_status.NgControlStatus.__proto__),
    ngClassUntouched: core.bool,
    ngClassTouched: core.bool,
    ngClassPristine: core.bool,
    ngClassDirty: core.bool,
    ngClassValid: core.bool,
    ngClassInvalid: core.bool
  }));
  dart.setLibraryUri(ng_control_status.NgControlStatus, "package:angular_forms/src/directives/ng_control_status.dart");
  dart.setFieldSignature(ng_control_status.NgControlStatus, () => ({
    __proto__: dart.getFields(ng_control_status.NgControlStatus.__proto__),
    [_cd$]: dart.finalFieldType(ng_control.NgControl)
  }));
  let C14;
  let C15;
  let C16;
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C24;
  let C25;
  let C13;
  dart.defineLazy(directives, {
    /*directives.formDirectives*/get formDirectives() {
      return C13 || CT.C13;
    }
  });
  const _control$ = dart.privateName(ng_model, "_control");
  const _update = dart.privateName(ng_model, "_update");
  const _model = dart.privateName(ng_model, "_model");
  const _modelChanged = dart.privateName(ng_model, "_modelChanged");
  const _init = dart.privateName(ng_model, "_init");
  const viewModel = dart.privateName(ng_model, "NgModel.viewModel");
  const NgControl_ComponentState$36 = class NgControl_ComponentState extends ng_control.NgControl {};
  (NgControl_ComponentState$36.new = function(valueAccessors, validators) {
    component_state.ComponentState.new.call(this);
    NgControl_ComponentState$36.__proto__.new.call(this, valueAccessors, validators);
  }).prototype = NgControl_ComponentState$36.prototype;
  dart.applyMixin(NgControl_ComponentState$36, component_state.ComponentState);
  ng_model.NgModel = class NgModel extends NgControl_ComponentState$36 {
    get viewModel() {
      return this[viewModel];
    }
    set viewModel(value) {
      this[viewModel] = value;
    }
    set model(value) {
      if (core.identical(this[_model], value)) return;
      this[_model] = value;
      if (core.identical(value, this.viewModel)) return;
      this[_modelChanged] = true;
    }
    set disabled(isDisabled) {
      this.setState(dart.fn(() => {
        this.toggleDisabled(isDisabled);
      }, VoidToNull()));
    }
    get disabled() {
      return super.disabled;
    }
    [_init](valueAccessors) {
      this[_control$] = new model.Control.new();
      this[_update] = async.StreamController.broadcast({sync: true});
    }
    get update() {
      return this[_update].stream;
    }
    ngAfterChanges() {
      if (dart.test(this[_modelChanged])) {
        this[_control$].updateValue(this[_model]);
        this.setState(dart.fn(() => {
          this.viewModel = this[_model];
        }, VoidToNull()));
        this[_modelChanged] = false;
      }
    }
    ngOnInit() {
      shared.setUpControl(this[_control$], this);
      this[_control$].updateValueAndValidity({emitEvent: false});
    }
    get control() {
      return this[_control$];
    }
    get path() {
      return JSArrayOfString().of([]);
    }
    viewToModelUpdate(newValue) {
      this.viewModel = newValue;
      this[_update].add(newValue);
    }
  };
  (ng_model.NgModel.new = function(validators, valueAccessors) {
    this[_control$] = null;
    this[_update] = null;
    this[_model] = null;
    this[_modelChanged] = false;
    this[viewModel] = null;
    ng_model.NgModel.__proto__.new.call(this, valueAccessors, validators);
    this[_init](valueAccessors);
  }).prototype = ng_model.NgModel.prototype;
  dart.addTypeTests(ng_model.NgModel);
  ng_model.NgModel[dart.implements] = () => [lifecycle_hooks.AfterChanges, lifecycle_hooks.OnInit];
  dart.setMethodSignature(ng_model.NgModel, () => ({
    __proto__: dart.getMethods(ng_model.NgModel.__proto__),
    [_init]: dart.fnType(dart.void, [core.List$(control_value_accessor.ControlValueAccessor)]),
    ngAfterChanges: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.void, []),
    viewToModelUpdate: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(ng_model.NgModel, () => ({
    __proto__: dart.getGetters(ng_model.NgModel.__proto__),
    update: async.Stream,
    control: model.Control
  }));
  dart.setSetterSignature(ng_model.NgModel, () => ({
    __proto__: dart.getSetters(ng_model.NgModel.__proto__),
    model: dart.dynamic,
    disabled: core.bool
  }));
  dart.setLibraryUri(ng_model.NgModel, "package:angular_forms/src/directives/ng_model.dart");
  dart.setFieldSignature(ng_model.NgModel, () => ({
    __proto__: dart.getFields(ng_model.NgModel.__proto__),
    [_control$]: dart.fieldType(model.Control),
    [_update]: dart.fieldType(async.StreamController),
    [_model]: dart.fieldType(dart.dynamic),
    [_modelChanged]: dart.fieldType(core.bool),
    viewModel: dart.fieldType(dart.dynamic)
  }));
  const _formChanged$ = dart.privateName(ng_form_control, "_formChanged");
  const _form$ = dart.privateName(ng_form_control, "_form");
  const _update$ = dart.privateName(ng_form_control, "_update");
  const _modelChanged$ = dart.privateName(ng_form_control, "_modelChanged");
  const _model$ = dart.privateName(ng_form_control, "_model");
  const viewModel$ = dart.privateName(ng_form_control, "NgFormControl.viewModel");
  ng_form_control.NgFormControl = class NgFormControl extends ng_control.NgControl {
    get viewModel() {
      return this[viewModel$];
    }
    set viewModel(value) {
      this[viewModel$] = value;
    }
    set form(value) {
      this[_form$] = value;
      this[_formChanged$] = true;
    }
    get form() {
      return this[_form$];
    }
    set model(value) {
      this[_modelChanged$] = true;
      this[_model$] = value;
    }
    get model() {
      return this[_model$];
    }
    get update() {
      return this[_update$].stream;
    }
    ngAfterChanges() {
      if (dart.test(this[_formChanged$])) {
        this[_formChanged$] = false;
        shared.setUpControl(this.form, this);
        this.form.updateValueAndValidity({emitEvent: false});
      }
      if (dart.test(this[_modelChanged$])) {
        this[_modelChanged$] = false;
        if (!core.identical(this[_model$], this.viewModel)) {
          this.form.updateValue(this.model);
          this.viewModel = this.model;
        }
      }
    }
    get path() {
      return JSArrayOfString().of([]);
    }
    get control() {
      return this.form;
    }
    viewToModelUpdate(newValue) {
      this.viewModel = newValue;
      this[_update$].add(newValue);
    }
  };
  (ng_form_control.NgFormControl.new = function(validators, valueAccessors) {
    this[_formChanged$] = false;
    this[_form$] = null;
    this[_update$] = async.StreamController.broadcast();
    this[_modelChanged$] = false;
    this[_model$] = null;
    this[viewModel$] = null;
    ng_form_control.NgFormControl.__proto__.new.call(this, valueAccessors, validators);
    ;
  }).prototype = ng_form_control.NgFormControl.prototype;
  dart.addTypeTests(ng_form_control.NgFormControl);
  ng_form_control.NgFormControl[dart.implements] = () => [lifecycle_hooks.AfterChanges];
  dart.setMethodSignature(ng_form_control.NgFormControl, () => ({
    __proto__: dart.getMethods(ng_form_control.NgFormControl.__proto__),
    ngAfterChanges: dart.fnType(dart.void, []),
    viewToModelUpdate: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(ng_form_control.NgFormControl, () => ({
    __proto__: dart.getGetters(ng_form_control.NgFormControl.__proto__),
    form: model.Control,
    model: dart.dynamic,
    update: async.Stream,
    control: model.Control
  }));
  dart.setSetterSignature(ng_form_control.NgFormControl, () => ({
    __proto__: dart.getSetters(ng_form_control.NgFormControl.__proto__),
    form: model.Control,
    model: dart.dynamic
  }));
  dart.setLibraryUri(ng_form_control.NgFormControl, "package:angular_forms/src/directives/ng_form_control.dart");
  dart.setFieldSignature(ng_form_control.NgFormControl, () => ({
    __proto__: dart.getFields(ng_form_control.NgFormControl.__proto__),
    [_formChanged$]: dart.fieldType(core.bool),
    [_form$]: dart.fieldType(model.Control),
    [_update$]: dart.finalFieldType(async.StreamController),
    [_modelChanged$]: dart.fieldType(core.bool),
    [_model$]: dart.fieldType(dart.dynamic),
    viewModel: dart.fieldType(dart.dynamic)
  }));
  const _update$0 = dart.privateName(ng_control_name, "_update");
  const _modelChanged$0 = dart.privateName(ng_control_name, "_modelChanged");
  const _model$0 = dart.privateName(ng_control_name, "_model");
  const _added = dart.privateName(ng_control_name, "_added");
  const _isDisabled$ = dart.privateName(ng_control_name, "_isDisabled");
  const _disabledChanged$ = dart.privateName(ng_control_name, "_disabledChanged");
  const _parent$0 = dart.privateName(ng_control_name, "_parent");
  const viewModel$0 = dart.privateName(ng_control_name, "NgControlName.viewModel");
  ng_control_name.NgControlName = class NgControlName extends ng_control.NgControl {
    get viewModel() {
      return this[viewModel$0];
    }
    set viewModel(value) {
      this[viewModel$0] = value;
    }
    set model(value) {
      this[_modelChanged$0] = true;
      this[_model$0] = value;
    }
    get model() {
      return this[_model$0];
    }
    set name(value) {
      super.name = value;
    }
    get name() {
      return super.name;
    }
    set disabled(isDisabled) {
      this[_isDisabled$] = isDisabled;
      this[_disabledChanged$] = true;
    }
    get disabled() {
      return super.disabled;
    }
    get update() {
      return this[_update$0].stream;
    }
    ngAfterChanges() {
      if (dart.test(this[_modelChanged$0])) {
        this[_modelChanged$0] = false;
        if (!core.identical(this[_model$0], this.viewModel)) {
          this.viewModel = this[_model$0];
          this.formDirective.updateModel(this, this[_model$0]);
        }
      }
      if (!dart.test(this[_added])) {
        this.formDirective.addControl(this);
        this[_added] = true;
      }
      if (dart.test(this[_disabledChanged$])) {
        async.scheduleMicrotask(dart.fn(() => {
          this[_disabledChanged$] = false;
          this.toggleDisabled(this[_isDisabled$]);
        }, VoidToNull()));
      }
    }
    ngOnDestroy() {
      this.formDirective.removeControl(this);
    }
    viewToModelUpdate(newValue) {
      this.viewModel = newValue;
      this[_update$0].add(newValue);
    }
    get path() {
      return shared.controlPath(this.name, this[_parent$0]);
    }
    get formDirective() {
      return this[_parent$0].formDirective;
    }
    get control() {
      return this.formDirective.getControl(this);
    }
  };
  (ng_control_name.NgControlName.new = function(_parent, validators, valueAccessors) {
    this[_update$0] = async.StreamController.broadcast();
    this[_modelChanged$0] = false;
    this[_model$0] = null;
    this[viewModel$0] = null;
    this[_added] = false;
    this[_isDisabled$] = false;
    this[_disabledChanged$] = false;
    this[_parent$0] = _parent;
    ng_control_name.NgControlName.__proto__.new.call(this, valueAccessors, validators);
    ;
  }).prototype = ng_control_name.NgControlName.prototype;
  dart.addTypeTests(ng_control_name.NgControlName);
  ng_control_name.NgControlName[dart.implements] = () => [lifecycle_hooks.AfterChanges, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(ng_control_name.NgControlName, () => ({
    __proto__: dart.getMethods(ng_control_name.NgControlName.__proto__),
    ngAfterChanges: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    viewToModelUpdate: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(ng_control_name.NgControlName, () => ({
    __proto__: dart.getGetters(ng_control_name.NgControlName.__proto__),
    model: dart.dynamic,
    update: async.Stream,
    formDirective: form_interface.Form,
    control: model.Control
  }));
  dart.setSetterSignature(ng_control_name.NgControlName, () => ({
    __proto__: dart.getSetters(ng_control_name.NgControlName.__proto__),
    model: dart.dynamic,
    name: core.String,
    disabled: core.bool
  }));
  dart.setLibraryUri(ng_control_name.NgControlName, "package:angular_forms/src/directives/ng_control_name.dart");
  dart.setFieldSignature(ng_control_name.NgControlName, () => ({
    __proto__: dart.getFields(ng_control_name.NgControlName.__proto__),
    [_parent$0]: dart.finalFieldType(control_container.ControlContainer$(model.AbstractControlGroup)),
    [_update$0]: dart.finalFieldType(async.StreamController),
    [_modelChanged$0]: dart.fieldType(core.bool),
    [_model$0]: dart.fieldType(dart.dynamic),
    viewModel: dart.fieldType(dart.dynamic),
    [_added]: dart.fieldType(core.bool),
    [_isDisabled$]: dart.fieldType(core.bool),
    [_disabledChanged$]: dart.fieldType(core.bool)
  }));
  memorized_form.MemorizedForm = class MemorizedForm extends ng_form.NgForm {
    addControl(dir) {
      let container = this.findContainer(dir.path);
      let ctrl = container.find(dir.name);
      if (ctrl == null) {
        ctrl = new model.Control.new();
        container.addControl(dir.name, ctrl);
      }
      async.scheduleMicrotask(dart.fn(() => {
        shared.setUpControl(model.Control._check(ctrl), dir);
        ctrl.updateValueAndValidity({emitEvent: false});
      }, VoidToNull()));
    }
    addControlGroup(dir) {
      let container = this.findContainer(dir.path);
      let group = container.find(dir.name);
      if (group == null) {
        group = new model.ControlGroup.new(new (IdentityMapOfString$AbstractControl()).new());
        container.addControl(dir.name, group);
      }
      async.scheduleMicrotask(dart.fn(() => {
        shared.setUpControlGroup(model.AbstractControlGroup._check(group), dir);
        group.updateValueAndValidity({emitEvent: false});
      }, VoidToNull()));
    }
    removeControl(ctrl) {
      let t0, t0$;
      t0$ = (t0 = ctrl, t0 == null ? null : t0.control);
      t0$ == null ? null : t0$.validator = null;
    }
    removeControlGroup(ctrl) {
      let t0, t0$;
      t0$ = (t0 = ctrl, t0 == null ? null : t0.control);
      t0$ == null ? null : t0$.validator = null;
    }
  };
  (memorized_form.MemorizedForm.new = function(validators) {
    memorized_form.MemorizedForm.__proto__.new.call(this, validators);
    ;
  }).prototype = memorized_form.MemorizedForm.prototype;
  dart.addTypeTests(memorized_form.MemorizedForm);
  dart.setLibraryUri(memorized_form.MemorizedForm, "package:angular_forms/src/directives/memorized_form.dart");
  let C26;
  form_builder.FormBuilder = class FormBuilder extends core.Object {
    static controlGroup(controlsConfig, opts) {
      let validator = opts && 'validator' in opts ? opts.validator : null;
      let controls = form_builder.FormBuilder._reduceControls(controlsConfig);
      return new model.ControlGroup.new(controls, validator);
    }
    static controlArray(controlsConfig, validator) {
      if (validator === void 0) validator = null;
      let controls = controlsConfig[$map](model.AbstractControl, C26 || CT.C26)[$toList]();
      return new model.ControlArray.new(controls, validator);
    }
    static _reduceControls(controlsConfig) {
      return controlsConfig[$map](core.String, model.AbstractControl, dart.fn((controlName, controlConfig) => new (MapEntryOfString$AbstractControl()).__(controlName, form_builder.FormBuilder._createControl(controlConfig)), StringAnddynamicToMapEntryOfString$AbstractControl()));
    }
    static _createControl(controlConfig) {
      if (model.AbstractControl.is(controlConfig)) {
        return controlConfig;
      } else if (core.List.is(controlConfig)) {
        let value = controlConfig[$_get](0);
        let validator = dart.notNull(controlConfig[$length]) > 1 ? AbstractControlToMapOfString$dynamic().as(controlConfig[$_get](1)) : null;
        return new model.Control.new(value, validator);
      } else {
        return new model.Control.new(controlConfig, null);
      }
    }
  };
  (form_builder.FormBuilder.__ = function() {
    ;
  }).prototype = form_builder.FormBuilder.prototype;
  dart.addTypeTests(form_builder.FormBuilder);
  dart.setLibraryUri(form_builder.FormBuilder, "package:angular_forms/src/form_builder.dart");
  dart.trackLibraries("packages/angular_forms/src/directives", {
    "package:angular_forms/src/directives/validators.dart": validators,
    "package:angular_forms/src/validators.dart": validators$,
    "package:angular_forms/src/model.dart": model,
    "package:angular_forms/src/directives/ng_control_group.dart": ng_control_group,
    "package:angular_forms/src/directives/shared.dart": shared,
    "package:angular_forms/src/directives/select_control_value_accessor.dart": select_control_value_accessor,
    "package:angular_forms/src/directives/control_value_accessor.dart": control_value_accessor,
    "package:angular_forms/src/directives/radio_control_value_accessor.dart": radio_control_value_accessor,
    "package:angular_forms/src/directives/ng_control.dart": ng_control,
    "package:angular_forms/src/directives/abstract_control_directive.dart": abstract_control_directive,
    "package:angular_forms/src/directives/number_value_accessor.dart": number_value_accessor,
    "package:angular_forms/src/directives/normalize_validator.dart": normalize_validator,
    "package:angular_forms/src/directives/default_value_accessor.dart": default_value_accessor,
    "package:angular_forms/src/directives/control_container.dart": control_container,
    "package:angular_forms/src/directives/form_interface.dart": form_interface,
    "package:angular_forms/src/directives/checkbox_value_accessor.dart": checkbox_value_accessor,
    "package:angular_forms/src/directives/ng_form.dart": ng_form,
    "package:angular_forms/src/directives/abstract_form.dart": abstract_form,
    "package:angular_forms/src/directives/ng_form_model.dart": ng_form_model,
    "package:angular_forms/src/directives/ng_control_status.dart": ng_control_status,
    "package:angular_forms/src/directives.dart": directives,
    "package:angular_forms/src/directives/ng_model.dart": ng_model,
    "package:angular_forms/src/directives/ng_form_control.dart": ng_form_control,
    "package:angular_forms/src/directives/ng_control_name.dart": ng_control_name,
    "package:angular_forms/src/directives/memorized_form.dart": memorized_form,
    "package:angular_forms/src/form_builder.dart": form_builder
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["directives/validators.dart","validators.dart","model.dart","directives/abstract_control_directive.dart","directives/control_container.dart","directives/ng_control_group.dart","directives/shared.dart","directives/control_value_accessor.dart","directives/select_control_value_accessor.dart","directives/radio_control_value_accessor.dart","directives/ng_control.dart","directives/number_value_accessor.dart","directives/normalize_validator.dart","directives/default_value_accessor.dart","directives/form_interface.dart","directives/checkbox_value_accessor.dart","directives/abstract_form.dart","directives/ng_form.dart","directives/ng_form_model.dart","directives/ng_control_status.dart","directives.dart","directives/ng_model.dart","directives/ng_form_control.dart","directives/ng_control_name.dart","directives/memorized_form.dart","form_builder.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA0CA;;;;;IA6BO;;;;;;aAGyC;AAC1C,wCAAsB,gCAAS,CAAC,IAAI;IAAI;;;IAJvC,iBAAW;;EAKlB;;;;;;;;;;;;;;;IAkBS;;;;;;;AAGc;IAAU;kBAGb;;AACE,MAAlB,mBAAa,KAAK;AACe,MAAjC,2BAAgB,KAAK,eAAL,OAAO;IACzB;aAG8C;;AACtC,2BAAI,CAAC,eAAD,OAAG,yBAAH,OAAU;AACpB,UAAI,AAAE,CAAD,IAAI,QAAQ,AAAE,CAAD,KAAI,IAAI,MAAO;AACjC,YAAO,AAAE,AAAO,EAAR,uBAAU,kBACZ,0CACE,aAAa,sCAAC,kBAAkB,gBAAW,gBAAgB,AAAE,CAAD,cAE9D;IACR;;;IApBO;IAEH;;EAmBN;;;;;;;;;;;;;;;;;;;;;;;;IAkBS;;;;;;;AAGc;IAAU;kBAGb;;AACE,MAAlB,mBAAa,KAAK;AACe,MAAjC,2BAAgB,KAAK,eAAL,OAAO;IACzB;aAG8C;;AACtC,2BAAI,CAAC,eAAD,OAAG,yBAAH,OAAU;AACpB,UAAI,AAAE,CAAD,IAAI,QAAQ,AAAE,CAAD,KAAI,IAAI,MAAO;AACjC,YAAO,AAAE,AAAO,EAAR,uBAAU,kBACZ,0CACE,aAAa,sCAAC,kBAAkB,gBAAW,gBAAgB,AAAE,CAAD,cAE9D;IACR;;;IApBO;IAEH;;EAmBN;;;;;;;;;;;;;;;;;;;;;;;IAsBS;;;;;;aAGuC;AAC1C,YAAW,AAAgB,gCAAR,cAAS,CAAC;IAAC;;;IAJ3B;;EAKT;;;;;;;;;;;;;oBC9JiE;AAC7D,YAAO,AAAQ,AAAM,AAAQ,QAAf,UAAU,QAAsB,YAAd,AAAQ,OAAD,QAAU,MAC3C,uCAAC,YAAY,SACb;IACR;qBAGiC;AAC/B,YAAsC,SAClC;AACF,YAAe,gCAAS,OAAO,KAAK,MAAM,MAAO;AAC1C,mCAAI,AAAQ,OAAD;AAClB,cAAO,AAAE,AAAO,EAAR,uBAAU,SAAS,IACrB,0CACE,aAAa,sCACX,kBAAkB,SAAS,EAC3B,gBAAgB,AAAE,CAAD,cAGrB;;IAEV;qBAGiC;AAC/B,YAAsC,SAClC;AACF,YAAe,gCAAS,OAAO,KAAK,MAAM,MAAO;AAC1C,mCAAI,AAAQ,OAAD;AAClB,cAAO,AAAE,AAAO,EAAR,uBAAU,SAAS,IACrB,0CACE,aAAa,sCACX,kBAAkB,SAAS,EAC3B,gBAAgB,AAAE,CAAD,cAGrB;;IAEV;mBAGkC;AAChC,YAAsC,SAClC;AACF,YAAe,gCAAS,OAAO,KAAK,MAAM,MAAO;AAC7C,oBAAQ,gBAAO,AAAa,eAAV,OAAO;AACtB,mCAAI,AAAQ,OAAD;AAClB,yBAAO,AAAM,KAAD,UAAU,CAAC,KACjB,OACA,0CACE,WAAW,yCAAC,mBAAmB,AAAa,eAAV,OAAO,SAAK,eAAe,CAAC;;IAG1E;yBAGoE;AAChE;IAAI;mBAIqC;AAC3C,UAAI,AAAW,UAAD,IAAI,MAAM,MAAO;AACzB,8BAAoB,qFAAsB,UAAU;AAC1D,oBAAI,AAAkB,iBAAD,aAAU,MAAO;AACtC,YAAO,SAA8B,WAC5B,+BAAmB,OAAO,EAAE,iBAAiB;IAExD;oCAIgD;AACxC,mBAAS;AACf,eAAS,IAAI,GAAG,MAAM,AAAW,UAAD,WAAS,AAAE,CAAD,gBAAG,GAAG,GAAE,IAAA,AAAC,CAAA;AAC7C,wBAAY,AAAU,UAAA,QAAC,CAAC;AAC5B,YAAI,SAAS,IAAI,MAAM,AAAO,AAAc,MAAf,OAAK,SAAS;;AAE7C,YAAO,OAAM;IACf;;;;EACF;;;+DAGiC,SAA2B;AACtD,iBAAS;AACb,aAAS,IAAI,GAAG,MAAM,AAAW,UAAD,WAAS,AAAE,CAAD,gBAAG,GAAG,GAAE,IAAA,AAAC,CAAA;AAC3C,sBAAY,AAAU,UAAA,QAAC,CAAC;AAC9B,YAAO,AAAU,SAAD,IAAI,yBAAM;AACpB,wBAAc,AAAS,SAAA,CAAC,OAAO;AACrC,UAAI,WAAW,IAAI,MAAM,AAAO,AAAmB,MAApB,UAAQ,WAAW;;AAEpD,qBAAO,AAAO,MAAD,cAAW,OAAO,MAAM;EACvC;;;;MA3GM,yBAAa;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MC6BL;;;;;;;AAeG;MAAM;;AAGA;MAAO;;AAEV,cAAA,AAAQ;MAAQ;;AAEd,cAAA,AAAQ;MAAU;;AAEjB,cAAA,AAAQ;MAAW;;AAEpB,0BAAC;MAAQ;;AAGM;MAAO;;AAErB;MAAS;;AAEZ,0BAAC;MAAQ;;AAEP;MAAQ;;AAEN,0BAAC;MAAQ;;AAED,cAAA,AAAc;MAAM;;AAEd,cAAA,AAAe;MAAM;;AAErB,cAAA,AAAiB;MAAM;;AAEvC,cAAA,AAAQ;MAAU;;;YAMb;AACY,QAAnC,gBAA4B,KAAb,YAAY,QAAZ,OAAgB;AAEhB,QAAf,iBAAW;AAEX,YAAI,iBAAW,kBAAQ,YAAY;AACgB,UAAjD,AAAQ,2CAA4B,YAAY;;MAEpD;;;YAO2B;AACU,QAAnC,gBAA4B,KAAb,YAAY,QAAZ,OAAgB;AACf,QAAhB,iBAAW;AAKuC,QAHlD,oBAGI,QAAC,KAAM,AAAE,CAAD,gCAA+B;AAE3C,YAAI,iBAAW,kBAAQ,YAAY;AACiB,UAAlD,AAAQ,6CAA6B,YAAY;;MAErD;;;YAKuB;YAAe;AACT,QAA3B,WAAoB,YAAT,QAAQ,EAAI;AACM,QAA7B,aAAsB,KAAV,SAAS,QAAT,OAAa;AACR,QAAjB,kBAAY;AACZ,sBAAI,SAAS,GAAE,AAAe,AAAY,yBAAR;AAClC,YAAI,iBAAW,mBAAS,QAAQ;AACS,UAAvC,AAAQ,qCAAsB,QAAQ;;MAE1C;;;YAO0B;AACW,QAAnC,gBAA4B,KAAb,YAAY,QAAZ,OAAgB;AACf,QAAhB,kBAAY;AAKqC,QAHjD,oBAGI,QAAC,KAAM,AAAE,CAAD,+BAA8B;AAE1C,YAAI,iBAAW,kBAAQ,YAAY;AACkB,UAAnD,AAAQ,8CAA8B,YAAY;;MAEtD;;YAEyB;AACI,QAA3B,WAAoB,YAAT,QAAQ,EAAI;AACN,QAAjB;AACA,YAAI,iBAAW,mBAAS,QAAQ;AACW,UAAzC,AAAQ,uCAAwB,QAAQ;;MAE5C;;;YAQ0B;YAAmB;AACR,QAAnC,gBAA4B,KAAb,YAAY,QAAZ,OAAgB;AACF,QAA7B,aAAsB,MAAV,SAAS,SAAT,OAAa;AAEP,QAAlB;AAKuE,QAHvE,oBAGI,QAAC,KAAM,AAAE,CAAD,+BAA8B,kBAAkB,SAAS;AAC3D,QAAV;AAEA,sBAAI,SAAS,GAAE,AAAY;AAEuC,QAAlE,sCAA+B,YAAY,aAAa,SAAS;AACvC,QAA1B,AAAiB,2BAAI;MACvB;;;YAOyB;YAAmB;AACP,QAAnC,gBAA4B,KAAb,YAAY,QAAZ,OAAgB;AACF,QAA7B,aAAsB,MAAV,SAAS,SAAT,OAAa;AACV,QAAf;AAIsE,QAHtE,oBAGI,QAAC,KAAM,AAAE,CAAD,8BAA6B,kBAAkB,SAAS;AACR,QAA5D,uCAAiC,iBAAiB,SAAS;AACO,QAAlE,sCAA+B,YAAY,aAAa,SAAS;AACtC,QAA3B,AAAiB,2BAAI;MACvB;;YAac;;YAAY;YAAiB;YAAmB;AACvC,QAArB,AAAa,YAAD,IAAC,OAAb,eAAiB,OAAJ;AACK,QAAlB,AAAU,SAAD,IAAC,OAAV,YAAc,OAAJ;AAEuD,QAAjE,iBAAY,KAAK,aAAY,WAAC,YAAY,cAAa,SAAS;AAChE,YAAI,UAAU,IAAI;AAGqD,oBAFrE,UAAU,IACJ,mCAA6B,YAAY,aAAa,SAAS,KAC/D,kCAA4B,YAAY,aAAa,SAAS;;AAE5B,QAA1C,mCAA6B,YAAY;AACE,QAA3C,oCAA8B,YAAY;MAC5C;;YAE4B;YAAmB;AAC7C,YAAI,iBAAW,kBAAQ,YAAY;AAEiB,UADlD,AAAQ,gDACM,WAAC,YAAY,cAAa,SAAS;;MAGrD;gBAE+B;AACb,QAAhB,gBAAU,MAAM;MAClB;;;YAGkC;YAAe;AACpB,QAA3B,WAAoB,YAAT,QAAQ,EAAI;AACM,QAA7B,aAAsB,KAAV,SAAS,QAAT,OAAa;AACf,QAAV;AACyB,QAAzB,gBAAU;AACkB,QAA5B,gBAAU;AACV,sBAAI,SAAS,GAAE,AAAY;AAC3B,YAAI,iBAAW,mBAAS,QAAQ;AAC0C,UAAxE,AAAQ,gDAAiC,QAAQ,aAAa,SAAS;;MAE3E;;AAG0B,QAAxB,AAAc,wBAAI;AACS,QAA3B,AAAe,yBAAI;MACrB;;AAGI,cAAA,AAAU,mBAAG,OAAO,eAAU,QAAQ;MAAI;gBAwBV;;YAAc;AACnB,QAA7B,aAAsB,KAAV,SAAS,QAAT,OAAa;AACT,QAAhB,gBAAU,MAAM;AACY,QAA5B,gBAAU;AACV,sBAAI,SAAS;AACgB,UAA3B,AAAe,yBAAI;;AAEW,cAAhC;6BAAS;AAGoB,QAA7B,6BAAuB;MACzB;WAO4B;;AAAS,mCAAS,IAAI,eAAJ,OAAM,WAAM;MAAK;eAQzB;AAAS,2BAAM,MAAM,IAAI;MAAC;eAEhD,WAAyB;;AACvB,sBAAU;AAC1B,YAAI,IAAI,IAAI,kBAAQ,AAAK,IAAD;AACE,UAAxB,UAAU,cAAS,IAAI;;AAEzB,YAAI,AAAQ,OAAD,IAAI,QAAQ,AAAQ,AAAQ,OAAT,aAAY;AACxC,gBAAO;;AAET,cAAO,AAAQ,AAAO,QAAR,iBAAS,SAAS;MAClC;eAEqB,WAAyB;;AAC1C,cAAA,AAA0B,eAAjB,SAAS,EAAE,IAAI,KAAK;MAAI;;AAGnB,gBAAI;AACpB,eAAO,AAAE,CAAD,aAAY;AACL,UAAb,IAAI,AAAE,CAAD;;AAEP,cAAO,EAAC;MACV;;;AAG8B,QAA5B,gBAAU;AACsB,aAAhC;4BAAS;MACX;;AAGE,sBAAI,2CAAkC;AACtC,YAAI,iBAAW,MAAM;AACrB,sBAAI,0CAAiC;AACrC,sBAAI,0CAAiC;AACrC;MACF;;YAE0B;AACQ,QAAhC,iBAAW;AAEX,YAAI,iBAAW,kBAAQ,YAAY;AACiB,UAAlD,AAAQ,6CAA6B,YAAY;;MAErD;;YAE2B;AACO,QAAhC,kBAAY,WAAC;AAEb,YAAI,iBAAW,kBAAQ,YAAY;AACkB,UAAnD,AAAQ,8CAA8B,YAAY;;MAEtD;+BAyBmC;AAC/B,kCAAa,QAAC,KAAM,AAAE,AAAO,CAAR,WAAW,MAAM;MAAC;;AAEb,kCAAa,QAAC,KAAM,AAAE,CAAD;MAAS;;AAChC,kCAAa,QAAC,KAAM,AAAE,CAAD;MAAO;;oCAjVnC;UAAY;MAT3B,sBAAc;MACd,uBAAe;MACf,yBAAiB;MAChB;MACc;MAChB,kBAAY;MACZ,iBAAW;MACA;MAEK;qBAA6B,SAAE,KAAK;AACC,MAAxD,uCAAiC,iBAAiB;IACpD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA3Ba,2BAAK;;;MAIL,6BAAO;;;MAIP,6BAAO;;;MAIP,8BAAQ;;;;;;;;;;kBAqYF;;;YACT;YACD;YACA;YACE;AAC4C,QAArD,yBAA8C,KAAtB,qBAAqB,QAArB,OAAyB;AACnC,QAAd,eAAS,KAAK;AACM,QAApB,kBAAY,QAAQ;AACpB,YAAI,mBAAa,kBAAQ,qBAAqB,GAAmB,WAAjB,kBAAU;AACM,QAAhE,uCAAiC,QAAQ,aAAa,SAAS;MACjE;;AAOuB;MAAS;;MAGf;qBAGC;AAAM;MAAK;+BAGM;AAAW,cAAK,AAAO,gBAAG,MAAM;;sBAG3C;MAA8B;uBAQvB;AACf,QAAd,kBAAY,EAAE;MAChB;;4BArDiB,OAAmB;;;MAH3B;MACF;AAGD,uCAAM,SAAS,UAAS,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA8HD;;;;;;iBAQZ,MAAsB;AACnB,QAAxB,AAAQ,qBAAC,IAAI,EAAI,OAAO;AACD,QAAvB,AAAQ,OAAD,WAAW;MACpB;oBAG0B;AACH,QAArB,AAAS,uBAAO,IAAI;MACtB;eAGqB;AACjB,cAAkC,WAAlC,AAAS,4BAAY,WAAW,gBAAK,AAAQ,AAAc,qBAAb,WAAW;MAAS;qBAG/C;AACrB,iBAAS,OAAQ,AAAS;AACxB,wBAAI,cAAS,IAAI,gBAAK,AAAS,SAAA,CAAC,AAAQ,qBAAC,IAAI,KAAI,MAAO;;AAE1D,cAAO;MACT;+BAGmC;AACjC,sBAAI,AAAS,0BAAS,MAAY,AAAO,gBAAG,MAAM;AAElD,iBAAS,OAAQ,AAAS;AACxB,cAAI,AAAQ,AAAO,qBAAN,IAAI,YAAY,MAAM,EAAE,MAAO;;AAE9C,cAAO;MACT;sBAGwB;AACtB,iBAAS,UAAW,AAAS;AACV,UAAjB,AAAQ,QAAA,CAAC,OAAO;;MAEpB;eAGqB;;AAAgB,oBAAA,AAAQ,qBAAC,WAAW,gBAAZ,OAAe;sBAAf,OAA0B;MAAK;;yCA9ClD,UAAuB;;MAAvB;AACpB,oDAAM,SAAS;AACyB,MAA5C,4BAAsB,MAAM,AAAS;IACvC;;;;;;;;;;;;;;;;;;;;;;;gBA7DsC;;;UAC5B;UACD;UACA;UACE;AAET,qBAAmB,YAAf,KAAK,eAAL,OAAO,sBAAP,OAAkB,eAAO,AAAY,QAAJ;AACR,MAA7B,6BAAuB,KAAK;AAC5B,eAAS,OAAQ,AAAS;AAIyB,QAHjD,AAAQ,AAAO,qBAAN,IAAI,cAAc,AAAM,KAAD,IAAI,OAAO,OAAO,AAAK,KAAA,QAAC,IAAI,cAC9C,iBACC,SAAS,yBACG,qBAAqB;;AAEc,MAAhE,uCAAiC,QAAQ,aAAa,SAAS;IACjE;;AAIyB,MAAvB,eAAS;IACX;;AAGQ,gBAAuB;AAC7B,eAAS,OAAQ,AAAS;AACxB,sBAAI,cAAS,IAAI,gBAAK;AACY,UAAhC,AAAG,GAAA,QAAC,IAAI,EAAI,AAAQ,AAAO,qBAAN,IAAI;;;AAG7B,YAAO,IAAG;IACZ;6BAEiD;AAC/C,UAAI,AAAM,KAAD,IAAI,MAAM;AAEnB,qBAAO,AAcN;AAbC,iBAAS,OAAQ,AAAS;AACxB,yBAAK,AAAM,KAAD,eAAa,IAAI;AAE2C,YADpE,WAAoB,6BAChB,KAAK,EAAE,AAAwD,8DAAN,IAAI;;;AAGrE,iBAAS,OAAQ,AAAM,MAAD;AACpB,yBAAK,AAAS,4BAAY,IAAI;AAEyB,YADrD,WAAoB,6BAChB,KAAK,EAAE,AAAyC,+CAAN,IAAI;;;AAGtD,cAAO;;IAEX;;qCAtD0C,UAAuB;;AAC3D,gDAAM,QAAQ,EAAE,SAAS;;EAAC;;;;;;;;;;;;IAmIV;;;;;;OAOC;AAAU,YAAA,AAAQ,iCAAC,KAAK;IAAC;SAGtB;AACH,MAArB,AAAS,oBAAI,OAAO;AACG,MAAvB,AAAQ,OAAD,WAAW;AACM,MAAxB;IACF;WAGgB,OAAuB;AACN,MAA/B,AAAS,kCAAO,KAAK,GAAE,OAAO;AACP,MAAvB,AAAQ,OAAD,WAAW;AACM,MAAxB;IACF;aAGkB;AACQ,MAAxB,AAAS,oCAAS,KAAK;AACC,MAAxB;IACF;;AAGkB,YAAA,AAAS;IAAM;gBAGX;;;UACZ;UACD;UACA;UACE;AAET,qBAAmB,YAAf,KAAK,eAAL,OAAO,sBAAP,OAAkB,eAAO,AAAY,QAAJ;AACR,MAA7B,6BAAuB,KAAK;AAC5B,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAS,yBAAQ,IAAA,AAAC,CAAA;AAIa,QAHjD,AAAQ,AAAI,qBAAH,CAAC,cAAc,AAAM,KAAD,IAAI,OAAO,OAAO,AAAK,KAAA,QAAC,CAAC,cACxC,iBACC,SAAS,yBACG,qBAAqB;;AAEc,MAAhE,uCAAiC,QAAQ,aAAa,SAAS;IACjE;;AAIa,MAAX,eAAS;AACT,eAAS,UAAW;AAClB,sBAAI,AAAQ,OAAD,uBAAY;AACI,UAAzB,AAAO,mBAAI,AAAQ,OAAD;;;IAGxB;mBAGuB;AACrB,eAAS,UAAW;AAClB,sBAAI,AAAS,SAAA,CAAC,OAAO,IAAG,MAAO;;AAEjC,YAAO;IACT;6BAGmC;AACjC,oBAAI,AAAS,0BAAS,MAAY,AAAO,gBAAG,MAAM;AAElD,eAAS,UAAW;AAClB,YAAI,AAAQ,OAAD,WAAW,MAAM,EAAE,MAAO;;AAEvC,YAAO;IACT;oBAGwB;AACtB,eAAS,UAAW;AACD,QAAjB,AAAQ,QAAA,CAAC,OAAO;;IAEpB;6BAEiC;AAC/B,UAAI,AAAM,KAAD,IAAI,MAAM;AAEnB,qBAAO,AAQN;AAPC,YAAI,AAAM,KAAD,aAAW,AAAS;AAIM,UAHjC,WAAoB,6BAChB,KAAK,EACL,+BAAoB,AAAS,0BAAO,oCACpC,iBAAM,AAAM,KAAD,aAAQ;;AAEzB,cAAO;;IAEX;;qCA/FkB,UAAuB;;IAAvB;AAAqC,gDAAM,SAAS;AAC/B,IAArC,4BAAsB,MAAM;EAC9B;;;;;;;;;;;;;;;;;;;;;;;;+BA/lBoC,SAAsB;AAC1D,QAAI,AAAK,IAAD,IAAI,kBAAQ,AAAK,IAAD,aAAU,MAAO;AACzC,UAAO,AAAK,KAAD,+BAAM,OAAO,EAAE,SAAC,GAAG;AAC5B,UAAM,8BAAF,CAAC;AACH,cAAO,AAAE,AAAQ,EAAT,iBAAU,IAAI;YACjB,KAAM,sBAAF,CAAC;AACN,oBAAY,eAAM,IAAI;AAC1B,cAAO,AAAE,EAAD,IAAI,KAAK;;AAEjB,cAAO;;;EAGb;+DAorBoB,QAAkC;AACpD,aAAW,UAAW,SAAQ;AACH,MAAzB,AAAQ,OAAD,WAAW,MAAM;;EAE5B;;;;;;;;MCpsBS;;;;;;;;AAIc;mCAAS;MAAK;;;AAEjB;mCAAS;MAAK;;;AAEX;mCAAS;MAAQ;;;AAElB;mCAAS;MAAO;;;AAED;mCAAS;MAAM;;;AAE7B;mCAAS;MAAQ;;;AAEpB;mCAAS;MAAK;;;AAEZ;mCAAS;MAAO;;;AAEd;mCAAS;MAAS;;AAEf;MAAI;qBAEJ;AACvB,sBAAI,UAAU,gBAAK,AAAQ,wBAAU,AAAQ,AAAgB;AAC7D,uBAAK,UAAU,gBAAK,AAAQ,uBAAS,AAAQ,AAAe;MAC9D;;;YAUY;AACkB,aAA5B;4BAAS,iBAAa,KAAK;MAC7B;;;MAvCO;;IAwCT;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IClCA;;;;;;;;;;ICoDoB;;;;;;aAYF;AACI,MAAZ,aAAO,KAAK;IACpB;;;;iBAGkB;AACQ,MAAxB,oBAAc,UAAU;AACxB,UAAI,gBAAW;AACW,QAAxB,yBAAmB;AACO,QAA1B,oBAAe,UAAU;;AAEF,QAAvB,yBAAmB;;IAEvB;;;;;AAIqC,MAAnC,AAAc,mCAAgB;AAC9B,oBAAI;AAIA,QAHF,wBAAkB;AACQ,UAAxB,yBAAmB;AACQ,UAA3B,oBAAe;;;IAGrB;;AAIwC,MAAtC,AAAc,sCAAmB;IACnC;;AAIoC,YAAA,AAAc,oCAAgB;IAAK;;AAI9C,gCAAY,WAAM;IAAQ;;AAIzB,YAAA,AAAQ;IAAa;;kDA/Cf,SACoB;IAJ/C,oBAAc;IACd,yBAAmB;IAEQ;IAEhB,kBAAE,yBAAkB,UAAU;AAF9C;;EAE+C;;;;;;;;;;;;;;;;;;;;;;;;;;;4CCtDjB,MAAuB;;AACnD,SAAA,AAAO,AAAK,MAAN;IAAgB,SAAI,IAAI;;EAAC;8CAET,SAAmB;;AAC3C,QAAI,AAAQ,OAAD,IAAI,MAAM,AAAuC,mBAA3B,GAAG,EAAE;AACtC,UACI,AAAI,AAAc,GAAf,kBAAkB,yBACrB,2BACA,eAAI,AAAI,AAAK,GAAN,aAAW,WAAQ,+CAC1B;AACsE,IAA1E,AAAQ,OAAD,aAAwB,+BAAQ,oDAAC,AAAQ,OAAD,YAAY,AAAI,GAAD;AACnB,IAA3C,AAAI,AAAc,GAAf,0BAA0B,AAAQ,OAAD;AAOlC,IALF,AAAI,AAAc,GAAf,gCAAgC,SAAS;UAAkB;AAC7B,MAA/B,AAAI,GAAD,mBAAmB,QAAQ;AAEuB,MADrD,AAAQ,OAAD,aAAa,QAAQ,0BACD,iBAAiB,QAAQ;AACf,MAArC,AAAQ,OAAD,yBAAwB;;AAIiC,IADlE,AAAQ,OAAD,kBACH,QAAS;;AAAa,WAAA,AAAI,GAAD;0BAAC,OAAe,cAAW,QAAQ;;AACI,IAApE,AAAQ,AAAgB,OAAjB,8BAAwB,AAAI,GAAD,6BAAC,OAAe;AAEgB,IAAlE,AAAI,AAAc,GAAf,iCAAiC,cAAM,AAAQ,OAAD;EACnD;wDAE4C,SAAwB;AAClE,QAAI,AAAQ,OAAD,IAAI,MAAM,AAAuC,mBAA3B,GAAG,EAAE;AACoC,IAA1E,AAAQ,OAAD,aAAwB,+BAAQ,oDAAC,AAAQ,OAAD,YAAY,AAAI,GAAD;EAChE;4CAE0C,KAAY;;AACpD,cAAI,GAAG,eAAH,OAAK,YAAQ;AACgC,MAA/C,UAA+C,SAAnC,OAAO,oBAAI,AAAI,AAAK,GAAN,aAAW,WAAQ;;AAEnB,IAA5B,WAAM,2BAAc,OAAO;EAC7B;wDAE4C;AAC1C,UAAO,AAAW,WAAD,IAAI,OACJ,+BACT,AAAW,AAAqC,UAAtC,0EACZ;EACR;4DAG+B;AAC7B,QAAI,AAAe,cAAD,IAAI,MAAM,MAAO;AACd;AACA;AACA;AACrB,aAAS,IAAK,eAAc;AAC1B,UAAM,+CAAF,CAAC;AACgB,QAAnB,kBAAkB,CAAC;YACd,KAAM,wDAAF,CAAC,KACN,6CAAF,CAAC,KACC,4DAAF,CAAC,KACC,0DAAF,CAAC;AACH,YAAI,eAAe,IAAI,MACrB,AAAkE,mBAAtD,MAAM;AACD,QAAnB,kBAAkB,CAAC;;AAEnB,YAAI,cAAc,IAAI,MACpB,AAAgE,mBAApD,MAAM;AACF,QAAlB,iBAAiB,CAAC;;;AAGtB,QAAI,cAAc,IAAI,MAAM,MAAO,eAAc;AACjD,QAAI,eAAe,IAAI,MAAM,MAAO,gBAAe;AACnD,QAAI,eAAe,IAAI,MAAM,MAAO,gBAAe;AACH,IAAhD,mBAAY,MAAM;AAClB,UAAO;EACT;0DAEoC,SAAc;AACI,IAApD,oBAAoB,OAAO,EAAE,YAAY,UAAU;EACrD;;;;;;;;;ICnDgB;;;;;;;AAID,MAAX;IACF;sBAGqC;AACrB,MAAd,iBAAY,EAAE;IAChB;;;IAVc,kBAAY;;;EAW5B;;;;;;;;;;;;;;;;;MAOoB;;;;;;uBAGsB;AACzB,QAAb,gBAAW,EAAE;MACf;;;MALkB,iBAAW,SAAG;YAAW;;;IAM7C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICzBU;;;;;;iBAQiB;AAC0B,MAAjD,cAAS,sBAAgB,KAAK,cAAa,KAAK;IAClD;eAGwB;AACJ,MAAb,aAAQ,KAAK;AACd,wBAAc,gDAAkB,mBAAa,KAAK,GAAG,KAAK;AAClC,MAA5B,AAAS,uBAAQ,WAAW;IAC9B;sBAG4B;AACI,MAA9B,AAAS,0BAAW,UAAU;IAChC;;;AAE4B,YAAe,gBAAJ,uBAAV,sCAAU;IAAc;mBAEzB;AAC1B,eAAS,KAAM,AAAW;AACxB,YAAI,eAAU,AAAU,wBAAC,EAAE,GAAG,KAAK,GAAG,MAAO,GAAE;;AAEjD,YAAO;IACT;sBAE+B;;AACzB,kBAAQ,AAAU,wBAAC,yCAAW,WAAW;AAC7C,WAAO,KAAK;mBAAL,OAAS,WAAW;IAC7B;;2EAhCuC;IAJ/B;IACmB,mBAAa;IACpC,mBAAa;IAGF,iBAAU,sBAAR,OAAO;AADxB;;EACyC;;;;;;;;;;;;;;;;;;;;;;;;IA+ClC;;;;;;gBAOa;AAClB,UAAI,AAAQ,kBAAG,MAAM;AACS,MAA9B,AAAQ,AAAU,kCAAC,SAAM,KAAK;AACgB,MAA9C,uBAAiB,gDAAkB,SAAI,KAAK;AACX,MAAjC,AAAQ,0BAAW,AAAQ;IAC7B;cAGkB;AACO,MAAvB,0CAAiB,KAAK;AACtB,UAAI,kBAAW,MAAM,AAAQ,AAAyB,0BAAd,AAAQ;IAClD;uBAE6B;AACL,MAAtB,AAAS,uBAAQ,KAAK;IACxB;;AAIE,UAAI,kBAAW;AAEuC,QADhB,UAAnC,AAAQ,AAAW,yCAAY,cAC3B,AAAQ,AAAW,oCAAO,YAAO,QAAQ;AACb,QAAjC,AAAQ,0BAAW,AAAQ;;IAE/B;;+DA9B2B,SAAkC;IADtD;IACsD;IAC9C,iBAAU,sBAAR,OAAO;AACtB,QAAI,kBAAW,MAAM,AAA8B,UAAzB,AAAQ;EACpC;;;;;;;;;;;;;;;;;;;;+EAtF8B,IAAY;AAC1C,QAAI,AAAG,EAAD,IAAI,MAAM,MAAe,UAAN,KAAK;AAC9B,mBAAK,iBAAY,KAAK,IAAG,AAAgB,QAAR;AAC7B,YAAiB,SAAX,EAAE,oBAAG,KAAK;AAEpB,QAAI,AAAE,AAAO,CAAR,UAAU;AACS,MAAtB,IAAI,AAAE,CAAD,aAAW,GAAG;;AAErB,UAAO,EAAC;EACV;iEAEyB;AAAgB,UAAA,AAAY,AAAU,YAAX,SAAO,YAAK;EAAE;;;;;;;;;;;;MAhB5D,mDAAqB;;;;;;;;;IDgB3B;;;;;;;;;MAKM,sCAAe;;;;;;;QERA,SAAmC;AACjB,MAAnC,AAAW,uBAAI,sBAAC,OAAO,EAAE,QAAQ;IACnC;WAEsC;AAChC,0BAAgB,CAAC;AACrB,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAW,4BAAU,IAAF,AAAE,CAAC,GAAH;AACrC,YAAI,eAAuB,WAAb,AAAU,wBAAC,CAAC,YAAE,KAAI,QAAQ;AACrB,UAAjB,gBAAgB,CAAC;;;AAGa,MAAlC,AAAW,4BAAS,aAAa;IACnC;WAEsC;AACpC,eAAS,IAAK;AACZ,YAAI,eAAuB,WAAR,WAAJ,WAAD,CAAC,WAAC,0BAAiB,AAAS,AAAS,AAAQ,QAAlB,4CACzB,WAAD,CAAC,WAAC,KAAI,QAAQ;AACT,UAAb,WAAJ,WAAD,CAAC,WAAC;;;IAGR;;;IAtBoB,mBAAa;;EAuBnC;;;;;;;;;;;;;;;;IAIa;;;;;;IACE;;;;;;;gEAES,SAAc;IAAd;IAAc;;EAAM;;;;;;;;;;;;;;;;;;;;;;;;;IAoCnC;;;;;;;AAMiE,MAAtE,cAAS,sDAAiB,MAAM,AAAO,gCAAkB,AAAO;AAC1C,MAAtB,AAAU,wBAAO;IACnB;;AAIqC,uBAAnC,4BAAW,AAAU,qBAAI;AACI,MAA7B,AAAU,qBAAI,gBAAU;IAC1B;;AAIwB,MAAtB,AAAU,wBAAO;IACnB;eAGiC;;;AACjB,MAAd,eAAS,KAAK;AACd,qBAAmB,YAAf,KAAK,eAAL,OAAO,oBAAP,OAAkB;AAC0B,QAA9C,oBAAoB,iBAAU,WAAW;;IAE7C;;AAGyE,MAAvE,cAAS,sDAAiB,OAAO,AAAO,gCAAkB,AAAO;IACnE;sBAG4B;AACc,MAAxC,0BAAmB,iBAAU,UAAU;IACzC;;yEAlC+B,UAAe,WAAgB;IAN7C;IACP;IAGH;IAEwB;IAAe;IAAgB;AAA9D;;EAAwE;;;;;;;;;;;;;;;;;;;;;;;;;MA7EpE,iDAAoB;;;;;;;ICAH;;;;;;IAEH;;;;;;;uCAImB,gBAAqB;IACtC,sBAAE,2BAAoB,cAAc;IACxC,oBAAE,yBAAkB,UAAU;AAF9C;;EAE+C;;;;;;;;;;;;;;;;;;;;;iBCctB;AAC8C,MAArE,cAAU,AAAM,KAAD,KAAI,KAAK,OAAc,kBAAM,KAAK,cAAc,KAAK;IACtE;eAGgB;AACW,MAAzB,AAAS,yBAAgB,SAAN,KAAK;IAC1B;sBAG4B;AACI,MAA9B,AAAS,4BAAW,UAAU;IAChC;;4DAhBgC;IAAoB,mBAAU,qBAAR,OAAO;AAA7D;;EAA6E;;;;;;;;;;;;;;;;;MAtBzE,2CAAqB;;;;uECLY;AACrC,QAAc,wBAAV,SAAS;AACX,YAAO,SAAC,KAAM,AAAU,SAAD,UAAU,CAAC;UAC7B,KAAc,iBAAV,SAAS;AAClB,YAAiB,2CAAV,SAAS;;AAEhB,YAAsB,2CAAL,WAAV,SAAS;;EAEpB;;;;;;;;;;;;;;iBC0B2B;AACS,MAAhC,cAAS,KAAK,aAAY,KAAK;IACjC;eAGgB;;AACV,6BAAwB,KAAN,KAAK,QAAL,OAAS;AACwB,MAAvD,oBAAoB,kBAAU,SAAS,eAAe;IACxD;sBAG4B;AACc,MAAxC,0BAAmB,kBAAU,UAAU;IACzC;;;IAhB0B;AAA1B;;EAAmC;;;;;;;;;;;;;;;;;MAxB/B,6CAAsB;;;;;;;ECoB5B;;;;;;;;;;;;;;;;iBCKyB;AACkB,MAAvC,cAAS,OAAO,aAAsB,SAAR,OAAO;IACvC;eAGqB;;AACK,MAAxB,AAAS,2BAAU,KAAK;IAC1B;sBAG4B;AACI,MAA9B,AAAS,4BAAW,UAAU;IAChC;;uEAhByC;IAC1B,mBAAU,qBAAR,OAAO;AADxB;;EACwC;;;;;;;;;;;;;;;;;MAxBpC,+CAAuB;;;;;;;;;;;ACcD,cAAA,AAAU;MAAM;;AAOV,cAAA,AAAgB;MAAM;eAGlC;;AACO,QAAzB,AAAgB,0BAAI;AACD,QAAnB,AAAU,oBAAI;AACS,aAAvB,KAAK;qBAAL,OAAO;MACT;cAGmB;;AACV,QAAP;AACuB,aAAvB,KAAK;qBAAL,OAAO;MACT;;AAG0B;MAAI;;AAGb;MAAI;;AAGI;MAAE;iBAGE;;AAAQ,cAAyB,gDAAzB,OAAM,YAAS,AAAI,GAAD;MAAiB;sBAGpB;;AAChD,cAAyB,6DAAzB,OAAM,YAAS,AAAI,GAAD;MAA8B;kBAGzB,KAAa;;AAClC,mBAAO,gBAAW,GAAG;AACD,aAAxB,IAAI;qBAAJ,OAAM,eAAY,KAAK;MACzB;;;MAjDM,kBAAU,uCAAsC;MAChD,wBAAgB,uCAAsC;;;IAiD9D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MC8BI;;;;;;mBAGgB;AACU,QAA1B,oBAAe,UAAU;MAC3B;;;;;AAE6C,cAAA,AAAK;MAAQ;oBAI1B;AAAM;MAAS;iBAGrB;AACpB,wBAAY,mBAAc,AAAI,GAAD;AAC7B,mBAAO,mBAAc,GAAG;AACQ,QAApC,AAAU,SAAD,YAAY,AAAI,GAAD,OAAO,IAAI;AAIjC,QAHF,wBAAkB;AACO,UAAvB,oBAAa,IAAI,EAAE,GAAG;AACuB,UAA7C,AAAK,IAAD,oCAAmC;;MAE3C;oBAG6B;AAOzB,QANF,wBAAkB;AACZ,0BAAY,mBAAc,AAAI,GAAD;AACjC,cAAI,SAAS,IAAI;AACkB,YAAjC,AAAU,SAAD,eAAe,AAAI,GAAD;AACuB,YAAlD,AAAU,SAAD,oCAAmC;;;MAGlD;sBAGoC;AAC9B,wBAAY,mBAAc,AAAI,GAAD;AAC7B,oBAAQ,iBAAY,GAAG;AACU,QAArC,AAAU,SAAD,YAAY,AAAI,GAAD,OAAO,KAAK;AAIlC,QAHF,wBAAkB;AACa,UAA7B,yBAAkB,KAAK,EAAE,GAAG;AACkB,UAA9C,AAAM,KAAD,oCAAmC;;MAE5C;yBAGuC;AAOnC,QANF,wBAAkB;AACZ,0BAAY,mBAAc,AAAI,GAAD;AACjC,cAAI,SAAS,IAAI;AACkB,YAAjC,AAAU,SAAD,eAAe,AAAI,GAAD;AACuB,YAAlD,AAAU,SAAD,oCAAmC;;;MAGlD;kBAG2B,KAAa;AAGpC,QAFF,wBAAkB;AACa,UAAvB,kBAAY,GAAG,EAAE,KAAK;;MAEhC;oBAG6B;AACV,QAAjB,AAAK,IAAD;AACJ,yBAAO,AAAK,IAAD,cAAW,YAA4B,KAApB,AAAK,mBAAS,IAAI;MAClD;;;MApEE;;;IAqEJ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gBA/E0C;AAAM,wCAAa;IAAG;;iCALE;AAAhE;AACwD,IAAtD,YAAO,2BAAa,mDAAI,yBAAkB,UAAU;EACtD;;;;;;;;;;;;;;ICuBgB;;;;;;;AARiB;IAAK;aAGR;AACf,MAAb,cAAQ,KAAK;AACM,MAAnB,qBAAe;IACjB;;AASqB,MAAnB;AACA,oBAAI;AACkB,QAApB,qBAAe;AACoD,QAAnE,AAAM,wBAAuB,+BAAQ,oDAAC,AAAM,uBAAW;AACO,QAA9D,AAAM,8CAAiC,iBAAiB;;AAEzC,MAAjB;IACF;eAG0B;AACpB,iBAAO,gBAAW,GAAG;AACF,MAAvB,oBAAa,IAAI,EAAE,GAAG;AACuB,MAA7C,AAAK,IAAD,oCAAmC;AACpB,MAAnB,AAAW,sBAAI,GAAG;IACpB;kBAG6B;AACL,MAAtB,AAAW,yBAAO,GAAG;IACvB;oBAGoC;AAC9B,iBAAO,AAAK,mBAAS,AAAI,GAAD;AACA,MAA5B,2DAAkB,IAAI,GAAE,GAAG;AACkB,MAA7C,AAAK,IAAD,oCAAmC;IACzC;uBAGuC;IAAM;;AAG3C,eAAS,MAAO;AACV,mBAAO,AAAK,mBAAS,AAAI,GAAD;AACY,QAAxC,AAAI,AAAc,GAAf,0BAA0B,AAAK,IAAD;;IAErC;;AAGE,UAAI,AAAK,aAAG;AAG8B,QAFxC,WAAM,wBACF,8DACA;;IAER;;4CAlD4D;IAbvD,qBAAe;IACC;IAUL,oBAAa;IAGZ,mBAAE,yBAAkB,UAAU;AAD/C;;EACgD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ACzF5C,YAAA,AAAI,AAAQ,uBAAG,OAAO,AAAI,AAAQ,+BAAY;IAAK;;AAG5B,YAAA,AAAI,AAAQ,uBAAG,OAAO,AAAI,AAAQ,6BAAU;IAAK;;AAIxE,YAAA,AAAI,AAAQ,uBAAG,OAAO,AAAI,AAAQ,8BAAW;IAAK;;AAG7B,YAAA,AAAI,AAAQ,uBAAG,OAAO,AAAI,AAAQ,2BAAQ;IAAK;;AAG/C,YAAA,AAAI,AAAQ,uBAAG,OAAO,AAAI,AAAQ,2BAAQ;IAAK;;AAG7C,YAAA,AAAI,AAAQ,uBAAG,OAAO,WAAC,AAAI,AAAQ,4BAAQ;IAAK;;;IApB9C;;EAAI;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MCwDlB,yBAAc;;;;;;;;;;;8CVrDQ,gBAAqB;;yDAArB,gBAAqB;;;;IW6DlD;;;;;;cAZU;AAGhB,UAAI,eAAU,cAAQ,KAAK,GAAG;AAChB,MAAd,eAAS,KAAK;AACd,UAAI,eAAU,KAAK,EAAE,iBAAY;AAIb,MAApB,sBAAgB;IAClB;iBAkBkB;AAGd,MAFF,cAAS;AACmB,QAA1B,oBAAe,UAAU;;IAE7B;;;;YAKsC;AAChB,MAApB,kBAAW;AACqC,MAAhD,gBAA2B,wCAAgB;IAE7C;;AAGqB,YAAA,AAAQ;IAAM;;AAIjC,oBAAI;AAC0B,QAA5B,AAAS,4BAAY;AAGnB,QAFF,cAAS;AACW,UAAlB,iBAAY;;AAEO,QAArB,sBAAgB;;IAEpB;;AAI8B,MAA5B,oBAAa,iBAAU;AAC0B,MAAjD,AAAS,mDAAkC;IAC7C;;AAEuB;IAAQ;;AAGN;IAAE;sBAGI;AACT,MAApB,iBAAY,QAAQ;AACC,MAArB,AAAQ,kBAAI,QAAQ;IACtB;;mCAtDa,YAIsB;IA5B3B;IACS;IACT;IACH,sBAAgB;IAeb;AAWF,8CAAM,cAAc,EAAE,UAAU;AACf,IAArB,YAAM,cAAc;EACtB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICRQ;;;;;;aAhBS;AACF,MAAb,eAAQ,KAAK;AACM,MAAnB,sBAAe;IACjB;;AAEoB;IAAK;cAKP;AACI,MAApB,uBAAgB;AACF,MAAd,gBAAS,KAAK;IAChB;;AAEqB;IAAM;;AAeN,YAAA,AAAQ;IAAM;;AAIjC,oBAAI;AACkB,QAApB,sBAAe;AACS,QAAxB,oBAAa,WAAM;AAC0B,QAA7C,AAAK,6CAAkC;;AAEzC,oBAAI;AACmB,QAArB,uBAAgB;AAChB,4BAAe,eAAQ;AACE,UAAvB,AAAK,sBAAY;AACA,UAAjB,iBAAY;;;IAGlB;;AAGyB;IAAE;;AAGJ;IAAI;sBAGI;AACT,MAApB,iBAAY,QAAQ;AACC,MAArB,AAAQ,mBAAI,QAAQ;IACtB;;gDApCa,YAIsB;IA7B9B,sBAAe;IACZ;IAQF,iBAA2B;IAC5B,uBAAgB;IACb;IAQA;AAWF,2DAAM,cAAc,EAAE,UAAU;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICT/B;;;;;;cANU;AACI,MAApB,wBAAgB;AACF,MAAd,iBAAS,KAAK;IAChB;;AAEqB;IAAM;aAsBX;AACI,MAAZ,aAAO,KAAK;IACpB;;;;iBAGkB;AACQ,MAAxB,qBAAc,UAAU;AACD,MAAvB,0BAAmB;IACrB;;;;;AAGqB,YAAA,AAAQ;IAAM;;AAMjC,oBAAI;AACmB,QAArB,wBAAgB;AAChB,4BAAe,gBAAQ;AACH,UAAlB,iBAAY;AAC2B,UAAvC,AAAc,+BAAY,MAAM;;;AAGpC,qBAAK;AAC2B,QAA9B,AAAc,8BAAW;AACZ,QAAb,eAAS;;AAEX,oBAAI;AAIA,QAHF,wBAAkB;AACQ,UAAxB,0BAAmB;AACQ,UAA3B,oBAAe;;;IAGrB;;AAImC,MAAjC,AAAc,iCAAc;IAC9B;sBAG+B;AACT,MAApB,iBAAY,QAAQ;AACC,MAArB,AAAQ,oBAAI,QAAQ;IACtB;;AAGyB,gCAAY,WAAM;IAAQ;;AAEzB,YAAA,AAAQ;IAAa;;AAGxB,YAAA,AAAc,+BAAW;IAAK;;gDAlExC,SAIA,YAIsB;IA3B7B,kBAA2B;IAE5B,wBAAgB;IACb;IAQA;IACJ,eAAS;IAER,qBAAc;IACd,0BAAmB;IAIX;AASP,2DAAM,cAAc,EAAE,UAAU;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;eCzEb;AACpB,sBAAY,mBAAc,AAAI,GAAD;AAC7B,iBAAO,AAAU,SAAD,MAAM,AAAI,GAAD;AAC7B,UAAI,AAAK,IAAD,IAAI;AACM,QAAhB,OAAO;AAC6B,QAApC,AAAU,SAAD,YAAY,AAAI,GAAD,OAAO,IAAI;;AAQnC,MAHF,wBAAkB;AACO,QAAvB,yCAAa,IAAI,GAAE,GAAG;AACuB,QAA7C,AAAK,IAAD,oCAAmC;;IAE3C;oBAIoC;AAC9B,sBAAY,mBAAc,AAAI,GAAD;AAC7B,kBAAQ,AAAU,SAAD,MAAM,AAAI,GAAD;AAC9B,UAAI,AAAM,KAAD,IAAI;AACa,QAAxB,QAAQ,2BAAa;AACgB,QAArC,AAAU,SAAD,YAAY,AAAI,GAAD,OAAO,KAAK;;AAQpC,MAHF,wBAAkB;AACa,QAA7B,2DAAkB,KAAK,GAAE,GAAG;AACkB,QAA9C,AAAM,KAAD,oCAAmC;;IAE5C;kBAG6B;;AAGI,kBAA/B,IAAI,eAAJ,OAAM;oBAAN,OAAe,gBAAY;IAC7B;uBAGuC;;AAGN,kBAA/B,IAAI,eAAJ,OAAM;oBAAN,OAAe,gBAAY;IAC7B;;+CAnD6D;AACvD,0DAAM,UAAU;;EAAC;;;;;wBCuBE;UACR;AACX,qBAAW,yCAAgB,cAAc;AAC7C,YAAoB,4BAAa,QAAQ,EAAE,SAAS;IACtD;wBAI4D,gBAC3C;;AACX,qBAAW,AAAe,AAAoB,cAArB;AAC7B,YAAoB,4BAAa,QAAQ,EAAE,SAAS;IACtD;2BAG6B;AACzB,YAAA,AAAe,eAAD,2CAAK,SAAC,aAAa,kBAC7B,4CAAS,WAAW,EAAE,wCAAe,aAAa;IAAG;0BAEF;AACzD,UAAkB,yBAAd,aAAa;AACf,cAAO,cAAa;YACf,KAAkB,aAAd,aAAa;AAClB,oBAAQ,AAAa,aAAA,QAAC;AACd,wBACa,aAArB,AAAc,aAAD,aAAU,IAAqB,0CAAjB,AAAa,aAAA,QAAC,MAAoB;AACjE,cAAoB,uBAAQ,KAAK,EAAE,SAAS;;AAE5C,cAAoB,uBAAQ,aAAa,EAAE;;IAE/C;;;;EAGe","file":"directives.ddc.js"}');
  // Exports:
  return {
    src__directives__validators: validators,
    src__validators: validators$,
    src__model: model,
    src__directives__ng_control_group: ng_control_group,
    src__directives__shared: shared,
    src__directives__select_control_value_accessor: select_control_value_accessor,
    src__directives__control_value_accessor: control_value_accessor,
    src__directives__radio_control_value_accessor: radio_control_value_accessor,
    src__directives__ng_control: ng_control,
    src__directives__abstract_control_directive: abstract_control_directive,
    src__directives__number_value_accessor: number_value_accessor,
    src__directives__normalize_validator: normalize_validator,
    src__directives__default_value_accessor: default_value_accessor,
    src__directives__control_container: control_container,
    src__directives__form_interface: form_interface,
    src__directives__checkbox_value_accessor: checkbox_value_accessor,
    src__directives__ng_form: ng_form,
    src__directives__abstract_form: abstract_form,
    src__directives__ng_form_model: ng_form_model,
    src__directives__ng_control_status: ng_control_status,
    src__directives: directives,
    src__directives__ng_model: ng_model,
    src__directives__ng_form_control: ng_form_control,
    src__directives__ng_control_name: ng_control_name,
    src__directives__memorized_form: memorized_form,
    src__form_builder: form_builder
  };
});

//# sourceMappingURL=directives.ddc.js.map
