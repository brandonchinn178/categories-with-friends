define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const level = Object.create(dart.library);
  const logging = Object.create(dart.library);
  const logger = Object.create(dart.library);
  const log_record = Object.create(dart.library);
  const $_equals = dartx._equals;
  const $compareTo = dartx.compareTo;
  const $_set = dartx._set;
  const $putIfAbsent = dartx.putIfAbsent;
  const $startsWith = dartx.startsWith;
  const $lastIndexOf = dartx.lastIndexOf;
  const $substring = dartx.substring;
  const $toString = dartx.toString;
  let UnmodifiableMapViewOfString$Logger = () => (UnmodifiableMapViewOfString$Logger = dart.constFn(collection.UnmodifiableMapView$(core.String, logger.Logger)))();
  let VoidToLogger = () => (VoidToLogger = dart.constFn(dart.fnType(logger.Logger, [])))();
  let IdentityMapOfString$Logger = () => (IdentityMapOfString$Logger = dart.constFn(_js_helper.IdentityMap$(core.String, logger.Logger)))();
  let StreamControllerOfLogRecord = () => (StreamControllerOfLogRecord = dart.constFn(async.StreamController$(log_record.LogRecord)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: level.Level.prototype,
        [value$]: 0,
        [name$]: "ALL"
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: level.Level.prototype,
        [value$]: 2000,
        [name$]: "OFF"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: level.Level.prototype,
        [value$]: 300,
        [name$]: "FINEST"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: level.Level.prototype,
        [value$]: 400,
        [name$]: "FINER"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: level.Level.prototype,
        [value$]: 500,
        [name$]: "FINE"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: level.Level.prototype,
        [value$]: 700,
        [name$]: "CONFIG"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: level.Level.prototype,
        [value$]: 800,
        [name$]: "INFO"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: level.Level.prototype,
        [value$]: 900,
        [name$]: "WARNING"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: level.Level.prototype,
        [value$]: 1000,
        [name$]: "SEVERE"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: level.Level.prototype,
        [value$]: 1200,
        [name$]: "SHOUT"
      });
    },
    get C10() {
      return C10 = dart.constList([C0 || CT.C0, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C1 || CT.C1], level.Level);
    }
  });
  const name$ = dart.privateName(level, "Level.name");
  const value$ = dart.privateName(level, "Level.value");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  level.Level = class Level extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    _equals(other) {
      if (other == null) return false;
      return level.Level.is(other) && this.value == other.value;
    }
    ['<'](other) {
      return dart.notNull(this.value) < dart.notNull(other.value);
    }
    ['<='](other) {
      return dart.notNull(this.value) <= dart.notNull(other.value);
    }
    ['>'](other) {
      return dart.notNull(this.value) > dart.notNull(other.value);
    }
    ['>='](other) {
      return dart.notNull(this.value) >= dart.notNull(other.value);
    }
    compareTo(other) {
      level.Level._check(other);
      return dart.notNull(this.value) - dart.notNull(other.value);
    }
    get hashCode() {
      return this.value;
    }
    toString() {
      return this.name;
    }
  };
  (level.Level.new = function(name, value) {
    this[name$] = name;
    this[value$] = value;
    ;
  }).prototype = level.Level.prototype;
  dart.addTypeTests(level.Level);
  level.Level[dart.implements] = () => [core.Comparable$(level.Level)];
  dart.setMethodSignature(level.Level, () => ({
    __proto__: dart.getMethods(level.Level.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object]),
    '<': dart.fnType(core.bool, [level.Level]),
    '<=': dart.fnType(core.bool, [level.Level]),
    '>': dart.fnType(core.bool, [level.Level]),
    '>=': dart.fnType(core.bool, [level.Level]),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setLibraryUri(level.Level, "package:logging/src/level.dart");
  dart.setFieldSignature(level.Level, () => ({
    __proto__: dart.getFields(level.Level.__proto__),
    name: dart.finalFieldType(core.String),
    value: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(level.Level, ['_equals', 'compareTo', 'toString']);
  dart.defineExtensionAccessors(level.Level, ['hashCode']);
  dart.defineLazy(level.Level, {
    /*level.Level.ALL*/get ALL() {
      return C0 || CT.C0;
    },
    /*level.Level.OFF*/get OFF() {
      return C1 || CT.C1;
    },
    /*level.Level.FINEST*/get FINEST() {
      return C2 || CT.C2;
    },
    /*level.Level.FINER*/get FINER() {
      return C3 || CT.C3;
    },
    /*level.Level.FINE*/get FINE() {
      return C4 || CT.C4;
    },
    /*level.Level.CONFIG*/get CONFIG() {
      return C5 || CT.C5;
    },
    /*level.Level.INFO*/get INFO() {
      return C6 || CT.C6;
    },
    /*level.Level.WARNING*/get WARNING() {
      return C7 || CT.C7;
    },
    /*level.Level.SEVERE*/get SEVERE() {
      return C8 || CT.C8;
    },
    /*level.Level.SHOUT*/get SHOUT() {
      return C9 || CT.C9;
    },
    /*level.Level.LEVELS*/get LEVELS() {
      return C10 || CT.C10;
    }
  });
  const _level = dart.privateName(logger, "_level");
  const _controller = dart.privateName(logger, "_controller");
  const _children = dart.privateName(logger, "_children");
  const _getStream = dart.privateName(logger, "_getStream");
  const _publish = dart.privateName(logger, "_publish");
  const name$0 = dart.privateName(logger, "Logger.name");
  const parent$ = dart.privateName(logger, "Logger.parent");
  const children$ = dart.privateName(logger, "Logger.children");
  logger.Logger = class Logger extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get fullName() {
      return this.parent == null || this.parent.name === "" ? this.name : dart.str(this.parent.fullName) + "." + dart.str(this.name);
    }
    static new(name) {
      return logger.Logger._loggers[$putIfAbsent](name, dart.fn(() => logger.Logger._named(name), VoidToLogger()));
    }
    static detached(name) {
      return new logger.Logger._internal(name, null, new (IdentityMapOfString$Logger()).new());
    }
    static _named(name) {
      if (name[$startsWith](".")) {
        dart.throw(new core.ArgumentError.new("name shouldn't start with a '.'"));
      }
      let dot = name[$lastIndexOf](".");
      let parent = null;
      let thisName = null;
      if (dot === -1) {
        if (name !== "") parent = logger.Logger.new("");
        thisName = name;
      } else {
        parent = logger.Logger.new(name[$substring](0, dot));
        thisName = name[$substring](dot + 1);
      }
      return new logger.Logger._internal(thisName, parent, new (IdentityMapOfString$Logger()).new());
    }
    get level() {
      let t0;
      let effectiveLevel = null;
      if (this.parent == null) {
        effectiveLevel = this[_level];
      } else if (!dart.test(logger.hierarchicalLoggingEnabled)) {
        effectiveLevel = logger.Logger.root[_level];
      } else {
        effectiveLevel = (t0 = this[_level], t0 == null ? this.parent.level : t0);
      }
      if (!(effectiveLevel != null)) dart.assertFailed(null, "org-dartlang-app:///packages/logging/src/logger.dart", 105, 12, "effectiveLevel != null");
      return effectiveLevel;
    }
    set level(value) {
      if (!dart.test(logger.hierarchicalLoggingEnabled) && this.parent != null) {
        dart.throw(new core.UnsupportedError.new("Please set \"hierarchicalLoggingEnabled\" to true if you want to " + "change the level on a non-root logger."));
      }
      this[_level] = value;
    }
    get onRecord() {
      return this[_getStream]();
    }
    clearListeners() {
      if (dart.test(logger.hierarchicalLoggingEnabled) || this.parent == null) {
        if (this[_controller] != null) {
          this[_controller].close();
          this[_controller] = null;
        }
      } else {
        logger.Logger.root.clearListeners();
      }
    }
    isLoggable(value) {
      return value['>='](this.level);
    }
    log(logLevel, message, error, stackTrace, zone) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      if (zone === void 0) zone = null;
      let object = null;
      if (dart.test(this.isLoggable(logLevel))) {
        if (core.Function.is(message)) {
          message = dart.dcall(message, []);
        }
        let msg = null;
        if (typeof message == 'string') {
          msg = message;
        } else {
          msg = dart.toString(message);
          object = message;
        }
        if (stackTrace == null && dart.test(logLevel['>='](logger.recordStackTraceAtLevel))) {
          stackTrace = core.StackTrace.current;
          error == null ? error = "autogenerated stack trace for " + dart.str(logLevel) + " " + dart.str(msg) : null;
        }
        zone == null ? zone = async.Zone.current : null;
        let record = new log_record.LogRecord.new(logLevel, msg, this.fullName, error, stackTrace, zone, object);
        if (this.parent == null) {
          this[_publish](record);
        } else if (!dart.test(logger.hierarchicalLoggingEnabled)) {
          logger.Logger.root[_publish](record);
        } else {
          let target = this;
          while (target != null) {
            target[_publish](record);
            target = target.parent;
          }
        }
      }
    }
    finest(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(level.Level.FINEST, message, error, stackTrace);
    }
    finer(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(level.Level.FINER, message, error, stackTrace);
    }
    fine(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(level.Level.FINE, message, error, stackTrace);
    }
    config(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(level.Level.CONFIG, message, error, stackTrace);
    }
    info(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(level.Level.INFO, message, error, stackTrace);
    }
    warning(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(level.Level.WARNING, message, error, stackTrace);
    }
    severe(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(level.Level.SEVERE, message, error, stackTrace);
    }
    shout(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(level.Level.SHOUT, message, error, stackTrace);
    }
    [_getStream]() {
      if (dart.test(logger.hierarchicalLoggingEnabled) || this.parent == null) {
        this[_controller] == null ? this[_controller] = StreamControllerOfLogRecord().broadcast({sync: true}) : null;
        return this[_controller].stream;
      } else {
        return logger.Logger.root[_getStream]();
      }
    }
    [_publish](record) {
      if (this[_controller] != null) {
        this[_controller].add(record);
      }
    }
  };
  (logger.Logger._internal = function(name, parent, children) {
    this[_level] = null;
    this[_controller] = null;
    this[name$0] = name;
    this[parent$] = parent;
    this[_children] = children;
    this[children$] = new (UnmodifiableMapViewOfString$Logger()).new(children);
    if (this.parent == null) {
      this[_level] = logger.defaultLevel;
    } else {
      this.parent[_children][$_set](this.name, this);
    }
  }).prototype = logger.Logger.prototype;
  dart.addTypeTests(logger.Logger);
  dart.setMethodSignature(logger.Logger, () => ({
    __proto__: dart.getMethods(logger.Logger.__proto__),
    clearListeners: dart.fnType(dart.void, []),
    isLoggable: dart.fnType(core.bool, [level.Level]),
    log: dart.fnType(dart.void, [level.Level, dart.dynamic], [core.Object, core.StackTrace, async.Zone]),
    finest: dart.fnType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
    finer: dart.fnType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
    fine: dart.fnType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
    config: dart.fnType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
    info: dart.fnType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
    warning: dart.fnType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
    severe: dart.fnType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
    shout: dart.fnType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
    [_getStream]: dart.fnType(async.Stream$(log_record.LogRecord), []),
    [_publish]: dart.fnType(dart.void, [log_record.LogRecord])
  }));
  dart.setGetterSignature(logger.Logger, () => ({
    __proto__: dart.getGetters(logger.Logger.__proto__),
    fullName: core.String,
    level: level.Level,
    onRecord: async.Stream$(log_record.LogRecord)
  }));
  dart.setSetterSignature(logger.Logger, () => ({
    __proto__: dart.getSetters(logger.Logger.__proto__),
    level: level.Level
  }));
  dart.setLibraryUri(logger.Logger, "package:logging/src/logger.dart");
  dart.setFieldSignature(logger.Logger, () => ({
    __proto__: dart.getFields(logger.Logger.__proto__),
    name: dart.finalFieldType(core.String),
    parent: dart.finalFieldType(logger.Logger),
    [_level]: dart.fieldType(level.Level),
    [_children]: dart.finalFieldType(core.Map$(core.String, logger.Logger)),
    children: dart.finalFieldType(core.Map$(core.String, logger.Logger)),
    [_controller]: dart.fieldType(async.StreamController$(log_record.LogRecord))
  }));
  dart.defineLazy(logger.Logger, {
    /*logger.Logger.root*/get root() {
      return logger.Logger.new("");
    },
    /*logger.Logger._loggers*/get _loggers() {
      return new (IdentityMapOfString$Logger()).new();
    }
  });
  dart.defineLazy(logger, {
    /*logger.hierarchicalLoggingEnabled*/get hierarchicalLoggingEnabled() {
      return false;
    },
    set hierarchicalLoggingEnabled(_) {},
    /*logger.recordStackTraceAtLevel*/get recordStackTraceAtLevel() {
      return level.Level.OFF;
    },
    set recordStackTraceAtLevel(_) {},
    /*logger.defaultLevel*/get defaultLevel() {
      return C6 || CT.C6;
    }
  });
  const level$ = dart.privateName(log_record, "LogRecord.level");
  const message$ = dart.privateName(log_record, "LogRecord.message");
  const object$ = dart.privateName(log_record, "LogRecord.object");
  const loggerName$ = dart.privateName(log_record, "LogRecord.loggerName");
  const time = dart.privateName(log_record, "LogRecord.time");
  const sequenceNumber = dart.privateName(log_record, "LogRecord.sequenceNumber");
  const error$ = dart.privateName(log_record, "LogRecord.error");
  const stackTrace$ = dart.privateName(log_record, "LogRecord.stackTrace");
  const zone$ = dart.privateName(log_record, "LogRecord.zone");
  log_record.LogRecord = class LogRecord extends core.Object {
    get level() {
      return this[level$];
    }
    set level(value) {
      super.level = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get object() {
      return this[object$];
    }
    set object(value) {
      super.object = value;
    }
    get loggerName() {
      return this[loggerName$];
    }
    set loggerName(value) {
      super.loggerName = value;
    }
    get time() {
      return this[time];
    }
    set time(value) {
      super.time = value;
    }
    get sequenceNumber() {
      return this[sequenceNumber];
    }
    set sequenceNumber(value) {
      super.sequenceNumber = value;
    }
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    get stackTrace() {
      return this[stackTrace$];
    }
    set stackTrace(value) {
      super.stackTrace = value;
    }
    get zone() {
      return this[zone$];
    }
    set zone(value) {
      super.zone = value;
    }
    toString() {
      return "[" + dart.str(this.level.name) + "] " + dart.str(this.loggerName) + ": " + dart.str(this.message);
    }
  };
  (log_record.LogRecord.new = function(level, message, loggerName, error, stackTrace, zone, object) {
    let t0;
    if (error === void 0) error = null;
    if (stackTrace === void 0) stackTrace = null;
    if (zone === void 0) zone = null;
    if (object === void 0) object = null;
    this[level$] = level;
    this[message$] = message;
    this[loggerName$] = loggerName;
    this[error$] = error;
    this[stackTrace$] = stackTrace;
    this[zone$] = zone;
    this[object$] = object;
    this[time] = new core.DateTime.now();
    this[sequenceNumber] = (t0 = log_record.LogRecord._nextNumber, log_record.LogRecord._nextNumber = dart.notNull(t0) + 1, t0);
    ;
  }).prototype = log_record.LogRecord.prototype;
  dart.addTypeTests(log_record.LogRecord);
  dart.setLibraryUri(log_record.LogRecord, "package:logging/src/log_record.dart");
  dart.setFieldSignature(log_record.LogRecord, () => ({
    __proto__: dart.getFields(log_record.LogRecord.__proto__),
    level: dart.finalFieldType(level.Level),
    message: dart.finalFieldType(core.String),
    object: dart.finalFieldType(core.Object),
    loggerName: dart.finalFieldType(core.String),
    time: dart.finalFieldType(core.DateTime),
    sequenceNumber: dart.finalFieldType(core.int),
    error: dart.finalFieldType(core.Object),
    stackTrace: dart.finalFieldType(core.StackTrace),
    zone: dart.finalFieldType(async.Zone)
  }));
  dart.defineExtensionMethods(log_record.LogRecord, ['toString']);
  dart.defineLazy(log_record.LogRecord, {
    /*log_record.LogRecord._nextNumber*/get _nextNumber() {
      return 0;
    },
    set _nextNumber(_) {}
  });
  dart.trackLibraries("packages/logging/logging", {
    "package:logging/src/level.dart": level,
    "package:logging/logging.dart": logging,
    "package:logging/src/logger.dart": logger,
    "package:logging/src/log_record.dart": log_record
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/level.dart","src/logger.dart","src/log_record.dart"],"names":[],"mappings":"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","file":"logging.ddc.js"}');
  // Exports:
  return {
    src__level: level,
    logging: logging,
    src__logger: logger,
    src__log_record: log_record
  };
});

//# sourceMappingURL=logging.ddc.js.map
