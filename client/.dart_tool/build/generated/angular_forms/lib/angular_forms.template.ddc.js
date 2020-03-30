define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/directive_change_detector', 'packages/angular_forms/src/directives', 'packages/angular/src/core/change_detection/change_detection.template', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, packages__angular__angular$46template, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__directive_change_detector, packages__angular_forms__src__directives, packages__angular__src__core__change_detection__change_detection$46template, packages__angular__src__core__change_detection__change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const directive_change_detector = packages__angular__src__core__change_detection__directive_change_detector.src__core__change_detection__directive_change_detector;
  const validators = packages__angular_forms__src__directives.src__directives__validators;
  const radio_control_value_accessor = packages__angular_forms__src__directives.src__directives__radio_control_value_accessor;
  const ng_control_status = packages__angular_forms__src__directives.src__directives__ng_control_status;
  const lang$46template = packages__angular__src__core__change_detection__change_detection$46template.src__facade__lang$46template;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const abstract_form$46template = Object.create(dart.library);
  const ng_control_group$46template = Object.create(dart.library);
  const validators$46template = Object.create(dart.library);
  const validators$46template$ = Object.create(dart.library);
  const model$46template = Object.create(dart.library);
  const shared$46template = Object.create(dart.library);
  const select_control_value_accessor$46template = Object.create(dart.library);
  const control_value_accessor$46template = Object.create(dart.library);
  const radio_control_value_accessor$46template = Object.create(dart.library);
  const ng_control$46template = Object.create(dart.library);
  const abstract_control_directive$46template = Object.create(dart.library);
  const number_value_accessor$46template = Object.create(dart.library);
  const normalize_validator$46template = Object.create(dart.library);
  const default_value_accessor$46template = Object.create(dart.library);
  const control_container$46template = Object.create(dart.library);
  const form_interface$46template = Object.create(dart.library);
  const checkbox_value_accessor$46template = Object.create(dart.library);
  const ng_control_status$46template = Object.create(dart.library);
  const angular_forms$46template = Object.create(dart.library);
  const form_builder$46template = Object.create(dart.library);
  const directives$46template = Object.create(dart.library);
  const ng_model$46template = Object.create(dart.library);
  const ng_form_model$46template = Object.create(dart.library);
  const ng_form_control$46template = Object.create(dart.library);
  const ng_form$46template = Object.create(dart.library);
  const ng_control_name$46template = Object.create(dart.library);
  const memorized_form$46template = Object.create(dart.library);
  let VoidToRadioControlRegistry = () => (VoidToRadioControlRegistry = dart.constFn(dart.fnType(radio_control_value_accessor.RadioControlRegistry, [])))();
  const CT = Object.create(null);
  abstract_form$46template.initReflector = function initReflector() {
    if (dart.test(abstract_form$46template._visited)) {
      return;
    }
    abstract_form$46template._visited = true;
    model$46template.initReflector();
    control_container$46template.initReflector();
    form_interface$46template.initReflector();
    ng_control$46template.initReflector();
    ng_control_group$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(abstract_form$46template, {
    /*abstract_form$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  ng_control_group$46template.initReflector = function initReflector$() {
    if (dart.test(ng_control_group$46template._visited)) {
      return;
    }
    ng_control_group$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    control_container$46template.initReflector();
    form_interface$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
    validators$46template.initReflector();
  };
  dart.defineLazy(ng_control_group$46template, {
    /*ng_control_group$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  const _expr_0 = dart.privateName(validators$46template, "_expr_0");
  const instance$ = dart.privateName(validators$46template, "MinLengthValidatorNgCd.instance");
  validators$46template.MinLengthValidatorNgCd = class MinLengthValidatorNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.minLengthAttr;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(el, "minlength", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (validators$46template.MinLengthValidatorNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$] = instance;
    validators$46template.MinLengthValidatorNgCd.__proto__.new.call(this);
    ;
  }).prototype = validators$46template.MinLengthValidatorNgCd.prototype;
  dart.addTypeTests(validators$46template.MinLengthValidatorNgCd);
  dart.setMethodSignature(validators$46template.MinLengthValidatorNgCd, () => ({
    __proto__: dart.getMethods(validators$46template.MinLengthValidatorNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [app_view.AppView, html.Element])
  }));
  dart.setLibraryUri(validators$46template.MinLengthValidatorNgCd, "package:angular_forms/src/directives/validators.template.dart");
  dart.setFieldSignature(validators$46template.MinLengthValidatorNgCd, () => ({
    __proto__: dart.getFields(validators$46template.MinLengthValidatorNgCd.__proto__),
    instance: dart.finalFieldType(validators.MinLengthValidator),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  const instance$0 = dart.privateName(validators$46template, "MaxLengthValidatorNgCd.instance");
  validators$46template.MaxLengthValidatorNgCd = class MaxLengthValidatorNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$0];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.maxLengthAttr;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(el, "maxlength", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (validators$46template.MaxLengthValidatorNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$0] = instance;
    validators$46template.MaxLengthValidatorNgCd.__proto__.new.call(this);
    ;
  }).prototype = validators$46template.MaxLengthValidatorNgCd.prototype;
  dart.addTypeTests(validators$46template.MaxLengthValidatorNgCd);
  dart.setMethodSignature(validators$46template.MaxLengthValidatorNgCd, () => ({
    __proto__: dart.getMethods(validators$46template.MaxLengthValidatorNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [app_view.AppView, html.Element])
  }));
  dart.setLibraryUri(validators$46template.MaxLengthValidatorNgCd, "package:angular_forms/src/directives/validators.template.dart");
  dart.setFieldSignature(validators$46template.MaxLengthValidatorNgCd, () => ({
    __proto__: dart.getFields(validators$46template.MaxLengthValidatorNgCd.__proto__),
    instance: dart.finalFieldType(validators.MaxLengthValidator),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  const instance$1 = dart.privateName(validators$46template, "PatternValidatorNgCd.instance");
  validators$46template.PatternValidatorNgCd = class PatternValidatorNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$1];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.pattern;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.updateAttribute(el, "pattern", currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (validators$46template.PatternValidatorNgCd.new = function(instance) {
    this[_expr_0] = null;
    this[instance$1] = instance;
    validators$46template.PatternValidatorNgCd.__proto__.new.call(this);
    ;
  }).prototype = validators$46template.PatternValidatorNgCd.prototype;
  dart.addTypeTests(validators$46template.PatternValidatorNgCd);
  dart.setMethodSignature(validators$46template.PatternValidatorNgCd, () => ({
    __proto__: dart.getMethods(validators$46template.PatternValidatorNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [app_view.AppView, html.Element])
  }));
  dart.setLibraryUri(validators$46template.PatternValidatorNgCd, "package:angular_forms/src/directives/validators.template.dart");
  dart.setFieldSignature(validators$46template.PatternValidatorNgCd, () => ({
    __proto__: dart.getFields(validators$46template.PatternValidatorNgCd.__proto__),
    instance: dart.finalFieldType(validators.PatternValidator),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  validators$46template.initReflector = function initReflector$0() {
    if (dart.test(validators$46template._visited)) {
      return;
    }
    validators$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(validators$46template, {
    /*validators$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  validators$46template$.initReflector = function initReflector$1() {
    if (dart.test(validators$46template$._visited)) {
      return;
    }
    validators$46template$._visited = true;
    validators$46template.initReflector();
    model$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(validators$46template$, {
    /*validators$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  model$46template.initReflector = function initReflector$2() {
    if (dart.test(model$46template._visited)) {
      return;
    }
    model$46template._visited = true;
    validators$46template.initReflector();
  };
  dart.defineLazy(model$46template, {
    /*model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  shared$46template.initReflector = function initReflector$3() {
    if (dart.test(shared$46template._visited)) {
      return;
    }
    shared$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    abstract_control_directive$46template.initReflector();
    checkbox_value_accessor$46template.initReflector();
    control_container$46template.initReflector();
    control_value_accessor$46template.initReflector();
    default_value_accessor$46template.initReflector();
    ng_control$46template.initReflector();
    ng_control_group$46template.initReflector();
    normalize_validator$46template.initReflector();
    number_value_accessor$46template.initReflector();
    radio_control_value_accessor$46template.initReflector();
    select_control_value_accessor$46template.initReflector();
    validators$46template.initReflector();
  };
  dart.defineLazy(shared$46template, {
    /*shared$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  select_control_value_accessor$46template.initReflector = function initReflector$4() {
    if (dart.test(select_control_value_accessor$46template._visited)) {
      return;
    }
    select_control_value_accessor$46template._visited = true;
    control_value_accessor$46template.initReflector();
    angular$46template.initReflector();
    lang$46template.initReflector();
  };
  dart.defineLazy(select_control_value_accessor$46template, {
    /*select_control_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  control_value_accessor$46template.initReflector = function initReflector$5() {
    if (dart.test(control_value_accessor$46template._visited)) {
      return;
    }
    control_value_accessor$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.defineLazy(control_value_accessor$46template, {
    /*control_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  radio_control_value_accessor$46template.initReflector = function initReflector$6() {
    if (dart.test(radio_control_value_accessor$46template._visited)) {
      return;
    }
    radio_control_value_accessor$46template._visited = true;
    reflector.registerFactory(dart.wrapType(radio_control_value_accessor.RadioControlRegistry), dart.fn(() => new radio_control_value_accessor.RadioControlRegistry.new(), VoidToRadioControlRegistry()));
    control_value_accessor$46template.initReflector();
    ng_control$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
  };
  dart.defineLazy(radio_control_value_accessor$46template, {
    /*radio_control_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  ng_control$46template.initReflector = function initReflector$7() {
    if (dart.test(ng_control$46template._visited)) {
      return;
    }
    ng_control$46template._visited = true;
    model$46template.initReflector();
    abstract_control_directive$46template.initReflector();
    control_value_accessor$46template.initReflector();
    shared$46template.initReflector();
    validators$46template.initReflector();
  };
  dart.defineLazy(ng_control$46template, {
    /*ng_control$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  abstract_control_directive$46template.initReflector = function initReflector$8() {
    if (dart.test(abstract_control_directive$46template._visited)) {
      return;
    }
    abstract_control_directive$46template._visited = true;
    model$46template.initReflector();
  };
  dart.defineLazy(abstract_control_directive$46template, {
    /*abstract_control_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  number_value_accessor$46template.initReflector = function initReflector$9() {
    if (dart.test(number_value_accessor$46template._visited)) {
      return;
    }
    number_value_accessor$46template._visited = true;
    control_value_accessor$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(number_value_accessor$46template, {
    /*number_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  normalize_validator$46template.initReflector = function initReflector$10() {
    if (dart.test(normalize_validator$46template._visited)) {
      return;
    }
    normalize_validator$46template._visited = true;
    validators$46template.initReflector();
  };
  dart.defineLazy(normalize_validator$46template, {
    /*normalize_validator$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  default_value_accessor$46template.initReflector = function initReflector$11() {
    if (dart.test(default_value_accessor$46template._visited)) {
      return;
    }
    default_value_accessor$46template._visited = true;
    control_value_accessor$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
  };
  dart.defineLazy(default_value_accessor$46template, {
    /*default_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  control_container$46template.initReflector = function initReflector$12() {
    if (dart.test(control_container$46template._visited)) {
      return;
    }
    control_container$46template._visited = true;
    model$46template.initReflector();
    abstract_control_directive$46template.initReflector();
    form_interface$46template.initReflector();
  };
  dart.defineLazy(control_container$46template, {
    /*control_container$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  form_interface$46template.initReflector = function initReflector$13() {
    if (dart.test(form_interface$46template._visited)) {
      return;
    }
    form_interface$46template._visited = true;
    model$46template.initReflector();
    ng_control$46template.initReflector();
    ng_control_group$46template.initReflector();
  };
  dart.defineLazy(form_interface$46template, {
    /*form_interface$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  checkbox_value_accessor$46template.initReflector = function initReflector$14() {
    if (dart.test(checkbox_value_accessor$46template._visited)) {
      return;
    }
    checkbox_value_accessor$46template._visited = true;
    control_value_accessor$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(checkbox_value_accessor$46template, {
    /*checkbox_value_accessor$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  const _expr_0$ = dart.privateName(ng_control_status$46template, "_expr_0");
  const _expr_1 = dart.privateName(ng_control_status$46template, "_expr_1");
  const _expr_2 = dart.privateName(ng_control_status$46template, "_expr_2");
  const _expr_3 = dart.privateName(ng_control_status$46template, "_expr_3");
  const _expr_4 = dart.privateName(ng_control_status$46template, "_expr_4");
  const _expr_5 = dart.privateName(ng_control_status$46template, "_expr_5");
  const instance$2 = dart.privateName(ng_control_status$46template, "NgControlStatusNgCd.instance");
  ng_control_status$46template.NgControlStatusNgCd = class NgControlStatusNgCd extends directive_change_detector.DirectiveChangeDetector {
    get instance() {
      return this[instance$2];
    }
    set instance(value) {
      super.instance = value;
    }
    detectHostChanges(view, el) {
      let currVal_0 = this.instance.ngClassUntouched;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        dom_helpers.updateClassBindingNonHtml(el, "ng-untouched", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = this.instance.ngClassTouched;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBindingNonHtml(el, "ng-touched", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = this.instance.ngClassPristine;
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateClassBindingNonHtml(el, "ng-pristine", currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = this.instance.ngClassDirty;
      if (dart.test(app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        dom_helpers.updateClassBindingNonHtml(el, "ng-dirty", currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = this.instance.ngClassValid;
      if (dart.test(app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        dom_helpers.updateClassBindingNonHtml(el, "ng-valid", currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = this.instance.ngClassInvalid;
      if (dart.test(app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        dom_helpers.updateClassBindingNonHtml(el, "ng-invalid", currVal_5);
        this[_expr_5] = currVal_5;
      }
    }
  };
  (ng_control_status$46template.NgControlStatusNgCd.new = function(instance) {
    this[_expr_0$] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[instance$2] = instance;
    ng_control_status$46template.NgControlStatusNgCd.__proto__.new.call(this);
    ;
  }).prototype = ng_control_status$46template.NgControlStatusNgCd.prototype;
  dart.addTypeTests(ng_control_status$46template.NgControlStatusNgCd);
  dart.setMethodSignature(ng_control_status$46template.NgControlStatusNgCd, () => ({
    __proto__: dart.getMethods(ng_control_status$46template.NgControlStatusNgCd.__proto__),
    detectHostChanges: dart.fnType(dart.void, [app_view.AppView, html.Element])
  }));
  dart.setLibraryUri(ng_control_status$46template.NgControlStatusNgCd, "package:angular_forms/src/directives/ng_control_status.template.dart");
  dart.setFieldSignature(ng_control_status$46template.NgControlStatusNgCd, () => ({
    __proto__: dart.getFields(ng_control_status$46template.NgControlStatusNgCd.__proto__),
    instance: dart.finalFieldType(ng_control_status.NgControlStatus),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.bool),
    [_expr_5]: dart.fieldType(core.bool)
  }));
  ng_control_status$46template.initReflector = function initReflector$15() {
    if (dart.test(ng_control_status$46template._visited)) {
      return;
    }
    ng_control_status$46template._visited = true;
    ng_control$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.defineLazy(ng_control_status$46template, {
    /*ng_control_status$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  angular_forms$46template.initReflector = function initReflector$16() {
    if (dart.test(angular_forms$46template._visited)) {
      return;
    }
    angular_forms$46template._visited = true;
    directives$46template.initReflector();
    radio_control_value_accessor$46template.initReflector();
    form_builder$46template.initReflector();
    model$46template.initReflector();
    validators$46template$.initReflector();
  };
  dart.defineLazy(angular_forms$46template, {
    /*angular_forms$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  form_builder$46template.initReflector = function initReflector$17() {
    if (dart.test(form_builder$46template._visited)) {
      return;
    }
    form_builder$46template._visited = true;
    validators$46template.initReflector();
    model$46template.initReflector();
  };
  dart.defineLazy(form_builder$46template, {
    /*form_builder$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  directives$46template.initReflector = function initReflector$18() {
    if (dart.test(directives$46template._visited)) {
      return;
    }
    directives$46template._visited = true;
    abstract_control_directive$46template.initReflector();
    checkbox_value_accessor$46template.initReflector();
    checkbox_value_accessor$46template.initReflector();
    control_container$46template.initReflector();
    control_value_accessor$46template.initReflector();
    default_value_accessor$46template.initReflector();
    default_value_accessor$46template.initReflector();
    form_interface$46template.initReflector();
    memorized_form$46template.initReflector();
    memorized_form$46template.initReflector();
    ng_control$46template.initReflector();
    ng_control_group$46template.initReflector();
    ng_control_group$46template.initReflector();
    ng_control_name$46template.initReflector();
    ng_control_name$46template.initReflector();
    ng_control_status$46template.initReflector();
    ng_form$46template.initReflector();
    ng_form$46template.initReflector();
    ng_form_control$46template.initReflector();
    ng_form_control$46template.initReflector();
    ng_form_model$46template.initReflector();
    ng_form_model$46template.initReflector();
    ng_model$46template.initReflector();
    ng_model$46template.initReflector();
    number_value_accessor$46template.initReflector();
    number_value_accessor$46template.initReflector();
    radio_control_value_accessor$46template.initReflector();
    radio_control_value_accessor$46template.initReflector();
    select_control_value_accessor$46template.initReflector();
    select_control_value_accessor$46template.initReflector();
    shared$46template.initReflector();
    validators$46template.initReflector();
    validators$46template.initReflector();
  };
  dart.defineLazy(directives$46template, {
    /*directives$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  ng_model$46template.initReflector = function initReflector$19() {
    if (dart.test(ng_model$46template._visited)) {
      return;
    }
    ng_model$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    control_value_accessor$46template.initReflector();
    ng_control$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
  };
  dart.defineLazy(ng_model$46template, {
    /*ng_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  ng_form_model$46template.initReflector = function initReflector$20() {
    if (dart.test(ng_form_model$46template._visited)) {
      return;
    }
    ng_form_model$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    abstract_form$46template.initReflector();
    control_container$46template.initReflector();
    ng_control$46template.initReflector();
    ng_control_group$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
    validators$46template.initReflector();
  };
  dart.defineLazy(ng_form_model$46template, {
    /*ng_form_model$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  ng_form_control$46template.initReflector = function initReflector$21() {
    if (dart.test(ng_form_control$46template._visited)) {
      return;
    }
    ng_form_control$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    control_value_accessor$46template.initReflector();
    ng_control$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
  };
  dart.defineLazy(ng_form_control$46template, {
    /*ng_form_control$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  ng_form$46template.initReflector = function initReflector$22() {
    if (dart.test(ng_form$46template._visited)) {
      return;
    }
    ng_form$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    abstract_form$46template.initReflector();
    control_container$46template.initReflector();
    ng_control$46template.initReflector();
    ng_control_group$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
  };
  dart.defineLazy(ng_form$46template, {
    /*ng_form$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  ng_control_name$46template.initReflector = function initReflector$23() {
    if (dart.test(ng_control_name$46template._visited)) {
      return;
    }
    ng_control_name$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    control_container$46template.initReflector();
    control_value_accessor$46template.initReflector();
    form_interface$46template.initReflector();
    ng_control$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
  };
  dart.defineLazy(ng_control_name$46template, {
    /*ng_control_name$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  memorized_form$46template.initReflector = function initReflector$24() {
    if (dart.test(memorized_form$46template._visited)) {
      return;
    }
    memorized_form$46template._visited = true;
    model$46template.initReflector();
    validators$46template$.initReflector();
    control_container$46template.initReflector();
    ng_control$46template.initReflector();
    ng_control_group$46template.initReflector();
    ng_form$46template.initReflector();
    angular$46template.initReflector();
    shared$46template.initReflector();
  };
  dart.defineLazy(memorized_form$46template, {
    /*memorized_form$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.trackLibraries("packages/angular_forms/angular_forms.template", {
    "package:angular_forms/src/directives/abstract_form.template.dart": abstract_form$46template,
    "package:angular_forms/src/directives/ng_control_group.template.dart": ng_control_group$46template,
    "package:angular_forms/src/directives/validators.template.dart": validators$46template,
    "package:angular_forms/src/validators.template.dart": validators$46template$,
    "package:angular_forms/src/model.template.dart": model$46template,
    "package:angular_forms/src/directives/shared.template.dart": shared$46template,
    "package:angular_forms/src/directives/select_control_value_accessor.template.dart": select_control_value_accessor$46template,
    "package:angular_forms/src/directives/control_value_accessor.template.dart": control_value_accessor$46template,
    "package:angular_forms/src/directives/radio_control_value_accessor.template.dart": radio_control_value_accessor$46template,
    "package:angular_forms/src/directives/ng_control.template.dart": ng_control$46template,
    "package:angular_forms/src/directives/abstract_control_directive.template.dart": abstract_control_directive$46template,
    "package:angular_forms/src/directives/number_value_accessor.template.dart": number_value_accessor$46template,
    "package:angular_forms/src/directives/normalize_validator.template.dart": normalize_validator$46template,
    "package:angular_forms/src/directives/default_value_accessor.template.dart": default_value_accessor$46template,
    "package:angular_forms/src/directives/control_container.template.dart": control_container$46template,
    "package:angular_forms/src/directives/form_interface.template.dart": form_interface$46template,
    "package:angular_forms/src/directives/checkbox_value_accessor.template.dart": checkbox_value_accessor$46template,
    "package:angular_forms/src/directives/ng_control_status.template.dart": ng_control_status$46template,
    "package:angular_forms/angular_forms.template.dart": angular_forms$46template,
    "package:angular_forms/src/form_builder.template.dart": form_builder$46template,
    "package:angular_forms/src/directives.template.dart": directives$46template,
    "package:angular_forms/src/directives/ng_model.template.dart": ng_model$46template,
    "package:angular_forms/src/directives/ng_form_model.template.dart": ng_form_model$46template,
    "package:angular_forms/src/directives/ng_form_control.template.dart": ng_form_control$46template,
    "package:angular_forms/src/directives/ng_form.template.dart": ng_form$46template,
    "package:angular_forms/src/directives/ng_control_name.template.dart": ng_control_name$46template,
    "package:angular_forms/src/directives/memorized_form.template.dart": memorized_form$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/directives/abstract_form.template.dart","src/directives/ng_control_group.template.dart","src/directives/validators.template.dart","src/validators.template.dart","src/model.template.dart","src/directives/shared.template.dart","src/directives/select_control_value_accessor.template.dart","src/directives/control_value_accessor.template.dart","src/directives/radio_control_value_accessor.template.dart","src/directives/ng_control.template.dart","src/directives/abstract_control_directive.template.dart","src/directives/number_value_accessor.template.dart","src/directives/normalize_validator.template.dart","src/directives/default_value_accessor.template.dart","src/directives/control_container.template.dart","src/directives/form_interface.template.dart","src/directives/checkbox_value_accessor.template.dart","src/directives/ng_control_status.template.dart","angular_forms.template.dart","src/form_builder.template.dart","src/directives.template.dart","src/directives/ng_model.template.dart","src/directives/ng_form_model.template.dart","src/directives/ng_form_control.template.dart","src/directives/ng_form.template.dart","src/directives/ng_control_name.template.dart","src/directives/memorized_form.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAeE,kBAAI;AACF;;AAEa,IAAf,oCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAbI,iCAAQ;YAAG;;;;;ACGb,kBAAI;AACF;;AAEa,IAAf,uCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAdI,oCAAQ;YAAG;;;;;;;ICGoB;;;;;;sBAGO,MAAsB;AACtD,sBAAY,AAAS;AAC3B,oBAAI,4BAAqB,eAAS,SAAS;AACU,QAAnD,4BAAwB,EAAE,EAAE,aAAa,SAAS;AAC/B,QAAnB,gBAAU,SAAS;;IAEvB;;+DAP4B;IADxB;IACwB;AAA5B;;EAAqC;;;;;;;;;;;;;;IAWJ;;;;;;sBAGO,MAAsB;AACtD,sBAAY,AAAS;AAC3B,oBAAI,4BAAqB,eAAS,SAAS;AACU,QAAnD,4BAAwB,EAAE,EAAE,aAAa,SAAS;AAC/B,QAAnB,gBAAU,SAAS;;IAEvB;;+DAP4B;IADxB;IACwB;AAA5B;;EAAqC;;;;;;;;;;;;;;IAWN;;;;;;sBAGS,MAAsB;AACtD,sBAAY,AAAS;AAC3B,oBAAI,4BAAqB,eAAS,SAAS;AACQ,QAAjD,4BAAwB,EAAE,EAAE,WAAW,SAAS;AAC7B,QAAnB,gBAAU,SAAS;;IAEvB;;6DAP0B;IADtB;IACsB;AAA1B;;EAAmC;;;;;;;;;;;;;AAYnC,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,8BAAQ;YAAG;;;;;AC3Cb,kBAAI;AACF;;AAEa,IAAf,kCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,+BAAQ;YAAG;;;;;ACAb,kBAAI;AACF;;AAEa,IAAf,4BAAW;AAEU,IAArB;EACF;;MARI,yBAAQ;YAAG;;;;;ACeb,kBAAI;AACF;;AAEa,IAAf,6BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;EACF;;MArBI,0BAAQ;YAAG;;;;;ACTb,kBAAI;AACF;;AAEa,IAAf,oDAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,iDAAQ;YAAG;;;;;ACAb,kBAAI;AACF;;AAEa,IAAf,6CAAW;AAEU,IAArB;EACF;;MARI,0CAAQ;YAAG;;;;;ACMb,kBAAI;AACF;;AAEa,IAAf,mDAAW;AAE+D,IAA1E,0BAAuB,kEAAsB,cAAM;AAC9B,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAZI,gDAAQ;YAAG;;;;;ACEb,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAZI,8BAAQ;YAAG;;;;;ACFb,kBAAI;AACF;;AAEa,IAAf,iDAAW;AAEU,IAArB;EACF;;MARI,8CAAQ;YAAG;;;;;ACGb,kBAAI;AACF;;AAEa,IAAf,4CAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,yCAAQ;YAAG;;;;;ACCb,kBAAI;AACF;;AAEa,IAAf,0CAAW;AAEU,IAArB;EACF;;MARI,uCAAQ;YAAG;;;;;ACIb,kBAAI;AACF;;AAEa,IAAf,6CAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,0CAAQ;YAAG;;;;;ACEb,kBAAI;AACF;;AAEa,IAAf,wCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,qCAAQ;YAAG;;;;;ACEb,kBAAI;AACF;;AAEa,IAAf,qCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,kCAAQ;YAAG;;;;;ACCb,kBAAI;AACF;;AAEa,IAAf,8CAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,2CAAQ;YAAG;;;;;;;;;;;;ICOiB;;;;;;sBAQU,MAAsB;AACtD,sBAAY,AAAS;AAC3B,oBAAI,4BAAqB,gBAAS,SAAS;AACuB,QAAhE,sCAAkC,EAAE,EAAE,gBAAgB,SAAS;AAC5C,QAAnB,iBAAU,SAAS;;AAEf,sBAAY,AAAS;AAC3B,oBAAI,4BAAqB,eAAS,SAAS;AACqB,QAA9D,sCAAkC,EAAE,EAAE,cAAc,SAAS;AAC1C,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAS;AAC3B,oBAAI,4BAAqB,eAAS,SAAS;AACsB,QAA/D,sCAAkC,EAAE,EAAE,eAAe,SAAS;AAC3C,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAS;AAC3B,oBAAI,4BAAqB,eAAS,SAAS;AACmB,QAA5D,sCAAkC,EAAE,EAAE,YAAY,SAAS;AACxC,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAS;AAC3B,oBAAI,4BAAqB,eAAS,SAAS;AACmB,QAA5D,sCAAkC,EAAE,EAAE,YAAY,SAAS;AACxC,QAAnB,gBAAU,SAAS;;AAEf,sBAAY,AAAS;AAC3B,oBAAI,4BAAqB,eAAS,SAAS;AACqB,QAA9D,sCAAkC,EAAE,EAAE,cAAc,SAAS;AAC1C,QAAnB,gBAAU,SAAS;;IAEvB;;mEAhCyB;IANpB;IACA;IACA;IACA;IACA;IACA;IACoB;AAAzB;;EAAkC;;;;;;;;;;;;;;;;;;AAqClC,kBAAI;AACF;;AAEa,IAAf,wCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,qCAAQ;YAAG;;;;;AC5Cb,kBAAI;AACF;;AAEa,IAAf,oCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAZI,iCAAQ;YAAG;;;;;ACDb,kBAAI;AACF;;AAEa,IAAf,mCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,gCAAQ;YAAG;;;;;ACiCb,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;AACsB,IAAtB;EACF;;MAxCI,8BAAQ;YAAG;;;;;ACzBb,kBAAI;AACF;;AAEa,IAAf,+BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAbI,4BAAQ;YAAG;;;;;ACKb,kBAAI;AACF;;AAEa,IAAf,oCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAhBI,iCAAQ;YAAG;;;;;ACDb,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAbI,mCAAQ;YAAG;;;;;ACIb,kBAAI;AACF;;AAEa,IAAf,8BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAfI,2BAAQ;YAAG;;;;;ACEb,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAfI,mCAAQ;YAAG;;;;;ACEb,kBAAI;AACF;;AAEa,IAAf,qCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAfI,kCAAQ;YAAG","file":"angular_forms.template.ddc.js"}');
  // Exports:
  return {
    src__directives__abstract_form$46template: abstract_form$46template,
    src__directives__ng_control_group$46template: ng_control_group$46template,
    src__directives__validators$46template: validators$46template,
    src__validators$46template: validators$46template$,
    src__model$46template: model$46template,
    src__directives__shared$46template: shared$46template,
    src__directives__select_control_value_accessor$46template: select_control_value_accessor$46template,
    src__directives__control_value_accessor$46template: control_value_accessor$46template,
    src__directives__radio_control_value_accessor$46template: radio_control_value_accessor$46template,
    src__directives__ng_control$46template: ng_control$46template,
    src__directives__abstract_control_directive$46template: abstract_control_directive$46template,
    src__directives__number_value_accessor$46template: number_value_accessor$46template,
    src__directives__normalize_validator$46template: normalize_validator$46template,
    src__directives__default_value_accessor$46template: default_value_accessor$46template,
    src__directives__control_container$46template: control_container$46template,
    src__directives__form_interface$46template: form_interface$46template,
    src__directives__checkbox_value_accessor$46template: checkbox_value_accessor$46template,
    src__directives__ng_control_status$46template: ng_control_status$46template,
    angular_forms$46template: angular_forms$46template,
    src__form_builder$46template: form_builder$46template,
    src__directives$46template: directives$46template,
    src__directives__ng_model$46template: ng_model$46template,
    src__directives__ng_form_model$46template: ng_form_model$46template,
    src__directives__ng_form_control$46template: ng_form_control$46template,
    src__directives__ng_form$46template: ng_form$46template,
    src__directives__ng_control_name$46template: ng_control_name$46template,
    src__directives__memorized_form$46template: memorized_form$46template
  };
});

//# sourceMappingURL=angular_forms.template.ddc.js.map
