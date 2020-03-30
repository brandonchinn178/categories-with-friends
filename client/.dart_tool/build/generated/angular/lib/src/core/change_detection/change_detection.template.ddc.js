define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const opaque_token$46template = Object.create(dart.library);
  const runtime$46template = Object.create(dart.library);
  const optimizations$46template = Object.create(dart.library);
  const view$46template = Object.create(dart.library);
  const hierarchical$46template = Object.create(dart.library);
  const injector$46template = Object.create(dart.library);
  const runtime$46template$ = Object.create(dart.library);
  const empty$46template = Object.create(dart.library);
  const reflector$46template = Object.create(dart.library);
  const decorators$46template = Object.create(dart.library);
  const providers$46template = Object.create(dart.library);
  const module$46template = Object.create(dart.library);
  const errors$46template = Object.create(dart.library);
  const map$46template = Object.create(dart.library);
  const change_detector_ref$46template = Object.create(dart.library);
  const metadata$46template = Object.create(dart.library);
  const visibility$46template = Object.create(dart.library);
  const typed$46template = Object.create(dart.library);
  const lifecycle_hooks$46template = Object.create(dart.library);
  const change_detection_util$46template = Object.create(dart.library);
  const lang$46template = Object.create(dart.library);
  const change_detection$46template = Object.create(dart.library);
  const pipe_transform$46template = Object.create(dart.library);
  const default_keyvalue_differ$46template = Object.create(dart.library);
  const default_iterable_differ$46template = Object.create(dart.library);
  const constants$46template = Object.create(dart.library);
  const ng_zone$46template = Object.create(dart.library);
  const provider$46template = Object.create(dart.library);
  const di$46template = Object.create(dart.library);
  const exception_handler$46template = Object.create(dart.library);
  const CT = Object.create(null);
  opaque_token$46template.initReflector = function initReflector() {
    if (dart.test(opaque_token$46template._visited)) {
      return;
    }
    opaque_token$46template._visited = true;
    runtime$46template.initReflector();
  };
  dart.defineLazy(opaque_token$46template, {
    /*opaque_token$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  runtime$46template.initReflector = function initReflector$() {
    if (dart.test(runtime$46template._visited)) {
      return;
    }
    runtime$46template._visited = true;
    optimizations$46template.initReflector();
  };
  dart.defineLazy(runtime$46template, {
    /*runtime$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  optimizations$46template.initReflector = function initReflector$0() {
  };
  view$46template.initReflector = function initReflector$1() {
  };
  hierarchical$46template.initReflector = function initReflector$2() {
    if (dart.test(hierarchical$46template._visited)) {
      return;
    }
    hierarchical$46template._visited = true;
    errors$46template.initReflector();
    empty$46template.initReflector();
    injector$46template.initReflector();
    runtime$46template.initReflector();
  };
  dart.defineLazy(hierarchical$46template, {
    /*hierarchical$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  injector$46template.initReflector = function initReflector$3() {
    if (dart.test(injector$46template._visited)) {
      return;
    }
    injector$46template._visited = true;
    opaque_token$46template.initReflector();
    errors$46template.initReflector();
    module$46template.initReflector();
    empty$46template.initReflector();
    hierarchical$46template.initReflector();
    map$46template.initReflector();
    opaque_token$46template.initReflector();
    runtime$46template.initReflector();
    runtime$46template$.initReflector();
  };
  dart.defineLazy(injector$46template, {
    /*injector$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  runtime$46template$.initReflector = function initReflector$4() {
    if (dart.test(runtime$46template$._visited)) {
      return;
    }
    runtime$46template$._visited = true;
    decorators$46template.initReflector();
    opaque_token$46template.initReflector();
    errors$46template.initReflector();
    module$46template.initReflector();
    providers$46template.initReflector();
    reflector$46template.initReflector();
    empty$46template.initReflector();
    hierarchical$46template.initReflector();
    injector$46template.initReflector();
    runtime$46template.initReflector();
  };
  dart.defineLazy(runtime$46template$, {
    /*runtime$46template$._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  empty$46template.initReflector = function initReflector$5() {
    if (dart.test(empty$46template._visited)) {
      return;
    }
    empty$46template._visited = true;
    hierarchical$46template.initReflector();
    injector$46template.initReflector();
  };
  dart.defineLazy(empty$46template, {
    /*empty$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  reflector$46template.initReflector = function initReflector$6() {
    if (dart.test(reflector$46template._visited)) {
      return;
    }
    reflector$46template._visited = true;
    decorators$46template.initReflector();
    opaque_token$46template.initReflector();
    runtime$46template.initReflector();
  };
  dart.defineLazy(reflector$46template, {
    /*reflector$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  decorators$46template.initReflector = function initReflector$7() {
  };
  providers$46template.initReflector = function initReflector$8() {
    if (dart.test(providers$46template._visited)) {
      return;
    }
    providers$46template._visited = true;
    opaque_token$46template.initReflector();
    runtime$46template.initReflector();
  };
  dart.defineLazy(providers$46template, {
    /*providers$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  module$46template.initReflector = function initReflector$9() {
    if (dart.test(module$46template._visited)) {
      return;
    }
    module$46template._visited = true;
    providers$46template.initReflector();
  };
  dart.defineLazy(module$46template, {
    /*module$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  errors$46template.initReflector = function initReflector$10() {
    if (dart.test(errors$46template._visited)) {
      return;
    }
    errors$46template._visited = true;
    runtime$46template.initReflector();
  };
  dart.defineLazy(errors$46template, {
    /*errors$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  map$46template.initReflector = function initReflector$11() {
    if (dart.test(map$46template._visited)) {
      return;
    }
    map$46template._visited = true;
    empty$46template.initReflector();
    hierarchical$46template.initReflector();
    injector$46template.initReflector();
  };
  dart.defineLazy(map$46template, {
    /*map$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  change_detector_ref$46template.initReflector = function initReflector$12() {
  };
  metadata$46template.initReflector = function initReflector$13() {
    if (dart.test(metadata$46template._visited)) {
      return;
    }
    metadata$46template._visited = true;
    change_detection$46template.initReflector();
    decorators$46template.initReflector();
    lifecycle_hooks$46template.initReflector();
    typed$46template.initReflector();
    typed$46template.initReflector();
    view$46template.initReflector();
    view$46template.initReflector();
    visibility$46template.initReflector();
    visibility$46template.initReflector();
  };
  dart.defineLazy(metadata$46template, {
    /*metadata$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  visibility$46template.initReflector = function initReflector$14() {
    if (dart.test(visibility$46template._visited)) {
      return;
    }
    visibility$46template._visited = true;
    metadata$46template.initReflector();
  };
  dart.defineLazy(visibility$46template, {
    /*visibility$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  typed$46template.initReflector = function initReflector$15() {
  };
  lifecycle_hooks$46template.initReflector = function initReflector$16() {
    if (dart.test(lifecycle_hooks$46template._visited)) {
      return;
    }
    lifecycle_hooks$46template._visited = true;
    change_detection_util$46template.initReflector();
  };
  dart.defineLazy(lifecycle_hooks$46template, {
    /*lifecycle_hooks$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  change_detection_util$46template.initReflector = function initReflector$17() {
    if (dart.test(change_detection_util$46template._visited)) {
      return;
    }
    change_detection_util$46template._visited = true;
    lang$46template.initReflector();
  };
  dart.defineLazy(change_detection_util$46template, {
    /*change_detection_util$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  lang$46template.initReflector = function initReflector$18() {
  };
  change_detection$46template.initReflector = function initReflector$19() {
    if (dart.test(change_detection$46template._visited)) {
      return;
    }
    change_detection$46template._visited = true;
    change_detection_util$46template.initReflector();
    change_detector_ref$46template.initReflector();
    constants$46template.initReflector();
    default_iterable_differ$46template.initReflector();
    default_keyvalue_differ$46template.initReflector();
    pipe_transform$46template.initReflector();
  };
  dart.defineLazy(change_detection$46template, {
    /*change_detection$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  pipe_transform$46template.initReflector = function initReflector$20() {
  };
  default_keyvalue_differ$46template.initReflector = function initReflector$21() {
  };
  default_iterable_differ$46template.initReflector = function initReflector$22() {
    if (dart.test(default_iterable_differ$46template._visited)) {
      return;
    }
    default_iterable_differ$46template._visited = true;
    runtime$46template.initReflector();
  };
  dart.defineLazy(default_iterable_differ$46template, {
    /*default_iterable_differ$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  constants$46template.initReflector = function initReflector$23() {
  };
  ng_zone$46template.initReflector = function initReflector$24() {
  };
  provider$46template.initReflector = function initReflector$25() {
    if (dart.test(provider$46template._visited)) {
      return;
    }
    provider$46template._visited = true;
    providers$46template.initReflector();
  };
  dart.defineLazy(provider$46template, {
    /*provider$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  di$46template.initReflector = function initReflector$26() {
    if (dart.test(di$46template._visited)) {
      return;
    }
    di$46template._visited = true;
    errors$46template.initReflector();
    injector$46template.initReflector();
    runtime$46template$.initReflector();
    module$46template.initReflector();
    decorators$46template.initReflector();
    opaque_token$46template.initReflector();
    provider$46template.initReflector();
  };
  dart.defineLazy(di$46template, {
    /*di$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  exception_handler$46template.initReflector = function initReflector$27() {
  };
  dart.trackLibraries("packages/angular/src/core/change_detection/change_detection.template", {
    "package:angular/src/core/di/opaque_token.template.dart": opaque_token$46template,
    "package:angular/src/runtime.template.dart": runtime$46template,
    "package:angular/src/runtime/optimizations.template.dart": optimizations$46template,
    "package:angular/src/core/metadata/view.template.dart": view$46template,
    "package:angular/src/di/injector/hierarchical.template.dart": hierarchical$46template,
    "package:angular/src/di/injector/injector.template.dart": injector$46template,
    "package:angular/src/di/injector/runtime.template.dart": runtime$46template$,
    "package:angular/src/di/injector/empty.template.dart": empty$46template,
    "package:angular/src/di/reflector.template.dart": reflector$46template,
    "package:angular/src/core/di/decorators.template.dart": decorators$46template,
    "package:angular/src/di/providers.template.dart": providers$46template,
    "package:angular/src/di/module.template.dart": module$46template,
    "package:angular/src/di/errors.template.dart": errors$46template,
    "package:angular/src/di/injector/map.template.dart": map$46template,
    "package:angular/src/core/change_detection/change_detector_ref.template.dart": change_detector_ref$46template,
    "package:angular/src/core/metadata.template.dart": metadata$46template,
    "package:angular/src/core/metadata/visibility.template.dart": visibility$46template,
    "package:angular/src/core/metadata/typed.template.dart": typed$46template,
    "package:angular/src/core/metadata/lifecycle_hooks.template.dart": lifecycle_hooks$46template,
    "package:angular/src/core/change_detection/change_detection_util.template.dart": change_detection_util$46template,
    "package:angular/src/facade/lang.template.dart": lang$46template,
    "package:angular/src/core/change_detection/change_detection.template.dart": change_detection$46template,
    "package:angular/src/core/change_detection/pipe_transform.template.dart": pipe_transform$46template,
    "package:angular/src/core/change_detection/differs/default_keyvalue_differ.template.dart": default_keyvalue_differ$46template,
    "package:angular/src/core/change_detection/differs/default_iterable_differ.template.dart": default_iterable_differ$46template,
    "package:angular/src/core/change_detection/constants.template.dart": constants$46template,
    "package:angular/src/core/zone/ng_zone.template.dart": ng_zone$46template,
    "package:angular/src/core/di/provider.template.dart": provider$46template,
    "package:angular/src/core/di.template.dart": di$46template,
    "package:angular/src/facade/exception_handler.template.dart": exception_handler$46template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../di/opaque_token.template.dart","../../runtime.template.dart","../../runtime/optimizations.template.dart","../metadata/view.template.dart","../../di/injector/hierarchical.template.dart","../../di/injector/injector.template.dart","../../di/injector/runtime.template.dart","../../di/injector/empty.template.dart","../../di/reflector.template.dart","../di/decorators.template.dart","../../di/providers.template.dart","../../di/module.template.dart","../../di/errors.template.dart","../../di/injector/map.template.dart","change_detector_ref.template.dart","../metadata.template.dart","../metadata/visibility.template.dart","../metadata/typed.template.dart","../metadata/lifecycle_hooks.template.dart","change_detection_util.template.dart","../../facade/lang.template.dart","change_detection.template.dart","pipe_transform.template.dart","differs/default_keyvalue_differ.template.dart","differs/default_iterable_differ.template.dart","constants.template.dart","../zone/ng_zone.template.dart","../di/provider.template.dart","../di.template.dart","../../facade/exception_handler.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAUE,kBAAI;AACF;;AAEa,IAAf,mCAAW;AAEU,IAArB;EACF;;MARI,gCAAQ;YAAG;;;;;ACEb,kBAAI;AACF;;AAEa,IAAf,8BAAW;AAEU,IAArB;EACF;;MARI,2BAAQ;YAAG;;;;;ECAO;;ECAA;;ACKpB,kBAAI;AACF;;AAEa,IAAf,mCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAXI,gCAAQ;YAAG;;;;;ACOb,kBAAI;AACF;;AAEa,IAAf,+BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAhBI,4BAAQ;YAAG;;;;;ACGb,kBAAI;AACF;;AAEa,IAAf,+BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAjBI,4BAAQ;YAAG;;;;;ACNb,kBAAI;AACF;;AAEa,IAAf,4BAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,yBAAQ;YAAG;;;;;ACGb,kBAAI;AACF;;AAEa,IAAf,gCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,6BAAQ;YAAG;;;;;ECFO;;ACGpB,kBAAI;AACF;;AAEa,IAAf,gCAAW;AAEU,IAArB;AACqB,IAArB;EACF;;MATI,6BAAQ;YAAG;;;;;ACCb,kBAAI;AACF;;AAEa,IAAf,6BAAW;AAEU,IAArB;EACF;;MARI,0BAAQ;YAAG;;;;;ACEb,kBAAI;AACF;;AAEa,IAAf,6BAAW;AAEU,IAArB;EACF;;MARI,0BAAQ;YAAG;;;;;ACIb,kBAAI;AACF;;AAEa,IAAf,0BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAVI,uBAAQ;YAAG;;;;;ECFO;;ACUpB,kBAAI;AACF;;AAEa,IAAf,+BAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAhBI,4BAAQ;YAAG;;;;;ACNb,kBAAI;AACF;;AAEa,IAAf,iCAAW;AAEU,IAArB;EACF;;MARI,8BAAQ;YAAG;;;;;ECAO;;ACEpB,kBAAI;AACF;;AAEa,IAAf,sCAAW;AAEU,IAArB;EACF;;MARI,mCAAQ;YAAG;;;;;ACEb,kBAAI;AACF;;AAEa,IAAf,4CAAW;AAEU,IAArB;EACF;;MARI,yCAAQ;YAAG;;;;;ECAO;;ACOpB,kBAAI;AACF;;AAEa,IAAf,uCAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAbI,oCAAQ;YAAG;;;;;ECLO;;ECAA;;ACEpB,kBAAI;AACF;;AAEa,IAAf,8CAAW;AAEU,IAArB;EACF;;MARI,2CAAQ;YAAG;;;;;ECAO;;ECAA;;ACEpB,kBAAI;AACF;;AAEa,IAAf,+BAAW;AAEU,IAArB;EACF;;MARI,4BAAQ;YAAG;;;;;ACQb,kBAAI;AACF;;AAEa,IAAf,yBAAW;AAEU,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;AACqB,IAArB;EACF;;MAdI,sBAAQ;YAAG;;;;;ECNO","file":"change_detection.template.ddc.js"}');
  // Exports:
  return {
    src__core__di__opaque_token$46template: opaque_token$46template,
    src__runtime$46template: runtime$46template,
    src__runtime__optimizations$46template: optimizations$46template,
    src__core__metadata__view$46template: view$46template,
    src__di__injector__hierarchical$46template: hierarchical$46template,
    src__di__injector__injector$46template: injector$46template,
    src__di__injector__runtime$46template: runtime$46template$,
    src__di__injector__empty$46template: empty$46template,
    src__di__reflector$46template: reflector$46template,
    src__core__di__decorators$46template: decorators$46template,
    src__di__providers$46template: providers$46template,
    src__di__module$46template: module$46template,
    src__di__errors$46template: errors$46template,
    src__di__injector__map$46template: map$46template,
    src__core__change_detection__change_detector_ref$46template: change_detector_ref$46template,
    src__core__metadata$46template: metadata$46template,
    src__core__metadata__visibility$46template: visibility$46template,
    src__core__metadata__typed$46template: typed$46template,
    src__core__metadata__lifecycle_hooks$46template: lifecycle_hooks$46template,
    src__core__change_detection__change_detection_util$46template: change_detection_util$46template,
    src__facade__lang$46template: lang$46template,
    src__core__change_detection__change_detection$46template: change_detection$46template,
    src__core__change_detection__pipe_transform$46template: pipe_transform$46template,
    src__core__change_detection__differs__default_keyvalue_differ$46template: default_keyvalue_differ$46template,
    src__core__change_detection__differs__default_iterable_differ$46template: default_iterable_differ$46template,
    src__core__change_detection__constants$46template: constants$46template,
    src__core__zone__ng_zone$46template: ng_zone$46template,
    src__core__di__provider$46template: provider$46template,
    src__core__di$46template: di$46template,
    src__facade__exception_handler$46template: exception_handler$46template
  };
});

//# sourceMappingURL=change_detection.template.ddc.js.map
