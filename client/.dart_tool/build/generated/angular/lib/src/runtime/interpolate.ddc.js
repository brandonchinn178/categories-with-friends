define(['dart_sdk', 'packages/angular/src/bootstrap/modules'], function(dart_sdk, packages__angular__src__bootstrap__modules) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const security = packages__angular__src__bootstrap__modules.src__core__security;
  const interpolate = Object.create(dart.library);
  const CT = Object.create(null);
  interpolate.interpolate0 = function interpolate0(p) {
    if (typeof p == 'string') return p;
    if (security.SafeValue.is(p)) return p;
    return p == null ? "" : dart.str(p);
  };
  interpolate.interpolate1 = function interpolate1(c0, a1, c1) {
    return dart.notNull(c0) + (a1 == null ? "" : dart.str(a1)) + dart.notNull(c1);
  };
  interpolate.interpolate2 = function interpolate2(c0, a1, c1, a2, c2) {
    return dart.notNull(c0) + dart.notNull(interpolate._toStringWithNull(a1)) + dart.notNull(c1) + dart.notNull(interpolate._toStringWithNull(a2)) + dart.notNull(c2);
  };
  interpolate.interpolate3 = function interpolate3(c0, a1, c1, a2, c2, a3, c3) {
    return dart.notNull(c0) + dart.notNull(interpolate._toStringWithNull(a1)) + dart.notNull(c1) + dart.notNull(interpolate._toStringWithNull(a2)) + dart.notNull(c2) + dart.notNull(interpolate._toStringWithNull(a3)) + dart.notNull(c3);
  };
  interpolate.interpolate4 = function interpolate4(c0, a1, c1, a2, c2, a3, c3, a4, c4) {
    return dart.notNull(c0) + dart.notNull(interpolate._toStringWithNull(a1)) + dart.notNull(c1) + dart.notNull(interpolate._toStringWithNull(a2)) + dart.notNull(c2) + dart.notNull(interpolate._toStringWithNull(a3)) + dart.notNull(c3) + dart.notNull(interpolate._toStringWithNull(a4)) + dart.notNull(c4);
  };
  interpolate.interpolate5 = function interpolate5(c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5) {
    return dart.notNull(c0) + dart.notNull(interpolate._toStringWithNull(a1)) + dart.notNull(c1) + dart.notNull(interpolate._toStringWithNull(a2)) + dart.notNull(c2) + dart.notNull(interpolate._toStringWithNull(a3)) + dart.notNull(c3) + dart.notNull(interpolate._toStringWithNull(a4)) + dart.notNull(c4) + dart.notNull(interpolate._toStringWithNull(a5)) + dart.notNull(c5);
  };
  interpolate.interpolate6 = function interpolate6(c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6) {
    return dart.notNull(c0) + dart.notNull(interpolate._toStringWithNull(a1)) + dart.notNull(c1) + dart.notNull(interpolate._toStringWithNull(a2)) + dart.notNull(c2) + dart.notNull(interpolate._toStringWithNull(a3)) + dart.notNull(c3) + dart.notNull(interpolate._toStringWithNull(a4)) + dart.notNull(c4) + dart.notNull(interpolate._toStringWithNull(a5)) + dart.notNull(c5) + dart.notNull(interpolate._toStringWithNull(a6)) + dart.notNull(c6);
  };
  interpolate.interpolate7 = function interpolate7(c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7) {
    return dart.notNull(c0) + dart.notNull(interpolate._toStringWithNull(a1)) + dart.notNull(c1) + dart.notNull(interpolate._toStringWithNull(a2)) + dart.notNull(c2) + dart.notNull(interpolate._toStringWithNull(a3)) + dart.notNull(c3) + dart.notNull(interpolate._toStringWithNull(a4)) + dart.notNull(c4) + dart.notNull(interpolate._toStringWithNull(a5)) + dart.notNull(c5) + dart.notNull(interpolate._toStringWithNull(a6)) + dart.notNull(c6) + dart.notNull(interpolate._toStringWithNull(a7)) + dart.notNull(c7);
  };
  interpolate.interpolate8 = function interpolate8(c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8) {
    return dart.notNull(c0) + dart.notNull(interpolate._toStringWithNull(a1)) + dart.notNull(c1) + dart.notNull(interpolate._toStringWithNull(a2)) + dart.notNull(c2) + dart.notNull(interpolate._toStringWithNull(a3)) + dart.notNull(c3) + dart.notNull(interpolate._toStringWithNull(a4)) + dart.notNull(c4) + dart.notNull(interpolate._toStringWithNull(a5)) + dart.notNull(c5) + dart.notNull(interpolate._toStringWithNull(a6)) + dart.notNull(c6) + dart.notNull(interpolate._toStringWithNull(a7)) + dart.notNull(c7) + dart.notNull(interpolate._toStringWithNull(a8)) + dart.notNull(c8);
  };
  interpolate.interpolate9 = function interpolate9(c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8, a9, c9) {
    return dart.notNull(c0) + dart.notNull(interpolate._toStringWithNull(a1)) + dart.notNull(c1) + dart.notNull(interpolate._toStringWithNull(a2)) + dart.notNull(c2) + dart.notNull(interpolate._toStringWithNull(a3)) + dart.notNull(c3) + dart.notNull(interpolate._toStringWithNull(a4)) + dart.notNull(c4) + dart.notNull(interpolate._toStringWithNull(a5)) + dart.notNull(c5) + dart.notNull(interpolate._toStringWithNull(a6)) + dart.notNull(c6) + dart.notNull(interpolate._toStringWithNull(a7)) + dart.notNull(c7) + dart.notNull(interpolate._toStringWithNull(a8)) + dart.notNull(c8) + dart.notNull(interpolate._toStringWithNull(a9)) + dart.notNull(c9);
  };
  interpolate._toStringWithNull = function _toStringWithNull(v) {
    return v == null ? "" : dart.str(v);
  };
  interpolate.interpolateString0 = function interpolateString0(p) {
    return interpolate._stringOrNull(p);
  };
  interpolate.interpolateString1 = function interpolateString1(c0, a1, c1) {
    return dart.notNull(c0) + dart.notNull(interpolate._stringOrNull(a1)) + dart.notNull(c1);
  };
  interpolate.interpolateString2 = function interpolateString2(c0, a1, c1, a2, c2) {
    return dart.notNull(c0) + dart.notNull(interpolate._stringOrNull(a1)) + dart.notNull(c1) + dart.notNull(interpolate._stringOrNull(a2)) + dart.notNull(c2);
  };
  interpolate.interpolateString3 = function interpolateString3(c0, a1, c1, a2, c2, a3, c3) {
    return dart.notNull(c0) + dart.notNull(interpolate._stringOrNull(a1)) + dart.notNull(c1) + dart.notNull(interpolate._stringOrNull(a2)) + dart.notNull(c2) + dart.notNull(interpolate._stringOrNull(a3)) + dart.notNull(c3);
  };
  interpolate.interpolateString4 = function interpolateString4(c0, a1, c1, a2, c2, a3, c3, a4, c4) {
    return dart.notNull(c0) + dart.notNull(interpolate._stringOrNull(a1)) + dart.notNull(c1) + dart.notNull(interpolate._stringOrNull(a2)) + dart.notNull(c2) + dart.notNull(interpolate._stringOrNull(a3)) + dart.notNull(c3) + dart.notNull(interpolate._stringOrNull(a4)) + dart.notNull(c4);
  };
  interpolate.interpolateString5 = function interpolateString5(c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5) {
    return dart.notNull(c0) + dart.notNull(interpolate._stringOrNull(a1)) + dart.notNull(c1) + dart.notNull(interpolate._stringOrNull(a2)) + dart.notNull(c2) + dart.notNull(interpolate._stringOrNull(a3)) + dart.notNull(c3) + dart.notNull(interpolate._stringOrNull(a4)) + dart.notNull(c4) + dart.notNull(interpolate._stringOrNull(a5)) + dart.notNull(c5);
  };
  interpolate.interpolateString6 = function interpolateString6(c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6) {
    return dart.notNull(c0) + dart.notNull(interpolate._stringOrNull(a1)) + dart.notNull(c1) + dart.notNull(interpolate._stringOrNull(a2)) + dart.notNull(c2) + dart.notNull(interpolate._stringOrNull(a3)) + dart.notNull(c3) + dart.notNull(interpolate._stringOrNull(a4)) + dart.notNull(c4) + dart.notNull(interpolate._stringOrNull(a5)) + dart.notNull(c5) + dart.notNull(interpolate._stringOrNull(a6)) + dart.notNull(c6);
  };
  interpolate.interpolateString7 = function interpolateString7(c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7) {
    return dart.notNull(c0) + dart.notNull(interpolate._stringOrNull(a1)) + dart.notNull(c1) + dart.notNull(interpolate._stringOrNull(a2)) + dart.notNull(c2) + dart.notNull(interpolate._stringOrNull(a3)) + dart.notNull(c3) + dart.notNull(interpolate._stringOrNull(a4)) + dart.notNull(c4) + dart.notNull(interpolate._stringOrNull(a5)) + dart.notNull(c5) + dart.notNull(interpolate._stringOrNull(a6)) + dart.notNull(c6) + dart.notNull(interpolate._stringOrNull(a7)) + dart.notNull(c7);
  };
  interpolate.interpolateString8 = function interpolateString8(c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8) {
    return dart.notNull(c0) + dart.notNull(interpolate._stringOrNull(a1)) + dart.notNull(c1) + dart.notNull(interpolate._stringOrNull(a2)) + dart.notNull(c2) + dart.notNull(interpolate._stringOrNull(a3)) + dart.notNull(c3) + dart.notNull(interpolate._stringOrNull(a4)) + dart.notNull(c4) + dart.notNull(interpolate._stringOrNull(a5)) + dart.notNull(c5) + dart.notNull(interpolate._stringOrNull(a6)) + dart.notNull(c6) + dart.notNull(interpolate._stringOrNull(a7)) + dart.notNull(c7) + dart.notNull(interpolate._stringOrNull(a8)) + dart.notNull(c8);
  };
  interpolate.interpolateString9 = function interpolateString9(c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8, a9, c9) {
    return dart.notNull(c0) + dart.notNull(interpolate._stringOrNull(a1)) + dart.notNull(c1) + dart.notNull(interpolate._stringOrNull(a2)) + dart.notNull(c2) + dart.notNull(interpolate._stringOrNull(a3)) + dart.notNull(c3) + dart.notNull(interpolate._stringOrNull(a4)) + dart.notNull(c4) + dart.notNull(interpolate._stringOrNull(a5)) + dart.notNull(c5) + dart.notNull(interpolate._stringOrNull(a6)) + dart.notNull(c6) + dart.notNull(interpolate._stringOrNull(a7)) + dart.notNull(c7) + dart.notNull(interpolate._stringOrNull(a8)) + dart.notNull(c8) + dart.notNull(interpolate._stringOrNull(a9)) + dart.notNull(c9);
  };
  interpolate._stringOrNull = function _stringOrNull(v) {
    let t0;
    t0 = v;
    return t0 == null ? "" : t0;
  };
  dart.trackLibraries("packages/angular/src/runtime/interpolate", {
    "package:angular/src/runtime/interpolate.dart": interpolate
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["interpolate.dart"],"names":[],"mappings":";;;;;;;;mDAG6B;AAC3B,QAAM,OAAF,CAAC,cAAY,MAAO,EAAC;AACzB,QAAM,sBAAF,CAAC,GAAe,MAAO,EAAC;AAC5B,UAAO,AAAE,EAAD,IAAI,OAAO,KAAS,SAAF,CAAC;EAC7B;mDAE2B,IAAY,IAAW;AAC9C,UAAG,AAA4B,cAA/B,EAAE,KAAI,AAAG,EAAD,IAAI,OAAO,KAAU,SAAH,EAAE,kBAAK,EAAE;;mDAEZ,IAAY,IAAW,IAAY,IAAW;AACrE,UAAG,AAAwB,AAAK,AAAwB,cAAxD,EAAE,iBAAG,8BAAkB,EAAE,kBAAI,EAAE,iBAAG,8BAAkB,EAAE,kBAAI,EAAE;;mDAGvD,IACC,IACD,IACC,IACD,IACC,IACD;AAEL,UAAG,AACmB,AACnB,AACmB,AACnB,AACmB,cALtB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE;;mDAGG,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD;AAEL,UAAG,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,cAPtB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE;;mDAGG,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD;AAEL,UAAG,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,cATtB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE;;mDAGG,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD;AAEL,UAAG,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,cAXtB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE;;mDAGG,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD;AAEL,UAAG,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,cAbtB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE;;mDAGG,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD;AAEL,UAAG,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,cAftB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE;;mDAGG,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD,IACC,IACD;AAEL,UAAG,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,AACnB,AACmB,cAjBtB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE,iBACF,8BAAkB,EAAE,kBACpB,EAAE;;6DAE2B;AAAM,UAAA,AAAE,EAAD,IAAI,OAAO,KAAS,SAAF,CAAC;EAAC;+DAI3B;AAAM,qCAAc,CAAC;EAAC;+DAEtB,IAAW,IAAW;AACnD,UAAG,AAAoB,cAAvB,EAAE,iBAAG,0BAAc,EAAE,kBAAI,EAAE;;+DAGhB,IAAW,IAAW,IAAW,IAAW;AACvD,UAAG,AAAoB,AAAK,AAAoB,cAAhD,EAAE,iBAAG,0BAAc,EAAE,kBAAI,EAAE,iBAAG,0BAAc,EAAE,kBAAI,EAAE;;+DAG/C,IACA,IACA,IACA,IACA,IACA,IACA;AAEL,UAAG,AACe,AACf,AACe,AACf,AACe,cALlB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE;;+DAGG,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA;AAEL,UAAG,AACe,AACf,AACe,AACf,AACe,AACf,AACe,cAPlB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE;;+DAGG,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA;AAEL,UAAG,AACe,AACf,AACe,AACf,AACe,AACf,AACe,AACf,AACe,cATlB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE;;+DAGG,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA;AAEL,UAAG,AACe,AACf,AACe,AACf,AACe,AACf,AACe,AACf,AACe,AACf,AACe,cAXlB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE;;+DAGG,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA;AAEL,UAAG,AACe,AACf,AACe,AACf,AACe,AACf,AACe,AACf,AACe,AACf,AACe,AACf,AACe,cAblB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE;;+DAGG,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA;AAEL,UAAG,AACe,AACf,AACe,AACf,AACe,AACf,AACe,AACf,AACe,AACf,AACe,AACf,AACe,AACf,AACe,cAflB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE;;+DAGG,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA,IACA;AAEL,UAAG,AACe,AACf,AACe,AACf,AACe,AACf,AACe,AACf,AACe,AACf,AACe,AACf,AACe,AACf,AACe,AACf,AACe,cAjBlB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE,iBACF,0BAAc,EAAE,kBAChB,EAAE;;qDAEsB;;AAAM,UAAC;iBAAD,OAAK;EAAE","file":"interpolate.ddc.js"}');
  // Exports:
  return {
    src__runtime__interpolate: interpolate
  };
});

//# sourceMappingURL=interpolate.ddc.js.map
