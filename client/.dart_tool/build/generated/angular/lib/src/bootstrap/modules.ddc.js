define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/core/change_detection/change_detection.template', 'packages/angular/src/core/application_tokens.template', 'packages/angular/di.template', 'packages/angular/core.template', 'packages/intl/intl', 'packages/logging/logging', 'packages/angular/src/core/application_tokens'], function(dart_sdk, packages__angular__src__core__change_detection__change_detection, packages__angular__src__core__change_detection__change_detection$46template, packages__angular__src__core__application_tokens$46template, packages__angular__di$46template, packages__angular__core$46template, packages__intl__intl, packages__logging__logging, packages__angular__src__core__application_tokens) {
  'use strict';
  const core = dart_sdk.core;
  const js = dart_sdk.js;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const js_util = dart_sdk.js_util;
  const math = dart_sdk.math;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const injector = packages__angular__src__core__change_detection__change_detection.src__di__injector__injector;
  const change_detector_ref = packages__angular__src__core__change_detection__change_detection.src__core__change_detection__change_detector_ref;
  const errors = packages__angular__src__core__change_detection__change_detection.src__di__errors;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const empty = packages__angular__src__core__change_detection__change_detection.src__di__injector__empty;
  const hierarchical = packages__angular__src__core__change_detection__change_detection.src__di__injector__hierarchical;
  const change_detection_util = packages__angular__src__core__change_detection__change_detection.src__core__change_detection__change_detection_util;
  const ng_zone = packages__angular__src__core__change_detection__change_detection.src__core__zone__ng_zone;
  const exception_handler = packages__angular__src__core__change_detection__change_detection.src__facade__exception_handler;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const decorators = packages__angular__src__core__change_detection__change_detection.src__core__di__decorators;
  const opaque_token = packages__angular__src__core__change_detection__change_detection.src__core__di__opaque_token;
  const pipe_transform = packages__angular__src__core__change_detection__change_detection.src__core__change_detection__pipe_transform;
  const lifecycle_hooks = packages__angular__src__core__change_detection__change_detection.src__core__metadata__lifecycle_hooks;
  const default_iterable_differ = packages__angular__src__core__change_detection__change_detection.src__core__change_detection__differs__default_iterable_differ;
  const default_keyvalue_differ = packages__angular__src__core__change_detection__change_detection.src__core__change_detection__differs__default_keyvalue_differ;
  const providers = packages__angular__src__core__change_detection__change_detection.src__di__providers;
  const map = packages__angular__src__core__change_detection__change_detection.src__di__injector__map;
  const runtime = packages__angular__src__core__change_detection__change_detection.src__di__injector__runtime;
  const ng_zone$46template = packages__angular__src__core__change_detection__change_detection$46template.src__core__zone__ng_zone$46template;
  const injector$46template = packages__angular__src__core__change_detection__change_detection$46template.src__di__injector__injector$46template;
  const runtime$46template = packages__angular__src__core__change_detection__change_detection$46template.src__runtime$46template;
  const decorators$46template = packages__angular__src__core__change_detection__change_detection$46template.src__core__di__decorators$46template;
  const change_detection$46template = packages__angular__src__core__change_detection__change_detection$46template.src__core__change_detection__change_detection$46template;
  const di$46template = packages__angular__src__core__change_detection__change_detection$46template.src__core__di$46template;
  const errors$46template = packages__angular__src__core__change_detection__change_detection$46template.src__di__errors$46template;
  const optimizations$46template = packages__angular__src__core__change_detection__change_detection$46template.src__runtime__optimizations$46template;
  const hierarchical$46template = packages__angular__src__core__change_detection__change_detection$46template.src__di__injector__hierarchical$46template;
  const constants$46template = packages__angular__src__core__change_detection__change_detection$46template.src__core__change_detection__constants$46template;
  const providers$46template = packages__angular__src__core__change_detection__change_detection$46template.src__di__providers$46template;
  const exception_handler$46template = packages__angular__src__core__change_detection__change_detection$46template.src__facade__exception_handler$46template;
  const reflector$46template = packages__angular__src__core__change_detection__change_detection$46template.src__di__reflector$46template;
  const component_state$46template = packages__angular__src__core__application_tokens$46template.src__core__change_detection__component_state$46template;
  const application_tokens$46template = packages__angular__src__core__application_tokens$46template.src__core__application_tokens$46template;
  const zone$46template = packages__angular__src__core__application_tokens$46template.src__core__zone$46template;
  const di$46template$ = packages__angular__di$46template.di$46template;
  const core$46template = packages__angular__core$46template.core$46template;
  const intl = packages__intl__intl.intl;
  const logger = packages__logging__logging.src__logger;
  const application_tokens = packages__angular__src__core__application_tokens.src__core__application_tokens;
  const tools = Object.create(dart.library);
  const common_tools = Object.create(dart.library);
  const component_factory = Object.create(dart.library);
  const view_ref = Object.create(dart.library);
  const app_view = Object.create(dart.library);
  const view = Object.create(dart.library);
  const view_type = Object.create(dart.library);
  const view_fragment = Object.create(dart.library);
  const view_container = Object.create(dart.library);
  const view_container_ref = Object.create(dart.library);
  const template_ref = Object.create(dart.library);
  const element_ref = Object.create(dart.library);
  const component_loader = Object.create(dart.library);
  const app_view_utils = Object.create(dart.library);
  const exceptions = Object.create(dart.library);
  const dom_events = Object.create(dart.library);
  const security = Object.create(dart.library);
  const dom_helpers = Object.create(dart.library);
  const element = Object.create(dart.library);
  const style_encapsulation = Object.create(dart.library);
  const host$ = Object.create(dart.library);
  const application_ref = Object.create(dart.library);
  const testability$ = Object.create(dart.library);
  const exceptions$46template = Object.create(dart.library);
  const testability$46template = Object.create(dart.library);
  const view_container_ref$46template = Object.create(dart.library);
  const view_ref$46template = Object.create(dart.library);
  const template_ref$46template = Object.create(dart.library);
  const view_container$46template = Object.create(dart.library);
  const view_type$46template = Object.create(dart.library);
  const element_ref$46template = Object.create(dart.library);
  const component_loader$46template = Object.create(dart.library);
  const component_factory$46template = Object.create(dart.library);
  const app_view$46template = Object.create(dart.library);
  const view$46template = Object.create(dart.library);
  const view_fragment$46template = Object.create(dart.library);
  const dom_helpers$46template = Object.create(dart.library);
  const element$46template = Object.create(dart.library);
  const style_encapsulation$46template = Object.create(dart.library);
  const app_view_utils$46template = Object.create(dart.library);
  const dom_events$46template = Object.create(dart.library);
  const security$46template = Object.create(dart.library);
  const host$46template = Object.create(dart.library);
  const ng_switch = Object.create(dart.library);
  const linker = Object.create(dart.library);
  const dynamic_component_loader = Object.create(dart.library);
  const component_resolver = Object.create(dart.library);
  const dom_sanitization_service_impl$46template = Object.create(dart.library);
  const url_sanitizer$46template = Object.create(dart.library);
  const url_sanitizer = Object.create(dart.library);
  const style_sanitizer$46template = Object.create(dart.library);
  const style_sanitizer = Object.create(dart.library);
  const html_sanitizer$46template = Object.create(dart.library);
  const html_sanitizer = Object.create(dart.library);
  const dom_sanitization_service$46template = Object.create(dart.library);
  const dom_sanitization_service = Object.create(dart.library);
  const dom_sanitization_service_impl = Object.create(dart.library);
  const js_api = Object.create(dart.library);
  const pipes = Object.create(dart.library);
  const uppercase_pipe = Object.create(dart.library);
  const invalid_pipe_argument_exception = Object.create(dart.library);
  const slice_pipe = Object.create(dart.library);
  const replace_pipe = Object.create(dart.library);
  const number_pipe = Object.create(dart.library);
  const lowercase_pipe = Object.create(dart.library);
  const json_pipe = Object.create(dart.library);
  const date_pipe = Object.create(dart.library);
  const common_pipes = Object.create(dart.library);
  const async_pipe = Object.create(dart.library);
  const ng_class = Object.create(dart.library);
  const exceptions$46template$ = Object.create(dart.library);
  const exceptions$ = Object.create(dart.library);
  const modules$46template = Object.create(dart.library);
  const modules = Object.create(dart.library);
  const dynamic_component_loader$46template = Object.create(dart.library);
  const component_resolver$46template = Object.create(dart.library);
  const application_ref$46template = Object.create(dart.library);
  const app_host = Object.create(dart.library);
  const testability = Object.create(dart.library);
  const ng_template_outlet = Object.create(dart.library);
  const core_directives = Object.create(dart.library);
  const ng_style = Object.create(dart.library);
  const ng_if = Object.create(dart.library);
  const ng_for = Object.create(dart.library);
  const run = Object.create(dart.library);
  const common_directives = Object.create(dart.library);
  const directives = Object.create(dart.library);
  const $console = dartx.console;
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $_set = dartx._set;
  const $indexOf = dartx.indexOf;
  const $isNotEmpty = dartx.isNotEmpty;
  const $containsKey = dartx.containsKey;
  const $append = dartx.append;
  const $_equals = dartx._equals;
  const $isEmpty = dartx.isEmpty;
  const $addAll = dartx.addAll;
  const $removeAt = dartx.removeAt;
  const $insert = dartx.insert;
  const $addEventListener = dartx.addEventListener;
  const $contains = dartx.contains;
  const $toLowerCase = dartx.toLowerCase;
  const $split = dartx.split;
  const $removeLast = dartx.removeLast;
  const $keys = dartx.keys;
  const $remove = dartx.remove;
  const $classes = dartx.classes;
  const $removeAttribute = dartx.removeAttribute;
  const $removeAttributeNS = dartx.removeAttributeNS;
  const $setAttributeNS = dartx.setAttributeNS;
  const $setAttribute = dartx.setAttribute;
  const $createElement = dartx.createElement;
  const $nextNode = dartx.nextNode;
  const $join = dartx.join;
  const $head = dartx.head;
  const $text = dartx.text;
  const $replaceAll = dartx.replaceAll;
  const $clear = dartx.clear;
  const $replaceWith = dartx.replaceWith;
  const $values = dartx.values;
  const $toList = dartx.toList;
  const $codeUnitAt = dartx.codeUnitAt;
  const $trim = dartx.trim;
  const $innerHtml = dartx.innerHtml;
  const $children = dartx.children;
  const $toString = dartx.toString;
  const $toUpperCase = dartx.toUpperCase;
  const $substring = dartx.substring;
  const $sublist = dartx.sublist;
  const $replaceAllMapped = dartx.replaceAllMapped;
  const $replaceFirst = dartx.replaceFirst;
  const $forEach = dartx.forEach;
  const $noSuchMethod = dartx.noSuchMethod;
  const $parent = dartx.parent;
  const $map = dartx.map;
  const $setProperty = dartx.setProperty;
  const $isEven = dartx.isEven;
  const $isOdd = dartx.isOdd;
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [], [dart.dynamic])))();
  let IdentityMapOfString$dynamicToNull = () => (IdentityMapOfString$dynamicToNull = dart.constFn(_js_helper.IdentityMap$(core.String, dynamicToNull())))();
  let MapOfString$dynamicToNull = () => (MapOfString$dynamicToNull = dart.constFn(core.Map$(core.String, dynamicToNull())))();
  let IdentityMapOfString$MapOfString$dynamicToNull = () => (IdentityMapOfString$MapOfString$dynamicToNull = dart.constFn(_js_helper.IdentityMap$(core.String, MapOfString$dynamicToNull())))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfVoidTovoid = () => (JSArrayOfVoidTovoid = dart.constFn(_interceptors.JSArray$(VoidTovoid())))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let JSArrayOfFutureOfvoid = () => (JSArrayOfFutureOfvoid = dart.constFn(_interceptors.JSArray$(FutureOfvoid())))();
  let ListOfvoid = () => (ListOfvoid = dart.constFn(core.List$(dart.void)))();
  let ListOfvoidToNull = () => (ListOfvoidToNull = dart.constFn(dart.fnType(core.Null, [ListOfvoid()])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let AppViewOfObject = () => (AppViewOfObject = dart.constFn(app_view.AppView$(core.Object)))();
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  let JSArrayOfAppViewOfObject = () => (JSArrayOfAppViewOfObject = dart.constFn(_interceptors.JSArray$(AppViewOfObject())))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  let IdentityMapOfString$_ParsedEvent = () => (IdentityMapOfString$_ParsedEvent = dart.constFn(_js_helper.IdentityMap$(core.String, dom_events._ParsedEvent)))();
  let KeyboardEventTobool = () => (KeyboardEventTobool = dart.constFn(dart.fnType(core.bool, [html.KeyboardEvent])))();
  let IdentityMapOfString$KeyboardEventTobool = () => (IdentityMapOfString$KeyboardEventTobool = dart.constFn(_js_helper.IdentityMap$(core.String, KeyboardEventTobool())))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfChangeDetectorRef = () => (JSArrayOfChangeDetectorRef = dart.constFn(_interceptors.JSArray$(change_detector_ref.ChangeDetectorRef)))();
  let AppViewOfvoidAndElementTovoid = () => (AppViewOfvoidAndElementTovoid = dart.constFn(dart.fnType(dart.void, [AppViewOfvoid(), html.Element])))();
  let JSArrayOfAppViewOfvoidAndElementTovoid = () => (JSArrayOfAppViewOfvoidAndElementTovoid = dart.constFn(_interceptors.JSArray$(AppViewOfvoidAndElementTovoid())))();
  let JSArrayOfAppViewOfvoid = () => (JSArrayOfAppViewOfvoid = dart.constFn(_interceptors.JSArray$(AppViewOfvoid())))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let FutureOfObject = () => (FutureOfObject = dart.constFn(async.Future$(core.Object)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let ComponentRefOfvoid = () => (ComponentRefOfvoid = dart.constFn(component_factory.ComponentRef$(dart.void)))();
  let JSArrayOfComponentRefOfvoid = () => (JSArrayOfComponentRefOfvoid = dart.constFn(_interceptors.JSArray$(ComponentRefOfvoid())))();
  let NgZoneErrorToNull = () => (NgZoneErrorToNull = dart.constFn(dart.fnType(core.Null, [ng_zone.NgZoneError])))();
  let voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  let JSArrayOfFunction = () => (JSArrayOfFunction = dart.constFn(_interceptors.JSArray$(core.Function)))();
  let LinkedMapOfdynamic$Testability = () => (LinkedMapOfdynamic$Testability = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, testability$.Testability)))();
  let VoidToComponentLoader = () => (VoidToComponentLoader = dart.constFn(dart.fnType(component_loader.ComponentLoader, [])))();
  let StringAndSanitizationServiceAndEventManagerToAppViewUtils = () => (StringAndSanitizationServiceAndEventManagerToAppViewUtils = dart.constFn(dart.fnType(app_view_utils.AppViewUtils, [core.String, security.SanitizationService, dom_events.EventManager])))();
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(opaque_token.OpaqueToken$(core.String)))();
  let NgZoneToEventManager = () => (NgZoneToEventManager = dart.constFn(dart.fnType(dom_events.EventManager, [ng_zone.NgZone])))();
  let ListOfSwitchView = () => (ListOfSwitchView = dart.constFn(core.List$(ng_switch.SwitchView)))();
  let LinkedMapOfdynamic$ListOfSwitchView = () => (LinkedMapOfdynamic$ListOfSwitchView = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, ListOfSwitchView())))();
  let JSArrayOfSwitchView = () => (JSArrayOfSwitchView = dart.constFn(_interceptors.JSArray$(ng_switch.SwitchView)))();
  let ComponentFactoryOfObject = () => (ComponentFactoryOfObject = dart.constFn(component_factory.ComponentFactory$(core.Object)))();
  let FutureOfComponentFactoryOfObject = () => (FutureOfComponentFactoryOfObject = dart.constFn(async.Future$(ComponentFactoryOfObject())))();
  let VoidToDomSanitizationServiceImpl = () => (VoidToDomSanitizationServiceImpl = dart.constFn(dart.fnType(dom_sanitization_service_impl.DomSanitizationServiceImpl, [])))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let dynamicTobottom = () => (dynamicTobottom = dart.constFn(dart.fnType(dart.bottom, [dart.dynamic])))();
  let ObjectTovoid = () => (ObjectTovoid = dart.constFn(dart.fnType(dart.void, [core.Object])))();
  let StreamOfObject = () => (StreamOfObject = dart.constFn(async.Stream$(core.Object)))();
  let IterableOfObject = () => (IterableOfObject = dart.constFn(core.Iterable$(core.Object)))();
  let MapOfObject$Object = () => (MapOfObject$Object = dart.constFn(core.Map$(core.Object, core.Object)))();
  let KeyValueChangeRecordToNull = () => (KeyValueChangeRecordToNull = dart.constFn(dart.fnType(core.Null, [default_keyvalue_differ.KeyValueChangeRecord])))();
  let CollectionChangeRecordToNull = () => (CollectionChangeRecordToNull = dart.constFn(dart.fnType(core.Null, [default_iterable_differ.CollectionChangeRecord])))();
  let ObjectAndObjectToNull = () => (ObjectAndObjectToNull = dart.constFn(dart.fnType(core.Null, [core.Object, core.Object])))();
  let VoidToBrowserExceptionHandler = () => (VoidToBrowserExceptionHandler = dart.constFn(dart.fnType(exceptions$.BrowserExceptionHandler, [])))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let InjectorToInjector = () => (InjectorToInjector = dart.constFn(dart.fnType(injector.Injector, [], [injector.Injector])))();
  let VoidToNgZone = () => (VoidToNgZone = dart.constFn(dart.fnType(ng_zone.NgZone, [])))();
  let NgZoneAndInjectorToApplicationRef = () => (NgZoneAndInjectorToApplicationRef = dart.constFn(dart.fnType(application_ref.ApplicationRef, [ng_zone.NgZone, injector.Injector])))();
  let ComponentLoaderToSlowComponentLoader = () => (ComponentLoaderToSlowComponentLoader = dart.constFn(dart.fnType(dynamic_component_loader.SlowComponentLoader, [component_loader.ComponentLoader])))();
  let LinkedMapOfObject$Object = () => (LinkedMapOfObject$Object = dart.constFn(_js_helper.LinkedMap$(core.Object, core.Object)))();
  let ElementAndboolTodynamic = () => (ElementAndboolTodynamic = dart.constFn(dart.fnType(dart.dynamic, [html.Element], [core.bool])))();
  let VoidToListOfObject = () => (VoidToListOfObject = dart.constFn(dart.fnType(ListOfObject(), [])))();
  let dynamicToNull$ = () => (dynamicToNull$ = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let ElementToJsTestability = () => (ElementToJsTestability = dart.constFn(dart.fnType(dart.anonymousJSType("JsTestability"), [html.Element])))();
  let boolTovoid = () => (boolTovoid = dart.constFn(dart.fnType(dart.void, [core.bool])))();
  let FnTovoid = () => (FnTovoid = dart.constFn(dart.fnType(dart.void, [boolTovoid()])))();
  let ListOfJsTestability = () => (ListOfJsTestability = dart.constFn(core.List$(dart.anonymousJSType("JsTestability"))))();
  let VoidToListOfJsTestability = () => (VoidToListOfJsTestability = dart.constFn(dart.fnType(ListOfJsTestability(), [])))();
  let TestabilityToJsTestability = () => (TestabilityToJsTestability = dart.constFn(dart.fnType(dart.anonymousJSType("JsTestability"), [testability$.Testability])))();
  let JSArrayOf_RecordViewTuple = () => (JSArrayOf_RecordViewTuple = dart.constFn(_interceptors.JSArray$(ng_for._RecordViewTuple)))();
  let CollectionChangeRecordAndintAndintToNull = () => (CollectionChangeRecordAndintAndintToNull = dart.constFn(dart.fnType(core.Null, [default_iterable_differ.CollectionChangeRecord, core.int, core.int])))();
  let VoidToApplicationRef = () => (VoidToApplicationRef = dart.constFn(dart.fnType(application_ref.ApplicationRef, [])))();
  let VoidToAppViewUtils = () => (VoidToAppViewUtils = dart.constFn(dart.fnType(app_view_utils.AppViewUtils, [])))();
  let VoidToTestability = () => (VoidToTestability = dart.constFn(dart.fnType(testability$.Testability, [])))();
  let VoidToObject = () => (VoidToObject = dart.constFn(dart.fnType(core.Object, [])))();
  let LinkedMapOfObject$VoidToObject = () => (LinkedMapOfObject$VoidToObject = dart.constFn(_js_helper.LinkedMap$(core.Object, VoidToObject())))();
  let VoidToInjector = () => (VoidToInjector = dart.constFn(dart.fnType(injector.Injector, [])))();
  let InjectorToReflectiveInjector = () => (InjectorToReflectiveInjector = dart.constFn(dart.fnType(runtime.ReflectiveInjector, [], [injector.Injector])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], core.Object);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: core.Object.prototype
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: view_type.ViewType.prototype,
        [_name$]: "ViewType.host",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: view_type.ViewType.prototype,
        [_name$]: "ViewType.component",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: view_type.ViewType.prototype,
        [_name$]: "ViewType.embedded",
        index: 2
      });
    },
    get C5() {
      return C5 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], view_type.ViewType);
    },
    get C6() {
      return C6 = dart.constList([], core.Null);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: empty.EmptyInjector.prototype,
        [HierarchicalInjector_parent]: null
      });
    },
    get C8() {
      return C8 = dart.constMap(core.int, core.String, [8, "backspace", 9, "tab", 12, "clear", 13, "enter", 16, "shift", 17, "control", 18, "alt", 19, "pause", 20, "capslock", 27, "escape", 32, "space", 33, "pageup", 34, "pagedown", 35, "end", 36, "home", 37, "arrowleft", 38, "arrowup", 39, "arrowright", 40, "arrowdown", 45, "insert", 46, "delete", 65, "a", 66, "b", 67, "c", 68, "d", 69, "e", 70, "f", 71, "g", 72, "h", 73, "i", 74, "j", 75, "k", 76, "l", 77, "m", 78, "n", 79, "o", 80, "p", 81, "q", 82, "r", 83, "s", 84, "t", 85, "u", 86, "v", 87, "w", 88, "x", 89, "y", 90, "z", 91, "os", 93, "contextmenu", 96, "0", 97, "1", 98, "2", 99, "3", 100, "4", 101, "5", 102, "6", 103, "7", 104, "8", 105, "9", 106, "*", 107, "+", 109, "-", 110, "dot", 111, "/", 112, "f1", 113, "f2", 114, "f3", 115, "f4", 116, "f5", 117, "f6", 118, "f7", 119, "f8", 120, "f9", 121, "f10", 122, "f11", 123, "f12", 144, "numlock", 145, "scrolllock"]);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: security.TemplateSecurityContext.prototype,
        [_name$0]: "TemplateSecurityContext.none",
        index: 0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: security.TemplateSecurityContext.prototype,
        [_name$0]: "TemplateSecurityContext.html",
        index: 1
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: security.TemplateSecurityContext.prototype,
        [_name$0]: "TemplateSecurityContext.style",
        index: 2
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: security.TemplateSecurityContext.prototype,
        [_name$0]: "TemplateSecurityContext.url",
        index: 3
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: security.TemplateSecurityContext.prototype,
        [_name$0]: "TemplateSecurityContext.resourceUrl",
        index: 4
      });
    },
    get C14() {
      return C14 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], security.TemplateSecurityContext);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: OpaqueTokenOfString().prototype,
        [OpaqueToken__uniqueName]: "APP_ID"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: decorators.Inject.prototype,
        [Inject_token]: C18 || CT.C18
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], core.Object);
    },
    get C20() {
      return C20 = dart.wrapType(security.SanitizationService);
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], core.Object);
    },
    get C22() {
      return C22 = dart.wrapType(dom_events.EventManager);
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], core.Object);
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C19 || CT.C19, C21 || CT.C21], ListOfObject());
    },
    get C25() {
      return C25 = dart.wrapType(ng_zone.NgZone);
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], core.Object);
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], ListOfObject());
    },
    get C26() {
      return C26 = dart.const({
        __proto__: dom_sanitization_service_impl.DomSanitizationServiceImpl.prototype
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: number_pipe._NumberFormatStyle.prototype,
        [_name$1]: "_NumberFormatStyle.Decimal",
        index: 0
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: number_pipe._NumberFormatStyle.prototype,
        [_name$1]: "_NumberFormatStyle.Percent",
        index: 1
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: number_pipe._NumberFormatStyle.prototype,
        [_name$1]: "_NumberFormatStyle.Currency",
        index: 2
      });
    },
    get C30() {
      return C30 = dart.constList([C27 || CT.C27, C28 || CT.C28, C29 || CT.C29], number_pipe._NumberFormatStyle);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: convert.JsonEncoder.prototype,
        [JsonEncoder__toEncodable]: null,
        [JsonEncoder_indent]: "  "
      });
    },
    get C33() {
      return C33 = dart.wrapType(async_pipe.AsyncPipe);
    },
    get C34() {
      return C34 = dart.wrapType(uppercase_pipe.UpperCasePipe);
    },
    get C35() {
      return C35 = dart.wrapType(lowercase_pipe.LowerCasePipe);
    },
    get C36() {
      return C36 = dart.wrapType(json_pipe.JsonPipe);
    },
    get C37() {
      return C37 = dart.wrapType(slice_pipe.SlicePipe);
    },
    get C38() {
      return C38 = dart.wrapType(number_pipe.DecimalPipe);
    },
    get C39() {
      return C39 = dart.wrapType(number_pipe.PercentPipe);
    },
    get C40() {
      return C40 = dart.wrapType(number_pipe.CurrencyPipe);
    },
    get C41() {
      return C41 = dart.wrapType(date_pipe.DatePipe);
    },
    get C42() {
      return C42 = dart.wrapType(replace_pipe.ReplacePipe);
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34, C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42], core.Type);
    },
    get C43() {
      return C43 = dart.const(new _js_helper.PrivateSymbol.new('_logger', _logger));
    },
    get C44() {
      return C44 = dart.const(new _js_helper.PrivateSymbol.new('_loader', _loader$0));
    },
    get C47() {
      return C47 = dart.wrapType(exceptions$.BrowserExceptionHandler);
    },
    get C48() {
      return C48 = dart.wrapType(exception_handler.ExceptionHandler);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C47 || CT.C47,
        [Provider_token]: C48 || CT.C48
      });
    },
    get C50() {
      return C50 = dart.wrapType(dom_sanitization_service.DomSanitizationService);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: C50 || CT.C50,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C20 || CT.C20
      });
    },
    get C52() {
      return C52 = dart.wrapType(dom_sanitization_service_impl.DomSanitizationServiceImpl);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C52 || CT.C52,
        [Provider_token]: C50 || CT.C50
      });
    },
    get C54() {
      return C54 = dart.fn(modules.createRandomAppId, VoidToString());
    },
    get C53() {
      return C53 = dart.const({
        __proto__: providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: C0 || CT.C0,
        [Provider_useFactory]: C54 || CT.C54,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C18 || CT.C18
      });
    },
    get C56() {
      return C56 = dart.wrapType(component_loader.ComponentLoader);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C56 || CT.C56
      });
    },
    get C58() {
      return C58 = dart.wrapType(modules.ThrowingSlowComponentLoader);
    },
    get C59() {
      return C59 = dart.wrapType(dynamic_component_loader.SlowComponentLoader);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C58 || CT.C58,
        [Provider_token]: C59 || CT.C59
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C49 || CT.C49, C51 || CT.C51, C53 || CT.C53, C55 || CT.C55, C57 || CT.C57], core.Object);
    },
    get C60() {
      return C60 = dart.fn(modules$46template.minimalApp$Injector, InjectorToInjector());
    },
    get C62() {
      return C62 = dart.const({
        __proto__: providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C22 || CT.C22
      });
    },
    get C64() {
      return C64 = dart.fn(modules.createNgZone, VoidToNgZone());
    },
    get C63() {
      return C63 = dart.const({
        __proto__: providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: C0 || CT.C0,
        [Provider_useFactory]: C64 || CT.C64,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C25 || CT.C25
      });
    },
    get C67() {
      return C67 = dart.wrapType(injector.Injector);
    },
    get C66() {
      return C66 = dart.constList([C25 || CT.C25, C67 || CT.C67], core.Object);
    },
    get C68() {
      return C68 = dart.fn(application_ref.internalCreateApplicationRef, NgZoneAndInjectorToApplicationRef());
    },
    get C69() {
      return C69 = dart.wrapType(application_ref.ApplicationRef);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: C66 || CT.C66,
        [Provider_useFactory]: C68 || CT.C68,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C69 || CT.C69
      });
    },
    get C71() {
      return C71 = dart.wrapType(app_view_utils.AppViewUtils);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C71 || CT.C71
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: null,
        [Provider_token]: C59 || CT.C59
      });
    },
    get C74() {
      return C74 = dart.wrapType(testability$.Testability);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: providers.Provider.prototype,
        [Provider_multi]: false,
        [Provider_deps]: null,
        [Provider_useFactory]: null,
        [Provider_useExisting]: null,
        [Provider_useValue]: "__noValueProvided__",
        [Provider_useClass]: C74 || CT.C74,
        [Provider_token]: C74 || CT.C74
      });
    },
    get C61() {
      return C61 = dart.constList([C45 || CT.C45, C62 || CT.C62, C63 || CT.C63, C65 || CT.C65, C70 || CT.C70, C72 || CT.C72, C73 || CT.C73], core.Object);
    },
    get C76() {
      return C76 = dart.constList([C56 || CT.C56], core.Object);
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76], ListOfObject());
    },
    get C78() {
      return C78 = dart.wrapType(ng_class.NgClass);
    },
    get C79() {
      return C79 = dart.wrapType(ng_for.NgFor);
    },
    get C80() {
      return C80 = dart.wrapType(ng_if.NgIf);
    },
    get C81() {
      return C81 = dart.wrapType(ng_template_outlet.NgTemplateOutlet);
    },
    get C82() {
      return C82 = dart.wrapType(ng_style.NgStyle);
    },
    get C83() {
      return C83 = dart.wrapType(ng_switch.NgSwitch);
    },
    get C84() {
      return C84 = dart.wrapType(ng_switch.NgSwitchWhen);
    },
    get C85() {
      return C85 = dart.wrapType(ng_switch.NgSwitchDefault);
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79, C80 || CT.C80, C81 || CT.C81, C82 || CT.C82, C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], core.Type);
    },
    get C86() {
      return C86 = dart.fn(run._identityInjector, InjectorToInjector());
    }
  });
  tools.enableDebugTools = function enableDebugTools(ref) {
    let tools = new common_tools.AngularTools.new(ref);
    js.context._set("ng", js.JsObject.jsify(new (IdentityMapOfString$MapOfString$dynamicToNull()).from(["profiler", new (IdentityMapOfString$dynamicToNull()).from(["timeChangeDetection", dart.fn(config => {
          if (config === void 0) config = null;
          tools.profiler.timeChangeDetection(config);
        }, dynamicToNull())])])));
  };
  tools.disableDebugTools = function disableDebugTools() {
    js.context.deleteProperty("ng");
  };
  const msPerTick$ = dart.privateName(common_tools, "ChangeDetectionPerfRecord.msPerTick");
  const numTicks$ = dart.privateName(common_tools, "ChangeDetectionPerfRecord.numTicks");
  common_tools.ChangeDetectionPerfRecord = class ChangeDetectionPerfRecord extends core.Object {
    get msPerTick() {
      return this[msPerTick$];
    }
    set msPerTick(value) {
      this[msPerTick$] = value;
    }
    get numTicks() {
      return this[numTicks$];
    }
    set numTicks(value) {
      super.numTicks = value;
    }
  };
  (common_tools.ChangeDetectionPerfRecord.new = function(msPerTick, numTicks) {
    this[msPerTick$] = msPerTick;
    this[numTicks$] = numTicks;
    ;
  }).prototype = common_tools.ChangeDetectionPerfRecord.prototype;
  dart.addTypeTests(common_tools.ChangeDetectionPerfRecord);
  dart.setLibraryUri(common_tools.ChangeDetectionPerfRecord, "package:angular/src/platform/browser/tools/common_tools.dart");
  dart.setFieldSignature(common_tools.ChangeDetectionPerfRecord, () => ({
    __proto__: dart.getFields(common_tools.ChangeDetectionPerfRecord.__proto__),
    msPerTick: dart.fieldType(core.num),
    numTicks: dart.finalFieldType(core.int)
  }));
  const profiler = dart.privateName(common_tools, "AngularTools.profiler");
  common_tools.AngularTools = class AngularTools extends core.Object {
    get profiler() {
      return this[profiler];
    }
    set profiler(value) {
      super.profiler = value;
    }
  };
  (common_tools.AngularTools.new = function(ref) {
    this[profiler] = new common_tools.AngularProfiler.new(ref);
    ;
  }).prototype = common_tools.AngularTools.prototype;
  dart.addTypeTests(common_tools.AngularTools);
  dart.setLibraryUri(common_tools.AngularTools, "package:angular/src/platform/browser/tools/common_tools.dart");
  dart.setFieldSignature(common_tools.AngularTools, () => ({
    __proto__: dart.getFields(common_tools.AngularTools.__proto__),
    profiler: dart.finalFieldType(common_tools.AngularProfiler)
  }));
  const appRef = dart.privateName(common_tools, "AngularProfiler.appRef");
  common_tools.AngularProfiler = class AngularProfiler extends core.Object {
    get appRef() {
      return this[appRef];
    }
    set appRef(value) {
      super.appRef = value;
    }
    timeChangeDetection(config) {
      let record = config != null && dart.dtest(dart.dsend(config, '_get', ["record"]));
      let profileName = "Change Detection";
      let isProfilerAvailable = dart.bind(html.window[$console], 'profile') !== null;
      if (record && isProfilerAvailable) {
        html.window[$console].profile(profileName);
      }
      let perf = html.window.performance;
      let start = perf.now();
      let numTicks = 0;
      while (numTicks < 5 || dart.notNull(perf.now()) - dart.notNull(start) < 500) {
        this.appRef.tick();
        numTicks = numTicks + 1;
      }
      let end = perf.now();
      if (record && isProfilerAvailable) {
        dart.dcall(dart.bind(html.window[$console], 'profileEnd'), [profileName]);
      }
      let msPerTick = (dart.notNull(end) - dart.notNull(start)) / numTicks;
      core.print("ran " + dart.str(numTicks) + " change detection cycles");
      core.print(msPerTick[$toStringAsFixed](2) + " ms per check");
      return new common_tools.ChangeDetectionPerfRecord.new(msPerTick, numTicks);
    }
  };
  (common_tools.AngularProfiler.new = function(ref) {
    this[appRef] = ref.injector.provideType(application_ref.ApplicationRef, dart.wrapType(application_ref.ApplicationRef));
    ;
  }).prototype = common_tools.AngularProfiler.prototype;
  dart.addTypeTests(common_tools.AngularProfiler);
  dart.setMethodSignature(common_tools.AngularProfiler, () => ({
    __proto__: dart.getMethods(common_tools.AngularProfiler.__proto__),
    timeChangeDetection: dart.fnType(common_tools.ChangeDetectionPerfRecord, [dart.dynamic])
  }));
  dart.setLibraryUri(common_tools.AngularProfiler, "package:angular/src/platform/browser/tools/common_tools.dart");
  dart.setFieldSignature(common_tools.AngularProfiler, () => ({
    __proto__: dart.getFields(common_tools.AngularProfiler.__proto__),
    appRef: dart.finalFieldType(application_ref.ApplicationRef)
  }));
  const _nodeIndex$ = dart.privateName(component_factory, "_nodeIndex");
  const _parentView$ = dart.privateName(component_factory, "_parentView");
  const _nativeElement$ = dart.privateName(component_factory, "_nativeElement");
  const _component$ = dart.privateName(component_factory, "_component");
  const _is_ComponentRef_default = Symbol('_is_ComponentRef_default');
  component_factory.ComponentRef$ = dart.generic(C => {
    class ComponentRef extends core.Object {
      get location() {
        return this[_nativeElement$];
      }
      get injector() {
        return this[_parentView$].injector(this[_nodeIndex$]);
      }
      get instance() {
        return this[_component$];
      }
      get hostView() {
        return this[_parentView$];
      }
      get changeDetectorRef() {
        return this[_parentView$];
      }
      destroy() {
        this[_parentView$].destroy();
      }
      onDestroy(callback) {
        this.hostView.onDestroy(callback);
      }
    }
    (ComponentRef.new = function(_nodeIndex, _parentView, _nativeElement, _component) {
      this[_nodeIndex$] = _nodeIndex;
      this[_parentView$] = _parentView;
      this[_nativeElement$] = _nativeElement;
      this[_component$] = _component;
      ;
    }).prototype = ComponentRef.prototype;
    dart.addTypeTests(ComponentRef);
    ComponentRef.prototype[_is_ComponentRef_default] = true;
    dart.setMethodSignature(ComponentRef, () => ({
      __proto__: dart.getMethods(ComponentRef.__proto__),
      destroy: dart.fnType(dart.void, []),
      onDestroy: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
    }));
    dart.setGetterSignature(ComponentRef, () => ({
      __proto__: dart.getGetters(ComponentRef.__proto__),
      location: html.Element,
      injector: injector.Injector,
      instance: C,
      hostView: view_ref.ViewRef,
      changeDetectorRef: change_detector_ref.ChangeDetectorRef
    }));
    dart.setLibraryUri(ComponentRef, "package:angular/src/core/linker/component_factory.dart");
    dart.setFieldSignature(ComponentRef, () => ({
      __proto__: dart.getFields(ComponentRef.__proto__),
      [_parentView$]: dart.finalFieldType(app_view.AppView$(core.Object)),
      [_nodeIndex$]: dart.finalFieldType(core.int),
      [_nativeElement$]: dart.finalFieldType(html.Element),
      [_component$]: dart.finalFieldType(C)
    }));
    return ComponentRef;
  });
  component_factory.ComponentRef = component_factory.ComponentRef$();
  dart.addTypeTests(component_factory.ComponentRef, _is_ComponentRef_default);
  const _viewFactory = dart.privateName(component_factory, "_viewFactory");
  let C0;
  const _is_ComponentFactory_default = Symbol('_is_ComponentFactory_default');
  const selector$ = dart.privateName(component_factory, "ComponentFactory.selector");
  const _viewFactory$ = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  component_factory.ComponentFactory$ = dart.generic(T => {
    class ComponentFactory extends core.Object {
      get selector() {
        return this[selector$];
      }
      set selector(value) {
        super.selector = value;
      }
      get [_viewFactory]() {
        return this[_viewFactory$];
      }
      set [_viewFactory](value) {
        super[_viewFactory] = value;
      }
      get componentType() {
        return dart.wrapType(T);
      }
      create(injector, projectableNodes) {
        let t0;
        if (projectableNodes === void 0) projectableNodes = null;
        let hostView = this[_viewFactory](null, null);
        return hostView.createHostView(injector, (t0 = projectableNodes, t0 == null ? C0 || CT.C0 : t0));
      }
    }
    (ComponentFactory.new = function(selector, _viewFactory) {
      this[selector$] = selector;
      this[_viewFactory$] = _viewFactory;
      ;
    }).prototype = ComponentFactory.prototype;
    dart.addTypeTests(ComponentFactory);
    ComponentFactory.prototype[_is_ComponentFactory_default] = true;
    dart.setMethodSignature(ComponentFactory, () => ({
      __proto__: dart.getMethods(ComponentFactory.__proto__),
      create: dart.fnType(component_factory.ComponentRef$(T), [injector.Injector], [core.List$(core.List$(core.Object))])
    }));
    dart.setGetterSignature(ComponentFactory, () => ({
      __proto__: dart.getGetters(ComponentFactory.__proto__),
      componentType: core.Type
    }));
    dart.setLibraryUri(ComponentFactory, "package:angular/src/core/linker/component_factory.dart");
    dart.setFieldSignature(ComponentFactory, () => ({
      __proto__: dart.getFields(ComponentFactory.__proto__),
      selector: dart.finalFieldType(core.String),
      [_viewFactory]: dart.finalFieldType(dart.fnType(app_view.AppView$(T), [app_view.AppView$(dart.void), core.int]))
    }));
    return ComponentFactory;
  });
  component_factory.ComponentFactory = component_factory.ComponentFactory$();
  dart.addTypeTests(component_factory.ComponentFactory, _is_ComponentFactory_default);
  view_ref.ViewRef = class ViewRef extends core.Object {};
  (view_ref.ViewRef.new = function() {
    ;
  }).prototype = view_ref.ViewRef.prototype;
  dart.addTypeTests(view_ref.ViewRef);
  dart.setLibraryUri(view_ref.ViewRef, "package:angular/src/core/linker/view_ref.dart");
  view_ref.EmbeddedViewRef = class EmbeddedViewRef extends view_ref.ViewRef {};
  (view_ref.EmbeddedViewRef.new = function() {
    ;
  }).prototype = view_ref.EmbeddedViewRef.prototype;
  dart.addTypeTests(view_ref.EmbeddedViewRef);
  dart.setLibraryUri(view_ref.EmbeddedViewRef, "package:angular/src/core/linker/view_ref.dart");
  const _viewContainerElement = dart.privateName(app_view, "_viewContainerElement");
  const _hostInjector = dart.privateName(app_view, "_hostInjector");
  const _onDestroyCallbacks = dart.privateName(app_view, "_onDestroyCallbacks");
  const _skipChangeDetection = dart.privateName(app_view, "_skipChangeDetection");
  const _cdState = dart.privateName(app_view, "_cdState");
  const _cdMode$ = dart.privateName(app_view, "_cdMode");
  const type$ = dart.privateName(app_view, "AppViewData.type");
  const locals = dart.privateName(app_view, "AppViewData.locals");
  const destroyed = dart.privateName(app_view, "AppViewData.destroyed");
  const projectedNodes = dart.privateName(app_view, "AppViewData.projectedNodes");
  const subscriptions = dart.privateName(app_view, "AppViewData.subscriptions");
  const rootFragment = dart.privateName(app_view, "AppViewData.rootFragment");
  const parentIndex$ = dart.privateName(app_view, "AppViewData.parentIndex");
  app_view.AppViewData = class AppViewData extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get locals() {
      return this[locals];
    }
    set locals(value) {
      super.locals = value;
    }
    get destroyed() {
      return this[destroyed];
    }
    set destroyed(value) {
      this[destroyed] = value;
    }
    get projectedNodes() {
      return this[projectedNodes];
    }
    set projectedNodes(value) {
      this[projectedNodes] = value;
    }
    get subscriptions() {
      return this[subscriptions];
    }
    set subscriptions(value) {
      this[subscriptions] = value;
    }
    get rootFragment() {
      return this[rootFragment];
    }
    set rootFragment(value) {
      this[rootFragment] = value;
    }
    get parentIndex() {
      return this[parentIndex$];
    }
    set parentIndex(value) {
      super.parentIndex = value;
    }
    static new(cdMode, type, parentIndex) {
      return new app_view.AppViewData.__(cdMode, type, parentIndex);
    }
    set cdMode(value) {
      if (this[_cdMode$] != value) {
        this[_cdMode$] = value;
        this.updateSkipChangeDetectionFlag();
      }
    }
    set cdState(value) {
      if (this[_cdState] != value) {
        this[_cdState] = value;
        this.updateSkipChangeDetectionFlag();
      }
    }
    updateSkipChangeDetectionFlag() {
      this[_skipChangeDetection] = this[_cdMode$] === 4 || this[_cdMode$] === 2 || this[_cdState] === 2;
    }
    destroy() {
      if (this[_onDestroyCallbacks] != null) {
        for (let i = 0, len = this[_onDestroyCallbacks][$length]; i < dart.notNull(len); i = i + 1) {
          this[_onDestroyCallbacks][$_get](i)();
        }
      }
      if (this.subscriptions == null) return;
      for (let i = 0, len = this.subscriptions[$length]; i < dart.notNull(len); i = i + 1) {
        this.subscriptions[$_get](i).cancel();
      }
    }
    addDestroyCallback(callback) {
      this[_onDestroyCallbacks] == null ? this[_onDestroyCallbacks] = JSArrayOfVoidTovoid().of([]) : null;
      this[_onDestroyCallbacks][$add](callback);
    }
  };
  (app_view.AppViewData.__ = function(_cdMode, type, parentIndex) {
    this[locals] = new (IdentityMapOfString$dynamic()).new();
    this[destroyed] = false;
    this[_viewContainerElement] = null;
    this[projectedNodes] = null;
    this[_hostInjector] = null;
    this[subscriptions] = null;
    this[_onDestroyCallbacks] = null;
    this[rootFragment] = null;
    this[_skipChangeDetection] = false;
    this[_cdState] = 0;
    this[_cdMode$] = _cdMode;
    this[type$] = type;
    this[parentIndex$] = parentIndex;
    ;
  }).prototype = app_view.AppViewData.prototype;
  dart.addTypeTests(app_view.AppViewData);
  dart.setMethodSignature(app_view.AppViewData, () => ({
    __proto__: dart.getMethods(app_view.AppViewData.__proto__),
    updateSkipChangeDetectionFlag: dart.fnType(dart.void, []),
    destroy: dart.fnType(dart.void, []),
    addDestroyCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
  }));
  dart.setSetterSignature(app_view.AppViewData, () => ({
    __proto__: dart.getSetters(app_view.AppViewData.__proto__),
    cdMode: core.int,
    cdState: core.int
  }));
  dart.setLibraryUri(app_view.AppViewData, "package:angular/src/core/linker/app_view.dart");
  dart.setFieldSignature(app_view.AppViewData, () => ({
    __proto__: dart.getFields(app_view.AppViewData.__proto__),
    type: dart.finalFieldType(view_type.ViewType),
    locals: dart.finalFieldType(core.Map$(core.String, dart.dynamic)),
    destroyed: dart.fieldType(core.bool),
    [_viewContainerElement]: dart.fieldType(view_container.ViewContainer),
    projectedNodes: dart.fieldType(core.List$(core.Object)),
    [_hostInjector]: dart.fieldType(injector.Injector),
    subscriptions: dart.fieldType(core.List$(async.StreamSubscription$(dart.void))),
    [_onDestroyCallbacks]: dart.fieldType(core.List$(dart.fnType(dart.void, []))),
    rootFragment: dart.fieldType(view_fragment.ViewFragment),
    parentIndex: dart.finalFieldType(core.int),
    [_cdMode$]: dart.fieldType(core.int),
    [_skipChangeDetection]: dart.fieldType(core.bool),
    [_cdState]: dart.fieldType(core.int)
  }));
  let C1;
  view.View = class View extends core.Object {
    destroyInternal() {
    }
    detectChangesInternal() {
    }
    injectorGetOptional(token, nodeIndex) {
      return this.injectorGet(token, nodeIndex, null);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      return notFoundResult;
    }
  };
  (view.View.new = function() {
    ;
  }).prototype = view.View.prototype;
  dart.addTypeTests(view.View);
  dart.setMethodSignature(view.View, () => ({
    __proto__: dart.getMethods(view.View.__proto__),
    destroyInternal: dart.fnType(dart.void, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    injectorGetOptional: dart.fnType(core.Object, [core.Object, core.int]),
    injectorGetInternal: dart.fnType(core.Object, [core.Object, core.int, core.Object])
  }));
  dart.setLibraryUri(view.View, "package:angular/src/core/linker/views/view.dart");
  const _is_AppView_default = Symbol('_is_AppView_default');
  const rootEl = dart.privateName(app_view, "AppView.rootEl");
  const ctx = dart.privateName(app_view, "AppView.ctx");
  const componentStyles = dart.privateName(app_view, "AppView.componentStyles");
  const parentView$ = dart.privateName(app_view, "AppView.parentView");
  const viewData = dart.privateName(app_view, "AppView.viewData");
  app_view.AppView$ = dart.generic(T => {
    class AppView extends view.View {
      get rootEl() {
        return this[rootEl];
      }
      set rootEl(value) {
        this[rootEl] = value;
      }
      get ctx() {
        return this[ctx];
      }
      set ctx(value) {
        this[ctx] = T._check(value);
      }
      get componentStyles() {
        return this[componentStyles];
      }
      set componentStyles(value) {
        this[componentStyles] = value;
      }
      get parentView() {
        return this[parentView$];
      }
      set parentView(value) {
        super.parentView = value;
      }
      get viewData() {
        return this[viewData];
      }
      set viewData(value) {
        super.viewData = value;
      }
      set cdMode(value) {
        this.viewData.cdMode = value;
      }
      get cdMode() {
        return this.viewData[_cdMode$];
      }
      set cdState(value) {
        this.viewData.cdState = value;
      }
      get cdState() {
        return this.viewData[_cdState];
      }
      get destroyed() {
        return this.viewData.destroyed;
      }
      get locals() {
        return this.viewData.locals;
      }
      get projectedNodes() {
        return this.viewData.projectedNodes;
      }
      get rootNodes() {
        return this.flatRootNodes;
      }
      checkNoChanges() {
        app_view_utils.AppViewUtils.enterThrowOnChanges();
        this.detectChanges();
        app_view_utils.AppViewUtils.exitThrowOnChanges();
      }
      detach() {
        this.cdMode = 4;
      }
      markForCheck() {
        this.markPathToRootAsCheckOnce();
      }
      onDestroy(callback) {
        this.viewData.addDestroyCallback(callback);
      }
      reattach() {
        this.cdMode = 3;
        this.markForCheck();
      }
      setLocal(name, value) {
        this.locals[$_set](name, value);
      }
      create(context, projectedNodes) {
        T._check(context);
        this.ctx = context;
        this.viewData.projectedNodes = projectedNodes;
        return this.build();
      }
      create0(context) {
        T._check(context);
        return this.create(context, C0 || CT.C0);
      }
      createHostView(hostInjector, projectedNodes) {
        this.viewData[_hostInjector] = hostInjector;
        this.viewData.projectedNodes = projectedNodes;
        return this.build();
      }
      build() {
        return null;
      }
      init0() {
        this.init(C0 || CT.C0, null);
      }
      init1(rootElement) {
        this.init(JSArrayOfObject().of([rootElement]), null);
      }
      init(rootNodesOrViewContainers, subscriptions) {
        let t0;
        t0 = this.viewData;
        t0.rootFragment = view_fragment.ViewFragment.new(rootNodesOrViewContainers);
        t0.subscriptions = subscriptions;
        t0;
      }
      attachRootNodesAfter(node) {
        dom_helpers.insertNodesAsSibling(this.flatRootNodes, node);
        dom_helpers.domRootRendererIsDirty = true;
      }
      injectorGet(token, nodeIndex, notFoundValue) {
        if (notFoundValue === void 0) notFoundValue = C1 || CT.C1;
        errors.debugInjectorEnter(token);
        let result = app_view._UndefinedInjectorResult;
        let view = this;
        while (core.identical(result, app_view._UndefinedInjectorResult)) {
          if (nodeIndex != null) {
            result = view.injectorGetInternal(token, nodeIndex, app_view._UndefinedInjectorResult);
          }
          if (core.identical(result, app_view._UndefinedInjectorResult)) {
            let injector = view.viewData[_hostInjector];
            if (injector != null) {
              result = injector.get(token, notFoundValue);
            }
          }
          nodeIndex = view.viewData.parentIndex;
          view = view.parentView;
        }
        errors.debugInjectorLeave(token);
        return result;
      }
      injector(nodeIndex) {
        return new element.ElementInjector.new(this, nodeIndex);
      }
      destroy() {
        let t0;
        let containerElement = this.viewData[_viewContainerElement];
        t0 = containerElement;
        t0 == null ? null : t0.detachView(containerElement.nestedViews[$indexOf](this));
        this.destroyInternalState();
      }
      detachRootNodes() {
        let nodes = this.flatRootNodes;
        dom_helpers.removeNodes(nodes);
        dom_helpers.domRootRendererIsDirty = dart.test(dom_helpers.domRootRendererIsDirty) || dart.test(nodes[$isNotEmpty]);
      }
      destroyInternalState() {
        if (dart.test(this.viewData.destroyed)) {
          return;
        }
        this.viewData.destroyed = true;
        this.viewData.destroy();
        this.destroyInternal();
        this.dirtyParentQueriesInternal();
      }
      get flatRootNodes() {
        return this.viewData.rootFragment.flattenDomNodes();
      }
      get lastRootNode() {
        return this.viewData.rootFragment.findLastDomNode();
      }
      hasLocal(name) {
        return this.locals[$containsKey](name);
      }
      dirtyParentQueriesInternal() {
      }
      detectChanges() {
        if (dart.test(this.viewData[_skipChangeDetection])) {
          return;
        }
        if (dart.test(optimizations.isDevMode) && dart.test(this.viewData.destroyed)) {
          dart.throw(new core.StateError.new("detectChanges"));
        }
        if (dart.test(host$.ChangeDetectionHost.checkForCrashes)) {
          this.detectCrash();
        } else {
          this.detectChangesInternal();
        }
        if (this.viewData[_cdMode$] === 1) {
          this.viewData[_cdMode$] = 2;
          this.viewData[_skipChangeDetection] = true;
        }
        this.cdState = 1;
      }
      detectCrash() {
        try {
          this.detectChangesInternal();
        } catch (e$) {
          let e = dart.getThrown(e$);
          let s = dart.stackTrace(e$);
          host$.ChangeDetectionHost.handleCrash(this, e, s);
        }
      }
      detectHostChanges(firstCheck) {
      }
      markContentChildAsMoved(renderViewContainer) {
        this.dirtyParentQueriesInternal();
      }
      addToContentChildren(renderViewContainer) {
        this.viewData[_viewContainerElement] = renderViewContainer;
        this.dirtyParentQueriesInternal();
      }
      removeFromContentChildren(renderViewContainer) {
        this.dirtyParentQueriesInternal();
        this.viewData[_viewContainerElement] = null;
      }
      markAsCheckOnce() {
        this.cdMode = 1;
      }
      markStateChanged() {
        this.markPathToRootAsCheckOnce();
      }
      markPathToRootAsCheckOnce() {
        let t1;
        let view = this;
        while (view != null) {
          let cdMode = view.cdMode;
          if (cdMode === 4) break;
          if (cdMode === 2) {
            view.cdMode = 1;
          }
          view = dart.equals(view.viewData.type, view_type.ViewType.component) ? view.parentView : (t1 = view.viewData[_viewContainerElement], t1 == null ? null : t1.parentView);
        }
      }
      initComponentStyles() {
        this.componentStyles = this.parentView.componentStyles;
      }
      initViewRoot(hostElement) {
        let styles = this.componentStyles;
        if (dart.test(styles.usesStyleEncapsulation)) {
          dom_helpers.updateClassBinding(hostElement, styles.hostPrefix, true);
        }
        return hostElement;
      }
      addShimC(element) {
        let styles = this.componentStyles;
        if (dart.test(styles.usesStyleEncapsulation)) {
          dom_helpers.updateClassBinding(element, styles.contentPrefix, true);
        }
      }
      addShimE(element) {
        let styles = this.componentStyles;
        if (dart.test(styles.usesStyleEncapsulation)) {
          dom_helpers.updateClassBindingNonHtml(element, styles.contentPrefix, true);
        }
      }
      updateChildClass(element, newClass) {
        let t1;
        let styles = this.componentStyles;
        let shim = styles.usesStyleEncapsulation;
        if (dart.equals(element, this.rootEl)) {
          element.className = dart.test(shim) ? dart.str(newClass) + " " + dart.str(styles.hostPrefix) : newClass;
          if ((t1 = this.parentView, t1 == null ? null : t1.componentStyles) != null) {
            this.parentView.addShimC(element);
          }
        } else {
          element.className = dart.test(shim) ? dart.str(newClass) + " " + dart.str(styles.contentPrefix) : newClass;
        }
      }
      updateChildClassNonHtml(element, newClass) {
        let t1;
        let styles = this.componentStyles;
        let shim = styles.usesStyleEncapsulation;
        if (dart.equals(element, this.rootEl)) {
          dom_helpers.updateAttribute(element, "class", dart.test(shim) ? dart.str(newClass) + " " + dart.str(styles.hostPrefix) : newClass);
          if ((t1 = this.parentView, t1 == null ? null : t1.componentStyles) != null) {
            this.parentView.addShimE(element);
          }
        } else {
          dom_helpers.updateAttribute(element, "class", dart.test(shim) ? dart.str(newClass) + " " + dart.str(styles.contentPrefix) : newClass);
        }
      }
      project(target, index) {
        if (target == null) {
          return;
        }
        let projectedNodesByContentIndex = this.viewData.projectedNodes;
        if (projectedNodesByContentIndex == null || dart.notNull(index) >= dart.notNull(projectedNodesByContentIndex[$length])) {
          return;
        }
        let nodesToProjectIntoTarget = optimizations.unsafeCast(ListOfObject(), projectedNodesByContentIndex[$_get](index));
        if (nodesToProjectIntoTarget == null) {
          return;
        }
        let length = nodesToProjectIntoTarget[$length];
        for (let i = 0; i < dart.notNull(length); i = i + 1) {
          let node = nodesToProjectIntoTarget[$_get](i);
          if (view_container.ViewContainer.is(node)) {
            target[$append](node.nativeElement);
            let nestedViews = node.nestedViews;
            if (nestedViews != null) {
              let length = nestedViews[$length];
              for (let n = 0; n < dart.notNull(length); n = n + 1) {
                nestedViews[$_get](n).viewData.rootFragment.appendDomNodesInto(target);
              }
            }
          } else if (ListOfObject().is(node)) {
            view_fragment.ViewFragment.appendDomNodes(target, node);
          } else {
            target[$append](optimizations.unsafeCast(html.Node, node));
          }
        }
        dom_helpers.domRootRendererIsDirty = true;
      }
      eventHandler0(E, handler) {
        return dart.fn(event => {
          this.markPathToRootAsCheckOnce();
          app_view_utils.appViewUtils.eventManager.zone.runGuarded(handler);
        }, dart.fnType(core.Null, [E]));
      }
      eventHandler1(E, F, handler) {
        if (!(dart.wrapType(E)[$_equals](dart.wrapType(core.Null)) || !dart.wrapType(F)[$_equals](dart.wrapType(core.Null)))) dart.assertFailed("Event handler '" + dart.str(handler) + "' isn't assignable to expected type " + "'(" + dart.str(dart.wrapType(E)) + ") => void'", "org-dartlang-app:///packages/angular/src/core/linker/app_view.dart", 592, 9, "E == Null || F != Null");
        return dart.fn(event => {
          this.markPathToRootAsCheckOnce();
          app_view_utils.appViewUtils.eventManager.zone.runGuarded(dart.fn(() => handler(optimizations.unsafeCast(F, event)), VoidTovoid()));
        }, dart.fnType(core.Null, [E]));
      }
      loadDeferred(loadComponent, loadTemplateLib, viewContainer, templateRef, initializer) {
        if (initializer === void 0) initializer = null;
        let cancelled = false;
        async.Future.wait(dart.void, JSArrayOfFutureOfvoid().of([loadComponent(), loadTemplateLib()])).then(core.Null, dart.fn(_ => {
          if (cancelled) {
            return;
          }
          if (initializer != null) {
            initializer();
          }
          viewContainer.createEmbeddedView(templateRef);
          viewContainer.detectChangesInNestedViews();
        }, ListOfvoidToNull()));
        return dart.fn(() => {
          cancelled = true;
        }, VoidToNull());
      }
    }
    (AppView.new = function(type, parentView, parentIndex, cdMode) {
      this[rootEl] = null;
      this[ctx] = null;
      this[componentStyles] = null;
      this[parentView$] = parentView;
      this[viewData] = app_view.AppViewData.new(cdMode, type, parentIndex);
      ;
    }).prototype = AppView.prototype;
    dart.addTypeTests(AppView);
    AppView.prototype[_is_AppView_default] = true;
    AppView[dart.implements] = () => [change_detector_ref.ChangeDetectorRef, view_ref.EmbeddedViewRef];
    dart.setMethodSignature(AppView, () => ({
      __proto__: dart.getMethods(AppView.__proto__),
      checkNoChanges: dart.fnType(dart.void, []),
      detach: dart.fnType(dart.void, []),
      markForCheck: dart.fnType(dart.void, []),
      onDestroy: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      reattach: dart.fnType(dart.void, []),
      setLocal: dart.fnType(dart.void, [core.String, dart.dynamic]),
      create: dart.fnType(component_factory.ComponentRef$(T), [core.Object, core.List$(core.Object)]),
      create0: dart.fnType(component_factory.ComponentRef$(T), [core.Object]),
      createHostView: dart.fnType(component_factory.ComponentRef$(T), [injector.Injector, core.List$(core.Object)]),
      build: dart.fnType(component_factory.ComponentRef$(T), []),
      init0: dart.fnType(dart.void, []),
      init1: dart.fnType(dart.void, [core.Object]),
      init: dart.fnType(dart.void, [core.List$(core.Object), core.List$(async.StreamSubscription$(dart.void))]),
      attachRootNodesAfter: dart.fnType(dart.void, [html.Node]),
      injectorGet: dart.fnType(core.Object, [core.Object, core.int], [core.Object]),
      injector: dart.fnType(injector.Injector, [core.int]),
      destroy: dart.fnType(dart.void, []),
      detachRootNodes: dart.fnType(dart.void, []),
      destroyInternalState: dart.fnType(dart.void, []),
      hasLocal: dart.fnType(core.bool, [core.String]),
      dirtyParentQueriesInternal: dart.fnType(dart.void, []),
      detectChanges: dart.fnType(dart.void, []),
      detectCrash: dart.fnType(dart.void, []),
      detectHostChanges: dart.fnType(dart.void, [core.bool]),
      markContentChildAsMoved: dart.fnType(dart.void, [view_container.ViewContainer]),
      addToContentChildren: dart.fnType(dart.void, [view_container.ViewContainer]),
      removeFromContentChildren: dart.fnType(dart.void, [view_container.ViewContainer]),
      markAsCheckOnce: dart.fnType(dart.void, []),
      markStateChanged: dart.fnType(dart.void, []),
      markPathToRootAsCheckOnce: dart.fnType(dart.void, []),
      initComponentStyles: dart.fnType(dart.void, []),
      initViewRoot: dart.fnType(html.HtmlElement, [html.HtmlElement]),
      addShimC: dart.fnType(dart.void, [html.HtmlElement]),
      addShimE: dart.fnType(dart.void, [html.Element]),
      updateChildClass: dart.fnType(dart.void, [html.HtmlElement, core.String]),
      updateChildClassNonHtml: dart.fnType(dart.void, [html.Element, core.String]),
      project: dart.fnType(dart.void, [html.Element, core.int]),
      eventHandler0: dart.gFnType(E => [dart.fnType(dart.void, [E]), [dart.fnType(dart.void, [])]]),
      eventHandler1: dart.gFnType((E, F) => [dart.fnType(dart.void, [E]), [dart.fnType(dart.void, [F])]], (E, F) => [dart.dynamic, E]),
      loadDeferred: dart.fnType(dart.fnType(dart.void, []), [dart.fnType(async.Future$(dart.void), []), dart.fnType(async.Future$(dart.void), []), view_container.ViewContainer, template_ref.TemplateRef], [dart.fnType(dart.void, [])])
    }));
    dart.setGetterSignature(AppView, () => ({
      __proto__: dart.getGetters(AppView.__proto__),
      cdMode: core.int,
      cdState: core.int,
      destroyed: core.bool,
      locals: core.Map$(core.String, dart.dynamic),
      projectedNodes: core.List$(core.Object),
      rootNodes: core.List$(html.Node),
      flatRootNodes: core.List$(html.Node),
      lastRootNode: html.Node
    }));
    dart.setSetterSignature(AppView, () => ({
      __proto__: dart.getSetters(AppView.__proto__),
      cdMode: core.int,
      cdState: core.int
    }));
    dart.setLibraryUri(AppView, "package:angular/src/core/linker/app_view.dart");
    dart.setFieldSignature(AppView, () => ({
      __proto__: dart.getFields(AppView.__proto__),
      rootEl: dart.fieldType(html.HtmlElement),
      ctx: dart.fieldType(T),
      componentStyles: dart.fieldType(style_encapsulation.ComponentStyles),
      parentView: dart.finalFieldType(app_view.AppView$(core.Object)),
      viewData: dart.finalFieldType(app_view.AppViewData)
    }));
    return AppView;
  });
  app_view.AppView = app_view.AppView$();
  dart.addTypeTests(app_view.AppView, _is_AppView_default);
  dart.defineLazy(app_view, {
    /*app_view._UndefinedInjectorResult*/get _UndefinedInjectorResult() {
      return C1 || CT.C1;
    }
  });
  const _name$ = dart.privateName(view_type, "_name");
  let C2;
  let C3;
  let C4;
  let C5;
  view_type.ViewType = class ViewType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (view_type.ViewType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = view_type.ViewType.prototype;
  dart.addTypeTests(view_type.ViewType);
  dart.setLibraryUri(view_type.ViewType, "package:angular/src/core/linker/view_type.dart");
  dart.setFieldSignature(view_type.ViewType, () => ({
    __proto__: dart.getFields(view_type.ViewType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(view_type.ViewType, ['toString']);
  view_type.ViewType.host = C2 || CT.C2;
  view_type.ViewType.component = C3 || CT.C3;
  view_type.ViewType.embedded = C4 || CT.C4;
  view_type.ViewType.values = C5 || CT.C5;
  const _nodesOrViewContainers = dart.privateName(view_fragment, "_nodesOrViewContainers");
  const _nodesOrViewContainers$ = dart.privateName(view_fragment, "ViewFragment._nodesOrViewContainers");
  view_fragment.ViewFragment = class ViewFragment extends core.Object {
    get [_nodesOrViewContainers]() {
      return this[_nodesOrViewContainers$];
    }
    set [_nodesOrViewContainers](value) {
      super[_nodesOrViewContainers] = value;
    }
    static new(nodesOrViewContainers) {
      return new view_fragment.ViewFragment.__(nodesOrViewContainers);
    }
    appendDomNodesInto(target) {
      view_fragment.ViewFragment.appendDomNodes(target, this[_nodesOrViewContainers]);
    }
    static appendDomNodes(target, nodesOrViewContainers) {
      let nodes = nodesOrViewContainers;
      let length = nodes[$length];
      for (let i = 0; i < dart.notNull(length); i = i + 1) {
        let node = nodes[$_get](i);
        if (view_container.ViewContainer.is(node)) {
          target[$append](node.nativeElement);
          let nestedViews = node.nestedViews;
          if (nestedViews != null) {
            let length = nestedViews[$length];
            for (let n = 0; n < dart.notNull(length); n = n + 1) {
              view_fragment.ViewFragment.appendDomNodes(target, nestedViews[$_get](n).viewData.rootFragment[_nodesOrViewContainers]);
            }
          }
        } else {
          target[$append](optimizations.unsafeCast(html.Node, node));
        }
      }
    }
    findLastDomNode() {
      let nodes = this[_nodesOrViewContainers];
      for (let i = dart.notNull(nodes[$length]) - 1; i >= 0; i = i - 1) {
        let node = nodes[$_get](i);
        return view_container.ViewContainer.is(node) ? view_fragment.ViewFragment._findLastDomNode(node) : optimizations.unsafeCast(html.Node, node);
      }
      return null;
    }
    static _findLastDomNode(container) {
      let nestedViews = container.nestedViews;
      if (nestedViews != null) {
        for (let i = dart.notNull(nestedViews[$length]) - 1; i >= 0; i = i - 1) {
          let nodes = nestedViews[$_get](i).viewData.rootFragment;
          return nodes.findLastDomNode();
        }
      }
      return container.nativeElement;
    }
    flattenDomNodes() {
      return view_fragment.ViewFragment._flattenDomNodes(JSArrayOfNode().of([]), this[_nodesOrViewContainers]);
    }
    static _flattenDomNodes(target, nodes) {
      let length = nodes[$length];
      for (let i = 0; i < dart.notNull(length); i = i + 1) {
        let node = nodes[$_get](i);
        if (view_container.ViewContainer.is(node)) {
          target[$add](node.nativeElement);
          let nestedViews = node.nestedViews;
          if (nestedViews != null) {
            let length = nestedViews[$length];
            for (let n = 0; n < dart.notNull(length); n = n + 1) {
              view_fragment.ViewFragment._flattenDomNodes(target, nestedViews[$_get](n).viewData.rootFragment[_nodesOrViewContainers]);
            }
          }
        } else {
          target[$add](optimizations.unsafeCast(html.Node, node));
        }
      }
      return target;
    }
  };
  (view_fragment.ViewFragment.__ = function(_nodesOrViewContainers) {
    this[_nodesOrViewContainers$] = _nodesOrViewContainers;
    ;
  }).prototype = view_fragment.ViewFragment.prototype;
  dart.addTypeTests(view_fragment.ViewFragment);
  dart.setMethodSignature(view_fragment.ViewFragment, () => ({
    __proto__: dart.getMethods(view_fragment.ViewFragment.__proto__),
    appendDomNodesInto: dart.fnType(dart.void, [html.Element]),
    findLastDomNode: dart.fnType(html.Node, []),
    flattenDomNodes: dart.fnType(core.List$(html.Node), [])
  }));
  dart.setLibraryUri(view_fragment.ViewFragment, "package:angular/src/core/linker/view_fragment.dart");
  dart.setFieldSignature(view_fragment.ViewFragment, () => ({
    __proto__: dart.getFields(view_fragment.ViewFragment.__proto__),
    [_nodesOrViewContainers]: dart.finalFieldType(core.List$(core.Object))
  }));
  let C6;
  const _findRenderNode = dart.privateName(view_container, "_findRenderNode");
  const HierarchicalInjector_parent = dart.privateName(hierarchical, "HierarchicalInjector.parent");
  let C7;
  component_loader.ComponentLoader = class ComponentLoader extends core.Object {
    loadDetached(T, component, opts) {
      let t1;
      let injector = opts && 'injector' in opts ? opts.injector : null;
      return component.create((t1 = injector, t1 == null ? C7 || CT.C7 : t1));
    }
    loadNextTo(T, component, opts) {
      let injector = opts && 'injector' in opts ? opts.injector : null;
      return dart.throw(new core.UnsupportedError.new("Not used within a structural directive"));
    }
    loadNextToLocation(T, component, location, opts) {
      let t1;
      let injector = opts && 'injector' in opts ? opts.injector : null;
      return location.createComponent(T, component, location.length, (t1 = injector, t1 == null ? location.injector : t1));
    }
  };
  (component_loader.ComponentLoader.new = function() {
    ;
  }).prototype = component_loader.ComponentLoader.prototype;
  dart.addTypeTests(component_loader.ComponentLoader);
  dart.setMethodSignature(component_loader.ComponentLoader, () => ({
    __proto__: dart.getMethods(component_loader.ComponentLoader.__proto__),
    loadDetached: dart.gFnType(T => [component_factory.ComponentRef$(T), [component_factory.ComponentFactory$(T)], {injector: injector.Injector}, {}]),
    loadNextTo: dart.gFnType(T => [component_factory.ComponentRef$(T), [component_factory.ComponentFactory$(T)], {injector: injector.Injector}, {}]),
    loadNextToLocation: dart.gFnType(T => [component_factory.ComponentRef$(T), [component_factory.ComponentFactory$(T), view_container_ref.ViewContainerRef], {injector: injector.Injector}, {}])
  }));
  dart.setLibraryUri(component_loader.ComponentLoader, "package:angular/src/core/linker/component_loader.dart");
  const index$ = dart.privateName(view_container, "ViewContainer.index");
  const parentIndex$0 = dart.privateName(view_container, "ViewContainer.parentIndex");
  const parentView$0 = dart.privateName(view_container, "ViewContainer.parentView");
  const nativeElement$ = dart.privateName(view_container, "ViewContainer.nativeElement");
  const nestedViews = dart.privateName(view_container, "ViewContainer.nestedViews");
  view_container.ViewContainer = class ViewContainer extends component_loader.ComponentLoader {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get parentIndex() {
      return this[parentIndex$0];
    }
    set parentIndex(value) {
      super.parentIndex = value;
    }
    get parentView() {
      return this[parentView$0];
    }
    set parentView(value) {
      super.parentView = value;
    }
    get nativeElement() {
      return this[nativeElement$];
    }
    set nativeElement(value) {
      super.nativeElement = value;
    }
    get nestedViews() {
      return this[nestedViews];
    }
    set nestedViews(value) {
      this[nestedViews] = value;
    }
    get elementRef() {
      return new element_ref.ElementRef.new(this.nativeElement);
    }
    get(index) {
      return this.nestedViews[$_get](index);
    }
    get length() {
      let nested = this.nestedViews;
      return nested == null ? 0 : nested[$length];
    }
    get element() {
      return this.elementRef;
    }
    get parentInjector() {
      return this.parentView.injector(this.parentIndex);
    }
    get injector() {
      return this.parentView.injector(this.index);
    }
    detectChangesInNestedViews() {
      let nested = this.nestedViews;
      if (nested == null) {
        return;
      }
      for (let i = 0, len = nested[$length]; i < dart.notNull(len); i = i + 1) {
        nested[$_get](i).detectChanges();
      }
    }
    destroyNestedViews() {
      let nested = this.nestedViews;
      if (nested == null) {
        return;
      }
      for (let i = 0, len = nested[$length]; i < dart.notNull(len); i = i + 1) {
        nested[$_get](i).destroyInternalState();
      }
    }
    insertEmbeddedView(templateRef, index) {
      let viewRef = templateRef.createEmbeddedView();
      this.insert(viewRef, index);
      return viewRef;
    }
    createEmbeddedView(templateRef) {
      let viewRef = templateRef.createEmbeddedView();
      this.attachView(optimizations.unsafeCast(AppViewOfObject(), viewRef), this.length);
      return viewRef;
    }
    createComponent(T, componentFactory, index, injector, projectableNodes) {
      let t1;
      if (index === void 0) index = -1;
      if (injector === void 0) injector = null;
      if (projectableNodes === void 0) projectableNodes = null;
      let contextInjector = (t1 = injector, t1 == null ? this.parentInjector : t1);
      let componentRef = componentFactory.create(contextInjector, projectableNodes);
      this.insert(componentRef.hostView, index);
      return componentRef;
    }
    insert(viewRef, index) {
      if (index === void 0) index = -1;
      if (index === -1) {
        index = this.length;
      }
      this.attachView(optimizations.unsafeCast(AppViewOfObject(), viewRef), index);
      return viewRef;
    }
    move(viewRef, currentIndex) {
      if (currentIndex === -1) {
        return null;
      }
      this.moveView(optimizations.unsafeCast(AppViewOfObject(), viewRef), currentIndex);
      return viewRef;
    }
    indexOf(viewRef) {
      return this.nestedViews[$indexOf](optimizations.unsafeCast(AppViewOfvoid(), viewRef));
    }
    remove(index) {
      if (index === void 0) index = -1;
      if (index === -1) {
        index = dart.notNull(this.length) - 1;
      }
      this.detachView(index).destroyInternalState();
    }
    detach(index) {
      if (index === void 0) index = -1;
      if (index === -1) {
        index = dart.notNull(this.length) - 1;
      }
      return this.detachView(index);
    }
    clear() {
      for (let i = dart.notNull(this.length) - 1; i >= 0; i = i - 1) {
        this.remove(i);
      }
    }
    mapNestedViews(T, U, callback) {
      let nestedViews = this.nestedViews;
      if (nestedViews == null || dart.test(nestedViews[$isEmpty])) {
        return C6 || CT.C6;
      }
      let result = _interceptors.JSArray$(T).of([]);
      for (let i = 0, l = nestedViews[$length]; i < dart.notNull(l); i = i + 1) {
        result[$addAll](callback(optimizations.unsafeCast(U, nestedViews[$_get](i))));
      }
      return result;
    }
    [_findRenderNode](views, index) {
      return dart.notNull(index) > 0 ? views[$_get](dart.notNull(index) - 1).lastRootNode : this.nativeElement;
    }
    moveView(view, currentIndex) {
      view_container._assertCanMove(view);
      let views = this.nestedViews;
      let previousIndex = views[$indexOf](view);
      views[$removeAt](previousIndex);
      views[$insert](currentIndex, view);
      let refRenderNode = this[_findRenderNode](views, currentIndex);
      if (refRenderNode != null) {
        view.attachRootNodesAfter(refRenderNode);
      }
      view.markContentChildAsMoved(this);
    }
    attachView(view, viewIndex) {
      let t1;
      view_container._assertCanMove(view);
      let views = (t1 = this.nestedViews, t1 == null ? JSArrayOfAppViewOfObject().of([]) : t1);
      views[$insert](viewIndex, view);
      let refRenderNode = this[_findRenderNode](views, viewIndex);
      this.nestedViews = views;
      if (refRenderNode != null) {
        view.attachRootNodesAfter(refRenderNode);
      }
      view.addToContentChildren(this);
    }
    detachView(viewIndex) {
      let t1;
      let view = this.nestedViews[$removeAt](viewIndex);
      view_container._assertCanMove(view);
      t1 = view;
      t1.detachRootNodes();
      t1.removeFromContentChildren(this);
      t1;
      return view;
    }
    loadNextTo(T, component, opts) {
      let injector = opts && 'injector' in opts ? opts.injector : null;
      return this.loadNextToLocation(T, component, this, {injector: injector});
    }
  };
  (view_container.ViewContainer.new = function(index, parentIndex, parentView, nativeElement) {
    this[nestedViews] = null;
    this[index$] = index;
    this[parentIndex$0] = parentIndex;
    this[parentView$0] = parentView;
    this[nativeElement$] = nativeElement;
    view_container.ViewContainer.__proto__.new.call(this);
    ;
  }).prototype = view_container.ViewContainer.prototype;
  dart.addTypeTests(view_container.ViewContainer);
  view_container.ViewContainer[dart.implements] = () => [view_container_ref.ViewContainerRef];
  dart.setMethodSignature(view_container.ViewContainer, () => ({
    __proto__: dart.getMethods(view_container.ViewContainer.__proto__),
    get: dart.fnType(view_ref.ViewRef, [core.int]),
    detectChangesInNestedViews: dart.fnType(dart.void, []),
    destroyNestedViews: dart.fnType(dart.void, []),
    insertEmbeddedView: dart.fnType(view_ref.EmbeddedViewRef, [template_ref.TemplateRef, core.int]),
    createEmbeddedView: dart.fnType(view_ref.EmbeddedViewRef, [template_ref.TemplateRef]),
    createComponent: dart.gFnType(T => [component_factory.ComponentRef$(T), [component_factory.ComponentFactory$(T)], [core.int, injector.Injector, core.List$(core.List)]]),
    insert: dart.fnType(view_ref.ViewRef, [view_ref.ViewRef], [core.int]),
    move: dart.fnType(view_ref.ViewRef, [view_ref.ViewRef, core.int]),
    indexOf: dart.fnType(core.int, [view_ref.ViewRef]),
    remove: dart.fnType(dart.void, [], [core.int]),
    detach: dart.fnType(view_ref.ViewRef, [], [core.int]),
    clear: dart.fnType(dart.void, []),
    mapNestedViews: dart.gFnType((T, U) => [core.List$(T), [dart.fnType(core.List$(T), [U])]], (T, U) => [dart.dynamic, app_view.AppView$(core.Object)]),
    [_findRenderNode]: dart.fnType(html.Node, [core.List$(app_view.AppView$(core.Object)), core.int]),
    moveView: dart.fnType(dart.void, [app_view.AppView$(core.Object), core.int]),
    attachView: dart.fnType(dart.void, [app_view.AppView$(core.Object), core.int]),
    detachView: dart.fnType(app_view.AppView$(core.Object), [core.int])
  }));
  dart.setGetterSignature(view_container.ViewContainer, () => ({
    __proto__: dart.getGetters(view_container.ViewContainer.__proto__),
    elementRef: element_ref.ElementRef,
    length: core.int,
    element: element_ref.ElementRef,
    parentInjector: injector.Injector,
    injector: injector.Injector
  }));
  dart.setLibraryUri(view_container.ViewContainer, "package:angular/src/core/linker/view_container.dart");
  dart.setFieldSignature(view_container.ViewContainer, () => ({
    __proto__: dart.getFields(view_container.ViewContainer.__proto__),
    index: dart.finalFieldType(core.int),
    parentIndex: dart.finalFieldType(core.int),
    parentView: dart.finalFieldType(app_view.AppView$(dart.void)),
    nativeElement: dart.finalFieldType(html.Node),
    nestedViews: dart.fieldType(core.List$(app_view.AppView$(dart.void)))
  }));
  view_container._assertCanMove = function _assertCanMove(view) {
    if (!dart.test(dart.fn(() => {
      if (dart.equals(view.viewData.type, view_type.ViewType.component)) {
        dart.throw(new core.ArgumentError.new("Component views can't be moved!"));
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/angular/src/core/linker/view_container.dart", 244, 10, "() {\n    if (view.viewData.type == ViewType.component) {\n      throw ArgumentError(\"Component views can't be moved!\");\n    }\n    return true;\n  }()");
  };
  view_container_ref.ViewContainerRef = class ViewContainerRef extends core.Object {};
  (view_container_ref.ViewContainerRef.new = function() {
    ;
  }).prototype = view_container_ref.ViewContainerRef.prototype;
  dart.addTypeTests(view_container_ref.ViewContainerRef);
  view_container_ref.ViewContainerRef[dart.implements] = () => [component_loader.ComponentLoader];
  dart.setLibraryUri(view_container_ref.ViewContainerRef, "package:angular/src/core/linker/view_container_ref.dart");
  const _viewContainer$ = dart.privateName(template_ref, "_viewContainer");
  const _viewFactory$0 = dart.privateName(template_ref, "_viewFactory");
  template_ref.TemplateRef = class TemplateRef extends core.Object {
    createEmbeddedView() {
      let parentView = this[_viewContainer$].parentView;
      let view = this[_viewFactory$0](parentView, this[_viewContainer$].index);
      view.create(parentView.ctx, parentView.viewData.projectedNodes);
      return view;
    }
    get elementRef() {
      return this[_viewContainer$].elementRef;
    }
  };
  (template_ref.TemplateRef.new = function(_viewContainer, _viewFactory) {
    this[_viewContainer$] = _viewContainer;
    this[_viewFactory$0] = _viewFactory;
    ;
  }).prototype = template_ref.TemplateRef.prototype;
  dart.addTypeTests(template_ref.TemplateRef);
  dart.setMethodSignature(template_ref.TemplateRef, () => ({
    __proto__: dart.getMethods(template_ref.TemplateRef.__proto__),
    createEmbeddedView: dart.fnType(view_ref.EmbeddedViewRef, [])
  }));
  dart.setGetterSignature(template_ref.TemplateRef, () => ({
    __proto__: dart.getGetters(template_ref.TemplateRef.__proto__),
    elementRef: element_ref.ElementRef
  }));
  dart.setLibraryUri(template_ref.TemplateRef, "package:angular/src/core/linker/template_ref.dart");
  dart.setFieldSignature(template_ref.TemplateRef, () => ({
    __proto__: dart.getFields(template_ref.TemplateRef.__proto__),
    [_viewContainer$]: dart.finalFieldType(view_container.ViewContainer),
    [_viewFactory$0]: dart.finalFieldType(dart.fnType(app_view.AppView$(dart.void), [app_view.AppView$(core.Object), core.int]))
  }));
  const nativeElement$0 = dart.privateName(element_ref, "ElementRef.nativeElement");
  element_ref.ElementRef = class ElementRef extends core.Object {
    get nativeElement() {
      return this[nativeElement$0];
    }
    set nativeElement(value) {
      super.nativeElement = value;
    }
  };
  (element_ref.ElementRef.new = function(nativeElement) {
    this[nativeElement$0] = nativeElement;
    ;
  }).prototype = element_ref.ElementRef.prototype;
  dart.addTypeTests(element_ref.ElementRef);
  dart.setLibraryUri(element_ref.ElementRef, "package:angular/src/core/linker/element_ref.dart");
  dart.setFieldSignature(element_ref.ElementRef, () => ({
    __proto__: dart.getFields(element_ref.ElementRef.__proto__),
    nativeElement: dart.finalFieldType(dart.dynamic)
  }));
  const appId$ = dart.privateName(app_view_utils, "AppViewUtils.appId");
  const eventManager$ = dart.privateName(app_view_utils, "AppViewUtils.eventManager");
  const sanitizer$ = dart.privateName(app_view_utils, "AppViewUtils.sanitizer");
  app_view_utils.AppViewUtils = class AppViewUtils extends core.Object {
    get appId() {
      return this[appId$];
    }
    set appId(value) {
      super.appId = value;
    }
    get eventManager() {
      return this[eventManager$];
    }
    set eventManager(value) {
      super.eventManager = value;
    }
    get sanitizer() {
      return this[sanitizer$];
    }
    set sanitizer(value) {
      super.sanitizer = value;
    }
    static get throwOnChanges() {
      return dart.test(optimizations.isDevMode) && dart.test(app_view_utils.AppViewUtils._throwOnChanges);
    }
    static enterThrowOnChanges() {
      app_view_utils.AppViewUtils._throwOnChangesCounter = dart.notNull(app_view_utils.AppViewUtils._throwOnChangesCounter) + 1;
      app_view_utils.AppViewUtils._throwOnChanges = true;
    }
    static exitThrowOnChanges() {
      app_view_utils.AppViewUtils._throwOnChangesCounter = dart.notNull(app_view_utils.AppViewUtils._throwOnChangesCounter) - 1;
      app_view_utils.AppViewUtils._throwOnChanges = app_view_utils.AppViewUtils._throwOnChangesCounter !== 0;
    }
  };
  (app_view_utils.AppViewUtils.new = function(appId, sanitizer, eventManager) {
    this[appId$] = appId;
    this[sanitizer$] = sanitizer;
    this[eventManager$] = eventManager;
    ;
  }).prototype = app_view_utils.AppViewUtils.prototype;
  dart.addTypeTests(app_view_utils.AppViewUtils);
  dart.setLibraryUri(app_view_utils.AppViewUtils, "package:angular/src/core/linker/app_view_utils.dart");
  dart.setFieldSignature(app_view_utils.AppViewUtils, () => ({
    __proto__: dart.getFields(app_view_utils.AppViewUtils.__proto__),
    appId: dart.finalFieldType(core.String),
    eventManager: dart.finalFieldType(dom_events.EventManager),
    sanitizer: dart.finalFieldType(security.SanitizationService)
  }));
  dart.defineLazy(app_view_utils.AppViewUtils, {
    /*app_view_utils.AppViewUtils._throwOnChanges*/get _throwOnChanges() {
      return false;
    },
    set _throwOnChanges(_) {},
    /*app_view_utils.AppViewUtils._throwOnChangesCounter*/get _throwOnChangesCounter() {
      return 0;
    },
    set _throwOnChangesCounter(_) {}
  });
  app_view_utils.createTrustedHtml = function createTrustedHtml(trustedHtml) {
    return html.DocumentFragment.html(trustedHtml, {treeSanitizer: html.NodeTreeSanitizer.trusted});
  };
  app_view_utils.checkBinding = function checkBinding(oldValue, newValue) {
    return dart.test(app_view_utils.AppViewUtils.throwOnChanges) ? app_view_utils._checkBindingDebug(oldValue, newValue) : app_view_utils._checkBindingRelease(oldValue, newValue);
  };
  app_view_utils._checkBindingDebug = function _checkBindingDebug(oldValue, newValue) {
    if (!dart.test(change_detection_util.devModeEqual(oldValue, newValue))) {
      dart.throw(new exceptions.ExpressionChangedAfterItHasBeenCheckedException.new(oldValue, newValue, null));
    }
    return false;
  };
  app_view_utils._checkBindingRelease = function _checkBindingRelease(oldValue, newValue) {
    return !core.identical(oldValue, newValue);
  };
  dart.defineLazy(app_view_utils, {
    /*app_view_utils.appViewUtils*/get appViewUtils() {
      return null;
    },
    set appViewUtils(_) {}
  });
  const _message = dart.privateName(exceptions, "_message");
  exceptions.ExpressionChangedAfterItHasBeenCheckedException = class ExpressionChangedAfterItHasBeenCheckedException extends core.Object {
    toString() {
      return this[_message];
    }
  };
  (exceptions.ExpressionChangedAfterItHasBeenCheckedException.new = function(oldValue, currValue, context) {
    this[_message] = "Expression has changed after it was checked. " + "Previous value: '" + dart.str(oldValue) + "'. Current value: '" + dart.str(currValue) + "'";
    ;
  }).prototype = exceptions.ExpressionChangedAfterItHasBeenCheckedException.prototype;
  dart.addTypeTests(exceptions.ExpressionChangedAfterItHasBeenCheckedException);
  exceptions.ExpressionChangedAfterItHasBeenCheckedException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(exceptions.ExpressionChangedAfterItHasBeenCheckedException, "package:angular/src/core/linker/exceptions.dart");
  dart.setFieldSignature(exceptions.ExpressionChangedAfterItHasBeenCheckedException, () => ({
    __proto__: dart.getFields(exceptions.ExpressionChangedAfterItHasBeenCheckedException.__proto__),
    [_message]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(exceptions.ExpressionChangedAfterItHasBeenCheckedException, ['toString']);
  const zone$ = dart.privateName(dom_events, "EventManager.zone");
  dom_events.EventManager = class EventManager extends core.Object {
    get zone() {
      return this[zone$];
    }
    set zone(value) {
      super.zone = value;
    }
    addEventListener(element, name, callback) {
      if (dart.test(dom_events.EventManager._keyEvents.supports(name))) {
        this.zone.runOutsideAngular(core.Null, dart.fn(() => {
          dom_events.EventManager._keyEvents.addEventListener(element, name, callback);
        }, VoidToNull()));
        return;
      }
      element[$addEventListener](name, callback);
    }
  };
  (dom_events.EventManager.new = function(zone) {
    this[zone$] = zone;
    ;
  }).prototype = dom_events.EventManager.prototype;
  dart.addTypeTests(dom_events.EventManager);
  dart.setMethodSignature(dom_events.EventManager, () => ({
    __proto__: dart.getMethods(dom_events.EventManager.__proto__),
    addEventListener: dart.fnType(dart.void, [html.Element, core.String, dart.fnType(dart.void, [core.Object])])
  }));
  dart.setLibraryUri(dom_events.EventManager, "package:angular/src/runtime/dom_events.dart");
  dart.setFieldSignature(dom_events.EventManager, () => ({
    __proto__: dart.getFields(dom_events.EventManager.__proto__),
    zone: dart.finalFieldType(ng_zone.NgZone)
  }));
  dart.defineLazy(dom_events.EventManager, {
    /*dom_events.EventManager._keyEvents*/get _keyEvents() {
      return new dom_events._KeyEventsHandler.new();
    }
  });
  dom_events._KeyEventsHandler = class _KeyEventsHandler extends core.Object {
    supports(name) {
      if (dart.test(dom_events._KeyEventsHandler._cache[$containsKey](name))) {
        return dom_events._KeyEventsHandler._cache[$_get](name) != null;
      }
      if (dart.test(dom_events._KeyEventsHandler._supports(name))) {
        dom_events._KeyEventsHandler._cache[$_set](name, dom_events._KeyEventsHandler._parse(name));
        return true;
      } else {
        dom_events._KeyEventsHandler._cache[$_set](name, null);
        return false;
      }
    }
    static _supports(name) {
      return name[$contains](".");
    }
    addEventListener(element, name, callback) {
      if (!dart.test(dom_events._KeyEventsHandler._supports(name))) dart.assertFailed("Should never be called before \"supports\".", "org-dartlang-app:///packages/angular/src/runtime/dom_events.dart", 81, 12, "_supports(name)");
      let parsed = dom_events._KeyEventsHandler._cache[$_get](name);
      if (parsed == null) {
        return;
      }
      element[$addEventListener](parsed.domEventName, dart.fn(event => {
        if (html.KeyboardEvent.is(event) && dart.test(parsed.matches(event))) {
          callback(event);
        }
      }, EventToNull()));
    }
    static _parse(name) {
      if (!dart.test(dom_events._KeyEventsHandler._supports(name))) dart.assertFailed(null, "org-dartlang-app:///packages/angular/src/runtime/dom_events.dart", 97, 12, "_supports(name)");
      let parts = name[$toLowerCase]()[$split](".");
      let domEventName = parts[$removeAt](0);
      switch (domEventName) {
        case "keydown":
        case "keyup":
        {
          break;
        }
        default:
        {
          return null;
        }
      }
      let normalizedKey = dom_events._KeyEventsHandler._normalizeKey(parts[$removeLast]());
      let matchingKeys = dom_events._KeyEventsHandler._addModifiersIfAny(normalizedKey, parts);
      return new dom_events._ParsedEvent.new(domEventName, matchingKeys);
    }
    static _normalizeKey(key) {
      return key === "esc" ? "escape" : key;
    }
    static _addModifiersIfAny(key, parts) {
      for (let modifier of dom_events._modifiers[$keys]) {
        if (dart.test(parts[$remove](modifier))) {
          key = dart.notNull(key) + ("." + dart.notNull(modifier));
        }
      }
      return key;
    }
  };
  (dom_events._KeyEventsHandler.new = function() {
    ;
  }).prototype = dom_events._KeyEventsHandler.prototype;
  dart.addTypeTests(dom_events._KeyEventsHandler);
  dart.setMethodSignature(dom_events._KeyEventsHandler, () => ({
    __proto__: dart.getMethods(dom_events._KeyEventsHandler.__proto__),
    supports: dart.fnType(core.bool, [core.String]),
    addEventListener: dart.fnType(dart.void, [html.Element, core.String, dart.fnType(dart.void, [core.Object])])
  }));
  dart.setLibraryUri(dom_events._KeyEventsHandler, "package:angular/src/runtime/dom_events.dart");
  dart.defineLazy(dom_events._KeyEventsHandler, {
    /*dom_events._KeyEventsHandler._cache*/get _cache() {
      return new (IdentityMapOfString$_ParsedEvent()).new();
    },
    /*dom_events._KeyEventsHandler._delimiter*/get _delimiter() {
      return ".";
    }
  });
  const domEventName$ = dart.privateName(dom_events, "_ParsedEvent.domEventName");
  const keyAndModifiers$ = dart.privateName(dom_events, "_ParsedEvent.keyAndModifiers");
  dom_events._ParsedEvent = class _ParsedEvent extends core.Object {
    get domEventName() {
      return this[domEventName$];
    }
    set domEventName(value) {
      super.domEventName = value;
    }
    get keyAndModifiers() {
      return this[keyAndModifiers$];
    }
    set keyAndModifiers(value) {
      super.keyAndModifiers = value;
    }
    matches(event) {
      let key = dom_events._keyCodeNames[$_get](event.keyCode);
      if (key == null) {
        return false;
      }
      let modifiers = "";
      for (let modifier of dom_events._modifiers[$keys]) {
        if (modifier != key) {
          let check = dom_events._modifiers[$_get](modifier);
          if (dart.test(check(event))) {
            modifiers = modifiers + "." + dart.str(modifier);
          }
        }
      }
      let fullMatch = dart.notNull(key) + modifiers;
      return fullMatch === this.keyAndModifiers;
    }
  };
  (dom_events._ParsedEvent.new = function(domEventName, keyAndModifiers) {
    this[domEventName$] = domEventName;
    this[keyAndModifiers$] = keyAndModifiers;
    ;
  }).prototype = dom_events._ParsedEvent.prototype;
  dart.addTypeTests(dom_events._ParsedEvent);
  dart.setMethodSignature(dom_events._ParsedEvent, () => ({
    __proto__: dart.getMethods(dom_events._ParsedEvent.__proto__),
    matches: dart.fnType(core.bool, [html.KeyboardEvent])
  }));
  dart.setLibraryUri(dom_events._ParsedEvent, "package:angular/src/runtime/dom_events.dart");
  dart.setFieldSignature(dom_events._ParsedEvent, () => ({
    __proto__: dart.getFields(dom_events._ParsedEvent.__proto__),
    domEventName: dart.finalFieldType(core.String),
    keyAndModifiers: dart.finalFieldType(core.String)
  }));
  let C8;
  dart.defineLazy(dom_events, {
    /*dom_events._keyCodeNames*/get _keyCodeNames() {
      return C8 || CT.C8;
    },
    /*dom_events._modifiers*/get _modifiers() {
      return new (IdentityMapOfString$KeyboardEventTobool()).from(["alt", dart.fn(event => event.altKey, KeyboardEventTobool()), "control", dart.fn(event => event.ctrlKey, KeyboardEventTobool()), "meta", dart.fn(event => event.metaKey, KeyboardEventTobool()), "shift", dart.fn(event => event.shiftKey, KeyboardEventTobool())]);
    }
  });
  const _name$0 = dart.privateName(security, "_name");
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  security.TemplateSecurityContext = class TemplateSecurityContext extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (security.TemplateSecurityContext.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = security.TemplateSecurityContext.prototype;
  dart.addTypeTests(security.TemplateSecurityContext);
  dart.setLibraryUri(security.TemplateSecurityContext, "package:angular/src/core/security.dart");
  dart.setFieldSignature(security.TemplateSecurityContext, () => ({
    __proto__: dart.getFields(security.TemplateSecurityContext.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(security.TemplateSecurityContext, ['toString']);
  security.TemplateSecurityContext.none = C9 || CT.C9;
  security.TemplateSecurityContext.html = C10 || CT.C10;
  security.TemplateSecurityContext.style = C11 || CT.C11;
  security.TemplateSecurityContext.url = C12 || CT.C12;
  security.TemplateSecurityContext.resourceUrl = C13 || CT.C13;
  security.TemplateSecurityContext.values = C14 || CT.C14;
  security.SanitizationService = class SanitizationService extends core.Object {};
  (security.SanitizationService.new = function() {
    ;
  }).prototype = security.SanitizationService.prototype;
  dart.addTypeTests(security.SanitizationService);
  dart.setLibraryUri(security.SanitizationService, "package:angular/src/core/security.dart");
  security.SafeValue = class SafeValue extends core.Object {};
  (security.SafeValue.new = function() {
    ;
  }).prototype = security.SafeValue.prototype;
  dart.addTypeTests(security.SafeValue);
  dart.setLibraryUri(security.SafeValue, "package:angular/src/core/security.dart");
  dom_helpers._createTextNode = function _createTextNode(text) {
    return html.Text.new(text);
  };
  dom_helpers._createComment = function _createComment() {
    return html.Comment.new();
  };
  dom_helpers.updateClassBinding = function updateClassBinding(element, className, isAdd) {
    if (dart.test(isAdd)) {
      element[$classes].add(className);
    } else {
      element[$classes].remove(className);
    }
  };
  dom_helpers.updateClassBindingNonHtml = function updateClassBindingNonHtml(element, className, isAdd) {
    if (dart.test(isAdd)) {
      element[$classes].add(className);
    } else {
      element[$classes].remove(className);
    }
  };
  dom_helpers.updateAttribute = function updateAttribute(element, attribute, value) {
    if (value == null) {
      element[$removeAttribute](attribute);
    } else {
      dom_helpers.setAttribute(element, attribute, value);
    }
    dom_helpers.domRootRendererIsDirty = true;
  };
  dom_helpers.updateAttributeNS = function updateAttributeNS(element, namespace, attribute, value) {
    if (value == null) {
      element[$removeAttributeNS](namespace, attribute);
    } else {
      element[$setAttributeNS](namespace, attribute, value);
    }
    dom_helpers.domRootRendererIsDirty = true;
  };
  dom_helpers.setAttribute = function setAttribute(element, attribute, value) {
    if (value === void 0) value = "";
    element[$setAttribute](attribute, value);
  };
  dom_helpers.setProperty = function setProperty(element, property, value) {
    js_util.setProperty(element, property, value);
  };
  dom_helpers.createText = function createText(contents) {
    return dom_helpers._createTextNode(contents);
  };
  dom_helpers.appendText = function appendText(parent, text) {
    return optimizations.unsafeCast(html.Text, parent[$append](dom_helpers.createText(text)));
  };
  dom_helpers.createAnchor = function createAnchor() {
    return dom_helpers._createComment();
  };
  dom_helpers.appendAnchor = function appendAnchor(parent) {
    return optimizations.unsafeCast(html.Comment, parent[$append](dom_helpers._createComment()));
  };
  dom_helpers.appendDiv = function appendDiv(doc, parent) {
    return optimizations.unsafeCast(html.DivElement, parent[$append](doc[$createElement]("div")));
  };
  dom_helpers.appendSpan = function appendSpan(doc, parent) {
    return optimizations.unsafeCast(html.SpanElement, parent[$append](doc[$createElement]("span")));
  };
  dom_helpers.appendElement = function appendElement(doc, parent, tagName) {
    return optimizations.unsafeCast(html.Element, parent[$append](doc[$createElement](tagName)));
  };
  dom_helpers.insertNodesBefore = function insertNodesBefore(nodes, parent, sibling) {
    for (let i = 0, l = nodes[$length]; i < dart.notNull(l); i = i + 1) {
      parent.insertBefore(nodes[$_get](i), sibling);
    }
  };
  dom_helpers.appendNodes = function appendNodes(nodes, parent) {
    for (let i = 0, l = nodes[$length]; i < dart.notNull(l); i = i + 1) {
      parent[$append](nodes[$_get](i));
    }
  };
  dom_helpers.removeNodes = function removeNodes(nodes) {
    for (let i = 0, l = nodes[$length]; i < dart.notNull(l); i = i + 1) {
      nodes[$_get](i)[$remove]();
    }
  };
  dom_helpers.insertNodesAsSibling = function insertNodesAsSibling(nodes, sibling) {
    let parentOfSibling = sibling.parentNode;
    if (dart.test(nodes[$isEmpty]) || parentOfSibling == null) {
      return;
    }
    let nextSibling = sibling[$nextNode];
    if (nextSibling == null) {
      dom_helpers.appendNodes(nodes, parentOfSibling);
    } else {
      dom_helpers.insertNodesBefore(nodes, parentOfSibling, nextSibling);
    }
  };
  dart.defineLazy(dom_helpers, {
    /*dom_helpers.domRootRendererIsDirty*/get domRootRendererIsDirty() {
      return false;
    },
    set domRootRendererIsDirty(_) {}
  });
  const _parent = dart.privateName(element, "_parent");
  const _view$ = dart.privateName(element, "_view");
  const _nodeIndex$0 = dart.privateName(element, "_nodeIndex");
  const _injectFrom = dart.privateName(element, "_injectFrom");
  element.ElementInjector = class ElementInjector extends hierarchical.HierarchicalInjector {
    [_injectFrom](view, nodeIndex, token, orElse) {
      return view.injectorGet(token, nodeIndex, orElse);
    }
    provideUntyped(token, orElse) {
      if (orElse === void 0) orElse = C1 || CT.C1;
      return this[_injectFrom](this[_view$], this[_nodeIndex$0], token, orElse);
    }
    injectFromAncestryOptional(token, orElse) {
      if (orElse === void 0) orElse = C1 || CT.C1;
      return this[_injectFrom](this[_view$].parentView, this[_view$].viewData.parentIndex, token, orElse);
    }
    injectFromParentOptional(token, orElse) {
      if (orElse === void 0) orElse = C1 || CT.C1;
      return dart.throw(new core.UnimplementedError.new());
    }
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = C1 || CT.C1;
      return dart.throw(new core.UnimplementedError.new());
    }
    get parent() {
      if (this[_parent] == null) {
        this[_parent] = new element.ElementInjector.new(this[_view$].parentView, this[_view$].viewData.parentIndex);
      }
      return this[_parent];
    }
  };
  (element.ElementInjector.new = function(_view, _nodeIndex) {
    this[_parent] = null;
    this[_view$] = _view;
    this[_nodeIndex$0] = _nodeIndex;
    element.ElementInjector.__proto__.new.call(this);
    ;
  }).prototype = element.ElementInjector.prototype;
  dart.addTypeTests(element.ElementInjector);
  dart.setMethodSignature(element.ElementInjector, () => ({
    __proto__: dart.getMethods(element.ElementInjector.__proto__),
    [_injectFrom]: dart.fnType(dart.dynamic, [app_view.AppView$(core.Object), core.int, core.Object, core.Object]),
    provideUntyped: dart.fnType(dart.dynamic, [core.Object], [core.Object]),
    injectFromSelfOptional: dart.fnType(core.Object, [core.Object], [core.Object])
  }));
  dart.setGetterSignature(element.ElementInjector, () => ({
    __proto__: dart.getGetters(element.ElementInjector.__proto__),
    parent: hierarchical.HierarchicalInjector
  }));
  dart.setLibraryUri(element.ElementInjector, "package:angular/src/di/injector/element.dart");
  dart.setFieldSignature(element.ElementInjector, () => ({
    __proto__: dart.getFields(element.ElementInjector.__proto__),
    [_view$]: dart.finalFieldType(app_view.AppView$(core.Object)),
    [_nodeIndex$0]: dart.finalFieldType(core.int),
    [_parent]: dart.fieldType(hierarchical.HierarchicalInjector)
  }));
  const _styles$ = dart.privateName(style_encapsulation, "_styles");
  const _componentId$ = dart.privateName(style_encapsulation, "_componentId");
  const _componentUrl$ = dart.privateName(style_encapsulation, "_componentUrl");
  const _appendStyles = dart.privateName(style_encapsulation, "_appendStyles");
  const contentPrefix$ = dart.privateName(style_encapsulation, "ComponentStyles.contentPrefix");
  const hostPrefix$ = dart.privateName(style_encapsulation, "ComponentStyles.hostPrefix");
  style_encapsulation.ComponentStyles = class ComponentStyles extends core.Object {
    get contentPrefix() {
      return this[contentPrefix$];
    }
    set contentPrefix(value) {
      super.contentPrefix = value;
    }
    get hostPrefix() {
      return this[hostPrefix$];
    }
    set hostPrefix(value) {
      super.hostPrefix = value;
    }
    static scoped(styles, componentUrl) {
      let t1;
      if (componentUrl === void 0) componentUrl = null;
      let componentId = dart.str(app_view_utils.appViewUtils.appId) + "-" + dart.str((t1 = style_encapsulation.ComponentStyles._nextUniqueId, style_encapsulation.ComponentStyles._nextUniqueId = dart.notNull(t1) + 1, t1));
      return new style_encapsulation.ComponentStyles.__(styles, "_ngcontent-" + componentId, "_nghost-" + componentId, componentId, componentUrl);
    }
    get usesStyleEncapsulation() {
      return true;
    }
    [_appendStyles]() {
      let t1;
      let target = JSArrayOfString().of([]);
      if (dart.test(optimizations.isDevMode)) {
        target[$add]("/* From: " + dart.str(this[_componentUrl$]) + "*/");
      }
      let styles = style_encapsulation._flattenStyles(this[_styles$], target, this[_componentId$])[$join]("\n");
      html.document[$head][$append]((t1 = html.StyleElement.new(), t1[$text] = styles, t1));
    }
  };
  (style_encapsulation.ComponentStyles.__ = function(_styles, contentPrefix, hostPrefix, _componentId, _componentUrl) {
    if (_componentId === void 0) _componentId = null;
    if (_componentUrl === void 0) _componentUrl = null;
    this[_styles$] = _styles;
    this[contentPrefix$] = contentPrefix;
    this[hostPrefix$] = hostPrefix;
    this[_componentId$] = _componentId;
    this[_componentUrl$] = _componentUrl;
    this[_appendStyles]();
  }).prototype = style_encapsulation.ComponentStyles.prototype;
  dart.addTypeTests(style_encapsulation.ComponentStyles);
  dart.setMethodSignature(style_encapsulation.ComponentStyles, () => ({
    __proto__: dart.getMethods(style_encapsulation.ComponentStyles.__proto__),
    [_appendStyles]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(style_encapsulation.ComponentStyles, () => ({
    __proto__: dart.getGetters(style_encapsulation.ComponentStyles.__proto__),
    usesStyleEncapsulation: core.bool
  }));
  dart.setLibraryUri(style_encapsulation.ComponentStyles, "package:angular/src/core/linker/style_encapsulation.dart");
  dart.setFieldSignature(style_encapsulation.ComponentStyles, () => ({
    __proto__: dart.getFields(style_encapsulation.ComponentStyles.__proto__),
    [_componentUrl$]: dart.finalFieldType(core.String),
    [_styles$]: dart.finalFieldType(core.List$(core.Object)),
    [_componentId$]: dart.finalFieldType(core.String),
    contentPrefix: dart.finalFieldType(core.String),
    hostPrefix: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(style_encapsulation.ComponentStyles, {
    /*style_encapsulation.ComponentStyles._nextUniqueId*/get _nextUniqueId() {
      return 0;
    },
    set _nextUniqueId(_) {},
    /*style_encapsulation.ComponentStyles._hostClassPrefix*/get _hostClassPrefix() {
      return "_nghost-";
    },
    /*style_encapsulation.ComponentStyles._viewClassPrefix*/get _viewClassPrefix() {
      return "_ngcontent-";
    }
  });
  style_encapsulation._UnscopedComponentStyles = class _UnscopedComponentStyles extends style_encapsulation.ComponentStyles {
    get usesStyleEncapsulation() {
      return false;
    }
  };
  (style_encapsulation._UnscopedComponentStyles.new = function(styles, componentUrl) {
    if (componentUrl === void 0) componentUrl = null;
    style_encapsulation._UnscopedComponentStyles.__proto__.__.call(this, styles, "", "", "", componentUrl);
    ;
  }).prototype = style_encapsulation._UnscopedComponentStyles.prototype;
  dart.addTypeTests(style_encapsulation._UnscopedComponentStyles);
  dart.setLibraryUri(style_encapsulation._UnscopedComponentStyles, "package:angular/src/core/linker/style_encapsulation.dart");
  style_encapsulation._flattenStyles = function _flattenStyles(styles, target, componentIdOrNull) {
    if (styles == null || dart.test(styles[$isEmpty])) {
      return target;
    }
    for (let i = 0, l = styles[$length]; i < dart.notNull(l); i = i + 1) {
      let styleOrList = styles[$_get](i);
      if (ListOfObject().is(styleOrList)) {
        style_encapsulation._flattenStyles(styleOrList, target, componentIdOrNull);
      } else {
        let styleString = optimizations.unsafeCast(core.String, styleOrList);
        target[$add](styleString[$replaceAll](style_encapsulation._idPlaceholder, componentIdOrNull));
      }
    }
    return target;
  };
  dart.defineLazy(style_encapsulation, {
    /*style_encapsulation._idPlaceholder*/get _idPlaceholder() {
      return core.RegExp.new("%ID%");
    }
  });
  const _lastGuardedView = dart.privateName(host$, "_lastGuardedView");
  const _lastCaughtException = dart.privateName(host$, "_lastCaughtException");
  const _lastCaughtTrace = dart.privateName(host$, "_lastCaughtTrace");
  const _runningTick = dart.privateName(host$, "_runningTick");
  const _changeDetectors = dart.privateName(host$, "_changeDetectors");
  const _scheduledCallbacks = dart.privateName(host$, "_scheduledCallbacks");
  const _scheduledViews = dart.privateName(host$, "_scheduledViews");
  const _scheduledElements = dart.privateName(host$, "_scheduledElements");
  const _scheduleViewUpdate = dart.privateName(host$, "_scheduleViewUpdate");
  const _runViewUpdates = dart.privateName(host$, "_runViewUpdates");
  const _runTick = dart.privateName(host$, "_runTick");
  const _runTickGuarded = dart.privateName(host$, "_runTickGuarded");
  const _resetViewErrors = dart.privateName(host$, "_resetViewErrors");
  const _checkForChangeDetectionError = dart.privateName(host$, "_checkForChangeDetectionError");
  host$.ChangeDetectionHost = class ChangeDetectionHost extends core.Object {
    static get checkForCrashes() {
      let t1;
      return (t1 = host$.ChangeDetectionHost._current, t1 == null ? null : t1[_lastGuardedView]) != null;
    }
    static handleCrash(view, error, trace) {
      let t1;
      let current = host$.ChangeDetectionHost._current;
      if (!(current != null)) dart.assertFailed(null, "org-dartlang-app:///packages/angular/src/core/change_detection/host.dart", 28, 12, "current != null");
      t1 = current;
      t1[_lastGuardedView] = view;
      t1[_lastCaughtException] = error;
      t1[_lastCaughtTrace] = trace;
      t1;
    }
    static scheduleViewUpdate(callback, view, host) {
      if (view.cdState === 2) {
        return;
      }
      let current = host$.ChangeDetectionHost._current;
      if (!(current != null)) dart.assertFailed("No current ChangeDetectionHost in context", "org-dartlang-app:///packages/angular/src/core/change_detection/host.dart", 50, 12, "current != null");
      current[_scheduleViewUpdate](callback, view, host);
    }
    registerChangeDetector(detector) {
      this[_changeDetectors][$add](detector);
    }
    unregisterChangeDetector(detector) {
      this[_changeDetectors][$remove](detector);
    }
    [_scheduleViewUpdate](callback, view, host) {
      let callbacks = this[_scheduledCallbacks];
      let views = this[_scheduledViews];
      let elements = this[_scheduledElements];
      if (dart.test(callbacks[$isEmpty])) {
        async.scheduleMicrotask(dart.bind(this, _runViewUpdates));
      }
      callbacks[$add](callback);
      views[$add](view);
      elements[$add](host);
    }
    [_runViewUpdates]() {
      let callbacks = this[_scheduledCallbacks];
      let views = this[_scheduledViews];
      let elements = this[_scheduledElements];
      if (!dart.test(callbacks[$isNotEmpty])) dart.assertFailed("Expected at least one update", "org-dartlang-app:///packages/angular/src/core/change_detection/host.dart", 106, 12, "callbacks.isNotEmpty");
      for (let i = 0, l = callbacks[$length]; i < dart.notNull(l); i = i + 1) {
        let callback = callbacks[$_get](i);
        let view = views[$_get](i);
        let host = elements[$_get](i);
        try {
          callback(view, host);
        } catch (e$) {
          let e = dart.getThrown(e$);
          let s = dart.stackTrace(e$);
          this.reportViewException(view, e, s);
          dart.rethrow(e$);
        }
      }
      callbacks[$clear]();
      views[$clear]();
      elements[$clear]();
    }
    tick() {
      if (dart.test(optimizations.isDevMode) && dart.test(this[_runningTick])) {
        dart.throw(new core.StateError.new("Change detecion (tick) was called recursively"));
      }
      try {
        host$.ChangeDetectionHost._current = this;
        this[_runningTick] = true;
        this[_runTick]();
      } catch (e$) {
        let e = dart.getThrown(e$);
        let s = dart.stackTrace(e$);
        if (!dart.test(this[_runTickGuarded]())) {
          this.handleUncaughtException(e, s, "DigestTick");
        }
        dart.rethrow(e$);
      } finally {
        host$.ChangeDetectionHost._current = null;
        this[_runningTick] = false;
        this[_resetViewErrors]();
      }
    }
    [_runTick]() {
      let detectors = this[_changeDetectors];
      let length = detectors[$length];
      for (let i = 0; i < dart.notNull(length); i = i + 1) {
        detectors[$_get](i).detectChanges();
      }
      if (dart.test(optimizations.isDevMode)) {
        for (let i = 0; i < dart.notNull(length); i = i + 1) {
          detectors[$_get](i).checkNoChanges();
        }
      }
    }
    [_runTickGuarded]() {
      let detectors = this[_changeDetectors];
      let length = detectors[$length];
      for (let i = 0; i < dart.notNull(length); i = i + 1) {
        let detector = detectors[$_get](i);
        if (app_view.AppView.is(detector)) {
          let view = detector;
          this[_lastGuardedView] = view;
          view.detectChanges();
        }
      }
      return this[_checkForChangeDetectionError]();
    }
    [_checkForChangeDetectionError]() {
      if (this[_lastGuardedView] != null) {
        this.reportViewException(this[_lastGuardedView], this[_lastCaughtException], this[_lastCaughtTrace]);
        this[_resetViewErrors]();
        return true;
      }
      return false;
    }
    [_resetViewErrors]() {
      this[_lastGuardedView] = this[_lastCaughtException] = this[_lastCaughtTrace] = null;
    }
    reportViewException(view, error, trace) {
      if (trace === void 0) trace = null;
      view.cdState = 2;
      this.handleUncaughtException(error, trace);
    }
    run(R, callback) {
      let completer = async.Completer$(R).new();
      let result = null;
      this.runInZone(core.Null, dart.fn(() => {
        try {
          result = callback();
          if (FutureOfObject().is(result)) {
            let resultCast = optimizations.unsafeCast(async.Future$(R), result);
            resultCast.then(core.Null, dart.fn(result => {
              completer.complete(result);
            }, dart.fnType(core.Null, [R])), {onError: dart.fn((e, s) => {
                let sCasted = optimizations.unsafeCast(core.StackTrace, s);
                completer.completeError(e, sCasted);
                this.handleUncaughtException(e, sCasted);
              }, dynamicAnddynamicToNull())});
          }
        } catch (e$) {
          let e = dart.getThrown(e$);
          let s = dart.stackTrace(e$);
          this.handleUncaughtException(e, s);
          dart.rethrow(e$);
        }
      }, VoidToNull()));
      return FutureOfObject().is(result) ? completer.future : result;
    }
  };
  (host$.ChangeDetectionHost.new = function() {
    this[_lastGuardedView] = null;
    this[_lastCaughtException] = null;
    this[_lastCaughtTrace] = null;
    this[_runningTick] = false;
    this[_changeDetectors] = JSArrayOfChangeDetectorRef().of([]);
    this[_scheduledCallbacks] = JSArrayOfAppViewOfvoidAndElementTovoid().of([]);
    this[_scheduledViews] = JSArrayOfAppViewOfvoid().of([]);
    this[_scheduledElements] = JSArrayOfElement().of([]);
    ;
  }).prototype = host$.ChangeDetectionHost.prototype;
  dart.addTypeTests(host$.ChangeDetectionHost);
  dart.setMethodSignature(host$.ChangeDetectionHost, () => ({
    __proto__: dart.getMethods(host$.ChangeDetectionHost.__proto__),
    registerChangeDetector: dart.fnType(dart.void, [change_detector_ref.ChangeDetectorRef]),
    unregisterChangeDetector: dart.fnType(dart.void, [change_detector_ref.ChangeDetectorRef]),
    [_scheduleViewUpdate]: dart.fnType(dart.void, [dart.fnType(dart.void, [app_view.AppView$(dart.void), html.Element]), app_view.AppView$(dart.void), html.Element]),
    [_runViewUpdates]: dart.fnType(dart.void, []),
    tick: dart.fnType(dart.void, []),
    [_runTick]: dart.fnType(dart.void, []),
    [_runTickGuarded]: dart.fnType(core.bool, []),
    [_checkForChangeDetectionError]: dart.fnType(core.bool, []),
    [_resetViewErrors]: dart.fnType(dart.void, []),
    reportViewException: dart.fnType(dart.void, [app_view.AppView$(dart.void), core.Object], [core.StackTrace]),
    run: dart.gFnType(R => [async.FutureOr$(R), [dart.fnType(async.FutureOr$(R), [])]])
  }));
  dart.setLibraryUri(host$.ChangeDetectionHost, "package:angular/src/core/change_detection/host.dart");
  dart.setFieldSignature(host$.ChangeDetectionHost, () => ({
    __proto__: dart.getFields(host$.ChangeDetectionHost.__proto__),
    [_lastGuardedView]: dart.fieldType(app_view.AppView$(dart.void)),
    [_lastCaughtException]: dart.fieldType(core.Object),
    [_lastCaughtTrace]: dart.fieldType(core.StackTrace),
    [_runningTick]: dart.fieldType(core.bool),
    [_changeDetectors]: dart.finalFieldType(core.List$(change_detector_ref.ChangeDetectorRef)),
    [_scheduledCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [app_view.AppView$(dart.void), html.Element]))),
    [_scheduledViews]: dart.finalFieldType(core.List$(app_view.AppView$(dart.void))),
    [_scheduledElements]: dart.finalFieldType(core.List$(html.Element))
  }));
  dart.defineLazy(host$.ChangeDetectionHost, {
    /*host$.ChangeDetectionHost._current*/get _current() {
      return null;
    },
    set _current(_) {}
  });
  const _disposeListeners = dart.privateName(application_ref, "_disposeListeners");
  const _rootComponents = dart.privateName(application_ref, "_rootComponents");
  const _onErrorSub = dart.privateName(application_ref, "_onErrorSub");
  const _onMicroSub = dart.privateName(application_ref, "_onMicroSub");
  const _ngZone$ = dart.privateName(application_ref, "_ngZone");
  const _exceptionHandler$ = dart.privateName(application_ref, "_exceptionHandler");
  const _injector$ = dart.privateName(application_ref, "_injector");
  const _loadedRootComponent = dart.privateName(application_ref, "_loadedRootComponent");
  const _destroyedRootComponent = dart.privateName(application_ref, "_destroyedRootComponent");
  application_ref.ApplicationRef = class ApplicationRef extends host$.ChangeDetectionHost {
    registerDisposeListener(listener) {
      this[_disposeListeners][$add](listener);
    }
    bootstrap(T, componentFactory) {
      return optimizations.unsafeCast(component_factory.ComponentRef$(T), this.run(core.Object, dart.fn(() => {
        let component = componentFactory.create(this[_injector$]);
        let existing = html.querySelector(componentFactory.selector);
        let replacement = null;
        if (existing != null) {
          let newElement = component.location;
          if (newElement.id == null || newElement.id[$isEmpty]) {
            newElement.id = existing.id;
          }
          replacement = newElement;
          existing[$replaceWith](replacement);
        } else {
          if (!(component.location != null)) dart.assertFailed(null, "org-dartlang-app:///packages/angular/src/core/application_ref.dart", 84, 16, "component.location != null");
          html.document.body[$append](component.location);
        }
        let injector = component.injector;
        let testability = injector.provideTypeOptional(testability$.Testability, dart.wrapType(testability$.Testability));
        if (testability != null) {
          let registry = this[_injector$].provideType(testability$.TestabilityRegistry, dart.wrapType(testability$.TestabilityRegistry));
          registry.registerApplication(component.location, testability);
        }
        this[_loadedRootComponent](component, replacement);
        return component;
      }, dart.fnType(component_factory.ComponentRef$(T), []))));
    }
    [_loadedRootComponent](component, node) {
      this[_rootComponents][$add](component);
      component.onDestroy(dart.fn(() => {
        let t4;
        this[_destroyedRootComponent](component);
        t4 = node;
        t4 == null ? null : t4[$remove]();
      }, VoidToNull()));
      this.registerChangeDetector(component.changeDetectorRef);
      this.tick();
    }
    [_destroyedRootComponent](component) {
      if (!dart.test(this[_rootComponents][$remove](component))) {
        return;
      }
      this.unregisterChangeDetector(component.changeDetectorRef);
    }
    dispose() {
      this[_onErrorSub].cancel();
      this[_onMicroSub].cancel();
      for (let component of this[_rootComponents]) {
        component.destroy();
      }
      for (let listener of this[_disposeListeners]) {
        listener();
      }
    }
    handleUncaughtException(error, trace, reason) {
      if (trace === void 0) trace = null;
      if (reason === void 0) reason = null;
      this[_exceptionHandler$].call(error, trace, reason);
    }
    runInZone(R, callback) {
      return this[_ngZone$].run(R, callback);
    }
  };
  (application_ref.ApplicationRef.__ = function(_ngZone, _exceptionHandler, _injector) {
    this[_disposeListeners] = JSArrayOfVoidTovoid().of([]);
    this[_rootComponents] = JSArrayOfComponentRefOfvoid().of([]);
    this[_onErrorSub] = null;
    this[_onMicroSub] = null;
    this[_ngZone$] = _ngZone;
    this[_exceptionHandler$] = _exceptionHandler;
    this[_injector$] = _injector;
    application_ref.ApplicationRef.__proto__.new.call(this);
    this[_onErrorSub] = this[_ngZone$].onError.listen(dart.fn(e => {
      this.handleUncaughtException(e.error, new core._StringStackTrace.new(e.stackTrace[$join]("\n")));
    }, NgZoneErrorToNull()));
    this[_onMicroSub] = this[_ngZone$].onMicrotaskEmpty.listen(dart.fn(_ => {
      this[_ngZone$].runGuarded(dart.bind(this, 'tick'));
    }, voidToNull()));
  }).prototype = application_ref.ApplicationRef.prototype;
  dart.addTypeTests(application_ref.ApplicationRef);
  dart.setMethodSignature(application_ref.ApplicationRef, () => ({
    __proto__: dart.getMethods(application_ref.ApplicationRef.__proto__),
    registerDisposeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    bootstrap: dart.gFnType(T => [component_factory.ComponentRef$(T), [component_factory.ComponentFactory$(T)]]),
    [_loadedRootComponent]: dart.fnType(dart.void, [component_factory.ComponentRef$(dart.void), html.Element]),
    [_destroyedRootComponent]: dart.fnType(dart.void, [component_factory.ComponentRef$(dart.void)]),
    dispose: dart.fnType(dart.void, []),
    handleUncaughtException: dart.fnType(dart.void, [core.Object], [core.StackTrace, core.String]),
    runInZone: dart.gFnType(R => [R, [dart.fnType(R, [])]])
  }));
  dart.setLibraryUri(application_ref.ApplicationRef, "package:angular/src/core/application_ref.dart");
  dart.setFieldSignature(application_ref.ApplicationRef, () => ({
    __proto__: dart.getFields(application_ref.ApplicationRef.__proto__),
    [_disposeListeners]: dart.finalFieldType(core.List$(dart.fnType(dart.void, []))),
    [_rootComponents]: dart.finalFieldType(core.List$(component_factory.ComponentRef$(dart.void))),
    [_exceptionHandler$]: dart.finalFieldType(exception_handler.ExceptionHandler),
    [_injector$]: dart.finalFieldType(injector.Injector),
    [_ngZone$]: dart.finalFieldType(ng_zone.NgZone),
    [_onErrorSub]: dart.fieldType(async.StreamSubscription$(dart.void)),
    [_onMicroSub]: dart.fieldType(async.StreamSubscription$(dart.void))
  }));
  application_ref.internalCreateApplicationRef = function internalCreateApplicationRef(ngZone, injector) {
    return new application_ref.ApplicationRef.__(ngZone, injector.provideType(exception_handler.ExceptionHandler, dart.wrapType(exception_handler.ExceptionHandler)), injector);
  };
  const _pendingCount = dart.privateName(testability$, "_pendingCount");
  const _isZoneStable = dart.privateName(testability$, "_isZoneStable");
  const _didWork = dart.privateName(testability$, "_didWork");
  const _callbacks = dart.privateName(testability$, "_callbacks");
  const _ngZone$0 = dart.privateName(testability$, "_ngZone");
  const _watchAngularEvents = dart.privateName(testability$, "_watchAngularEvents");
  const _runCallbacksIfReady = dart.privateName(testability$, "_runCallbacksIfReady");
  testability$.Testability = class Testability extends core.Object {
    [_watchAngularEvents]() {
      this[_ngZone$0].onTurnStart.listen(dart.fn(_ => {
        this[_didWork] = true;
        this[_isZoneStable] = false;
      }, voidToNull()));
      this[_ngZone$0].runOutsideAngular(core.Null, dart.fn(() => {
        this[_ngZone$0].onTurnDone.listen(dart.fn(_ => {
          ng_zone.NgZone.assertNotInAngularZone();
          async.scheduleMicrotask(dart.fn(() => {
            this[_isZoneStable] = true;
            this[_runCallbacksIfReady]();
          }, VoidToNull()));
        }, voidToNull()));
      }, VoidToNull()));
    }
    increasePendingRequestCount() {
      this[_pendingCount] = dart.notNull(this[_pendingCount]) + 1;
      this[_didWork] = true;
      return this[_pendingCount];
    }
    decreasePendingRequestCount() {
      this[_pendingCount] = dart.notNull(this[_pendingCount]) - 1;
      if (!(dart.notNull(this[_pendingCount]) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/angular/src/core/testability/testability.dart", 49, 12, "_pendingCount >= 0");
      this[_runCallbacksIfReady]();
      return this[_pendingCount];
    }
    isStable() {
      return dart.test(this[_isZoneStable]) && this[_pendingCount] === 0 && !dart.test(this[_ngZone$0].hasPendingMacrotasks);
    }
    [_runCallbacksIfReady]() {
      if (dart.test(this.isStable())) {
        async.scheduleMicrotask(dart.fn(() => {
          while (dart.test(this[_callbacks][$isNotEmpty])) {
            dart.dcall(this[_callbacks][$removeLast](), [this[_didWork]]);
          }
          this[_didWork] = false;
        }, VoidToNull()));
      } else {
        this[_didWork] = true;
      }
    }
    whenStable(callback) {
      this[_callbacks][$add](callback);
      this[_runCallbacksIfReady]();
    }
    getPendingRequestCount() {
      return this[_pendingCount];
    }
  };
  (testability$.Testability.new = function(_ngZone) {
    this[_pendingCount] = 0;
    this[_isZoneStable] = true;
    this[_didWork] = false;
    this[_callbacks] = JSArrayOfFunction().of([]);
    this[_ngZone$0] = _ngZone;
    this[_watchAngularEvents]();
  }).prototype = testability$.Testability.prototype;
  dart.addTypeTests(testability$.Testability);
  dart.setMethodSignature(testability$.Testability, () => ({
    __proto__: dart.getMethods(testability$.Testability.__proto__),
    [_watchAngularEvents]: dart.fnType(dart.void, []),
    increasePendingRequestCount: dart.fnType(core.num, []),
    decreasePendingRequestCount: dart.fnType(core.num, []),
    isStable: dart.fnType(core.bool, []),
    [_runCallbacksIfReady]: dart.fnType(dart.void, []),
    whenStable: dart.fnType(dart.void, [core.Function]),
    getPendingRequestCount: dart.fnType(core.num, [])
  }));
  dart.setLibraryUri(testability$.Testability, "package:angular/src/core/testability/testability.dart");
  dart.setFieldSignature(testability$.Testability, () => ({
    __proto__: dart.getFields(testability$.Testability.__proto__),
    [_ngZone$0]: dart.fieldType(ng_zone.NgZone),
    [_pendingCount]: dart.fieldType(core.num),
    [_isZoneStable]: dart.fieldType(core.bool),
    [_didWork]: dart.fieldType(core.bool),
    [_callbacks]: dart.finalFieldType(core.List$(core.Function))
  }));
  const _applications = dart.privateName(testability$, "_applications");
  const _testabilityGetter = dart.privateName(testability$, "_testabilityGetter");
  testability$.TestabilityRegistry = class TestabilityRegistry extends core.Object {
    setTestabilityGetter(getter) {
      this[_testabilityGetter] = getter;
      getter.addToWindow(this);
    }
    registerApplication(token, testability) {
      this[_applications][$_set](token, testability);
    }
    getTestability(element) {
      return this[_applications][$_get](element);
    }
    getAllTestabilities() {
      return this[_applications][$values][$toList]();
    }
    getAllRootElements() {
      return this[_applications][$keys][$toList]();
    }
    findTestabilityInTree(element) {
      return this[_testabilityGetter].findTestabilityInTree(this, element);
    }
  };
  (testability$.TestabilityRegistry.new = function() {
    this[_applications] = new (LinkedMapOfdynamic$Testability()).new();
    this[_testabilityGetter] = new testability$._NoopGetTestability.new();
    ;
  }).prototype = testability$.TestabilityRegistry.prototype;
  dart.addTypeTests(testability$.TestabilityRegistry);
  dart.setMethodSignature(testability$.TestabilityRegistry, () => ({
    __proto__: dart.getMethods(testability$.TestabilityRegistry.__proto__),
    setTestabilityGetter: dart.fnType(dart.void, [testability$.GetTestability]),
    registerApplication: dart.fnType(dart.void, [html.Element, testability$.Testability]),
    getTestability: dart.fnType(testability$.Testability, [html.Element]),
    getAllTestabilities: dart.fnType(core.List$(testability$.Testability), []),
    getAllRootElements: dart.fnType(core.List, []),
    findTestabilityInTree: dart.fnType(testability$.Testability, [html.Element])
  }));
  dart.setLibraryUri(testability$.TestabilityRegistry, "package:angular/src/core/testability/testability.dart");
  dart.setFieldSignature(testability$.TestabilityRegistry, () => ({
    __proto__: dart.getFields(testability$.TestabilityRegistry.__proto__),
    [_applications]: dart.finalFieldType(core.Map$(dart.dynamic, testability$.Testability)),
    [_testabilityGetter]: dart.fieldType(testability$.GetTestability)
  }));
  testability$.GetTestability = class GetTestability extends core.Object {};
  (testability$.GetTestability.new = function() {
    ;
  }).prototype = testability$.GetTestability.prototype;
  dart.addTypeTests(testability$.GetTestability);
  dart.setLibraryUri(testability$.GetTestability, "package:angular/src/core/testability/testability.dart");
  testability$._NoopGetTestability = class _NoopGetTestability extends core.Object {
    addToWindow(registry) {
    }
    findTestabilityInTree(registry, elem) {
      return null;
    }
  };
  (testability$._NoopGetTestability.new = function() {
    ;
  }).prototype = testability$._NoopGetTestability.prototype;
  dart.addTypeTests(testability$._NoopGetTestability);
  testability$._NoopGetTestability[dart.implements] = () => [testability$.GetTestability];
  dart.setMethodSignature(testability$._NoopGetTestability, () => ({
    __proto__: dart.getMethods(testability$._NoopGetTestability.__proto__),
    addToWindow: dart.fnType(dart.void, [testability$.TestabilityRegistry]),
    findTestabilityInTree: dart.fnType(testability$.Testability, [testability$.TestabilityRegistry, html.Element])
  }));
  dart.setLibraryUri(testability$._NoopGetTestability, "package:angular/src/core/testability/testability.dart");
  exceptions$46template.initReflector = function initReflector() {
  };
  testability$46template.initReflector = function initReflector$() {
    if (dart.test(testability$46template._visited)) {
      return;
    }
    testability$46template._visited = true;
    ng_zone$46template.initReflector();
  };
  dart.defineLazy(testability$46template, {
    /*testability$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  view_container_ref$46template.initReflector = function initReflector$0() {
    if (dart.test(view_container_ref$46template._visited)) {
      return;
    }
    view_container_ref$46template._visited = true;
    component_factory$46template.initReflector();
    component_loader$46template.initReflector();
    element_ref$46template.initReflector();
    injector$46template.initReflector();
    template_ref$46template.initReflector();
    view_ref$46template.initReflector();
  };
  dart.defineLazy(view_container_ref$46template, {
    /*view_container_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  view_ref$46template.initReflector = function initReflector$1() {
  };
  template_ref$46template.initReflector = function initReflector$2() {
    if (dart.test(template_ref$46template._visited)) {
      return;
    }
    template_ref$46template._visited = true;
    app_view$46template.initReflector();
    element_ref$46template.initReflector();
    view_container$46template.initReflector();
    view_ref$46template.initReflector();
  };
  dart.defineLazy(template_ref$46template, {
    /*template_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  view_container$46template.initReflector = function initReflector$3() {
    if (dart.test(view_container$46template._visited)) {
      return;
    }
    view_container$46template._visited = true;
    app_view$46template.initReflector();
    component_factory$46template.initReflector();
    component_loader$46template.initReflector();
    element_ref$46template.initReflector();
    injector$46template.initReflector();
    runtime$46template.initReflector();
    template_ref$46template.initReflector();
    view_container_ref$46template.initReflector();
    view_ref$46template.initReflector();
    view_type$46template.initReflector();
  };
  dart.defineLazy(view_container$46template, {
    /*view_container$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  view_type$46template.initReflector = function initReflector$4() {
  };
  element_ref$46template.initReflector = function initReflector$5() {
  };
  component_loader$46template.initReflector = function initReflector$6() {
    if (dart.test(component_loader$46template._visited)) {
      return;
    }
    component_loader$46template._visited = true;
    reflector.registerFactory(dart.wrapType(component_loader.ComponentLoader), dart.fn(() => new component_loader.ComponentLoader.new(), VoidToComponentLoader()));
    injector$46template.initReflector();
    decorators$46template.initReflector();
    component_factory$46template.initReflector();
    view_container_ref$46template.initReflector();
  };
  dart.defineLazy(component_loader$46template, {
    /*component_loader$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  component_factory$46template.initReflector = function initReflector$7() {
    if (dart.test(component_factory$46template._visited)) {
      return;
    }
    component_factory$46template._visited = true;
    change_detection$46template.initReflector();
    app_view$46template.initReflector();
    di$46template.initReflector();
    view_ref$46template.initReflector();
  };
  dart.defineLazy(component_factory$46template, {
    /*component_factory$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_view$46template.initReflector = function initReflector$8() {
    if (dart.test(app_view$46template._visited)) {
      return;
    }
    app_view$46template._visited = true;
    app_view_utils$46template.initReflector();
    component_factory$46template.initReflector();
    change_detection$46template.initReflector();
    component_state$46template.initReflector();
    host$46template.initReflector();
    style_encapsulation$46template.initReflector();
    errors$46template.initReflector();
    element$46template.initReflector();
    injector$46template.initReflector();
    runtime$46template.initReflector();
    dom_helpers$46template.initReflector();
    template_ref$46template.initReflector();
    view_container$46template.initReflector();
    view_fragment$46template.initReflector();
    view_ref$46template.initReflector();
    view_type$46template.initReflector();
    view$46template.initReflector();
  };
  dart.defineLazy(app_view$46template, {
    /*app_view$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  view$46template.initReflector = function initReflector$9() {
    if (dart.test(view$46template._visited)) {
      return;
    }
    view$46template._visited = true;
    injector$46template.initReflector();
  };
  dart.defineLazy(view$46template, {
    /*view$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  view_fragment$46template.initReflector = function initReflector$10() {
    if (dart.test(view_fragment$46template._visited)) {
      return;
    }
    view_fragment$46template._visited = true;
    runtime$46template.initReflector();
    view_container$46template.initReflector();
  };
  dart.defineLazy(view_fragment$46template, {
    /*view_fragment$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dom_helpers$46template.initReflector = function initReflector$11() {
    if (dart.test(dom_helpers$46template._visited)) {
      return;
    }
    dom_helpers$46template._visited = true;
    optimizations$46template.initReflector();
  };
  dart.defineLazy(dom_helpers$46template, {
    /*dom_helpers$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  element$46template.initReflector = function initReflector$12() {
    if (dart.test(element$46template._visited)) {
      return;
    }
    element$46template._visited = true;
    app_view$46template.initReflector();
    hierarchical$46template.initReflector();
    injector$46template.initReflector();
  };
  dart.defineLazy(element$46template, {
    /*element$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  style_encapsulation$46template.initReflector = function initReflector$13() {
    if (dart.test(style_encapsulation$46template._visited)) {
      return;
    }
    style_encapsulation$46template._visited = true;
    app_view_utils$46template.initReflector();
    runtime$46template.initReflector();
  };
  dart.defineLazy(style_encapsulation$46template, {
    /*style_encapsulation$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  const OpaqueToken__uniqueName = dart.privateName(opaque_token, "OpaqueToken._uniqueName");
  let C18;
  const Inject_token = dart.privateName(decorators, "Inject.token");
  let C17;
  let C16;
  let C20;
  let C19;
  let C22;
  let C21;
  let C15;
  app_view_utils$46template.initReflector = function initReflector$14() {
    if (dart.test(app_view_utils$46template._visited)) {
      return;
    }
    app_view_utils$46template._visited = true;
    reflector.registerFactory(dart.wrapType(app_view_utils.AppViewUtils), dart.fn((p0, p1, p2) => new app_view_utils.AppViewUtils.new(p0, p1, p2), StringAndSanitizationServiceAndEventManagerToAppViewUtils()));
    reflector.registerDependencies(dart.wrapType(app_view_utils.AppViewUtils), C15 || CT.C15);
    exceptions$46template.initReflector();
    di$46template$.initReflector();
    application_tokens$46template.initReflector();
    change_detection$46template.initReflector();
    security$46template.initReflector();
    runtime$46template.initReflector();
    dom_events$46template.initReflector();
  };
  dart.defineLazy(app_view_utils$46template, {
    /*app_view_utils$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let C25;
  let C24;
  let C23;
  dom_events$46template.initReflector = function initReflector$15() {
    if (dart.test(dom_events$46template._visited)) {
      return;
    }
    dom_events$46template._visited = true;
    reflector.registerFactory(dart.wrapType(dom_events.EventManager), dart.fn(p0 => new dom_events.EventManager.new(p0), NgZoneToEventManager()));
    reflector.registerDependencies(dart.wrapType(dom_events.EventManager), C23 || CT.C23);
    core$46template.initReflector();
  };
  dart.defineLazy(dom_events$46template, {
    /*dom_events$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  security$46template.initReflector = function initReflector$16() {
  };
  host$46template.initReflector = function initReflector$17() {
    if (dart.test(host$46template._visited)) {
      return;
    }
    host$46template._visited = true;
    change_detection$46template.initReflector();
    constants$46template.initReflector();
    app_view$46template.initReflector();
    runtime$46template.initReflector();
  };
  dart.defineLazy(host$46template, {
    /*host$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  const _viewContainerRef$ = dart.privateName(ng_switch, "_viewContainerRef");
  const _templateRef$ = dart.privateName(ng_switch, "_templateRef");
  ng_switch.SwitchView = class SwitchView extends core.Object {
    create() {
      this[_viewContainerRef$].createEmbeddedView(this[_templateRef$]);
    }
    destroy() {
      this[_viewContainerRef$].clear();
    }
  };
  (ng_switch.SwitchView.new = function(_viewContainerRef, _templateRef) {
    this[_viewContainerRef$] = _viewContainerRef;
    this[_templateRef$] = _templateRef;
    ;
  }).prototype = ng_switch.SwitchView.prototype;
  dart.addTypeTests(ng_switch.SwitchView);
  dart.setMethodSignature(ng_switch.SwitchView, () => ({
    __proto__: dart.getMethods(ng_switch.SwitchView.__proto__),
    create: dart.fnType(dart.void, []),
    destroy: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(ng_switch.SwitchView, "package:angular/src/common/directives/ng_switch.dart");
  dart.setFieldSignature(ng_switch.SwitchView, () => ({
    __proto__: dart.getFields(ng_switch.SwitchView.__proto__),
    [_viewContainerRef$]: dart.finalFieldType(view_container_ref.ViewContainerRef),
    [_templateRef$]: dart.finalFieldType(template_ref.TemplateRef)
  }));
  const _switchValue = dart.privateName(ng_switch, "_switchValue");
  const _useDefault = dart.privateName(ng_switch, "_useDefault");
  const _valueViews = dart.privateName(ng_switch, "_valueViews");
  const _activeViews = dart.privateName(ng_switch, "_activeViews");
  const _emptyAllActiveViews = dart.privateName(ng_switch, "_emptyAllActiveViews");
  const _activateViews = dart.privateName(ng_switch, "_activateViews");
  const _deregisterView = dart.privateName(ng_switch, "_deregisterView");
  const _registerView = dart.privateName(ng_switch, "_registerView");
  const _onWhenValueChanged = dart.privateName(ng_switch, "_onWhenValueChanged");
  ng_switch.NgSwitch = class NgSwitch extends core.Object {
    set ngSwitch(value) {
      let views = this[_valueViews][$_get](value);
      if (views != null) {
        this[_useDefault] = false;
      } else {
        if (dart.test(this[_useDefault])) return;
        this[_useDefault] = true;
        views = this[_valueViews][$_get](ng_switch._WHEN_DEFAULT);
      }
      this[_emptyAllActiveViews]();
      this[_activateViews](views);
      this[_switchValue] = value;
    }
    [_onWhenValueChanged](oldWhen, newWhen, view) {
      this[_deregisterView](oldWhen, view);
      this[_registerView](newWhen, view);
      if (core.identical(oldWhen, this[_switchValue])) {
        view.destroy();
        this[_activeViews][$remove](view);
      } else if (core.identical(newWhen, this[_switchValue])) {
        if (dart.test(this[_useDefault])) {
          this[_useDefault] = false;
          this[_emptyAllActiveViews]();
        }
        view.create();
        this[_activeViews][$add](view);
      }
      if (this[_activeViews][$length] === 0 && !dart.test(this[_useDefault])) {
        this[_useDefault] = true;
        this[_activateViews](this[_valueViews][$_get](ng_switch._WHEN_DEFAULT));
      }
    }
    [_emptyAllActiveViews]() {
      let activeContainers = this[_activeViews];
      for (let i = 0, len = activeContainers[$length]; i < dart.notNull(len); i = i + 1) {
        activeContainers[$_get](i).destroy();
      }
      this[_activeViews] = JSArrayOfSwitchView().of([]);
    }
    [_activateViews](views) {
      if (views == null) return;
      for (let i = 0, len = views[$length]; i < dart.notNull(len); i = i + 1) {
        views[$_get](i).create();
      }
      this[_activeViews] = views;
    }
    [_registerView](value, view) {
      let views = this[_valueViews][$_get](value);
      if (views == null) {
        views = JSArrayOfSwitchView().of([]);
        this[_valueViews][$_set](value, views);
      }
      views[$add](view);
    }
    [_deregisterView](value, view) {
      if (core.identical(value, ng_switch._WHEN_DEFAULT)) return;
      let views = this[_valueViews][$_get](value);
      if (views[$length] === 1) {
        dart.test(this[_valueViews][$containsKey](value)) && (this[_valueViews][$remove](value) != null || true);
      } else {
        views[$remove](view);
      }
    }
  };
  (ng_switch.NgSwitch.new = function() {
    this[_switchValue] = null;
    this[_useDefault] = false;
    this[_valueViews] = new (LinkedMapOfdynamic$ListOfSwitchView()).new();
    this[_activeViews] = JSArrayOfSwitchView().of([]);
    ;
  }).prototype = ng_switch.NgSwitch.prototype;
  dart.addTypeTests(ng_switch.NgSwitch);
  dart.setMethodSignature(ng_switch.NgSwitch, () => ({
    __proto__: dart.getMethods(ng_switch.NgSwitch.__proto__),
    [_onWhenValueChanged]: dart.fnType(dart.void, [dart.dynamic, dart.dynamic, ng_switch.SwitchView]),
    [_emptyAllActiveViews]: dart.fnType(dart.void, []),
    [_activateViews]: dart.fnType(dart.void, [core.List$(ng_switch.SwitchView)]),
    [_registerView]: dart.fnType(dart.void, [dart.dynamic, ng_switch.SwitchView]),
    [_deregisterView]: dart.fnType(dart.void, [dart.dynamic, ng_switch.SwitchView])
  }));
  dart.setSetterSignature(ng_switch.NgSwitch, () => ({
    __proto__: dart.getSetters(ng_switch.NgSwitch.__proto__),
    ngSwitch: dart.dynamic
  }));
  dart.setLibraryUri(ng_switch.NgSwitch, "package:angular/src/common/directives/ng_switch.dart");
  dart.setFieldSignature(ng_switch.NgSwitch, () => ({
    __proto__: dart.getFields(ng_switch.NgSwitch.__proto__),
    [_switchValue]: dart.fieldType(dart.dynamic),
    [_useDefault]: dart.fieldType(core.bool),
    [_valueViews]: dart.finalFieldType(core.Map$(dart.dynamic, core.List$(ng_switch.SwitchView))),
    [_activeViews]: dart.fieldType(core.List$(ng_switch.SwitchView))
  }));
  const _value = dart.privateName(ng_switch, "_value");
  const _view = dart.privateName(ng_switch, "_view");
  const _switch = dart.privateName(ng_switch, "_switch");
  ng_switch.NgSwitchWhen = class NgSwitchWhen extends core.Object {
    set ngSwitchCase(value) {
      this.ngSwitchWhen = value;
    }
    set ngSwitchWhen(value) {
      if (core.identical(value, this[_value])) return;
      this[_switch][_onWhenValueChanged](this[_value], value, this[_view]);
      this[_value] = value;
    }
  };
  (ng_switch.NgSwitchWhen.new = function(viewContainer, templateRef, ngSwitch) {
    this[_value] = ng_switch._WHEN_DEFAULT;
    this[_view] = null;
    this[_switch] = null;
    this[_switch] = ngSwitch;
    this[_view] = new ng_switch.SwitchView.new(viewContainer, templateRef);
  }).prototype = ng_switch.NgSwitchWhen.prototype;
  dart.addTypeTests(ng_switch.NgSwitchWhen);
  dart.setSetterSignature(ng_switch.NgSwitchWhen, () => ({
    __proto__: dart.getSetters(ng_switch.NgSwitchWhen.__proto__),
    ngSwitchCase: dart.dynamic,
    ngSwitchWhen: dart.dynamic
  }));
  dart.setLibraryUri(ng_switch.NgSwitchWhen, "package:angular/src/common/directives/ng_switch.dart");
  dart.setFieldSignature(ng_switch.NgSwitchWhen, () => ({
    __proto__: dart.getFields(ng_switch.NgSwitchWhen.__proto__),
    [_value]: dart.fieldType(dart.dynamic),
    [_view]: dart.fieldType(ng_switch.SwitchView),
    [_switch]: dart.fieldType(ng_switch.NgSwitch)
  }));
  ng_switch.NgSwitchDefault = class NgSwitchDefault extends core.Object {};
  (ng_switch.NgSwitchDefault.new = function(viewContainer, templateRef, switchDirective) {
    switchDirective[_registerView](ng_switch._WHEN_DEFAULT, new ng_switch.SwitchView.new(viewContainer, templateRef));
  }).prototype = ng_switch.NgSwitchDefault.prototype;
  dart.addTypeTests(ng_switch.NgSwitchDefault);
  dart.setLibraryUri(ng_switch.NgSwitchDefault, "package:angular/src/common/directives/ng_switch.dart");
  dart.defineLazy(ng_switch, {
    /*ng_switch._WHEN_DEFAULT*/get _WHEN_DEFAULT() {
      return C1 || CT.C1;
    }
  });
  const _loader = dart.privateName(dynamic_component_loader, "_loader");
  const _loader$ = dart.privateName(dynamic_component_loader, "SlowComponentLoader._loader");
  dynamic_component_loader.SlowComponentLoader = class SlowComponentLoader extends core.Object {
    get [_loader]() {
      return this[_loader$];
    }
    set [_loader](value) {
      super[_loader] = value;
    }
    load(T, type, injector) {
      let factoryFuture = FutureOfComponentFactoryOfObject().value(component_resolver.typeToFactory(type));
      return factoryFuture.then(component_factory.ComponentRef$(T), dart.fn(component => {
        let reference = this[_loader].loadDetached(core.Object, component, {injector: injector});
        reference.onDestroy(dart.fn(() => {
          reference.location[$remove]();
        }, VoidToNull()));
        return optimizations.unsafeCast(async.FutureOr$(component_factory.ComponentRef$(T)), reference);
      }, dart.fnType(async.FutureOr$(component_factory.ComponentRef$(T)), [ComponentFactoryOfObject()])));
    }
    loadNextToLocation(T, type, location, injector) {
      if (injector === void 0) injector = null;
      let factoryFuture = FutureOfComponentFactoryOfObject().value(component_resolver.typeToFactory(type));
      return factoryFuture.then(component_factory.ComponentRef$(T), dart.fn(component => this[_loader].loadNextToLocation(T, optimizations.unsafeCast(component_factory.ComponentFactory$(T), component), location, {injector: injector}), dart.fnType(component_factory.ComponentRef$(T), [ComponentFactoryOfObject()])));
    }
  };
  (dynamic_component_loader.SlowComponentLoader.new = function(_loader) {
    this[_loader$] = _loader;
    ;
  }).prototype = dynamic_component_loader.SlowComponentLoader.prototype;
  dart.addTypeTests(dynamic_component_loader.SlowComponentLoader);
  dart.setMethodSignature(dynamic_component_loader.SlowComponentLoader, () => ({
    __proto__: dart.getMethods(dynamic_component_loader.SlowComponentLoader.__proto__),
    load: dart.gFnType(T => [async.Future$(component_factory.ComponentRef$(T)), [core.Type, injector.Injector]]),
    loadNextToLocation: dart.gFnType(T => [async.Future$(component_factory.ComponentRef$(T)), [core.Type, view_container_ref.ViewContainerRef], [injector.Injector]])
  }));
  dart.setLibraryUri(dynamic_component_loader.SlowComponentLoader, "package:angular/src/core/linker/dynamic_component_loader.dart");
  dart.setFieldSignature(dynamic_component_loader.SlowComponentLoader, () => ({
    __proto__: dart.getFields(dynamic_component_loader.SlowComponentLoader.__proto__),
    [_loader]: dart.finalFieldType(component_loader.ComponentLoader)
  }));
  component_resolver.typeToFactory = function typeToFactory(typeOrFactory) {
    return ComponentFactoryOfObject().is(typeOrFactory) ? typeOrFactory : optimizations.unsafeCast(ComponentFactoryOfObject(), reflector.getComponent(optimizations.unsafeCast(core.Type, typeOrFactory)));
  };
  dom_sanitization_service_impl$46template.initReflector = function initReflector$18() {
    if (dart.test(dom_sanitization_service_impl$46template._visited)) {
      return;
    }
    dom_sanitization_service_impl$46template._visited = true;
    reflector.registerFactory(dart.wrapType(dom_sanitization_service_impl.DomSanitizationServiceImpl), dart.fn(() => dom_sanitization_service_impl.DomSanitizationServiceImpl.new(), VoidToDomSanitizationServiceImpl()));
    di$46template.initReflector();
    security$46template.initReflector();
    dom_sanitization_service$46template.initReflector();
    html_sanitizer$46template.initReflector();
    runtime$46template.initReflector();
    style_sanitizer$46template.initReflector();
    url_sanitizer$46template.initReflector();
  };
  dart.defineLazy(dom_sanitization_service_impl$46template, {
    /*dom_sanitization_service_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  url_sanitizer$46template.initReflector = function initReflector$19() {
  };
  url_sanitizer.internalSanitizeUrl = function internalSanitizeUrl(url) {
    if (url[$isEmpty]) return url;
    return dart.test(url_sanitizer._safeUrlPattern.hasMatch(url)) || dart.test(url_sanitizer._dataUrlPattern.hasMatch(url)) ? url : "unsafe:" + dart.str(url);
  };
  dart.defineLazy(url_sanitizer, {
    /*url_sanitizer._safeUrlPattern*/get _safeUrlPattern() {
      return core.RegExp.new("^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))", {caseSensitive: false});
    },
    /*url_sanitizer._dataUrlPattern*/get _dataUrlPattern() {
      return core.RegExp.new("^data:(?:image/(?:bmp|gif|" + "jpeg|jpg|png|tiff|webp)|video/(?:mpeg|mp4|ogg|webm));" + "base64,[a-z0-9+/]+=*$", {caseSensitive: false});
    }
  });
  style_sanitizer$46template.initReflector = function initReflector$20() {
    if (dart.test(style_sanitizer$46template._visited)) {
      return;
    }
    style_sanitizer$46template._visited = true;
    runtime$46template.initReflector();
    url_sanitizer$46template.initReflector();
  };
  dart.defineLazy(style_sanitizer$46template, {
    /*style_sanitizer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  style_sanitizer._hasBalancedQuotes = function _hasBalancedQuotes(value) {
    let quoteCodeUnit = "'"[$codeUnitAt](0);
    let doubleQuoteCodeUnit = "\""[$codeUnitAt](0);
    let outsideSingle = true;
    let outsideDouble = true;
    for (let i = 0; i < value.length; i = i + 1) {
      let c = value[$codeUnitAt](i);
      if (c === quoteCodeUnit && outsideDouble) {
        outsideSingle = !outsideSingle;
      } else if (c === doubleQuoteCodeUnit && outsideSingle) {
        outsideDouble = !outsideDouble;
      }
    }
    return outsideSingle && outsideDouble;
  };
  style_sanitizer.internalSanitizeStyle = function internalSanitizeStyle(value) {
    value = value[$trim]();
    if (value[$isEmpty]) return "";
    let urlMatch = style_sanitizer._urlRe.firstMatch(value);
    if (urlMatch != null) {
      let input = urlMatch.group(0);
      if (url_sanitizer.internalSanitizeUrl(input) == input) {
        return value;
      }
    } else if (dart.test(style_sanitizer._safeStyleValue.hasMatch(value)) && dart.test(style_sanitizer._hasBalancedQuotes(value))) {
      return value;
    }
    if (value[$contains](";")) {
      let parts = value[$split](";");
      let failed = false;
      for (let part of parts) {
        let urlMatch = style_sanitizer._urlRe.firstMatch(part);
        if (urlMatch != null) {
          let input = urlMatch.group(0);
          if (url_sanitizer.internalSanitizeUrl(input) != input) {
            failed = true;
            break;
          }
        } else if (!(dart.equals(style_sanitizer._safeStyleValue.hasMatch(part), true) && dart.test(style_sanitizer._hasBalancedQuotes(part)))) {
          failed = true;
          break;
        }
      }
      if (!failed) return value;
    }
    if (dart.test(optimizations.isDevMode)) {
      html.window[$console].warn("Sanitizing unsafe style value " + dart.str(value) + " " + "(see http://g.co/ng/security#xss).");
    }
    return "unsafe";
  };
  dart.defineLazy(style_sanitizer, {
    /*style_sanitizer._VALUES*/get _VALUES() {
      return "[-,.\"'%_!# a-zA-Z0-9]+";
    },
    /*style_sanitizer._TRANSFORMATION_FNS*/get _TRANSFORMATION_FNS() {
      return "(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?";
    },
    /*style_sanitizer._COLOR_FNS*/get _COLOR_FNS() {
      return "(?:rgb|hsl)a?";
    },
    /*style_sanitizer._FN_ARGS*/get _FN_ARGS() {
      return "\\([-0-9.%, a-zA-Z]+\\)";
    },
    /*style_sanitizer._KEY*/get _KEY() {
      return "([a-zA-Z-]+[ ]?\\:)";
    },
    /*style_sanitizer._safeStyleValue*/get _safeStyleValue() {
      return core.RegExp.new("^(" + "[-,.\"'%_!# a-zA-Z0-9]+" + "|(" + "([a-zA-Z-]+[ ]?\\:)" + "[-,.\"'%_!# a-zA-Z0-9]+" + "[ ;]?)|((?:" + dart.str(style_sanitizer._TRANSFORMATION_FNS) + "|" + "(?:rgb|hsl)a?" + ")" + "\\([-0-9.%, a-zA-Z]+\\)" + ")[ ;]?)+$");
    },
    /*style_sanitizer._urlRe*/get _urlRe() {
      return core.RegExp.new("^url\\([^)]+\\)$");
    }
  });
  html_sanitizer$46template.initReflector = function initReflector$21() {
  };
  html_sanitizer.sanitizeHtmlInternal = function sanitizeHtmlInternal(value) {
    let t4;
    let inertFragment = (t4 = html_sanitizer._inertFragment, t4[$innerHtml] = value, t4);
    let safeHtml = inertFragment[$innerHtml];
    inertFragment[$children][$clear]();
    return safeHtml;
  };
  dart.defineLazy(html_sanitizer, {
    /*html_sanitizer._inertFragment*/get _inertFragment() {
      return html.DocumentFragment.new();
    }
  });
  dom_sanitization_service$46template.initReflector = function initReflector$22() {
    if (dart.test(dom_sanitization_service$46template._visited)) {
      return;
    }
    dom_sanitization_service$46template._visited = true;
    security$46template.initReflector();
    security$46template.initReflector();
  };
  dart.defineLazy(dom_sanitization_service$46template, {
    /*dom_sanitization_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dom_sanitization_service.SafeHtml = class SafeHtml extends security.SafeValue {};
  (dom_sanitization_service.SafeHtml.new = function() {
    ;
  }).prototype = dom_sanitization_service.SafeHtml.prototype;
  dart.addTypeTests(dom_sanitization_service.SafeHtml);
  dart.setLibraryUri(dom_sanitization_service.SafeHtml, "package:angular/src/security/dom_sanitization_service.dart");
  dom_sanitization_service.SafeStyle = class SafeStyle extends security.SafeValue {};
  (dom_sanitization_service.SafeStyle.new = function() {
    ;
  }).prototype = dom_sanitization_service.SafeStyle.prototype;
  dart.addTypeTests(dom_sanitization_service.SafeStyle);
  dart.setLibraryUri(dom_sanitization_service.SafeStyle, "package:angular/src/security/dom_sanitization_service.dart");
  dom_sanitization_service.SafeUrl = class SafeUrl extends security.SafeValue {};
  (dom_sanitization_service.SafeUrl.new = function() {
    ;
  }).prototype = dom_sanitization_service.SafeUrl.prototype;
  dart.addTypeTests(dom_sanitization_service.SafeUrl);
  dart.setLibraryUri(dom_sanitization_service.SafeUrl, "package:angular/src/security/dom_sanitization_service.dart");
  dom_sanitization_service.SafeResourceUrl = class SafeResourceUrl extends security.SafeValue {};
  (dom_sanitization_service.SafeResourceUrl.new = function() {
    ;
  }).prototype = dom_sanitization_service.SafeResourceUrl.prototype;
  dart.addTypeTests(dom_sanitization_service.SafeResourceUrl);
  dart.setLibraryUri(dom_sanitization_service.SafeResourceUrl, "package:angular/src/security/dom_sanitization_service.dart");
  dom_sanitization_service.DomSanitizationService = class DomSanitizationService extends core.Object {};
  (dom_sanitization_service.DomSanitizationService.new = function() {
    ;
  }).prototype = dom_sanitization_service.DomSanitizationService.prototype;
  dart.addTypeTests(dom_sanitization_service.DomSanitizationService);
  dom_sanitization_service.DomSanitizationService[dart.implements] = () => [security.SanitizationService];
  dart.setLibraryUri(dom_sanitization_service.DomSanitizationService, "package:angular/src/security/dom_sanitization_service.dart");
  let C26;
  dom_sanitization_service_impl.DomSanitizationServiceImpl = class DomSanitizationServiceImpl extends core.Object {
    static new() {
      return dom_sanitization_service_impl.DomSanitizationServiceImpl._instance;
    }
    sanitizeHtml(value) {
      if (value == null) return null;
      if (dom_sanitization_service_impl.SafeHtmlImpl.is(value)) return value.changingThisWillBypassSecurityTrust;
      if (security.SafeValue.is(value)) dart.throw(new core.UnsupportedError.new("Unexpected SecurityContext " + dart.str(value) + ", expecting html"));
      return html_sanitizer.sanitizeHtmlInternal(optimizations.unsafeCast(core.String, value));
    }
    sanitizeStyle(value) {
      if (value == null) return null;
      if (dom_sanitization_service_impl.SafeStyleImpl.is(value)) {
        return value.changingThisWillBypassSecurityTrust;
      }
      if (security.SafeValue.is(value)) dart.throw(new core.UnsupportedError.new("Unexpected SecurityContext " + dart.str(value) + ", " + "expecting style"));
      if (value == null) return null;
      return style_sanitizer.internalSanitizeStyle(typeof value == 'string' ? value : dart.toString(value));
    }
    sanitizeUrl(value) {
      if (value == null) return null;
      if (dom_sanitization_service_impl.SafeUrlImpl.is(value)) return value.changingThisWillBypassSecurityTrust;
      if (security.SafeValue.is(value)) dart.throw(new core.UnsupportedError.new("Unexpected SecurityContext " + dart.str(value) + ", " + "expecting url"));
      return url_sanitizer.internalSanitizeUrl(dart.toString(value));
    }
    sanitizeResourceUrl(value) {
      if (value == null) return null;
      if (dom_sanitization_service_impl.SafeResourceUrlImpl.is(value)) {
        return value.changingThisWillBypassSecurityTrust;
      }
      if (security.SafeValue.is(value)) dart.throw(new core.UnsupportedError.new("Unexpected SecurityContext " + dart.str(value) + ", " + "expecting resource url"));
      dart.throw(new core.UnsupportedError.new("Security violation in resource url. Create SafeValue"));
    }
    bypassSecurityTrustHtml(value) {
      let t4;
      return new dom_sanitization_service_impl.SafeHtmlImpl.new((t4 = value, t4 == null ? "" : t4));
    }
    bypassSecurityTrustStyle(value) {
      let t4;
      return new dom_sanitization_service_impl.SafeStyleImpl.new((t4 = value, t4 == null ? "" : t4));
    }
    bypassSecurityTrustUrl(value) {
      let t4;
      return new dom_sanitization_service_impl.SafeUrlImpl.new((t4 = value, t4 == null ? "" : t4));
    }
    bypassSecurityTrustResourceUrl(value) {
      let t4;
      return new dom_sanitization_service_impl.SafeResourceUrlImpl.new((t4 = value, t4 == null ? "" : t4));
    }
  };
  (dom_sanitization_service_impl.DomSanitizationServiceImpl.__ = function() {
    ;
  }).prototype = dom_sanitization_service_impl.DomSanitizationServiceImpl.prototype;
  dart.addTypeTests(dom_sanitization_service_impl.DomSanitizationServiceImpl);
  dom_sanitization_service_impl.DomSanitizationServiceImpl[dart.implements] = () => [dom_sanitization_service.DomSanitizationService];
  dart.setMethodSignature(dom_sanitization_service_impl.DomSanitizationServiceImpl, () => ({
    __proto__: dart.getMethods(dom_sanitization_service_impl.DomSanitizationServiceImpl.__proto__),
    sanitizeHtml: dart.fnType(core.String, [dart.dynamic]),
    sanitizeStyle: dart.fnType(core.String, [dart.dynamic]),
    sanitizeUrl: dart.fnType(core.String, [dart.dynamic]),
    sanitizeResourceUrl: dart.fnType(core.String, [dart.dynamic]),
    bypassSecurityTrustHtml: dart.fnType(dom_sanitization_service.SafeHtml, [core.String]),
    bypassSecurityTrustStyle: dart.fnType(dom_sanitization_service.SafeStyle, [core.String]),
    bypassSecurityTrustUrl: dart.fnType(dom_sanitization_service.SafeUrl, [core.String]),
    bypassSecurityTrustResourceUrl: dart.fnType(dom_sanitization_service.SafeResourceUrl, [core.String])
  }));
  dart.setLibraryUri(dom_sanitization_service_impl.DomSanitizationServiceImpl, "package:angular/src/security/dom_sanitization_service_impl.dart");
  dart.defineLazy(dom_sanitization_service_impl.DomSanitizationServiceImpl, {
    /*dom_sanitization_service_impl.DomSanitizationServiceImpl._instance*/get _instance() {
      return C26 || CT.C26;
    }
  });
  const changingThisWillBypassSecurityTrust$ = dart.privateName(dom_sanitization_service_impl, "SafeValueImpl.changingThisWillBypassSecurityTrust");
  dom_sanitization_service_impl.SafeValueImpl = class SafeValueImpl extends core.Object {
    get changingThisWillBypassSecurityTrust() {
      return this[changingThisWillBypassSecurityTrust$];
    }
    set changingThisWillBypassSecurityTrust(value) {
      super.changingThisWillBypassSecurityTrust = value;
    }
    toString() {
      return this.changingThisWillBypassSecurityTrust;
    }
  };
  (dom_sanitization_service_impl.SafeValueImpl.new = function(changingThisWillBypassSecurityTrust) {
    this[changingThisWillBypassSecurityTrust$] = changingThisWillBypassSecurityTrust;
    ;
  }).prototype = dom_sanitization_service_impl.SafeValueImpl.prototype;
  dart.addTypeTests(dom_sanitization_service_impl.SafeValueImpl);
  dom_sanitization_service_impl.SafeValueImpl[dart.implements] = () => [security.SafeValue];
  dart.setLibraryUri(dom_sanitization_service_impl.SafeValueImpl, "package:angular/src/security/dom_sanitization_service_impl.dart");
  dart.setFieldSignature(dom_sanitization_service_impl.SafeValueImpl, () => ({
    __proto__: dart.getFields(dom_sanitization_service_impl.SafeValueImpl.__proto__),
    changingThisWillBypassSecurityTrust: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(dom_sanitization_service_impl.SafeValueImpl, ['toString']);
  dom_sanitization_service_impl.SafeHtmlImpl = class SafeHtmlImpl extends dom_sanitization_service_impl.SafeValueImpl {
    getTypeName() {
      return "HTML";
    }
  };
  (dom_sanitization_service_impl.SafeHtmlImpl.new = function(value) {
    dom_sanitization_service_impl.SafeHtmlImpl.__proto__.new.call(this, value);
    ;
  }).prototype = dom_sanitization_service_impl.SafeHtmlImpl.prototype;
  dart.addTypeTests(dom_sanitization_service_impl.SafeHtmlImpl);
  dom_sanitization_service_impl.SafeHtmlImpl[dart.implements] = () => [dom_sanitization_service.SafeHtml];
  dart.setMethodSignature(dom_sanitization_service_impl.SafeHtmlImpl, () => ({
    __proto__: dart.getMethods(dom_sanitization_service_impl.SafeHtmlImpl.__proto__),
    getTypeName: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(dom_sanitization_service_impl.SafeHtmlImpl, "package:angular/src/security/dom_sanitization_service_impl.dart");
  dom_sanitization_service_impl.SafeStyleImpl = class SafeStyleImpl extends dom_sanitization_service_impl.SafeValueImpl {
    getTypeName() {
      return "Style";
    }
  };
  (dom_sanitization_service_impl.SafeStyleImpl.new = function(value) {
    dom_sanitization_service_impl.SafeStyleImpl.__proto__.new.call(this, value);
    ;
  }).prototype = dom_sanitization_service_impl.SafeStyleImpl.prototype;
  dart.addTypeTests(dom_sanitization_service_impl.SafeStyleImpl);
  dom_sanitization_service_impl.SafeStyleImpl[dart.implements] = () => [dom_sanitization_service.SafeStyle];
  dart.setMethodSignature(dom_sanitization_service_impl.SafeStyleImpl, () => ({
    __proto__: dart.getMethods(dom_sanitization_service_impl.SafeStyleImpl.__proto__),
    getTypeName: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(dom_sanitization_service_impl.SafeStyleImpl, "package:angular/src/security/dom_sanitization_service_impl.dart");
  dom_sanitization_service_impl.SafeUrlImpl = class SafeUrlImpl extends dom_sanitization_service_impl.SafeValueImpl {
    getTypeName() {
      return "URL";
    }
  };
  (dom_sanitization_service_impl.SafeUrlImpl.new = function(value) {
    dom_sanitization_service_impl.SafeUrlImpl.__proto__.new.call(this, value);
    ;
  }).prototype = dom_sanitization_service_impl.SafeUrlImpl.prototype;
  dart.addTypeTests(dom_sanitization_service_impl.SafeUrlImpl);
  dom_sanitization_service_impl.SafeUrlImpl[dart.implements] = () => [dom_sanitization_service.SafeUrl];
  dart.setMethodSignature(dom_sanitization_service_impl.SafeUrlImpl, () => ({
    __proto__: dart.getMethods(dom_sanitization_service_impl.SafeUrlImpl.__proto__),
    getTypeName: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(dom_sanitization_service_impl.SafeUrlImpl, "package:angular/src/security/dom_sanitization_service_impl.dart");
  dom_sanitization_service_impl.SafeResourceUrlImpl = class SafeResourceUrlImpl extends dom_sanitization_service_impl.SafeValueImpl {
    getTypeName() {
      return "ResourceURL";
    }
  };
  (dom_sanitization_service_impl.SafeResourceUrlImpl.new = function(value) {
    dom_sanitization_service_impl.SafeResourceUrlImpl.__proto__.new.call(this, value);
    ;
  }).prototype = dom_sanitization_service_impl.SafeResourceUrlImpl.prototype;
  dart.addTypeTests(dom_sanitization_service_impl.SafeResourceUrlImpl);
  dom_sanitization_service_impl.SafeResourceUrlImpl[dart.implements] = () => [dom_sanitization_service.SafeResourceUrl];
  dart.setMethodSignature(dom_sanitization_service_impl.SafeResourceUrlImpl, () => ({
    __proto__: dart.getMethods(dom_sanitization_service_impl.SafeResourceUrlImpl.__proto__),
    getTypeName: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(dom_sanitization_service_impl.SafeResourceUrlImpl, "package:angular/src/security/dom_sanitization_service_impl.dart");
  uppercase_pipe.UpperCasePipe = class UpperCasePipe extends core.Object {
    transform(value) {
      if (value == null) return value;
      if (!(typeof value == 'string')) {
        dart.throw(new invalid_pipe_argument_exception.InvalidPipeArgumentException.new(dart.wrapType(uppercase_pipe.UpperCasePipe), value));
      }
      return value[$toUpperCase]();
    }
  };
  (uppercase_pipe.UpperCasePipe.new = function() {
    ;
  }).prototype = uppercase_pipe.UpperCasePipe.prototype;
  dart.addTypeTests(uppercase_pipe.UpperCasePipe);
  uppercase_pipe.UpperCasePipe[dart.implements] = () => [pipe_transform.PipeTransform];
  dart.setMethodSignature(uppercase_pipe.UpperCasePipe, () => ({
    __proto__: dart.getMethods(uppercase_pipe.UpperCasePipe.__proto__),
    transform: dart.fnType(core.String, [core.String])
  }));
  dart.setLibraryUri(uppercase_pipe.UpperCasePipe, "package:angular/src/common/pipes/uppercase_pipe.dart");
  invalid_pipe_argument_exception.InvalidPipeArgumentException = class InvalidPipeArgumentException extends core.FormatException {};
  (invalid_pipe_argument_exception.InvalidPipeArgumentException.new = function(type, value) {
    invalid_pipe_argument_exception.InvalidPipeArgumentException.__proto__.new.call(this, "Invalid argument '" + dart.str(value) + "' for pipe '" + dart.str(type) + "'");
    ;
  }).prototype = invalid_pipe_argument_exception.InvalidPipeArgumentException.prototype;
  dart.addTypeTests(invalid_pipe_argument_exception.InvalidPipeArgumentException);
  dart.setLibraryUri(invalid_pipe_argument_exception.InvalidPipeArgumentException, "package:angular/src/common/pipes/invalid_pipe_argument_exception.dart");
  slice_pipe.SlicePipe = class SlicePipe extends core.Object {
    transform(value, start, end) {
      if (end === void 0) end = null;
      if (!dart.test(this.supports(value))) {
        dart.throw(new invalid_pipe_argument_exception.InvalidPipeArgumentException.new(dart.wrapType(slice_pipe.SlicePipe), value));
      }
      if (value == null) return value;
      let length = core.int.as(dart.dload(value, 'length'));
      start = dart.notNull(start) < 0 ? math.max(core.int, 0, dart.notNull(length) + dart.notNull(start)) : math.min(core.int, start, length);
      if (end != null) {
        end = dart.notNull(end) < 0 ? math.max(core.int, 0, dart.notNull(length) + dart.notNull(end)) : math.min(core.int, end, length);
        if (dart.notNull(end) < dart.notNull(start)) return typeof value == 'string' ? "" : JSArrayOfObject().of([]);
      }
      if (typeof value == 'string') {
        return value[$substring](start, end);
      } else if (ListOfObject().is(value)) {
        return value[$sublist](start, end);
      } else {
        return null;
      }
    }
    supports(obj) {
      return typeof obj == 'string' || ListOfObject().is(obj);
    }
  };
  (slice_pipe.SlicePipe.new = function() {
    ;
  }).prototype = slice_pipe.SlicePipe.prototype;
  dart.addTypeTests(slice_pipe.SlicePipe);
  slice_pipe.SlicePipe[dart.implements] = () => [pipe_transform.PipeTransform];
  dart.setMethodSignature(slice_pipe.SlicePipe, () => ({
    __proto__: dart.getMethods(slice_pipe.SlicePipe.__proto__),
    transform: dart.fnType(dart.dynamic, [dart.dynamic, core.int], [core.int]),
    supports: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setLibraryUri(slice_pipe.SlicePipe, "package:angular/src/common/pipes/slice_pipe.dart");
  const _supportedInput = dart.privateName(replace_pipe, "_supportedInput");
  const _supportedPattern = dart.privateName(replace_pipe, "_supportedPattern");
  const _supportedReplacement = dart.privateName(replace_pipe, "_supportedReplacement");
  replace_pipe.ReplacePipe = class ReplacePipe extends core.Object {
    transform(value, pattern, replacement) {
      if (value == null) {
        return value;
      }
      if (!dart.test(this[_supportedInput](value))) {
        dart.throw(new invalid_pipe_argument_exception.InvalidPipeArgumentException.new(dart.wrapType(replace_pipe.ReplacePipe), value));
      }
      let input = dart.toString(value);
      if (!dart.test(this[_supportedPattern](pattern))) {
        dart.throw(new invalid_pipe_argument_exception.InvalidPipeArgumentException.new(dart.wrapType(replace_pipe.ReplacePipe), pattern));
      }
      if (!dart.test(this[_supportedReplacement](replacement))) {
        dart.throw(new invalid_pipe_argument_exception.InvalidPipeArgumentException.new(dart.wrapType(replace_pipe.ReplacePipe), replacement));
      }
      if (MatchToString().is(replacement)) {
        let rgxPattern = typeof pattern == 'string' ? core.RegExp.new(pattern) : core.RegExp.as(pattern);
        return input[$replaceAllMapped](rgxPattern, replacement);
      }
      if (core.RegExp.is(pattern)) {
        return input[$replaceAll](pattern, core.String.as(replacement));
      }
      return input[$replaceFirst](core.String.as(pattern), core.String.as(replacement));
    }
    [_supportedInput](input) {
      return typeof input == 'string' || typeof input == 'number';
    }
    [_supportedPattern](pattern) {
      return typeof pattern == 'string' || core.RegExp.is(pattern);
    }
    [_supportedReplacement](replacement) {
      return typeof replacement == 'string' || core.Function.is(replacement);
    }
  };
  (replace_pipe.ReplacePipe.new = function() {
    ;
  }).prototype = replace_pipe.ReplacePipe.prototype;
  dart.addTypeTests(replace_pipe.ReplacePipe);
  replace_pipe.ReplacePipe[dart.implements] = () => [pipe_transform.PipeTransform];
  dart.setMethodSignature(replace_pipe.ReplacePipe, () => ({
    __proto__: dart.getMethods(replace_pipe.ReplacePipe.__proto__),
    transform: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic, dart.dynamic]),
    [_supportedInput]: dart.fnType(core.bool, [dart.dynamic]),
    [_supportedPattern]: dart.fnType(core.bool, [dart.dynamic]),
    [_supportedReplacement]: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setLibraryUri(replace_pipe.ReplacePipe, "package:angular/src/common/pipes/replace_pipe.dart");
  number_pipe._NumberPipe = class _NumberPipe extends core.Object {
    static _format(value, style, digits, currency, currencyAsSymbol) {
      if (currency === void 0) currency = null;
      if (currencyAsSymbol === void 0) currencyAsSymbol = false;
      if (value == null) return null;
      if (!(typeof value == 'number')) {
        dart.throw(new invalid_pipe_argument_exception.InvalidPipeArgumentException.new(dart.wrapType(number_pipe._NumberPipe), value));
      }
      let minInt = 1;
      let minFraction = 0;
      let maxFraction = 3;
      if (digits != null) {
        let parts = number_pipe._re.firstMatch(digits);
        if (parts == null) {
          dart.throw(new core.FormatException.new(dart.str(digits) + " is not a valid digit info for number pipes"));
        }
        if (parts._get(1) != null) {
          minInt = core.int.parse(parts._get(1));
        }
        if (parts._get(3) != null) {
          minFraction = core.int.parse(parts._get(3));
        }
        if (parts._get(5) != null) {
          maxFraction = core.int.parse(parts._get(5));
        }
      }
      return number_pipe._formatNumber(value, intl.Intl.defaultLocale, style, {minimumIntegerDigits: minInt, minimumFractionDigits: minFraction, maximumFractionDigits: maxFraction, currency: currency, currencyAsSymbol: currencyAsSymbol});
    }
  };
  (number_pipe._NumberPipe.new = function() {
    ;
  }).prototype = number_pipe._NumberPipe.prototype;
  dart.addTypeTests(number_pipe._NumberPipe);
  dart.setLibraryUri(number_pipe._NumberPipe, "package:angular/src/common/pipes/number_pipe.dart");
  number_pipe.DecimalPipe = class DecimalPipe extends number_pipe._NumberPipe {
    transform(value, digits) {
      if (digits === void 0) digits = null;
      return number_pipe._NumberPipe._format(value, number_pipe._NumberFormatStyle.Decimal, digits);
    }
  };
  (number_pipe.DecimalPipe.new = function() {
    number_pipe.DecimalPipe.__proto__.new.call(this);
    ;
  }).prototype = number_pipe.DecimalPipe.prototype;
  dart.addTypeTests(number_pipe.DecimalPipe);
  number_pipe.DecimalPipe[dart.implements] = () => [pipe_transform.PipeTransform];
  dart.setMethodSignature(number_pipe.DecimalPipe, () => ({
    __proto__: dart.getMethods(number_pipe.DecimalPipe.__proto__),
    transform: dart.fnType(core.String, [core.num], [core.String])
  }));
  dart.setLibraryUri(number_pipe.DecimalPipe, "package:angular/src/common/pipes/number_pipe.dart");
  number_pipe.PercentPipe = class PercentPipe extends number_pipe._NumberPipe {
    transform(value, digits) {
      if (digits === void 0) digits = null;
      return number_pipe._NumberPipe._format(value, number_pipe._NumberFormatStyle.Percent, digits);
    }
  };
  (number_pipe.PercentPipe.new = function() {
    number_pipe.PercentPipe.__proto__.new.call(this);
    ;
  }).prototype = number_pipe.PercentPipe.prototype;
  dart.addTypeTests(number_pipe.PercentPipe);
  number_pipe.PercentPipe[dart.implements] = () => [pipe_transform.PipeTransform];
  dart.setMethodSignature(number_pipe.PercentPipe, () => ({
    __proto__: dart.getMethods(number_pipe.PercentPipe.__proto__),
    transform: dart.fnType(core.String, [core.num], [core.String])
  }));
  dart.setLibraryUri(number_pipe.PercentPipe, "package:angular/src/common/pipes/number_pipe.dart");
  number_pipe.CurrencyPipe = class CurrencyPipe extends number_pipe._NumberPipe {
    transform(value, currencyCode, symbolDisplay, digits) {
      if (currencyCode === void 0) currencyCode = "USD";
      if (symbolDisplay === void 0) symbolDisplay = false;
      if (digits === void 0) digits = null;
      return number_pipe._NumberPipe._format(value, number_pipe._NumberFormatStyle.Currency, digits, currencyCode, symbolDisplay);
    }
  };
  (number_pipe.CurrencyPipe.new = function() {
    number_pipe.CurrencyPipe.__proto__.new.call(this);
    ;
  }).prototype = number_pipe.CurrencyPipe.prototype;
  dart.addTypeTests(number_pipe.CurrencyPipe);
  number_pipe.CurrencyPipe[dart.implements] = () => [pipe_transform.PipeTransform];
  dart.setMethodSignature(number_pipe.CurrencyPipe, () => ({
    __proto__: dart.getMethods(number_pipe.CurrencyPipe.__proto__),
    transform: dart.fnType(core.String, [core.num], [core.String, core.bool, core.String])
  }));
  dart.setLibraryUri(number_pipe.CurrencyPipe, "package:angular/src/common/pipes/number_pipe.dart");
  const _name$1 = dart.privateName(number_pipe, "_name");
  let C27;
  let C28;
  let C29;
  let C30;
  number_pipe._NumberFormatStyle = class _NumberFormatStyle extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (number_pipe._NumberFormatStyle.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = number_pipe._NumberFormatStyle.prototype;
  dart.addTypeTests(number_pipe._NumberFormatStyle);
  dart.setLibraryUri(number_pipe._NumberFormatStyle, "package:angular/src/common/pipes/number_pipe.dart");
  dart.setFieldSignature(number_pipe._NumberFormatStyle, () => ({
    __proto__: dart.getFields(number_pipe._NumberFormatStyle.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(number_pipe._NumberFormatStyle, ['toString']);
  number_pipe._NumberFormatStyle.Decimal = C27 || CT.C27;
  number_pipe._NumberFormatStyle.Percent = C28 || CT.C28;
  number_pipe._NumberFormatStyle.Currency = C29 || CT.C29;
  number_pipe._NumberFormatStyle.values = C30 || CT.C30;
  number_pipe._normalizeLocale = function _normalizeLocale(locale) {
    let t4;
    t4 = locale;
    return t4 == null ? null : t4[$replaceAll]("-", "_");
  };
  number_pipe._formatNumber = function _formatNumber(number, locale, style, opts) {
    let minimumIntegerDigits = opts && 'minimumIntegerDigits' in opts ? opts.minimumIntegerDigits : 1;
    let minimumFractionDigits = opts && 'minimumFractionDigits' in opts ? opts.minimumFractionDigits : 0;
    let maximumFractionDigits = opts && 'maximumFractionDigits' in opts ? opts.maximumFractionDigits : 3;
    let currency = opts && 'currency' in opts ? opts.currency : null;
    let currencyAsSymbol = opts && 'currencyAsSymbol' in opts ? opts.currencyAsSymbol : false;
    locale = number_pipe._normalizeLocale(locale);
    let formatter = null;
    switch (style) {
      case C27 || CT.C27:
      {
        formatter = new intl.NumberFormat.decimalPattern(locale);
        break;
      }
      case C28 || CT.C28:
      {
        formatter = new intl.NumberFormat.percentPattern(locale);
        break;
      }
      case C29 || CT.C29:
      {
        if (dart.test(currencyAsSymbol)) {
          formatter = intl.NumberFormat.simpleCurrency({locale: locale, name: currency});
        } else {
          formatter = new intl.NumberFormat.currency({locale: locale, name: currency});
        }
        break;
      }
    }
    formatter.minimumIntegerDigits = minimumIntegerDigits;
    formatter.minimumFractionDigits = minimumFractionDigits;
    formatter.maximumFractionDigits = maximumFractionDigits;
    return formatter.format(number);
  };
  dart.defineLazy(number_pipe, {
    /*number_pipe._re*/get _re() {
      return core.RegExp.new("^(\\d+)?\\.((\\d+)(\\-(\\d+))?)?$");
    }
  });
  lowercase_pipe.LowerCasePipe = class LowerCasePipe extends core.Object {
    transform(value) {
      if (value == null) return value;
      if (!(typeof value == 'string')) {
        dart.throw(new invalid_pipe_argument_exception.InvalidPipeArgumentException.new(dart.wrapType(lowercase_pipe.LowerCasePipe), value));
      }
      return value[$toLowerCase]();
    }
  };
  (lowercase_pipe.LowerCasePipe.new = function() {
    ;
  }).prototype = lowercase_pipe.LowerCasePipe.prototype;
  dart.addTypeTests(lowercase_pipe.LowerCasePipe);
  lowercase_pipe.LowerCasePipe[dart.implements] = () => [pipe_transform.PipeTransform];
  dart.setMethodSignature(lowercase_pipe.LowerCasePipe, () => ({
    __proto__: dart.getMethods(lowercase_pipe.LowerCasePipe.__proto__),
    transform: dart.fnType(core.String, [core.String])
  }));
  dart.setLibraryUri(lowercase_pipe.LowerCasePipe, "package:angular/src/common/pipes/lowercase_pipe.dart");
  const JsonEncoder__toEncodable = dart.privateName(convert, "JsonEncoder._toEncodable");
  const JsonEncoder_indent = dart.privateName(convert, "JsonEncoder.indent");
  let C31;
  json_pipe.JsonPipe = class JsonPipe extends core.Object {
    transform(value) {
      return json_pipe.JsonPipe._json.convert(value);
    }
  };
  (json_pipe.JsonPipe.new = function() {
    ;
  }).prototype = json_pipe.JsonPipe.prototype;
  dart.addTypeTests(json_pipe.JsonPipe);
  json_pipe.JsonPipe[dart.implements] = () => [pipe_transform.PipeTransform];
  dart.setMethodSignature(json_pipe.JsonPipe, () => ({
    __proto__: dart.getMethods(json_pipe.JsonPipe.__proto__),
    transform: dart.fnType(core.String, [dart.dynamic])
  }));
  dart.setLibraryUri(json_pipe.JsonPipe, "package:angular/src/common/pipes/json_pipe.dart");
  dart.defineLazy(json_pipe.JsonPipe, {
    /*json_pipe.JsonPipe._json*/get _json() {
      return C31 || CT.C31;
    }
  });
  date_pipe.DatePipe = class DatePipe extends core.Object {
    transform(value, pattern) {
      if (pattern === void 0) pattern = "mediumDate";
      if (value == null) return null;
      if (!dart.test(this.supports(value))) {
        dart.throw(new invalid_pipe_argument_exception.InvalidPipeArgumentException.new(dart.wrapType(date_pipe.DatePipe), value));
      }
      if (typeof value == 'number') {
        value = new core.DateTime.fromMillisecondsSinceEpoch(optimizations.unsafeCast(core.int, value));
      }
      if (dart.test(date_pipe.DatePipe._ALIASES[$containsKey](pattern))) {
        pattern = date_pipe.DatePipe._ALIASES[$_get](pattern);
      }
      return date_pipe._formatDate(optimizations.unsafeCast(core.DateTime, value), intl.Intl.defaultLocale, pattern);
    }
    supports(obj) {
      return core.DateTime.is(obj) || typeof obj == 'number';
    }
  };
  (date_pipe.DatePipe.new = function() {
    ;
  }).prototype = date_pipe.DatePipe.prototype;
  dart.addTypeTests(date_pipe.DatePipe);
  date_pipe.DatePipe[dart.implements] = () => [pipe_transform.PipeTransform];
  dart.setMethodSignature(date_pipe.DatePipe, () => ({
    __proto__: dart.getMethods(date_pipe.DatePipe.__proto__),
    transform: dart.fnType(core.String, [dart.dynamic], [core.String]),
    supports: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.setLibraryUri(date_pipe.DatePipe, "package:angular/src/common/pipes/date_pipe.dart");
  dart.defineLazy(date_pipe.DatePipe, {
    /*date_pipe.DatePipe._ALIASES*/get _ALIASES() {
      return new (IdentityMapOfString$String()).from(["medium", "yMMMdjms", "short", "yMdjm", "fullDate", "yMMMMEEEEd", "longDate", "yMMMMd", "mediumDate", "yMMMd", "shortDate", "yMd", "mediumTime", "jms", "shortTime", "jm"]);
    }
  });
  date_pipe._normalizeLocale = function _normalizeLocale$(locale) {
    let t4;
    t4 = locale;
    return t4 == null ? null : t4[$replaceAll]("-", "_");
  };
  date_pipe._formatDate = function _formatDate(date, locale, pattern) {
    locale = date_pipe._normalizeLocale(locale);
    let formatter = new intl.DateFormat.new(null, locale);
    let matches = date_pipe._multiPartRegExp.firstMatch(pattern);
    if (matches != null) {
      formatter.addPattern(matches._get(1));
      formatter.addPattern(matches._get(2), ", ");
    } else {
      formatter.addPattern(pattern);
    }
    return formatter.format(date);
  };
  dart.defineLazy(date_pipe, {
    /*date_pipe._multiPartRegExp*/get _multiPartRegExp() {
      return core.RegExp.new("^([yMdE]+)([Hjms]+)$");
    }
  });
  let C33;
  let C34;
  let C35;
  let C36;
  let C37;
  let C38;
  let C39;
  let C40;
  let C41;
  let C42;
  let C32;
  dart.defineLazy(common_pipes, {
    /*common_pipes.commonPipes*/get commonPipes() {
      return C32 || CT.C32;
    }
  });
  async_pipe._ObservableStrategy = class _ObservableStrategy extends core.Object {
    createSubscription(stream, updateLatestValue) {
      return stream.listen(updateLatestValue, {onError: dart.fn(e => dart.throw(e), dynamicTobottom())});
    }
    dispose(subscription) {
      subscription.cancel();
    }
    onDestroy(subscription) {
      this.dispose(subscription);
    }
  };
  (async_pipe._ObservableStrategy.new = function() {
    ;
  }).prototype = async_pipe._ObservableStrategy.prototype;
  dart.addTypeTests(async_pipe._ObservableStrategy);
  dart.setMethodSignature(async_pipe._ObservableStrategy, () => ({
    __proto__: dart.getMethods(async_pipe._ObservableStrategy.__proto__),
    createSubscription: dart.fnType(async.StreamSubscription$(core.Object), [async.Stream$(core.Object), dart.fnType(dart.void, [dart.dynamic])]),
    dispose: dart.fnType(dart.void, [async.StreamSubscription$(core.Object)]),
    onDestroy: dart.fnType(dart.void, [async.StreamSubscription$(core.Object)])
  }));
  dart.setLibraryUri(async_pipe._ObservableStrategy, "package:angular/src/common/pipes/async_pipe.dart");
  async_pipe._PromiseStrategy = class _PromiseStrategy extends core.Object {
    createSubscription(async, updateLatestValue) {
      return async.then(dart.dynamic, updateLatestValue);
    }
    dispose(subscription) {
    }
    onDestroy(subscription) {
    }
  };
  (async_pipe._PromiseStrategy.new = function() {
    ;
  }).prototype = async_pipe._PromiseStrategy.prototype;
  dart.addTypeTests(async_pipe._PromiseStrategy);
  dart.setMethodSignature(async_pipe._PromiseStrategy, () => ({
    __proto__: dart.getMethods(async_pipe._PromiseStrategy.__proto__),
    createSubscription: dart.fnType(dart.dynamic, [async.Future, dart.fnType(dart.dynamic, [dart.dynamic])]),
    dispose: dart.fnType(dart.void, [dart.dynamic]),
    onDestroy: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(async_pipe._PromiseStrategy, "package:angular/src/common/pipes/async_pipe.dart");
  const _latestValue = dart.privateName(async_pipe, "_latestValue");
  const _subscription = dart.privateName(async_pipe, "_subscription");
  const _obj = dart.privateName(async_pipe, "_obj");
  const _strategy = dart.privateName(async_pipe, "_strategy");
  const _ref$ = dart.privateName(async_pipe, "_ref");
  const _dispose = dart.privateName(async_pipe, "_dispose");
  const _subscribe = dart.privateName(async_pipe, "_subscribe");
  const _selectStrategy = dart.privateName(async_pipe, "_selectStrategy");
  const _updateLatestValue = dart.privateName(async_pipe, "_updateLatestValue");
  async_pipe.AsyncPipe = class AsyncPipe extends core.Object {
    ngOnDestroy() {
      if (this[_subscription] != null) {
        this[_dispose]();
      }
    }
    transform(obj) {
      if (this[_obj] == null) {
        if (obj != null) {
          this[_subscribe](obj);
        }
      } else if (!dart.test(async_pipe.AsyncPipe._maybeStreamIdentical(obj, this[_obj]))) {
        this[_dispose]();
        return this.transform(obj);
      }
      return this[_latestValue];
    }
    [_subscribe](obj) {
      this[_obj] = obj;
      this[_strategy] = this[_selectStrategy](obj);
      this[_subscription] = dart.dsend(this[_strategy], 'createSubscription', [obj, dart.fn(value => this[_updateLatestValue](obj, value), ObjectTovoid())]);
    }
    [_selectStrategy](obj) {
      if (FutureOfObject().is(obj)) {
        return async_pipe._promiseStrategy;
      } else if (StreamOfObject().is(obj)) {
        return async_pipe._observableStrategy;
      } else {
        dart.throw(new invalid_pipe_argument_exception.InvalidPipeArgumentException.new(dart.wrapType(async_pipe.AsyncPipe), obj));
      }
    }
    [_dispose]() {
      dart.dsend(this[_strategy], 'dispose', [this[_subscription]]);
      this[_latestValue] = null;
      this[_subscription] = null;
      this[_obj] = null;
    }
    [_updateLatestValue](async, value) {
      if (core.identical(async, this[_obj])) {
        this[_latestValue] = value;
        this[_ref$].markForCheck();
      }
    }
    static _maybeStreamIdentical(a, b) {
      if (!core.identical(a, b)) {
        return StreamOfObject().is(a) && StreamOfObject().is(b) && dart.equals(a, b);
      }
      return true;
    }
  };
  (async_pipe.AsyncPipe.new = function(_ref) {
    this[_latestValue] = null;
    this[_subscription] = null;
    this[_obj] = null;
    this[_strategy] = null;
    this[_ref$] = _ref;
    ;
  }).prototype = async_pipe.AsyncPipe.prototype;
  dart.addTypeTests(async_pipe.AsyncPipe);
  async_pipe.AsyncPipe[dart.implements] = () => [lifecycle_hooks.OnDestroy, pipe_transform.PipeTransform];
  dart.setMethodSignature(async_pipe.AsyncPipe, () => ({
    __proto__: dart.getMethods(async_pipe.AsyncPipe.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    transform: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_subscribe]: dart.fnType(dart.void, [dart.dynamic]),
    [_selectStrategy]: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_dispose]: dart.fnType(dart.void, []),
    [_updateLatestValue]: dart.fnType(dart.void, [dart.dynamic, core.Object])
  }));
  dart.setLibraryUri(async_pipe.AsyncPipe, "package:angular/src/common/pipes/async_pipe.dart");
  dart.setFieldSignature(async_pipe.AsyncPipe, () => ({
    __proto__: dart.getFields(async_pipe.AsyncPipe.__proto__),
    [_latestValue]: dart.fieldType(core.Object),
    [_subscription]: dart.fieldType(core.Object),
    [_obj]: dart.fieldType(dart.dynamic),
    [_strategy]: dart.fieldType(dart.dynamic),
    [_ref$]: dart.fieldType(change_detector_ref.ChangeDetectorRef)
  }));
  dart.defineLazy(async_pipe, {
    /*async_pipe._promiseStrategy*/get _promiseStrategy() {
      return new async_pipe._PromiseStrategy.new();
    },
    /*async_pipe._observableStrategy*/get _observableStrategy() {
      return new async_pipe._ObservableStrategy.new();
    }
  });
  const _iterableDiffer = dart.privateName(ng_class, "_iterableDiffer");
  const _keyValueDiffer = dart.privateName(ng_class, "_keyValueDiffer");
  const _initialClasses = dart.privateName(ng_class, "_initialClasses");
  const _rawClass = dart.privateName(ng_class, "_rawClass");
  const _ngEl$ = dart.privateName(ng_class, "_ngEl");
  const _applyInitialClasses = dart.privateName(ng_class, "_applyInitialClasses");
  const _applyClasses = dart.privateName(ng_class, "_applyClasses");
  const _cleanupClasses = dart.privateName(ng_class, "_cleanupClasses");
  const _applyIterableChanges = dart.privateName(ng_class, "_applyIterableChanges");
  const _applyKeyValueChanges = dart.privateName(ng_class, "_applyKeyValueChanges");
  const _toggleClass = dart.privateName(ng_class, "_toggleClass");
  ng_class.NgClass = class NgClass extends core.Object {
    set initialClasses(v) {
      this[_applyInitialClasses](true);
      this[_initialClasses] = typeof v == 'string' ? v[$split](" ") : JSArrayOfString().of([]);
      this[_applyInitialClasses](false);
      this[_applyClasses](this[_rawClass], false);
    }
    set rawClass(v) {
      this[_cleanupClasses](this[_rawClass]);
      if (typeof v == 'string') {
        v = dart.dsend(v, 'split', [" "]);
      }
      this[_rawClass] = v;
      this[_iterableDiffer] = null;
      this[_keyValueDiffer] = null;
      if (v != null) {
        if (IterableOfObject().is(v)) {
          this[_iterableDiffer] = new default_iterable_differ.DefaultIterableDiffer.new();
        } else {
          this[_keyValueDiffer] = new default_keyvalue_differ.DefaultKeyValueDiffer.new();
        }
      }
    }
    ngDoCheck() {
      if (this[_iterableDiffer] != null) {
        let changes = this[_iterableDiffer].diff(optimizations.unsafeCast(IterableOfObject(), this[_rawClass]));
        if (changes != null) {
          this[_applyIterableChanges](changes);
        }
      }
      if (this[_keyValueDiffer] != null) {
        let changes = this[_keyValueDiffer].diff(optimizations.unsafeCast(MapOfObject$Object(), this[_rawClass]));
        if (changes != null) {
          this[_applyKeyValueChanges](changes);
        }
      }
    }
    ngOnDestroy() {
      this[_cleanupClasses](this[_rawClass]);
    }
    [_cleanupClasses](rawClassVal) {
      this[_applyClasses](rawClassVal, true);
      this[_applyInitialClasses](false);
    }
    [_applyKeyValueChanges](changes) {
      changes.forEachAddedItem(dart.fn(record => {
        this[_toggleClass](optimizations.unsafeCast(core.String, record.key), optimizations.unsafeCast(core.bool, record.currentValue));
      }, KeyValueChangeRecordToNull()));
      changes.forEachChangedItem(dart.fn(record => {
        this[_toggleClass](optimizations.unsafeCast(core.String, record.key), optimizations.unsafeCast(core.bool, record.currentValue));
      }, KeyValueChangeRecordToNull()));
      changes.forEachRemovedItem(dart.fn(record => {
        if (record.previousValue != null) {
          this[_toggleClass](optimizations.unsafeCast(core.String, record.key), false);
        }
      }, KeyValueChangeRecordToNull()));
    }
    [_applyIterableChanges](changes) {
      changes.forEachAddedItem(dart.fn(record => {
        this[_toggleClass](optimizations.unsafeCast(core.String, record.item), true);
      }, CollectionChangeRecordToNull()));
      changes.forEachRemovedItem(dart.fn(record => {
        this[_toggleClass](optimizations.unsafeCast(core.String, record.item), false);
      }, CollectionChangeRecordToNull()));
    }
    [_applyInitialClasses](isCleanup) {
      for (let className of this[_initialClasses]) {
        this[_toggleClass](className, !dart.test(isCleanup));
      }
    }
    [_applyClasses](rawClassVal, isCleanup) {
      if (rawClassVal != null) {
        if (ListOfObject().is(rawClassVal)) {
          for (let i = 0, len = rawClassVal[$length]; i < dart.notNull(len); i = i + 1) {
            this[_toggleClass](optimizations.unsafeCast(core.String, rawClassVal[$_get](i)), !dart.test(isCleanup));
          }
        } else if (IterableOfObject().is(rawClassVal)) {
          for (let className of rawClassVal) {
            this[_toggleClass](optimizations.unsafeCast(core.String, className), !dart.test(isCleanup));
          }
        } else {
          MapOfObject$Object().as(rawClassVal)[$forEach](dart.fn((className, expVal) => {
            if (expVal != null) {
              this[_toggleClass](optimizations.unsafeCast(core.String, className), !dart.test(isCleanup));
            }
          }, ObjectAndObjectToNull()));
        }
      }
    }
    [_toggleClass](className, enabled) {
      className = className[$trim]();
      if (className[$isEmpty]) return;
      let el = this[_ngEl$];
      let classList = el[$classes];
      if (className[$contains](" ")) {
        ng_class.NgClass._separator == null ? ng_class.NgClass._separator = core.RegExp.new("\\s+") : null;
        let classes = className[$split](ng_class.NgClass._separator);
        for (let i = 0, len = classes[$length]; i < dart.notNull(len); i = i + 1) {
          if (dart.test(enabled)) {
            classList.add(classes[$_get](i));
          } else {
            classList.remove(classes[$_get](i));
          }
        }
      } else {
        if (dart.test(enabled)) {
          classList.add(className);
        } else {
          classList.remove(className);
        }
      }
    }
  };
  (ng_class.NgClass.new = function(_ngEl) {
    this[_iterableDiffer] = null;
    this[_keyValueDiffer] = null;
    this[_initialClasses] = JSArrayOfString().of([]);
    this[_rawClass] = null;
    this[_ngEl$] = _ngEl;
    ;
  }).prototype = ng_class.NgClass.prototype;
  dart.addTypeTests(ng_class.NgClass);
  ng_class.NgClass[dart.implements] = () => [lifecycle_hooks.DoCheck, lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(ng_class.NgClass, () => ({
    __proto__: dart.getMethods(ng_class.NgClass.__proto__),
    ngDoCheck: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_cleanupClasses]: dart.fnType(dart.void, [dart.dynamic]),
    [_applyKeyValueChanges]: dart.fnType(dart.void, [default_keyvalue_differ.DefaultKeyValueDiffer]),
    [_applyIterableChanges]: dart.fnType(dart.void, [default_iterable_differ.DefaultIterableDiffer]),
    [_applyInitialClasses]: dart.fnType(dart.void, [core.bool]),
    [_applyClasses]: dart.fnType(dart.void, [dart.dynamic, core.bool]),
    [_toggleClass]: dart.fnType(dart.void, [core.String, core.bool])
  }));
  dart.setSetterSignature(ng_class.NgClass, () => ({
    __proto__: dart.getSetters(ng_class.NgClass.__proto__),
    initialClasses: core.String,
    rawClass: dart.dynamic
  }));
  dart.setLibraryUri(ng_class.NgClass, "package:angular/src/common/directives/ng_class.dart");
  dart.setFieldSignature(ng_class.NgClass, () => ({
    __proto__: dart.getFields(ng_class.NgClass.__proto__),
    [_ngEl$]: dart.fieldType(html.Element),
    [_iterableDiffer]: dart.fieldType(default_iterable_differ.DefaultIterableDiffer),
    [_keyValueDiffer]: dart.fieldType(default_keyvalue_differ.DefaultKeyValueDiffer),
    [_initialClasses]: dart.fieldType(core.List$(core.String)),
    [_rawClass]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(ng_class.NgClass, {
    /*ng_class.NgClass._separator*/get _separator() {
      return null;
    },
    set _separator(_) {}
  });
  exceptions$46template$.initReflector = function initReflector$23() {
    if (dart.test(exceptions$46template$._visited)) {
      return;
    }
    exceptions$46template$._visited = true;
    reflector.registerFactory(dart.wrapType(exceptions$.BrowserExceptionHandler), dart.fn(() => new exceptions$.BrowserExceptionHandler.new(), VoidToBrowserExceptionHandler()));
    core$46template.initReflector();
  };
  dart.defineLazy(exceptions$46template$, {
    /*exceptions$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  const _logger = dart.privateName(exceptions$, "_logger");
  let C43;
  const _logger$ = dart.privateName(exception_handler, "_logger");
  exceptions$.BrowserExceptionHandler = class BrowserExceptionHandler extends core.Object {
    call(error, stack, reason) {
      if (stack === void 0) stack = null;
      if (reason === void 0) reason = null;
      return this.handle(error, stack, reason);
    }
    handle(exception, stack, reason) {
      if (stack === void 0) stack = null;
      if (reason === void 0) reason = null;
      html.window[$console].error(exception_handler.ExceptionHandler.exceptionToString(exception, stack, reason));
    }
    get [_logger$]() {
      return logger.Logger._check(this[$noSuchMethod](new core._Invocation.getter(C43 || CT.C43)));
    }
  };
  (exceptions$.BrowserExceptionHandler.new = function() {
    ;
  }).prototype = exceptions$.BrowserExceptionHandler.prototype;
  dart.addTypeTests(exceptions$.BrowserExceptionHandler);
  exceptions$.BrowserExceptionHandler[dart.implements] = () => [exception_handler.ExceptionHandler];
  dart.setMethodSignature(exceptions$.BrowserExceptionHandler, () => ({
    __proto__: dart.getMethods(exceptions$.BrowserExceptionHandler.__proto__),
    call: dart.fnType(dart.void, [dart.dynamic], [dart.dynamic, core.String]),
    handle: dart.fnType(dart.void, [dart.dynamic], [dart.dynamic, core.String])
  }));
  dart.setGetterSignature(exceptions$.BrowserExceptionHandler, () => ({
    __proto__: dart.getGetters(exceptions$.BrowserExceptionHandler.__proto__),
    [_logger$]: logger.Logger
  }));
  dart.setLibraryUri(exceptions$.BrowserExceptionHandler, "package:angular/src/platform/browser/exceptions.dart");
  const _field0 = dart.privateName(modules$46template, "_field0");
  const _field1 = dart.privateName(modules$46template, "_field1");
  const _field2 = dart.privateName(modules$46template, "_field2");
  const _field3 = dart.privateName(modules$46template, "_field3");
  const _field5 = dart.privateName(modules$46template, "_field5");
  const _getThrowingSlowComponentLoader$0 = dart.privateName(modules$46template, "_getThrowingSlowComponentLoader$0");
  const _getComponentLoader$1 = dart.privateName(modules$46template, "_getComponentLoader$1");
  const _getdynamic$2 = dart.privateName(modules$46template, "_getdynamic$2");
  const _getDomSanitizationServiceImpl$3 = dart.privateName(modules$46template, "_getDomSanitizationServiceImpl$3");
  const _getExisting$4 = dart.privateName(modules$46template, "_getExisting$4");
  const _getBrowserExceptionHandler$5 = dart.privateName(modules$46template, "_getBrowserExceptionHandler$5");
  const _getInjector$6 = dart.privateName(modules$46template, "_getInjector$6");
  modules$46template._Injector$minimalApp = class _Injector$36minimalApp extends hierarchical.HierarchicalInjector {
    [_getThrowingSlowComponentLoader$0]() {
      let t4;
      t4 = this[_field0];
      return t4 == null ? this[_field0] = new modules.ThrowingSlowComponentLoader.new() : t4;
    }
    [_getComponentLoader$1]() {
      let t4;
      t4 = this[_field1];
      return t4 == null ? this[_field1] = new component_loader.ComponentLoader.new() : t4;
    }
    [_getdynamic$2]() {
      let t4;
      t4 = this[_field2];
      return t4 == null ? this[_field2] = modules.createRandomAppId() : t4;
    }
    [_getDomSanitizationServiceImpl$3]() {
      let t4;
      t4 = this[_field3];
      return t4 == null ? this[_field3] = dom_sanitization_service_impl.DomSanitizationServiceImpl.new() : t4;
    }
    [_getExisting$4]() {
      return this.get(dart.wrapType(dom_sanitization_service.DomSanitizationService));
    }
    [_getBrowserExceptionHandler$5]() {
      let t4;
      t4 = this[_field5];
      return t4 == null ? this[_field5] = new exceptions$.BrowserExceptionHandler.new() : t4;
    }
    [_getInjector$6]() {
      return this;
    }
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = C1 || CT.C1;
      if (token === dart.wrapType(dynamic_component_loader.SlowComponentLoader)) {
        return this[_getThrowingSlowComponentLoader$0]();
      }
      if (token === dart.wrapType(component_loader.ComponentLoader)) {
        return this[_getComponentLoader$1]();
      }
      if (token === (C18 || CT.C18)) {
        return this[_getdynamic$2]();
      }
      if (token === dart.wrapType(dom_sanitization_service.DomSanitizationService)) {
        return this[_getDomSanitizationServiceImpl$3]();
      }
      if (token === dart.wrapType(security.SanitizationService)) {
        return this[_getExisting$4]();
      }
      if (token === dart.wrapType(exception_handler.ExceptionHandler)) {
        return this[_getBrowserExceptionHandler$5]();
      }
      if (token === dart.wrapType(injector.Injector)) {
        return this[_getInjector$6]();
      }
      return orElse;
    }
  };
  (modules$46template._Injector$minimalApp.__ = function(parent) {
    if (parent === void 0) parent = null;
    this[_field0] = null;
    this[_field1] = null;
    this[_field2] = null;
    this[_field3] = null;
    this[_field5] = null;
    modules$46template._Injector$minimalApp.__proto__.new.call(this, hierarchical.HierarchicalInjector._check(parent));
    ;
  }).prototype = modules$46template._Injector$minimalApp.prototype;
  dart.addTypeTests(modules$46template._Injector$minimalApp);
  dart.setMethodSignature(modules$46template._Injector$minimalApp, () => ({
    __proto__: dart.getMethods(modules$46template._Injector$minimalApp.__proto__),
    [_getThrowingSlowComponentLoader$0]: dart.fnType(modules.ThrowingSlowComponentLoader, []),
    [_getComponentLoader$1]: dart.fnType(component_loader.ComponentLoader, []),
    [_getdynamic$2]: dart.fnType(dart.dynamic, []),
    [_getDomSanitizationServiceImpl$3]: dart.fnType(dom_sanitization_service_impl.DomSanitizationServiceImpl, []),
    [_getExisting$4]: dart.fnType(dart.dynamic, []),
    [_getBrowserExceptionHandler$5]: dart.fnType(exceptions$.BrowserExceptionHandler, []),
    [_getInjector$6]: dart.fnType(injector.Injector, []),
    injectFromSelfOptional: dart.fnType(core.Object, [core.Object], [core.Object])
  }));
  dart.setLibraryUri(modules$46template._Injector$minimalApp, "package:angular/src/bootstrap/modules.template.dart");
  dart.setFieldSignature(modules$46template._Injector$minimalApp, () => ({
    __proto__: dart.getFields(modules$46template._Injector$minimalApp.__proto__),
    [_field0]: dart.fieldType(modules.ThrowingSlowComponentLoader),
    [_field1]: dart.fieldType(component_loader.ComponentLoader),
    [_field2]: dart.fieldType(dart.dynamic),
    [_field3]: dart.fieldType(dom_sanitization_service_impl.DomSanitizationServiceImpl),
    [_field5]: dart.fieldType(exceptions$.BrowserExceptionHandler)
  }));
  modules$46template.minimalApp$Injector = function minimalApp$36Injector(parent) {
    if (parent === void 0) parent = null;
    return new modules$46template._Injector$minimalApp.__(parent);
  };
  modules$46template.initReflector = function initReflector$24() {
    if (dart.test(modules$46template._visited)) {
      return;
    }
    modules$46template._visited = true;
    modules$46template.initReflector();
    application_ref$46template.initReflector();
    application_tokens$46template.initReflector();
    di$46template.initReflector();
    app_view_utils$46template.initReflector();
    component_loader$46template.initReflector();
    dynamic_component_loader$46template.initReflector();
    testability$46template.initReflector();
    zone$46template.initReflector();
    providers$46template.initReflector();
    exception_handler$46template.initReflector();
    exceptions$46template$.initReflector();
    runtime$46template.initReflector();
    dom_events$46template.initReflector();
    dom_sanitization_service$46template.initReflector();
    dom_sanitization_service_impl$46template.initReflector();
  };
  dart.defineLazy(modules$46template, {
    /*modules$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  const _loader$0 = dart.privateName(modules, "_loader");
  let C44;
  modules.ThrowingSlowComponentLoader = class ThrowingSlowComponentLoader extends core.Object {
    load(T, _, __) {
      dart.throw(new core.UnsupportedError.new(modules.ThrowingSlowComponentLoader._slowComponentLoaderWarning));
    }
    loadNextToLocation(T, _, __, ___) {
      if (___ === void 0) ___ = null;
      dart.throw(new core.UnsupportedError.new(modules.ThrowingSlowComponentLoader._slowComponentLoaderWarning));
    }
    get [_loader]() {
      return component_loader.ComponentLoader._check(this[$noSuchMethod](new core._Invocation.getter(C44 || CT.C44)));
    }
  };
  (modules.ThrowingSlowComponentLoader.new = function() {
    ;
  }).prototype = modules.ThrowingSlowComponentLoader.prototype;
  dart.addTypeTests(modules.ThrowingSlowComponentLoader);
  modules.ThrowingSlowComponentLoader[dart.implements] = () => [dynamic_component_loader.SlowComponentLoader];
  dart.setMethodSignature(modules.ThrowingSlowComponentLoader, () => ({
    __proto__: dart.getMethods(modules.ThrowingSlowComponentLoader.__proto__),
    load: dart.gFnType(T => [async.Future$(component_factory.ComponentRef$(T)), [core.Type, injector.Injector]]),
    loadNextToLocation: dart.gFnType(T => [async.Future$(component_factory.ComponentRef$(T)), [core.Type, view_container_ref.ViewContainerRef], [injector.Injector]])
  }));
  dart.setGetterSignature(modules.ThrowingSlowComponentLoader, () => ({
    __proto__: dart.getGetters(modules.ThrowingSlowComponentLoader.__proto__),
    [_loader]: component_loader.ComponentLoader
  }));
  dart.setLibraryUri(modules.ThrowingSlowComponentLoader, "package:angular/src/bootstrap/modules.dart");
  dart.defineLazy(modules.ThrowingSlowComponentLoader, {
    /*modules.ThrowingSlowComponentLoader._slowComponentLoaderWarning*/get _slowComponentLoaderWarning() {
      return "You are using runApp or runAppAsync, which does not support loading a component with SlowComponentLoader. Please migrate this code to use ComponentLoader instead.";
    }
  });
  modules.getDocument = function getDocument() {
    return html.document;
  };
  modules.createNgZone = function createNgZone() {
    return new ng_zone.NgZone.new({enableLongStackTrace: optimizations.isDevMode});
  };
  modules.createRandomAppId = function createRandomAppId() {
    let random = math.Random.new();
    function char() {
      return core.String.fromCharCode(97 + dart.notNull(random.nextInt(26)));
    }
    dart.fn(char, VoidToString());
    return dart.str(char()) + dart.str(char()) + dart.str(char());
  };
  const Provider_multi = dart.privateName(providers, "Provider.multi");
  const Provider_deps = dart.privateName(providers, "Provider.deps");
  const Provider_useFactory = dart.privateName(providers, "Provider.useFactory");
  const Provider_useExisting = dart.privateName(providers, "Provider.useExisting");
  const Provider_useValue = dart.privateName(providers, "Provider.useValue");
  let C47;
  const Provider_useClass = dart.privateName(providers, "Provider.useClass");
  let C48;
  const Provider_token = dart.privateName(providers, "Provider.token");
  let C46;
  let C50;
  let C49;
  let C52;
  let C51;
  let C54;
  let C53;
  let C56;
  let C55;
  let C58;
  let C59;
  let C57;
  let C45;
  let C60;
  let C62;
  let C64;
  let C63;
  let C67;
  let C66;
  let C68;
  let C69;
  let C65;
  let C71;
  let C70;
  let C72;
  let C74;
  let C73;
  let C61;
  dart.defineLazy(modules, {
    /*modules.bootstrapMinimalModule*/get bootstrapMinimalModule() {
      return C45 || CT.C45;
    },
    /*modules.minimalApp*/get minimalApp() {
      return C60 || CT.C60;
    },
    /*modules.bootstrapLegacyModule*/get bootstrapLegacyModule() {
      return C61 || CT.C61;
    }
  });
  let C76;
  let C75;
  dynamic_component_loader$46template.initReflector = function initReflector$25() {
    if (dart.test(dynamic_component_loader$46template._visited)) {
      return;
    }
    dynamic_component_loader$46template._visited = true;
    reflector.registerFactory(dart.wrapType(dynamic_component_loader.SlowComponentLoader), dart.fn(p0 => new dynamic_component_loader.SlowComponentLoader.new(p0), ComponentLoaderToSlowComponentLoader()));
    reflector.registerDependencies(dart.wrapType(dynamic_component_loader.SlowComponentLoader), C75 || CT.C75);
    di$46template.initReflector();
    component_factory$46template.initReflector();
    component_loader$46template.initReflector();
    component_resolver$46template.initReflector();
    runtime$46template.initReflector();
    view_container_ref$46template.initReflector();
  };
  dart.defineLazy(dynamic_component_loader$46template, {
    /*dynamic_component_loader$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  component_resolver$46template.initReflector = function initReflector$26() {
    if (dart.test(component_resolver$46template._visited)) {
      return;
    }
    component_resolver$46template._visited = true;
    component_factory$46template.initReflector();
    reflector$46template.initReflector();
    runtime$46template.initReflector();
  };
  dart.defineLazy(component_resolver$46template, {
    /*component_resolver$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  application_ref$46template.initReflector = function initReflector$27() {
    if (dart.test(application_ref$46template._visited)) {
      return;
    }
    application_ref$46template._visited = true;
    exception_handler$46template.initReflector();
    host$46template.initReflector();
    di$46template.initReflector();
    component_factory$46template.initReflector();
    host$46template.initReflector();
    runtime$46template.initReflector();
    testability$46template.initReflector();
    ng_zone$46template.initReflector();
  };
  dart.defineLazy(application_ref$46template, {
    /*application_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  const _hostInjector$ = dart.privateName(app_host, "_hostInjector");
  app_host.TransitionalAppHost = class TransitionalAppHost extends core.Object {
    static _createRootInjector() {
      let registry = new testability$.TestabilityRegistry.new();
      registry.setTestabilityGetter(new testability.BrowserGetTestability.new());
      return new map.MapInjector.new(new (LinkedMapOfObject$Object()).from([dart.wrapType(testability$.TestabilityRegistry), registry]));
    }
    createAppInjector(create) {
      return create(this[_hostInjector$]);
    }
  };
  (app_host.TransitionalAppHost.__ = function() {
    this[_hostInjector$] = app_host.TransitionalAppHost._createRootInjector();
    ;
  }).prototype = app_host.TransitionalAppHost.prototype;
  dart.addTypeTests(app_host.TransitionalAppHost);
  dart.setMethodSignature(app_host.TransitionalAppHost, () => ({
    __proto__: dart.getMethods(app_host.TransitionalAppHost.__proto__),
    createAppInjector: dart.fnType(injector.Injector, [dart.fnType(injector.Injector, [], [injector.Injector])])
  }));
  dart.setLibraryUri(app_host.TransitionalAppHost, "package:angular/src/core/app_host.dart");
  dart.setFieldSignature(app_host.TransitionalAppHost, () => ({
    __proto__: dart.getFields(app_host.TransitionalAppHost.__proto__),
    [_hostInjector$]: dart.finalFieldType(injector.Injector)
  }));
  dart.defineLazy(app_host, {
    /*app_host.appGlobals*/get appGlobals() {
      return new app_host.TransitionalAppHost.__();
    }
  });
  const _createRegistry = dart.privateName(testability, "_createRegistry");
  testability.BrowserGetTestability = class BrowserGetTestability extends core.Object {
    addToWindow(registry) {
      let jsRegistry = js_util.getProperty(dart.global.self, "ngTestabilityRegistries");
      if (jsRegistry == null) {
        js_util.setProperty(dart.global.self, "ngTestabilityRegistries", jsRegistry = JSArrayOfObject().of([]));
        js_util.setProperty(dart.global.self, "getAngularTestability", js.allowInterop(ElementAndboolTodynamic(), dart.fn((elem, findInAncestors) => {
          if (findInAncestors === void 0) findInAncestors = true;
          let registry = optimizations.unsafeCast(ListOfObject(), js_util.getProperty(dart.global.self, "ngTestabilityRegistries"));
          for (let i = 0; i < dart.notNull(registry[$length]); i = i + 1) {
            let result = js_util.callMethod(registry[$_get](i), "getAngularTestability", [elem]);
            if (result != null) return result;
          }
          dart.throw(new core.StateError.new("Could not find testability for element."));
        }, ElementAndboolTodynamic())));
        let getAllAngularTestabilities = dart.fn(() => {
          let registry = optimizations.unsafeCast(ListOfObject(), js_util.getProperty(dart.global.self, "ngTestabilityRegistries"));
          let result = JSArrayOfObject().of([]);
          for (let i = 0; i < dart.notNull(registry[$length]); i = i + 1) {
            let testabilities = js_util.callMethod(registry[$_get](i), "getAllAngularTestabilities", []);
            let testabilityCount = js_util.getProperty(testabilities, "length");
            for (let j = 0; j < dart.notNull(core.num._check(testabilityCount)); j = j + 1) {
              let testability = js_util.getProperty(testabilities, j);
              result[$add](testability);
            }
          }
          return result;
        }, VoidToListOfObject());
        js_util.setProperty(dart.global.self, "getAllAngularTestabilities", js.allowInterop(VoidToListOfObject(), getAllAngularTestabilities));
        let whenAllStable = js.allowInterop(dynamicToNull$(), dart.fn(callback => {
          let testabilities = getAllAngularTestabilities();
          let count = testabilities[$length];
          let didWork = false;
          let decrement = dart.fn(didWork_ => {
            didWork = didWork || dart.test(didWork_);
            count = dart.notNull(count) - 1;
            if (count === 0) {
              dart.dcall(callback, [didWork]);
            }
          }, boolToNull());
          for (let testability of testabilities) {
            js_util.callMethod(testability, "whenStable", [js.allowInterop(boolToNull(), decrement)]);
          }
        }, dynamicToNull$()));
        if (!dart.dtest(js_util.hasProperty(dart.global.self, "frameworkStabilizers"))) {
          js_util.setProperty(dart.global.self, "frameworkStabilizers", JSArrayOfObject().of([]));
        }
        dart.dsend(js_util.getProperty(dart.global.self, "frameworkStabilizers"), 'add', [whenAllStable]);
      }
      dart.dsend(jsRegistry, 'add', [this[_createRegistry](registry)]);
    }
    findTestabilityInTree(registry, element) {
      let t4;
      if (element == null) {
        return null;
      }
      t4 = registry.getTestability(element);
      return t4 == null ? this.findTestabilityInTree(registry, element[$parent]) : t4;
    }
    [_createRegistry](registry) {
      let object = js_util.newObject();
      js_util.setProperty(object, "getAngularTestability", js.allowInterop(ElementToJsTestability(), dart.fn(element => {
        let testability = registry.findTestabilityInTree(element);
        return testability == null ? null : {isStable: js.allowInterop(VoidTobool(), dart.bind(testability, 'isStable')), whenStable: js.allowInterop(FnTovoid(), dart.bind(testability, 'whenStable'))};
      }, ElementToJsTestability())));
      js_util.setProperty(object, "getAllAngularTestabilities", js.allowInterop(VoidToListOfJsTestability(), dart.fn(() => {
        let publicTestabilities = registry.getAllTestabilities()[$map](dart.anonymousJSType("JsTestability"), dart.fn(t => ({isStable: js.allowInterop(VoidTobool(), dart.bind(t, 'isStable')), whenStable: js.allowInterop(FnTovoid(), dart.bind(t, 'whenStable'))}), TestabilityToJsTestability()))[$toList]();
        return publicTestabilities;
      }, VoidToListOfJsTestability())));
      return object;
    }
  };
  (testability.BrowserGetTestability.new = function() {
    ;
  }).prototype = testability.BrowserGetTestability.prototype;
  dart.addTypeTests(testability.BrowserGetTestability);
  testability.BrowserGetTestability[dart.implements] = () => [testability$.GetTestability];
  dart.setMethodSignature(testability.BrowserGetTestability, () => ({
    __proto__: dart.getMethods(testability.BrowserGetTestability.__proto__),
    addToWindow: dart.fnType(dart.void, [testability$.TestabilityRegistry]),
    findTestabilityInTree: dart.fnType(testability$.Testability, [testability$.TestabilityRegistry, html.Element]),
    [_createRegistry]: dart.fnType(dart.dynamic, [testability$.TestabilityRegistry])
  }));
  dart.setLibraryUri(testability.BrowserGetTestability, "package:angular/src/platform/browser/testability.dart");
  const _context = dart.privateName(ng_template_outlet, "_context");
  const _insertedViewRef = dart.privateName(ng_template_outlet, "_insertedViewRef");
  const _viewContainerRef$0 = dart.privateName(ng_template_outlet, "_viewContainerRef");
  ng_template_outlet.NgTemplateOutlet = class NgTemplateOutlet extends core.Object {
    set ngTemplateOutlet(templateRef) {
      if (this[_insertedViewRef] != null) {
        this[_viewContainerRef$0].remove(this[_viewContainerRef$0].indexOf(this[_insertedViewRef]));
      }
      if (templateRef != null) {
        this[_insertedViewRef] = this[_viewContainerRef$0].createEmbeddedView(templateRef);
      } else {
        this[_insertedViewRef] = null;
      }
    }
    set ngTemplateOutletContext(context) {
      this[_context] = context;
    }
    ngDoCheck() {
      if (this[_context] == null || this[_insertedViewRef] == null) return;
      this[_context][$forEach](dart.bind(this[_insertedViewRef], 'setLocal'));
    }
  };
  (ng_template_outlet.NgTemplateOutlet.new = function(_viewContainerRef) {
    this[_context] = null;
    this[_insertedViewRef] = null;
    this[_viewContainerRef$0] = _viewContainerRef;
    ;
  }).prototype = ng_template_outlet.NgTemplateOutlet.prototype;
  dart.addTypeTests(ng_template_outlet.NgTemplateOutlet);
  ng_template_outlet.NgTemplateOutlet[dart.implements] = () => [lifecycle_hooks.DoCheck];
  dart.setMethodSignature(ng_template_outlet.NgTemplateOutlet, () => ({
    __proto__: dart.getMethods(ng_template_outlet.NgTemplateOutlet.__proto__),
    ngDoCheck: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(ng_template_outlet.NgTemplateOutlet, () => ({
    __proto__: dart.getSetters(ng_template_outlet.NgTemplateOutlet.__proto__),
    ngTemplateOutlet: template_ref.TemplateRef,
    ngTemplateOutletContext: core.Map$(core.String, dart.dynamic)
  }));
  dart.setLibraryUri(ng_template_outlet.NgTemplateOutlet, "package:angular/src/common/directives/ng_template_outlet.dart");
  dart.setFieldSignature(ng_template_outlet.NgTemplateOutlet, () => ({
    __proto__: dart.getFields(ng_template_outlet.NgTemplateOutlet.__proto__),
    [_viewContainerRef$0]: dart.finalFieldType(view_container_ref.ViewContainerRef),
    [_context]: dart.fieldType(core.Map$(core.String, dart.dynamic)),
    [_insertedViewRef]: dart.fieldType(view_ref.EmbeddedViewRef)
  }));
  let C78;
  let C79;
  let C80;
  let C81;
  let C82;
  let C83;
  let C84;
  let C85;
  let C77;
  dart.defineLazy(core_directives, {
    /*core_directives.CORE_DIRECTIVES*/get CORE_DIRECTIVES() {
      return C77 || CT.C77;
    }
  });
  const _rawStyle = dart.privateName(ng_style, "_rawStyle");
  const _differ = dart.privateName(ng_style, "_differ");
  const _ngElement$ = dart.privateName(ng_style, "_ngElement");
  const _setProperty = dart.privateName(ng_style, "_setProperty");
  ng_style.NgStyle = class NgStyle extends core.Object {
    set rawStyle(v) {
      this[_rawStyle] = v;
      if (this[_differ] == null && v != null) {
        this[_differ] = new default_keyvalue_differ.DefaultKeyValueDiffer.new();
      }
    }
    ngDoCheck() {
      let t4;
      if (this[_differ] == null) return;
      let changes = this[_differ].diff(this[_rawStyle]);
      if (changes == null) return;
      t4 = changes;
      t4.forEachAddedItem(dart.bind(this, _setProperty));
      t4.forEachChangedItem(dart.bind(this, _setProperty));
      t4.forEachRemovedItem(dart.bind(this, _setProperty));
      t4;
    }
    [_setProperty](record) {
      this[_ngElement$].style[$setProperty](optimizations.unsafeCast(core.String, record.key), optimizations.unsafeCast(core.String, record.currentValue));
    }
  };
  (ng_style.NgStyle.new = function(_ngElement) {
    this[_rawStyle] = null;
    this[_differ] = null;
    this[_ngElement$] = _ngElement;
    ;
  }).prototype = ng_style.NgStyle.prototype;
  dart.addTypeTests(ng_style.NgStyle);
  ng_style.NgStyle[dart.implements] = () => [lifecycle_hooks.DoCheck];
  dart.setMethodSignature(ng_style.NgStyle, () => ({
    __proto__: dart.getMethods(ng_style.NgStyle.__proto__),
    ngDoCheck: dart.fnType(dart.void, []),
    [_setProperty]: dart.fnType(dart.void, [default_keyvalue_differ.KeyValueChangeRecord])
  }));
  dart.setSetterSignature(ng_style.NgStyle, () => ({
    __proto__: dart.getSetters(ng_style.NgStyle.__proto__),
    rawStyle: core.Map$(core.String, core.String)
  }));
  dart.setLibraryUri(ng_style.NgStyle, "package:angular/src/common/directives/ng_style.dart");
  dart.setFieldSignature(ng_style.NgStyle, () => ({
    __proto__: dart.getFields(ng_style.NgStyle.__proto__),
    [_ngElement$]: dart.finalFieldType(html.Element),
    [_rawStyle]: dart.fieldType(core.Map$(core.String, core.String)),
    [_differ]: dart.fieldType(default_keyvalue_differ.DefaultKeyValueDiffer)
  }));
  const _prevCondition = dart.privateName(ng_if, "_prevCondition");
  const _viewContainer$0 = dart.privateName(ng_if, "_viewContainer");
  const _templateRef$0 = dart.privateName(ng_if, "_templateRef");
  ng_if.NgIf = class NgIf extends core.Object {
    set ngIf(newCondition) {
      newCondition = dart.equals(newCondition, true);
      if (!dart.test(app_view_utils.checkBinding(this[_prevCondition], newCondition))) {
        return;
      }
      if (dart.test(newCondition)) {
        this[_viewContainer$0].createEmbeddedView(this[_templateRef$0]);
      } else {
        this[_viewContainer$0].clear();
      }
      this[_prevCondition] = newCondition;
    }
  };
  (ng_if.NgIf.new = function(_viewContainer, _templateRef) {
    this[_prevCondition] = false;
    this[_viewContainer$0] = _viewContainer;
    this[_templateRef$0] = _templateRef;
    ;
  }).prototype = ng_if.NgIf.prototype;
  dart.addTypeTests(ng_if.NgIf);
  dart.setSetterSignature(ng_if.NgIf, () => ({
    __proto__: dart.getSetters(ng_if.NgIf.__proto__),
    ngIf: core.bool
  }));
  dart.setLibraryUri(ng_if.NgIf, "package:angular/src/common/directives/ng_if.dart");
  dart.setFieldSignature(ng_if.NgIf, () => ({
    __proto__: dart.getFields(ng_if.NgIf.__proto__),
    [_templateRef$0]: dart.finalFieldType(template_ref.TemplateRef),
    [_viewContainer$0]: dart.finalFieldType(view_container_ref.ViewContainerRef),
    [_prevCondition]: dart.fieldType(core.bool)
  }));
  const _differ$ = dart.privateName(ng_for, "_differ");
  const _ngForOf = dart.privateName(ng_for, "_ngForOf");
  const _ngForTrackBy = dart.privateName(ng_for, "_ngForTrackBy");
  const _viewContainer$1 = dart.privateName(ng_for, "_viewContainer");
  const _templateRef$1 = dart.privateName(ng_for, "_templateRef");
  const _applyChanges = dart.privateName(ng_for, "_applyChanges");
  const _getEmbeddedViewRef = dart.privateName(ng_for, "_getEmbeddedViewRef");
  const _perViewChange = dart.privateName(ng_for, "_perViewChange");
  ng_for.NgFor = class NgFor extends core.Object {
    set ngForOf(value) {
      this[_ngForOf] = value;
      if (this[_differ$] == null && value != null) {
        this[_differ$] = new default_iterable_differ.DefaultIterableDiffer.new(this[_ngForTrackBy]);
      }
    }
    set ngForTemplate(value) {
      if (value != null) {
        this[_templateRef$1] = value;
      }
    }
    set ngForTrackBy(value) {
      this[_ngForTrackBy] = value;
      if (this[_ngForOf] != null) {
        if (this[_differ$] == null) {
          this[_differ$] = new default_iterable_differ.DefaultIterableDiffer.new(this[_ngForTrackBy]);
        } else {
          this[_differ$] = this[_differ$].clone(this[_ngForTrackBy]);
        }
      }
    }
    ngDoCheck() {
      if (this[_differ$] != null) {
        let changes = this[_differ$].diff(this[_ngForOf]);
        if (changes != null) this[_applyChanges](changes);
      }
    }
    [_applyChanges](changes) {
      let insertTuples = JSArrayOf_RecordViewTuple().of([]);
      changes.forEachOperation(dart.fn((item, adjustedPreviousIndex, currentIndex) => {
        if (item.previousIndex == null) {
          let view = this[_viewContainer$1].insertEmbeddedView(this[_templateRef$1], currentIndex);
          let tuple = new ng_for._RecordViewTuple.new(item, view);
          insertTuples[$add](tuple);
        } else if (currentIndex == null) {
          this[_viewContainer$1].remove(adjustedPreviousIndex);
        } else {
          let view = this[_getEmbeddedViewRef](adjustedPreviousIndex);
          this[_viewContainer$1].move(view, currentIndex);
          let tuple = new ng_for._RecordViewTuple.new(item, view);
          insertTuples[$add](tuple);
        }
      }, CollectionChangeRecordAndintAndintToNull()));
      for (let i = 0; i < dart.notNull(insertTuples[$length]); i = i + 1) {
        this[_perViewChange](insertTuples[$_get](i).view, insertTuples[$_get](i).record);
      }
      for (let i = 0, len = this[_viewContainer$1].length; i < dart.notNull(len); i = i + 1) {
        let viewRef = this[_getEmbeddedViewRef](i);
        viewRef.setLocal("first", i === 0);
        viewRef.setLocal("last", i === dart.notNull(len) - 1);
        viewRef.setLocal("index", i);
        viewRef.setLocal("count", len);
      }
      changes.forEachIdentityChange(dart.fn(record => {
        let viewRef = this[_getEmbeddedViewRef](record.currentIndex);
        viewRef.setLocal("$implicit", record.item);
      }, CollectionChangeRecordToNull()));
    }
    [_getEmbeddedViewRef](index) {
      return optimizations.unsafeCast(view_ref.EmbeddedViewRef, this[_viewContainer$1].get(index));
    }
    [_perViewChange](view, record) {
      view.setLocal("$implicit", record.item);
      view.setLocal("even", record.currentIndex[$isEven]);
      view.setLocal("odd", record.currentIndex[$isOdd]);
    }
  };
  (ng_for.NgFor.new = function(_viewContainer, _templateRef) {
    this[_differ$] = null;
    this[_ngForOf] = null;
    this[_ngForTrackBy] = null;
    this[_viewContainer$1] = _viewContainer;
    this[_templateRef$1] = _templateRef;
    ;
  }).prototype = ng_for.NgFor.prototype;
  dart.addTypeTests(ng_for.NgFor);
  ng_for.NgFor[dart.implements] = () => [lifecycle_hooks.DoCheck];
  dart.setMethodSignature(ng_for.NgFor, () => ({
    __proto__: dart.getMethods(ng_for.NgFor.__proto__),
    ngDoCheck: dart.fnType(dart.void, []),
    [_applyChanges]: dart.fnType(dart.void, [default_iterable_differ.DefaultIterableDiffer]),
    [_getEmbeddedViewRef]: dart.fnType(view_ref.EmbeddedViewRef, [core.int]),
    [_perViewChange]: dart.fnType(dart.void, [view_ref.EmbeddedViewRef, default_iterable_differ.CollectionChangeRecord])
  }));
  dart.setSetterSignature(ng_for.NgFor, () => ({
    __proto__: dart.getSetters(ng_for.NgFor.__proto__),
    ngForOf: core.Iterable$(core.Object),
    ngForTemplate: template_ref.TemplateRef,
    ngForTrackBy: dart.fnType(core.Object, [core.int, dart.dynamic])
  }));
  dart.setLibraryUri(ng_for.NgFor, "package:angular/src/common/directives/ng_for.dart");
  dart.setFieldSignature(ng_for.NgFor, () => ({
    __proto__: dart.getFields(ng_for.NgFor.__proto__),
    [_viewContainer$1]: dart.finalFieldType(view_container_ref.ViewContainerRef),
    [_differ$]: dart.fieldType(default_iterable_differ.DefaultIterableDiffer),
    [_ngForOf]: dart.fieldType(core.Iterable$(core.Object)),
    [_ngForTrackBy]: dart.fieldType(dart.fnType(core.Object, [core.int, dart.dynamic])),
    [_templateRef$1]: dart.fieldType(template_ref.TemplateRef)
  }));
  ng_for._RecordViewTuple = class _RecordViewTuple extends core.Object {};
  (ng_for._RecordViewTuple.new = function(record, view) {
    this.record = record;
    this.view = view;
    ;
  }).prototype = ng_for._RecordViewTuple.prototype;
  dart.addTypeTests(ng_for._RecordViewTuple);
  dart.setLibraryUri(ng_for._RecordViewTuple, "package:angular/src/common/directives/ng_for.dart");
  dart.setFieldSignature(ng_for._RecordViewTuple, () => ({
    __proto__: dart.getFields(ng_for._RecordViewTuple.__proto__),
    view: dart.finalFieldType(view_ref.EmbeddedViewRef),
    record: dart.finalFieldType(default_iterable_differ.CollectionChangeRecord)
  }));
  const _providers = dart.privateName(run, "_providers");
  const _providers$ = dart.privateName(run, "_LazyInjector._providers");
  run._LazyInjector = class _LazyInjector extends hierarchical.HierarchicalInjector {
    get [_providers]() {
      return this[_providers$];
    }
    set [_providers](value) {
      super[_providers] = value;
    }
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = C1 || CT.C1;
      let result = this[_providers][$_get](token);
      if (result == null) {
        if (token === dart.wrapType(injector.Injector)) {
          return this;
        }
        return orElse;
      }
      return result();
    }
  };
  (run._LazyInjector.new = function(_providers, parent) {
    if (parent === void 0) parent = C7 || CT.C7;
    this[_providers$] = _providers;
    run._LazyInjector.__proto__.new.call(this, parent);
    ;
  }).prototype = run._LazyInjector.prototype;
  dart.addTypeTests(run._LazyInjector);
  dart.setMethodSignature(run._LazyInjector, () => ({
    __proto__: dart.getMethods(run._LazyInjector.__proto__),
    injectFromSelfOptional: dart.fnType(core.Object, [core.Object], [core.Object])
  }));
  dart.setLibraryUri(run._LazyInjector, "package:angular/src/bootstrap/run.dart");
  dart.setFieldSignature(run._LazyInjector, () => ({
    __proto__: dart.getFields(run._LazyInjector.__proto__),
    [_providers]: dart.finalFieldType(core.Map$(core.Object, dart.fnType(core.Object, [])))
  }));
  let C86;
  run.appInjector = function appInjector(userProvidedInjector, opts) {
    let createNgZone = opts && 'createNgZone' in opts ? opts.createNgZone : C64 || CT.C64;
    let minimalInjector = app_host.appGlobals.createAppInjector(modules.minimalApp);
    let applicationRef = null;
    let ngZone = createNgZone();
    let appGlobalInjector = new run._LazyInjector.new(new (LinkedMapOfObject$VoidToObject()).from([dart.wrapType(application_ref.ApplicationRef), dart.fn(() => applicationRef, VoidToApplicationRef()), dart.wrapType(app_view_utils.AppViewUtils), dart.fn(() => app_view_utils.appViewUtils, VoidToAppViewUtils()), dart.wrapType(ng_zone.NgZone), dart.fn(() => ngZone, VoidToNgZone()), dart.wrapType(testability$.Testability), dart.fn(() => new testability$.Testability.new(ngZone), VoidToTestability())]), optimizations.unsafeCast(hierarchical.HierarchicalInjector, minimalInjector));
    let userInjector = userProvidedInjector(appGlobalInjector);
    return ngZone.run(injector.Injector, dart.fn(() => {
      applicationRef = application_ref.internalCreateApplicationRef(ngZone, userInjector);
      if (!dart.test(run._checkSanitizationService(app_view_utils.appViewUtils, userInjector))) dart.assertFailed("You are trying to use multiple SanitizationServices but it is a global" + " resource where only one can be specified across the global page" + " context (even across DDC instances.) Fix by only using one type and" + " ensure that class is using a factory providing to provide only one" + " static instance.", "org-dartlang-app:///packages/angular/src/bootstrap/run.dart", 66, 9, "_checkSanitizationService(appViewUtils, userInjector)");
      app_view_utils.appViewUtils = new app_view_utils.AppViewUtils.new(userInjector.provideToken(core.String, application_tokens.APP_ID), userInjector.provideType(security.SanitizationService, dart.wrapType(security.SanitizationService)), new dom_events.EventManager.new(ngZone));
      return userInjector;
    }, VoidToInjector()));
  };
  run._checkSanitizationService = function _checkSanitizationService(appViewUtils, userInjector) {
    if (appViewUtils == null) {
      return true;
    }
    let service = userInjector.provideType(core.Object, dart.wrapType(security.SanitizationService));
    return core.identical(service, appViewUtils.sanitizer);
  };
  run._identityInjector = function _identityInjector(parent) {
    if (parent === void 0) parent = null;
    return parent;
  };
  run.runApp = function runApp(T, componentFactory, opts) {
    let createInjector = opts && 'createInjector' in opts ? opts.createInjector : C86 || CT.C86;
    if (dart.test(optimizations.isDevMode) && componentFactory == null) {
      dart.throw(new core.ArgumentError.notNull("componentFactory"));
    }
    let injector = run.appInjector(createInjector);
    let appRef = injector.provideType(application_ref.ApplicationRef, dart.wrapType(application_ref.ApplicationRef));
    return appRef.bootstrap(T, componentFactory);
  };
  run.runAppAsync = function runAppAsync(T, componentFactory, opts) {
    let beforeComponentCreated = opts && 'beforeComponentCreated' in opts ? opts.beforeComponentCreated : null;
    let createInjector = opts && 'createInjector' in opts ? opts.createInjector : C86 || CT.C86;
    if (dart.test(optimizations.isDevMode)) {
      if (componentFactory == null) {
        dart.throw(new core.ArgumentError.notNull("componentFactory"));
      }
      if (beforeComponentCreated == null) {
        dart.throw(new core.ArgumentError.notNull("beforeComponentCreated"));
      }
    }
    let injector = run.appInjector(createInjector);
    let appRef = injector.provideType(application_ref.ApplicationRef, dart.wrapType(application_ref.ApplicationRef));
    let ngZone = injector.provideType(ng_zone.NgZone, dart.wrapType(ng_zone.NgZone));
    return ngZone.run(async.Future$(component_factory.ComponentRef$(T)), dart.fn(() => {
      let future = beforeComponentCreated(injector);
      if (!(future != null)) dart.assertFailed("beforeComponentCreated must return a Future", "org-dartlang-app:///packages/angular/src/bootstrap/run.dart", 236, 12, "future != null");
      return future.then(component_factory.ComponentRef$(T), dart.fn(_ => appRef.bootstrap(T, componentFactory), dart.fnType(component_factory.ComponentRef$(T), [dart.void])));
    }, dart.fnType(async.Future$(component_factory.ComponentRef$(T)), [])));
  };
  run.runAppLegacy = function runAppLegacy(T, componentType, opts) {
    let createInjectorFromProviders = opts && 'createInjectorFromProviders' in opts ? opts.createInjectorFromProviders : C0 || CT.C0;
    let initReflector = opts && 'initReflector' in opts ? opts.initReflector : null;
    if (!(dart.wrapType(T)[$_equals](dart.wrapType(dart.dynamic)) || dart.wrapType(T)[$_equals](componentType))) dart.assertFailed("Expected " + dart.str(componentType) + " == " + dart.str(dart.wrapType(T)), "org-dartlang-app:///packages/angular/src/bootstrap/run.dart", 257, 10, "T == dynamic || T == componentType");
    if (initReflector != null) {
      initReflector();
    }
    if (dart.test(optimizations.isDevMode)) {
      if (componentType == null) {
        dart.throw(new core.ArgumentError.notNull("componentType"));
      }
      if (initReflector == null) {
        try {
          component_resolver.typeToFactory(componentType);
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.StateError.is(_)) {
            dart.throw(new core.ArgumentError.new("Could not bootstrap " + dart.str(componentType) + ": provide \"initReflector\"."));
          } else
            throw e;
        }
      }
    }
    return run.runApp(T, optimizations.unsafeCast(component_factory.ComponentFactory$(T), component_resolver.typeToFactory(componentType)), {createInjector: dart.fn(parent => {
        if (parent === void 0) parent = null;
        return runtime.ReflectiveInjector.resolveAndCreate(JSArrayOfObject().of([dart.wrapType(dynamic_component_loader.SlowComponentLoader), createInjectorFromProviders]), optimizations.unsafeCast(injector.Injector, parent));
      }, InjectorToReflectiveInjector())});
  };
  run.runAppLegacyAsync = function runAppLegacyAsync(T, componentType, opts) {
    let beforeComponentCreated = opts && 'beforeComponentCreated' in opts ? opts.beforeComponentCreated : null;
    let createInjectorFromProviders = opts && 'createInjectorFromProviders' in opts ? opts.createInjectorFromProviders : C0 || CT.C0;
    let initReflector = opts && 'initReflector' in opts ? opts.initReflector : null;
    if (!(dart.wrapType(T)[$_equals](dart.wrapType(dart.dynamic)) || dart.wrapType(T)[$_equals](componentType))) dart.assertFailed("Expected " + dart.str(componentType) + " == " + dart.str(dart.wrapType(T)), "org-dartlang-app:///packages/angular/src/bootstrap/run.dart", 298, 10, "T == dynamic || T == componentType");
    if (initReflector != null) {
      initReflector();
    }
    if (dart.test(optimizations.isDevMode)) {
      if (componentType == null) {
        dart.throw(new core.ArgumentError.notNull("componentType"));
      }
      if (initReflector == null) {
        try {
          component_resolver.typeToFactory(componentType);
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.StateError.is(_)) {
            dart.throw(new core.ArgumentError.new("Could not bootstrap " + dart.str(componentType) + ": provide \"initReflector\"."));
          } else
            throw e;
        }
      }
    }
    return run.runAppAsync(T, optimizations.unsafeCast(component_factory.ComponentFactory$(T), component_resolver.typeToFactory(componentType)), {beforeComponentCreated: beforeComponentCreated, createInjector: dart.fn(parent => {
        if (parent === void 0) parent = null;
        return runtime.ReflectiveInjector.resolveAndCreate(JSArrayOfObject().of([dart.wrapType(dynamic_component_loader.SlowComponentLoader), createInjectorFromProviders]), optimizations.unsafeCast(injector.Injector, parent));
      }, InjectorToReflectiveInjector())});
  };
  run.bootstrapStatic = function bootstrapStatic(T, componentType, providers, initReflector) {
    if (providers === void 0) providers = C0 || CT.C0;
    if (initReflector === void 0) initReflector = null;
    return async.Future$(component_factory.ComponentRef$(T)).microtask(dart.fn(() => run.runAppLegacy(T, componentType, {createInjectorFromProviders: providers, initReflector: initReflector}), dart.fnType(component_factory.ComponentRef$(T), [])));
  };
  dart.defineLazy(common_directives, {
    /*common_directives.coreDirectives*/get coreDirectives() {
      return C77 || CT.C77;
    },
    /*common_directives.COMMON_DIRECTIVES*/get COMMON_DIRECTIVES() {
      return C77 || CT.C77;
    }
  });
  dart.trackLibraries("packages/angular/src/bootstrap/modules", {
    "package:angular/src/platform/browser/tools/tools.dart": tools,
    "package:angular/src/platform/browser/tools/common_tools.dart": common_tools,
    "package:angular/src/core/linker/component_factory.dart": component_factory,
    "package:angular/src/core/linker/view_ref.dart": view_ref,
    "package:angular/src/core/linker/app_view.dart": app_view,
    "package:angular/src/core/linker/views/view.dart": view,
    "package:angular/src/core/linker/view_type.dart": view_type,
    "package:angular/src/core/linker/view_fragment.dart": view_fragment,
    "package:angular/src/core/linker/view_container.dart": view_container,
    "package:angular/src/core/linker/view_container_ref.dart": view_container_ref,
    "package:angular/src/core/linker/template_ref.dart": template_ref,
    "package:angular/src/core/linker/element_ref.dart": element_ref,
    "package:angular/src/core/linker/component_loader.dart": component_loader,
    "package:angular/src/core/linker/app_view_utils.dart": app_view_utils,
    "package:angular/src/core/linker/exceptions.dart": exceptions,
    "package:angular/src/runtime/dom_events.dart": dom_events,
    "package:angular/src/core/security.dart": security,
    "package:angular/src/runtime/dom_helpers.dart": dom_helpers,
    "package:angular/src/di/injector/element.dart": element,
    "package:angular/src/core/linker/style_encapsulation.dart": style_encapsulation,
    "package:angular/src/core/change_detection/host.dart": host$,
    "package:angular/src/core/application_ref.dart": application_ref,
    "package:angular/src/core/testability/testability.dart": testability$,
    "package:angular/src/core/linker/exceptions.template.dart": exceptions$46template,
    "package:angular/src/core/testability/testability.template.dart": testability$46template,
    "package:angular/src/core/linker/view_container_ref.template.dart": view_container_ref$46template,
    "package:angular/src/core/linker/view_ref.template.dart": view_ref$46template,
    "package:angular/src/core/linker/template_ref.template.dart": template_ref$46template,
    "package:angular/src/core/linker/view_container.template.dart": view_container$46template,
    "package:angular/src/core/linker/view_type.template.dart": view_type$46template,
    "package:angular/src/core/linker/element_ref.template.dart": element_ref$46template,
    "package:angular/src/core/linker/component_loader.template.dart": component_loader$46template,
    "package:angular/src/core/linker/component_factory.template.dart": component_factory$46template,
    "package:angular/src/core/linker/app_view.template.dart": app_view$46template,
    "package:angular/src/core/linker/views/view.template.dart": view$46template,
    "package:angular/src/core/linker/view_fragment.template.dart": view_fragment$46template,
    "package:angular/src/runtime/dom_helpers.template.dart": dom_helpers$46template,
    "package:angular/src/di/injector/element.template.dart": element$46template,
    "package:angular/src/core/linker/style_encapsulation.template.dart": style_encapsulation$46template,
    "package:angular/src/core/linker/app_view_utils.template.dart": app_view_utils$46template,
    "package:angular/src/runtime/dom_events.template.dart": dom_events$46template,
    "package:angular/src/core/security.template.dart": security$46template,
    "package:angular/src/core/change_detection/host.template.dart": host$46template,
    "package:angular/src/common/directives/ng_switch.dart": ng_switch,
    "package:angular/src/core/linker.dart": linker,
    "package:angular/src/core/linker/dynamic_component_loader.dart": dynamic_component_loader,
    "package:angular/src/core/linker/component_resolver.dart": component_resolver,
    "package:angular/src/security/dom_sanitization_service_impl.template.dart": dom_sanitization_service_impl$46template,
    "package:angular/src/security/url_sanitizer.template.dart": url_sanitizer$46template,
    "package:angular/src/security/url_sanitizer.dart": url_sanitizer,
    "package:angular/src/security/style_sanitizer.template.dart": style_sanitizer$46template,
    "package:angular/src/security/style_sanitizer.dart": style_sanitizer,
    "package:angular/src/security/html_sanitizer.template.dart": html_sanitizer$46template,
    "package:angular/src/security/html_sanitizer.dart": html_sanitizer,
    "package:angular/src/security/dom_sanitization_service.template.dart": dom_sanitization_service$46template,
    "package:angular/src/security/dom_sanitization_service.dart": dom_sanitization_service,
    "package:angular/src/security/dom_sanitization_service_impl.dart": dom_sanitization_service_impl,
    "package:angular/src/testability/js_api.dart": js_api,
    "package:angular/src/common/pipes.dart": pipes,
    "package:angular/src/common/pipes/uppercase_pipe.dart": uppercase_pipe,
    "package:angular/src/common/pipes/invalid_pipe_argument_exception.dart": invalid_pipe_argument_exception,
    "package:angular/src/common/pipes/slice_pipe.dart": slice_pipe,
    "package:angular/src/common/pipes/replace_pipe.dart": replace_pipe,
    "package:angular/src/common/pipes/number_pipe.dart": number_pipe,
    "package:angular/src/common/pipes/lowercase_pipe.dart": lowercase_pipe,
    "package:angular/src/common/pipes/json_pipe.dart": json_pipe,
    "package:angular/src/common/pipes/date_pipe.dart": date_pipe,
    "package:angular/src/common/pipes/common_pipes.dart": common_pipes,
    "package:angular/src/common/pipes/async_pipe.dart": async_pipe,
    "package:angular/src/common/directives/ng_class.dart": ng_class,
    "package:angular/src/platform/browser/exceptions.template.dart": exceptions$46template$,
    "package:angular/src/platform/browser/exceptions.dart": exceptions$,
    "package:angular/src/bootstrap/modules.template.dart": modules$46template,
    "package:angular/src/bootstrap/modules.dart": modules,
    "package:angular/src/core/linker/dynamic_component_loader.template.dart": dynamic_component_loader$46template,
    "package:angular/src/core/linker/component_resolver.template.dart": component_resolver$46template,
    "package:angular/src/core/application_ref.template.dart": application_ref$46template,
    "package:angular/src/core/app_host.dart": app_host,
    "package:angular/src/platform/browser/testability.dart": testability,
    "package:angular/src/common/directives/ng_template_outlet.dart": ng_template_outlet,
    "package:angular/src/common/directives/core_directives.dart": core_directives,
    "package:angular/src/common/directives/ng_style.dart": ng_style,
    "package:angular/src/common/directives/ng_if.dart": ng_if,
    "package:angular/src/common/directives/ng_for.dart": ng_for,
    "package:angular/src/bootstrap/run.dart": run,
    "package:angular/src/common/common_directives.dart": common_directives,
    "package:angular/src/common/directives.dart": directives
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../platform/browser/tools/tools.dart","../platform/browser/tools/common_tools.dart","../core/linker/component_factory.dart","../core/linker/view_ref.dart","../core/linker/app_view.dart","../core/linker/views/view.dart","../core/linker/view_type.dart","../core/linker/view_fragment.dart","../core/linker/component_loader.dart","../core/linker/view_container.dart","../core/linker/view_container_ref.dart","../core/linker/template_ref.dart","../core/linker/element_ref.dart","../core/linker/app_view_utils.dart","../core/linker/exceptions.dart","../runtime/dom_events.dart","../core/security.dart","../runtime/dom_helpers.dart","../di/injector/element.dart","../core/linker/style_encapsulation.dart","../core/change_detection/host.dart","../core/application_ref.dart","../core/testability/testability.dart","../core/linker/exceptions.template.dart","../core/testability/testability.template.dart","../core/linker/view_container_ref.template.dart","../core/linker/view_ref.template.dart","../core/linker/template_ref.template.dart","../core/linker/view_container.template.dart","../core/linker/view_type.template.dart","../core/linker/element_ref.template.dart","../core/linker/component_loader.template.dart","../core/linker/component_factory.template.dart","../core/linker/app_view.template.dart","../core/linker/views/view.template.dart","../core/linker/view_fragment.template.dart","../runtime/dom_helpers.template.dart","../di/injector/element.template.dart","../core/linker/style_encapsulation.template.dart","../core/linker/app_view_utils.template.dart","../runtime/dom_events.template.dart","../core/security.template.dart","../core/change_detection/host.template.dart","../common/directives/ng_switch.dart","../core/linker/dynamic_component_loader.dart","../core/linker/component_resolver.dart","../security/dom_sanitization_service_impl.template.dart","../security/url_sanitizer.template.dart","../security/url_sanitizer.dart","../security/style_sanitizer.template.dart","../security/style_sanitizer.dart","../security/html_sanitizer.template.dart","../security/html_sanitizer.dart","../security/dom_sanitization_service.template.dart","../security/dom_sanitization_service.dart","../security/dom_sanitization_service_impl.dart","../common/pipes/uppercase_pipe.dart","../common/pipes/invalid_pipe_argument_exception.dart","../common/pipes/slice_pipe.dart","../common/pipes/replace_pipe.dart","../common/pipes/number_pipe.dart","../common/pipes/lowercase_pipe.dart","../common/pipes/json_pipe.dart","../common/pipes/date_pipe.dart","../common/pipes/common_pipes.dart","../common/pipes/async_pipe.dart","../common/directives/ng_class.dart","../platform/browser/exceptions.template.dart","../platform/browser/exceptions.dart","modules.template.dart","modules.dart","../core/linker/dynamic_component_loader.template.dart","../core/linker/component_resolver.template.dart","../core/application_ref.template.dart","../core/app_host.dart","../platform/browser/testability.dart","../common/directives/ng_template_outlet.dart","../common/directives/core_directives.dart","../common/directives/ng_style.dart","../common/directives/ng_if.dart","../common/directives/ng_for.dart","run.dart","../common/common_directives.dart"],"names":[],"mappings":"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","file":"modules.ddc.js"}');
  // Exports:
  return {
    src__platform__browser__tools__tools: tools,
    src__platform__browser__tools__common_tools: common_tools,
    src__core__linker__component_factory: component_factory,
    src__core__linker__view_ref: view_ref,
    src__core__linker__app_view: app_view,
    src__core__linker__views__view: view,
    src__core__linker__view_type: view_type,
    src__core__linker__view_fragment: view_fragment,
    src__core__linker__view_container: view_container,
    src__core__linker__view_container_ref: view_container_ref,
    src__core__linker__template_ref: template_ref,
    src__core__linker__element_ref: element_ref,
    src__core__linker__component_loader: component_loader,
    src__core__linker__app_view_utils: app_view_utils,
    src__core__linker__exceptions: exceptions,
    src__runtime__dom_events: dom_events,
    src__core__security: security,
    src__runtime__dom_helpers: dom_helpers,
    src__di__injector__element: element,
    src__core__linker__style_encapsulation: style_encapsulation,
    src__core__change_detection__host: host$,
    src__core__application_ref: application_ref,
    src__core__testability__testability: testability$,
    src__core__linker__exceptions$46template: exceptions$46template,
    src__core__testability__testability$46template: testability$46template,
    src__core__linker__view_container_ref$46template: view_container_ref$46template,
    src__core__linker__view_ref$46template: view_ref$46template,
    src__core__linker__template_ref$46template: template_ref$46template,
    src__core__linker__view_container$46template: view_container$46template,
    src__core__linker__view_type$46template: view_type$46template,
    src__core__linker__element_ref$46template: element_ref$46template,
    src__core__linker__component_loader$46template: component_loader$46template,
    src__core__linker__component_factory$46template: component_factory$46template,
    src__core__linker__app_view$46template: app_view$46template,
    src__core__linker__views__view$46template: view$46template,
    src__core__linker__view_fragment$46template: view_fragment$46template,
    src__runtime__dom_helpers$46template: dom_helpers$46template,
    src__di__injector__element$46template: element$46template,
    src__core__linker__style_encapsulation$46template: style_encapsulation$46template,
    src__core__linker__app_view_utils$46template: app_view_utils$46template,
    src__runtime__dom_events$46template: dom_events$46template,
    src__core__security$46template: security$46template,
    src__core__change_detection__host$46template: host$46template,
    src__common__directives__ng_switch: ng_switch,
    src__core__linker: linker,
    src__core__linker__dynamic_component_loader: dynamic_component_loader,
    src__core__linker__component_resolver: component_resolver,
    src__security__dom_sanitization_service_impl$46template: dom_sanitization_service_impl$46template,
    src__security__url_sanitizer$46template: url_sanitizer$46template,
    src__security__url_sanitizer: url_sanitizer,
    src__security__style_sanitizer$46template: style_sanitizer$46template,
    src__security__style_sanitizer: style_sanitizer,
    src__security__html_sanitizer$46template: html_sanitizer$46template,
    src__security__html_sanitizer: html_sanitizer,
    src__security__dom_sanitization_service$46template: dom_sanitization_service$46template,
    src__security__dom_sanitization_service: dom_sanitization_service,
    src__security__dom_sanitization_service_impl: dom_sanitization_service_impl,
    src__testability__js_api: js_api,
    src__common__pipes: pipes,
    src__common__pipes__uppercase_pipe: uppercase_pipe,
    src__common__pipes__invalid_pipe_argument_exception: invalid_pipe_argument_exception,
    src__common__pipes__slice_pipe: slice_pipe,
    src__common__pipes__replace_pipe: replace_pipe,
    src__common__pipes__number_pipe: number_pipe,
    src__common__pipes__lowercase_pipe: lowercase_pipe,
    src__common__pipes__json_pipe: json_pipe,
    src__common__pipes__date_pipe: date_pipe,
    src__common__pipes__common_pipes: common_pipes,
    src__common__pipes__async_pipe: async_pipe,
    src__common__directives__ng_class: ng_class,
    src__platform__browser__exceptions$46template: exceptions$46template$,
    src__platform__browser__exceptions: exceptions$,
    src__bootstrap__modules$46template: modules$46template,
    src__bootstrap__modules: modules,
    src__core__linker__dynamic_component_loader$46template: dynamic_component_loader$46template,
    src__core__linker__component_resolver$46template: component_resolver$46template,
    src__core__application_ref$46template: application_ref$46template,
    src__core__app_host: app_host,
    src__platform__browser__testability: testability,
    src__common__directives__ng_template_outlet: ng_template_outlet,
    src__common__directives__core_directives: core_directives,
    src__common__directives__ng_style: ng_style,
    src__common__directives__ng_if: ng_if,
    src__common__directives__ng_for: ng_for,
    src__bootstrap__run: run,
    src__common__common_directives: common_directives,
    src__common__directives: directives
  };
});

//# sourceMappingURL=modules.ddc.js.map
