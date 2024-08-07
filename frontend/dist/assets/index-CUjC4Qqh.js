var eC = Object.defineProperty;
var tC = (e, t, n) =>
  t in e
    ? eC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var W = (e, t, n) => (tC(e, typeof t != "symbol" ? t + "" : t, n), n);
function nC(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var Ra =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Zv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ey = { exports: {} },
  Jc = {},
  ty = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ma = Symbol.for("react.element"),
  rC = Symbol.for("react.portal"),
  iC = Symbol.for("react.fragment"),
  sC = Symbol.for("react.strict_mode"),
  oC = Symbol.for("react.profiler"),
  aC = Symbol.for("react.provider"),
  lC = Symbol.for("react.context"),
  cC = Symbol.for("react.forward_ref"),
  uC = Symbol.for("react.suspense"),
  dC = Symbol.for("react.memo"),
  hC = Symbol.for("react.lazy"),
  ym = Symbol.iterator;
function fC(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ym && e[ym]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ny = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ry = Object.assign,
  iy = {};
function Rs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = iy),
    (this.updater = n || ny);
}
Rs.prototype.isReactComponent = {};
Rs.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Rs.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sy() {}
sy.prototype = Rs.prototype;
function Wf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = iy),
    (this.updater = n || ny);
}
var Hf = (Wf.prototype = new sy());
Hf.constructor = Wf;
ry(Hf, Rs.prototype);
Hf.isPureReactComponent = !0;
var bm = Array.isArray,
  oy = Object.prototype.hasOwnProperty,
  Vf = { current: null },
  ay = { key: !0, ref: !0, __self: !0, __source: !0 };
function ly(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      oy.call(t, r) && !ay.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
    i.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: ma,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Vf.current,
  };
}
function pC(e, t) {
  return {
    $$typeof: ma,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Uf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ma;
}
function gC(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var jm = /\/+/g;
function Zu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gC("" + e.key)
    : t.toString(36);
}
function Pl(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ma:
          case rC:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Zu(o, 0) : r),
      bm(i)
        ? ((n = ""),
          e != null && (n = e.replace(jm, "$&/") + "/"),
          Pl(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Uf(i) &&
            (i = pC(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(jm, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), bm(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var c = r + Zu(s, l);
      o += Pl(s, t, n, c, i);
    }
  else if (((c = fC(e)), typeof c == "function"))
    for (e = c.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (c = r + Zu(s, l++)), (o += Pl(s, t, n, c, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Fa(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Pl(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function mC(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ot = { current: null },
  Il = { transition: null },
  xC = {
    ReactCurrentDispatcher: ot,
    ReactCurrentBatchConfig: Il,
    ReactCurrentOwner: Vf,
  };
function cy() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = {
  map: Fa,
  forEach: function (e, t, n) {
    Fa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Fa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Fa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Uf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
q.Component = Rs;
q.Fragment = iC;
q.Profiler = oC;
q.PureComponent = Wf;
q.StrictMode = sC;
q.Suspense = uC;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xC;
q.act = cy;
q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ry({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Vf.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (c in t)
      oy.call(t, c) &&
        !ay.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ma, type: e.type, key: i, ref: s, props: r, _owner: o };
};
q.createContext = function (e) {
  return (
    (e = {
      $$typeof: lC,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: aC, _context: e }),
    (e.Consumer = e)
  );
};
q.createElement = ly;
q.createFactory = function (e) {
  var t = ly.bind(null, e);
  return (t.type = e), t;
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (e) {
  return { $$typeof: cC, render: e };
};
q.isValidElement = Uf;
q.lazy = function (e) {
  return { $$typeof: hC, _payload: { _status: -1, _result: e }, _init: mC };
};
q.memo = function (e, t) {
  return { $$typeof: dC, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
  var t = Il.transition;
  Il.transition = {};
  try {
    e();
  } finally {
    Il.transition = t;
  }
};
q.unstable_act = cy;
q.useCallback = function (e, t) {
  return ot.current.useCallback(e, t);
};
q.useContext = function (e) {
  return ot.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
  return ot.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
  return ot.current.useEffect(e, t);
};
q.useId = function () {
  return ot.current.useId();
};
q.useImperativeHandle = function (e, t, n) {
  return ot.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
  return ot.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return ot.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return ot.current.useMemo(e, t);
};
q.useReducer = function (e, t, n) {
  return ot.current.useReducer(e, t, n);
};
q.useRef = function (e) {
  return ot.current.useRef(e);
};
q.useState = function (e) {
  return ot.current.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
  return ot.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
  return ot.current.useTransition();
};
q.version = "18.3.1";
ty.exports = q;
var w = ty.exports;
const U = Zv(w),
  vC = nC({ __proto__: null, default: U }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yC = w,
  bC = Symbol.for("react.element"),
  jC = Symbol.for("react.fragment"),
  wC = Object.prototype.hasOwnProperty,
  SC = yC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  CC = { key: !0, ref: !0, __self: !0, __source: !0 };
function uy(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) wC.call(t, r) && !CC.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: bC,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: SC.current,
  };
}
Jc.Fragment = jC;
Jc.jsx = uy;
Jc.jsxs = uy;
ey.exports = Jc;
var a = ey.exports,
  ah = {},
  dy = { exports: {} },
  At = {},
  hy = { exports: {} },
  fy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, M) {
    var D = O.length;
    O.push(M);
    e: for (; 0 < D; ) {
      var H = (D - 1) >>> 1,
        B = O[H];
      if (0 < i(B, M)) (O[H] = M), (O[D] = B), (D = H);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var M = O[0],
      D = O.pop();
    if (D !== M) {
      O[0] = D;
      e: for (var H = 0, B = O.length, se = B >>> 1; H < se; ) {
        var Q = 2 * (H + 1) - 1,
          ce = O[Q],
          ne = Q + 1,
          Pe = O[ne];
        if (0 > i(ce, D))
          ne < B && 0 > i(Pe, ce)
            ? ((O[H] = Pe), (O[ne] = D), (H = ne))
            : ((O[H] = ce), (O[Q] = D), (H = Q));
        else if (ne < B && 0 > i(Pe, D)) (O[H] = Pe), (O[ne] = D), (H = ne);
        else break e;
      }
    }
    return M;
  }
  function i(O, M) {
    var D = O.sortIndex - M.sortIndex;
    return D !== 0 ? D : O.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var c = [],
    u = [],
    d = 1,
    h = null,
    f = 3,
    m = !1,
    p = !1,
    g = !1,
    y = typeof setTimeout == "function" ? setTimeout : null,
    x = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function b(O) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= O)
        r(u), (M.sortIndex = M.expirationTime), t(c, M);
      else break;
      M = n(u);
    }
  }
  function S(O) {
    if (((g = !1), b(O), !p))
      if (n(c) !== null) (p = !0), G(C);
      else {
        var M = n(u);
        M !== null && te(S, M.startTime - O);
      }
  }
  function C(O, M) {
    (p = !1), g && ((g = !1), x(E), (E = -1)), (m = !0);
    var D = f;
    try {
      for (
        b(M), h = n(c);
        h !== null && (!(h.expirationTime > M) || (O && !R()));

      ) {
        var H = h.callback;
        if (typeof H == "function") {
          (h.callback = null), (f = h.priorityLevel);
          var B = H(h.expirationTime <= M);
          (M = e.unstable_now()),
            typeof B == "function" ? (h.callback = B) : h === n(c) && r(c),
            b(M);
        } else r(c);
        h = n(c);
      }
      if (h !== null) var se = !0;
      else {
        var Q = n(u);
        Q !== null && te(S, Q.startTime - M), (se = !1);
      }
      return se;
    } finally {
      (h = null), (f = D), (m = !1);
    }
  }
  var k = !1,
    _ = null,
    E = -1,
    I = 5,
    N = -1;
  function R() {
    return !(e.unstable_now() - N < I);
  }
  function z() {
    if (_ !== null) {
      var O = e.unstable_now();
      N = O;
      var M = !0;
      try {
        M = _(!0, O);
      } finally {
        M ? ee() : ((k = !1), (_ = null));
      }
    } else k = !1;
  }
  var ee;
  if (typeof v == "function")
    ee = function () {
      v(z);
    };
  else if (typeof MessageChannel < "u") {
    var ae = new MessageChannel(),
      K = ae.port2;
    (ae.port1.onmessage = z),
      (ee = function () {
        K.postMessage(null);
      });
  } else
    ee = function () {
      y(z, 0);
    };
  function G(O) {
    (_ = O), k || ((k = !0), ee());
  }
  function te(O, M) {
    E = y(function () {
      O(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || m || ((p = !0), G(C));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (O) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = f;
      }
      var D = f;
      f = M;
      try {
        return O();
      } finally {
        f = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, M) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var D = f;
      f = O;
      try {
        return M();
      } finally {
        f = D;
      }
    }),
    (e.unstable_scheduleCallback = function (O, M, D) {
      var H = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? H + D : H))
          : (D = H),
        O)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = D + B),
        (O = {
          id: d++,
          callback: M,
          priorityLevel: O,
          startTime: D,
          expirationTime: B,
          sortIndex: -1,
        }),
        D > H
          ? ((O.sortIndex = D),
            t(u, O),
            n(c) === null &&
              O === n(u) &&
              (g ? (x(E), (E = -1)) : (g = !0), te(S, D - H)))
          : ((O.sortIndex = B), t(c, O), p || m || ((p = !0), G(C))),
        O
      );
    }),
    (e.unstable_shouldYield = R),
    (e.unstable_wrapCallback = function (O) {
      var M = f;
      return function () {
        var D = f;
        f = M;
        try {
          return O.apply(this, arguments);
        } finally {
          f = D;
        }
      };
    });
})(fy);
hy.exports = fy;
var _C = hy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var EC = w,
  Nt = _C;
function A(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var py = new Set(),
  Mo = {};
function zi(e, t) {
  js(e, t), js(e + "Capture", t);
}
function js(e, t) {
  for (Mo[e] = t, e = 0; e < t.length; e++) py.add(t[e]);
}
var ur = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  lh = Object.prototype.hasOwnProperty,
  kC =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wm = {},
  Sm = {};
function PC(e) {
  return lh.call(Sm, e)
    ? !0
    : lh.call(wm, e)
    ? !1
    : kC.test(e)
    ? (Sm[e] = !0)
    : ((wm[e] = !0), !1);
}
function IC(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function NC(e, t, n, r) {
  if (t === null || typeof t > "u" || IC(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function at(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ge[e] = new at(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ge[t] = new at(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ge[e] = new at(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ge[e] = new at(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ge[e] = new at(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ge[e] = new at(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ge[e] = new at(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ge[e] = new at(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ge[e] = new at(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gf = /[\-:]([a-z])/g;
function Yf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gf, Yf);
    Ge[t] = new at(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gf, Yf);
    Ge[t] = new at(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Gf, Yf);
  Ge[t] = new at(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ge[e] = new at(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ge.xlinkHref = new at(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ge[e] = new at(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qf(e, t, n, r) {
  var i = Ge.hasOwnProperty(t) ? Ge[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (NC(t, n, i, r) && (n = null),
    r || i === null
      ? PC(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pr = EC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  za = Symbol.for("react.element"),
  Ki = Symbol.for("react.portal"),
  Qi = Symbol.for("react.fragment"),
  Kf = Symbol.for("react.strict_mode"),
  ch = Symbol.for("react.profiler"),
  gy = Symbol.for("react.provider"),
  my = Symbol.for("react.context"),
  Qf = Symbol.for("react.forward_ref"),
  uh = Symbol.for("react.suspense"),
  dh = Symbol.for("react.suspense_list"),
  Xf = Symbol.for("react.memo"),
  Er = Symbol.for("react.lazy"),
  xy = Symbol.for("react.offscreen"),
  Cm = Symbol.iterator;
function Ys(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cm && e[Cm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ce = Object.assign,
  ed;
function lo(e) {
  if (ed === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ed = (t && t[1]) || "";
    }
  return (
    `
` +
    ed +
    e
  );
}
var td = !1;
function nd(e, t) {
  if (!e || td) return "";
  td = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var c =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (td = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? lo(e) : "";
}
function AC(e) {
  switch (e.tag) {
    case 5:
      return lo(e.type);
    case 16:
      return lo("Lazy");
    case 13:
      return lo("Suspense");
    case 19:
      return lo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = nd(e.type, !1)), e;
    case 11:
      return (e = nd(e.type.render, !1)), e;
    case 1:
      return (e = nd(e.type, !0)), e;
    default:
      return "";
  }
}
function hh(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qi:
      return "Fragment";
    case Ki:
      return "Portal";
    case ch:
      return "Profiler";
    case Kf:
      return "StrictMode";
    case uh:
      return "Suspense";
    case dh:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case my:
        return (e.displayName || "Context") + ".Consumer";
      case gy:
        return (e._context.displayName || "Context") + ".Provider";
      case Qf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Xf:
        return (
          (t = e.displayName || null), t !== null ? t : hh(e.type) || "Memo"
        );
      case Er:
        (t = e._payload), (e = e._init);
        try {
          return hh(e(t));
        } catch {}
    }
  return null;
}
function TC(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return hh(t);
    case 8:
      return t === Kf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Qr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function vy(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function OC(e) {
  var t = vy(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function $a(e) {
  e._valueTracker || (e._valueTracker = OC(e));
}
function yy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = vy(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function tc(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fh(e, t) {
  var n = t.checked;
  return Ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function _m(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Qr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function by(e, t) {
  (t = t.checked), t != null && qf(e, "checked", t, !1);
}
function ph(e, t) {
  by(e, t);
  var n = Qr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? gh(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && gh(e, t.type, Qr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Em(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function gh(e, t, n) {
  (t !== "number" || tc(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var co = Array.isArray;
function ds(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Qr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function mh(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return Ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function km(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(A(92));
      if (co(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Qr(n) };
}
function jy(e, t) {
  var n = Qr(t.value),
    r = Qr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Pm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function wy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xh(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? wy(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ba,
  Sy = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ba = Ba || document.createElement("div"),
          Ba.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ba.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Lo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var yo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  DC = ["Webkit", "ms", "Moz", "O"];
Object.keys(yo).forEach(function (e) {
  DC.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (yo[t] = yo[e]);
  });
});
function Cy(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (yo.hasOwnProperty(e) && yo[e])
    ? ("" + t).trim()
    : t + "px";
}
function _y(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Cy(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var MC = Ce(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function vh(e, t) {
  if (t) {
    if (MC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function yh(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var bh = null;
function Jf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var jh = null,
  hs = null,
  fs = null;
function Im(e) {
  if ((e = ya(e))) {
    if (typeof jh != "function") throw Error(A(280));
    var t = e.stateNode;
    t && ((t = ru(t)), jh(e.stateNode, e.type, t));
  }
}
function Ey(e) {
  hs ? (fs ? fs.push(e) : (fs = [e])) : (hs = e);
}
function ky() {
  if (hs) {
    var e = hs,
      t = fs;
    if (((fs = hs = null), Im(e), t)) for (e = 0; e < t.length; e++) Im(t[e]);
  }
}
function Py(e, t) {
  return e(t);
}
function Iy() {}
var rd = !1;
function Ny(e, t, n) {
  if (rd) return e(t, n);
  rd = !0;
  try {
    return Py(e, t, n);
  } finally {
    (rd = !1), (hs !== null || fs !== null) && (Iy(), ky());
  }
}
function Ro(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ru(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var wh = !1;
if (ur)
  try {
    var qs = {};
    Object.defineProperty(qs, "passive", {
      get: function () {
        wh = !0;
      },
    }),
      window.addEventListener("test", qs, qs),
      window.removeEventListener("test", qs, qs);
  } catch {
    wh = !1;
  }
function LC(e, t, n, r, i, s, o, l, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var bo = !1,
  nc = null,
  rc = !1,
  Sh = null,
  RC = {
    onError: function (e) {
      (bo = !0), (nc = e);
    },
  };
function FC(e, t, n, r, i, s, o, l, c) {
  (bo = !1), (nc = null), LC.apply(RC, arguments);
}
function zC(e, t, n, r, i, s, o, l, c) {
  if ((FC.apply(this, arguments), bo)) {
    if (bo) {
      var u = nc;
      (bo = !1), (nc = null);
    } else throw Error(A(198));
    rc || ((rc = !0), (Sh = u));
  }
}
function $i(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ay(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Nm(e) {
  if ($i(e) !== e) throw Error(A(188));
}
function $C(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $i(e)), t === null)) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Nm(i), e;
        if (s === r) return Nm(i), t;
        s = s.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function Ty(e) {
  return (e = $C(e)), e !== null ? Oy(e) : null;
}
function Oy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Oy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Dy = Nt.unstable_scheduleCallback,
  Am = Nt.unstable_cancelCallback,
  BC = Nt.unstable_shouldYield,
  WC = Nt.unstable_requestPaint,
  Ie = Nt.unstable_now,
  HC = Nt.unstable_getCurrentPriorityLevel,
  Zf = Nt.unstable_ImmediatePriority,
  My = Nt.unstable_UserBlockingPriority,
  ic = Nt.unstable_NormalPriority,
  VC = Nt.unstable_LowPriority,
  Ly = Nt.unstable_IdlePriority,
  Zc = null,
  Rn = null;
function UC(e) {
  if (Rn && typeof Rn.onCommitFiberRoot == "function")
    try {
      Rn.onCommitFiberRoot(Zc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var xn = Math.clz32 ? Math.clz32 : qC,
  GC = Math.log,
  YC = Math.LN2;
function qC(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((GC(e) / YC) | 0)) | 0;
}
var Wa = 64,
  Ha = 4194304;
function uo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function sc(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = uo(l)) : ((s &= o), s !== 0 && (r = uo(s)));
  } else (o = n & ~i), o !== 0 ? (r = uo(o)) : s !== 0 && (r = uo(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - xn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function KC(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function QC(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - xn(s),
      l = 1 << o,
      c = i[o];
    c === -1
      ? (!(l & n) || l & r) && (i[o] = KC(l, t))
      : c <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function Ch(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ry() {
  var e = Wa;
  return (Wa <<= 1), !(Wa & 4194240) && (Wa = 64), e;
}
function id(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function xa(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - xn(t)),
    (e[t] = n);
}
function XC(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - xn(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function ep(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - xn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var he = 0;
function Fy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var zy,
  tp,
  $y,
  By,
  Wy,
  _h = !1,
  Va = [],
  $r = null,
  Br = null,
  Wr = null,
  Fo = new Map(),
  zo = new Map(),
  Pr = [],
  JC =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Tm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      $r = null;
      break;
    case "dragenter":
    case "dragleave":
      Br = null;
      break;
    case "mouseover":
    case "mouseout":
      Wr = null;
      break;
    case "pointerover":
    case "pointerout":
      Fo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      zo.delete(t.pointerId);
  }
}
function Ks(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = ya(t)), t !== null && tp(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function ZC(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ($r = Ks($r, e, t, n, r, i)), !0;
    case "dragenter":
      return (Br = Ks(Br, e, t, n, r, i)), !0;
    case "mouseover":
      return (Wr = Ks(Wr, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Fo.set(s, Ks(Fo.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), zo.set(s, Ks(zo.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Hy(e) {
  var t = mi(e.target);
  if (t !== null) {
    var n = $i(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ay(n)), t !== null)) {
          (e.blockedOn = t),
            Wy(e.priority, function () {
              $y(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Nl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Eh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (bh = r), n.target.dispatchEvent(r), (bh = null);
    } else return (t = ya(n)), t !== null && tp(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Om(e, t, n) {
  Nl(e) && n.delete(t);
}
function e_() {
  (_h = !1),
    $r !== null && Nl($r) && ($r = null),
    Br !== null && Nl(Br) && (Br = null),
    Wr !== null && Nl(Wr) && (Wr = null),
    Fo.forEach(Om),
    zo.forEach(Om);
}
function Qs(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    _h ||
      ((_h = !0),
      Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority, e_)));
}
function $o(e) {
  function t(i) {
    return Qs(i, e);
  }
  if (0 < Va.length) {
    Qs(Va[0], e);
    for (var n = 1; n < Va.length; n++) {
      var r = Va[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    $r !== null && Qs($r, e),
      Br !== null && Qs(Br, e),
      Wr !== null && Qs(Wr, e),
      Fo.forEach(t),
      zo.forEach(t),
      n = 0;
    n < Pr.length;
    n++
  )
    (r = Pr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Pr.length && ((n = Pr[0]), n.blockedOn === null); )
    Hy(n), n.blockedOn === null && Pr.shift();
}
var ps = pr.ReactCurrentBatchConfig,
  oc = !0;
function t_(e, t, n, r) {
  var i = he,
    s = ps.transition;
  ps.transition = null;
  try {
    (he = 1), np(e, t, n, r);
  } finally {
    (he = i), (ps.transition = s);
  }
}
function n_(e, t, n, r) {
  var i = he,
    s = ps.transition;
  ps.transition = null;
  try {
    (he = 4), np(e, t, n, r);
  } finally {
    (he = i), (ps.transition = s);
  }
}
function np(e, t, n, r) {
  if (oc) {
    var i = Eh(e, t, n, r);
    if (i === null) pd(e, t, r, ac, n), Tm(e, r);
    else if (ZC(i, e, t, n, r)) r.stopPropagation();
    else if ((Tm(e, r), t & 4 && -1 < JC.indexOf(e))) {
      for (; i !== null; ) {
        var s = ya(i);
        if (
          (s !== null && zy(s),
          (s = Eh(e, t, n, r)),
          s === null && pd(e, t, r, ac, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else pd(e, t, r, null, n);
  }
}
var ac = null;
function Eh(e, t, n, r) {
  if (((ac = null), (e = Jf(r)), (e = mi(e)), e !== null))
    if (((t = $i(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ay(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ac = e), null;
}
function Vy(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (HC()) {
        case Zf:
          return 1;
        case My:
          return 4;
        case ic:
        case VC:
          return 16;
        case Ly:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Nr = null,
  rp = null,
  Al = null;
function Uy() {
  if (Al) return Al;
  var e,
    t = rp,
    n = t.length,
    r,
    i = "value" in Nr ? Nr.value : Nr.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Al = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Tl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ua() {
  return !0;
}
function Dm() {
  return !1;
}
function Tt(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ua
        : Dm),
      (this.isPropagationStopped = Dm),
      this
    );
  }
  return (
    Ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ua));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ua));
      },
      persist: function () {},
      isPersistent: Ua,
    }),
    t
  );
}
var Fs = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ip = Tt(Fs),
  va = Ce({}, Fs, { view: 0, detail: 0 }),
  r_ = Tt(va),
  sd,
  od,
  Xs,
  eu = Ce({}, va, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: sp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Xs &&
            (Xs && e.type === "mousemove"
              ? ((sd = e.screenX - Xs.screenX), (od = e.screenY - Xs.screenY))
              : (od = sd = 0),
            (Xs = e)),
          sd);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : od;
    },
  }),
  Mm = Tt(eu),
  i_ = Ce({}, eu, { dataTransfer: 0 }),
  s_ = Tt(i_),
  o_ = Ce({}, va, { relatedTarget: 0 }),
  ad = Tt(o_),
  a_ = Ce({}, Fs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  l_ = Tt(a_),
  c_ = Ce({}, Fs, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  u_ = Tt(c_),
  d_ = Ce({}, Fs, { data: 0 }),
  Lm = Tt(d_),
  h_ = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  f_ = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  p_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function g_(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = p_[e]) ? !!t[e] : !1;
}
function sp() {
  return g_;
}
var m_ = Ce({}, va, {
    key: function (e) {
      if (e.key) {
        var t = h_[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Tl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? f_[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sp,
    charCode: function (e) {
      return e.type === "keypress" ? Tl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Tl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  x_ = Tt(m_),
  v_ = Ce({}, eu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Rm = Tt(v_),
  y_ = Ce({}, va, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sp,
  }),
  b_ = Tt(y_),
  j_ = Ce({}, Fs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  w_ = Tt(j_),
  S_ = Ce({}, eu, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  C_ = Tt(S_),
  __ = [9, 13, 27, 32],
  op = ur && "CompositionEvent" in window,
  jo = null;
ur && "documentMode" in document && (jo = document.documentMode);
var E_ = ur && "TextEvent" in window && !jo,
  Gy = ur && (!op || (jo && 8 < jo && 11 >= jo)),
  Fm = " ",
  zm = !1;
function Yy(e, t) {
  switch (e) {
    case "keyup":
      return __.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function qy(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Xi = !1;
function k_(e, t) {
  switch (e) {
    case "compositionend":
      return qy(t);
    case "keypress":
      return t.which !== 32 ? null : ((zm = !0), Fm);
    case "textInput":
      return (e = t.data), e === Fm && zm ? null : e;
    default:
      return null;
  }
}
function P_(e, t) {
  if (Xi)
    return e === "compositionend" || (!op && Yy(e, t))
      ? ((e = Uy()), (Al = rp = Nr = null), (Xi = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Gy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var I_ = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function $m(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!I_[e.type] : t === "textarea";
}
function Ky(e, t, n, r) {
  Ey(r),
    (t = lc(t, "onChange")),
    0 < t.length &&
      ((n = new ip("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var wo = null,
  Bo = null;
function N_(e) {
  o1(e, 0);
}
function tu(e) {
  var t = es(e);
  if (yy(t)) return e;
}
function A_(e, t) {
  if (e === "change") return t;
}
var Qy = !1;
if (ur) {
  var ld;
  if (ur) {
    var cd = "oninput" in document;
    if (!cd) {
      var Bm = document.createElement("div");
      Bm.setAttribute("oninput", "return;"),
        (cd = typeof Bm.oninput == "function");
    }
    ld = cd;
  } else ld = !1;
  Qy = ld && (!document.documentMode || 9 < document.documentMode);
}
function Wm() {
  wo && (wo.detachEvent("onpropertychange", Xy), (Bo = wo = null));
}
function Xy(e) {
  if (e.propertyName === "value" && tu(Bo)) {
    var t = [];
    Ky(t, Bo, e, Jf(e)), Ny(N_, t);
  }
}
function T_(e, t, n) {
  e === "focusin"
    ? (Wm(), (wo = t), (Bo = n), wo.attachEvent("onpropertychange", Xy))
    : e === "focusout" && Wm();
}
function O_(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return tu(Bo);
}
function D_(e, t) {
  if (e === "click") return tu(t);
}
function M_(e, t) {
  if (e === "input" || e === "change") return tu(t);
}
function L_(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var bn = typeof Object.is == "function" ? Object.is : L_;
function Wo(e, t) {
  if (bn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!lh.call(t, i) || !bn(e[i], t[i])) return !1;
  }
  return !0;
}
function Hm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vm(e, t) {
  var n = Hm(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Hm(n);
  }
}
function Jy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Jy(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Zy() {
  for (var e = window, t = tc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = tc(e.document);
  }
  return t;
}
function ap(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function R_(e) {
  var t = Zy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Jy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ap(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Vm(n, s));
        var o = Vm(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var F_ = ur && "documentMode" in document && 11 >= document.documentMode,
  Ji = null,
  kh = null,
  So = null,
  Ph = !1;
function Um(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ph ||
    Ji == null ||
    Ji !== tc(r) ||
    ((r = Ji),
    "selectionStart" in r && ap(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (So && Wo(So, r)) ||
      ((So = r),
      (r = lc(kh, "onSelect")),
      0 < r.length &&
        ((t = new ip("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ji))));
}
function Ga(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Zi = {
    animationend: Ga("Animation", "AnimationEnd"),
    animationiteration: Ga("Animation", "AnimationIteration"),
    animationstart: Ga("Animation", "AnimationStart"),
    transitionend: Ga("Transition", "TransitionEnd"),
  },
  ud = {},
  e1 = {};
ur &&
  ((e1 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Zi.animationend.animation,
    delete Zi.animationiteration.animation,
    delete Zi.animationstart.animation),
  "TransitionEvent" in window || delete Zi.transitionend.transition);
function nu(e) {
  if (ud[e]) return ud[e];
  if (!Zi[e]) return e;
  var t = Zi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in e1) return (ud[e] = t[n]);
  return e;
}
var t1 = nu("animationend"),
  n1 = nu("animationiteration"),
  r1 = nu("animationstart"),
  i1 = nu("transitionend"),
  s1 = new Map(),
  Gm =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Zr(e, t) {
  s1.set(e, t), zi(t, [e]);
}
for (var dd = 0; dd < Gm.length; dd++) {
  var hd = Gm[dd],
    z_ = hd.toLowerCase(),
    $_ = hd[0].toUpperCase() + hd.slice(1);
  Zr(z_, "on" + $_);
}
Zr(t1, "onAnimationEnd");
Zr(n1, "onAnimationIteration");
Zr(r1, "onAnimationStart");
Zr("dblclick", "onDoubleClick");
Zr("focusin", "onFocus");
Zr("focusout", "onBlur");
Zr(i1, "onTransitionEnd");
js("onMouseEnter", ["mouseout", "mouseover"]);
js("onMouseLeave", ["mouseout", "mouseover"]);
js("onPointerEnter", ["pointerout", "pointerover"]);
js("onPointerLeave", ["pointerout", "pointerover"]);
zi(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
zi(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
zi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zi(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
zi(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
zi(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ho =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  B_ = new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));
function Ym(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), zC(r, t, void 0, e), (e.currentTarget = null);
}
function o1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            c = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), c !== s && i.isPropagationStopped())) break e;
          Ym(i, l, u), (s = c);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (c = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            c !== s && i.isPropagationStopped())
          )
            break e;
          Ym(i, l, u), (s = c);
        }
    }
  }
  if (rc) throw ((e = Sh), (rc = !1), (Sh = null), e);
}
function ge(e, t) {
  var n = t[Oh];
  n === void 0 && (n = t[Oh] = new Set());
  var r = e + "__bubble";
  n.has(r) || (a1(t, e, 2, !1), n.add(r));
}
function fd(e, t, n) {
  var r = 0;
  t && (r |= 4), a1(n, e, r, t);
}
var Ya = "_reactListening" + Math.random().toString(36).slice(2);
function Ho(e) {
  if (!e[Ya]) {
    (e[Ya] = !0),
      py.forEach(function (n) {
        n !== "selectionchange" && (B_.has(n) || fd(n, !1, e), fd(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ya] || ((t[Ya] = !0), fd("selectionchange", !1, t));
  }
}
function a1(e, t, n, r) {
  switch (Vy(t)) {
    case 1:
      var i = t_;
      break;
    case 4:
      i = n_;
      break;
    default:
      i = np;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !wh ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function pd(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var c = o.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = o.stateNode.containerInfo),
              c === i || (c.nodeType === 8 && c.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = mi(l)), o === null)) return;
          if (((c = o.tag), c === 5 || c === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Ny(function () {
    var u = s,
      d = Jf(n),
      h = [];
    e: {
      var f = s1.get(e);
      if (f !== void 0) {
        var m = ip,
          p = e;
        switch (e) {
          case "keypress":
            if (Tl(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = x_;
            break;
          case "focusin":
            (p = "focus"), (m = ad);
            break;
          case "focusout":
            (p = "blur"), (m = ad);
            break;
          case "beforeblur":
          case "afterblur":
            m = ad;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Mm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = s_;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = b_;
            break;
          case t1:
          case n1:
          case r1:
            m = l_;
            break;
          case i1:
            m = w_;
            break;
          case "scroll":
            m = r_;
            break;
          case "wheel":
            m = C_;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = u_;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Rm;
        }
        var g = (t & 4) !== 0,
          y = !g && e === "scroll",
          x = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var v = u, b; v !== null; ) {
          b = v;
          var S = b.stateNode;
          if (
            (b.tag === 5 &&
              S !== null &&
              ((b = S),
              x !== null && ((S = Ro(v, x)), S != null && g.push(Vo(v, S, b)))),
            y)
          )
            break;
          v = v.return;
        }
        0 < g.length &&
          ((f = new m(f, p, null, n, d)), h.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          f &&
            n !== bh &&
            (p = n.relatedTarget || n.fromElement) &&
            (mi(p) || p[dr]))
        )
          break e;
        if (
          (m || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          m
            ? ((p = n.relatedTarget || n.toElement),
              (m = u),
              (p = p ? mi(p) : null),
              p !== null &&
                ((y = $i(p)), p !== y || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((m = null), (p = u)),
          m !== p)
        ) {
          if (
            ((g = Mm),
            (S = "onMouseLeave"),
            (x = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Rm),
              (S = "onPointerLeave"),
              (x = "onPointerEnter"),
              (v = "pointer")),
            (y = m == null ? f : es(m)),
            (b = p == null ? f : es(p)),
            (f = new g(S, v + "leave", m, n, d)),
            (f.target = y),
            (f.relatedTarget = b),
            (S = null),
            mi(d) === u &&
              ((g = new g(x, v + "enter", p, n, d)),
              (g.target = b),
              (g.relatedTarget = y),
              (S = g)),
            (y = S),
            m && p)
          )
            t: {
              for (g = m, x = p, v = 0, b = g; b; b = Vi(b)) v++;
              for (b = 0, S = x; S; S = Vi(S)) b++;
              for (; 0 < v - b; ) (g = Vi(g)), v--;
              for (; 0 < b - v; ) (x = Vi(x)), b--;
              for (; v--; ) {
                if (g === x || (x !== null && g === x.alternate)) break t;
                (g = Vi(g)), (x = Vi(x));
              }
              g = null;
            }
          else g = null;
          m !== null && qm(h, f, m, g, !1),
            p !== null && y !== null && qm(h, y, p, g, !0);
        }
      }
      e: {
        if (
          ((f = u ? es(u) : window),
          (m = f.nodeName && f.nodeName.toLowerCase()),
          m === "select" || (m === "input" && f.type === "file"))
        )
          var C = A_;
        else if ($m(f))
          if (Qy) C = M_;
          else {
            C = O_;
            var k = T_;
          }
        else
          (m = f.nodeName) &&
            m.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = D_);
        if (C && (C = C(e, u))) {
          Ky(h, C, n, d);
          break e;
        }
        k && k(e, f, u),
          e === "focusout" &&
            (k = f._wrapperState) &&
            k.controlled &&
            f.type === "number" &&
            gh(f, "number", f.value);
      }
      switch (((k = u ? es(u) : window), e)) {
        case "focusin":
          ($m(k) || k.contentEditable === "true") &&
            ((Ji = k), (kh = u), (So = null));
          break;
        case "focusout":
          So = kh = Ji = null;
          break;
        case "mousedown":
          Ph = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ph = !1), Um(h, n, d);
          break;
        case "selectionchange":
          if (F_) break;
        case "keydown":
        case "keyup":
          Um(h, n, d);
      }
      var _;
      if (op)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        Xi
          ? Yy(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (Gy &&
          n.locale !== "ko" &&
          (Xi || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && Xi && (_ = Uy())
            : ((Nr = d),
              (rp = "value" in Nr ? Nr.value : Nr.textContent),
              (Xi = !0))),
        (k = lc(u, E)),
        0 < k.length &&
          ((E = new Lm(E, e, null, n, d)),
          h.push({ event: E, listeners: k }),
          _ ? (E.data = _) : ((_ = qy(n)), _ !== null && (E.data = _)))),
        (_ = E_ ? k_(e, n) : P_(e, n)) &&
          ((u = lc(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Lm("onBeforeInput", "beforeinput", null, n, d)),
            h.push({ event: d, listeners: u }),
            (d.data = _)));
    }
    o1(h, t);
  });
}
function Vo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function lc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Ro(e, n)),
      s != null && r.unshift(Vo(e, s, i)),
      (s = Ro(e, t)),
      s != null && r.push(Vo(e, s, i))),
      (e = e.return);
  }
  return r;
}
function Vi(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qm(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      c = l.alternate,
      u = l.stateNode;
    if (c !== null && c === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((c = Ro(n, s)), c != null && o.unshift(Vo(n, c, l)))
        : i || ((c = Ro(n, s)), c != null && o.push(Vo(n, c, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var W_ = /\r\n?/g,
  H_ = /\u0000|\uFFFD/g;
function Km(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      W_,
      `
`
    )
    .replace(H_, "");
}
function qa(e, t, n) {
  if (((t = Km(t)), Km(e) !== t && n)) throw Error(A(425));
}
function cc() {}
var Ih = null,
  Nh = null;
function Ah(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Th = typeof setTimeout == "function" ? setTimeout : void 0,
  V_ = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Qm = typeof Promise == "function" ? Promise : void 0,
  U_ =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Qm < "u"
      ? function (e) {
          return Qm.resolve(null).then(e).catch(G_);
        }
      : Th;
function G_(e) {
  setTimeout(function () {
    throw e;
  });
}
function gd(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), $o(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  $o(t);
}
function Hr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Xm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var zs = Math.random().toString(36).slice(2),
  Tn = "__reactFiber$" + zs,
  Uo = "__reactProps$" + zs,
  dr = "__reactContainer$" + zs,
  Oh = "__reactEvents$" + zs,
  Y_ = "__reactListeners$" + zs,
  q_ = "__reactHandles$" + zs;
function mi(e) {
  var t = e[Tn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[dr] || n[Tn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Xm(e); e !== null; ) {
          if ((n = e[Tn])) return n;
          e = Xm(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ya(e) {
  return (
    (e = e[Tn] || e[dr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function es(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function ru(e) {
  return e[Uo] || null;
}
var Dh = [],
  ts = -1;
function ei(e) {
  return { current: e };
}
function xe(e) {
  0 > ts || ((e.current = Dh[ts]), (Dh[ts] = null), ts--);
}
function pe(e, t) {
  ts++, (Dh[ts] = e.current), (e.current = t);
}
var Xr = {},
  Je = ei(Xr),
  mt = ei(!1),
  Ti = Xr;
function ws(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Xr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function xt(e) {
  return (e = e.childContextTypes), e != null;
}
function uc() {
  xe(mt), xe(Je);
}
function Jm(e, t, n) {
  if (Je.current !== Xr) throw Error(A(168));
  pe(Je, t), pe(mt, n);
}
function l1(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(A(108, TC(e) || "Unknown", i));
  return Ce({}, n, r);
}
function dc(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xr),
    (Ti = Je.current),
    pe(Je, e),
    pe(mt, mt.current),
    !0
  );
}
function Zm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n
    ? ((e = l1(e, t, Ti)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      xe(mt),
      xe(Je),
      pe(Je, e))
    : xe(mt),
    pe(mt, n);
}
var Zn = null,
  iu = !1,
  md = !1;
function c1(e) {
  Zn === null ? (Zn = [e]) : Zn.push(e);
}
function K_(e) {
  (iu = !0), c1(e);
}
function ti() {
  if (!md && Zn !== null) {
    md = !0;
    var e = 0,
      t = he;
    try {
      var n = Zn;
      for (he = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Zn = null), (iu = !1);
    } catch (i) {
      throw (Zn !== null && (Zn = Zn.slice(e + 1)), Dy(Zf, ti), i);
    } finally {
      (he = t), (md = !1);
    }
  }
  return null;
}
var ns = [],
  rs = 0,
  hc = null,
  fc = 0,
  Ht = [],
  Vt = 0,
  Oi = null,
  tr = 1,
  nr = "";
function hi(e, t) {
  (ns[rs++] = fc), (ns[rs++] = hc), (hc = e), (fc = t);
}
function u1(e, t, n) {
  (Ht[Vt++] = tr), (Ht[Vt++] = nr), (Ht[Vt++] = Oi), (Oi = e);
  var r = tr;
  e = nr;
  var i = 32 - xn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - xn(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (tr = (1 << (32 - xn(t) + i)) | (n << i) | r),
      (nr = s + e);
  } else (tr = (1 << s) | (n << i) | r), (nr = e);
}
function lp(e) {
  e.return !== null && (hi(e, 1), u1(e, 1, 0));
}
function cp(e) {
  for (; e === hc; )
    (hc = ns[--rs]), (ns[rs] = null), (fc = ns[--rs]), (ns[rs] = null);
  for (; e === Oi; )
    (Oi = Ht[--Vt]),
      (Ht[Vt] = null),
      (nr = Ht[--Vt]),
      (Ht[Vt] = null),
      (tr = Ht[--Vt]),
      (Ht[Vt] = null);
}
var It = null,
  _t = null,
  ve = !1,
  mn = null;
function d1(e, t) {
  var n = Ut(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ex(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (It = e), (_t = Hr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (It = e), (_t = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Oi !== null ? { id: tr, overflow: nr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (It = e),
            (_t = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Mh(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Lh(e) {
  if (ve) {
    var t = _t;
    if (t) {
      var n = t;
      if (!ex(e, t)) {
        if (Mh(e)) throw Error(A(418));
        t = Hr(n.nextSibling);
        var r = It;
        t && ex(e, t)
          ? d1(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (It = e));
      }
    } else {
      if (Mh(e)) throw Error(A(418));
      (e.flags = (e.flags & -4097) | 2), (ve = !1), (It = e);
    }
  }
}
function tx(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  It = e;
}
function Ka(e) {
  if (e !== It) return !1;
  if (!ve) return tx(e), (ve = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ah(e.type, e.memoizedProps))),
    t && (t = _t))
  ) {
    if (Mh(e)) throw (h1(), Error(A(418)));
    for (; t; ) d1(e, t), (t = Hr(t.nextSibling));
  }
  if ((tx(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              _t = Hr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      _t = null;
    }
  } else _t = It ? Hr(e.stateNode.nextSibling) : null;
  return !0;
}
function h1() {
  for (var e = _t; e; ) e = Hr(e.nextSibling);
}
function Ss() {
  (_t = It = null), (ve = !1);
}
function up(e) {
  mn === null ? (mn = [e]) : mn.push(e);
}
var Q_ = pr.ReactCurrentBatchConfig;
function Js(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function Qa(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      A(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function nx(e) {
  var t = e._init;
  return t(e._payload);
}
function f1(e) {
  function t(x, v) {
    if (e) {
      var b = x.deletions;
      b === null ? ((x.deletions = [v]), (x.flags |= 16)) : b.push(v);
    }
  }
  function n(x, v) {
    if (!e) return null;
    for (; v !== null; ) t(x, v), (v = v.sibling);
    return null;
  }
  function r(x, v) {
    for (x = new Map(); v !== null; )
      v.key !== null ? x.set(v.key, v) : x.set(v.index, v), (v = v.sibling);
    return x;
  }
  function i(x, v) {
    return (x = Yr(x, v)), (x.index = 0), (x.sibling = null), x;
  }
  function s(x, v, b) {
    return (
      (x.index = b),
      e
        ? ((b = x.alternate),
          b !== null
            ? ((b = b.index), b < v ? ((x.flags |= 2), v) : b)
            : ((x.flags |= 2), v))
        : ((x.flags |= 1048576), v)
    );
  }
  function o(x) {
    return e && x.alternate === null && (x.flags |= 2), x;
  }
  function l(x, v, b, S) {
    return v === null || v.tag !== 6
      ? ((v = Sd(b, x.mode, S)), (v.return = x), v)
      : ((v = i(v, b)), (v.return = x), v);
  }
  function c(x, v, b, S) {
    var C = b.type;
    return C === Qi
      ? d(x, v, b.props.children, S, b.key)
      : v !== null &&
        (v.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Er &&
            nx(C) === v.type))
      ? ((S = i(v, b.props)), (S.ref = Js(x, v, b)), (S.return = x), S)
      : ((S = zl(b.type, b.key, b.props, null, x.mode, S)),
        (S.ref = Js(x, v, b)),
        (S.return = x),
        S);
  }
  function u(x, v, b, S) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== b.containerInfo ||
      v.stateNode.implementation !== b.implementation
      ? ((v = Cd(b, x.mode, S)), (v.return = x), v)
      : ((v = i(v, b.children || [])), (v.return = x), v);
  }
  function d(x, v, b, S, C) {
    return v === null || v.tag !== 7
      ? ((v = Ci(b, x.mode, S, C)), (v.return = x), v)
      : ((v = i(v, b)), (v.return = x), v);
  }
  function h(x, v, b) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = Sd("" + v, x.mode, b)), (v.return = x), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case za:
          return (
            (b = zl(v.type, v.key, v.props, null, x.mode, b)),
            (b.ref = Js(x, null, v)),
            (b.return = x),
            b
          );
        case Ki:
          return (v = Cd(v, x.mode, b)), (v.return = x), v;
        case Er:
          var S = v._init;
          return h(x, S(v._payload), b);
      }
      if (co(v) || Ys(v))
        return (v = Ci(v, x.mode, b, null)), (v.return = x), v;
      Qa(x, v);
    }
    return null;
  }
  function f(x, v, b, S) {
    var C = v !== null ? v.key : null;
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return C !== null ? null : l(x, v, "" + b, S);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case za:
          return b.key === C ? c(x, v, b, S) : null;
        case Ki:
          return b.key === C ? u(x, v, b, S) : null;
        case Er:
          return (C = b._init), f(x, v, C(b._payload), S);
      }
      if (co(b) || Ys(b)) return C !== null ? null : d(x, v, b, S, null);
      Qa(x, b);
    }
    return null;
  }
  function m(x, v, b, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (x = x.get(b) || null), l(v, x, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case za:
          return (x = x.get(S.key === null ? b : S.key) || null), c(v, x, S, C);
        case Ki:
          return (x = x.get(S.key === null ? b : S.key) || null), u(v, x, S, C);
        case Er:
          var k = S._init;
          return m(x, v, b, k(S._payload), C);
      }
      if (co(S) || Ys(S)) return (x = x.get(b) || null), d(v, x, S, C, null);
      Qa(v, S);
    }
    return null;
  }
  function p(x, v, b, S) {
    for (
      var C = null, k = null, _ = v, E = (v = 0), I = null;
      _ !== null && E < b.length;
      E++
    ) {
      _.index > E ? ((I = _), (_ = null)) : (I = _.sibling);
      var N = f(x, _, b[E], S);
      if (N === null) {
        _ === null && (_ = I);
        break;
      }
      e && _ && N.alternate === null && t(x, _),
        (v = s(N, v, E)),
        k === null ? (C = N) : (k.sibling = N),
        (k = N),
        (_ = I);
    }
    if (E === b.length) return n(x, _), ve && hi(x, E), C;
    if (_ === null) {
      for (; E < b.length; E++)
        (_ = h(x, b[E], S)),
          _ !== null &&
            ((v = s(_, v, E)), k === null ? (C = _) : (k.sibling = _), (k = _));
      return ve && hi(x, E), C;
    }
    for (_ = r(x, _); E < b.length; E++)
      (I = m(_, x, E, b[E], S)),
        I !== null &&
          (e && I.alternate !== null && _.delete(I.key === null ? E : I.key),
          (v = s(I, v, E)),
          k === null ? (C = I) : (k.sibling = I),
          (k = I));
    return (
      e &&
        _.forEach(function (R) {
          return t(x, R);
        }),
      ve && hi(x, E),
      C
    );
  }
  function g(x, v, b, S) {
    var C = Ys(b);
    if (typeof C != "function") throw Error(A(150));
    if (((b = C.call(b)), b == null)) throw Error(A(151));
    for (
      var k = (C = null), _ = v, E = (v = 0), I = null, N = b.next();
      _ !== null && !N.done;
      E++, N = b.next()
    ) {
      _.index > E ? ((I = _), (_ = null)) : (I = _.sibling);
      var R = f(x, _, N.value, S);
      if (R === null) {
        _ === null && (_ = I);
        break;
      }
      e && _ && R.alternate === null && t(x, _),
        (v = s(R, v, E)),
        k === null ? (C = R) : (k.sibling = R),
        (k = R),
        (_ = I);
    }
    if (N.done) return n(x, _), ve && hi(x, E), C;
    if (_ === null) {
      for (; !N.done; E++, N = b.next())
        (N = h(x, N.value, S)),
          N !== null &&
            ((v = s(N, v, E)), k === null ? (C = N) : (k.sibling = N), (k = N));
      return ve && hi(x, E), C;
    }
    for (_ = r(x, _); !N.done; E++, N = b.next())
      (N = m(_, x, E, N.value, S)),
        N !== null &&
          (e && N.alternate !== null && _.delete(N.key === null ? E : N.key),
          (v = s(N, v, E)),
          k === null ? (C = N) : (k.sibling = N),
          (k = N));
    return (
      e &&
        _.forEach(function (z) {
          return t(x, z);
        }),
      ve && hi(x, E),
      C
    );
  }
  function y(x, v, b, S) {
    if (
      (typeof b == "object" &&
        b !== null &&
        b.type === Qi &&
        b.key === null &&
        (b = b.props.children),
      typeof b == "object" && b !== null)
    ) {
      switch (b.$$typeof) {
        case za:
          e: {
            for (var C = b.key, k = v; k !== null; ) {
              if (k.key === C) {
                if (((C = b.type), C === Qi)) {
                  if (k.tag === 7) {
                    n(x, k.sibling),
                      (v = i(k, b.props.children)),
                      (v.return = x),
                      (x = v);
                    break e;
                  }
                } else if (
                  k.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Er &&
                    nx(C) === k.type)
                ) {
                  n(x, k.sibling),
                    (v = i(k, b.props)),
                    (v.ref = Js(x, k, b)),
                    (v.return = x),
                    (x = v);
                  break e;
                }
                n(x, k);
                break;
              } else t(x, k);
              k = k.sibling;
            }
            b.type === Qi
              ? ((v = Ci(b.props.children, x.mode, S, b.key)),
                (v.return = x),
                (x = v))
              : ((S = zl(b.type, b.key, b.props, null, x.mode, S)),
                (S.ref = Js(x, v, b)),
                (S.return = x),
                (x = S));
          }
          return o(x);
        case Ki:
          e: {
            for (k = b.key; v !== null; ) {
              if (v.key === k)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === b.containerInfo &&
                  v.stateNode.implementation === b.implementation
                ) {
                  n(x, v.sibling),
                    (v = i(v, b.children || [])),
                    (v.return = x),
                    (x = v);
                  break e;
                } else {
                  n(x, v);
                  break;
                }
              else t(x, v);
              v = v.sibling;
            }
            (v = Cd(b, x.mode, S)), (v.return = x), (x = v);
          }
          return o(x);
        case Er:
          return (k = b._init), y(x, v, k(b._payload), S);
      }
      if (co(b)) return p(x, v, b, S);
      if (Ys(b)) return g(x, v, b, S);
      Qa(x, b);
    }
    return (typeof b == "string" && b !== "") || typeof b == "number"
      ? ((b = "" + b),
        v !== null && v.tag === 6
          ? (n(x, v.sibling), (v = i(v, b)), (v.return = x), (x = v))
          : (n(x, v), (v = Sd(b, x.mode, S)), (v.return = x), (x = v)),
        o(x))
      : n(x, v);
  }
  return y;
}
var Cs = f1(!0),
  p1 = f1(!1),
  pc = ei(null),
  gc = null,
  is = null,
  dp = null;
function hp() {
  dp = is = gc = null;
}
function fp(e) {
  var t = pc.current;
  xe(pc), (e._currentValue = t);
}
function Rh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function gs(e, t) {
  (gc = e),
    (dp = is = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pt = !0), (e.firstContext = null));
}
function Jt(e) {
  var t = e._currentValue;
  if (dp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), is === null)) {
      if (gc === null) throw Error(A(308));
      (is = e), (gc.dependencies = { lanes: 0, firstContext: e });
    } else is = is.next = e;
  return t;
}
var xi = null;
function pp(e) {
  xi === null ? (xi = [e]) : xi.push(e);
}
function g1(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), pp(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    hr(e, r)
  );
}
function hr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var kr = !1;
function gp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function m1(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function sr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Vr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ie & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      hr(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), pp(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    hr(e, n)
  );
}
function Ol(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ep(e, n);
  }
}
function rx(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function mc(e, t, n, r) {
  var i = e.updateQueue;
  kr = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var c = l,
      u = c.next;
    (c.next = null), o === null ? (s = u) : (o.next = u), (o = c);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== o &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = c)));
  }
  if (s !== null) {
    var h = i.baseState;
    (o = 0), (d = u = c = null), (l = s);
    do {
      var f = l.lane,
        m = l.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var p = e,
            g = l;
          switch (((f = t), (m = n), g.tag)) {
            case 1:
              if (((p = g.payload), typeof p == "function")) {
                h = p.call(m, h, f);
                break e;
              }
              h = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = g.payload),
                (f = typeof p == "function" ? p.call(m, h, f) : p),
                f == null)
              )
                break e;
              h = Ce({}, h, f);
              break e;
            case 2:
              kr = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [l]) : f.push(l));
      } else
        (m = {
          eventTime: m,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = m), (c = h)) : (d = d.next = m),
          (o |= f);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (c = h),
      (i.baseState = c),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Mi |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function ix(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(A(191, i));
        i.call(r);
      }
    }
}
var ba = {},
  Fn = ei(ba),
  Go = ei(ba),
  Yo = ei(ba);
function vi(e) {
  if (e === ba) throw Error(A(174));
  return e;
}
function mp(e, t) {
  switch ((pe(Yo, t), pe(Go, e), pe(Fn, ba), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xh(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = xh(t, e));
  }
  xe(Fn), pe(Fn, t);
}
function _s() {
  xe(Fn), xe(Go), xe(Yo);
}
function x1(e) {
  vi(Yo.current);
  var t = vi(Fn.current),
    n = xh(t, e.type);
  t !== n && (pe(Go, e), pe(Fn, n));
}
function xp(e) {
  Go.current === e && (xe(Fn), xe(Go));
}
var je = ei(0);
function xc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var xd = [];
function vp() {
  for (var e = 0; e < xd.length; e++)
    xd[e]._workInProgressVersionPrimary = null;
  xd.length = 0;
}
var Dl = pr.ReactCurrentDispatcher,
  vd = pr.ReactCurrentBatchConfig,
  Di = 0,
  Se = null,
  Re = null,
  $e = null,
  vc = !1,
  Co = !1,
  qo = 0,
  X_ = 0;
function qe() {
  throw Error(A(321));
}
function yp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!bn(e[n], t[n])) return !1;
  return !0;
}
function bp(e, t, n, r, i, s) {
  if (
    ((Di = s),
    (Se = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Dl.current = e === null || e.memoizedState === null ? tE : nE),
    (e = n(r, i)),
    Co)
  ) {
    s = 0;
    do {
      if (((Co = !1), (qo = 0), 25 <= s)) throw Error(A(301));
      (s += 1),
        ($e = Re = null),
        (t.updateQueue = null),
        (Dl.current = rE),
        (e = n(r, i));
    } while (Co);
  }
  if (
    ((Dl.current = yc),
    (t = Re !== null && Re.next !== null),
    (Di = 0),
    ($e = Re = Se = null),
    (vc = !1),
    t)
  )
    throw Error(A(300));
  return e;
}
function jp() {
  var e = qo !== 0;
  return (qo = 0), e;
}
function Pn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return $e === null ? (Se.memoizedState = $e = e) : ($e = $e.next = e), $e;
}
function Zt() {
  if (Re === null) {
    var e = Se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = $e === null ? Se.memoizedState : $e.next;
  if (t !== null) ($e = t), (Re = e);
  else {
    if (e === null) throw Error(A(310));
    (Re = e),
      (e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null,
      }),
      $e === null ? (Se.memoizedState = $e = e) : ($e = $e.next = e);
  }
  return $e;
}
function Ko(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yd(e) {
  var t = Zt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = Re,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      c = null,
      u = s;
    do {
      var d = u.lane;
      if ((Di & d) === d)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var h = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        c === null ? ((l = c = h), (o = r)) : (c = c.next = h),
          (Se.lanes |= d),
          (Mi |= d);
      }
      u = u.next;
    } while (u !== null && u !== s);
    c === null ? (o = r) : (c.next = l),
      bn(r, t.memoizedState) || (pt = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (Se.lanes |= s), (Mi |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bd(e) {
  var t = Zt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    bn(s, t.memoizedState) || (pt = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function v1() {}
function y1(e, t) {
  var n = Se,
    r = Zt(),
    i = t(),
    s = !bn(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (pt = !0)),
    (r = r.queue),
    wp(w1.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || ($e !== null && $e.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qo(9, j1.bind(null, n, r, i, t), void 0, null),
      He === null)
    )
      throw Error(A(349));
    Di & 30 || b1(n, t, i);
  }
  return i;
}
function b1(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Se.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function j1(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), S1(t) && C1(e);
}
function w1(e, t, n) {
  return n(function () {
    S1(t) && C1(e);
  });
}
function S1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !bn(e, n);
  } catch {
    return !0;
  }
}
function C1(e) {
  var t = hr(e, 1);
  t !== null && vn(t, e, 1, -1);
}
function sx(e) {
  var t = Pn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ko,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = eE.bind(null, Se, e)),
    [t.memoizedState, e]
  );
}
function Qo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Se.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function _1() {
  return Zt().memoizedState;
}
function Ml(e, t, n, r) {
  var i = Pn();
  (Se.flags |= e),
    (i.memoizedState = Qo(1 | t, n, void 0, r === void 0 ? null : r));
}
function su(e, t, n, r) {
  var i = Zt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Re !== null) {
    var o = Re.memoizedState;
    if (((s = o.destroy), r !== null && yp(r, o.deps))) {
      i.memoizedState = Qo(t, n, s, r);
      return;
    }
  }
  (Se.flags |= e), (i.memoizedState = Qo(1 | t, n, s, r));
}
function ox(e, t) {
  return Ml(8390656, 8, e, t);
}
function wp(e, t) {
  return su(2048, 8, e, t);
}
function E1(e, t) {
  return su(4, 2, e, t);
}
function k1(e, t) {
  return su(4, 4, e, t);
}
function P1(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function I1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), su(4, 4, P1.bind(null, t, e), n)
  );
}
function Sp() {}
function N1(e, t) {
  var n = Zt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yp(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function A1(e, t) {
  var n = Zt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yp(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function T1(e, t, n) {
  return Di & 21
    ? (bn(n, t) || ((n = Ry()), (Se.lanes |= n), (Mi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pt = !0)), (e.memoizedState = n));
}
function J_(e, t) {
  var n = he;
  (he = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = vd.transition;
  vd.transition = {};
  try {
    e(!1), t();
  } finally {
    (he = n), (vd.transition = r);
  }
}
function O1() {
  return Zt().memoizedState;
}
function Z_(e, t, n) {
  var r = Gr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    D1(e))
  )
    M1(t, n);
  else if (((n = g1(e, t, n, r)), n !== null)) {
    var i = st();
    vn(n, e, r, i), L1(n, t, r);
  }
}
function eE(e, t, n) {
  var r = Gr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (D1(e)) M1(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), bn(l, o))) {
          var c = t.interleaved;
          c === null
            ? ((i.next = i), pp(t))
            : ((i.next = c.next), (c.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = g1(e, t, i, r)),
      n !== null && ((i = st()), vn(n, e, r, i), L1(n, t, r));
  }
}
function D1(e) {
  var t = e.alternate;
  return e === Se || (t !== null && t === Se);
}
function M1(e, t) {
  Co = vc = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function L1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ep(e, n);
  }
}
var yc = {
    readContext: Jt,
    useCallback: qe,
    useContext: qe,
    useEffect: qe,
    useImperativeHandle: qe,
    useInsertionEffect: qe,
    useLayoutEffect: qe,
    useMemo: qe,
    useReducer: qe,
    useRef: qe,
    useState: qe,
    useDebugValue: qe,
    useDeferredValue: qe,
    useTransition: qe,
    useMutableSource: qe,
    useSyncExternalStore: qe,
    useId: qe,
    unstable_isNewReconciler: !1,
  },
  tE = {
    readContext: Jt,
    useCallback: function (e, t) {
      return (Pn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Jt,
    useEffect: ox,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ml(4194308, 4, P1.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ml(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ml(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Pn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Pn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Z_.bind(null, Se, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Pn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: sx,
    useDebugValue: Sp,
    useDeferredValue: function (e) {
      return (Pn().memoizedState = e);
    },
    useTransition: function () {
      var e = sx(!1),
        t = e[0];
      return (e = J_.bind(null, e[1])), (Pn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Se,
        i = Pn();
      if (ve) {
        if (n === void 0) throw Error(A(407));
        n = n();
      } else {
        if (((n = t()), He === null)) throw Error(A(349));
        Di & 30 || b1(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        ox(w1.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Qo(9, j1.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Pn(),
        t = He.identifierPrefix;
      if (ve) {
        var n = nr,
          r = tr;
        (n = (r & ~(1 << (32 - xn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = qo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = X_++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  nE = {
    readContext: Jt,
    useCallback: N1,
    useContext: Jt,
    useEffect: wp,
    useImperativeHandle: I1,
    useInsertionEffect: E1,
    useLayoutEffect: k1,
    useMemo: A1,
    useReducer: yd,
    useRef: _1,
    useState: function () {
      return yd(Ko);
    },
    useDebugValue: Sp,
    useDeferredValue: function (e) {
      var t = Zt();
      return T1(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = yd(Ko)[0],
        t = Zt().memoizedState;
      return [e, t];
    },
    useMutableSource: v1,
    useSyncExternalStore: y1,
    useId: O1,
    unstable_isNewReconciler: !1,
  },
  rE = {
    readContext: Jt,
    useCallback: N1,
    useContext: Jt,
    useEffect: wp,
    useImperativeHandle: I1,
    useInsertionEffect: E1,
    useLayoutEffect: k1,
    useMemo: A1,
    useReducer: bd,
    useRef: _1,
    useState: function () {
      return bd(Ko);
    },
    useDebugValue: Sp,
    useDeferredValue: function (e) {
      var t = Zt();
      return Re === null ? (t.memoizedState = e) : T1(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = bd(Ko)[0],
        t = Zt().memoizedState;
      return [e, t];
    },
    useMutableSource: v1,
    useSyncExternalStore: y1,
    useId: O1,
    unstable_isNewReconciler: !1,
  };
function fn(e, t) {
  if (e && e.defaultProps) {
    (t = Ce({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Fh(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ou = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $i(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = st(),
      i = Gr(e),
      s = sr(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Vr(e, s, i)),
      t !== null && (vn(t, e, i, r), Ol(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = st(),
      i = Gr(e),
      s = sr(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Vr(e, s, i)),
      t !== null && (vn(t, e, i, r), Ol(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = st(),
      r = Gr(e),
      i = sr(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Vr(e, i, r)),
      t !== null && (vn(t, e, r, n), Ol(t, e, r));
  },
};
function ax(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Wo(n, r) || !Wo(i, s)
      : !0
  );
}
function R1(e, t, n) {
  var r = !1,
    i = Xr,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Jt(s))
      : ((i = xt(t) ? Ti : Je.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? ws(e, i) : Xr)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ou),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function lx(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ou.enqueueReplaceState(t, t.state, null);
}
function zh(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), gp(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Jt(s))
    : ((s = xt(t) ? Ti : Je.current), (i.context = ws(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Fh(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ou.enqueueReplaceState(i, i.state, null),
      mc(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Es(e, t) {
  try {
    var n = "",
      r = t;
    do (n += AC(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function jd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $h(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var iE = typeof WeakMap == "function" ? WeakMap : Map;
function F1(e, t, n) {
  (n = sr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      jc || ((jc = !0), (Qh = r)), $h(e, t);
    }),
    n
  );
}
function z1(e, t, n) {
  (n = sr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        $h(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        $h(e, t),
          typeof r != "function" &&
            (Ur === null ? (Ur = new Set([this])) : Ur.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function cx(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new iE();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = vE.bind(null, e, t, n)), t.then(e, e));
}
function ux(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function dx(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = sr(-1, 1)), (t.tag = 2), Vr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var sE = pr.ReactCurrentOwner,
  pt = !1;
function et(e, t, n, r) {
  t.child = e === null ? p1(t, null, n, r) : Cs(t, e.child, n, r);
}
function hx(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    gs(t, i),
    (r = bp(e, t, n, r, s, i)),
    (n = jp()),
    e !== null && !pt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        fr(e, t, i))
      : (ve && n && lp(t), (t.flags |= 1), et(e, t, r, i), t.child)
  );
}
function fx(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Ap(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), $1(e, t, s, r, i))
      : ((e = zl(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Wo), n(o, r) && e.ref === t.ref)
    )
      return fr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Yr(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function $1(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Wo(s, r) && e.ref === t.ref)
      if (((pt = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (pt = !0);
      else return (t.lanes = e.lanes), fr(e, t, i);
  }
  return Bh(e, t, n, r, i);
}
function B1(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        pe(os, Ct),
        (Ct |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          pe(os, Ct),
          (Ct |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        pe(os, Ct),
        (Ct |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      pe(os, Ct),
      (Ct |= r);
  return et(e, t, i, n), t.child;
}
function W1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Bh(e, t, n, r, i) {
  var s = xt(n) ? Ti : Je.current;
  return (
    (s = ws(t, s)),
    gs(t, i),
    (n = bp(e, t, n, r, s, i)),
    (r = jp()),
    e !== null && !pt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        fr(e, t, i))
      : (ve && r && lp(t), (t.flags |= 1), et(e, t, n, i), t.child)
  );
}
function px(e, t, n, r, i) {
  if (xt(n)) {
    var s = !0;
    dc(t);
  } else s = !1;
  if ((gs(t, i), t.stateNode === null))
    Ll(e, t), R1(t, n, r), zh(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var c = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Jt(u))
      : ((u = xt(n) ? Ti : Je.current), (u = ws(t, u)));
    var d = n.getDerivedStateFromProps,
      h =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || c !== u) && lx(t, o, r, u)),
      (kr = !1);
    var f = t.memoizedState;
    (o.state = f),
      mc(t, r, o, i),
      (c = t.memoizedState),
      l !== r || f !== c || mt.current || kr
        ? (typeof d == "function" && (Fh(t, n, d, r), (c = t.memoizedState)),
          (l = kr || ax(t, n, l, r, f, c, u))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (o.props = r),
          (o.state = c),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      m1(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : fn(t.type, l)),
      (o.props = u),
      (h = t.pendingProps),
      (f = o.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Jt(c))
        : ((c = xt(n) ? Ti : Je.current), (c = ws(t, c)));
    var m = n.getDerivedStateFromProps;
    (d =
      typeof m == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== h || f !== c) && lx(t, o, r, c)),
      (kr = !1),
      (f = t.memoizedState),
      (o.state = f),
      mc(t, r, o, i);
    var p = t.memoizedState;
    l !== h || f !== p || mt.current || kr
      ? (typeof m == "function" && (Fh(t, n, m, r), (p = t.memoizedState)),
        (u = kr || ax(t, n, u, r, f, p, c) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, p, c),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, p, c)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (o.props = r),
        (o.state = p),
        (o.context = c),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Wh(e, t, n, r, s, i);
}
function Wh(e, t, n, r, i, s) {
  W1(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Zm(t, n, !1), fr(e, t, s);
  (r = t.stateNode), (sE.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Cs(t, e.child, null, s)), (t.child = Cs(t, null, l, s)))
      : et(e, t, l, s),
    (t.memoizedState = r.state),
    i && Zm(t, n, !0),
    t.child
  );
}
function H1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Jm(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Jm(e, t.context, !1),
    mp(e, t.containerInfo);
}
function gx(e, t, n, r, i) {
  return Ss(), up(i), (t.flags |= 256), et(e, t, n, r), t.child;
}
var Hh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function V1(e, t, n) {
  var r = t.pendingProps,
    i = je.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    pe(je, i & 1),
    e === null)
  )
    return (
      Lh(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = cu(o, r, 0, null)),
              (e = Ci(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Vh(n)),
              (t.memoizedState = Hh),
              e)
            : Cp(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return oE(e, t, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var c = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = Yr(i, c)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = Yr(l, s)) : ((s = Ci(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Vh(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Hh),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Yr(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Cp(e, t) {
  return (
    (t = cu({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Xa(e, t, n, r) {
  return (
    r !== null && up(r),
    Cs(t, e.child, null, n),
    (e = Cp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function oE(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = jd(Error(A(422)))), Xa(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = cu({ mode: "visible", children: r.children }, i, 0, null)),
        (s = Ci(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Cs(t, e.child, null, o),
        (t.child.memoizedState = Vh(o)),
        (t.memoizedState = Hh),
        s);
  if (!(t.mode & 1)) return Xa(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(A(419))), (r = jd(s, r, void 0)), Xa(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), pt || l)) {
    if (((r = He), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), hr(e, i), vn(r, e, i, -1));
    }
    return Np(), (r = jd(Error(A(421)))), Xa(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = yE.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (_t = Hr(i.nextSibling)),
      (It = t),
      (ve = !0),
      (mn = null),
      e !== null &&
        ((Ht[Vt++] = tr),
        (Ht[Vt++] = nr),
        (Ht[Vt++] = Oi),
        (tr = e.id),
        (nr = e.overflow),
        (Oi = t)),
      (t = Cp(t, r.children)),
      (t.flags |= 4096),
      t);
}
function mx(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Rh(e.return, t, n);
}
function wd(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function U1(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((et(e, t, r.children, n), (r = je.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && mx(e, n, t);
        else if (e.tag === 19) mx(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((pe(je, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && xc(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          wd(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && xc(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        wd(t, !0, n, null, s);
        break;
      case "together":
        wd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ll(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function fr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Mi |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Yr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Yr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function aE(e, t, n) {
  switch (t.tag) {
    case 3:
      H1(t), Ss();
      break;
    case 5:
      x1(t);
      break;
    case 1:
      xt(t.type) && dc(t);
      break;
    case 4:
      mp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      pe(pc, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (pe(je, je.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? V1(e, t, n)
          : (pe(je, je.current & 1),
            (e = fr(e, t, n)),
            e !== null ? e.sibling : null);
      pe(je, je.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return U1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        pe(je, je.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), B1(e, t, n);
  }
  return fr(e, t, n);
}
var G1, Uh, Y1, q1;
G1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Uh = function () {};
Y1 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), vi(Fn.current);
    var s = null;
    switch (n) {
      case "input":
        (i = fh(e, i)), (r = fh(e, r)), (s = []);
        break;
      case "select":
        (i = Ce({}, i, { value: void 0 })),
          (r = Ce({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = mh(e, i)), (r = mh(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = cc);
    }
    vh(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Mo.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && c !== l && (c != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (c && c.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in c)
              c.hasOwnProperty(o) &&
                l[o] !== c[o] &&
                (n || (n = {}), (n[o] = c[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = c);
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (l = l ? l.__html : void 0),
              c != null && l !== c && (s = s || []).push(u, c))
            : u === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (s = s || []).push(u, "" + c)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Mo.hasOwnProperty(u)
                ? (c != null && u === "onScroll" && ge("scroll", e),
                  s || l === c || (s = []))
                : (s = s || []).push(u, c));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
q1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Zs(e, t) {
  if (!ve)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function lE(e, t, n) {
  var r = t.pendingProps;
  switch ((cp(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ke(t), null;
    case 1:
      return xt(t.type) && uc(), Ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        _s(),
        xe(mt),
        xe(Je),
        vp(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ka(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), mn !== null && (Zh(mn), (mn = null)))),
        Uh(e, t),
        Ke(t),
        null
      );
    case 5:
      xp(t);
      var i = vi(Yo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Y1(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return Ke(t), null;
        }
        if (((e = vi(Fn.current)), Ka(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Tn] = t), (r[Uo] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ge("cancel", r), ge("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ge("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ho.length; i++) ge(ho[i], r);
              break;
            case "source":
              ge("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ge("error", r), ge("load", r);
              break;
            case "details":
              ge("toggle", r);
              break;
            case "input":
              _m(r, s), ge("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ge("invalid", r);
              break;
            case "textarea":
              km(r, s), ge("invalid", r);
          }
          vh(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      qa(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      qa(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Mo.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  ge("scroll", r);
            }
          switch (n) {
            case "input":
              $a(r), Em(r, s, !0);
              break;
            case "textarea":
              $a(r), Pm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = cc);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = wy(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Tn] = t),
            (e[Uo] = r),
            G1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = yh(n, r)), n)) {
              case "dialog":
                ge("cancel", e), ge("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ho.length; i++) ge(ho[i], e);
                i = r;
                break;
              case "source":
                ge("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ge("error", e), ge("load", e), (i = r);
                break;
              case "details":
                ge("toggle", e), (i = r);
                break;
              case "input":
                _m(e, r), (i = fh(e, r)), ge("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ce({}, r, { value: void 0 })),
                  ge("invalid", e);
                break;
              case "textarea":
                km(e, r), (i = mh(e, r)), ge("invalid", e);
                break;
              default:
                i = r;
            }
            vh(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var c = l[s];
                s === "style"
                  ? _y(e, c)
                  : s === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && Sy(e, c))
                  : s === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && Lo(e, c)
                    : typeof c == "number" && Lo(e, "" + c)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Mo.hasOwnProperty(s)
                      ? c != null && s === "onScroll" && ge("scroll", e)
                      : c != null && qf(e, s, c, o));
              }
            switch (n) {
              case "input":
                $a(e), Em(e, r, !1);
                break;
              case "textarea":
                $a(e), Pm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Qr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? ds(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      ds(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = cc);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ke(t), null;
    case 6:
      if (e && t.stateNode != null) q1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (((n = vi(Yo.current)), vi(Fn.current), Ka(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Tn] = t),
            (s = r.nodeValue !== n) && ((e = It), e !== null))
          )
            switch (e.tag) {
              case 3:
                qa(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  qa(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Tn] = t),
            (t.stateNode = r);
      }
      return Ke(t), null;
    case 13:
      if (
        (xe(je),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ve && _t !== null && t.mode & 1 && !(t.flags & 128))
          h1(), Ss(), (t.flags |= 98560), (s = !1);
        else if (((s = Ka(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(A(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(A(317));
            s[Tn] = t;
          } else
            Ss(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ke(t), (s = !1);
        } else mn !== null && (Zh(mn), (mn = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || je.current & 1 ? Fe === 0 && (Fe = 3) : Np())),
          t.updateQueue !== null && (t.flags |= 4),
          Ke(t),
          null);
    case 4:
      return (
        _s(), Uh(e, t), e === null && Ho(t.stateNode.containerInfo), Ke(t), null
      );
    case 10:
      return fp(t.type._context), Ke(t), null;
    case 17:
      return xt(t.type) && uc(), Ke(t), null;
    case 19:
      if ((xe(je), (s = t.memoizedState), s === null)) return Ke(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Zs(s, !1);
        else {
          if (Fe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = xc(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Zs(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return pe(je, (je.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Ie() > ks &&
            ((t.flags |= 128), (r = !0), Zs(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xc(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Zs(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !ve)
            )
              return Ke(t), null;
          } else
            2 * Ie() - s.renderingStartTime > ks &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Zs(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Ie()),
          (t.sibling = null),
          (n = je.current),
          pe(je, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ke(t), null);
    case 22:
    case 23:
      return (
        Ip(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ct & 1073741824 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function cE(e, t) {
  switch ((cp(t), t.tag)) {
    case 1:
      return (
        xt(t.type) && uc(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        _s(),
        xe(mt),
        xe(Je),
        vp(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return xp(t), null;
    case 13:
      if (
        (xe(je), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(A(340));
        Ss();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return xe(je), null;
    case 4:
      return _s(), null;
    case 10:
      return fp(t.type._context), null;
    case 22:
    case 23:
      return Ip(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ja = !1,
  Xe = !1,
  uE = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function ss(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ee(e, t, r);
      }
    else n.current = null;
}
function Gh(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var xx = !1;
function dE(e, t) {
  if (((Ih = oc), (e = Zy()), ap(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            c = -1,
            u = 0,
            d = 0,
            h = e,
            f = null;
          t: for (;;) {
            for (
              var m;
              h !== n || (i !== 0 && h.nodeType !== 3) || (l = o + i),
                h !== s || (r !== 0 && h.nodeType !== 3) || (c = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (m = h.firstChild) !== null;

            )
              (f = h), (h = m);
            for (;;) {
              if (h === e) break t;
              if (
                (f === n && ++u === i && (l = o),
                f === s && ++d === r && (c = o),
                (m = h.nextSibling) !== null)
              )
                break;
              (h = f), (f = h.parentNode);
            }
            h = m;
          }
          n = l === -1 || c === -1 ? null : { start: l, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Nh = { focusedElem: e, selectionRange: n }, oc = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var p = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var g = p.memoizedProps,
                    y = p.memoizedState,
                    x = t.stateNode,
                    v = x.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : fn(t.type, g),
                      y
                    );
                  x.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var b = t.stateNode.containerInfo;
                b.nodeType === 1
                  ? (b.textContent = "")
                  : b.nodeType === 9 &&
                    b.documentElement &&
                    b.removeChild(b.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (S) {
          Ee(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (p = xx), (xx = !1), p;
}
function _o(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Gh(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function au(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Yh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function K1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), K1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Tn], delete t[Uo], delete t[Oh], delete t[Y_], delete t[q_])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Q1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vx(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Q1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function qh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = cc));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qh(e, t, n), e = e.sibling; e !== null; ) qh(e, t, n), (e = e.sibling);
}
function Kh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Kh(e, t, n), e = e.sibling; e !== null; ) Kh(e, t, n), (e = e.sibling);
}
var Ve = null,
  pn = !1;
function yr(e, t, n) {
  for (n = n.child; n !== null; ) X1(e, t, n), (n = n.sibling);
}
function X1(e, t, n) {
  if (Rn && typeof Rn.onCommitFiberUnmount == "function")
    try {
      Rn.onCommitFiberUnmount(Zc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Xe || ss(n, t);
    case 6:
      var r = Ve,
        i = pn;
      (Ve = null),
        yr(e, t, n),
        (Ve = r),
        (pn = i),
        Ve !== null &&
          (pn
            ? ((e = Ve),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ve.removeChild(n.stateNode));
      break;
    case 18:
      Ve !== null &&
        (pn
          ? ((e = Ve),
            (n = n.stateNode),
            e.nodeType === 8
              ? gd(e.parentNode, n)
              : e.nodeType === 1 && gd(e, n),
            $o(e))
          : gd(Ve, n.stateNode));
      break;
    case 4:
      (r = Ve),
        (i = pn),
        (Ve = n.stateNode.containerInfo),
        (pn = !0),
        yr(e, t, n),
        (Ve = r),
        (pn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Xe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Gh(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      yr(e, t, n);
      break;
    case 1:
      if (
        !Xe &&
        (ss(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Ee(n, t, l);
        }
      yr(e, t, n);
      break;
    case 21:
      yr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Xe = (r = Xe) || n.memoizedState !== null), yr(e, t, n), (Xe = r))
        : yr(e, t, n);
      break;
    default:
      yr(e, t, n);
  }
}
function yx(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new uE()),
      t.forEach(function (r) {
        var i = bE.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function an(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Ve = l.stateNode), (pn = !1);
              break e;
            case 3:
              (Ve = l.stateNode.containerInfo), (pn = !0);
              break e;
            case 4:
              (Ve = l.stateNode.containerInfo), (pn = !0);
              break e;
          }
          l = l.return;
        }
        if (Ve === null) throw Error(A(160));
        X1(s, o, i), (Ve = null), (pn = !1);
        var c = i.alternate;
        c !== null && (c.return = null), (i.return = null);
      } catch (u) {
        Ee(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) J1(t, e), (t = t.sibling);
}
function J1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((an(t, e), Cn(e), r & 4)) {
        try {
          _o(3, e, e.return), au(3, e);
        } catch (g) {
          Ee(e, e.return, g);
        }
        try {
          _o(5, e, e.return);
        } catch (g) {
          Ee(e, e.return, g);
        }
      }
      break;
    case 1:
      an(t, e), Cn(e), r & 512 && n !== null && ss(n, n.return);
      break;
    case 5:
      if (
        (an(t, e),
        Cn(e),
        r & 512 && n !== null && ss(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Lo(i, "");
        } catch (g) {
          Ee(e, e.return, g);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && by(i, s),
              yh(l, o);
            var u = yh(l, s);
            for (o = 0; o < c.length; o += 2) {
              var d = c[o],
                h = c[o + 1];
              d === "style"
                ? _y(i, h)
                : d === "dangerouslySetInnerHTML"
                ? Sy(i, h)
                : d === "children"
                ? Lo(i, h)
                : qf(i, d, h, u);
            }
            switch (l) {
              case "input":
                ph(i, s);
                break;
              case "textarea":
                jy(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var m = s.value;
                m != null
                  ? ds(i, !!s.multiple, m, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? ds(i, !!s.multiple, s.defaultValue, !0)
                      : ds(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Uo] = s;
          } catch (g) {
            Ee(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((an(t, e), Cn(e), r & 4)) {
        if (e.stateNode === null) throw Error(A(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (g) {
          Ee(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (an(t, e), Cn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $o(t.containerInfo);
        } catch (g) {
          Ee(e, e.return, g);
        }
      break;
    case 4:
      an(t, e), Cn(e);
      break;
    case 13:
      an(t, e),
        Cn(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (kp = Ie())),
        r & 4 && yx(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Xe = (u = Xe) || d), an(t, e), (Xe = u)) : an(t, e),
        Cn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (L = e, d = e.child; d !== null; ) {
            for (h = L = d; L !== null; ) {
              switch (((f = L), (m = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _o(4, f, f.return);
                  break;
                case 1:
                  ss(f, f.return);
                  var p = f.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (g) {
                      Ee(r, n, g);
                    }
                  }
                  break;
                case 5:
                  ss(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    jx(h);
                    continue;
                  }
              }
              m !== null ? ((m.return = f), (L = m)) : jx(h);
            }
            d = d.sibling;
          }
        e: for (d = null, h = e; ; ) {
          if (h.tag === 5) {
            if (d === null) {
              d = h;
              try {
                (i = h.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = h.stateNode),
                      (c = h.memoizedProps.style),
                      (o =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (l.style.display = Cy("display", o)));
              } catch (g) {
                Ee(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (d === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (g) {
                Ee(e, e.return, g);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            d === h && (d = null), (h = h.return);
          }
          d === h && (d = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      an(t, e), Cn(e), r & 4 && yx(e);
      break;
    case 21:
      break;
    default:
      an(t, e), Cn(e);
  }
}
function Cn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Q1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Lo(i, ""), (r.flags &= -33));
          var s = vx(e);
          Kh(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = vx(e);
          qh(e, l, o);
          break;
        default:
          throw Error(A(161));
      }
    } catch (c) {
      Ee(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hE(e, t, n) {
  (L = e), Z1(e);
}
function Z1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ja;
      if (!o) {
        var l = i.alternate,
          c = (l !== null && l.memoizedState !== null) || Xe;
        l = Ja;
        var u = Xe;
        if (((Ja = o), (Xe = c) && !u))
          for (L = i; L !== null; )
            (o = L),
              (c = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? wx(i)
                : c !== null
                ? ((c.return = o), (L = c))
                : wx(i);
        for (; s !== null; ) (L = s), Z1(s), (s = s.sibling);
        (L = i), (Ja = l), (Xe = u);
      }
      bx(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (L = s)) : bx(e);
  }
}
function bx(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Xe || au(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Xe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : fn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && ix(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ix(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var h = d.dehydrated;
                    h !== null && $o(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
        Xe || (t.flags & 512 && Yh(t));
      } catch (f) {
        Ee(t, t.return, f);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function jx(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function wx(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            au(4, t);
          } catch (c) {
            Ee(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Ee(t, i, c);
            }
          }
          var s = t.return;
          try {
            Yh(t);
          } catch (c) {
            Ee(t, s, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Yh(t);
          } catch (c) {
            Ee(t, o, c);
          }
      }
    } catch (c) {
      Ee(t, t.return, c);
    }
    if (t === e) {
      L = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (L = l);
      break;
    }
    L = t.return;
  }
}
var fE = Math.ceil,
  bc = pr.ReactCurrentDispatcher,
  _p = pr.ReactCurrentOwner,
  qt = pr.ReactCurrentBatchConfig,
  ie = 0,
  He = null,
  Oe = null,
  Ue = 0,
  Ct = 0,
  os = ei(0),
  Fe = 0,
  Xo = null,
  Mi = 0,
  lu = 0,
  Ep = 0,
  Eo = null,
  ht = null,
  kp = 0,
  ks = 1 / 0,
  Xn = null,
  jc = !1,
  Qh = null,
  Ur = null,
  Za = !1,
  Ar = null,
  wc = 0,
  ko = 0,
  Xh = null,
  Rl = -1,
  Fl = 0;
function st() {
  return ie & 6 ? Ie() : Rl !== -1 ? Rl : (Rl = Ie());
}
function Gr(e) {
  return e.mode & 1
    ? ie & 2 && Ue !== 0
      ? Ue & -Ue
      : Q_.transition !== null
      ? (Fl === 0 && (Fl = Ry()), Fl)
      : ((e = he),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vy(e.type))),
        e)
    : 1;
}
function vn(e, t, n, r) {
  if (50 < ko) throw ((ko = 0), (Xh = null), Error(A(185)));
  xa(e, n, r),
    (!(ie & 2) || e !== He) &&
      (e === He && (!(ie & 2) && (lu |= n), Fe === 4 && Ir(e, Ue)),
      vt(e, r),
      n === 1 && ie === 0 && !(t.mode & 1) && ((ks = Ie() + 500), iu && ti()));
}
function vt(e, t) {
  var n = e.callbackNode;
  QC(e, t);
  var r = sc(e, e === He ? Ue : 0);
  if (r === 0)
    n !== null && Am(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Am(n), t === 1))
      e.tag === 0 ? K_(Sx.bind(null, e)) : c1(Sx.bind(null, e)),
        U_(function () {
          !(ie & 6) && ti();
        }),
        (n = null);
    else {
      switch (Fy(r)) {
        case 1:
          n = Zf;
          break;
        case 4:
          n = My;
          break;
        case 16:
          n = ic;
          break;
        case 536870912:
          n = Ly;
          break;
        default:
          n = ic;
      }
      n = ab(n, eb.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function eb(e, t) {
  if (((Rl = -1), (Fl = 0), ie & 6)) throw Error(A(327));
  var n = e.callbackNode;
  if (ms() && e.callbackNode !== n) return null;
  var r = sc(e, e === He ? Ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Sc(e, r);
  else {
    t = r;
    var i = ie;
    ie |= 2;
    var s = nb();
    (He !== e || Ue !== t) && ((Xn = null), (ks = Ie() + 500), Si(e, t));
    do
      try {
        mE();
        break;
      } catch (l) {
        tb(e, l);
      }
    while (!0);
    hp(),
      (bc.current = s),
      (ie = i),
      Oe !== null ? (t = 0) : ((He = null), (Ue = 0), (t = Fe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ch(e)), i !== 0 && ((r = i), (t = Jh(e, i)))), t === 1)
    )
      throw ((n = Xo), Si(e, 0), Ir(e, r), vt(e, Ie()), n);
    if (t === 6) Ir(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !pE(i) &&
          ((t = Sc(e, r)),
          t === 2 && ((s = Ch(e)), s !== 0 && ((r = s), (t = Jh(e, s)))),
          t === 1))
      )
        throw ((n = Xo), Si(e, 0), Ir(e, r), vt(e, Ie()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          fi(e, ht, Xn);
          break;
        case 3:
          if (
            (Ir(e, r), (r & 130023424) === r && ((t = kp + 500 - Ie()), 10 < t))
          ) {
            if (sc(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              st(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Th(fi.bind(null, e, ht, Xn), t);
            break;
          }
          fi(e, ht, Xn);
          break;
        case 4:
          if ((Ir(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - xn(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = Ie() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * fE(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Th(fi.bind(null, e, ht, Xn), r);
            break;
          }
          fi(e, ht, Xn);
          break;
        case 5:
          fi(e, ht, Xn);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return vt(e, Ie()), e.callbackNode === n ? eb.bind(null, e) : null;
}
function Jh(e, t) {
  var n = Eo;
  return (
    e.current.memoizedState.isDehydrated && (Si(e, t).flags |= 256),
    (e = Sc(e, t)),
    e !== 2 && ((t = ht), (ht = n), t !== null && Zh(t)),
    e
  );
}
function Zh(e) {
  ht === null ? (ht = e) : ht.push.apply(ht, e);
}
function pE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!bn(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ir(e, t) {
  for (
    t &= ~Ep,
      t &= ~lu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - xn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Sx(e) {
  if (ie & 6) throw Error(A(327));
  ms();
  var t = sc(e, 0);
  if (!(t & 1)) return vt(e, Ie()), null;
  var n = Sc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ch(e);
    r !== 0 && ((t = r), (n = Jh(e, r)));
  }
  if (n === 1) throw ((n = Xo), Si(e, 0), Ir(e, t), vt(e, Ie()), n);
  if (n === 6) throw Error(A(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    fi(e, ht, Xn),
    vt(e, Ie()),
    null
  );
}
function Pp(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    (ie = n), ie === 0 && ((ks = Ie() + 500), iu && ti());
  }
}
function Li(e) {
  Ar !== null && Ar.tag === 0 && !(ie & 6) && ms();
  var t = ie;
  ie |= 1;
  var n = qt.transition,
    r = he;
  try {
    if (((qt.transition = null), (he = 1), e)) return e();
  } finally {
    (he = r), (qt.transition = n), (ie = t), !(ie & 6) && ti();
  }
}
function Ip() {
  (Ct = os.current), xe(os);
}
function Si(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), V_(n)), Oe !== null))
    for (n = Oe.return; n !== null; ) {
      var r = n;
      switch ((cp(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && uc();
          break;
        case 3:
          _s(), xe(mt), xe(Je), vp();
          break;
        case 5:
          xp(r);
          break;
        case 4:
          _s();
          break;
        case 13:
          xe(je);
          break;
        case 19:
          xe(je);
          break;
        case 10:
          fp(r.type._context);
          break;
        case 22:
        case 23:
          Ip();
      }
      n = n.return;
    }
  if (
    ((He = e),
    (Oe = e = Yr(e.current, null)),
    (Ue = Ct = t),
    (Fe = 0),
    (Xo = null),
    (Ep = lu = Mi = 0),
    (ht = Eo = null),
    xi !== null)
  ) {
    for (t = 0; t < xi.length; t++)
      if (((n = xi[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    xi = null;
  }
  return e;
}
function tb(e, t) {
  do {
    var n = Oe;
    try {
      if ((hp(), (Dl.current = yc), vc)) {
        for (var r = Se.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        vc = !1;
      }
      if (
        ((Di = 0),
        ($e = Re = Se = null),
        (Co = !1),
        (qo = 0),
        (_p.current = null),
        n === null || n.return === null)
      ) {
        (Fe = 1), (Xo = t), (Oe = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          c = t;
        if (
          ((t = Ue),
          (l.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            d = l,
            h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var m = ux(o);
          if (m !== null) {
            (m.flags &= -257),
              dx(m, o, l, s, t),
              m.mode & 1 && cx(s, u, t),
              (t = m),
              (c = u);
            var p = t.updateQueue;
            if (p === null) {
              var g = new Set();
              g.add(c), (t.updateQueue = g);
            } else p.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              cx(s, u, t), Np();
              break e;
            }
            c = Error(A(426));
          }
        } else if (ve && l.mode & 1) {
          var y = ux(o);
          if (y !== null) {
            !(y.flags & 65536) && (y.flags |= 256),
              dx(y, o, l, s, t),
              up(Es(c, l));
            break e;
          }
        }
        (s = c = Es(c, l)),
          Fe !== 4 && (Fe = 2),
          Eo === null ? (Eo = [s]) : Eo.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var x = F1(s, c, t);
              rx(s, x);
              break e;
            case 1:
              l = c;
              var v = s.type,
                b = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (b !== null &&
                    typeof b.componentDidCatch == "function" &&
                    (Ur === null || !Ur.has(b))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var S = z1(s, l, t);
                rx(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      ib(n);
    } catch (C) {
      (t = C), Oe === n && n !== null && (Oe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function nb() {
  var e = bc.current;
  return (bc.current = yc), e === null ? yc : e;
}
function Np() {
  (Fe === 0 || Fe === 3 || Fe === 2) && (Fe = 4),
    He === null || (!(Mi & 268435455) && !(lu & 268435455)) || Ir(He, Ue);
}
function Sc(e, t) {
  var n = ie;
  ie |= 2;
  var r = nb();
  (He !== e || Ue !== t) && ((Xn = null), Si(e, t));
  do
    try {
      gE();
      break;
    } catch (i) {
      tb(e, i);
    }
  while (!0);
  if ((hp(), (ie = n), (bc.current = r), Oe !== null)) throw Error(A(261));
  return (He = null), (Ue = 0), Fe;
}
function gE() {
  for (; Oe !== null; ) rb(Oe);
}
function mE() {
  for (; Oe !== null && !BC(); ) rb(Oe);
}
function rb(e) {
  var t = ob(e.alternate, e, Ct);
  (e.memoizedProps = e.pendingProps),
    t === null ? ib(e) : (Oe = t),
    (_p.current = null);
}
function ib(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = cE(n, t)), n !== null)) {
        (n.flags &= 32767), (Oe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Fe = 6), (Oe = null);
        return;
      }
    } else if (((n = lE(n, t, Ct)), n !== null)) {
      Oe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Oe = t;
      return;
    }
    Oe = t = e;
  } while (t !== null);
  Fe === 0 && (Fe = 5);
}
function fi(e, t, n) {
  var r = he,
    i = qt.transition;
  try {
    (qt.transition = null), (he = 1), xE(e, t, n, r);
  } finally {
    (qt.transition = i), (he = r);
  }
  return null;
}
function xE(e, t, n, r) {
  do ms();
  while (Ar !== null);
  if (ie & 6) throw Error(A(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(A(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (XC(e, s),
    e === He && ((Oe = He = null), (Ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Za ||
      ((Za = !0),
      ab(ic, function () {
        return ms(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = qt.transition), (qt.transition = null);
    var o = he;
    he = 1;
    var l = ie;
    (ie |= 4),
      (_p.current = null),
      dE(e, n),
      J1(n, e),
      R_(Nh),
      (oc = !!Ih),
      (Nh = Ih = null),
      (e.current = n),
      hE(n),
      WC(),
      (ie = l),
      (he = o),
      (qt.transition = s);
  } else e.current = n;
  if (
    (Za && ((Za = !1), (Ar = e), (wc = i)),
    (s = e.pendingLanes),
    s === 0 && (Ur = null),
    UC(n.stateNode),
    vt(e, Ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (jc) throw ((jc = !1), (e = Qh), (Qh = null), e);
  return (
    wc & 1 && e.tag !== 0 && ms(),
    (s = e.pendingLanes),
    s & 1 ? (e === Xh ? ko++ : ((ko = 0), (Xh = e))) : (ko = 0),
    ti(),
    null
  );
}
function ms() {
  if (Ar !== null) {
    var e = Fy(wc),
      t = qt.transition,
      n = he;
    try {
      if (((qt.transition = null), (he = 16 > e ? 16 : e), Ar === null))
        var r = !1;
      else {
        if (((e = Ar), (Ar = null), (wc = 0), ie & 6)) throw Error(A(331));
        var i = ie;
        for (ie |= 4, L = e.current; L !== null; ) {
          var s = L,
            o = s.child;
          if (L.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var c = 0; c < l.length; c++) {
                var u = l[c];
                for (L = u; L !== null; ) {
                  var d = L;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _o(8, d, s);
                  }
                  var h = d.child;
                  if (h !== null) (h.return = d), (L = h);
                  else
                    for (; L !== null; ) {
                      d = L;
                      var f = d.sibling,
                        m = d.return;
                      if ((K1(d), d === u)) {
                        L = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = m), (L = f);
                        break;
                      }
                      L = m;
                    }
                }
              }
              var p = s.alternate;
              if (p !== null) {
                var g = p.child;
                if (g !== null) {
                  p.child = null;
                  do {
                    var y = g.sibling;
                    (g.sibling = null), (g = y);
                  } while (g !== null);
                }
              }
              L = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (L = o);
          else
            e: for (; L !== null; ) {
              if (((s = L), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _o(9, s, s.return);
                }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (L = x);
                break e;
              }
              L = s.return;
            }
        }
        var v = e.current;
        for (L = v; L !== null; ) {
          o = L;
          var b = o.child;
          if (o.subtreeFlags & 2064 && b !== null) (b.return = o), (L = b);
          else
            e: for (o = v; L !== null; ) {
              if (((l = L), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      au(9, l);
                  }
                } catch (C) {
                  Ee(l, l.return, C);
                }
              if (l === o) {
                L = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (L = S);
                break e;
              }
              L = l.return;
            }
        }
        if (
          ((ie = i), ti(), Rn && typeof Rn.onPostCommitFiberRoot == "function")
        )
          try {
            Rn.onPostCommitFiberRoot(Zc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (he = n), (qt.transition = t);
    }
  }
  return !1;
}
function Cx(e, t, n) {
  (t = Es(n, t)),
    (t = F1(e, t, 1)),
    (e = Vr(e, t, 1)),
    (t = st()),
    e !== null && (xa(e, 1, t), vt(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) Cx(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Cx(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ur === null || !Ur.has(r)))
        ) {
          (e = Es(n, e)),
            (e = z1(t, e, 1)),
            (t = Vr(t, e, 1)),
            (e = st()),
            t !== null && (xa(t, 1, e), vt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vE(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = st()),
    (e.pingedLanes |= e.suspendedLanes & n),
    He === e &&
      (Ue & n) === n &&
      (Fe === 4 || (Fe === 3 && (Ue & 130023424) === Ue && 500 > Ie() - kp)
        ? Si(e, 0)
        : (Ep |= n)),
    vt(e, t);
}
function sb(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ha), (Ha <<= 1), !(Ha & 130023424) && (Ha = 4194304))
      : (t = 1));
  var n = st();
  (e = hr(e, t)), e !== null && (xa(e, t, n), vt(e, n));
}
function yE(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), sb(e, n);
}
function bE(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  r !== null && r.delete(t), sb(e, n);
}
var ob;
ob = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || mt.current) pt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pt = !1), aE(e, t, n);
      pt = !!(e.flags & 131072);
    }
  else (pt = !1), ve && t.flags & 1048576 && u1(t, fc, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ll(e, t), (e = t.pendingProps);
      var i = ws(t, Je.current);
      gs(t, n), (i = bp(null, t, r, e, i, n));
      var s = jp();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xt(r) ? ((s = !0), dc(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            gp(t),
            (i.updater = ou),
            (t.stateNode = i),
            (i._reactInternals = t),
            zh(t, r, e, n),
            (t = Wh(null, t, r, !0, s, n)))
          : ((t.tag = 0), ve && s && lp(t), et(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ll(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = wE(r)),
          (e = fn(r, e)),
          i)
        ) {
          case 0:
            t = Bh(null, t, r, e, n);
            break e;
          case 1:
            t = px(null, t, r, e, n);
            break e;
          case 11:
            t = hx(null, t, r, e, n);
            break e;
          case 14:
            t = fx(null, t, r, fn(r.type, e), n);
            break e;
        }
        throw Error(A(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : fn(r, i)),
        Bh(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : fn(r, i)),
        px(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((H1(t), e === null)) throw Error(A(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          m1(e, t),
          mc(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Es(Error(A(423)), t)), (t = gx(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Es(Error(A(424)), t)), (t = gx(e, t, r, n, i));
            break e;
          } else
            for (
              _t = Hr(t.stateNode.containerInfo.firstChild),
                It = t,
                ve = !0,
                mn = null,
                n = p1(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ss(), r === i)) {
            t = fr(e, t, n);
            break e;
          }
          et(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        x1(t),
        e === null && Lh(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Ah(r, i) ? (o = null) : s !== null && Ah(r, s) && (t.flags |= 32),
        W1(e, t),
        et(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Lh(t), null;
    case 13:
      return V1(e, t, n);
    case 4:
      return (
        mp(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Cs(t, null, r, n)) : et(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : fn(r, i)),
        hx(e, t, r, i, n)
      );
    case 7:
      return et(e, t, t.pendingProps, n), t.child;
    case 8:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          pe(pc, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (bn(s.value, o)) {
            if (s.children === i.children && !mt.current) {
              t = fr(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var c = l.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (s.tag === 1) {
                      (c = sr(-1, n & -n)), (c.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (c.next = c)
                          : ((c.next = d.next), (d.next = c)),
                          (u.pending = c);
                      }
                    }
                    (s.lanes |= n),
                      (c = s.alternate),
                      c !== null && (c.lanes |= n),
                      Rh(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(A(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Rh(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        et(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        gs(t, n),
        (i = Jt(i)),
        (r = r(i)),
        (t.flags |= 1),
        et(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = fn(r, t.pendingProps)),
        (i = fn(r.type, i)),
        fx(e, t, r, i, n)
      );
    case 15:
      return $1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : fn(r, i)),
        Ll(e, t),
        (t.tag = 1),
        xt(r) ? ((e = !0), dc(t)) : (e = !1),
        gs(t, n),
        R1(t, r, i),
        zh(t, r, i, n),
        Wh(null, t, r, !0, e, n)
      );
    case 19:
      return U1(e, t, n);
    case 22:
      return B1(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function ab(e, t) {
  return Dy(e, t);
}
function jE(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ut(e, t, n, r) {
  return new jE(e, t, n, r);
}
function Ap(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function wE(e) {
  if (typeof e == "function") return Ap(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Qf)) return 11;
    if (e === Xf) return 14;
  }
  return 2;
}
function Yr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function zl(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ap(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Qi:
        return Ci(n.children, i, s, t);
      case Kf:
        (o = 8), (i |= 8);
        break;
      case ch:
        return (
          (e = Ut(12, n, t, i | 2)), (e.elementType = ch), (e.lanes = s), e
        );
      case uh:
        return (e = Ut(13, n, t, i)), (e.elementType = uh), (e.lanes = s), e;
      case dh:
        return (e = Ut(19, n, t, i)), (e.elementType = dh), (e.lanes = s), e;
      case xy:
        return cu(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case gy:
              o = 10;
              break e;
            case my:
              o = 9;
              break e;
            case Qf:
              o = 11;
              break e;
            case Xf:
              o = 14;
              break e;
            case Er:
              (o = 16), (r = null);
              break e;
          }
        throw Error(A(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ut(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Ci(e, t, n, r) {
  return (e = Ut(7, e, r, t)), (e.lanes = n), e;
}
function cu(e, t, n, r) {
  return (
    (e = Ut(22, e, r, t)),
    (e.elementType = xy),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Sd(e, t, n) {
  return (e = Ut(6, e, null, t)), (e.lanes = n), e;
}
function Cd(e, t, n) {
  return (
    (t = Ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function SE(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = id(0)),
    (this.expirationTimes = id(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = id(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Tp(e, t, n, r, i, s, o, l, c) {
  return (
    (e = new SE(e, t, n, l, c)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ut(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    gp(s),
    e
  );
}
function CE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ki,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function lb(e) {
  if (!e) return Xr;
  e = e._reactInternals;
  e: {
    if ($i(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xt(n)) return l1(e, n, t);
  }
  return t;
}
function cb(e, t, n, r, i, s, o, l, c) {
  return (
    (e = Tp(n, r, !0, e, i, s, o, l, c)),
    (e.context = lb(null)),
    (n = e.current),
    (r = st()),
    (i = Gr(n)),
    (s = sr(r, i)),
    (s.callback = t ?? null),
    Vr(n, s, i),
    (e.current.lanes = i),
    xa(e, i, r),
    vt(e, r),
    e
  );
}
function uu(e, t, n, r) {
  var i = t.current,
    s = st(),
    o = Gr(i);
  return (
    (n = lb(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = sr(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Vr(i, t, o)),
    e !== null && (vn(e, i, o, s), Ol(e, i, o)),
    o
  );
}
function Cc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _x(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Op(e, t) {
  _x(e, t), (e = e.alternate) && _x(e, t);
}
function _E() {
  return null;
}
var ub =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Dp(e) {
  this._internalRoot = e;
}
du.prototype.render = Dp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  uu(e, t, null, null);
};
du.prototype.unmount = Dp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Li(function () {
      uu(null, e, null, null);
    }),
      (t[dr] = null);
  }
};
function du(e) {
  this._internalRoot = e;
}
du.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = By();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pr.length && t !== 0 && t < Pr[n].priority; n++);
    Pr.splice(n, 0, e), n === 0 && Hy(e);
  }
};
function Mp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ex() {}
function EE(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Cc(o);
        s.call(u);
      };
    }
    var o = cb(t, r, e, 0, null, !1, !1, "", Ex);
    return (
      (e._reactRootContainer = o),
      (e[dr] = o.current),
      Ho(e.nodeType === 8 ? e.parentNode : e),
      Li(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Cc(c);
      l.call(u);
    };
  }
  var c = Tp(e, 0, !1, null, null, !1, !1, "", Ex);
  return (
    (e._reactRootContainer = c),
    (e[dr] = c.current),
    Ho(e.nodeType === 8 ? e.parentNode : e),
    Li(function () {
      uu(t, c, n, r);
    }),
    c
  );
}
function fu(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var c = Cc(o);
        l.call(c);
      };
    }
    uu(t, o, e, i);
  } else o = EE(n, t, e, i, r);
  return Cc(o);
}
zy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = uo(t.pendingLanes);
        n !== 0 &&
          (ep(t, n | 1), vt(t, Ie()), !(ie & 6) && ((ks = Ie() + 500), ti()));
      }
      break;
    case 13:
      Li(function () {
        var r = hr(e, 1);
        if (r !== null) {
          var i = st();
          vn(r, e, 1, i);
        }
      }),
        Op(e, 1);
  }
};
tp = function (e) {
  if (e.tag === 13) {
    var t = hr(e, 134217728);
    if (t !== null) {
      var n = st();
      vn(t, e, 134217728, n);
    }
    Op(e, 134217728);
  }
};
$y = function (e) {
  if (e.tag === 13) {
    var t = Gr(e),
      n = hr(e, t);
    if (n !== null) {
      var r = st();
      vn(n, e, t, r);
    }
    Op(e, t);
  }
};
By = function () {
  return he;
};
Wy = function (e, t) {
  var n = he;
  try {
    return (he = e), t();
  } finally {
    he = n;
  }
};
jh = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ph(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ru(r);
            if (!i) throw Error(A(90));
            yy(r), ph(r, i);
          }
        }
      }
      break;
    case "textarea":
      jy(e, n);
      break;
    case "select":
      (t = n.value), t != null && ds(e, !!n.multiple, t, !1);
  }
};
Py = Pp;
Iy = Li;
var kE = { usingClientEntryPoint: !1, Events: [ya, es, ru, Ey, ky, Pp] },
  eo = {
    findFiberByHostInstance: mi,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  PE = {
    bundleType: eo.bundleType,
    version: eo.version,
    rendererPackageName: eo.rendererPackageName,
    rendererConfig: eo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ty(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: eo.findFiberByHostInstance || _E,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var el = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!el.isDisabled && el.supportsFiber)
    try {
      (Zc = el.inject(PE)), (Rn = el);
    } catch {}
}
At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kE;
At.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mp(t)) throw Error(A(200));
  return CE(e, t, null, n);
};
At.createRoot = function (e, t) {
  if (!Mp(e)) throw Error(A(299));
  var n = !1,
    r = "",
    i = ub;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Tp(e, 1, !1, null, null, n, !1, r, i)),
    (e[dr] = t.current),
    Ho(e.nodeType === 8 ? e.parentNode : e),
    new Dp(t)
  );
};
At.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(A(188))
      : ((e = Object.keys(e).join(",")), Error(A(268, e)));
  return (e = Ty(t)), (e = e === null ? null : e.stateNode), e;
};
At.flushSync = function (e) {
  return Li(e);
};
At.hydrate = function (e, t, n) {
  if (!hu(t)) throw Error(A(200));
  return fu(null, e, t, !0, n);
};
At.hydrateRoot = function (e, t, n) {
  if (!Mp(e)) throw Error(A(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = ub;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = cb(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[dr] = t.current),
    Ho(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new du(t);
};
At.render = function (e, t, n) {
  if (!hu(t)) throw Error(A(200));
  return fu(null, e, t, !1, n);
};
At.unmountComponentAtNode = function (e) {
  if (!hu(e)) throw Error(A(40));
  return e._reactRootContainer
    ? (Li(function () {
        fu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[dr] = null);
        });
      }),
      !0)
    : !1;
};
At.unstable_batchedUpdates = Pp;
At.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!hu(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return fu(e, t, n, !1, r);
};
At.version = "18.3.1-next-f1338f8080-20240426";
function db() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(db);
    } catch (e) {
      console.error(e);
    }
}
db(), (dy.exports = At);
var IE = dy.exports,
  kx = IE;
(ah.createRoot = kx.createRoot), (ah.hydrateRoot = kx.hydrateRoot);
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Jo() {
  return (
    (Jo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Jo.apply(this, arguments)
  );
}
var Tr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Tr || (Tr = {}));
const Px = "popstate";
function NE(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: l } = r.location;
    return ef(
      "",
      { pathname: s, search: o, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : _c(i);
  }
  return TE(t, n, null, e);
}
function Ne(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function hb(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function AE() {
  return Math.random().toString(36).substr(2, 8);
}
function Ix(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ef(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Jo(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? $s(t) : t,
      { state: n, key: (t && t.key) || r || AE() }
    )
  );
}
function _c(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function $s(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function TE(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    l = Tr.Pop,
    c = null,
    u = d();
  u == null && ((u = 0), o.replaceState(Jo({}, o.state, { idx: u }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    l = Tr.Pop;
    let y = d(),
      x = y == null ? null : y - u;
    (u = y), c && c({ action: l, location: g.location, delta: x });
  }
  function f(y, x) {
    l = Tr.Push;
    let v = ef(g.location, y, x);
    u = d() + 1;
    let b = Ix(v, u),
      S = g.createHref(v);
    try {
      o.pushState(b, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      i.location.assign(S);
    }
    s && c && c({ action: l, location: g.location, delta: 1 });
  }
  function m(y, x) {
    l = Tr.Replace;
    let v = ef(g.location, y, x);
    u = d();
    let b = Ix(v, u),
      S = g.createHref(v);
    o.replaceState(b, "", S),
      s && c && c({ action: l, location: g.location, delta: 0 });
  }
  function p(y) {
    let x = i.location.origin !== "null" ? i.location.origin : i.location.href,
      v = typeof y == "string" ? y : _c(y);
    return (
      (v = v.replace(/ $/, "%20")),
      Ne(
        x,
        "No window.location.(origin|href) available to create URL for href: " +
          v
      ),
      new URL(v, x)
    );
  }
  let g = {
    get action() {
      return l;
    },
    get location() {
      return e(i, o);
    },
    listen(y) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Px, h),
        (c = y),
        () => {
          i.removeEventListener(Px, h), (c = null);
        }
      );
    },
    createHref(y) {
      return t(i, y);
    },
    createURL: p,
    encodeLocation(y) {
      let x = p(y);
      return { pathname: x.pathname, search: x.search, hash: x.hash };
    },
    push: f,
    replace: m,
    go(y) {
      return o.go(y);
    },
  };
  return g;
}
var Nx;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Nx || (Nx = {}));
function OE(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? $s(t) : t,
    i = Lp(r.pathname || "/", n);
  if (i == null) return null;
  let s = fb(e);
  DE(s);
  let o = null;
  for (let l = 0; o == null && l < s.length; ++l) {
    let c = GE(i);
    o = HE(s[l], c);
  }
  return o;
}
function fb(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, l) => {
    let c = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    c.relativePath.startsWith("/") &&
      (Ne(
        c.relativePath.startsWith(r),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (c.relativePath = c.relativePath.slice(r.length)));
    let u = qr([r, c.relativePath]),
      d = n.concat(c);
    s.children &&
      s.children.length > 0 &&
      (Ne(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      fb(s.children, t, d, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: BE(u, s.index), routesMeta: d });
  };
  return (
    e.forEach((s, o) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) i(s, o);
      else for (let c of pb(s.path)) i(s, o, c);
    }),
    t
  );
}
function pb(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = pb(r.join("/")),
    l = [];
  return (
    l.push(...o.map((c) => (c === "" ? s : [s, c].join("/")))),
    i && l.push(...o),
    l.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function DE(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : WE(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ME = /^:[\w-]+$/,
  LE = 3,
  RE = 2,
  FE = 1,
  zE = 10,
  $E = -2,
  Ax = (e) => e === "*";
function BE(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ax) && (r += $E),
    t && (r += RE),
    n
      .filter((i) => !Ax(i))
      .reduce((i, s) => i + (ME.test(s) ? LE : s === "" ? FE : zE), r)
  );
}
function WE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function HE(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let l = n[o],
      c = o === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      d = VE(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        u
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let h = l.route;
    s.push({
      params: r,
      pathname: qr([i, d.pathname]),
      pathnameBase: QE(qr([i, d.pathnameBase])),
      route: h,
    }),
      d.pathnameBase !== "/" && (i = qr([i, d.pathnameBase]));
  }
  return s;
}
function VE(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = UE(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((u, d, h) => {
      let { paramName: f, isOptional: m } = d;
      if (f === "*") {
        let g = l[h] || "";
        o = s.slice(0, s.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const p = l[h];
      return (
        m && !p ? (u[f] = void 0) : (u[f] = (p || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function UE(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    hb(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, l, c) => (
            r.push({ paramName: l, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function GE(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      hb(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Lp(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function YE(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? $s(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : qE(n, t)) : t,
    search: XE(r),
    hash: JE(i),
  };
}
function qE(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function _d(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function KE(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Rp(e, t) {
  let n = KE(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Fp(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = $s(e))
    : ((i = Jo({}, e)),
      Ne(
        !i.pathname || !i.pathname.includes("?"),
        _d("?", "pathname", "search", i)
      ),
      Ne(
        !i.pathname || !i.pathname.includes("#"),
        _d("#", "pathname", "hash", i)
      ),
      Ne(!i.search || !i.search.includes("#"), _d("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    l;
  if (o == null) l = n;
  else {
    let h = t.length - 1;
    if (!r && o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; ) f.shift(), (h -= 1);
      i.pathname = f.join("/");
    }
    l = h >= 0 ? t[h] : "/";
  }
  let c = YE(i, l),
    u = o && o !== "/" && o.endsWith("/"),
    d = (s || o === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c;
}
const qr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  QE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  XE = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  JE = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function ZE(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const gb = ["post", "put", "patch", "delete"];
new Set(gb);
const ek = ["get", ...gb];
new Set(ek);
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zo() {
  return (
    (Zo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zo.apply(this, arguments)
  );
}
const zp = w.createContext(null),
  tk = w.createContext(null),
  ni = w.createContext(null),
  pu = w.createContext(null),
  Bn = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  mb = w.createContext(null);
function nk(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Bs() || Ne(!1);
  let { basename: r, navigator: i } = w.useContext(ni),
    { hash: s, pathname: o, search: l } = vb(e, { relative: n }),
    c = o;
  return (
    r !== "/" && (c = o === "/" ? r : qr([r, o])),
    i.createHref({ pathname: c, search: l, hash: s })
  );
}
function Bs() {
  return w.useContext(pu) != null;
}
function ri() {
  return Bs() || Ne(!1), w.useContext(pu).location;
}
function xb(e) {
  w.useContext(ni).static || w.useLayoutEffect(e);
}
function Ot() {
  let { isDataRoute: e } = w.useContext(Bn);
  return e ? vk() : rk();
}
function rk() {
  Bs() || Ne(!1);
  let e = w.useContext(zp),
    { basename: t, future: n, navigator: r } = w.useContext(ni),
    { matches: i } = w.useContext(Bn),
    { pathname: s } = ri(),
    o = JSON.stringify(Rp(i, n.v7_relativeSplatPath)),
    l = w.useRef(!1);
  return (
    xb(() => {
      l.current = !0;
    }),
    w.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let h = Fp(u, JSON.parse(o), s, d.relative === "path");
        e == null &&
          t !== "/" &&
          (h.pathname = h.pathname === "/" ? t : qr([t, h.pathname])),
          (d.replace ? r.replace : r.push)(h, d.state, d);
      },
      [t, r, o, s, e]
    )
  );
}
const ik = w.createContext(null);
function sk(e) {
  let t = w.useContext(Bn).outlet;
  return t && w.createElement(ik.Provider, { value: e }, t);
}
function ok() {
  let { matches: e } = w.useContext(Bn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function vb(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = w.useContext(ni),
    { matches: i } = w.useContext(Bn),
    { pathname: s } = ri(),
    o = JSON.stringify(Rp(i, r.v7_relativeSplatPath));
  return w.useMemo(() => Fp(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
function ak(e, t) {
  return lk(e, t);
}
function lk(e, t, n, r) {
  Bs() || Ne(!1);
  let { navigator: i } = w.useContext(ni),
    { matches: s } = w.useContext(Bn),
    o = s[s.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let c = o ? o.pathnameBase : "/";
  o && o.route;
  let u = ri(),
    d;
  if (t) {
    var h;
    let y = typeof t == "string" ? $s(t) : t;
    c === "/" || ((h = y.pathname) != null && h.startsWith(c)) || Ne(!1),
      (d = y);
  } else d = u;
  let f = d.pathname || "/",
    m = f;
  if (c !== "/") {
    let y = c.replace(/^\//, "").split("/");
    m = "/" + f.replace(/^\//, "").split("/").slice(y.length).join("/");
  }
  let p = OE(e, { pathname: m }),
    g = fk(
      p &&
        p.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, l, y.params),
            pathname: qr([
              c,
              i.encodeLocation
                ? i.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? c
                : qr([
                    c,
                    i.encodeLocation
                      ? i.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && g
    ? w.createElement(
        pu.Provider,
        {
          value: {
            location: Zo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: Tr.Pop,
          },
        },
        g
      )
    : g;
}
function ck() {
  let e = xk(),
    t = ZE(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? w.createElement("pre", { style: i }, n) : null,
    null
  );
}
const uk = w.createElement(ck, null);
class dk extends w.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? w.createElement(
          Bn.Provider,
          { value: this.props.routeContext },
          w.createElement(mb.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function hk(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = w.useContext(zp);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(Bn.Provider, { value: t }, r)
  );
}
function fk(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) e = n.matches;
    else return null;
  }
  let o = e,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let d = o.findIndex(
      (h) => h.route.id && (l == null ? void 0 : l[h.route.id]) !== void 0
    );
    d >= 0 || Ne(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
  }
  let c = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let h = o[d];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (u = d),
        h.route.id)
      ) {
        let { loaderData: f, errors: m } = n,
          p =
            h.route.loader &&
            f[h.route.id] === void 0 &&
            (!m || m[h.route.id] === void 0);
        if (h.route.lazy || p) {
          (c = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((d, h, f) => {
    let m,
      p = !1,
      g = null,
      y = null;
    n &&
      ((m = l && h.route.id ? l[h.route.id] : void 0),
      (g = h.route.errorElement || uk),
      c &&
        (u < 0 && f === 0
          ? ((p = !0), (y = null))
          : u === f &&
            ((p = !0), (y = h.route.hydrateFallbackElement || null))));
    let x = t.concat(o.slice(0, f + 1)),
      v = () => {
        let b;
        return (
          m
            ? (b = g)
            : p
            ? (b = y)
            : h.route.Component
            ? (b = w.createElement(h.route.Component, null))
            : h.route.element
            ? (b = h.route.element)
            : (b = d),
          w.createElement(hk, {
            match: h,
            routeContext: { outlet: d, matches: x, isDataRoute: n != null },
            children: b,
          })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || f === 0)
      ? w.createElement(dk, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: m,
          children: v(),
          routeContext: { outlet: null, matches: x, isDataRoute: !0 },
        })
      : v();
  }, null);
}
var yb = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(yb || {}),
  Ec = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ec || {});
function pk(e) {
  let t = w.useContext(zp);
  return t || Ne(!1), t;
}
function gk(e) {
  let t = w.useContext(tk);
  return t || Ne(!1), t;
}
function mk(e) {
  let t = w.useContext(Bn);
  return t || Ne(!1), t;
}
function bb(e) {
  let t = mk(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ne(!1), n.route.id;
}
function xk() {
  var e;
  let t = w.useContext(mb),
    n = gk(Ec.UseRouteError),
    r = bb(Ec.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function vk() {
  let { router: e } = pk(yb.UseNavigateStable),
    t = bb(Ec.UseNavigateStable),
    n = w.useRef(!1);
  return (
    xb(() => {
      n.current = !0;
    }),
    w.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Zo({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
function ja(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  Bs() || Ne(!1);
  let { future: s, static: o } = w.useContext(ni),
    { matches: l } = w.useContext(Bn),
    { pathname: c } = ri(),
    u = Ot(),
    d = Fp(t, Rp(l, s.v7_relativeSplatPath), c, i === "path"),
    h = JSON.stringify(d);
  return (
    w.useEffect(
      () => u(JSON.parse(h), { replace: n, state: r, relative: i }),
      [u, h, i, n, r]
    ),
    null
  );
}
function yk(e) {
  return sk(e.context);
}
function V(e) {
  Ne(!1);
}
function bk(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Tr.Pop,
    navigator: s,
    static: o = !1,
    future: l,
  } = e;
  Bs() && Ne(!1);
  let c = t.replace(/^\/*/, "/"),
    u = w.useMemo(
      () => ({
        basename: c,
        navigator: s,
        static: o,
        future: Zo({ v7_relativeSplatPath: !1 }, l),
      }),
      [c, l, s, o]
    );
  typeof r == "string" && (r = $s(r));
  let {
      pathname: d = "/",
      search: h = "",
      hash: f = "",
      state: m = null,
      key: p = "default",
    } = r,
    g = w.useMemo(() => {
      let y = Lp(d, c);
      return y == null
        ? null
        : {
            location: { pathname: y, search: h, hash: f, state: m, key: p },
            navigationType: i,
          };
    }, [c, d, h, f, m, p, i]);
  return g == null
    ? null
    : w.createElement(
        ni.Provider,
        { value: u },
        w.createElement(pu.Provider, { children: n, value: g })
      );
}
function jk(e) {
  let { children: t, location: n } = e;
  return ak(tf(t), n);
}
new Promise(() => {});
function tf(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, i) => {
      if (!w.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === w.Fragment) {
        n.push.apply(n, tf(r.props.children, s));
        return;
      }
      r.type !== V && Ne(!1), !r.props.index || !r.props.children || Ne(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = tf(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nf() {
  return (
    (nf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nf.apply(this, arguments)
  );
}
function wk(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Sk(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ck(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Sk(e);
}
const _k = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Ek = "6";
try {
  window.__reactRouterVersion = Ek;
} catch {}
const kk = "startTransition",
  Tx = vC[kk];
function Pk(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = w.useRef();
  s.current == null && (s.current = NE({ window: i, v5Compat: !0 }));
  let o = s.current,
    [l, c] = w.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    d = w.useCallback(
      (h) => {
        u && Tx ? Tx(() => c(h)) : c(h);
      },
      [c, u]
    );
  return (
    w.useLayoutEffect(() => o.listen(d), [o, d]),
    w.createElement(bk, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: o,
      future: r,
    })
  );
}
const Ik =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Nk = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  tn = w.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: l,
        target: c,
        to: u,
        preventScrollReset: d,
        unstable_viewTransition: h,
      } = t,
      f = wk(t, _k),
      { basename: m } = w.useContext(ni),
      p,
      g = !1;
    if (typeof u == "string" && Nk.test(u) && ((p = u), Ik))
      try {
        let b = new URL(window.location.href),
          S = u.startsWith("//") ? new URL(b.protocol + u) : new URL(u),
          C = Lp(S.pathname, m);
        S.origin === b.origin && C != null
          ? (u = C + S.search + S.hash)
          : (g = !0);
      } catch {}
    let y = nk(u, { relative: i }),
      x = Ak(u, {
        replace: o,
        state: l,
        target: c,
        preventScrollReset: d,
        relative: i,
        unstable_viewTransition: h,
      });
    function v(b) {
      r && r(b), b.defaultPrevented || x(b);
    }
    return w.createElement(
      "a",
      nf({}, f, { href: p || y, onClick: g || s ? r : v, ref: n, target: c })
    );
  });
var Ox;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Ox || (Ox = {}));
var Dx;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Dx || (Dx = {}));
function Ak(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    c = Ot(),
    u = ri(),
    d = vb(e, { relative: o });
  return w.useCallback(
    (h) => {
      if (Ck(h, n)) {
        h.preventDefault();
        let f = r !== void 0 ? r : _c(u) === _c(d);
        c(e, {
          replace: f,
          state: i,
          preventScrollReset: s,
          relative: o,
          unstable_viewTransition: l,
        });
      }
    },
    [u, c, d, r, i, n, e, s, o, l]
  );
}
var gt = function () {
  return (
    (gt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
        }
        return t;
      }),
    gt.apply(this, arguments)
  );
};
function kc(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, s; r < i; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var me = "-ms-",
  Po = "-moz-",
  le = "-webkit-",
  jb = "comm",
  gu = "rule",
  $p = "decl",
  Tk = "@import",
  wb = "@keyframes",
  Ok = "@layer",
  Sb = Math.abs,
  Bp = String.fromCharCode,
  rf = Object.assign;
function Dk(e, t) {
  return Be(e, 0) ^ 45
    ? (((((((t << 2) ^ Be(e, 0)) << 2) ^ Be(e, 1)) << 2) ^ Be(e, 2)) << 2) ^
        Be(e, 3)
    : 0;
}
function Cb(e) {
  return e.trim();
}
function Jn(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Y(e, t, n) {
  return e.replace(t, n);
}
function $l(e, t, n) {
  return e.indexOf(t, n);
}
function Be(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ps(e, t, n) {
  return e.slice(t, n);
}
function Nn(e) {
  return e.length;
}
function _b(e) {
  return e.length;
}
function fo(e, t) {
  return t.push(e), e;
}
function Mk(e, t) {
  return e.map(t).join("");
}
function Mx(e, t) {
  return e.filter(function (n) {
    return !Jn(n, t);
  });
}
var mu = 1,
  Is = 1,
  Eb = 0,
  en = 0,
  Te = 0,
  Ws = "";
function xu(e, t, n, r, i, s, o, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: s,
    line: mu,
    column: Is,
    length: o,
    return: "",
    siblings: l,
  };
}
function _r(e, t) {
  return rf(
    xu("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function Ui(e) {
  for (; e.root; ) e = _r(e.root, { children: [e] });
  fo(e, e.siblings);
}
function Lk() {
  return Te;
}
function Rk() {
  return (
    (Te = en > 0 ? Be(Ws, --en) : 0), Is--, Te === 10 && ((Is = 1), mu--), Te
  );
}
function yn() {
  return (
    (Te = en < Eb ? Be(Ws, en++) : 0), Is++, Te === 10 && ((Is = 1), mu++), Te
  );
}
function _i() {
  return Be(Ws, en);
}
function Bl() {
  return en;
}
function vu(e, t) {
  return Ps(Ws, e, t);
}
function sf(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Fk(e) {
  return (mu = Is = 1), (Eb = Nn((Ws = e))), (en = 0), [];
}
function zk(e) {
  return (Ws = ""), e;
}
function Ed(e) {
  return Cb(vu(en - 1, of(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function $k(e) {
  for (; (Te = _i()) && Te < 33; ) yn();
  return sf(e) > 2 || sf(Te) > 3 ? "" : " ";
}
function Bk(e, t) {
  for (
    ;
    --t &&
    yn() &&
    !(Te < 48 || Te > 102 || (Te > 57 && Te < 65) || (Te > 70 && Te < 97));

  );
  return vu(e, Bl() + (t < 6 && _i() == 32 && yn() == 32));
}
function of(e) {
  for (; yn(); )
    switch (Te) {
      case e:
        return en;
      case 34:
      case 39:
        e !== 34 && e !== 39 && of(Te);
        break;
      case 40:
        e === 41 && of(e);
        break;
      case 92:
        yn();
        break;
    }
  return en;
}
function Wk(e, t) {
  for (; yn() && e + Te !== 57; ) if (e + Te === 84 && _i() === 47) break;
  return "/*" + vu(t, en - 1) + "*" + Bp(e === 47 ? e : yn());
}
function Hk(e) {
  for (; !sf(_i()); ) yn();
  return vu(e, en);
}
function Vk(e) {
  return zk(Wl("", null, null, null, [""], (e = Fk(e)), 0, [0], e));
}
function Wl(e, t, n, r, i, s, o, l, c) {
  for (
    var u = 0,
      d = 0,
      h = o,
      f = 0,
      m = 0,
      p = 0,
      g = 1,
      y = 1,
      x = 1,
      v = 0,
      b = "",
      S = i,
      C = s,
      k = r,
      _ = b;
    y;

  )
    switch (((p = v), (v = yn()))) {
      case 40:
        if (p != 108 && Be(_, h - 1) == 58) {
          $l((_ += Y(Ed(v), "&", "&\f")), "&\f", Sb(u ? l[u - 1] : 0)) != -1 &&
            (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += Ed(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += $k(p);
        break;
      case 92:
        _ += Bk(Bl() - 1, 7);
        continue;
      case 47:
        switch (_i()) {
          case 42:
          case 47:
            fo(Uk(Wk(yn(), Bl()), t, n, c), c);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * g:
        l[u++] = Nn(_) * x;
      case 125 * g:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            y = 0;
          case 59 + d:
            x == -1 && (_ = Y(_, /\f/g, "")),
              m > 0 &&
                Nn(_) - h &&
                fo(
                  m > 32
                    ? Rx(_ + ";", r, n, h - 1, c)
                    : Rx(Y(_, " ", "") + ";", r, n, h - 2, c),
                  c
                );
            break;
          case 59:
            _ += ";";
          default:
            if (
              (fo(
                (k = Lx(_, t, n, u, d, i, l, b, (S = []), (C = []), h, s)),
                s
              ),
              v === 123)
            )
              if (d === 0) Wl(_, t, k, k, S, s, h, l, C);
              else
                switch (f === 99 && Be(_, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Wl(
                      e,
                      k,
                      k,
                      r && fo(Lx(e, k, k, 0, 0, i, l, b, i, (S = []), h, C), C),
                      i,
                      C,
                      h,
                      l,
                      r ? S : C
                    );
                    break;
                  default:
                    Wl(_, k, k, k, [""], C, 0, l, C);
                }
        }
        (u = d = m = 0), (g = x = 1), (b = _ = ""), (h = o);
        break;
      case 58:
        (h = 1 + Nn(_)), (m = p);
      default:
        if (g < 1) {
          if (v == 123) --g;
          else if (v == 125 && g++ == 0 && Rk() == 125) continue;
        }
        switch (((_ += Bp(v)), v * g)) {
          case 38:
            x = d > 0 ? 1 : ((_ += "\f"), -1);
            break;
          case 44:
            (l[u++] = (Nn(_) - 1) * x), (x = 1);
            break;
          case 64:
            _i() === 45 && (_ += Ed(yn())),
              (f = _i()),
              (d = h = Nn((b = _ += Hk(Bl())))),
              v++;
            break;
          case 45:
            p === 45 && Nn(_) == 2 && (g = 0);
        }
    }
  return s;
}
function Lx(e, t, n, r, i, s, o, l, c, u, d, h) {
  for (
    var f = i - 1, m = i === 0 ? s : [""], p = _b(m), g = 0, y = 0, x = 0;
    g < r;
    ++g
  )
    for (var v = 0, b = Ps(e, f + 1, (f = Sb((y = o[g])))), S = e; v < p; ++v)
      (S = Cb(y > 0 ? m[v] + " " + b : Y(b, /&\f/g, m[v]))) && (c[x++] = S);
  return xu(e, t, n, i === 0 ? gu : l, c, u, d, h);
}
function Uk(e, t, n, r) {
  return xu(e, t, n, jb, Bp(Lk()), Ps(e, 2, -2), 0, r);
}
function Rx(e, t, n, r, i) {
  return xu(e, t, n, $p, Ps(e, 0, r), Ps(e, r + 1, -1), r, i);
}
function kb(e, t, n) {
  switch (Dk(e, t)) {
    case 5103:
      return le + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return le + e + e;
    case 4789:
      return Po + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return le + e + Po + e + me + e + e;
    case 5936:
      switch (Be(e, t + 11)) {
        case 114:
          return le + e + me + Y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return le + e + me + Y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return le + e + me + Y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return le + e + me + e + e;
    case 6165:
      return le + e + me + "flex-" + e + e;
    case 5187:
      return (
        le + e + Y(e, /(\w+).+(:[^]+)/, le + "box-$1$2" + me + "flex-$1$2") + e
      );
    case 5443:
      return (
        le +
        e +
        me +
        "flex-item-" +
        Y(e, /flex-|-self/g, "") +
        (Jn(e, /flex-|baseline/)
          ? ""
          : me + "grid-row-" + Y(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        le +
        e +
        me +
        "flex-line-pack" +
        Y(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return le + e + me + Y(e, "shrink", "negative") + e;
    case 5292:
      return le + e + me + Y(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        le +
        "box-" +
        Y(e, "-grow", "") +
        le +
        e +
        me +
        Y(e, "grow", "positive") +
        e
      );
    case 4554:
      return le + Y(e, /([^-])(transform)/g, "$1" + le + "$2") + e;
    case 6187:
      return (
        Y(Y(Y(e, /(zoom-|grab)/, le + "$1"), /(image-set)/, le + "$1"), e, "") +
        e
      );
    case 5495:
    case 3959:
      return Y(e, /(image-set\([^]*)/, le + "$1$`$1");
    case 4968:
      return (
        Y(
          Y(e, /(.+:)(flex-)?(.*)/, le + "box-pack:$3" + me + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        le +
        e +
        e
      );
    case 4200:
      if (!Jn(e, /flex-|baseline/))
        return me + "grid-column-align" + Ps(e, t) + e;
      break;
    case 2592:
    case 3360:
      return me + Y(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, i) {
          return (t = i), Jn(r.props, /grid-\w+-end/);
        })
        ? ~$l(e + (n = n[t].value), "span", 0)
          ? e
          : me +
            Y(e, "-start", "") +
            e +
            me +
            "grid-row-span:" +
            (~$l(n, "span", 0) ? Jn(n, /\d+/) : +Jn(n, /\d+/) - +Jn(e, /\d+/)) +
            ";"
        : me + Y(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return Jn(r.props, /grid-\w+-start/);
        })
        ? e
        : me + Y(Y(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Y(e, /(.+)-inline(.+)/, le + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Nn(e) - 1 - t > 6)
        switch (Be(e, t + 1)) {
          case 109:
            if (Be(e, t + 4) !== 45) break;
          case 102:
            return (
              Y(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  le +
                  "$2-$3$1" +
                  Po +
                  (Be(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~$l(e, "stretch", 0)
              ? kb(Y(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return Y(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, i, s, o, l, c, u) {
          return (
            me +
            i +
            ":" +
            s +
            u +
            (o ? me + i + "-span:" + (l ? c : +c - +s) + u : "") +
            e
          );
        }
      );
    case 4949:
      if (Be(e, t + 6) === 121) return Y(e, ":", ":" + le) + e;
      break;
    case 6444:
      switch (Be(e, Be(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            Y(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                le +
                (Be(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                le +
                "$2$3$1" +
                me +
                "$2box$3"
            ) + e
          );
        case 100:
          return Y(e, ":", ":" + me) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Y(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Pc(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function Gk(e, t, n, r) {
  switch (e.type) {
    case Ok:
      if (e.children.length) break;
    case Tk:
    case $p:
      return (e.return = e.return || e.value);
    case jb:
      return "";
    case wb:
      return (e.return = e.value + "{" + Pc(e.children, r) + "}");
    case gu:
      if (!Nn((e.value = e.props.join(",")))) return "";
  }
  return Nn((n = Pc(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Yk(e) {
  var t = _b(e);
  return function (n, r, i, s) {
    for (var o = "", l = 0; l < t; l++) o += e[l](n, r, i, s) || "";
    return o;
  };
}
function qk(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Kk(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case $p:
        e.return = kb(e.value, e.length, n);
        return;
      case wb:
        return Pc([_r(e, { value: Y(e.value, "@", "@" + le) })], r);
      case gu:
        if (e.length)
          return Mk((n = e.props), function (i) {
            switch (Jn(i, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Ui(_r(e, { props: [Y(i, /:(read-\w+)/, ":" + Po + "$1")] })),
                  Ui(_r(e, { props: [i] })),
                  rf(e, { props: Mx(n, r) });
                break;
              case "::placeholder":
                Ui(
                  _r(e, { props: [Y(i, /:(plac\w+)/, ":" + le + "input-$1")] })
                ),
                  Ui(_r(e, { props: [Y(i, /:(plac\w+)/, ":" + Po + "$1")] })),
                  Ui(_r(e, { props: [Y(i, /:(plac\w+)/, me + "input-$1")] })),
                  Ui(_r(e, { props: [i] })),
                  rf(e, { props: Mx(n, r) });
                break;
            }
            return "";
          });
    }
}
var Qk = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  wt = {},
  Ns =
    (typeof process < "u" &&
      wt !== void 0 &&
      (wt.REACT_APP_SC_ATTR || wt.SC_ATTR)) ||
    "data-styled",
  Pb = "active",
  Ib = "data-styled-version",
  yu = "6.1.9",
  Wp = `/*!sc*/
`,
  Hp = typeof window < "u" && "HTMLElement" in window,
  Xk = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      wt !== void 0 &&
      wt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      wt.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? wt.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      wt.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      wt !== void 0 &&
      wt.SC_DISABLE_SPEEDY !== void 0 &&
      wt.SC_DISABLE_SPEEDY !== "" &&
      wt.SC_DISABLE_SPEEDY !== "false" &&
      wt.SC_DISABLE_SPEEDY),
  bu = Object.freeze([]),
  As = Object.freeze({});
function Jk(e, t, n) {
  return (
    n === void 0 && (n = As), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var Nb = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  Zk = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  e2 = /(^-|-$)/g;
function Fx(e) {
  return e.replace(Zk, "-").replace(e2, "");
}
var t2 = /(a)(d)/gi,
  tl = 52,
  zx = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function af(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > tl; t = (t / tl) | 0) n = zx(t % tl) + n;
  return (zx(t % tl) + n).replace(t2, "$1-$2");
}
var kd,
  Ab = 5381,
  as = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  Tb = function (e) {
    return as(Ab, e);
  };
function n2(e) {
  return af(Tb(e) >>> 0);
}
function r2(e) {
  return e.displayName || e.name || "Component";
}
function Pd(e) {
  return typeof e == "string" && !0;
}
var Ob = typeof Symbol == "function" && Symbol.for,
  Db = Ob ? Symbol.for("react.memo") : 60115,
  i2 = Ob ? Symbol.for("react.forward_ref") : 60112,
  s2 = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  o2 = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Mb = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  a2 =
    (((kd = {})[i2] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (kd[Db] = Mb),
    kd);
function $x(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Db
    ? Mb
    : "$$typeof" in e
    ? a2[e.$$typeof]
    : s2;
  var t;
}
var l2 = Object.defineProperty,
  c2 = Object.getOwnPropertyNames,
  Bx = Object.getOwnPropertySymbols,
  u2 = Object.getOwnPropertyDescriptor,
  d2 = Object.getPrototypeOf,
  Wx = Object.prototype;
function Lb(e, t, n) {
  if (typeof t != "string") {
    if (Wx) {
      var r = d2(t);
      r && r !== Wx && Lb(e, r, n);
    }
    var i = c2(t);
    Bx && (i = i.concat(Bx(t)));
    for (var s = $x(e), o = $x(t), l = 0; l < i.length; ++l) {
      var c = i[l];
      if (!(c in o2 || (n && n[c]) || (o && c in o) || (s && c in s))) {
        var u = u2(t, c);
        try {
          l2(e, c, u);
        } catch {}
      }
    }
  }
  return e;
}
function Ts(e) {
  return typeof e == "function";
}
function Vp(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function yi(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Hx(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function ea(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function lf(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !ea(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = lf(e[r], t[r]);
  else if (ea(t)) for (var r in t) e[r] = lf(e[r], t[r]);
  return e;
}
function Up(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function wa(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var h2 = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, i = r.length, s = i; t >= s; )
            if ((s <<= 1) < 0) throw wa(16, "".concat(t));
          (this.groupSizes = new Uint32Array(s)),
            this.groupSizes.set(r),
            (this.length = s);
          for (var o = i; o < s; o++) this.groupSizes[o] = 0;
        }
        for (
          var l = this.indexOfGroup(t + 1), c = ((o = 0), n.length);
          o < c;
          o++
        )
          this.tag.insertRule(l, n[o]) && (this.groupSizes[t]++, l++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            i = r + n;
          this.groupSizes[t] = 0;
          for (var s = r; s < i; s++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            i = this.indexOfGroup(t),
            s = i + r,
            o = i;
          o < s;
          o++
        )
          n += "".concat(this.tag.getRule(o)).concat(Wp);
        return n;
      }),
      e
    );
  })(),
  Hl = new Map(),
  Ic = new Map(),
  Vl = 1,
  nl = function (e) {
    if (Hl.has(e)) return Hl.get(e);
    for (; Ic.has(Vl); ) Vl++;
    var t = Vl++;
    return Hl.set(e, t), Ic.set(t, e), t;
  },
  f2 = function (e, t) {
    (Vl = t + 1), Hl.set(e, t), Ic.set(t, e);
  },
  p2 = "style[".concat(Ns, "][").concat(Ib, '="').concat(yu, '"]'),
  g2 = new RegExp(
    "^".concat(Ns, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  m2 = function (e, t, n) {
    for (var r, i = n.split(","), s = 0, o = i.length; s < o; s++)
      (r = i[s]) && e.registerName(t, r);
  },
  x2 = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Wp),
        i = [],
        s = 0,
        o = r.length;
      s < o;
      s++
    ) {
      var l = r[s].trim();
      if (l) {
        var c = l.match(g2);
        if (c) {
          var u = 0 | parseInt(c[1], 10),
            d = c[2];
          u !== 0 && (f2(d, u), m2(e, d, c[3]), e.getTag().insertRules(u, i)),
            (i.length = 0);
        } else i.push(l);
      }
    }
  };
function v2() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Rb = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      i = (function (l) {
        var c = Array.from(l.querySelectorAll("style[".concat(Ns, "]")));
        return c[c.length - 1];
      })(n),
      s = i !== void 0 ? i.nextSibling : null;
    r.setAttribute(Ns, Pb), r.setAttribute(Ib, yu);
    var o = v2();
    return o && r.setAttribute("nonce", o), n.insertBefore(r, s), r;
  },
  y2 = (function () {
    function e(t) {
      (this.element = Rb(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, i = 0, s = r.length; i < s; i++) {
            var o = r[i];
            if (o.ownerNode === n) return o;
          }
          throw wa(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  b2 = (function () {
    function e(t) {
      (this.element = Rb(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  j2 = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Vx = Hp,
  w2 = { isServer: !Hp, useCSSOMInjection: !Xk },
  Fb = (function () {
    function e(t, n, r) {
      t === void 0 && (t = As), n === void 0 && (n = {});
      var i = this;
      (this.options = gt(gt({}, w2), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          Hp &&
          Vx &&
          ((Vx = !1),
          (function (s) {
            for (
              var o = document.querySelectorAll(p2), l = 0, c = o.length;
              l < c;
              l++
            ) {
              var u = o[l];
              u &&
                u.getAttribute(Ns) !== Pb &&
                (x2(s, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this)),
        Up(this, function () {
          return (function (s) {
            for (
              var o = s.getTag(),
                l = o.length,
                c = "",
                u = function (h) {
                  var f = (function (x) {
                    return Ic.get(x);
                  })(h);
                  if (f === void 0) return "continue";
                  var m = s.names.get(f),
                    p = o.getGroup(h);
                  if (m === void 0 || p.length === 0) return "continue";
                  var g = ""
                      .concat(Ns, ".g")
                      .concat(h, '[id="')
                      .concat(f, '"]'),
                    y = "";
                  m !== void 0 &&
                    m.forEach(function (x) {
                      x.length > 0 && (y += "".concat(x, ","));
                    }),
                    (c += ""
                      .concat(p)
                      .concat(g, '{content:"')
                      .concat(y, '"}')
                      .concat(Wp));
                },
                d = 0;
              d < l;
              d++
            )
              u(d);
            return c;
          })(i);
        });
    }
    return (
      (e.registerId = function (t) {
        return nl(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            gt(gt({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                i = n.target;
              return n.isServer ? new j2(i) : r ? new y2(i) : new b2(i);
            })(this.options)),
            new h2(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((nl(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(nl(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(nl(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  S2 = /&/g,
  C2 = /^\s*\/\/.*$/gm;
function zb(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = zb(n.children, t)),
      n
    );
  });
}
function _2(e) {
  var t,
    n,
    r,
    i = As,
    s = i.options,
    o = s === void 0 ? As : s,
    l = i.plugins,
    c = l === void 0 ? bu : l,
    u = function (f, m, p) {
      return p.startsWith(n) && p.endsWith(n) && p.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : f;
    },
    d = c.slice();
  d.push(function (f) {
    f.type === gu &&
      f.value.includes("&") &&
      (f.props[0] = f.props[0].replace(S2, n).replace(r, u));
  }),
    o.prefix && d.push(Kk),
    d.push(Gk);
  var h = function (f, m, p, g) {
    m === void 0 && (m = ""),
      p === void 0 && (p = ""),
      g === void 0 && (g = "&"),
      (t = g),
      (n = m),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var y = f.replace(C2, ""),
      x = Vk(p || m ? "".concat(p, " ").concat(m, " { ").concat(y, " }") : y);
    o.namespace && (x = zb(x, o.namespace));
    var v = [];
    return (
      Pc(
        x,
        Yk(
          d.concat(
            qk(function (b) {
              return v.push(b);
            })
          )
        )
      ),
      v
    );
  };
  return (
    (h.hash = c.length
      ? c
          .reduce(function (f, m) {
            return m.name || wa(15), as(f, m.name);
          }, Ab)
          .toString()
      : ""),
    h
  );
}
var E2 = new Fb(),
  cf = _2(),
  $b = U.createContext({
    shouldForwardProp: void 0,
    styleSheet: E2,
    stylis: cf,
  });
$b.Consumer;
U.createContext(void 0);
function Ux() {
  return w.useContext($b);
}
var k2 = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (i, s) {
        s === void 0 && (s = cf);
        var o = r.name + s.hash;
        i.hasNameForId(r.id, o) ||
          i.insertRules(r.id, o, s(r.rules, o, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        Up(this, function () {
          throw wa(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = cf), this.name + t.hash;
      }),
      e
    );
  })(),
  P2 = function (e) {
    return e >= "A" && e <= "Z";
  };
function Gx(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    P2(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Bb = function (e) {
    return e == null || e === !1 || e === "";
  },
  Wb = function (e) {
    var t,
      n,
      r = [];
    for (var i in e) {
      var s = e[i];
      e.hasOwnProperty(i) &&
        !Bb(s) &&
        ((Array.isArray(s) && s.isCss) || Ts(s)
          ? r.push("".concat(Gx(i), ":"), s, ";")
          : ea(s)
          ? r.push.apply(r, kc(kc(["".concat(i, " {")], Wb(s), !1), ["}"], !1))
          : r.push(
              ""
                .concat(Gx(i), ": ")
                .concat(
                  ((t = i),
                  (n = s) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in Qk ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function Ei(e, t, n, r) {
  if (Bb(e)) return [];
  if (Vp(e)) return [".".concat(e.styledComponentId)];
  if (Ts(e)) {
    if (!Ts((s = e)) || (s.prototype && s.prototype.isReactComponent) || !t)
      return [e];
    var i = e(t);
    return Ei(i, t, n, r);
  }
  var s;
  return e instanceof k2
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : ea(e)
    ? Wb(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        bu,
        e.map(function (o) {
          return Ei(o, t, n, r);
        })
      )
    : [e.toString()];
}
function I2(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Ts(n) && !Vp(n)) return !1;
  }
  return !0;
}
var N2 = Tb(yu),
  A2 = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && I2(t)),
        (this.componentId = n),
        (this.baseHash = as(N2, n)),
        (this.baseStyle = r),
        Fb.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = yi(i, this.staticRulesId);
          else {
            var s = Hx(Ei(this.rules, t, n, r)),
              o = af(as(this.baseHash, s) >>> 0);
            if (!n.hasNameForId(this.componentId, o)) {
              var l = r(s, ".".concat(o), void 0, this.componentId);
              n.insertRules(this.componentId, o, l);
            }
            (i = yi(i, o)), (this.staticRulesId = o);
          }
        else {
          for (
            var c = as(this.baseHash, r.hash), u = "", d = 0;
            d < this.rules.length;
            d++
          ) {
            var h = this.rules[d];
            if (typeof h == "string") u += h;
            else if (h) {
              var f = Hx(Ei(h, t, n, r));
              (c = as(c, f + d)), (u += f);
            }
          }
          if (u) {
            var m = af(c >>> 0);
            n.hasNameForId(this.componentId, m) ||
              n.insertRules(
                this.componentId,
                m,
                r(u, ".".concat(m), void 0, this.componentId)
              ),
              (i = yi(i, m));
          }
        }
        return i;
      }),
      e
    );
  })(),
  Hb = U.createContext(void 0);
Hb.Consumer;
var Id = {};
function T2(e, t, n) {
  var r = Vp(e),
    i = e,
    s = !Pd(e),
    o = t.attrs,
    l = o === void 0 ? bu : o,
    c = t.componentId,
    u =
      c === void 0
        ? (function (S, C) {
            var k = typeof S != "string" ? "sc" : Fx(S);
            Id[k] = (Id[k] || 0) + 1;
            var _ = "".concat(k, "-").concat(n2(yu + k + Id[k]));
            return C ? "".concat(C, "-").concat(_) : _;
          })(t.displayName, t.parentComponentId)
        : c,
    d = t.displayName,
    h =
      d === void 0
        ? (function (S) {
            return Pd(S) ? "styled.".concat(S) : "Styled(".concat(r2(S), ")");
          })(e)
        : d,
    f =
      t.displayName && t.componentId
        ? "".concat(Fx(t.displayName), "-").concat(t.componentId)
        : t.componentId || u,
    m = r && i.attrs ? i.attrs.concat(l).filter(Boolean) : l,
    p = t.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var g = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var y = t.shouldForwardProp;
      p = function (S, C) {
        return g(S, C) && y(S, C);
      };
    } else p = g;
  }
  var x = new A2(n, f, r ? i.componentStyle : void 0);
  function v(S, C) {
    return (function (k, _, E) {
      var I = k.attrs,
        N = k.componentStyle,
        R = k.defaultProps,
        z = k.foldedComponentIds,
        ee = k.styledComponentId,
        ae = k.target,
        K = U.useContext(Hb),
        G = Ux(),
        te = k.shouldForwardProp || G.shouldForwardProp,
        O = Jk(_, K, R) || As,
        M = (function (ce, ne, Pe) {
          for (
            var bt,
              Ye = gt(gt({}, ne), { className: void 0, theme: Pe }),
              ai = 0;
            ai < ce.length;
            ai += 1
          ) {
            var vr = Ts((bt = ce[ai])) ? bt(Ye) : bt;
            for (var jt in vr)
              Ye[jt] =
                jt === "className"
                  ? yi(Ye[jt], vr[jt])
                  : jt === "style"
                  ? gt(gt({}, Ye[jt]), vr[jt])
                  : vr[jt];
          }
          return (
            ne.className && (Ye.className = yi(Ye.className, ne.className)), Ye
          );
        })(I, _, O),
        D = M.as || ae,
        H = {};
      for (var B in M)
        M[B] === void 0 ||
          B[0] === "$" ||
          B === "as" ||
          (B === "theme" && M.theme === O) ||
          (B === "forwardedAs"
            ? (H.as = M.forwardedAs)
            : (te && !te(B, D)) || (H[B] = M[B]));
      var se = (function (ce, ne) {
          var Pe = Ux(),
            bt = ce.generateAndInjectStyles(ne, Pe.styleSheet, Pe.stylis);
          return bt;
        })(N, M),
        Q = yi(z, ee);
      return (
        se && (Q += " " + se),
        M.className && (Q += " " + M.className),
        (H[Pd(D) && !Nb.has(D) ? "class" : "className"] = Q),
        (H.ref = E),
        w.createElement(D, H)
      );
    })(b, S, C);
  }
  v.displayName = h;
  var b = U.forwardRef(v);
  return (
    (b.attrs = m),
    (b.componentStyle = x),
    (b.displayName = h),
    (b.shouldForwardProp = p),
    (b.foldedComponentIds = r
      ? yi(i.foldedComponentIds, i.styledComponentId)
      : ""),
    (b.styledComponentId = f),
    (b.target = r ? i.target : e),
    Object.defineProperty(b, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (S) {
        this._foldedDefaultProps = r
          ? (function (C) {
              for (var k = [], _ = 1; _ < arguments.length; _++)
                k[_ - 1] = arguments[_];
              for (var E = 0, I = k; E < I.length; E++) lf(C, I[E], !0);
              return C;
            })({}, i.defaultProps, S)
          : S;
      },
    }),
    Up(b, function () {
      return ".".concat(b.styledComponentId);
    }),
    s &&
      Lb(b, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    b
  );
}
function Yx(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var qx = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function O2(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Ts(e) || ea(e)) return qx(Ei(Yx(bu, kc([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? Ei(r)
    : qx(Ei(Yx(r, t)));
}
function uf(e, t, n) {
  if ((n === void 0 && (n = As), !t)) throw wa(1, t);
  var r = function (i) {
    for (var s = [], o = 1; o < arguments.length; o++) s[o - 1] = arguments[o];
    return e(t, n, O2.apply(void 0, kc([i], s, !1)));
  };
  return (
    (r.attrs = function (i) {
      return uf(
        e,
        t,
        gt(gt({}, n), {
          attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (i) {
      return uf(e, t, gt(gt({}, n), i));
    }),
    r
  );
}
var Vb = function (e) {
    return uf(T2, e);
  },
  j = Vb;
Nb.forEach(function (e) {
  j[e] = Vb(e);
});
const D2 = j.div`
  background: linear-gradient(to bottom right, orange, #401902, #edd68c);
  color: #fff;
  padding: 40px 0;
`,
  M2 = j.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`,
  rl = j.div`
  flex: 1 1 300px;
  padding: 0px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-bottom: 20px;
  }
`,
  il = j.h4`
  font-size: 20px;
  margin-bottom: 15px;
`,
  Nd = j.p`
  line-height: 1.6;
`,
  Kx = j.ul`
  list-style-type: none;
  padding: 0;
`,
  Hn = j.li`
  margin-bottom: 8px;
`,
  ln = j.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ffc107; /* Change color on hover */
  }
`,
  L2 = () =>
    a.jsx(D2, {
      children: a.jsxs(M2, {
        children: [
          a.jsxs(rl, {
            children: [
              a.jsx(il, { children: "BANGALORE TECHNOLOGICAL INSTITUTE" }),
              a.jsxs(Nd, {
                children: [
                  "(An ISO 9001:2015 Certified Institute) Approved by AICTE,",
                  a.jsx("br", {}),
                  "Affiliated to VTU, Recognised by GoK.",
                  a.jsx("br", {}),
                  "Off Sarjapur Road, Near Wipro Corporate Office,",
                  a.jsx("br", {}),
                  "Chikkanayakanahalli Dinne Bangalore-35.",
                ],
              }),
              a.jsxs(Nd, {
                children: [
                  "Contact Principal:",
                  " ",
                  a.jsx(ln, {
                    href: "#",
                    children: "principal@btibangalore.org",
                  }),
                  a.jsx("br", {}),
                  "General Queries:",
                  " ",
                  a.jsx(ln, {
                    href: "#",
                    children: "contactus@btibangalore.org",
                  }),
                ],
              }),
            ],
          }),
          a.jsxs(rl, {
            children: [
              a.jsx(il, { children: "AFFILIATIONS" }),
              a.jsxs(Nd, {
                children: [
                  "Approved by AICTE, New Delhi",
                  a.jsx("br", {}),
                  "Affiliated to VTU, Belagavi",
                  a.jsx("br", {}),
                  "Recognized by Govt. of Karnataka",
                  a.jsx("br", {}),
                  "ISO 9001:2015 Certified",
                  a.jsx("br", {}),
                  "In the process of NAAC and NBA & NIRF",
                ],
              }),
            ],
          }),
          a.jsxs(rl, {
            children: [
              a.jsx(il, { children: "BTI CELL" }),
              a.jsxs(Kx, {
                children: [
                  a.jsx(Hn, {
                    children: a.jsx(ln, {
                      href: "#",
                      children: "Student Counseling Cell",
                    }),
                  }),
                  a.jsx(Hn, {
                    children: a.jsx(ln, {
                      href: "#",
                      children: "Research & Development Cell",
                    }),
                  }),
                  a.jsx(Hn, {
                    children: a.jsx(ln, {
                      href: "#",
                      children: "Industry – Institution Interaction Cell",
                    }),
                  }),
                  a.jsx(Hn, {
                    children: a.jsx(ln, {
                      href: "#",
                      children: "Entrepreneur Development Cell",
                    }),
                  }),
                  a.jsx(Hn, {
                    children: a.jsx(ln, {
                      href: "#",
                      children: "Career Guidance Cell",
                    }),
                  }),
                ],
              }),
            ],
          }),
          a.jsxs(rl, {
            children: [
              a.jsx(il, { children: "USEFUL LINKS" }),
              a.jsxs(Kx, {
                children: [
                  a.jsx(Hn, {
                    children: a.jsx(ln, {
                      href: "#",
                      children: "Cultural Activities",
                    }),
                  }),
                  a.jsx(Hn, {
                    children: a.jsx(ln, {
                      href: "#",
                      children: "Mandatory Committees",
                    }),
                  }),
                  a.jsx(Hn, {
                    children: a.jsx(ln, {
                      href: "#",
                      children: "Quality Policy",
                    }),
                  }),
                  a.jsx(Hn, {
                    children: a.jsx(ln, { href: "#", children: "Careers" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  R2 = j.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #401902;
  color: black;
  font-family: Arial, sans-serif;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`,
  F2 = j.img`
  width: 100px;
  height: auto;
  cursor: pointer;

  @media screen and (max-width: 1320px) {
    width: 200px;
  }

  @media screen and (min-width: 1321px) {
    width: 200px;
  }

  @media screen and (max-width: 1200px) {
    width: 200px;
  }

  @media screen and (max-width: 992px) {
    width: 180px;
  }

  @media screen and (max-width: 768px) {
    width: 160px;
    margin-bottom: 10px; /* Additional style for margin-bottom */
  }

  @media screen and (max-width: 576px) {
    width: 180px;
  }

  @media screen and (max-width: 400px) {
    width: 200px;
  }
`,
  z2 = j.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`,
  sl = j(tn)`
  margin-right: 20px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    color: orange;
  }

  @media screen and (max-width: 768px) {
    margin: 0 10px;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 12px;
  }
`,
  $2 = j.div`
  display: flex;
  align-items: center;
  margin-right: 35px;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-right: 0;
  }
`,
  B2 = j.button`
  background-color: transparent;
  color: white;
  border: none;
  border: 2px solid orange;
  border-radius: 5px;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: orange;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`,
  W2 = j.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid orange;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: orange;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`,
  H2 = j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #edd68c;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding-top: 80px;

  @media screen and (max-width: 768px) {
    padding-top: 60px;
  }
`,
  V2 = j.div`
  margin-top: 20px;
`,
  U2 = j.img`
  width: 100%;
  max-height: 80vh;
  object-fit: cover;
  margin-top: 20px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`,
  G2 = j.h1`
  font-size: 36px;
  font-weight: bold;
  color: black;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`,
  Y2 = j.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px;
  color: black;
  text-align: justify;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`,
  Gp = j(tn)`
  color: black;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`,
  q2 = "/assets/logo-DupVcPem.png",
  K2 = () => {
    const e = Ot(),
      t = () => {
        e("/choose-user");
      };
    return a.jsxs(R2, {
      children: [
        a.jsx(F2, { src: q2, alt: "Logo" }),
        a.jsxs(z2, {
          children: [
            a.jsx(sl, { to: "/", children: "Home" }),
            a.jsx(sl, { to: "/about", children: "About Us" }),
            a.jsx(sl, { to: "/notes", children: "Notes" }),
            a.jsx(sl, { to: "/chatroom", children: "ChatRoom" }),
          ],
        }),
        a.jsxs($2, {
          children: [
            a.jsx(B2, { onClick: t, children: "Sign In" }),
            a.jsx(W2, { onClick: t, children: "Guest Mode" }),
          ],
        }),
      ],
    });
  },
  Q2 = () =>
    a.jsxs(a.Fragment, {
      children: [a.jsx(K2, {}), a.jsx(yk, {}), a.jsx(L2, {})],
    }),
  X2 = "/assets/bg-CtgxuRfX.jpeg",
  J2 = "/assets/bg1-D64_cVt-.jpeg",
  Z2 = "/assets/bg3-DRzMLF4J.jpg",
  eP = () => {
    const e = [X2, J2, Z2],
      [t, n] = w.useState(0);
    return (
      w.useEffect(() => {
        const r = setInterval(() => {
          n((i) => (i + 1) % e.length);
        }, 5e3);
        return () => clearInterval(r);
      }, [e.length]),
      a.jsx(U2, { src: e[t], alt: "pupils" })
    );
  },
  Ub = j.button`
  position: fixed;
  right: -40px;
  transform: translateY(-50%) rotate(90deg);
  color: black;
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  z-index: 1000;
`,
  tP = j(Ub)`
  top: 50%;
  background-color: white;
  display: ${({ modalstatus: e }) =>
    e ? "none" : "block"}; // Hide the button when modal is shown
`,
  nP = j(Ub)`
  right: -50px;
  top: calc(50% + 150px); /* Adjust vertical positioning as needed */
  background-color: white;
  display: ${({ modalstatus: e }) =>
    e ? "none" : "block"}; // Hide the button when modal is shown
`,
  Gb = j.div`
  width: 100%;
  position: fixed;
  display: none;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  &.modalShow {
    display: block;
  }
`,
  Yb = j.div`
  position: fixed;
  right: 50%;
  transition: 0.3s;
  top: -500px;
  transform: translate(50%, -50%);
  background-color: white;
  z-index: 1000;
  &.showModalDiv {
    top: 50%;
  }
  h3 {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 10px;
    background-color: #f1f1f1;
  }
  span {
    cursor: pointer; // Make the close button a pointer cursor
  }
`,
  rP = j.div`
  text-align: center;
  padding: 20px;
`,
  iP = j.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
`,
  br = j.div`
  display: flex;
  flex-direction: column;
`,
  jr = j.label`
  margin-bottom: 5px;
  font-weight: bold;
`,
  Gi = j.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  sP = j.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  oP = j.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  aP = j.button`
  grid-column: span 2;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`,
  lP = () => {
    const e = {
        studentName: "",
        email: "",
        phone: "",
        country: "",
        state: "",
        city: "",
        course: "",
        message: "",
      },
      [t, n] = w.useState(e),
      r = (s) => {
        n({ ...t, [s.target.name]: s.target.value });
      },
      i = (s) => {
        s.preventDefault(), console.log(t), n(e);
      };
    return a.jsxs(rP, {
      children: [
        a.jsx("h3", {
          children: a.jsx("strong", { children: "Enquiry Form" }),
        }),
        a.jsxs(iP, {
          onSubmit: i,
          children: [
            a.jsxs(br, {
              children: [
                a.jsx(jr, { children: "Student Name *" }),
                a.jsx(Gi, {
                  type: "text",
                  name: "studentName",
                  value: t.studentName,
                  onChange: r,
                  required: !0,
                }),
              ],
            }),
            a.jsxs(br, {
              children: [
                a.jsx(jr, { children: "Email *" }),
                a.jsx(Gi, {
                  type: "email",
                  name: "email",
                  value: t.email,
                  onChange: r,
                  required: !0,
                }),
              ],
            }),
            a.jsxs(br, {
              children: [
                a.jsx(jr, { children: "Mobile Number *" }),
                a.jsx(Gi, {
                  type: "tel",
                  name: "phone",
                  value: t.phone,
                  onChange: r,
                  required: !0,
                }),
              ],
            }),
            a.jsxs(br, {
              children: [
                a.jsx(jr, { children: "Country *" }),
                a.jsx(Gi, {
                  type: "text",
                  name: "country",
                  value: t.country,
                  onChange: r,
                  required: !0,
                }),
              ],
            }),
            a.jsxs(br, {
              children: [
                a.jsx(jr, { children: "State *" }),
                a.jsx(Gi, {
                  type: "text",
                  name: "state",
                  value: t.state,
                  onChange: r,
                  required: !0,
                }),
              ],
            }),
            a.jsxs(br, {
              children: [
                a.jsx(jr, { children: "City *" }),
                a.jsx(Gi, {
                  type: "text",
                  name: "city",
                  value: t.city,
                  onChange: r,
                  required: !0,
                }),
              ],
            }),
            a.jsxs(br, {
              style: { gridColumn: "span 2" },
              children: [
                a.jsx(jr, { children: "Course *" }),
                a.jsxs(sP, {
                  name: "course",
                  value: t.course,
                  onChange: r,
                  required: !0,
                  children: [
                    a.jsx("option", {
                      value: "",
                      children: "-- Select Course --",
                    }),
                    a.jsx("option", {
                      value: "Computer Science & Engineering",
                      children: "Computer Science & Engineering",
                    }),
                    a.jsx("option", {
                      value: "Computer Engineering",
                      children: "Computer Engineering",
                    }),
                    a.jsx("option", {
                      value: "Artificial Intelligence & Machine Learning",
                      children: "Artificial Intelligence & Machine Learning",
                    }),
                    a.jsx("option", {
                      value: "Electronics & Communication Engineering",
                      children: "Electronics & Communication Engineering",
                    }),
                    a.jsx("option", {
                      value: "Robotics & Artificial Intelligence",
                      children: "Robotics & Artificial Intelligence",
                    }),
                    a.jsx("option", {
                      value: "Mechanical Engineering",
                      children: "Mechanical Engineering",
                    }),
                    a.jsx("option", {
                      value: "Civil Engineering",
                      children: "Civil Engineering",
                    }),
                  ],
                }),
              ],
            }),
            a.jsxs(br, {
              style: { gridColumn: "span 2" },
              children: [
                a.jsx(jr, { children: "Your Message" }),
                a.jsx(oP, {
                  name: "message",
                  value: t.message,
                  onChange: r,
                  rows: "4",
                }),
              ],
            }),
            a.jsx(aP, { type: "submit", children: "Send" }),
          ],
        }),
      ],
    });
  },
  cP = () => {
    const [e, t] = w.useState(!1),
      n = w.useRef(),
      r = () => {
        t(!1);
      };
    return (
      w.useEffect(() => {
        const i = (s) => {
          n.current && !n.current.contains(s.target) && r();
        };
        return (
          e
            ? document.addEventListener("mousedown", i)
            : document.removeEventListener("mousedown", i),
          () => {
            document.removeEventListener("mousedown", i);
          }
        );
      }, [e]),
      a.jsxs(a.Fragment, {
        children: [
          a.jsx(tP, {
            modalstatus: e,
            onClick: () => t(!0),
            children: "Enquiry Now",
          }),
          a.jsx(Gb, { className: e ? "modalShow" : "" }),
          a.jsx(Yb, {
            ref: n,
            className: e ? "showModalDiv" : "",
            children: a.jsxs("h3", {
              children: [
                a.jsx(lP, {}),
                " ",
                a.jsx("span", { onClick: r, children: "×" }),
              ],
            }),
          }),
        ],
      })
    );
  },
  uP = j.div`
  text-align: center;
  padding: 20px;
`,
  dP = j.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,
  Mt = j.div`
  display: flex;
  flex-direction: column;
`,
  Lt = j.label`
  margin-bottom: 5px;
  font-weight: bold;
`,
  wr = j.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  Qx = j.select`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  Xx = j.textarea`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  hP = j.button`
  grid-column: span 2;
  padding: 8px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`,
  fP = () => {
    const e = {
        studentName: "",
        dateOfBirth: "",
        gender: "",
        email: "",
        phone: "",
        country: "",
        state: "",
        city: "",
        address: "",
        zipCode: "",
        course: "",
        message: "",
      },
      [t, n] = w.useState(e),
      r = (s) => {
        n({ ...t, [s.target.name]: s.target.value });
      },
      i = (s) => {
        s.preventDefault(), console.log(t), n(e);
      };
    return a.jsxs(uP, {
      children: [
        a.jsx("h3", {
          children: a.jsx("strong", { children: "Admission Form" }),
        }),
        a.jsxs(dP, {
          onSubmit: i,
          children: [
            a.jsxs(Mt, {
              children: [
                a.jsx(Lt, { children: "Student Name *" }),
                a.jsx(wr, {
                  type: "text",
                  name: "studentName",
                  value: t.studentName,
                  onChange: r,
                  required: !0,
                }),
              ],
            }),
            a.jsxs(Mt, {
              children: [
                a.jsx(Lt, { children: "Date of Birth *" }),
                a.jsx(wr, {
                  type: "date",
                  name: "dateOfBirth",
                  value: t.dateOfBirth,
                  onChange: r,
                  required: !0,
                }),
              ],
            }),
            a.jsxs(Mt, {
              children: [
                a.jsx(Lt, { children: "Gender *" }),
                a.jsxs(Qx, {
                  name: "gender",
                  value: t.gender,
                  onChange: r,
                  required: !0,
                  children: [
                    a.jsx("option", {
                      value: "",
                      children: "-- Select Gender --",
                    }),
                    a.jsx("option", { value: "Male", children: "Male" }),
                    a.jsx("option", { value: "Female", children: "Female" }),
                    a.jsx("option", { value: "Other", children: "Other" }),
                  ],
                }),
              ],
            }),
            a.jsxs(Mt, {
              children: [
                a.jsx(Lt, { children: "Email *" }),
                a.jsx(wr, {
                  type: "email",
                  name: "email",
                  value: t.email,
                  onChange: r,
                  required: !0,
                }),
              ],
            }),
            a.jsxs(Mt, {
              children: [
                a.jsx(Lt, { children: "Mobile Number *" }),
                a.jsx(wr, {
                  type: "tel",
                  name: "phone",
                  value: t.phone,
                  onChange: r,
                  required: !0,
                }),
              ],
            }),
            a.jsxs(Mt, {
              children: [
                a.jsx(Lt, { children: "Country *" }),
                a.jsx(wr, {
                  type: "text",
                  name: "country",
                  value: t.country,
                  onChange: r,
                  required: !0,
                }),
              ],
            }),
            a.jsxs(Mt, {
              children: [
                a.jsx(Lt, { children: "State *" }),
                a.jsx(wr, {
                  type: "text",
                  name: "state",
                  value: t.state,
                  onChange: r,
                  required: !0,
                }),
              ],
            }),
            a.jsxs(Mt, {
              children: [
                a.jsx(Lt, { children: "City *" }),
                a.jsx(wr, {
                  type: "text",
                  name: "city",
                  value: t.city,
                  onChange: r,
                  required: !0,
                }),
              ],
            }),
            a.jsxs(Mt, {
              children: [
                a.jsx(Lt, { children: "Address *" }),
                a.jsx(Xx, {
                  name: "address",
                  value: t.address,
                  onChange: r,
                  rows: "2",
                  required: !0,
                }),
              ],
            }),
            a.jsxs(Mt, {
              children: [
                a.jsx(Lt, { children: "Zip Code *" }),
                a.jsx(wr, {
                  type: "text",
                  name: "zipCode",
                  value: t.zipCode,
                  onChange: r,
                  required: !0,
                }),
              ],
            }),
            a.jsxs(Mt, {
              style: { gridColumn: "span 2" },
              children: [
                a.jsx(Lt, { children: "Course *" }),
                a.jsxs(Qx, {
                  name: "course",
                  value: t.course,
                  onChange: r,
                  required: !0,
                  children: [
                    a.jsx("option", {
                      value: "",
                      children: "-- Select Course --",
                    }),
                    a.jsx("option", {
                      value: "Computer Science & Engineering",
                      children: "Computer Science & Engineering",
                    }),
                    a.jsx("option", {
                      value: "Computer Engineering",
                      children: "Computer Engineering",
                    }),
                    a.jsx("option", {
                      value: "Artificial Intelligence & Machine Learning",
                      children: "Artificial Intelligence & Machine Learning",
                    }),
                    a.jsx("option", {
                      value: "Electronics & Communication Engineering",
                      children: "Electronics & Communication Engineering",
                    }),
                    a.jsx("option", {
                      value: "Robotics & Artificial Intelligence",
                      children: "Robotics & Artificial Intelligence",
                    }),
                    a.jsx("option", {
                      value: "Mechanical Engineering",
                      children: "Mechanical Engineering",
                    }),
                    a.jsx("option", {
                      value: "Civil Engineering",
                      children: "Civil Engineering",
                    }),
                  ],
                }),
              ],
            }),
            a.jsxs(Mt, {
              style: { gridColumn: "span 2" },
              children: [
                a.jsx(Lt, { children: "Your Message" }),
                a.jsx(Xx, {
                  name: "message",
                  value: t.message,
                  onChange: r,
                  rows: "4",
                }),
              ],
            }),
            a.jsx(hP, { type: "submit", children: "Submit" }),
          ],
        }),
      ],
    });
  },
  pP = () => {
    const [e, t] = w.useState(!1),
      n = w.useRef(),
      r = () => {
        t(!1);
      };
    return (
      w.useEffect(() => {
        const i = (s) => {
          n.current && !n.current.contains(s.target) && r();
        };
        return (
          e
            ? document.addEventListener("mousedown", i)
            : document.removeEventListener("mousedown", i),
          () => {
            document.removeEventListener("mousedown", i);
          }
        );
      }, [e]),
      a.jsxs(a.Fragment, {
        children: [
          a.jsx(nP, {
            modalstatus: e,
            onClick: () => t(!0),
            children: "Admission Now",
          }),
          a.jsx(Gb, { className: e ? "modalShow" : "" }),
          a.jsx(Yb, {
            ref: n,
            className: e ? "showModalDiv" : "",
            children: a.jsxs("h3", {
              children: [
                a.jsx(fP, {}),
                " ",
                a.jsx("span", { onClick: r, children: "×" }),
              ],
            }),
          }),
        ],
      })
    );
  };
var qb = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Jx = U.createContext && U.createContext(qb),
  gP = ["attr", "size", "title"];
function mP(e, t) {
  if (e == null) return {};
  var n = xP(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function xP(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Nc() {
  return (
    (Nc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nc.apply(this, arguments)
  );
}
function Zx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ac(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zx(Object(n), !0).forEach(function (r) {
          vP(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Zx(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function vP(e, t, n) {
  return (
    (t = yP(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function yP(e) {
  var t = bP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function bP(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Kb(e) {
  return (
    e &&
    e.map((t, n) => U.createElement(t.tag, Ac({ key: n }, t.attr), Kb(t.child)))
  );
}
function yt(e) {
  return (t) =>
    U.createElement(jP, Nc({ attr: Ac({}, e.attr) }, t), Kb(e.child));
}
function jP(e) {
  var t = (n) => {
    var { attr: r, size: i, title: s } = e,
      o = mP(e, gP),
      l = i || n.size || "1em",
      c;
    return (
      n.className && (c = n.className),
      e.className && (c = (c ? c + " " : "") + e.className),
      U.createElement(
        "svg",
        Nc(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: c,
            style: Ac(Ac({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && U.createElement("title", null, s),
        e.children
      )
    );
  };
  return Jx !== void 0
    ? U.createElement(Jx.Consumer, null, (n) => t(n))
    : t(qb);
}
function wP(e) {
  return yt({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
        },
        child: [],
      },
    ],
  })(e);
}
function SP(e) {
  return yt({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(e);
}
function CP(e) {
  return yt({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z",
        },
        child: [],
      },
    ],
  })(e);
}
function _P(e) {
  return yt({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
        },
        child: [],
      },
    ],
  })(e);
}
const EP = j.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
  position: fixed;
  top: 40%;
  left: 0;
  @media (max-width: 1024px) {
    display: none;
  }
`,
  kP = j.li`
  margin-bottom: 0px; /* Added some space between items */
  transition: margin-left 0.3s ease;
`,
  PP = j.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 125px;
  height: 56px;
  background-color: #6b7280;
  color: white;
  text-decoration: none;
  font-size: 1.25rem;
  padding: 0 12px;
  transition: all 0.3s ease;
  border-radius: 1px;
  margin-left: -100px;
  cursor: pointer;

  &:hover {
    background-color: #555;
    margin-left: 0; /* Slide in only the hovered link */
    border-radius: 8px;
  }

  span {
    margin-right: 8px; /* Adjust the space between the text and icon */
  }

  svg {
    font-size: 1.5rem;
    margin: 0; /* Remove any margin from the icon */
  }
`,
  IP = [
    {
      name: "WhatsApp",
      url: "https://wa.me/917090404050",
      icon: a.jsx(CP, {}),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/bti.bangalore.315",
      icon: a.jsx(wP, {}),
    },
    { name: "YouTube", url: "http://www.youtube.com/BTI", icon: a.jsx(_P, {}) },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bti-bangalore-b224081b4/",
      icon: a.jsx(SP, {}),
    },
  ],
  NP = () =>
    a.jsx(EP, {
      children: IP.map((e, t) =>
        a.jsx(
          kP,
          {
            children: a.jsxs(PP, {
              href: e.url,
              target: "_blank",
              title: e.name,
              rel: "noreferrer",
              children: [a.jsx("span", { children: e.name }), e.icon],
            }),
          },
          t
        )
      ),
    }),
  AP = () =>
    a.jsxs(a.Fragment, {
      children: [
        a.jsxs(H2, {
          children: [
            a.jsxs(V2, {
              children: [
                a.jsx(G2, { children: "College Management System" }),
                a.jsx(Y2, {
                  children: a.jsx("p", {
                    children:
                      "The College Management System (CMS) for Bangalore Technological Institute is designed to streamline and enhance the administrative and academic functions of the college. This comprehensive system provides various modules for managing students, teachers, classes, exams, and marks, thereby ensuring efficient and effective operations within the institution.",
                  }),
                }),
              ],
            }),
            a.jsx(eP, {}),
          ],
        }),
        a.jsx(cP, {}),
        a.jsx(pP, {}),
        a.jsx(NP, {}),
      ],
    }),
  TP = () =>
    a.jsxs(a.Fragment, {
      children: [
        a.jsx("div", {
          children: a.jsx("h1", {
            children: "Welcome, to the about section of the bti College",
          }),
        }),
        a.jsx("div", {}),
        a.jsx("h1", {
          children: "Welcome, to the about section of the bti College",
        }),
      ],
    }),
  OP = () =>
    a.jsxs(a.Fragment, {
      children: [
        a.jsx("div", {
          children: a.jsx("h1", {
            children: "Welcome, to the about section of the bti College",
          }),
        }),
        a.jsx("div", {}),
        a.jsx("h1", {
          children: "Welcome, to the about section of the bti College",
        }),
      ],
    }),
  DP = () =>
    a.jsxs(a.Fragment, {
      children: [
        a.jsx("div", {
          children: a.jsx("h1", {
            children: "Welcome, to the about section of the bti College",
          }),
        }),
        a.jsx("div", {}),
        a.jsx("h1", {
          children: "Welcome, to the about section of the bti College",
        }),
      ],
    }),
  MP = j.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom right, orange, #401902, #edd68c);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between; /* Spread items evenly horizontally */
    align-items: flex-start;
  }
`,
  Ad = j.div`
  text-align: center; /* Center text */
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 0;
    margin: 20px;
    text-align: left; /* Align text to the left for larger screens */
  }
`,
  Td = j.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ff4500; /* Admin: Orange color */

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`,
  Od = j(tn)`
  background-color: #90ee90; /* Student: Light green color */
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7cfc00; /* Darker shade of green on hover */
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`,
  LP = () =>
    a.jsxs(MP, {
      children: [
        a.jsxs(Ad, {
          children: [
            a.jsx(Td, { children: "Admin" }),
            a.jsx(Od, { to: "/admin-signIn", children: "Login as Admin" }),
          ],
        }),
        a.jsxs(Ad, {
          children: [
            a.jsx(Td, { children: "Student" }),
            a.jsx(Od, { to: "/student-signIn", children: "Login as Student" }),
          ],
        }),
        a.jsxs(Ad, {
          children: [
            a.jsx(Td, { children: "Teacher" }),
            a.jsx(Od, { to: "/teacher-signIn", children: "Login as Teacher" }),
          ],
        }),
      ],
    });
function Qb(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: RP } = Object.prototype,
  { getPrototypeOf: Yp } = Object,
  ju = ((e) => (t) => {
    const n = RP.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Wn = (e) => ((e = e.toLowerCase()), (t) => ju(t) === e),
  wu = (e) => (t) => typeof t === e,
  { isArray: Hs } = Array,
  ta = wu("undefined");
function FP(e) {
  return (
    e !== null &&
    !ta(e) &&
    e.constructor !== null &&
    !ta(e.constructor) &&
    Kt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Xb = Wn("ArrayBuffer");
function zP(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Xb(e.buffer)),
    t
  );
}
const $P = wu("string"),
  Kt = wu("function"),
  Jb = wu("number"),
  Su = (e) => e !== null && typeof e == "object",
  BP = (e) => e === !0 || e === !1,
  Ul = (e) => {
    if (ju(e) !== "object") return !1;
    const t = Yp(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  WP = Wn("Date"),
  HP = Wn("File"),
  VP = Wn("Blob"),
  UP = Wn("FileList"),
  GP = (e) => Su(e) && Kt(e.pipe),
  YP = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Kt(e.append) &&
          ((t = ju(e)) === "formdata" ||
            (t === "object" &&
              Kt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  qP = Wn("URLSearchParams"),
  KP = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Sa(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Hs(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = s.length;
    let l;
    for (r = 0; r < o; r++) (l = s[r]), t.call(null, e[l], l, e);
  }
}
function Zb(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const ej =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  tj = (e) => !ta(e) && e !== ej;
function df() {
  const { caseless: e } = (tj(this) && this) || {},
    t = {},
    n = (r, i) => {
      const s = (e && Zb(t, i)) || i;
      Ul(t[s]) && Ul(r)
        ? (t[s] = df(t[s], r))
        : Ul(r)
        ? (t[s] = df({}, r))
        : Hs(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Sa(arguments[r], n);
  return t;
}
const QP = (e, t, n, { allOwnKeys: r } = {}) => (
    Sa(
      t,
      (i, s) => {
        n && Kt(i) ? (e[s] = Qb(i, n)) : (e[s] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  XP = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  JP = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  ZP = (e, t, n, r) => {
    let i, s, o;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
        (o = i[s]), (!r || r(o, e, t)) && !l[o] && ((t[o] = e[o]), (l[o] = !0));
      e = n !== !1 && Yp(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  eI = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  tI = (e) => {
    if (!e) return null;
    if (Hs(e)) return e;
    let t = e.length;
    if (!Jb(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  nI = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Yp(Uint8Array)),
  rI = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const s = i.value;
      t.call(e, s[0], s[1]);
    }
  },
  iI = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  sI = Wn("HTMLFormElement"),
  oI = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  e0 = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  aI = Wn("RegExp"),
  nj = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Sa(n, (i, s) => {
      let o;
      (o = t(i, s, e)) !== !1 && (r[s] = o || i);
    }),
      Object.defineProperties(e, r);
  },
  lI = (e) => {
    nj(e, (t, n) => {
      if (Kt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Kt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  cI = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((s) => {
          n[s] = !0;
        });
      };
    return Hs(e) ? r(e) : r(String(e).split(t)), n;
  },
  uI = () => {},
  dI = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Dd = "abcdefghijklmnopqrstuvwxyz",
  t0 = "0123456789",
  rj = { DIGIT: t0, ALPHA: Dd, ALPHA_DIGIT: Dd + Dd.toUpperCase() + t0 },
  hI = (e = 16, t = rj.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function fI(e) {
  return !!(
    e &&
    Kt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const pI = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Su(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const s = Hs(r) ? [] : {};
            return (
              Sa(r, (o, l) => {
                const c = n(o, i + 1);
                !ta(c) && (s[l] = c);
              }),
              (t[i] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  gI = Wn("AsyncFunction"),
  mI = (e) => e && (Su(e) || Kt(e)) && Kt(e.then) && Kt(e.catch),
  P = {
    isArray: Hs,
    isArrayBuffer: Xb,
    isBuffer: FP,
    isFormData: YP,
    isArrayBufferView: zP,
    isString: $P,
    isNumber: Jb,
    isBoolean: BP,
    isObject: Su,
    isPlainObject: Ul,
    isUndefined: ta,
    isDate: WP,
    isFile: HP,
    isBlob: VP,
    isRegExp: aI,
    isFunction: Kt,
    isStream: GP,
    isURLSearchParams: qP,
    isTypedArray: nI,
    isFileList: UP,
    forEach: Sa,
    merge: df,
    extend: QP,
    trim: KP,
    stripBOM: XP,
    inherits: JP,
    toFlatObject: ZP,
    kindOf: ju,
    kindOfTest: Wn,
    endsWith: eI,
    toArray: tI,
    forEachEntry: rI,
    matchAll: iI,
    isHTMLForm: sI,
    hasOwnProperty: e0,
    hasOwnProp: e0,
    reduceDescriptors: nj,
    freezeMethods: lI,
    toObjectSet: cI,
    toCamelCase: oI,
    noop: uI,
    toFiniteNumber: dI,
    findKey: Zb,
    global: ej,
    isContextDefined: tj,
    ALPHABET: rj,
    generateString: hI,
    isSpecCompliantForm: fI,
    toJSONObject: pI,
    isAsyncFn: gI,
    isThenable: mI,
  };
function re(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
P.inherits(re, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: P.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const ij = re.prototype,
  sj = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  sj[e] = { value: e };
});
Object.defineProperties(re, sj);
Object.defineProperty(ij, "isAxiosError", { value: !0 });
re.from = (e, t, n, r, i, s) => {
  const o = Object.create(ij);
  return (
    P.toFlatObject(
      e,
      o,
      function (c) {
        return c !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    re.call(o, e.message, t, n, r, i),
    (o.cause = e),
    (o.name = e.name),
    s && Object.assign(o, s),
    o
  );
};
const xI = null;
function hf(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function oj(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function n0(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, s) {
          return (i = oj(i)), !n && s ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function vI(e) {
  return P.isArray(e) && !e.some(hf);
}
const yI = P.toFlatObject(P, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Cu(e, t, n) {
  if (!P.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = P.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, y) {
        return !P.isUndefined(y[g]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || d,
    s = n.dots,
    o = n.indexes,
    c = (n.Blob || (typeof Blob < "u" && Blob)) && P.isSpecCompliantForm(t);
  if (!P.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (P.isDate(p)) return p.toISOString();
    if (!c && P.isBlob(p))
      throw new re("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(p) || P.isTypedArray(p)
      ? c && typeof Blob == "function"
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function d(p, g, y) {
    let x = p;
    if (p && !y && typeof p == "object") {
      if (P.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (P.isArray(p) && vI(p)) ||
        ((P.isFileList(p) || P.endsWith(g, "[]")) && (x = P.toArray(p)))
      )
        return (
          (g = oj(g)),
          x.forEach(function (b, S) {
            !(P.isUndefined(b) || b === null) &&
              t.append(
                o === !0 ? n0([g], S, s) : o === null ? g : g + "[]",
                u(b)
              );
          }),
          !1
        );
    }
    return hf(p) ? !0 : (t.append(n0(y, g, s), u(p)), !1);
  }
  const h = [],
    f = Object.assign(yI, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: hf,
    });
  function m(p, g) {
    if (!P.isUndefined(p)) {
      if (h.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      h.push(p),
        P.forEach(p, function (x, v) {
          (!(P.isUndefined(x) || x === null) &&
            i.call(t, x, P.isString(v) ? v.trim() : v, g, f)) === !0 &&
            m(x, g ? g.concat(v) : [v]);
        }),
        h.pop();
    }
  }
  if (!P.isObject(e)) throw new TypeError("data must be an object");
  return m(e), t;
}
function r0(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function qp(e, t) {
  (this._pairs = []), e && Cu(e, this, t);
}
const aj = qp.prototype;
aj.append = function (t, n) {
  this._pairs.push([t, n]);
};
aj.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, r0);
      }
    : r0;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function bI(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function lj(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || bI,
    i = n && n.serialize;
  let s;
  if (
    (i
      ? (s = i(t, n))
      : (s = P.isURLSearchParams(t) ? t.toString() : new qp(t, n).toString(r)),
    s)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class i0 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    P.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const cj = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  jI = typeof URLSearchParams < "u" ? URLSearchParams : qp,
  wI = typeof FormData < "u" ? FormData : null,
  SI = typeof Blob < "u" ? Blob : null,
  CI = {
    isBrowser: !0,
    classes: { URLSearchParams: jI, FormData: wI, Blob: SI },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  uj = typeof window < "u" && typeof document < "u",
  _I = ((e) => uj && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  EI =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  kI = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: uj,
        hasStandardBrowserEnv: _I,
        hasStandardBrowserWebWorkerEnv: EI,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Mn = { ...kI, ...CI };
function PI(e, t) {
  return Cu(
    e,
    new Mn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, s) {
          return Mn.isNode && P.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function II(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function NI(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function dj(e) {
  function t(n, r, i, s) {
    let o = n[s++];
    if (o === "__proto__") return !0;
    const l = Number.isFinite(+o),
      c = s >= n.length;
    return (
      (o = !o && P.isArray(i) ? i.length : o),
      c
        ? (P.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !l)
        : ((!i[o] || !P.isObject(i[o])) && (i[o] = []),
          t(n, r, i[o], s) && P.isArray(i[o]) && (i[o] = NI(i[o])),
          !l)
    );
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {};
    return (
      P.forEachEntry(e, (r, i) => {
        t(II(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function AI(e, t, n) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ca = {
  transitional: cj,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        s = P.isObject(t);
      if ((s && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t)))
        return i ? JSON.stringify(dj(t)) : t;
      if (
        P.isArrayBuffer(t) ||
        P.isBuffer(t) ||
        P.isStream(t) ||
        P.isFile(t) ||
        P.isBlob(t)
      )
        return t;
      if (P.isArrayBufferView(t)) return t.buffer;
      if (P.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return PI(t, this.formSerializer).toString();
        if ((l = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return Cu(
            l ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return s || i ? (n.setContentType("application/json", !1), AI(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ca.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (t && P.isString(t) && ((r && !this.responseType) || i)) {
        const o = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (o)
            throw l.name === "SyntaxError"
              ? re.from(l, re.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Mn.classes.FormData, Blob: Mn.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
P.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ca.headers[e] = {};
});
const TI = P.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  OI = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (i = o.indexOf(":")),
              (n = o.substring(0, i).trim().toLowerCase()),
              (r = o.substring(i + 1).trim()),
              !(!n || (t[n] && TI[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  s0 = Symbol("internals");
function to(e) {
  return e && String(e).trim().toLowerCase();
}
function Gl(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(Gl) : String(e);
}
function DI(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const MI = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Md(e, t, n, r, i) {
  if (P.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!P.isString(t))) {
    if (P.isString(r)) return t.indexOf(r) !== -1;
    if (P.isRegExp(r)) return r.test(t);
  }
}
function LI(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function RI(e, t) {
  const n = P.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, s, o) {
        return this[r].call(this, t, i, s, o);
      },
      configurable: !0,
    });
  });
}
class Qt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function s(l, c, u) {
      const d = to(c);
      if (!d) throw new Error("header name must be a non-empty string");
      const h = P.findKey(i, d);
      (!h || i[h] === void 0 || u === !0 || (u === void 0 && i[h] !== !1)) &&
        (i[h || c] = Gl(l));
    }
    const o = (l, c) => P.forEach(l, (u, d) => s(u, d, c));
    return (
      P.isPlainObject(t) || t instanceof this.constructor
        ? o(t, n)
        : P.isString(t) && (t = t.trim()) && !MI(t)
        ? o(OI(t), n)
        : t != null && s(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = to(t)), t)) {
      const r = P.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return DI(i);
        if (P.isFunction(n)) return n.call(this, i, r);
        if (P.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = to(t)), t)) {
      const r = P.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Md(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (((o = to(o)), o)) {
        const l = P.findKey(r, o);
        l && (!n || Md(r, r[l], l, n)) && (delete r[l], (i = !0));
      }
    }
    return P.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Md(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      P.forEach(this, (i, s) => {
        const o = P.findKey(r, s);
        if (o) {
          (n[o] = Gl(i)), delete n[s];
          return;
        }
        const l = t ? LI(s) : String(s).trim();
        l !== s && delete n[s], (n[l] = Gl(i)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      P.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && P.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[s0] = this[s0] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(o) {
      const l = to(o);
      r[l] || (RI(i, o), (r[l] = !0));
    }
    return P.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Qt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
P.reduceDescriptors(Qt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
P.freezeMethods(Qt);
function Ld(e, t) {
  const n = this || Ca,
    r = t || n,
    i = Qt.from(r.headers);
  let s = r.data;
  return (
    P.forEach(e, function (l) {
      s = l.call(n, s, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function hj(e) {
  return !!(e && e.__CANCEL__);
}
function _a(e, t, n) {
  re.call(this, e ?? "canceled", re.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
P.inherits(_a, re, { __CANCEL__: !0 });
function FI(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new re(
          "Request failed with status code " + n.status,
          [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const zI = Mn.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, i, s) {
        const o = [e + "=" + encodeURIComponent(t)];
        P.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
          P.isString(r) && o.push("path=" + r),
          P.isString(i) && o.push("domain=" + i),
          s === !0 && o.push("secure"),
          (document.cookie = o.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function $I(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function BI(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function fj(e, t) {
  return e && !$I(t) ? BI(e, t) : t;
}
const WI = Mn.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function i(s) {
        let o = s;
        return (
          t && (n.setAttribute("href", o), (o = n.href)),
          n.setAttribute("href", o),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (o) {
          const l = P.isString(o) ? i(o) : o;
          return l.protocol === r.protocol && l.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function HI(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function VI(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    s = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const u = Date.now(),
        d = r[s];
      o || (o = u), (n[i] = c), (r[i] = u);
      let h = s,
        f = 0;
      for (; h !== i; ) (f += n[h++]), (h = h % e);
      if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), u - o < t)) return;
      const m = d && u - d;
      return m ? Math.round((f * 1e3) / m) : void 0;
    }
  );
}
function o0(e, t) {
  let n = 0;
  const r = VI(50, 250);
  return (i) => {
    const s = i.loaded,
      o = i.lengthComputable ? i.total : void 0,
      l = s - n,
      c = r(l),
      u = s <= o;
    n = s;
    const d = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && o && u ? (o - s) / c : void 0,
      event: i,
    };
    (d[t ? "download" : "upload"] = !0), e(d);
  };
}
const UI = typeof XMLHttpRequest < "u",
  GI =
    UI &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data;
        const s = Qt.from(e.headers).normalize();
        let { responseType: o, withXSRFToken: l } = e,
          c;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(c),
            e.signal && e.signal.removeEventListener("abort", c);
        }
        let d;
        if (P.isFormData(i)) {
          if (Mn.hasStandardBrowserEnv || Mn.hasStandardBrowserWebWorkerEnv)
            s.setContentType(!1);
          else if ((d = s.getContentType()) !== !1) {
            const [g, ...y] = d
              ? d
                  .split(";")
                  .map((x) => x.trim())
                  .filter(Boolean)
              : [];
            s.setContentType([g || "multipart/form-data", ...y].join("; "));
          }
        }
        let h = new XMLHttpRequest();
        if (e.auth) {
          const g = e.auth.username || "",
            y = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          s.set("Authorization", "Basic " + btoa(g + ":" + y));
        }
        const f = fj(e.baseURL, e.url);
        h.open(e.method.toUpperCase(), lj(f, e.params, e.paramsSerializer), !0),
          (h.timeout = e.timeout);
        function m() {
          if (!h) return;
          const g = Qt.from(
              "getAllResponseHeaders" in h && h.getAllResponseHeaders()
            ),
            x = {
              data:
                !o || o === "text" || o === "json"
                  ? h.responseText
                  : h.response,
              status: h.status,
              statusText: h.statusText,
              headers: g,
              config: e,
              request: h,
            };
          FI(
            function (b) {
              n(b), u();
            },
            function (b) {
              r(b), u();
            },
            x
          ),
            (h = null);
        }
        if (
          ("onloadend" in h
            ? (h.onloadend = m)
            : (h.onreadystatechange = function () {
                !h ||
                  h.readyState !== 4 ||
                  (h.status === 0 &&
                    !(h.responseURL && h.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(m);
              }),
          (h.onabort = function () {
            h &&
              (r(new re("Request aborted", re.ECONNABORTED, e, h)), (h = null));
          }),
          (h.onerror = function () {
            r(new re("Network Error", re.ERR_NETWORK, e, h)), (h = null);
          }),
          (h.ontimeout = function () {
            let y = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const x = e.transitional || cj;
            e.timeoutErrorMessage && (y = e.timeoutErrorMessage),
              r(
                new re(
                  y,
                  x.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
                  e,
                  h
                )
              ),
              (h = null);
          }),
          Mn.hasStandardBrowserEnv &&
            (l && P.isFunction(l) && (l = l(e)), l || (l !== !1 && WI(f))))
        ) {
          const g =
            e.xsrfHeaderName && e.xsrfCookieName && zI.read(e.xsrfCookieName);
          g && s.set(e.xsrfHeaderName, g);
        }
        i === void 0 && s.setContentType(null),
          "setRequestHeader" in h &&
            P.forEach(s.toJSON(), function (y, x) {
              h.setRequestHeader(x, y);
            }),
          P.isUndefined(e.withCredentials) ||
            (h.withCredentials = !!e.withCredentials),
          o && o !== "json" && (h.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            h.addEventListener("progress", o0(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            h.upload &&
            h.upload.addEventListener("progress", o0(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((c = (g) => {
              h &&
                (r(!g || g.type ? new _a(null, e, h) : g),
                h.abort(),
                (h = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(c),
            e.signal &&
              (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
        const p = HI(f);
        if (p && Mn.protocols.indexOf(p) === -1) {
          r(new re("Unsupported protocol " + p + ":", re.ERR_BAD_REQUEST, e));
          return;
        }
        h.send(i || null);
      });
    },
  ff = { http: xI, xhr: GI };
P.forEach(ff, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const a0 = (e) => `- ${e}`,
  YI = (e) => P.isFunction(e) || e === null || e === !1,
  pj = {
    getAdapter: (e) => {
      e = P.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let o;
        if (
          ((r = n),
          !YI(n) && ((r = ff[(o = String(n)).toLowerCase()]), r === void 0))
        )
          throw new re(`Unknown adapter '${o}'`);
        if (r) break;
        i[o || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(i).map(
          ([l, c]) =>
            `adapter ${l} ` +
            (c === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? s.length > 1
            ? `since :
` +
              s.map(a0).join(`
`)
            : " " + a0(s[0])
          : "as no adapter specified";
        throw new re(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: ff,
  };
function Rd(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new _a(null, e);
}
function l0(e) {
  return (
    Rd(e),
    (e.headers = Qt.from(e.headers)),
    (e.data = Ld.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    pj
      .getAdapter(e.adapter || Ca.adapter)(e)
      .then(
        function (r) {
          return (
            Rd(e),
            (r.data = Ld.call(e, e.transformResponse, r)),
            (r.headers = Qt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            hj(r) ||
              (Rd(e),
              r &&
                r.response &&
                ((r.response.data = Ld.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Qt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const c0 = (e) => (e instanceof Qt ? { ...e } : e);
function Os(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, h) {
    return P.isPlainObject(u) && P.isPlainObject(d)
      ? P.merge.call({ caseless: h }, u, d)
      : P.isPlainObject(d)
      ? P.merge({}, d)
      : P.isArray(d)
      ? d.slice()
      : d;
  }
  function i(u, d, h) {
    if (P.isUndefined(d)) {
      if (!P.isUndefined(u)) return r(void 0, u, h);
    } else return r(u, d, h);
  }
  function s(u, d) {
    if (!P.isUndefined(d)) return r(void 0, d);
  }
  function o(u, d) {
    if (P.isUndefined(d)) {
      if (!P.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function l(u, d, h) {
    if (h in t) return r(u, d);
    if (h in e) return r(void 0, u);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l,
    headers: (u, d) => i(c0(u), c0(d), !0),
  };
  return (
    P.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const h = c[d] || i,
        f = h(e[d], t[d], d);
      (P.isUndefined(f) && h !== l) || (n[d] = f);
    }),
    n
  );
}
const gj = "1.6.8",
  Kp = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Kp[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const u0 = {};
Kp.transitional = function (t, n, r) {
  function i(s, o) {
    return (
      "[Axios v" +
      gj +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (s, o, l) => {
    if (t === !1)
      throw new re(
        i(o, " has been removed" + (n ? " in " + n : "")),
        re.ERR_DEPRECATED
      );
    return (
      n &&
        !u0[o] &&
        ((u0[o] = !0),
        console.warn(
          i(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, o, l) : !0
    );
  };
};
function qI(e, t, n) {
  if (typeof e != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i],
      o = t[s];
    if (o) {
      const l = e[s],
        c = l === void 0 || o(l, s, e);
      if (c !== !0)
        throw new re("option " + s + " must be " + c, re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new re("Unknown option " + s, re.ERR_BAD_OPTION);
  }
}
const pf = { assertOptions: qI, validators: Kp },
  Sr = pf.validators;
class ki {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new i0(), response: new i0() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace
          ? Error.captureStackTrace((i = {}))
          : (i = new Error());
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? s &&
            !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + s)
          : (r.stack = s);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Os(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 &&
      pf.assertOptions(
        r,
        {
          silentJSONParsing: Sr.transitional(Sr.boolean),
          forcedJSONParsing: Sr.transitional(Sr.boolean),
          clarifyTimeoutError: Sr.transitional(Sr.boolean),
        },
        !1
      ),
      i != null &&
        (P.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : pf.assertOptions(
              i,
              { encode: Sr.function, serialize: Sr.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = s && P.merge(s.common, s[n.method]);
    s &&
      P.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (p) => {
          delete s[p];
        }
      ),
      (n.headers = Qt.concat(o, s));
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((c = c && g.synchronous), l.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (g) {
      u.push(g.fulfilled, g.rejected);
    });
    let d,
      h = 0,
      f;
    if (!c) {
      const p = [l0.bind(this), void 0];
      for (
        p.unshift.apply(p, l),
          p.push.apply(p, u),
          f = p.length,
          d = Promise.resolve(n);
        h < f;

      )
        d = d.then(p[h++], p[h++]);
      return d;
    }
    f = l.length;
    let m = n;
    for (h = 0; h < f; ) {
      const p = l[h++],
        g = l[h++];
      try {
        m = p(m);
      } catch (y) {
        g.call(this, y);
        break;
      }
    }
    try {
      d = l0.call(this, m);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, f = u.length; h < f; ) d = d.then(u[h++], u[h++]);
    return d;
  }
  getUri(t) {
    t = Os(this.defaults, t);
    const n = fj(t.baseURL, t.url);
    return lj(n, t.params, t.paramsSerializer);
  }
}
P.forEach(["delete", "get", "head", "options"], function (t) {
  ki.prototype[t] = function (n, r) {
    return this.request(
      Os(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
P.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, o, l) {
      return this.request(
        Os(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: o,
        })
      );
    };
  }
  (ki.prototype[t] = n()), (ki.prototype[t + "Form"] = n(!0));
});
class Qp {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const o = new Promise((l) => {
          r.subscribe(l), (s = l);
        }).then(i);
        return (
          (o.cancel = function () {
            r.unsubscribe(s);
          }),
          o
        );
      }),
      t(function (s, o, l) {
        r.reason || ((r.reason = new _a(s, o, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Qp(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
function KI(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function QI(e) {
  return P.isObject(e) && e.isAxiosError === !0;
}
const gf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(gf).forEach(([e, t]) => {
  gf[t] = e;
});
function mj(e) {
  const t = new ki(e),
    n = Qb(ki.prototype.request, t);
  return (
    P.extend(n, ki.prototype, t, { allOwnKeys: !0 }),
    P.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return mj(Os(e, i));
    }),
    n
  );
}
const T = mj(Ca);
T.Axios = ki;
T.CanceledError = _a;
T.CancelToken = Qp;
T.isCancel = hj;
T.VERSION = gj;
T.toFormData = Cu;
T.AxiosError = re;
T.Cancel = T.CanceledError;
T.all = function (t) {
  return Promise.all(t);
};
T.spread = KI;
T.isAxiosError = QI;
T.mergeConfig = Os;
T.AxiosHeaders = Qt;
T.formToJSON = (e) => dj(P.isHTMLForm(e) ? new FormData(e) : e);
T.getAdapter = pj.getAdapter;
T.HttpStatusCode = gf;
T.default = T;
const Rt = ({ element: e }) => {
    const [t, n] = w.useState(!1),
      [r, i] = w.useState(!0),
      s = ri();
    return (
      w.useEffect(() => {
        (async () => {
          try {
            const c = new URLSearchParams(s.search).get("token");
            c && localStorage.setItem("token", c);
            const u = localStorage.getItem("token");
            if ((console.log("Token:", u), !u)) {
              n(!1), i(!1);
              return;
            }
            const d = await T.get(
              "https://bticlz.onrender.com/api/v1/users/auth/admin/check",
              { headers: { Authorization: `Bearer ${u}` } }
            );
            n(d.data.success);
          } catch (l) {
            console.error("Authentication check failed:", l), n(!1);
          } finally {
            i(!1);
          }
        })();
      }, [s.search]),
      r
        ? a.jsx("div", { children: "Loading..." })
        : t
        ? a.jsx(e, {})
        : a.jsx(ja, { to: "/admin-signIn" })
    );
  },
  Vn = ({ element: e }) => {
    const [t, n] = w.useState(!1),
      [r, i] = w.useState(!0),
      s = ri();
    return (
      w.useEffect(() => {
        (async () => {
          try {
            const c = new URLSearchParams(s.search).get("token");
            c && localStorage.setItem("token", c);
            const u = localStorage.getItem("token");
            if ((console.log("Token:", u), !u)) {
              n(!1), i(!1);
              return;
            }
            const d = await T.get(
              "https://bticlz.onrender.com/api/v1/users/auth/students/check",
              { headers: { Authorization: `Bearer ${u}` } }
            );
            console.log("Authentication status:", d.data), n(d.data.success);
          } catch (l) {
            console.error("Authentication check failed:", l), n(!1);
          } finally {
            i(!1);
          }
        })();
      }, [s.search]),
      r
        ? a.jsx("div", { children: "Loading..." })
        : t
        ? a.jsx(e, {})
        : a.jsx(ja, { to: "/student-signIn" })
    );
  },
  cn = ({ element: e }) => {
    const [t, n] = w.useState(!1),
      [r, i] = w.useState(!0),
      s = ri();
    return (
      w.useEffect(() => {
        (async () => {
          try {
            const c = new URLSearchParams(s.search).get("token");
            c && localStorage.setItem("token", c);
            const u = localStorage.getItem("token");
            if ((console.log("Token:", u), !u)) {
              n(!1), i(!1);
              return;
            }
            const d = await T.get(
              "https://bticlz.onrender.com/api/v1/users/auth/teachers/check",
              { headers: { Authorization: `Bearer ${u}` } }
            );
            console.log("Authentication status:", d.data), n(d.data.success);
          } catch (l) {
            console.error("Authentication check failed:", l), n(!1);
          } finally {
            i(!1);
          }
        })();
      }, [s.search]),
      r
        ? a.jsx("div", { children: "Loading..." })
        : t
        ? a.jsx(e, {})
        : a.jsx(ja, { to: "/teacher-signIn" })
    );
  },
  XI = j.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom right, orange, #401902, #edd68c);
  min-height: 100vh; /* Full height of the viewport */
`,
  JI = j.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 340px;
  width: 80%;
  max-width: 300px; /* Limit form width */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,
  d0 = j.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  ZI = j(tn)`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: #401902;
  color: white;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: orange;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`,
  eN = () => {
    const [e, t] = w.useState(""),
      [n, r] = w.useState(""),
      i = Ot(),
      s = async (l) => {
        l.preventDefault();
        try {
          const c = await T.post(
            "https://bticlz.onrender.com/api/v1/users/admin/signin",
            { email: e, password: n }
          );
          localStorage.setItem("token", c.data.token), i("/admin/dashboard");
        } catch (c) {
          console.error("Error signing in:", c);
        }
      },
      o = () => {
        window.location.href =
          "https://bticlz.onrender.com/api/v1/users/auth/google";
      };
    return a.jsxs(XI, {
      children: [
        a.jsx("h2", { children: "Admin Sign In" }),
        a.jsxs(JI, {
          children: [
            a.jsx("h3", { children: "Welcome to BTI" }),
            a.jsx(d0, {
              type: "email",
              placeholder: "Email",
              value: e,
              onChange: (l) => t(l.target.value),
              required: !0,
            }),
            a.jsx(d0, {
              type: "password",
              placeholder: "Password",
              value: n,
              onChange: (l) => r(l.target.value),
              required: !0,
            }),
            a.jsx(ZI, { type: "submit", onClick: s, children: "Sign In" }),
            a.jsx(Gp, {
              to: "/admin/register",
              style: { padding: "15px" },
              children: "Admin Register",
            }),
            a.jsx("button", {
              type: "button",
              onClick: o,
              children: "Sign in with Google",
            }),
          ],
        }),
      ],
    });
  },
  tN = j.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom right, orange, #401902, #edd68c);
  min-height: 100vh; /* Full height of the viewport */
`,
  nN = j.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 340px;
  width: 80%;
  max-width: 300px; /* Limit form width */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,
  h0 = j.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  rN = j(tn)`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: #ff4500;
  color: white;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: orange;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`,
  iN = () => {
    const [e, t] = w.useState(""),
      [n, r] = w.useState(""),
      i = Ot(),
      s = async (l) => {
        l.preventDefault();
        try {
          const c = await T.post(
            "https://bticlz.onrender.com/api/v1/users/student/signin",
            { email: e, password: n }
          );
          console.log("Student Sign In:", { email: e, password: n }),
            localStorage.setItem("token", c.data.token),
            i("/student/dashboard");
        } catch (c) {
          console.error("Student Sign In failed:", c);
        }
      },
      o = () => {
        window.location.href =
          "https://bticlz.onrender.com/api/v1/users/auth/google-student";
      };
    return a.jsxs(tN, {
      children: [
        a.jsx("h2", { children: "Student Sign In" }),
        a.jsxs(nN, {
          onSubmit: s,
          children: [
            a.jsx("h3", { children: "Welcome to BTI" }),
            a.jsx(h0, {
              type: "email",
              placeholder: "Email",
              value: e,
              onChange: (l) => t(l.target.value),
              required: !0,
            }),
            a.jsx(h0, {
              type: "password",
              placeholder: "Password",
              value: n,
              onChange: (l) => r(l.target.value),
              required: !0,
            }),
            a.jsx(rN, { type: "submit", onClick: s, children: "Sign In" }),
            a.jsx(Gp, {
              to: "/students/register",
              style: { paddingBottom: "10px", fontSize: "16px" },
              children: "Create Account",
            }),
            a.jsx("button", {
              type: "button",
              onClick: o,
              children: "Sign in with Google",
            }),
          ],
        }),
      ],
    });
  },
  sN = j.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom right, orange, #401902, #edd68c);
  min-height: 100vh; /* Full height of the viewport */
`,
  oN = j.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 340px;
  width: 80%;
  max-width: 300px; /* Limit form width */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,
  f0 = j.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  aN = j(tn)`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: #ff4500;
  color: white;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: orange;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`,
  lN = () => {
    const [e, t] = w.useState(""),
      [n, r] = w.useState(""),
      i = Ot(),
      s = async (l) => {
        l.preventDefault();
        try {
          const c = await T.post(
            "https://bticlz.onrender.com/api/v1/users/teacher/signin",
            { email: e, password: n }
          );
          localStorage.setItem("token", c.data.token), i("/teacher/dashboard");
        } catch (c) {
          console.error("Teacher Sign In failed:", c);
        }
      },
      o = () => {
        window.location.href =
          "https://bticlz.onrender.com/api/v1/users/auth/google-teacher";
      };
    return a.jsxs(sN, {
      children: [
        a.jsx("h2", { children: "Teacher Sign In" }),
        a.jsxs(oN, {
          children: [
            a.jsx("h3", { children: "Welcome to BTI" }),
            a.jsx(f0, {
              type: "email",
              placeholder: "Email",
              value: e,
              onChange: (l) => t(l.target.value),
              required: !0,
            }),
            a.jsx(f0, {
              type: "password",
              placeholder: "Password",
              value: n,
              onChange: (l) => r(l.target.value),
              required: !0,
            }),
            a.jsx(aN, { type: "submit", onClick: s, children: "Sign In" }),
            a.jsx(Gp, {
              to: "/teachers/register",
              style: { paddingBottom: "10px", fontSize: "16px" },
              children: "Create Account",
            }),
            a.jsx("button", {
              type: "button",
              onClick: o,
              children: "Sign in with Google",
            }),
          ],
        }),
      ],
    });
  },
  xj = w.createContext(),
  cN = () => w.useContext(xj),
  nn = ({ children: e }) => {
    const [t, n] = w.useState(!0),
      r = () => n(!t);
    return a.jsx(xj.Provider, {
      value: { isOpen: t, toggleSidebar: r },
      children: e,
    });
  };
function na(e) {
  return yt({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783",
        },
        child: [],
      },
    ],
  })(e);
}
function vj(e) {
  return yt({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z",
        },
        child: [],
      },
    ],
  })(e);
}
function Xp(e) {
  return yt({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z",
        },
        child: [],
      },
    ],
  })(e);
}
function Jp(e) {
  return yt({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2",
        },
        child: [],
      },
    ],
  })(e);
}
function Zp(e) {
  return yt({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1",
        },
        child: [],
      },
    ],
  })(e);
}
function eg(e) {
  return yt({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z",
        },
        child: [],
      },
    ],
  })(e);
}
function tg(e) {
  return yt({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M0 0h1v15h15v1H0zm14.817 11.887a.5.5 0 0 0 .07-.704l-4.5-5.5a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61 4.15 5.073a.5.5 0 0 0 .704.07",
        },
        child: [],
      },
    ],
  })(e);
}
function ng(e) {
  return yt({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07",
        },
        child: [],
      },
    ],
  })(e);
}
function ra(e) {
  return yt({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
        },
        child: [],
      },
    ],
  })(e);
}
function yj(e) {
  return yt({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z",
        },
        child: [],
      },
    ],
  })(e);
}
const rg = "/assets/logo-DupVcPem.png",
  uN = j.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen: e }) => (e ? "250px" : "80px")};
  height: 100%;
  background-color: #2c3e50;
  color: white;
  overflow-y: auto;
  padding-top: 60px;
  transition: width 0.3s ease;
  z-index: 100;
`,
  dN = j.div`
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`,
  hN = j.ul`
  list-style: none;
  padding: 0;
`,
  Ft = j.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #34495e;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #34495e;
  }
`,
  zt = j(tn)`
  text-decoration: none;
  color: white;
  margin-left: 10px;
`,
  $t = j.div`
  margin-right: 10px;
`,
  fN = j.img`
  width: ${({ isOpen: e }) => (e ? "150px" : "50px")};
  cursor: pointer;
  height: auto;
  transition: width 0.3s ease;
`,
  pN = j.div`
  position: absolute;
  top: 20px;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: #34495e;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,
  gN = j.span`
  color: white;
  font-size: 20px;
  transform: ${({ isOpen: e }) => (e ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`,
  mN = j.div`
  margin-left: ${({ isOpen: e }) => (e ? "265px" : "80px")};
  transition: margin-left 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`,
  xN = j.div`
  width: 100%;
  max-width: 1200px;
`,
  rn = ({ children: e }) => {
    const { isOpen: t, toggleSidebar: n } = cN();
    return a.jsxs(a.Fragment, {
      children: [
        a.jsxs(uN, {
          isOpen: t,
          children: [
            a.jsx(dN, {
              children: a.jsx(tn, {
                to: "/",
                children: a.jsx(fN, { src: rg, alt: "Logo", isOpen: t }),
              }),
            }),
            a.jsxs(hN, {
              children: [
                a.jsxs(Ft, {
                  children: [
                    a.jsx($t, { children: a.jsx(ng, {}) }),
                    a.jsx(zt, {
                      to: "/admin/dashboard",
                      children: "Dashboard",
                    }),
                  ],
                }),
                a.jsxs(Ft, {
                  children: [
                    a.jsx($t, { children: a.jsx(ra, {}) }),
                    a.jsx(zt, { to: "/admin/classes", children: "Classes" }),
                  ],
                }),
                a.jsxs(Ft, {
                  children: [
                    a.jsx($t, { children: a.jsx(ra, {}) }),
                    a.jsx(zt, { to: "/admin/students", children: "Students" }),
                  ],
                }),
                a.jsxs(Ft, {
                  children: [
                    a.jsx($t, { children: a.jsx(yj, {}) }),
                    a.jsx(zt, { to: "/admin/teachers", children: "Teachers" }),
                  ],
                }),
                a.jsxs(Ft, {
                  children: [
                    a.jsx($t, { children: a.jsx(Zp, {}) }),
                    a.jsx(zt, {
                      to: "/admin/assignments",
                      children: "Assignments",
                    }),
                  ],
                }),
                a.jsxs(Ft, {
                  children: [
                    a.jsx($t, { children: a.jsx(na, {}) }),
                    a.jsx(zt, { to: "/admin/exams", children: "Exams" }),
                  ],
                }),
                a.jsxs(Ft, {
                  children: [
                    a.jsx($t, { children: a.jsx(tg, {}) }),
                    a.jsx(zt, {
                      to: "/admin/performance",
                      children: "Performance",
                    }),
                  ],
                }),
                a.jsxs(Ft, {
                  children: [
                    a.jsx($t, { children: a.jsx(Xp, {}) }),
                    a.jsx(zt, {
                      to: "/admin/attendance",
                      children: "Attendance",
                    }),
                  ],
                }),
                a.jsxs(Ft, {
                  children: [
                    a.jsx($t, { children: a.jsx(na, {}) }),
                    a.jsx(zt, { to: "/admin/library", children: "Library" }),
                  ],
                }),
                a.jsxs(Ft, {
                  children: [
                    a.jsx($t, { children: a.jsx(Jp, {}) }),
                    a.jsx(zt, {
                      to: "/admin/communication",
                      children: "Announcement",
                    }),
                  ],
                }),
                a.jsxs(Ft, {
                  children: [
                    a.jsx($t, { children: a.jsx(vj, {}) }),
                    a.jsx(zt, {
                      to: "/admin/events",
                      children: "Events & Calendar",
                    }),
                  ],
                }),
                a.jsxs(Ft, {
                  children: [
                    a.jsx($t, { children: a.jsx(eg, {}) }),
                    a.jsx(zt, {
                      to: "/admin/settings",
                      children: "Settings & Profile",
                    }),
                  ],
                }),
              ],
            }),
            a.jsx(pN, {
              onClick: n,
              children: a.jsx(gN, { isOpen: t, children: "▲" }),
            }),
          ],
        }),
        a.jsx(mN, { isOpen: t, children: a.jsx(xN, { children: e }) }),
      ],
    });
  };
function bj(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = bj(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Gt() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = bj(e)) && (r && (r += " "), (r += t));
  return r;
}
const vN = (e, t, n, r) => {
    if (
      n === "length" ||
      n === "prototype" ||
      n === "arguments" ||
      n === "caller"
    )
      return;
    const i = Object.getOwnPropertyDescriptor(e, n),
      s = Object.getOwnPropertyDescriptor(t, n);
    (!yN(i, s) && r) || Object.defineProperty(e, n, s);
  },
  yN = function (e, t) {
    return (
      e === void 0 ||
      e.configurable ||
      (e.writable === t.writable &&
        e.enumerable === t.enumerable &&
        e.configurable === t.configurable &&
        (e.writable || e.value === t.value))
    );
  },
  bN = (e, t) => {
    const n = Object.getPrototypeOf(t);
    n !== Object.getPrototypeOf(e) && Object.setPrototypeOf(e, n);
  },
  jN = (e, t) => `/* Wrapped ${e}*/
${t}`,
  wN = Object.getOwnPropertyDescriptor(Function.prototype, "toString"),
  SN = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name"),
  CN = (e, t, n) => {
    const r = n === "" ? "" : `with ${n.trim()}() `,
      i = jN.bind(null, r, t.toString());
    Object.defineProperty(i, "name", SN),
      Object.defineProperty(e, "toString", { ...wN, value: i });
  },
  _N = (e, t, { ignoreNonConfigurable: n = !1 } = {}) => {
    const { name: r } = e;
    for (const i of Reflect.ownKeys(t)) vN(e, t, i, n);
    return bN(e, t), CN(e, t, r), e;
  };
var EN = _N,
  mf = { exports: {} },
  kN = () => {
    const e = {};
    return (
      (e.promise = new Promise((t, n) => {
        (e.resolve = t), (e.reject = n);
      })),
      e
    );
  };
(function (e, t) {
  var n =
      (Ra && Ra.__awaiter) ||
      function (o, l, c, u) {
        return new (c || (c = Promise))(function (d, h) {
          function f(g) {
            try {
              p(u.next(g));
            } catch (y) {
              h(y);
            }
          }
          function m(g) {
            try {
              p(u.throw(g));
            } catch (y) {
              h(y);
            }
          }
          function p(g) {
            g.done
              ? d(g.value)
              : new c(function (y) {
                  y(g.value);
                }).then(f, m);
          }
          p((u = u.apply(o, l || [])).next());
        });
      },
    r =
      (Ra && Ra.__importDefault) ||
      function (o) {
        return o && o.__esModule ? o : { default: o };
      };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const i = r(kN);
  function s(o, l = "maxAge") {
    let c, u, d;
    const h = () =>
        n(this, void 0, void 0, function* () {
          if (c !== void 0) return;
          const p = (g) =>
            n(this, void 0, void 0, function* () {
              d = i.default();
              const y = g[1][l] - Date.now();
              if (y <= 0) {
                o.delete(g[0]), d.resolve();
                return;
              }
              return (
                (c = g[0]),
                (u = setTimeout(() => {
                  o.delete(g[0]), d && d.resolve();
                }, y)),
                typeof u.unref == "function" && u.unref(),
                d.promise
              );
            });
          try {
            for (const g of o) yield p(g);
          } catch {}
          c = void 0;
        }),
      f = () => {
        (c = void 0),
          u !== void 0 && (clearTimeout(u), (u = void 0)),
          d !== void 0 && (d.reject(void 0), (d = void 0));
      },
      m = o.set.bind(o);
    return (
      (o.set = (p, g) => {
        o.has(p) && o.delete(p);
        const y = m(p, g);
        return c && c === p && f(), h(), y;
      }),
      h(),
      o
    );
  }
  (t.default = s), (e.exports = s), (e.exports.default = s);
})(mf, mf.exports);
var PN = mf.exports;
const IN = EN,
  NN = PN,
  Fd = new WeakMap(),
  jj = new WeakMap(),
  Tc = (e, { cacheKey: t, cache: n = new Map(), maxAge: r } = {}) => {
    typeof r == "number" && NN(n);
    const i = function (...s) {
      const o = t ? t(s) : s[0],
        l = n.get(o);
      if (l) return l.data;
      const c = e.apply(this, s);
      return (
        n.set(o, {
          data: c,
          maxAge: r ? Date.now() + r : Number.POSITIVE_INFINITY,
        }),
        c
      );
    };
    return IN(i, e, { ignoreNonConfigurable: !0 }), jj.set(i, n), i;
  };
Tc.decorator =
  (e = {}) =>
  (t, n, r) => {
    const i = t[n];
    if (typeof i != "function")
      throw new TypeError("The decorated value must be a function");
    delete r.value,
      delete r.writable,
      (r.get = function () {
        if (!Fd.has(this)) {
          const s = Tc(i, e);
          return Fd.set(this, s), s;
        }
        return Fd.get(this);
      });
  };
Tc.clear = (e) => {
  const t = jj.get(e);
  if (!t) throw new TypeError("Can't clear a function that was not memoized!");
  if (typeof t.clear != "function")
    throw new TypeError("The cache Map can't be cleared!");
  t.clear();
};
var AN = Tc;
const wj = Zv(AN);
function TN(e) {
  return typeof e == "string";
}
function ON(e, t, n) {
  return n.indexOf(e) === t;
}
function DN(e) {
  return e.toLowerCase() === e;
}
function p0(e) {
  return e.indexOf(",") === -1 ? e : e.split(",");
}
function xf(e) {
  if (!e) return e;
  if (e === "C" || e === "posix" || e === "POSIX") return "en-US";
  if (e.indexOf(".") !== -1) {
    var t = e.split(".")[0],
      n = t === void 0 ? "" : t;
    return xf(n);
  }
  if (e.indexOf("@") !== -1) {
    var r = e.split("@")[0],
      n = r === void 0 ? "" : r;
    return xf(n);
  }
  if (e.indexOf("-") === -1 || !DN(e)) return e;
  var i = e.split("-"),
    s = i[0],
    o = i[1],
    l = o === void 0 ? "" : o;
  return "".concat(s, "-").concat(l.toUpperCase());
}
function MN(e) {
  var t = e === void 0 ? {} : e,
    n = t.useFallbackLocale,
    r = n === void 0 ? !0 : n,
    i = t.fallbackLocale,
    s = i === void 0 ? "en-US" : i,
    o = [];
  if (typeof navigator < "u") {
    for (
      var l = navigator.languages || [], c = [], u = 0, d = l;
      u < d.length;
      u++
    ) {
      var h = d[u];
      c = c.concat(p0(h));
    }
    var f = navigator.language,
      m = f && p0(f);
    o = o.concat(c, m);
  }
  return r && o.push(s), o.filter(TN).map(xf).filter(ON);
}
var LN = wj(MN, { cacheKey: JSON.stringify });
function RN(e) {
  return LN(e)[0] || null;
}
var Sj = wj(RN, { cacheKey: JSON.stringify });
function gr(e, t, n) {
  return function (i, s) {
    s === void 0 && (s = n);
    var o = e(i) + s;
    return t(o);
  };
}
function Ea(e) {
  return function (n) {
    return new Date(e(n).getTime() - 1);
  };
}
function ka(e, t) {
  return function (r) {
    return [e(r), t(r)];
  };
}
function ye(e) {
  if (e instanceof Date) return e.getFullYear();
  if (typeof e == "number") return e;
  var t = parseInt(e, 10);
  if (typeof e == "string" && !isNaN(t)) return t;
  throw new Error("Failed to get year from date: ".concat(e, "."));
}
function ii(e) {
  if (e instanceof Date) return e.getMonth();
  throw new Error("Failed to get month from date: ".concat(e, "."));
}
function _u(e) {
  if (e instanceof Date) return e.getDate();
  throw new Error("Failed to get year from date: ".concat(e, "."));
}
function Vs(e) {
  var t = ye(e),
    n = t + ((-t + 1) % 100),
    r = new Date();
  return r.setFullYear(n, 0, 1), r.setHours(0, 0, 0, 0), r;
}
var FN = gr(ye, Vs, -100),
  Cj = gr(ye, Vs, 100),
  ig = Ea(Cj),
  zN = gr(ye, ig, -100),
  _j = ka(Vs, ig);
function si(e) {
  var t = ye(e),
    n = t + ((-t + 1) % 10),
    r = new Date();
  return r.setFullYear(n, 0, 1), r.setHours(0, 0, 0, 0), r;
}
var Ej = gr(ye, si, -10),
  sg = gr(ye, si, 10),
  Eu = Ea(sg),
  kj = gr(ye, Eu, -10),
  Pj = ka(si, Eu);
function Us(e) {
  var t = ye(e),
    n = new Date();
  return n.setFullYear(t, 0, 1), n.setHours(0, 0, 0, 0), n;
}
var Ij = gr(ye, Us, -1),
  og = gr(ye, Us, 1),
  ku = Ea(og),
  Nj = gr(ye, ku, -1),
  $N = ka(Us, ku);
function ag(e, t) {
  return function (r, i) {
    i === void 0 && (i = t);
    var s = ye(r),
      o = ii(r) + i,
      l = new Date();
    return l.setFullYear(s, o, 1), l.setHours(0, 0, 0, 0), e(l);
  };
}
function Bi(e) {
  var t = ye(e),
    n = ii(e),
    r = new Date();
  return r.setFullYear(t, n, 1), r.setHours(0, 0, 0, 0), r;
}
var Aj = ag(Bi, -1),
  lg = ag(Bi, 1),
  Pa = Ea(lg),
  Tj = ag(Pa, -1),
  BN = ka(Bi, Pa);
function WN(e, t) {
  return function (r, i) {
    i === void 0 && (i = t);
    var s = ye(r),
      o = ii(r),
      l = _u(r) + i,
      c = new Date();
    return c.setFullYear(s, o, l), c.setHours(0, 0, 0, 0), e(c);
  };
}
function Ia(e) {
  var t = ye(e),
    n = ii(e),
    r = _u(e),
    i = new Date();
  return i.setFullYear(t, n, r), i.setHours(0, 0, 0, 0), i;
}
var HN = WN(Ia, 1),
  cg = Ea(HN),
  VN = ka(Ia, cg);
function Oj(e) {
  return _u(Pa(e));
}
var no,
  De = {
    GREGORY: "gregory",
    HEBREW: "hebrew",
    ISLAMIC: "islamic",
    ISO_8601: "iso8601",
  },
  UN =
    ((no = {}),
    (no[De.GREGORY] = [
      "en-CA",
      "en-US",
      "es-AR",
      "es-BO",
      "es-CL",
      "es-CO",
      "es-CR",
      "es-DO",
      "es-EC",
      "es-GT",
      "es-HN",
      "es-MX",
      "es-NI",
      "es-PA",
      "es-PE",
      "es-PR",
      "es-SV",
      "es-VE",
      "pt-BR",
    ]),
    (no[De.HEBREW] = ["he", "he-IL"]),
    (no[De.ISLAMIC] = [
      "ar",
      "ar-AE",
      "ar-BH",
      "ar-DZ",
      "ar-EG",
      "ar-IQ",
      "ar-JO",
      "ar-KW",
      "ar-LY",
      "ar-OM",
      "ar-QA",
      "ar-SA",
      "ar-SD",
      "ar-SY",
      "ar-YE",
      "dv",
      "dv-MV",
      "ps",
      "ps-AR",
    ]),
    no),
  ug = [0, 1, 2, 3, 4, 5, 6],
  zd = new Map();
function GN(e) {
  return function (n, r) {
    var i = n || Sj();
    zd.has(i) || zd.set(i, new Map());
    var s = zd.get(i);
    return (
      s.has(e) || s.set(e, new Intl.DateTimeFormat(i || void 0, e).format),
      s.get(e)(r)
    );
  };
}
function YN(e) {
  var t = new Date(e);
  return new Date(t.setHours(12));
}
function Wi(e) {
  return function (t, n) {
    return GN(e)(t, YN(n));
  };
}
var qN = { day: "numeric" },
  KN = { day: "numeric", month: "long", year: "numeric" },
  QN = { month: "long" },
  XN = { month: "long", year: "numeric" },
  JN = { weekday: "short" },
  ZN = { weekday: "long" },
  eA = { year: "numeric" },
  tA = Wi(qN),
  nA = Wi(KN),
  rA = Wi(QN),
  Dj = Wi(XN),
  iA = Wi(JN),
  sA = Wi(ZN),
  Pu = Wi(eA),
  oA = ug[0],
  aA = ug[5],
  g0 = ug[6];
function ia(e, t) {
  t === void 0 && (t = De.ISO_8601);
  var n = e.getDay();
  switch (t) {
    case De.ISO_8601:
      return (n + 6) % 7;
    case De.ISLAMIC:
      return (n + 1) % 7;
    case De.HEBREW:
    case De.GREGORY:
      return n;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
function lA(e) {
  var t = Vs(e);
  return ye(t);
}
function cA(e) {
  var t = si(e);
  return ye(t);
}
function vf(e, t) {
  t === void 0 && (t = De.ISO_8601);
  var n = ye(e),
    r = ii(e),
    i = e.getDate() - ia(e, t);
  return new Date(n, r, i);
}
function uA(e, t) {
  t === void 0 && (t = De.ISO_8601);
  var n = t === De.GREGORY ? De.GREGORY : De.ISO_8601,
    r = vf(e, t),
    i = ye(e) + 1,
    s,
    o;
  do (s = new Date(i, 0, n === De.ISO_8601 ? 4 : 1)), (o = vf(s, t)), (i -= 1);
  while (e < o);
  return Math.round((r.getTime() - o.getTime()) / (864e5 * 7)) + 1;
}
function Pi(e, t) {
  switch (e) {
    case "century":
      return Vs(t);
    case "decade":
      return si(t);
    case "year":
      return Us(t);
    case "month":
      return Bi(t);
    case "day":
      return Ia(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function dA(e, t) {
  switch (e) {
    case "century":
      return FN(t);
    case "decade":
      return Ej(t);
    case "year":
      return Ij(t);
    case "month":
      return Aj(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Mj(e, t) {
  switch (e) {
    case "century":
      return Cj(t);
    case "decade":
      return sg(t);
    case "year":
      return og(t);
    case "month":
      return lg(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function hA(e, t) {
  switch (e) {
    case "decade":
      return Ej(t, -100);
    case "year":
      return Ij(t, -10);
    case "month":
      return Aj(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function fA(e, t) {
  switch (e) {
    case "decade":
      return sg(t, 100);
    case "year":
      return og(t, 10);
    case "month":
      return lg(t, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Lj(e, t) {
  switch (e) {
    case "century":
      return ig(t);
    case "decade":
      return Eu(t);
    case "year":
      return ku(t);
    case "month":
      return Pa(t);
    case "day":
      return cg(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function pA(e, t) {
  switch (e) {
    case "century":
      return zN(t);
    case "decade":
      return kj(t);
    case "year":
      return Nj(t);
    case "month":
      return Tj(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function gA(e, t) {
  switch (e) {
    case "decade":
      return kj(t, -100);
    case "year":
      return Nj(t, -10);
    case "month":
      return Tj(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function m0(e, t) {
  switch (e) {
    case "century":
      return _j(t);
    case "decade":
      return Pj(t);
    case "year":
      return $N(t);
    case "month":
      return BN(t);
    case "day":
      return VN(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function mA(e, t, n) {
  var r = [t, n].sort(function (i, s) {
    return i.getTime() - s.getTime();
  });
  return [Pi(e, r[0]), Lj(e, r[1])];
}
function Rj(e, t, n) {
  return (
    t === void 0 && (t = Pu),
    n
      .map(function (r) {
        return t(e, r);
      })
      .join(" – ")
  );
}
function xA(e, t, n) {
  return Rj(e, t, _j(n));
}
function Fj(e, t, n) {
  return Rj(e, t, Pj(n));
}
function vA(e) {
  return e.getDay() === new Date().getDay();
}
function zj(e, t) {
  t === void 0 && (t = De.ISO_8601);
  var n = e.getDay();
  switch (t) {
    case De.ISLAMIC:
    case De.HEBREW:
      return n === aA || n === g0;
    case De.ISO_8601:
    case De.GREGORY:
      return n === g0 || n === oA;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
var _n = "react-calendar__navigation";
function yA(e) {
  var t = e.activeStartDate,
    n = e.drillUp,
    r = e.formatMonthYear,
    i = r === void 0 ? Dj : r,
    s = e.formatYear,
    o = s === void 0 ? Pu : s,
    l = e.locale,
    c = e.maxDate,
    u = e.minDate,
    d = e.navigationAriaLabel,
    h = d === void 0 ? "" : d,
    f = e.navigationAriaLive,
    m = e.navigationLabel,
    p = e.next2AriaLabel,
    g = p === void 0 ? "" : p,
    y = e.next2Label,
    x = y === void 0 ? "»" : y,
    v = e.nextAriaLabel,
    b = v === void 0 ? "" : v,
    S = e.nextLabel,
    C = S === void 0 ? "›" : S,
    k = e.prev2AriaLabel,
    _ = k === void 0 ? "" : k,
    E = e.prev2Label,
    I = E === void 0 ? "«" : E,
    N = e.prevAriaLabel,
    R = N === void 0 ? "" : N,
    z = e.prevLabel,
    ee = z === void 0 ? "‹" : z,
    ae = e.setActiveStartDate,
    K = e.showDoubleView,
    G = e.view,
    te = e.views,
    O = te.indexOf(G) > 0,
    M = G !== "century",
    D = dA(G, t),
    H = M ? hA(G, t) : void 0,
    B = Mj(G, t),
    se = M ? fA(G, t) : void 0,
    Q = (function () {
      if (D.getFullYear() < 0) return !0;
      var Le = pA(G, t);
      return u && u >= Le;
    })(),
    ce =
      M &&
      (function () {
        if (H.getFullYear() < 0) return !0;
        var Le = gA(G, t);
        return u && u >= Le;
      })(),
    ne = c && c < B,
    Pe = M && c && c < se;
  function bt() {
    ae(D, "prev");
  }
  function Ye() {
    ae(H, "prev2");
  }
  function ai() {
    ae(B, "next");
  }
  function vr() {
    ae(se, "next2");
  }
  function jt(Le) {
    var Gs = (function () {
      switch (G) {
        case "century":
          return xA(l, o, Le);
        case "decade":
          return Fj(l, o, Le);
        case "year":
          return o(l, Le);
        case "month":
          return i(l, Le);
        default:
          throw new Error("Invalid view: ".concat(G, "."));
      }
    })();
    return m
      ? m({ date: Le, label: Gs, locale: l || Sj() || void 0, view: G })
      : Gs;
  }
  function Hu() {
    var Le = "".concat(_n, "__label");
    return a.jsxs("button", {
      "aria-label": h,
      "aria-live": f,
      className: Le,
      disabled: !O,
      onClick: n,
      style: { flexGrow: 1 },
      type: "button",
      children: [
        a.jsx("span", {
          className: ""
            .concat(Le, "__labelText ")
            .concat(Le, "__labelText--from"),
          children: jt(t),
        }),
        K
          ? a.jsxs(a.Fragment, {
              children: [
                a.jsx("span", {
                  className: "".concat(Le, "__divider"),
                  children: " – ",
                }),
                a.jsx("span", {
                  className: ""
                    .concat(Le, "__labelText ")
                    .concat(Le, "__labelText--to"),
                  children: jt(B),
                }),
              ],
            })
          : null,
      ],
    });
  }
  return a.jsxs("div", {
    className: _n,
    children: [
      I !== null && M
        ? a.jsx("button", {
            "aria-label": _,
            className: "".concat(_n, "__arrow ").concat(_n, "__prev2-button"),
            disabled: ce,
            onClick: Ye,
            type: "button",
            children: I,
          })
        : null,
      ee !== null &&
        a.jsx("button", {
          "aria-label": R,
          className: "".concat(_n, "__arrow ").concat(_n, "__prev-button"),
          disabled: Q,
          onClick: bt,
          type: "button",
          children: ee,
        }),
      Hu(),
      C !== null &&
        a.jsx("button", {
          "aria-label": b,
          className: "".concat(_n, "__arrow ").concat(_n, "__next-button"),
          disabled: ne,
          onClick: ai,
          type: "button",
          children: C,
        }),
      x !== null && M
        ? a.jsx("button", {
            "aria-label": g,
            className: "".concat(_n, "__arrow ").concat(_n, "__next2-button"),
            disabled: Pe,
            onClick: vr,
            type: "button",
            children: x,
          })
        : null,
    ],
  });
}
var ls = function () {
    return (
      (ls =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      ls.apply(this, arguments)
    );
  },
  bA = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
function x0(e) {
  return "".concat(e, "%");
}
function dg(e) {
  var t = e.children,
    n = e.className,
    r = e.count,
    i = e.direction,
    s = e.offset,
    o = e.style,
    l = e.wrap,
    c = bA(e, [
      "children",
      "className",
      "count",
      "direction",
      "offset",
      "style",
      "wrap",
    ]);
  return a.jsx(
    "div",
    ls(
      {
        className: n,
        style: ls(
          {
            display: "flex",
            flexDirection: i,
            flexWrap: l ? "wrap" : "nowrap",
          },
          o
        ),
      },
      c,
      {
        children: w.Children.map(t, function (u, d) {
          var h = s && d === 0 ? x0((100 * s) / r) : null;
          return w.cloneElement(
            u,
            ls(ls({}, u.props), {
              style: {
                flexBasis: x0(100 / r),
                flexShrink: 0,
                flexGrow: 0,
                overflow: "hidden",
                marginLeft: h,
                marginInlineStart: h,
                marginInlineEnd: 0,
              },
            })
          );
        }),
      }
    )
  );
}
function jA(e, t, n) {
  return t && t > e ? t : n && n < e ? n : e;
}
function sa(e, t) {
  return t[0] <= e && t[1] >= e;
}
function wA(e, t) {
  return e[0] <= t[0] && e[1] >= t[1];
}
function $j(e, t) {
  return sa(e[0], t) || sa(e[1], t);
}
function v0(e, t, n) {
  var r = $j(t, e),
    i = [];
  if (r) {
    i.push(n);
    var s = sa(e[0], t),
      o = sa(e[1], t);
    s && i.push("".concat(n, "Start")),
      o && i.push("".concat(n, "End")),
      s && o && i.push("".concat(n, "BothEnds"));
  }
  return i;
}
function SA(e) {
  return Array.isArray(e) ? e[0] !== null && e[1] !== null : e !== null;
}
function CA(e) {
  if (!e) throw new Error("args is required");
  var t = e.value,
    n = e.date,
    r = e.hover,
    i = "react-calendar__tile",
    s = [i];
  if (!n) return s;
  var o = new Date(),
    l = (function () {
      if (Array.isArray(n)) return n;
      var m = e.dateType;
      if (!m)
        throw new Error(
          "dateType is required when date is not an array of two dates"
        );
      return m0(m, n);
    })();
  if ((sa(o, l) && s.push("".concat(i, "--now")), !t || !SA(t))) return s;
  var c = (function () {
    if (Array.isArray(t)) return t;
    var m = e.valueType;
    if (!m)
      throw new Error(
        "valueType is required when value is not an array of two dates"
      );
    return m0(m, t);
  })();
  wA(c, l)
    ? s.push("".concat(i, "--active"))
    : $j(c, l) && s.push("".concat(i, "--hasActive"));
  var u = v0(c, l, "".concat(i, "--range"));
  s.push.apply(s, u);
  var d = Array.isArray(t) ? t : [t];
  if (r && d.length === 1) {
    var h = r > c[0] ? [c[0], r] : [r, c[0]],
      f = v0(h, l, "".concat(i, "--hover"));
    s.push.apply(s, f);
  }
  return s;
}
function Iu(e) {
  for (
    var t = e.className,
      n = e.count,
      r = n === void 0 ? 3 : n,
      i = e.dateTransform,
      s = e.dateType,
      o = e.end,
      l = e.hover,
      c = e.offset,
      u = e.renderTile,
      d = e.start,
      h = e.step,
      f = h === void 0 ? 1 : h,
      m = e.value,
      p = e.valueType,
      g = [],
      y = d;
    y <= o;
    y += f
  ) {
    var x = i(y);
    g.push(
      u({
        classes: CA({ date: x, dateType: s, hover: l, value: m, valueType: p }),
        date: x,
      })
    );
  }
  return a.jsx(dg, {
    className: t,
    count: r,
    offset: c,
    wrap: !0,
    children: g,
  });
}
function Nu(e) {
  var t = e.activeStartDate,
    n = e.children,
    r = e.classes,
    i = e.date,
    s = e.formatAbbr,
    o = e.locale,
    l = e.maxDate,
    c = e.maxDateTransform,
    u = e.minDate,
    d = e.minDateTransform,
    h = e.onClick,
    f = e.onMouseOver,
    m = e.style,
    p = e.tileClassName,
    g = e.tileContent,
    y = e.tileDisabled,
    x = e.view,
    v = w.useMemo(
      function () {
        var S = { activeStartDate: t, date: i, view: x };
        return typeof p == "function" ? p(S) : p;
      },
      [t, i, p, x]
    ),
    b = w.useMemo(
      function () {
        var S = { activeStartDate: t, date: i, view: x };
        return typeof g == "function" ? g(S) : g;
      },
      [t, i, g, x]
    );
  return a.jsxs("button", {
    className: Gt(r, v),
    disabled:
      (u && d(u) > i) ||
      (l && c(l) < i) ||
      (y && y({ activeStartDate: t, date: i, view: x })),
    onClick: h
      ? function (S) {
          return h(i, S);
        }
      : void 0,
    onFocus: f
      ? function () {
          return f(i);
        }
      : void 0,
    onMouseOver: f
      ? function () {
          return f(i);
        }
      : void 0,
    style: m,
    type: "button",
    children: [
      s ? a.jsx("abbr", { "aria-label": s(o, i), children: n }) : n,
      b,
    ],
  });
}
var yf = function () {
    return (
      (yf =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      yf.apply(this, arguments)
    );
  },
  _A = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  },
  $d = "react-calendar__century-view__decades__decade";
function EA(e) {
  var t = e.classes,
    n = t === void 0 ? [] : t,
    r = e.currentCentury,
    i = e.formatYear,
    s = i === void 0 ? Pu : i,
    o = _A(e, ["classes", "currentCentury", "formatYear"]),
    l = o.date,
    c = o.locale,
    u = [];
  return (
    n && u.push.apply(u, n),
    $d && u.push($d),
    Vs(l).getFullYear() !== r && u.push("".concat($d, "--neighboringCentury")),
    a.jsx(
      Nu,
      yf({}, o, {
        classes: u,
        maxDateTransform: Eu,
        minDateTransform: si,
        view: "century",
        children: Fj(c, s, l),
      })
    )
  );
}
var bf = function () {
    return (
      (bf =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      bf.apply(this, arguments)
    );
  },
  y0 = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
function kA(e) {
  var t = e.activeStartDate,
    n = e.hover,
    r = e.showNeighboringCentury,
    i = e.value,
    s = e.valueType,
    o = y0(e, [
      "activeStartDate",
      "hover",
      "showNeighboringCentury",
      "value",
      "valueType",
    ]),
    l = lA(t),
    c = l + (r ? 119 : 99);
  return a.jsx(Iu, {
    className: "react-calendar__century-view__decades",
    dateTransform: si,
    dateType: "decade",
    end: c,
    hover: n,
    renderTile: function (u) {
      var d = u.date,
        h = y0(u, ["date"]);
      return a.jsx(
        EA,
        bf({}, o, h, { activeStartDate: t, currentCentury: l, date: d }),
        d.getTime()
      );
    },
    start: l,
    step: 10,
    value: i,
    valueType: s,
  });
}
var jf = function () {
  return (
    (jf =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
          t = arguments[n];
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
        return e;
      }),
    jf.apply(this, arguments)
  );
};
function PA(e) {
  function t() {
    return a.jsx(kA, jf({}, e));
  }
  return a.jsx("div", {
    className: "react-calendar__century-view",
    children: t(),
  });
}
var wf = function () {
    return (
      (wf =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      wf.apply(this, arguments)
    );
  },
  IA = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  },
  Bd = "react-calendar__decade-view__years__year";
function NA(e) {
  var t = e.classes,
    n = t === void 0 ? [] : t,
    r = e.currentDecade,
    i = e.formatYear,
    s = i === void 0 ? Pu : i,
    o = IA(e, ["classes", "currentDecade", "formatYear"]),
    l = o.date,
    c = o.locale,
    u = [];
  return (
    n && u.push.apply(u, n),
    Bd && u.push(Bd),
    si(l).getFullYear() !== r && u.push("".concat(Bd, "--neighboringDecade")),
    a.jsx(
      Nu,
      wf({}, o, {
        classes: u,
        maxDateTransform: ku,
        minDateTransform: Us,
        view: "decade",
        children: s(c, l),
      })
    )
  );
}
var Sf = function () {
    return (
      (Sf =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      Sf.apply(this, arguments)
    );
  },
  b0 = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
function AA(e) {
  var t = e.activeStartDate,
    n = e.hover,
    r = e.showNeighboringDecade,
    i = e.value,
    s = e.valueType,
    o = b0(e, [
      "activeStartDate",
      "hover",
      "showNeighboringDecade",
      "value",
      "valueType",
    ]),
    l = cA(t),
    c = l + (r ? 11 : 9);
  return a.jsx(Iu, {
    className: "react-calendar__decade-view__years",
    dateTransform: Us,
    dateType: "year",
    end: c,
    hover: n,
    renderTile: function (u) {
      var d = u.date,
        h = b0(u, ["date"]);
      return a.jsx(
        NA,
        Sf({}, o, h, { activeStartDate: t, currentDecade: l, date: d }),
        d.getTime()
      );
    },
    start: l,
    value: i,
    valueType: s,
  });
}
var Cf = function () {
  return (
    (Cf =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
          t = arguments[n];
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
        return e;
      }),
    Cf.apply(this, arguments)
  );
};
function TA(e) {
  function t() {
    return a.jsx(AA, Cf({}, e));
  }
  return a.jsx("div", {
    className: "react-calendar__decade-view",
    children: t(),
  });
}
var _f = function () {
    return (
      (_f =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      _f.apply(this, arguments)
    );
  },
  OA = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  },
  j0 = function (e, t, n) {
    if (n || arguments.length === 2)
      for (var r = 0, i = t.length, s; r < i; r++)
        (s || !(r in t)) &&
          (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
    return e.concat(s || Array.prototype.slice.call(t));
  },
  DA = "react-calendar__year-view__months__month";
function MA(e) {
  var t = e.classes,
    n = t === void 0 ? [] : t,
    r = e.formatMonth,
    i = r === void 0 ? rA : r,
    s = e.formatMonthYear,
    o = s === void 0 ? Dj : s,
    l = OA(e, ["classes", "formatMonth", "formatMonthYear"]),
    c = l.date,
    u = l.locale;
  return a.jsx(
    Nu,
    _f({}, l, {
      classes: j0(j0([], n, !0), [DA], !1),
      formatAbbr: o,
      maxDateTransform: Pa,
      minDateTransform: Bi,
      view: "year",
      children: i(u, c),
    })
  );
}
var Ef = function () {
    return (
      (Ef =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      Ef.apply(this, arguments)
    );
  },
  w0 = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
function LA(e) {
  var t = e.activeStartDate,
    n = e.hover,
    r = e.value,
    i = e.valueType,
    s = w0(e, ["activeStartDate", "hover", "value", "valueType"]),
    o = 0,
    l = 11,
    c = ye(t);
  return a.jsx(Iu, {
    className: "react-calendar__year-view__months",
    dateTransform: function (u) {
      var d = new Date();
      return d.setFullYear(c, u, 1), Bi(d);
    },
    dateType: "month",
    end: l,
    hover: n,
    renderTile: function (u) {
      var d = u.date,
        h = w0(u, ["date"]);
      return a.jsx(
        MA,
        Ef({}, s, h, { activeStartDate: t, date: d }),
        d.getTime()
      );
    },
    start: o,
    value: r,
    valueType: i,
  });
}
var kf = function () {
  return (
    (kf =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
          t = arguments[n];
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
        return e;
      }),
    kf.apply(this, arguments)
  );
};
function RA(e) {
  function t() {
    return a.jsx(LA, kf({}, e));
  }
  return a.jsx("div", {
    className: "react-calendar__year-view",
    children: t(),
  });
}
var Pf = function () {
    return (
      (Pf =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      Pf.apply(this, arguments)
    );
  },
  FA = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  },
  ol = "react-calendar__month-view__days__day";
function zA(e) {
  var t = e.calendarType,
    n = e.classes,
    r = n === void 0 ? [] : n,
    i = e.currentMonthIndex,
    s = e.formatDay,
    o = s === void 0 ? tA : s,
    l = e.formatLongDate,
    c = l === void 0 ? nA : l,
    u = FA(e, [
      "calendarType",
      "classes",
      "currentMonthIndex",
      "formatDay",
      "formatLongDate",
    ]),
    d = u.date,
    h = u.locale,
    f = [];
  return (
    r && f.push.apply(f, r),
    ol && f.push(ol),
    zj(d, t) && f.push("".concat(ol, "--weekend")),
    d.getMonth() !== i && f.push("".concat(ol, "--neighboringMonth")),
    a.jsx(
      Nu,
      Pf({}, u, {
        classes: f,
        formatAbbr: c,
        maxDateTransform: cg,
        minDateTransform: Ia,
        view: "month",
        children: o(h, d),
      })
    )
  );
}
var If = function () {
    return (
      (If =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      If.apply(this, arguments)
    );
  },
  S0 = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
function $A(e) {
  var t = e.activeStartDate,
    n = e.calendarType,
    r = e.hover,
    i = e.showFixedNumberOfWeeks,
    s = e.showNeighboringMonth,
    o = e.value,
    l = e.valueType,
    c = S0(e, [
      "activeStartDate",
      "calendarType",
      "hover",
      "showFixedNumberOfWeeks",
      "showNeighboringMonth",
      "value",
      "valueType",
    ]),
    u = ye(t),
    d = ii(t),
    h = i || s,
    f = ia(t, n),
    m = h ? 0 : f,
    p = (h ? -f : 0) + 1,
    g = (function () {
      if (i) return p + 6 * 7 - 1;
      var y = Oj(t);
      if (s) {
        var x = new Date();
        x.setFullYear(u, d, y), x.setHours(0, 0, 0, 0);
        var v = 7 - ia(x, n) - 1;
        return y + v;
      }
      return y;
    })();
  return a.jsx(Iu, {
    className: "react-calendar__month-view__days",
    count: 7,
    dateTransform: function (y) {
      var x = new Date();
      return x.setFullYear(u, d, y), Ia(x);
    },
    dateType: "day",
    hover: r,
    end: g,
    renderTile: function (y) {
      var x = y.date,
        v = S0(y, ["date"]);
      return a.jsx(
        zA,
        If({}, c, v, {
          activeStartDate: t,
          calendarType: n,
          currentMonthIndex: d,
          date: x,
        }),
        x.getTime()
      );
    },
    offset: m,
    start: p,
    value: o,
    valueType: l,
  });
}
var Bj = "react-calendar__month-view__weekdays",
  Wd = "".concat(Bj, "__weekday");
function BA(e) {
  for (
    var t = e.calendarType,
      n = e.formatShortWeekday,
      r = n === void 0 ? iA : n,
      i = e.formatWeekday,
      s = i === void 0 ? sA : i,
      o = e.locale,
      l = e.onMouseLeave,
      c = new Date(),
      u = Bi(c),
      d = ye(u),
      h = ii(u),
      f = [],
      m = 1;
    m <= 7;
    m += 1
  ) {
    var p = new Date(d, h, m - ia(u, t)),
      g = s(o, p);
    f.push(
      a.jsx(
        "div",
        {
          className: Gt(
            Wd,
            vA(p) && "".concat(Wd, "--current"),
            zj(p, t) && "".concat(Wd, "--weekend")
          ),
          children: a.jsx("abbr", {
            "aria-label": g,
            title: g,
            children: r(o, p).replace(".", ""),
          }),
        },
        m
      )
    );
  }
  return a.jsx(dg, {
    className: Bj,
    count: 7,
    onFocus: l,
    onMouseOver: l,
    children: f,
  });
}
var Oc = function () {
    return (
      (Oc =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      Oc.apply(this, arguments)
    );
  },
  C0 = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  },
  _0 = "react-calendar__tile";
function WA(e) {
  var t = e.onClickWeekNumber,
    n = e.weekNumber,
    r = a.jsx("span", { children: n });
  if (t) {
    var i = e.date,
      s = e.onClickWeekNumber,
      o = e.weekNumber,
      l = C0(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return a.jsx(
      "button",
      Oc({}, l, {
        className: _0,
        onClick: function (c) {
          return s(o, i, c);
        },
        type: "button",
        children: r,
      })
    );
  } else {
    e.date, e.onClickWeekNumber, e.weekNumber;
    var l = C0(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return a.jsx("div", Oc({}, l, { className: _0, children: r }));
  }
}
function HA(e) {
  var t = e.activeStartDate,
    n = e.calendarType,
    r = e.onClickWeekNumber,
    i = e.onMouseLeave,
    s = e.showFixedNumberOfWeeks,
    o = (function () {
      if (s) return 6;
      var u = Oj(t),
        d = ia(t, n),
        h = u - (7 - d);
      return 1 + Math.ceil(h / 7);
    })(),
    l = (function () {
      for (var u = ye(t), d = ii(t), h = _u(t), f = [], m = 0; m < o; m += 1)
        f.push(vf(new Date(u, d, h + m * 7), n));
      return f;
    })(),
    c = l.map(function (u) {
      return uA(u, n);
    });
  return a.jsx(dg, {
    className: "react-calendar__month-view__weekNumbers",
    count: o,
    direction: "column",
    onFocus: i,
    onMouseOver: i,
    style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 },
    children: c.map(function (u, d) {
      var h = l[d];
      if (!h) throw new Error("date is not defined");
      return a.jsx(WA, { date: h, onClickWeekNumber: r, weekNumber: u }, u);
    }),
  });
}
var Nf = function () {
    return (
      (Nf =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      Nf.apply(this, arguments)
    );
  },
  VA = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
function UA(e) {
  if (e)
    for (var t = 0, n = Object.entries(UN); t < n.length; t++) {
      var r = n[t],
        i = r[0],
        s = r[1];
      if (s.includes(e)) return i;
    }
  return De.ISO_8601;
}
function GA(e) {
  var t = e.activeStartDate,
    n = e.locale,
    r = e.onMouseLeave,
    i = e.showFixedNumberOfWeeks,
    s = e.calendarType,
    o = s === void 0 ? UA(n) : s,
    l = e.formatShortWeekday,
    c = e.formatWeekday,
    u = e.onClickWeekNumber,
    d = e.showWeekNumbers,
    h = VA(e, [
      "calendarType",
      "formatShortWeekday",
      "formatWeekday",
      "onClickWeekNumber",
      "showWeekNumbers",
    ]);
  function f() {
    return a.jsx(BA, {
      calendarType: o,
      formatShortWeekday: l,
      formatWeekday: c,
      locale: n,
      onMouseLeave: r,
    });
  }
  function m() {
    return d
      ? a.jsx(HA, {
          activeStartDate: t,
          calendarType: o,
          onClickWeekNumber: u,
          onMouseLeave: r,
          showFixedNumberOfWeeks: i,
        })
      : null;
  }
  function p() {
    return a.jsx($A, Nf({ calendarType: o }, h));
  }
  var g = "react-calendar__month-view";
  return a.jsx("div", {
    className: Gt(g, d ? "".concat(g, "--weekNumbers") : ""),
    children: a.jsxs("div", {
      style: { display: "flex", alignItems: "flex-end" },
      children: [
        m(),
        a.jsxs("div", {
          style: { flexGrow: 1, width: "100%" },
          children: [f(), p()],
        }),
      ],
    }),
  });
}
var cs = function () {
    return (
      (cs =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      cs.apply(this, arguments)
    );
  },
  al = "react-calendar",
  Yl = ["century", "decade", "year", "month"],
  YA = ["decade", "year", "month", "day"],
  hg = new Date();
hg.setFullYear(1, 0, 1);
hg.setHours(0, 0, 0, 0);
var qA = new Date(864e13);
function po(e) {
  return e instanceof Date ? e : new Date(e);
}
function Wj(e, t) {
  return Yl.slice(Yl.indexOf(e), Yl.indexOf(t) + 1);
}
function KA(e, t, n) {
  var r = Wj(t, n);
  return r.indexOf(e) !== -1;
}
function fg(e, t, n) {
  return e && KA(e, t, n) ? e : n;
}
function Hj(e) {
  var t = Yl.indexOf(e);
  return YA[t];
}
function QA(e, t) {
  var n = Array.isArray(e) ? e[t] : e;
  if (!n) return null;
  var r = po(n);
  if (isNaN(r.getTime())) throw new Error("Invalid date: ".concat(e));
  return r;
}
function Vj(e, t) {
  var n = e.value,
    r = e.minDate,
    i = e.maxDate,
    s = e.maxDetail,
    o = QA(n, t);
  if (!o) return null;
  var l = Hj(s),
    c = (function () {
      switch (t) {
        case 0:
          return Pi(l, o);
        case 1:
          return Lj(l, o);
        default:
          throw new Error("Invalid index value: ".concat(t));
      }
    })();
  return jA(c, r, i);
}
var pg = function (e) {
    return Vj(e, 0);
  },
  Uj = function (e) {
    return Vj(e, 1);
  },
  XA = function (e) {
    return [pg, Uj].map(function (t) {
      return t(e);
    });
  };
function Gj(e) {
  var t = e.maxDate,
    n = e.maxDetail,
    r = e.minDate,
    i = e.minDetail,
    s = e.value,
    o = e.view,
    l = fg(o, i, n),
    c = pg({ value: s, minDate: r, maxDate: t, maxDetail: n }) || new Date();
  return Pi(l, c);
}
function JA(e) {
  var t = e.activeStartDate,
    n = e.defaultActiveStartDate,
    r = e.defaultValue,
    i = e.defaultView,
    s = e.maxDate,
    o = e.maxDetail,
    l = e.minDate,
    c = e.minDetail,
    u = e.value,
    d = e.view,
    h = fg(d, c, o),
    f = t || n;
  return f
    ? Pi(h, f)
    : Gj({
        maxDate: s,
        maxDetail: o,
        minDate: l,
        minDetail: c,
        value: u || r,
        view: d || i,
      });
}
function Hd(e) {
  return e && (!Array.isArray(e) || e.length === 1);
}
function ll(e, t) {
  return e instanceof Date && t instanceof Date && e.getTime() === t.getTime();
}
var Yj = w.forwardRef(function (t, n) {
  var r = t.activeStartDate,
    i = t.allowPartialRange,
    s = t.calendarType,
    o = t.className,
    l = t.defaultActiveStartDate,
    c = t.defaultValue,
    u = t.defaultView,
    d = t.formatDay,
    h = t.formatLongDate,
    f = t.formatMonth,
    m = t.formatMonthYear,
    p = t.formatShortWeekday,
    g = t.formatWeekday,
    y = t.formatYear,
    x = t.goToRangeStartOnSelect,
    v = x === void 0 ? !0 : x,
    b = t.inputRef,
    S = t.locale,
    C = t.maxDate,
    k = C === void 0 ? qA : C,
    _ = t.maxDetail,
    E = _ === void 0 ? "month" : _,
    I = t.minDate,
    N = I === void 0 ? hg : I,
    R = t.minDetail,
    z = R === void 0 ? "century" : R,
    ee = t.navigationAriaLabel,
    ae = t.navigationAriaLive,
    K = t.navigationLabel,
    G = t.next2AriaLabel,
    te = t.next2Label,
    O = t.nextAriaLabel,
    M = t.nextLabel,
    D = t.onActiveStartDateChange,
    H = t.onChange,
    B = t.onClickDay,
    se = t.onClickDecade,
    Q = t.onClickMonth,
    ce = t.onClickWeekNumber,
    ne = t.onClickYear,
    Pe = t.onDrillDown,
    bt = t.onDrillUp,
    Ye = t.onViewChange,
    ai = t.prev2AriaLabel,
    vr = t.prev2Label,
    jt = t.prevAriaLabel,
    Hu = t.prevLabel,
    Le = t.returnValue,
    Gs = Le === void 0 ? "start" : Le,
    Dt = t.selectRange,
    Oa = t.showDoubleView,
    om = t.showFixedNumberOfWeeks,
    am = t.showNavigation,
    LS = am === void 0 ? !0 : am,
    RS = t.showNeighboringCentury,
    FS = t.showNeighboringDecade,
    lm = t.showNeighboringMonth,
    zS = lm === void 0 ? !0 : lm,
    $S = t.showWeekNumbers,
    BS = t.tileClassName,
    WS = t.tileContent,
    HS = t.tileDisabled,
    Vu = t.value,
    cm = t.view,
    um = w.useState(l),
    VS = um[0],
    Da = um[1],
    dm = w.useState(null),
    US = dm[0],
    hm = dm[1],
    fm = w.useState(
      Array.isArray(c)
        ? c.map(function (X) {
            return X !== null ? po(X) : null;
          })
        : c != null
        ? po(c)
        : null
    ),
    Uu = fm[0],
    GS = fm[1],
    pm = w.useState(u),
    YS = pm[0],
    gm = pm[1],
    lt =
      r ||
      VS ||
      JA({
        activeStartDate: r,
        defaultActiveStartDate: l,
        defaultValue: c,
        defaultView: u,
        maxDate: k,
        maxDetail: E,
        minDate: N,
        minDetail: z,
        value: Vu,
        view: cm,
      }),
    ct = (function () {
      var X = (function () {
        return Dt && Hd(Uu) ? Uu : Vu !== void 0 ? Vu : Uu;
      })();
      return X
        ? Array.isArray(X)
          ? X.map(function (_e) {
              return _e !== null ? po(_e) : null;
            })
          : X !== null
          ? po(X)
          : null
        : null;
    })(),
    Ma = Hj(E),
    be = fg(cm || YS, z, E),
    Sn = Wj(z, E),
    qS = Dt ? US : null,
    Gu = Sn.indexOf(be) < Sn.length - 1,
    mm = Sn.indexOf(be) > 0,
    xm = w.useCallback(
      function (X) {
        var _e = (function () {
          switch (Gs) {
            case "start":
              return pg;
            case "end":
              return Uj;
            case "range":
              return XA;
            default:
              throw new Error("Invalid returnValue.");
          }
        })();
        return _e({ maxDate: k, maxDetail: E, minDate: N, value: X });
      },
      [k, E, N, Gs]
    ),
    Yu = w.useCallback(
      function (X, _e) {
        Da(X);
        var Ae = { action: _e, activeStartDate: X, value: ct, view: be };
        D && !ll(lt, X) && D(Ae);
      },
      [lt, D, ct, be]
    ),
    La = w.useCallback(
      function (X, _e) {
        var Ae = (function () {
          switch (be) {
            case "century":
              return se;
            case "decade":
              return ne;
            case "year":
              return Q;
            case "month":
              return B;
            default:
              throw new Error("Invalid view: ".concat(be, "."));
          }
        })();
        Ae && Ae(X, _e);
      },
      [B, se, Q, ne, be]
    ),
    qu = w.useCallback(
      function (X, _e) {
        if (Gu) {
          La(X, _e);
          var Ae = Sn[Sn.indexOf(be) + 1];
          if (!Ae)
            throw new Error("Attempted to drill down from the lowest view.");
          Da(X), gm(Ae);
          var sn = {
            action: "drillDown",
            activeStartDate: X,
            value: ct,
            view: Ae,
          };
          D && !ll(lt, X) && D(sn), Ye && be !== Ae && Ye(sn), Pe && Pe(sn);
        }
      },
      [lt, Gu, D, La, Pe, Ye, ct, be, Sn]
    ),
    Ku = w.useCallback(
      function () {
        if (mm) {
          var X = Sn[Sn.indexOf(be) - 1];
          if (!X)
            throw new Error("Attempted to drill up from the highest view.");
          var _e = Pi(X, lt);
          Da(_e), gm(X);
          var Ae = {
            action: "drillUp",
            activeStartDate: _e,
            value: ct,
            view: X,
          };
          D && !ll(lt, _e) && D(Ae), Ye && be !== X && Ye(Ae), bt && bt(Ae);
        }
      },
      [lt, mm, D, bt, Ye, ct, be, Sn]
    ),
    Qu = w.useCallback(
      function (X, _e) {
        var Ae = ct;
        La(X, _e);
        var sn = Dt && !Hd(Ae),
          on;
        if (Dt)
          if (sn) on = Pi(Ma, X);
          else {
            if (!Ae) throw new Error("previousValue is required");
            if (Array.isArray(Ae))
              throw new Error("previousValue must not be an array");
            on = mA(Ma, Ae, X);
          }
        else on = xm(X);
        var Ju =
          !Dt || sn || v
            ? Gj({
                maxDate: k,
                maxDetail: E,
                minDate: N,
                minDetail: z,
                value: on,
                view: be,
              })
            : null;
        _e.persist(), Da(Ju), GS(on);
        var JS = {
          action: "onChange",
          activeStartDate: Ju,
          value: on,
          view: be,
        };
        if ((D && !ll(lt, Ju) && D(JS), H))
          if (Dt) {
            var ZS = Hd(on);
            if (!ZS) H(on || null, _e);
            else if (i) {
              if (Array.isArray(on))
                throw new Error("value must not be an array");
              H([on || null, null], _e);
            }
          } else H(on || null, _e);
      },
      [lt, i, xm, v, k, E, N, z, D, H, La, Dt, ct, Ma, be]
    );
  function KS(X) {
    hm(X);
  }
  function Xu() {
    hm(null);
  }
  w.useImperativeHandle(
    n,
    function () {
      return {
        activeStartDate: lt,
        drillDown: qu,
        drillUp: Ku,
        onChange: Qu,
        setActiveStartDate: Yu,
        value: ct,
        view: be,
      };
    },
    [lt, qu, Ku, Qu, Yu, ct, be]
  );
  function vm(X) {
    var _e = X ? Mj(be, lt) : Pi(be, lt),
      Ae = Gu ? qu : Qu,
      sn = {
        activeStartDate: _e,
        hover: qS,
        locale: S,
        maxDate: k,
        minDate: N,
        onClick: Ae,
        onMouseOver: Dt ? KS : void 0,
        tileClassName: BS,
        tileContent: WS,
        tileDisabled: HS,
        value: ct,
        valueType: Ma,
      };
    switch (be) {
      case "century":
        return a.jsx(PA, cs({ formatYear: y, showNeighboringCentury: RS }, sn));
      case "decade":
        return a.jsx(TA, cs({ formatYear: y, showNeighboringDecade: FS }, sn));
      case "year":
        return a.jsx(RA, cs({ formatMonth: f, formatMonthYear: m }, sn));
      case "month":
        return a.jsx(
          GA,
          cs(
            {
              calendarType: s,
              formatDay: d,
              formatLongDate: h,
              formatShortWeekday: p,
              formatWeekday: g,
              onClickWeekNumber: ce,
              onMouseLeave: Dt ? Xu : void 0,
              showFixedNumberOfWeeks: typeof om < "u" ? om : Oa,
              showNeighboringMonth: zS,
              showWeekNumbers: $S,
            },
            sn
          )
        );
      default:
        throw new Error("Invalid view: ".concat(be, "."));
    }
  }
  function QS() {
    return LS
      ? a.jsx(yA, {
          activeStartDate: lt,
          drillUp: Ku,
          formatMonthYear: m,
          formatYear: y,
          locale: S,
          maxDate: k,
          minDate: N,
          navigationAriaLabel: ee,
          navigationAriaLive: ae,
          navigationLabel: K,
          next2AriaLabel: G,
          next2Label: te,
          nextAriaLabel: O,
          nextLabel: M,
          prev2AriaLabel: ai,
          prev2Label: vr,
          prevAriaLabel: jt,
          prevLabel: Hu,
          setActiveStartDate: Yu,
          showDoubleView: Oa,
          view: be,
          views: Sn,
        })
      : null;
  }
  var XS = Array.isArray(ct) ? ct : [ct];
  return a.jsxs("div", {
    className: Gt(
      al,
      Dt && XS.length === 1 && "".concat(al, "--selectRange"),
      Oa && "".concat(al, "--doubleView"),
      o
    ),
    ref: b,
    children: [
      QS(),
      a.jsxs("div", {
        className: "".concat(al, "__viewContainer"),
        onBlur: Dt ? Xu : void 0,
        onMouseLeave: Dt ? Xu : void 0,
        children: [vm(), Oa ? vm(!0) : null],
      }),
    ],
  });
});
const qj = j.div`
  display: ${({ isDashboard: e }) => (e ? "block" : "flex")};
`,
  Kj = j.div`
  flex: 1;
  padding: 20px;
`,
  Qj = j.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`,
  Au = j.div`
  margin-top: 20px;
`,
  Tu = j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
`,
  ZA = j.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,
  eT = j.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`,
  tT = j.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`,
  nT = j.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`,
  Xj = j.p`
  color: red;
  margin-top: 10px;
`,
  Jj = ({ isDashboard: e }) => {
    const [t, n] = w.useState([]),
      [r, i] = w.useState(""),
      [s, o] = w.useState(""),
      [l, c] = w.useState(null),
      u = async () => {
        try {
          const h = await T.get(
            "https://bticlz.onrender.com/api/v1/events/getall"
          );
          n(h.data.events || []);
        } catch (h) {
          console.error("Error fetching events:", h),
            c("Error fetching events");
        }
      };
    w.useEffect(() => {
      u();
    }, []);
    const d = async (h) => {
      h.preventDefault();
      try {
        const f = await T.post("https://bticlz.onrender.com/api/v1/events", {
          event: r,
          date: s,
        });
        n([...t, f.data.event]), i(""), o("");
      } catch (f) {
        console.error("Error adding event:", f),
          f.response && f.response.data && f.response.data.error
            ? c(f.response.data.error)
            : c("Error adding event");
      }
    };
    return a.jsx(nn, {
      children: a.jsxs(qj, {
        isDashboard: e,
        children: [
          a.jsx(rn, {}),
          a.jsxs(Kj, {
            children: [
              a.jsx("h1", { children: "Events & Calendar" }),
              a.jsxs("div", {
                children: ["Current Time: ", new Date().toLocaleString()],
              }),
              a.jsx(Qj, { children: a.jsx(Yj, {}) }),
              a.jsxs(ZA, {
                onSubmit: d,
                children: [
                  a.jsx("h2", { children: "Add New Event" }),
                  a.jsx(eT, {
                    type: "text",
                    value: r,
                    onChange: (h) => i(h.target.value),
                    placeholder: "Enter Event",
                  }),
                  a.jsx(tT, {
                    type: "date",
                    value: s,
                    onChange: (h) => o(h.target.value),
                    placeholder: "Enter Date",
                  }),
                  a.jsx(nT, { type: "submit", children: "Add Event" }),
                ],
              }),
              l && a.jsx(Xj, { children: l }),
              a.jsxs(Au, {
                children: [
                  a.jsx("h2", { children: "Events" }),
                  t.map((h, f) =>
                    a.jsxs(
                      Tu,
                      {
                        children: [
                          a.jsx("div", { children: h.event }),
                          a.jsx("div", {
                            children: new Date(h.date).toLocaleDateString(),
                          }),
                        ],
                      },
                      f
                    )
                  ),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  oa = (e) => typeof e == "number" && !isNaN(e),
  Ii = (e) => typeof e == "string",
  Et = (e) => typeof e == "function",
  ql = (e) => (Ii(e) || Et(e) ? e : null),
  Af = (e) => w.isValidElement(e) || Ii(e) || Et(e) || oa(e);
function rT(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: i } = e;
  requestAnimationFrame(() => {
    (i.minHeight = "initial"),
      (i.height = r + "px"),
      (i.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (i.height = "0"), (i.padding = "0"), (i.margin = "0"), setTimeout(t, n);
      });
  });
}
function Ou(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: i = !0,
    collapseDuration: s = 300,
  } = e;
  return function (o) {
    let {
      children: l,
      position: c,
      preventExitTransition: u,
      done: d,
      nodeRef: h,
      isIn: f,
      playToast: m,
    } = o;
    const p = r ? `${t}--${c}` : t,
      g = r ? `${n}--${c}` : n,
      y = w.useRef(0);
    return (
      w.useLayoutEffect(() => {
        const x = h.current,
          v = p.split(" "),
          b = (S) => {
            S.target === h.current &&
              (m(),
              x.removeEventListener("animationend", b),
              x.removeEventListener("animationcancel", b),
              y.current === 0 &&
                S.type !== "animationcancel" &&
                x.classList.remove(...v));
          };
        x.classList.add(...v),
          x.addEventListener("animationend", b),
          x.addEventListener("animationcancel", b);
      }, []),
      w.useEffect(() => {
        const x = h.current,
          v = () => {
            x.removeEventListener("animationend", v), i ? rT(x, d, s) : d();
          };
        f ||
          (u
            ? v()
            : ((y.current = 1),
              (x.className += ` ${g}`),
              x.addEventListener("animationend", v)));
      }, [f]),
      U.createElement(U.Fragment, null, l)
    );
  };
}
function E0(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const rt = new Map();
let aa = [];
const Tf = new Set(),
  iT = (e) => Tf.forEach((t) => t(e)),
  Zj = () => rt.size > 0;
function ew(e, t) {
  var n;
  if (t) return !((n = rt.get(t)) == null || !n.isToastActive(e));
  let r = !1;
  return (
    rt.forEach((i) => {
      i.isToastActive(e) && (r = !0);
    }),
    r
  );
}
function tw(e, t) {
  Af(e) &&
    (Zj() || aa.push({ content: e, options: t }),
    rt.forEach((n) => {
      n.buildToast(e, t);
    }));
}
function k0(e, t) {
  rt.forEach((n) => {
    t != null && t != null && t.containerId
      ? (t == null ? void 0 : t.containerId) === n.id &&
        n.toggle(e, t == null ? void 0 : t.id)
      : n.toggle(e, t == null ? void 0 : t.id);
  });
}
function sT(e) {
  const {
    subscribe: t,
    getSnapshot: n,
    setProps: r,
  } = w.useRef(
    (function (s) {
      const o = s.containerId || 1;
      return {
        subscribe(l) {
          const c = (function (d, h, f) {
            let m = 1,
              p = 0,
              g = [],
              y = [],
              x = [],
              v = h;
            const b = new Map(),
              S = new Set(),
              C = () => {
                (x = Array.from(b.values())), S.forEach((E) => E());
              },
              k = (E) => {
                (y = E == null ? [] : y.filter((I) => I !== E)), C();
              },
              _ = (E) => {
                const {
                    toastId: I,
                    onOpen: N,
                    updateId: R,
                    children: z,
                  } = E.props,
                  ee = R == null;
                E.staleId && b.delete(E.staleId),
                  b.set(I, E),
                  (y = [...y, E.props.toastId].filter(
                    (ae) => ae !== E.staleId
                  )),
                  C(),
                  f(E0(E, ee ? "added" : "updated")),
                  ee && Et(N) && N(w.isValidElement(z) && z.props);
              };
            return {
              id: d,
              props: v,
              observe: (E) => (S.add(E), () => S.delete(E)),
              toggle: (E, I) => {
                b.forEach((N) => {
                  (I != null && I !== N.props.toastId) ||
                    (Et(N.toggle) && N.toggle(E));
                });
              },
              removeToast: k,
              toasts: b,
              clearQueue: () => {
                (p -= g.length), (g = []);
              },
              buildToast: (E, I) => {
                if (
                  ((B) => {
                    let { containerId: se, toastId: Q, updateId: ce } = B;
                    const ne = se ? se !== d : d !== 1,
                      Pe = b.has(Q) && ce == null;
                    return ne || Pe;
                  })(I)
                )
                  return;
                const {
                    toastId: N,
                    updateId: R,
                    data: z,
                    staleId: ee,
                    delay: ae,
                  } = I,
                  K = () => {
                    k(N);
                  },
                  G = R == null;
                G && p++;
                const te = {
                  ...v,
                  style: v.toastStyle,
                  key: m++,
                  ...Object.fromEntries(
                    Object.entries(I).filter((B) => {
                      let [se, Q] = B;
                      return Q != null;
                    })
                  ),
                  toastId: N,
                  updateId: R,
                  data: z,
                  closeToast: K,
                  isIn: !1,
                  className: ql(I.className || v.toastClassName),
                  bodyClassName: ql(I.bodyClassName || v.bodyClassName),
                  progressClassName: ql(
                    I.progressClassName || v.progressClassName
                  ),
                  autoClose:
                    !I.isLoading &&
                    ((O = I.autoClose),
                    (M = v.autoClose),
                    O === !1 || (oa(O) && O > 0) ? O : M),
                  deleteToast() {
                    const B = b.get(N),
                      { onClose: se, children: Q } = B.props;
                    Et(se) && se(w.isValidElement(Q) && Q.props),
                      f(E0(B, "removed")),
                      b.delete(N),
                      p--,
                      p < 0 && (p = 0),
                      g.length > 0 ? _(g.shift()) : C();
                  },
                };
                var O, M;
                (te.closeButton = v.closeButton),
                  I.closeButton === !1 || Af(I.closeButton)
                    ? (te.closeButton = I.closeButton)
                    : I.closeButton === !0 &&
                      (te.closeButton = !Af(v.closeButton) || v.closeButton);
                let D = E;
                w.isValidElement(E) && !Ii(E.type)
                  ? (D = w.cloneElement(E, {
                      closeToast: K,
                      toastProps: te,
                      data: z,
                    }))
                  : Et(E) &&
                    (D = E({ closeToast: K, toastProps: te, data: z }));
                const H = { content: D, props: te, staleId: ee };
                v.limit && v.limit > 0 && p > v.limit && G
                  ? g.push(H)
                  : oa(ae)
                  ? setTimeout(() => {
                      _(H);
                    }, ae)
                  : _(H);
              },
              setProps(E) {
                v = E;
              },
              setToggle: (E, I) => {
                b.get(E).toggle = I;
              },
              isToastActive: (E) => y.some((I) => I === E),
              getSnapshot: () => (v.newestOnTop ? x.reverse() : x),
            };
          })(o, s, iT);
          rt.set(o, c);
          const u = c.observe(l);
          return (
            aa.forEach((d) => tw(d.content, d.options)),
            (aa = []),
            () => {
              u(), rt.delete(o);
            }
          );
        },
        setProps(l) {
          var c;
          (c = rt.get(o)) == null || c.setProps(l);
        },
        getSnapshot() {
          var l;
          return (l = rt.get(o)) == null ? void 0 : l.getSnapshot();
        },
      };
    })(e)
  ).current;
  r(e);
  const i = w.useSyncExternalStore(t, n, n);
  return {
    getToastToRender: function (s) {
      if (!i) return [];
      const o = new Map();
      return (
        i.forEach((l) => {
          const { position: c } = l.props;
          o.has(c) || o.set(c, []), o.get(c).push(l);
        }),
        Array.from(o, (l) => s(l[0], l[1]))
      );
    },
    isToastActive: ew,
    count: i == null ? void 0 : i.length,
  };
}
function oT(e) {
  const [t, n] = w.useState(!1),
    [r, i] = w.useState(!1),
    s = w.useRef(null),
    o = w.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: l,
      pauseOnHover: c,
      closeToast: u,
      onClick: d,
      closeOnClick: h,
    } = e;
  var f, m;
  function p() {
    n(!0);
  }
  function g() {
    n(!1);
  }
  function y(b) {
    const S = s.current;
    o.canDrag &&
      S &&
      ((o.didMove = !0),
      t && g(),
      (o.delta =
        e.draggableDirection === "x"
          ? b.clientX - o.start
          : b.clientY - o.start),
      o.start !== b.clientX && (o.canCloseOnClick = !1),
      (S.style.transform = `translate3d(${
        e.draggableDirection === "x"
          ? `${o.delta}px, var(--y)`
          : `0, calc(${o.delta}px + var(--y))`
      },0)`),
      (S.style.opacity = "" + (1 - Math.abs(o.delta / o.removalDistance))));
  }
  function x() {
    document.removeEventListener("pointermove", y),
      document.removeEventListener("pointerup", x);
    const b = s.current;
    if (o.canDrag && o.didMove && b) {
      if (((o.canDrag = !1), Math.abs(o.delta) > o.removalDistance))
        return i(!0), e.closeToast(), void e.collapseAll();
      (b.style.transition = "transform 0.2s, opacity 0.2s"),
        b.style.removeProperty("transform"),
        b.style.removeProperty("opacity");
    }
  }
  (m = rt.get(
    (f = { id: e.toastId, containerId: e.containerId, fn: n }).containerId || 1
  )) == null || m.setToggle(f.id, f.fn),
    w.useEffect(() => {
      if (e.pauseOnFocusLoss)
        return (
          document.hasFocus() || g(),
          window.addEventListener("focus", p),
          window.addEventListener("blur", g),
          () => {
            window.removeEventListener("focus", p),
              window.removeEventListener("blur", g);
          }
        );
    }, [e.pauseOnFocusLoss]);
  const v = {
    onPointerDown: function (b) {
      if (e.draggable === !0 || e.draggable === b.pointerType) {
        (o.didMove = !1),
          document.addEventListener("pointermove", y),
          document.addEventListener("pointerup", x);
        const S = s.current;
        (o.canCloseOnClick = !0),
          (o.canDrag = !0),
          (S.style.transition = "none"),
          e.draggableDirection === "x"
            ? ((o.start = b.clientX),
              (o.removalDistance = S.offsetWidth * (e.draggablePercent / 100)))
            : ((o.start = b.clientY),
              (o.removalDistance =
                (S.offsetHeight *
                  (e.draggablePercent === 80
                    ? 1.5 * e.draggablePercent
                    : e.draggablePercent)) /
                100));
      }
    },
    onPointerUp: function (b) {
      const {
        top: S,
        bottom: C,
        left: k,
        right: _,
      } = s.current.getBoundingClientRect();
      b.nativeEvent.type !== "touchend" &&
      e.pauseOnHover &&
      b.clientX >= k &&
      b.clientX <= _ &&
      b.clientY >= S &&
      b.clientY <= C
        ? g()
        : p();
    },
  };
  return (
    l && c && ((v.onMouseEnter = g), e.stacked || (v.onMouseLeave = p)),
    h &&
      (v.onClick = (b) => {
        d && d(b), o.canCloseOnClick && u();
      }),
    {
      playToast: p,
      pauseToast: g,
      isRunning: t,
      preventExitTransition: r,
      toastRef: s,
      eventHandlers: v,
    }
  );
}
function aT(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: i = "default",
    hide: s,
    className: o,
    style: l,
    controlledProgress: c,
    progress: u,
    rtl: d,
    isIn: h,
    theme: f,
  } = e;
  const m = s || (c && u === 0),
    p = {
      ...l,
      animationDuration: `${t}ms`,
      animationPlayState: n ? "running" : "paused",
    };
  c && (p.transform = `scaleX(${u})`);
  const g = Gt(
      "Toastify__progress-bar",
      c
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${f}`,
      `Toastify__progress-bar--${i}`,
      { "Toastify__progress-bar--rtl": d }
    ),
    y = Et(o) ? o({ rtl: d, type: i, defaultClassName: g }) : Gt(g, o),
    x = {
      [c && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        c && u < 1
          ? null
          : () => {
              h && r();
            },
    };
  return U.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": m },
    U.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${i}`,
    }),
    U.createElement("div", {
      role: "progressbar",
      "aria-hidden": m ? "true" : "false",
      "aria-label": "notification timer",
      className: y,
      style: p,
      ...x,
    })
  );
}
let lT = 1;
const nw = () => "" + lT++;
function cT(e) {
  return e && (Ii(e.toastId) || oa(e.toastId)) ? e.toastId : nw();
}
function Io(e, t) {
  return tw(e, t), t.toastId;
}
function Dc(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: cT(t) };
}
function cl(e) {
  return (t, n) => Io(t, Dc(e, n));
}
function Z(e, t) {
  return Io(e, Dc("default", t));
}
(Z.loading = (e, t) =>
  Io(
    e,
    Dc("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  (Z.promise = function (e, t, n) {
    let r,
      { pending: i, error: s, success: o } = t;
    i && (r = Ii(i) ? Z.loading(i, n) : Z.loading(i.render, { ...n, ...i }));
    const l = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      c = (d, h, f) => {
        if (h == null) return void Z.dismiss(r);
        const m = { type: d, ...l, ...n, data: f },
          p = Ii(h) ? { render: h } : h;
        return r ? Z.update(r, { ...m, ...p }) : Z(p.render, { ...m, ...p }), f;
      },
      u = Et(e) ? e() : e;
    return u.then((d) => c("success", o, d)).catch((d) => c("error", s, d)), u;
  }),
  (Z.success = cl("success")),
  (Z.info = cl("info")),
  (Z.error = cl("error")),
  (Z.warning = cl("warning")),
  (Z.warn = Z.warning),
  (Z.dark = (e, t) => Io(e, Dc("default", { theme: "dark", ...t }))),
  (Z.dismiss = function (e) {
    (function (t) {
      var n;
      if (Zj()) {
        if (t == null || Ii((n = t)) || oa(n))
          rt.forEach((r) => {
            r.removeToast(t);
          });
        else if (t && ("containerId" in t || "id" in t)) {
          const r = rt.get(t.containerId);
          r
            ? r.removeToast(t.id)
            : rt.forEach((i) => {
                i.removeToast(t.id);
              });
        }
      } else aa = aa.filter((r) => t != null && r.options.toastId !== t);
    })(e);
  }),
  (Z.clearWaitingQueue = function (e) {
    e === void 0 && (e = {}),
      rt.forEach((t) => {
        !t.props.limit ||
          (e.containerId && t.id !== e.containerId) ||
          t.clearQueue();
      });
  }),
  (Z.isActive = ew),
  (Z.update = function (e, t) {
    t === void 0 && (t = {});
    const n = ((r, i) => {
      var s;
      let { containerId: o } = i;
      return (s = rt.get(o || 1)) == null ? void 0 : s.toasts.get(r);
    })(e, t);
    if (n) {
      const { props: r, content: i } = n,
        s = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: nw() };
      s.toastId !== e && (s.staleId = e);
      const o = s.render || i;
      delete s.render, Io(o, s);
    }
  }),
  (Z.done = (e) => {
    Z.update(e, { progress: 1 });
  }),
  (Z.onChange = function (e) {
    return (
      Tf.add(e),
      () => {
        Tf.delete(e);
      }
    );
  }),
  (Z.play = (e) => k0(!0, e)),
  (Z.pause = (e) => k0(!1, e));
const uT = typeof window < "u" ? w.useLayoutEffect : w.useEffect,
  ul = (e) => {
    let { theme: t, type: n, isLoading: r, ...i } = e;
    return U.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...i,
    });
  },
  Vd = {
    info: function (e) {
      return U.createElement(
        ul,
        { ...e },
        U.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        })
      );
    },
    warning: function (e) {
      return U.createElement(
        ul,
        { ...e },
        U.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        })
      );
    },
    success: function (e) {
      return U.createElement(
        ul,
        { ...e },
        U.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        })
      );
    },
    error: function (e) {
      return U.createElement(
        ul,
        { ...e },
        U.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        })
      );
    },
    spinner: function () {
      return U.createElement("div", { className: "Toastify__spinner" });
    },
  },
  dT = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: i,
        playToast: s,
      } = oT(e),
      {
        closeButton: o,
        children: l,
        autoClose: c,
        onClick: u,
        type: d,
        hideProgressBar: h,
        closeToast: f,
        transition: m,
        position: p,
        className: g,
        style: y,
        bodyClassName: x,
        bodyStyle: v,
        progressClassName: b,
        progressStyle: S,
        updateId: C,
        role: k,
        progress: _,
        rtl: E,
        toastId: I,
        deleteToast: N,
        isIn: R,
        isLoading: z,
        closeOnClick: ee,
        theme: ae,
      } = e,
      K = Gt(
        "Toastify__toast",
        `Toastify__toast-theme--${ae}`,
        `Toastify__toast--${d}`,
        { "Toastify__toast--rtl": E },
        { "Toastify__toast--close-on-click": ee }
      ),
      G = Et(g)
        ? g({ rtl: E, position: p, type: d, defaultClassName: K })
        : Gt(K, g),
      te = (function (H) {
        let { theme: B, type: se, isLoading: Q, icon: ce } = H,
          ne = null;
        const Pe = { theme: B, type: se };
        return (
          ce === !1 ||
            (Et(ce)
              ? (ne = ce({ ...Pe, isLoading: Q }))
              : w.isValidElement(ce)
              ? (ne = w.cloneElement(ce, Pe))
              : Q
              ? (ne = Vd.spinner())
              : ((bt) => bt in Vd)(se) && (ne = Vd[se](Pe))),
          ne
        );
      })(e),
      O = !!_ || !c,
      M = { closeToast: f, type: d, theme: ae };
    let D = null;
    return (
      o === !1 ||
        (D = Et(o)
          ? o(M)
          : w.isValidElement(o)
          ? w.cloneElement(o, M)
          : (function (H) {
              let { closeToast: B, theme: se, ariaLabel: Q = "close" } = H;
              return U.createElement(
                "button",
                {
                  className: `Toastify__close-button Toastify__close-button--${se}`,
                  type: "button",
                  onClick: (ce) => {
                    ce.stopPropagation(), B(ce);
                  },
                  "aria-label": Q,
                },
                U.createElement(
                  "svg",
                  { "aria-hidden": "true", viewBox: "0 0 14 16" },
                  U.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
                  })
                )
              );
            })(M)),
      U.createElement(
        m,
        {
          isIn: R,
          done: N,
          position: p,
          preventExitTransition: n,
          nodeRef: r,
          playToast: s,
        },
        U.createElement(
          "div",
          {
            id: I,
            onClick: u,
            "data-in": R,
            className: G,
            ...i,
            style: y,
            ref: r,
          },
          U.createElement(
            "div",
            {
              ...(R && { role: k }),
              className: Et(x) ? x({ type: d }) : Gt("Toastify__toast-body", x),
              style: v,
            },
            te != null &&
              U.createElement(
                "div",
                {
                  className: Gt("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !z,
                  }),
                },
                te
              ),
            U.createElement("div", null, l)
          ),
          D,
          U.createElement(aT, {
            ...(C && !O ? { key: `pb-${C}` } : {}),
            rtl: E,
            theme: ae,
            delay: c,
            isRunning: t,
            isIn: R,
            closeToast: f,
            hide: h,
            type: d,
            style: S,
            className: b,
            controlledProgress: O,
            progress: _ || 0,
          })
        )
      )
    );
  },
  Du = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  hT = Ou(Du("bounce", !0));
Ou(Du("slide", !0));
Ou(Du("zoom"));
Ou(Du("flip"));
const fT = {
  position: "top-right",
  transition: hT,
  autoClose: 5e3,
  closeButton: !0,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  draggable: "touch",
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert",
  theme: "light",
};
function Mu(e) {
  let t = { ...fT, ...e };
  const n = e.stacked,
    [r, i] = w.useState(!0),
    s = w.useRef(null),
    { getToastToRender: o, isToastActive: l, count: c } = sT(t),
    { className: u, style: d, rtl: h, containerId: f } = t;
  function m(g) {
    const y = Gt(
      "Toastify__toast-container",
      `Toastify__toast-container--${g}`,
      { "Toastify__toast-container--rtl": h }
    );
    return Et(u)
      ? u({ position: g, rtl: h, defaultClassName: y })
      : Gt(y, ql(u));
  }
  function p() {
    n && (i(!0), Z.play());
  }
  return (
    uT(() => {
      if (n) {
        var g;
        const y = s.current.querySelectorAll('[data-in="true"]'),
          x = 12,
          v = (g = t.position) == null ? void 0 : g.includes("top");
        let b = 0,
          S = 0;
        Array.from(y)
          .reverse()
          .forEach((C, k) => {
            const _ = C;
            _.classList.add("Toastify__toast--stacked"),
              k > 0 && (_.dataset.collapsed = `${r}`),
              _.dataset.pos || (_.dataset.pos = v ? "top" : "bot");
            const E = b * (r ? 0.2 : 1) + (r ? 0 : x * k);
            _.style.setProperty("--y", `${v ? E : -1 * E}px`),
              _.style.setProperty("--g", `${x}`),
              _.style.setProperty("--s", "" + (1 - (r ? S : 0))),
              (b += _.offsetHeight),
              (S += 0.025);
          });
      }
    }, [r, c, n]),
    U.createElement(
      "div",
      {
        ref: s,
        className: "Toastify",
        id: f,
        onMouseEnter: () => {
          n && (i(!1), Z.pause());
        },
        onMouseLeave: p,
      },
      o((g, y) => {
        const x = y.length ? { ...d } : { ...d, pointerEvents: "none" };
        return U.createElement(
          "div",
          { className: m(g), style: x, key: `container-${g}` },
          y.map((v) => {
            let { content: b, props: S } = v;
            return U.createElement(
              dT,
              {
                ...S,
                stacked: n,
                collapseAll: p,
                isIn: l(S.toastId, S.containerId),
                style: S.style,
                key: `toast-${S.key}`,
              },
              b
            );
          })
        );
      })
    )
  );
}
const gg = j.div`
  display: ${({ isDashboard: e }) => (e ? "block" : "flex")};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`,
  mg = j.div`
  flex: 1;
  padding: 20px;
`,
  xg = j.h1`
  margin-bottom: 20px;
`,
  rw = j.form`
  margin-bottom: 20px;
`,
  iw = j.div`
  margin-bottom: 10px;
`,
  sw = j.label`
  display: block;
  margin-bottom: 5px;
`,
  ow = j.textarea`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  aw = j.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`,
  Lu = j.ul`
  list-style: none;
  padding: 0;
`,
  Ru = j.li`
  margin-bottom: 10px;
`,
  Fu = j.p`
  font-size: 16px;
`;
j.div`
  display: block;
`;
j.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;
const zu = j.div`
  color: #777;
  font-size: 12px;
`;
j.h3`
  margin-bottom: 10px;
`;
const lw = ({ isDashboard: e }) => {
    const [t, n] = w.useState(""),
      [r, i] = w.useState([]),
      s = async () => {
        try {
          const l = await T.get(
            "https://bticlz.onrender.com/api/v1/announcements/getall"
          );
          i(l.data.announcements);
        } catch (l) {
          console.error("Error fetching announcements:", l);
        }
      };
    w.useEffect(() => {
      s();
    }, []);
    const o = async (l) => {
      l.preventDefault();
      try {
        const c = await T.post(
          "https://bticlz.onrender.com/api/v1/announcements",
          { announcement: t, date: new Date() }
        );
        console.log("Announcement sent:", c.data),
          Z.success("Announcement sent successfully"),
          n(""),
          s();
      } catch (c) {
        console.error("Error sending announcement:", c),
          Z.error("Error sending announcement");
      }
    };
    return a.jsx(nn, {
      children: a.jsxs(gg, {
        isDashboard: e,
        children: [
          a.jsx(Mu, {}),
          a.jsx(rn, {}),
          a.jsxs(mg, {
            children: [
              a.jsx(xg, { children: "Announcement" }),
              a.jsxs(rw, {
                onSubmit: o,
                children: [
                  a.jsxs(iw, {
                    children: [
                      a.jsx(sw, {
                        htmlFor: "announcement",
                        children: "Announcement:",
                      }),
                      a.jsx(ow, {
                        id: "announcement",
                        value: t,
                        onChange: (l) => n(l.target.value),
                        required: !0,
                        rows: 4,
                        cols: 50,
                      }),
                    ],
                  }),
                  a.jsx(aw, { type: "submit", children: "Send Announcement" }),
                ],
              }),
              a.jsx("h2", { children: "Announcements" }),
              a.jsx(Lu, {
                children: r.map((l) =>
                  a.jsxs(
                    Ru,
                    {
                      children: [
                        a.jsx(Fu, { children: l.announcement }),
                        a.jsx(zu, {
                          children: new Date(l.date).toLocaleDateString(),
                        }),
                      ],
                    },
                    l._id
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    });
  },
  vg = j.div`
  display: ${({ isDashboard: e }) => (e ? "block" : "flex")};
`,
  yg = j.div`
  flex: 1;
`,
  cw = j.div`
  padding: 20px;
`,
  la = j.h2`
  font-size: 24px;
  margin-bottom: 20px;
`,
  uw = j.div`
  margin-bottom: 20px;
`,
  dw = j.div`
  display: block;
`,
  pT = j.div`
  flex: 0 0 250px; /* Sidebar width */
`,
  gT = j.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`,
  mT = j.div`
  margin-bottom: 20px;
`,
  xT = j.div`
  font-weight: bold;
`,
  hw = ({ isDashboard: e }) => {
    const [t, n] = w.useState([]),
      [r, i] = w.useState(!0),
      s = { averageScore: 85, totalStudents: 100 };
    return (
      w.useEffect(() => {
        (async () => {
          try {
            const l = await T.get(
              "https://bticlz.onrender.com/api/v1/students/getall"
            );
            console.log("Students Response:", l.data);
            const c = l.data.students;
            if (!Array.isArray(c))
              throw new Error("Expected an array of students");
            const u = await Promise.all(
              c.map(async (d) => {
                try {
                  const h = await T.get(
                    `https://bticlz.onrender.com/api/v1/marks/percentage/${d._id}`
                  );
                  return (
                    console.log("Percentage Response:", h.data),
                    {
                      id: d._id,
                      name: d.name,
                      score: h.data.externalPercentage,
                    }
                  );
                } catch (h) {
                  return (
                    console.error(
                      `Error fetching percentage for student ${d._id}:`,
                      h
                    ),
                    { id: d._id, name: d.name, score: null }
                  );
                }
              })
            );
            n(u), i(!1);
          } catch (l) {
            console.error("Error fetching individual performance data:", l),
              i(!1);
          }
        })();
      }, []),
      a.jsx(nn, {
        children: a.jsxs(vg, {
          isDashboard: e,
          children: [
            a.jsx(rn, {}),
            a.jsx(yg, {
              children: a.jsxs(cw, {
                children: [
                  a.jsx(la, { children: "School Performance" }),
                  a.jsxs(uw, {
                    children: [
                      a.jsxs("p", {
                        children: ["Average Score: ", s.averageScore],
                      }),
                      a.jsxs("p", {
                        children: ["Total Students: ", s.totalStudents],
                      }),
                    ],
                  }),
                  a.jsx(la, { children: "Individual Performance" }),
                  a.jsx(dw, {
                    children: r
                      ? a.jsx("p", { children: "Loading..." })
                      : t.map((o) =>
                          a.jsxs(
                            "p",
                            {
                              children: [
                                o.name,
                                ":",
                                " ",
                                o.score !== null ? `${o.score}%` : "Not found",
                              ],
                            },
                            o.id
                          )
                        ),
                  }),
                ],
              }),
            }),
          ],
        }),
      })
    );
  },
  vT = j.div`
  display: block;
`,
  bg = j.div`
  flex: 1;
  transition: margin-left 0.3s ease;
`,
  yT = j.div`
  gap: 20px;
  flex: 1; /* Take remaining space */
`,
  bT = j.div`
  display: block;
  margin-top: 20px;
  /* Make the content side by side */
  gap: 20px; /* Add gap between the components */
`,
  Ln = j.section`
  margin-bottom: 40px;
  flex: 1; /* Make the sections expand to fill the available space */
`,
  xs = j.h2`
  padding: 20px;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333; /* Darker text color */
`,
  jg = j.div`
  padding: 20px;
  display: flex;
  gap: 20px;
`,
  or = j.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  flex: 1;
  max-width: 250px;
  &:hover {
    transform: translateY(-5px);
  }
`,
  ar = j.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #007bff;
`,
  lr = j.p`
  font-size: 16px;
  color: #555555;
`,
  jT = j.div`
  display: block;
`,
  wT = j.div`
  display: block;
`,
  ST = () => {
    const [e, t] = w.useState([]),
      [n, r] = w.useState([]),
      [i, s] = w.useState([]),
      [o, l] = w.useState(0),
      [c, u] = w.useState(0),
      [d, h] = w.useState(0);
    w.useEffect(() => {
      f(), m(), p(), g(), y(), x();
    }, []);
    const f = async () => {
        try {
          const v = await T.get(
            "https://bticlz.onrender.com/api/v1/events/getall"
          );
          t(v.data.events || []);
        } catch (v) {
          console.error("Error fetching events:", v);
        }
      },
      m = async () => {
        try {
          const v = await T.get(
            "https://bticlz.onrender.com/api/v1/announcements/getall"
          );
          r(v.data.announcements || []);
        } catch (v) {
          console.error("Error fetching announcements:", v);
        }
      },
      p = async () => {
        try {
          const v = await T.get(
            "https://bticlz.onrender.com/api/v1/performance/getall"
          );
          s(v.data.performance || []);
        } catch (v) {
          console.error("Error fetching student performance:", v);
        }
      },
      g = async () => {
        try {
          const v = await T.get(
            "https://bticlz.onrender.com/api/v1/students/getall"
          );
          l(v.data.students.length);
        } catch (v) {
          console.error("Error fetching total students:", v);
        }
      },
      y = async () => {
        try {
          const v = await T.get(
            "https://bticlz.onrender.com/api/v1/teachers/getall"
          );
          u(v.data.teachers.length);
        } catch (v) {
          console.error("Error fetching total teachers:", v);
        }
      },
      x = async () => {
        try {
          const v = await T.get(
            "https://bticlz.onrender.com/api/v1/class/getall"
          );
          h(v.data.classes.length);
        } catch (v) {
          console.error("Error fetching total classes:", v);
        }
      };
    return a.jsx(nn, {
      children: a.jsx(rn, {
        children: a.jsx(vT, {
          children: a.jsxs(bg, {
            children: [
              a.jsxs(yT, {
                children: [
                  a.jsxs(Ln, {
                    children: [
                      a.jsx(xs, { children: "Overview" }),
                      a.jsxs(jg, {
                        children: [
                          a.jsxs(or, {
                            children: [
                              a.jsx(ar, { children: "Total Students" }),
                              a.jsx(lr, { children: o }),
                            ],
                          }),
                          a.jsxs(or, {
                            children: [
                              a.jsx(ar, { children: "Total Teachers" }),
                              a.jsx(lr, { children: c }),
                            ],
                          }),
                          a.jsxs(or, {
                            children: [
                              a.jsx(ar, { children: "Total Classes" }),
                              a.jsx(lr, { children: d }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsx(Ln, {
                    children: a.jsx(Jj, { events: e, isDashboard: !0 }),
                  }),
                ],
              }),
              a.jsxs(bT, {
                children: [
                  a.jsx(Ln, {
                    children: a.jsx(lw, { announcements: n, isDashboard: !0 }),
                  }),
                  a.jsx(Ln, {
                    children: a.jsx(hw, { performance: i, isDashboard: !0 }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  },
  fw = w.createContext(),
  CT = () => w.useContext(fw),
  mr = ({ children: e }) => {
    const [t, n] = w.useState(!0),
      r = () => n(!t);
    return a.jsx(fw.Provider, {
      value: { isOpen: t, toggleSidebar: r },
      children: e,
    });
  },
  _T = j.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen: e }) => (e ? "250px" : "80px")};
  height: 100%;
  background-color: #2c3e50;
  color: white;
  overflow-y: auto;
  padding-top: 60px;
  transition: width 0.3s ease;
  z-index: 100;
`,
  P0 = j.div`
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`,
  ET = j.ul`
  list-style: none;
  padding: 0;
`,
  Un = j.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #34495e;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #34495e;
  }
`,
  Gn = j(tn)`
  text-decoration: none;
  color: white;
  margin-left: 10px;
`,
  Yn = j.div`
  margin-right: 10px;
`,
  kT = j.img`
  width: ${({ isOpen: e }) => (e ? "150px" : "50px")};
  cursor: pointer;
  height: auto;
  transition: width 0.3s ease;
`,
  PT = j.div`
  position: absolute;
  top: 20px;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: #34495e;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,
  IT = j.span`
  color: white;
  font-size: 20px;
  transform: ${({ isOpen: e }) => (e ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`,
  NT = j.div`
  margin-left: ${({ isOpen: e }) => (e ? "265px" : "80px")};
  transition: margin-left 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`,
  AT = j.div`
  width: 100%;
  max-width: 1200px;
`,
  xr = ({ children: e }) => {
    const { isOpen: t, toggleSidebar: n } = CT();
    return a.jsxs(a.Fragment, {
      children: [
        a.jsxs(_T, {
          isOpen: t,
          children: [
            a.jsx(P0, {
              children: a.jsx(tn, {
                to: "/",
                children: a.jsx(kT, { src: rg, alt: "Logo", isOpen: t }),
              }),
            }),
            a.jsx(P0, { children: "Student" }),
            a.jsxs(ET, {
              children: [
                a.jsxs(Un, {
                  children: [
                    a.jsx(Yn, { children: a.jsx(ng, {}) }),
                    a.jsx(Gn, {
                      to: "/student/dashboard",
                      children: "Dashboard",
                    }),
                  ],
                }),
                a.jsxs(Un, {
                  children: [
                    a.jsx(Yn, { children: a.jsx(ra, {}) }),
                    a.jsx(Gn, { to: "/student/classes", children: "Classes" }),
                  ],
                }),
                a.jsxs(Un, {
                  children: [
                    a.jsx(Yn, { children: a.jsx(Zp, {}) }),
                    a.jsx(Gn, {
                      to: "/student/assignments",
                      children: "Assignments",
                    }),
                  ],
                }),
                a.jsxs(Un, {
                  children: [
                    a.jsx(Yn, { children: a.jsx(na, {}) }),
                    a.jsx(Gn, { to: "/student/exams", children: "Exams" }),
                  ],
                }),
                a.jsxs(Un, {
                  children: [
                    a.jsx(Yn, { children: a.jsx(tg, {}) }),
                    a.jsx(Gn, {
                      to: "/student/performance",
                      children: "Performance",
                    }),
                  ],
                }),
                a.jsxs(Un, {
                  children: [
                    a.jsx(Yn, { children: a.jsx(Xp, {}) }),
                    a.jsx(Gn, {
                      to: "/student/attendance",
                      children: "Attendance",
                    }),
                  ],
                }),
                a.jsxs(Un, {
                  children: [
                    a.jsx(Yn, { children: a.jsx(na, {}) }),
                    a.jsx(Gn, { to: "/student/library", children: "Library " }),
                  ],
                }),
                a.jsxs(Un, {
                  children: [
                    a.jsx(Yn, { children: a.jsx(Jp, {}) }),
                    a.jsx(Gn, {
                      to: "/student/communication",
                      children: "Announcement",
                    }),
                  ],
                }),
                a.jsxs(Un, {
                  children: [
                    a.jsx(Yn, { children: a.jsx(eg, {}) }),
                    a.jsx(Gn, { to: "/student/settings", children: "Profile" }),
                  ],
                }),
              ],
            }),
            a.jsx(PT, {
              onClick: n,
              children: a.jsx(IT, { isOpen: t, children: "▲" }),
            }),
          ],
        }),
        a.jsx(NT, { isOpen: t, children: a.jsx(AT, { children: e }) }),
      ],
    });
  },
  TT = () => {
    const [e, t] = w.useState(0),
      [n, r] = w.useState(0),
      [i, s] = w.useState(0),
      [o, l] = w.useState([]),
      [c, u] = w.useState([]);
    w.useEffect(() => {
      d(), h(), f(), m(), p();
    }, []);
    const d = async () => {
        try {
          const g = await T.get(
            "https://bticlz.onrender.com/api/v1/students/getall"
          );
          t(g.data.students.length);
        } catch (g) {
          console.error("Error fetching total students:", g);
        }
      },
      h = async () => {
        try {
          const g = await T.get(
            "https://bticlz.onrender.com/api/v1/teachers/getall"
          );
          r(g.data.teachers.length);
        } catch (g) {
          console.error("Error fetching total teachers:", g);
        }
      },
      f = async () => {
        try {
          const g = await T.get(
            "https://bticlz.onrender.com/api/v1/class/getall"
          );
          s(g.data.classes.length);
        } catch (g) {
          console.error("Error fetching total classes:", g);
        }
      },
      m = async () => {
        try {
          const g = await T.get(
            "https://bticlz.onrender.com/api/v1/announcements/getall"
          );
          l(g.data.announcements || []);
        } catch (g) {
          console.error("Error fetching announcements:", g);
        }
      },
      p = async () => {
        try {
          const g = await T.get(
            "https://bticlz.onrender.com/api/v1/events/getall"
          );
          u(g.data.events || []);
        } catch (g) {
          console.error("Error fetching events:", g);
        }
      };
    return a.jsx(mr, {
      children: a.jsx(xr, {
        children: a.jsx(jT, {
          children: a.jsxs(bg, {
            children: [
              a.jsxs(Ln, {
                children: [
                  a.jsx(xs, { children: "Overview" }),
                  a.jsxs(jg, {
                    children: [
                      a.jsxs(or, {
                        children: [
                          a.jsx(ar, { children: "Total Students" }),
                          a.jsx(lr, { children: e }),
                        ],
                      }),
                      a.jsxs(or, {
                        children: [
                          a.jsx(ar, { children: "Total Teachers" }),
                          a.jsx(lr, { children: n }),
                        ],
                      }),
                      a.jsxs(or, {
                        children: [
                          a.jsx(ar, { children: "Total Classes" }),
                          a.jsx(lr, { children: i }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs(Ln, {
                children: [
                  a.jsx(xs, { children: "Recent Activity" }),
                  a.jsx(Lu, {
                    children: o.map((g) =>
                      a.jsxs(
                        Ru,
                        {
                          children: [
                            a.jsx(Fu, { children: g.announcement }),
                            a.jsx(zu, {
                              children: new Date(g.date).toLocaleDateString(),
                            }),
                          ],
                        },
                        g._id
                      )
                    ),
                  }),
                ],
              }),
              a.jsxs(Ln, {
                children: [
                  a.jsx(xs, { children: "Upcoming Events" }),
                  a.jsx(Au, {
                    isDashboard: !0,
                    children: c.map((g, y) =>
                      a.jsxs(
                        Tu,
                        {
                          children: [
                            a.jsx("div", { children: g.event }),
                            a.jsx("div", {
                              children: new Date(g.date).toLocaleDateString(),
                            }),
                          ],
                        },
                        y
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  },
  pw = w.createContext(),
  OT = () => w.useContext(pw),
  jn = ({ children: e }) => {
    const [t, n] = w.useState(!0),
      r = () => n(!t);
    return a.jsx(pw.Provider, {
      value: { isOpen: t, toggleSidebar: r },
      children: e,
    });
  },
  DT = j.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen: e }) => (e ? "250px" : "80px")}; /* Aligning width */
  height: 100%;
  background-color: #2c3e50;
  color: white;
  overflow-y: auto;
  padding-top: 60px;
  transition: width 0.3s ease;
  z-index: 100;
`,
  I0 = j.div`
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`,
  MT = j.ul`
  list-style: none;
  padding: 0;
`,
  un = j.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #34495e;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #34495e;
  }
`,
  dn = j(tn)`
  text-decoration: none;
  color: white;
  margin-left: 10px;
`,
  hn = j.div`
  margin-right: 10px;
`,
  LT = j.img`
  width: ${({ isOpen: e }) => (e ? "150px" : "50px")}; /* Aligning width */
  cursor: pointer;
  height: auto;
  transition: width 0.3s ease;
`,
  RT = j.div`
  position: absolute;
  top: 20px;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: #34495e;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,
  FT = j.span`
  color: white;
  font-size: 20px;
  transform: ${({ isOpen: e }) => (e ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`,
  zT = j.div`
  margin-left: ${({ isOpen: e }) =>
    e ? "265px" : "80px"}; /* Aligning margin */
  transition: margin-left 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`,
  $T = j.div`
  width: 100%;
  max-width: 1200px;
`,
  wn = ({ children: e }) => {
    const { isOpen: t, toggleSidebar: n } = OT();
    return a.jsxs(a.Fragment, {
      children: [
        a.jsxs(DT, {
          isOpen: t,
          children: [
            a.jsx(I0, {
              children: a.jsx(tn, {
                to: "/",
                children: a.jsx(LT, { src: rg, alt: "Logo", isOpen: t }),
              }),
            }),
            a.jsx(I0, { children: "Teacher" }),
            a.jsxs(MT, {
              children: [
                a.jsxs(un, {
                  children: [
                    a.jsx(hn, { children: a.jsx(ng, {}) }),
                    a.jsx(dn, {
                      to: "/teacher/dashboard",
                      children: "Dashboard",
                    }),
                  ],
                }),
                a.jsxs(un, {
                  children: [
                    a.jsx(hn, { children: a.jsx(ra, {}) }),
                    a.jsx(dn, { to: "/teacher/classes", children: "Classes" }),
                  ],
                }),
                a.jsxs(un, {
                  children: [
                    a.jsx(hn, { children: a.jsx(ra, {}) }),
                    a.jsx(dn, {
                      to: "/teacher/students",
                      children: "Students",
                    }),
                  ],
                }),
                a.jsxs(un, {
                  children: [
                    a.jsx(hn, { children: a.jsx(yj, {}) }),
                    a.jsx(dn, {
                      to: "/teacher/teachers",
                      children: "Teachers",
                    }),
                  ],
                }),
                a.jsxs(un, {
                  children: [
                    a.jsx(hn, { children: a.jsx(Zp, {}) }),
                    a.jsx(dn, {
                      to: "/teacher/assignments",
                      children: "Assignments",
                    }),
                  ],
                }),
                a.jsxs(un, {
                  children: [
                    a.jsx(hn, { children: a.jsx(na, {}) }),
                    a.jsx(dn, { to: "/teacher/exams", children: "Exams" }),
                  ],
                }),
                a.jsxs(un, {
                  children: [
                    a.jsx(hn, { children: a.jsx(tg, {}) }),
                    a.jsx(dn, {
                      to: "/teacher/performance",
                      children: "Performance",
                    }),
                  ],
                }),
                a.jsxs(un, {
                  children: [
                    a.jsx(hn, { children: a.jsx(Xp, {}) }),
                    a.jsx(dn, {
                      to: "/teacher/attendance",
                      children: "Attendance",
                    }),
                  ],
                }),
                a.jsxs(un, {
                  children: [
                    a.jsx(hn, { children: a.jsx(Jp, {}) }),
                    a.jsx(dn, {
                      to: "/teacher/communication",
                      children: "Announcement",
                    }),
                  ],
                }),
                a.jsxs(un, {
                  children: [
                    a.jsx(hn, { children: a.jsx(vj, {}) }),
                    a.jsx(dn, {
                      to: "/teacher/events",
                      children: "Events & Calendar",
                    }),
                  ],
                }),
                a.jsxs(un, {
                  children: [
                    a.jsx(hn, { children: a.jsx(eg, {}) }),
                    a.jsx(dn, {
                      to: "/teacher/settings",
                      children: "Settings & Profile",
                    }),
                  ],
                }),
              ],
            }),
            a.jsx(RT, {
              onClick: n,
              children: a.jsx(FT, { isOpen: t, children: "▲" }),
            }),
          ],
        }),
        a.jsx(zT, { isOpen: t, children: a.jsx($T, { children: e }) }),
      ],
    });
  },
  gw = ({ isDashboard: e }) => {
    const [t, n] = w.useState(""),
      [r, i] = w.useState([]),
      s = async () => {
        try {
          const l = await T.get(
            "https://bticlz.onrender.com/api/v1/announcements/getall"
          );
          i(l.data.announcements);
        } catch (l) {
          console.error("Error fetching announcements:", l);
        }
      };
    w.useEffect(() => {
      s();
    }, []);
    const o = async (l) => {
      l.preventDefault();
      try {
        const c = await T.post(
          "https://bticlz.onrender.com/api/v1/announcements",
          { announcement: t, date: new Date() }
        );
        console.log("Announcement sent:", c.data),
          Z.success("Announcement sent successfully"),
          n(""),
          s();
      } catch (c) {
        console.error("Error sending announcement:", c),
          Z.error("Error sending announcement");
      }
    };
    return a.jsx(jn, {
      children: a.jsxs(gg, {
        isDashboard: e,
        children: [
          a.jsx(Mu, {}),
          a.jsx(wn, {}),
          a.jsxs(mg, {
            children: [
              a.jsx(xg, { children: "Announcement" }),
              a.jsxs(rw, {
                onSubmit: o,
                children: [
                  a.jsxs(iw, {
                    children: [
                      a.jsx(sw, {
                        htmlFor: "announcement",
                        children: "Announcement:",
                      }),
                      a.jsx(ow, {
                        id: "announcement",
                        value: t,
                        onChange: (l) => n(l.target.value),
                        required: !0,
                        rows: 4,
                        cols: 50,
                      }),
                    ],
                  }),
                  a.jsx(aw, { type: "submit", children: "Send Announcement" }),
                ],
              }),
              a.jsx("h2", { children: "Announcements" }),
              a.jsx(Lu, {
                children: r.map((l) =>
                  a.jsxs(
                    Ru,
                    {
                      children: [
                        a.jsx(Fu, { children: l.announcement }),
                        a.jsx(zu, {
                          children: new Date(l.date).toLocaleDateString(),
                        }),
                      ],
                    },
                    l._id
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    });
  },
  BT = () => {
    const [e, t] = w.useState(0),
      [n, r] = w.useState(0),
      [i, s] = w.useState(0),
      [o, l] = w.useState([]),
      [c, u] = w.useState([]);
    w.useEffect(() => {
      d(), h(), f(), m(), p();
    }, []);
    const d = async () => {
        try {
          const g = await T.get(
            "https://bticlz.onrender.com/api/v1/students/getall"
          );
          t(g.data.students.length);
        } catch (g) {
          console.error("Error fetching total students:", g);
        }
      },
      h = async () => {
        try {
          const g = await T.get(
            "https://bticlz.onrender.com/api/v1/teachers/getall"
          );
          r(g.data.teachers.length);
        } catch (g) {
          console.error("Error fetching total teachers:", g);
        }
      },
      f = async () => {
        try {
          const g = await T.get(
            "https://bticlz.onrender.com/api/v1/class/getall"
          );
          s(g.data.classes.length);
        } catch (g) {
          console.error("Error fetching total classes:", g);
        }
      },
      m = async () => {
        try {
          const g = await T.get(
            "https://bticlz.onrender.com/api/v1/announcements/getall"
          );
          l(g.data.announcements || []);
        } catch (g) {
          console.error("Error fetching announcements:", g);
        }
      },
      p = async () => {
        try {
          const g = await T.get(
            "https://bticlz.onrender.com/api/v1/events/getall"
          );
          u(g.data.events || []);
        } catch (g) {
          console.error("Error fetching events:", g);
        }
      };
    return a.jsx(jn, {
      children: a.jsx(wn, {
        children: a.jsx(wT, {
          children: a.jsxs(bg, {
            children: [
              a.jsxs(Ln, {
                children: [
                  a.jsx(xs, { children: "Overview" }),
                  a.jsxs(jg, {
                    children: [
                      a.jsxs(or, {
                        children: [
                          a.jsx(ar, { children: "Total Students" }),
                          a.jsx(lr, { children: e }),
                        ],
                      }),
                      a.jsxs(or, {
                        children: [
                          a.jsx(ar, { children: "Total Teachers" }),
                          a.jsx(lr, { children: n }),
                        ],
                      }),
                      a.jsxs(or, {
                        children: [
                          a.jsx(ar, { children: "Total Classes" }),
                          a.jsx(lr, { children: i }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a.jsx(Ln, {
                children: a.jsx(gw, { announcements: o, isDashboard: !0 }),
              }),
              a.jsxs(Ln, {
                children: [
                  a.jsx(xs, { children: "Upcoming Events" }),
                  a.jsx(Au, {
                    children: c.map((g, y) =>
                      a.jsxs(
                        Tu,
                        {
                          children: [
                            a.jsx("div", { children: g.event }),
                            a.jsx("div", {
                              children: new Date(g.date).toLocaleDateString(),
                            }),
                          ],
                        },
                        y
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  },
  WT = j.div`
  display: flex;
`,
  wg = j.div`
  flex: 1;
`,
  HT = j.div`
  padding: 20px;
`,
  VT = j.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;
j.ul`
  list-style: none;
  padding: 0;
`;
j.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const UT = j.form`
  margin-bottom: 20px;
`,
  GT = j.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  YT = j.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`,
  dl = j.select`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  mw = j.div`
  display: flex;
`,
  xw = j.div`
  display: block;
`,
  vw = j.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;
j.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;
j.button`
  padding: 10px;
  background-color: #2196f3;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
`;
const Sg = j.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`,
  Cg = j.tr`
  background-color: #f1f1f1;
`,
  _g = j.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`,
  it = j.td`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
`,
  qT = () => {
    const [e, t] = w.useState(""),
      [n, r] = w.useState([]),
      [i, s] = w.useState(""),
      [o, l] = w.useState(""),
      [c, u] = w.useState(""),
      [d, h] = w.useState("");
    w.useState(!0),
      w.useEffect(() => {
        f();
      }, []);
    const f = async () => {
        try {
          const p = await T.get(
            "https://bticlz.onrender.com/api/v1/class/getall"
          );
          p.data.classes
            ? r(p.data.classes)
            : console.error(
                "Error fetching classes: Invalid data format",
                p.data
              );
        } catch (p) {
          console.error("Error fetching classes:", p.message);
        }
      },
      m = async (p) => {
        if ((p.preventDefault(), e.trim() !== "" && i && o && c))
          try {
            const g = await T.post("https://bticlz.onrender.com/api/v1/class", {
              grade: e,
              department: i,
              semester: o,
              section: c,
              subSection: d,
            });
            console.log("Response data:", g.data),
              g.data.success
                ? (r((y) => [...y, g.data.class]),
                  t(""),
                  s(""),
                  l(""),
                  u(""),
                  h(""))
                : console.error(
                    "Error adding class: Response data invalid",
                    g.data
                  );
          } catch (g) {
            console.error("Error adding class:", g);
          }
      };
    return a.jsx(nn, {
      children: a.jsxs(WT, {
        children: [
          a.jsx(rn, {}),
          a.jsx(wg, {
            children: a.jsxs(HT, {
              children: [
                a.jsx(VT, { children: "Classes" }),
                a.jsxs(UT, {
                  onSubmit: m,
                  children: [
                    a.jsx(GT, {
                      type: "text",
                      placeholder: "Enter class name",
                      value: e,
                      onChange: (p) => t(p.target.value),
                    }),
                    a.jsxs(dl, {
                      value: i,
                      onChange: (p) => s(p.target.value),
                      children: [
                        a.jsx("option", {
                          value: "",
                          disabled: !0,
                          children: "Assign Department",
                        }),
                        a.jsx("option", {
                          value: "COMPUTER SCIENCE ENGINEERING",
                          children: "COMPUTER SCIENCE ENGINEERING",
                        }),
                        a.jsx("option", {
                          value: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
                          children:
                            "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
                        }),
                        a.jsx("option", {
                          value: "CIVIL ENGINEERING",
                          children: "CIVIL ENGINEERING",
                        }),
                        a.jsx("option", {
                          value: "ELECTRONICS AND COMMUNICATION ENGINEERING",
                          children: "ELECTRONICS AND COMMUNICATION ENGINEERING",
                        }),
                      ],
                    }),
                    i &&
                      a.jsxs(dl, {
                        value: o,
                        onChange: (p) => l(p.target.value),
                        children: [
                          a.jsx("option", {
                            value: "",
                            disabled: !0,
                            children: "Select Semester",
                          }),
                          a.jsx("option", { value: "1", children: "1" }),
                          a.jsx("option", { value: "2", children: "2" }),
                          a.jsx("option", { value: "3", children: "3" }),
                          a.jsx("option", { value: "4", children: "4" }),
                          a.jsx("option", { value: "5", children: "5" }),
                          a.jsx("option", { value: "6", children: "6" }),
                          a.jsx("option", { value: "7", children: "7" }),
                          a.jsx("option", { value: "8", children: "8" }),
                        ],
                      }),
                    o &&
                      a.jsxs(dl, {
                        value: c,
                        onChange: (p) => u(p.target.value),
                        children: [
                          a.jsx("option", {
                            value: "",
                            disabled: !0,
                            children: "Select Section",
                          }),
                          a.jsx("option", {
                            value: "P Cycle",
                            children: "P Cycle",
                          }),
                          a.jsx("option", {
                            value: "C Cycle",
                            children: "C Cycle",
                          }),
                          a.jsx("option", { value: "A", children: "A" }),
                          a.jsx("option", { value: "B", children: "B" }),
                          a.jsx("option", { value: "C", children: "C" }),
                          a.jsx("option", { value: "D", children: "D" }),
                          a.jsx("option", { value: "E", children: "E" }),
                          a.jsx("option", { value: "F", children: "F" }),
                        ],
                      }),
                    c &&
                      (c === "P Cycle" || c === "C Cycle") &&
                      a.jsxs(dl, {
                        value: d,
                        onChange: (p) => h(p.target.value),
                        children: [
                          a.jsx("option", {
                            value: "",
                            disabled: !0,
                            children: "Select Sub Section",
                          }),
                          c === "P Cycle" &&
                            a.jsxs(a.Fragment, {
                              children: [
                                a.jsx("option", {
                                  value: "P1",
                                  children: "P1",
                                }),
                                a.jsx("option", {
                                  value: "P2",
                                  children: "P2",
                                }),
                                a.jsx("option", {
                                  value: "P3",
                                  children: "P3",
                                }),
                                a.jsx("option", {
                                  value: "P4",
                                  children: "P4",
                                }),
                                a.jsx("option", {
                                  value: "P5",
                                  children: "P5",
                                }),
                              ],
                            }),
                          c === "C Cycle" &&
                            a.jsxs(a.Fragment, {
                              children: [
                                a.jsx("option", {
                                  value: "C1",
                                  children: "C1",
                                }),
                                a.jsx("option", {
                                  value: "C2",
                                  children: "C2",
                                }),
                                a.jsx("option", {
                                  value: "C3",
                                  children: "C3",
                                }),
                                a.jsx("option", {
                                  value: "C4",
                                  children: "C4",
                                }),
                                a.jsx("option", {
                                  value: "C5",
                                  children: "C5",
                                }),
                              ],
                            }),
                        ],
                      }),
                    a.jsx(YT, { type: "submit", children: "Add Class" }),
                  ],
                }),
                a.jsxs(Sg, {
                  children: [
                    a.jsx("thead", {
                      children: a.jsxs(Cg, {
                        children: [
                          a.jsx("th", { children: "Class Name" }),
                          a.jsx("th", { children: "Department" }),
                          a.jsx("th", { children: "Semester" }),
                          a.jsx("th", { children: "Section" }),
                          a.jsx("th", { children: "Sub Section" }),
                        ],
                      }),
                    }),
                    a.jsx("tbody", {
                      children: n.map((p, g) =>
                        a.jsxs(
                          _g,
                          {
                            children: [
                              a.jsx(it, { children: p.grade }),
                              a.jsx(it, { children: p.department }),
                              a.jsx(it, { children: p.semester }),
                              a.jsx(it, { children: p.section }),
                              a.jsx(it, { children: p.subSection || "N/A" }),
                            ],
                          },
                          g
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  KT = j.div`
  padding: 20px;
`,
  En = j.label`
  margin-bottom: 10px;
`,
  QT = j.input`
  padding: 8px;
  margin-bottom: 20px;
`,
  Ud = j.select`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  background-color: #fff;
  font-size: 16px;
`,
  N0 = j.input`
  padding: 8px;
  margin-right: 10px;
`,
  An = j.button`
  padding: 8px 12px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`,
  XT = j.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`,
  JT = j.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`,
  Bt = j.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`,
  ZT = () => {
    const { studentId: e } = ok(),
      t = Ot(),
      [n, r] = w.useState({
        subjectCode: "",
        examType: "",
        internalType: "",
        marks: "",
        fullMarks: "",
        passFail: "",
      }),
      [i, s] = w.useState([]),
      [o, l] = w.useState({});
    w.useEffect(() => {
      c();
    }, []);
    const c = async () => {
        try {
          const p = await T.get(
            `https://bticlz.onrender.com/api/v1/marks/${e}`
          );
          console.log("Fetched marks data:", p.data.marks), s(p.data.marks);
        } catch (p) {
          console.error("Error fetching marks data:", p);
        }
      },
      u = (p, g) => {
        r({ ...n, [p]: g });
      },
      d = async () => {
        try {
          const p = { ...n };
          p.examType !== "internal" && delete p.internalType,
            (await T.post(`https://bticlz.onrender.com/api/v1/marks/${e}`, p))
              .data.success
              ? (c(),
                r({
                  subjectCode: "",
                  examType: "",
                  internalType: "",
                  marks: "",
                  fullMarks: "",
                  passFail: "",
                }))
              : console.error("Error: API response data is not an object");
        } catch (p) {
          console.error("Error adding marks:", p);
        }
      },
      h = () => {
        t("/admin/dashboard");
      },
      f = async (p, g = !1) => {
        const y = i.filter((S) =>
          g ? S.examType === p : S.internalType === p
        );
        if (y.length === 0) {
          l((S) => ({ ...S, [p]: "N/A" }));
          return;
        }
        const x = y.reduce((S, C) => S + C.marks, 0),
          v = y.reduce((S, C) => S + C.fullMarks, 0);
        if (v === 0) {
          l((S) => ({ ...S, [p]: "N/A" }));
          return;
        }
        const b = ((x / v) * 100).toFixed(2);
        if ((l((S) => ({ ...S, [p]: b })), g))
          try {
            (
              await T.post(
                `https://bticlz.onrender.com/api/v1/marks/percentage/${e}`,
                { externalPercentage: b }
              )
            ).data.success ||
              console.error("Error updating external percentage");
          } catch (S) {
            console.error("Error updating external percentage:", S);
          }
      },
      m = (p) =>
        a.jsxs(XT, {
          children: [
            a.jsx("thead", {
              children: a.jsxs("tr", {
                children: [
                  a.jsx(Bt, { children: "Subject Code" }),
                  a.jsx(Bt, { children: "Exam Type" }),
                  a.jsx(Bt, { children: "Internal Type" }),
                  a.jsx(Bt, { children: "Full Marks" }),
                  a.jsx(Bt, { children: "Scored Marks" }),
                  a.jsx(Bt, { children: "Pass/Fail" }),
                ],
              }),
            }),
            a.jsx("tbody", {
              children: i
                .filter(p)
                .map((g) =>
                  a.jsxs(
                    JT,
                    {
                      children: [
                        a.jsx(Bt, { children: g.subjectCode }),
                        a.jsx(Bt, { children: g.examType }),
                        a.jsx(Bt, { children: g.internalType || "N/A" }),
                        a.jsx(Bt, { children: g.fullMarks }),
                        a.jsx(Bt, { children: g.marks }),
                        a.jsx(Bt, { children: g.passFail }),
                      ],
                    },
                    `${g.subjectCode}-${g.internalType || "external"}`
                  )
                ),
            }),
          ],
        });
    return a.jsxs(KT, {
      children: [
        a.jsx(En, { children: "Enter Subject Code:" }),
        a.jsx(QT, {
          type: "text",
          value: n.subjectCode,
          onChange: (p) => u("subjectCode", p.target.value),
          required: !0,
        }),
        a.jsx(En, { children: "Exam Type:" }),
        a.jsxs(Ud, {
          value: n.examType,
          onChange: (p) => u("examType", p.target.value),
          required: !0,
          children: [
            a.jsx("option", {
              value: "",
              disabled: !0,
              children: "Select Exam Type",
            }),
            a.jsx("option", { value: "internal", children: "Internal" }),
            a.jsx("option", { value: "external", children: "External" }),
          ],
        }),
        n.examType === "internal" &&
          a.jsxs(a.Fragment, {
            children: [
              a.jsx(En, { children: "Internal Type:" }),
              a.jsxs(Ud, {
                value: n.internalType,
                onChange: (p) => u("internalType", p.target.value),
                required: !0,
                children: [
                  a.jsx("option", {
                    value: "",
                    disabled: !0,
                    children: "Select Internal Type",
                  }),
                  a.jsx("option", {
                    value: "I INTERNAL",
                    children: "I INTERNAL",
                  }),
                  a.jsx("option", {
                    value: "II INTERNAL",
                    children: "II INTERNAL",
                  }),
                  a.jsx("option", {
                    value: "III INTERNAL",
                    children: "III INTERNAL",
                  }),
                ],
              }),
            ],
          }),
        a.jsx(En, { children: "Enter Marks:" }),
        a.jsx(N0, {
          type: "number",
          value: n.marks,
          onChange: (p) => u("marks", p.target.value),
          required: !0,
        }),
        a.jsx(En, { children: "Enter Full Marks:" }),
        a.jsx(N0, {
          type: "number",
          value: n.fullMarks,
          onChange: (p) => u("fullMarks", p.target.value),
          required: !0,
        }),
        a.jsx(En, { children: "Pass/Fail:" }),
        a.jsxs(Ud, {
          value: n.passFail,
          onChange: (p) => u("passFail", p.target.value),
          required: !0,
          children: [
            a.jsx("option", {
              value: "",
              disabled: !0,
              children: "Select Pass/Fail",
            }),
            a.jsx("option", { value: "pass", children: "Pass" }),
            a.jsx("option", { value: "fail", children: "Fail" }),
          ],
        }),
        a.jsx(An, { onClick: d, children: "Submit" }),
        a.jsx(An, { onClick: h, children: "Go to Dashboard" }),
        a.jsx(En, { children: "I INTERNAL" }),
        m((p) => p.internalType === "I INTERNAL"),
        a.jsx(An, {
          onClick: () => f("I INTERNAL"),
          children: "Calculate Overall Percentage",
        }),
        o["I INTERNAL"] &&
          a.jsxs("div", {
            children: ["Overall Percentage: ", o["I INTERNAL"], "%"],
          }),
        a.jsx(En, { children: "II INTERNAL" }),
        m((p) => p.internalType === "II INTERNAL"),
        a.jsx(An, {
          onClick: () => f("II INTERNAL"),
          children: "Calculate Overall Percentage",
        }),
        o["II INTERNAL"] &&
          a.jsxs("div", {
            children: ["Overall Percentage: ", o["II INTERNAL"], "%"],
          }),
        a.jsx(En, { children: "III INTERNAL" }),
        m((p) => p.internalType === "III INTERNAL"),
        a.jsx(An, {
          onClick: () => f("III INTERNAL"),
          children: "Calculate Overall Percentage",
        }),
        o["III INTERNAL"] &&
          a.jsxs("div", {
            children: ["Overall Percentage: ", o["III INTERNAL"], "%"],
          }),
        a.jsx(En, { children: "EXTERNAL" }),
        m((p) => p.examType === "external"),
        a.jsx(An, {
          onClick: () => f("external", !0),
          children: "Calculate Overall Percentage",
        }),
        o.external &&
          a.jsxs("div", {
            children: ["Overall Percentage: ", o.external, "%"],
          }),
      ],
    });
  },
  eO = () => {
    const e = Ot(),
      [t, n] = w.useState(""),
      r = () => {
        const s = localStorage.getItem("token");
        n(s);
      },
      i = () => {
        e("/student/library");
      };
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(An, { onClick: r, children: "Generate Borrow Token" }),
        t &&
          a.jsxs("div", {
            children: [
              a.jsx("p", {
                children:
                  "Your token had been generated go to the library and collect the book.",
              }),
              a.jsxs("p", { children: ["Token: ", t] }),
            ],
          }),
        a.jsx(An, { onClick: i, children: "Go Back" }),
      ],
    });
  },
  tO = () => {
    const e = Ot(),
      [t, n] = w.useState(""),
      r = () => {
        const s = localStorage.getItem("token");
        n(s);
      },
      i = () => {
        e("/student/library");
      };
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(An, { onClick: r, children: "Generate Borrow Token" }),
        t &&
          a.jsxs("div", {
            children: [
              a.jsx("p", {
                children:
                  "Your token had been generated go to the library and collect the book.",
              }),
              a.jsxs("p", { children: ["Token: ", t] }),
            ],
          }),
        a.jsx(An, { onClick: i, children: "Go Back" }),
      ],
    });
  },
  Eg = j.div`
  display: flex;
`,
  nO = j.div`
  display: block;
`,
  kg = j.div`
  flex: 1;
  padding: 20px;
`,
  rr = j.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;
j.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;
j.label`
  margin-bottom: 10px;
`;
j.input`
  padding: 8px;
  margin-bottom: 20px;
`;
j.select`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  background-color: #fff;
  font-size: 16px;
`;
j.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const rO = j.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`,
  iO = j.h3`
  margin-bottom: 10px;
`,
  sO = j.p`
  color: #555;
  margin-bottom: 10px;
`,
  oO = j.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`,
  Mc = j.ul`
  list-style-type: none;
  padding: 0;
`,
  Lc = j.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
`;
j.input`
  padding: 8px;
  margin-right: 10px;
`;
const Rc = j.button`
  padding: 8px 12px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`,
  aO = () => {
    const [e, t] = w.useState([]),
      [n, r] = w.useState(null);
    w.useEffect(() => {
      i();
    }, []);
    const i = async () => {
        try {
          const c = await T.get(
            "https://bticlz.onrender.com/api/v1/students/getall"
          );
          t(c.data.students);
        } catch (c) {
          console.error("Error fetching students:", c);
        }
      },
      s = (c) => {
        r(`/add-marks/${c}`);
      },
      o = (c, u, d, h) =>
        e.filter(
          (f) =>
            f.registrationNumber.includes(c) &&
            f.grade === u &&
            f.section === d &&
            (!h || f.subSection === h)
        ),
      l = (c, u) => {
        const d = ["1", "2", "3", "4", "5", "6", "7", "8"],
          h = ["P Cycle", "C Cycle", "A", "B", "C", "D", "E", "F"],
          f = {
            "P Cycle": ["P1", "P2", "P3", "P4", "P5"],
            "C Cycle": ["C1", "C2", "C3", "C4", "C5"],
          };
        return a.jsxs(a.Fragment, {
          children: [
            a.jsx(rr, { children: u }),
            d.map((m) =>
              h.map((p) => {
                let g = null;
                if (f[p])
                  g = f[p].map((y) => {
                    const x = o(c, m, p, y);
                    return x.length > 0
                      ? a.jsxs(
                          "div",
                          {
                            children: [
                              a.jsxs(rr, {
                                children: [
                                  "Semester ",
                                  m,
                                  " - Section ",
                                  p,
                                  " - Sub-Section",
                                  " ",
                                  y,
                                ],
                              }),
                              a.jsx(Mc, {
                                children: x.map((v) =>
                                  a.jsxs(
                                    Lc,
                                    {
                                      children: [
                                        a.jsxs("div", {
                                          children: [
                                            "Name: ",
                                            v.name,
                                            ", USN:",
                                            " ",
                                            v.registrationNumber,
                                          ],
                                        }),
                                        a.jsx("div", {
                                          children: a.jsx(Rc, {
                                            onClick: () => s(v._id),
                                            children: "Add Marks",
                                          }),
                                        }),
                                      ],
                                    },
                                    v._id
                                  )
                                ),
                              }),
                            ],
                          },
                          `${c}-${m}-${p}-${y}`
                        )
                      : null;
                  });
                else {
                  const y = o(c, m, p, null);
                  y.length > 0 &&
                    (g = a.jsxs(
                      "div",
                      {
                        children: [
                          a.jsxs(rr, {
                            children: ["Semester ", m, " - Section ", p],
                          }),
                          a.jsx(Mc, {
                            children: y.map((x) =>
                              a.jsxs(
                                Lc,
                                {
                                  children: [
                                    a.jsxs("div", {
                                      children: [
                                        "Name: ",
                                        x.name,
                                        ", USN:",
                                        " ",
                                        x.registrationNumber,
                                      ],
                                    }),
                                    a.jsx("div", {
                                      children: a.jsx(Rc, {
                                        onClick: () => s(x._id),
                                        children: "Add Marks",
                                      }),
                                    }),
                                  ],
                                },
                                x._id
                              )
                            ),
                          }),
                        ],
                      },
                      `${c}-${m}-${p}`
                    ));
                }
                return g;
              })
            ),
          ],
        });
      };
    return n
      ? a.jsx(ja, { to: n })
      : a.jsx(nn, {
          children: a.jsxs(Eg, {
            children: [
              a.jsx(rn, {}),
              a.jsxs(kg, {
                children: [
                  a.jsx(rr, { children: "Exam Evaluation Details" }),
                  l("CS", "Computer Science and Engineering"),
                  l("AI", "Artificial Intelligence and Machine Learning"),
                  l("CV", "Civil Engineering"),
                  l("EC", "Electronics and Communication Engineering"),
                ],
              }),
            ],
          }),
        });
  },
  Pg = j.div`
  display: flex;
`,
  Ig = j.div`
  flex: 1;
  padding: 20px;
`,
  yw = j.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,
  Ng = j.h2`
  margin-bottom: 20px;
`,
  Ag = j.div`
  display: flex;
  flex-direction: column;
`,
  lO = j.div`
  display: block;
`,
  Tg = j.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,
  bw = j.span`
  flex: 1;
`,
  vs = j.label`
  display: flex;
  align-items: center;
  margin-left: 10px;

  input {
    margin-right: 5px;
  }
`,
  jw = j.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 10px 0;
`,
  ww = j.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`,
  cO = j.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    margin-right: 10px;
    font-weight: bold;
  }

  input {
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`,
  uO = j.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    margin-right: 10px;
    font-weight: bold;
  }

  select {
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
  }
`,
  dO = ({ isDashboard: e }) => {
    const [t, n] = w.useState([]),
      [r, i] = w.useState([]);
    w.useEffect(() => {
      s();
    }, []);
    const s = async () => {
        try {
          const u = await T.get(
            "https://bticlz.onrender.com/api/v1/students/getall"
          );
          n(u.data.students), o(u.data.students);
        } catch (u) {
          console.error("Error fetching students:", u);
        }
      },
      o = (u) => {
        const d = u.map((h) => ({ id: h.id, name: h.name, status: "Present" }));
        i(d);
      },
      l = (u, d) => {
        const h = r.map((f) => (f.id === u ? { ...f, status: d } : f));
        i(h);
      },
      c = async () => {
        try {
          const u = r.map(({ id: h, name: f, status: m }) => ({
              studentId: h,
              name: f,
              status: m,
            })),
            d = await T.post("https://bticlz.onrender.com/api/v1/attendance", {
              attendanceData: u,
            });
          console.log("Attendance data submitted:", d.data);
        } catch (u) {
          console.error("Error submitting attendance data:", u);
        }
      };
    return a.jsx(nn, {
      children: a.jsxs(Pg, {
        isDashboard: e,
        children: [
          a.jsx(rn, {}),
          a.jsx(Ig, {
            children: a.jsxs(yw, {
              children: [
                a.jsx(Ng, { children: "Attendance" }),
                a.jsx(Ag, {
                  children: t.map((u, d) => {
                    var h, f, m;
                    return a.jsxs(
                      U.Fragment,
                      {
                        children: [
                          a.jsxs(Tg, {
                            children: [
                              a.jsx(bw, { children: u.name }),
                              a.jsxs(vs, {
                                children: [
                                  a.jsx("input", {
                                    type: "radio",
                                    name: `status-${u.id}`,
                                    checked:
                                      ((h = r[d]) == null
                                        ? void 0
                                        : h.status) === "Present",
                                    onChange: () => l(u.id, "Present"),
                                  }),
                                  "Present",
                                ],
                              }),
                              a.jsxs(vs, {
                                children: [
                                  a.jsx("input", {
                                    type: "radio",
                                    name: `status-${u.id}`,
                                    checked:
                                      ((f = r[d]) == null
                                        ? void 0
                                        : f.status) === "Absent",
                                    onChange: () => l(u.id, "Absent"),
                                  }),
                                  "Absent",
                                ],
                              }),
                              a.jsxs(vs, {
                                children: [
                                  a.jsx("input", {
                                    type: "radio",
                                    name: `status-${u.id}`,
                                    checked:
                                      ((m = r[d]) == null
                                        ? void 0
                                        : m.status) === "Absent with apology",
                                    onChange: () =>
                                      l(u.id, "Absent with apology"),
                                  }),
                                  "Absent with apology",
                                ],
                              }),
                            ],
                          }),
                          d !== t.length - 1 && a.jsx(jw, {}),
                        ],
                      },
                      u.id
                    );
                  }),
                }),
                a.jsx(ww, { onClick: c, children: "Submit" }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  Sw = j.div`
  display: flex;
`,
  Cw = j.div`
  flex: 1;
`,
  _w = j.div`
  padding: 20px;
`,
  On = j.h2`
  font-size: 24px;
  margin-bottom: 20px;
`,
  Or = j.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f1f1f1;
  }

  @media (max-width: 768px) {
    th,
    td {
      display: block;
      text-align: right;
    }

    th::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
    }
  }
`,
  Dr = j.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`,
  F = j.td`
  padding: 10px;
`,
  hO = j.form`
  margin-bottom: 20px;
`,
  Yi = j.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  A0 = j.select`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
`,
  fO = j.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
j.ul`
  list-style: none;
  padding: 0;
`;
j.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const pO = () => {
    const [e, t] = w.useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        qualification: "",
        department: "",
        position: "",
        subjectCodes: "",
      }),
      [n, r] = w.useState([]);
    w.useEffect(() => {
      i();
    }, []);
    const i = async () => {
        try {
          const l = await T.get(
            "https://bticlz.onrender.com/api/v1/teachers/getall"
          );
          r(l.data.teachers);
        } catch (l) {
          console.error("Error fetching teachers:", l);
        }
      },
      s = async (l) => {
        if (
          (l.preventDefault(),
          e.name.trim() !== "" &&
            e.email.trim() !== "" &&
            e.phone.trim() !== "" &&
            e.address.trim() !== "" &&
            e.qualification.trim() !== "" &&
            e.department.trim() !== "" &&
            e.position.trim() !== "" &&
            e.subjectCodes.trim() !== "")
        )
          try {
            await T.post("https://bticlz.onrender.com/api/v1/teachers", e),
              t({
                name: "",
                email: "",
                phone: "",
                address: "",
                qualification: "",
                department: "",
                position: "",
                subjectCodes: "",
              }),
              i();
          } catch (c) {
            console.error("Error adding teacher:", c);
          }
      },
      o = (l) => n.filter((c) => c.department === l);
    return a.jsx(nn, {
      children: a.jsxs(Sw, {
        children: [
          a.jsx(rn, {}),
          a.jsx(Cw, {
            children: a.jsxs(_w, {
              children: [
                a.jsx(On, { children: "Teachers" }),
                a.jsxs(hO, {
                  onSubmit: s,
                  children: [
                    a.jsx(Yi, {
                      type: "text",
                      placeholder: "Enter teacher name",
                      value: e.name,
                      onChange: (l) => t({ ...e, name: l.target.value }),
                    }),
                    a.jsx(Yi, {
                      type: "email",
                      placeholder: "Enter teacher email",
                      value: e.email,
                      onChange: (l) => t({ ...e, email: l.target.value }),
                    }),
                    a.jsx(Yi, {
                      type: "text",
                      placeholder: "Enter teacher phone",
                      value: e.phone,
                      onChange: (l) => t({ ...e, phone: l.target.value }),
                    }),
                    a.jsx(Yi, {
                      type: "text",
                      placeholder: "Enter teacher address",
                      value: e.address,
                      onChange: (l) => t({ ...e, address: l.target.value }),
                    }),
                    a.jsx(Yi, {
                      type: "text",
                      placeholder: "Enter teacher qualification",
                      value: e.qualification,
                      onChange: (l) =>
                        t({ ...e, qualification: l.target.value }),
                    }),
                    a.jsxs(A0, {
                      name: "department",
                      value: e.department,
                      onChange: (l) => t({ ...e, department: l.target.value }),
                      children: [
                        a.jsx("option", {
                          value: "",
                          children: "Select Department",
                        }),
                        a.jsx("option", {
                          value: "COMPUTER SCIENCE ENGINEERING",
                          children: "COMPUTER SCIENCE ENGINEERING",
                        }),
                        a.jsx("option", {
                          value: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
                          children:
                            "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
                        }),
                        a.jsx("option", {
                          value: "CIVIL ENGINEERING",
                          children: "CIVIL ENGINEERING",
                        }),
                        a.jsx("option", {
                          value: "ELECTRICAL AND COMMUNICATION ENGINEERING",
                          children: "ELECTRICAL AND COMMUNICATION ENGINEERING",
                        }),
                      ],
                    }),
                    a.jsxs(A0, {
                      name: "position",
                      value: e.position,
                      onChange: (l) => t({ ...e, position: l.target.value }),
                      children: [
                        a.jsx("option", {
                          value: "",
                          children: "Select Position",
                        }),
                        a.jsx("option", {
                          value: "Assistant Professor",
                          children: "Assistant Professor",
                        }),
                        a.jsx("option", {
                          value: "Associate Professor",
                          children: "Associate Professor",
                        }),
                      ],
                    }),
                    a.jsx(Yi, {
                      type: "text",
                      placeholder: "Enter teacher subject codes",
                      value: e.subjectCodes,
                      onChange: (l) =>
                        t({ ...e, subjectCodes: l.target.value }),
                    }),
                    a.jsx(fO, { type: "submit", children: "Add Teacher" }),
                  ],
                }),
                o("COMPUTER SCIENCE ENGINEERING").length > 0 &&
                  a.jsxs(a.Fragment, {
                    children: [
                      a.jsx(On, { children: "Computer Science Engineering" }),
                      a.jsxs(Or, {
                        children: [
                          a.jsx("thead", {
                            children: a.jsxs("tr", {
                              children: [
                                a.jsx("th", { children: "Name" }),
                                a.jsx("th", { children: "Email" }),
                                a.jsx("th", { children: "Phone" }),
                                a.jsx("th", { children: "Address" }),
                                a.jsx("th", { children: "Qualification" }),
                                a.jsx("th", { children: "Department" }),
                                a.jsx("th", { children: "Position" }),
                                a.jsx("th", { children: "Subject Codes" }),
                              ],
                            }),
                          }),
                          a.jsx("tbody", {
                            children: o("COMPUTER SCIENCE ENGINEERING").map(
                              (l) =>
                                a.jsxs(
                                  Dr,
                                  {
                                    children: [
                                      a.jsx(F, {
                                        "data-label": "Name",
                                        children: l.name,
                                      }),
                                      a.jsx(F, {
                                        "data-label": "Email",
                                        children: l.email,
                                      }),
                                      a.jsx(F, {
                                        "data-label": "Phone",
                                        children: l.phone,
                                      }),
                                      a.jsx(F, {
                                        "data-label": "Address",
                                        children: l.address,
                                      }),
                                      a.jsx(F, {
                                        "data-label": "Qualification",
                                        children: l.qualification,
                                      }),
                                      a.jsx(F, {
                                        "data-label": "Department",
                                        children: l.department,
                                      }),
                                      a.jsx(F, {
                                        "data-label": "Position",
                                        children: l.position,
                                      }),
                                      a.jsx(F, {
                                        "data-label": "Subject Codes",
                                        children: l.subjectCodes,
                                      }),
                                    ],
                                  },
                                  l.id
                                )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                o("ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING").length > 0 &&
                  a.jsxs(a.Fragment, {
                    children: [
                      a.jsx(On, {
                        children:
                          "Artificial Intelligence and Machine Learning",
                      }),
                      a.jsxs(Or, {
                        children: [
                          a.jsx("thead", {
                            children: a.jsxs("tr", {
                              children: [
                                a.jsx("th", { children: "Name" }),
                                a.jsx("th", { children: "Email" }),
                                a.jsx("th", { children: "Phone" }),
                                a.jsx("th", { children: "Address" }),
                                a.jsx("th", { children: "Qualification" }),
                                a.jsx("th", { children: "Department" }),
                                a.jsx("th", { children: "Position" }),
                                a.jsx("th", { children: "Subject Codes" }),
                              ],
                            }),
                          }),
                          a.jsx("tbody", {
                            children: o(
                              "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING"
                            ).map((l) =>
                              a.jsxs(
                                Dr,
                                {
                                  children: [
                                    a.jsx(F, {
                                      "data-label": "Name",
                                      children: l.name,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Email",
                                      children: l.email,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Phone",
                                      children: l.phone,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Address",
                                      children: l.address,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Qualification",
                                      children: l.qualification,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Department",
                                      children: l.department,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Position",
                                      children: l.position,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Subject Codes",
                                      children: l.subjectCodes,
                                    }),
                                  ],
                                },
                                l.id
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                o("CIVIL ENGINEERING").length > 0 &&
                  a.jsxs(a.Fragment, {
                    children: [
                      a.jsx(On, { children: "Civil Engineering" }),
                      a.jsxs(Or, {
                        children: [
                          a.jsx("thead", {
                            children: a.jsxs("tr", {
                              children: [
                                a.jsx("th", { children: "Name" }),
                                a.jsx("th", { children: "Email" }),
                                a.jsx("th", { children: "Phone" }),
                                a.jsx("th", { children: "Address" }),
                                a.jsx("th", { children: "Qualification" }),
                                a.jsx("th", { children: "Department" }),
                                a.jsx("th", { children: "Position" }),
                                a.jsx("th", { children: "Subject Codes" }),
                              ],
                            }),
                          }),
                          a.jsx("tbody", {
                            children: o("CIVIL ENGINEERING").map((l) =>
                              a.jsxs(
                                Dr,
                                {
                                  children: [
                                    a.jsx(F, {
                                      "data-label": "Name",
                                      children: l.name,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Email",
                                      children: l.email,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Phone",
                                      children: l.phone,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Address",
                                      children: l.address,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Qualification",
                                      children: l.qualification,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Department",
                                      children: l.department,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Position",
                                      children: l.position,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Subject Codes",
                                      children: l.subjectCodes,
                                    }),
                                  ],
                                },
                                l.id
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                o("ELECTRICAL AND COMMUNICATION ENGINEERING").length > 0 &&
                  a.jsxs(a.Fragment, {
                    children: [
                      a.jsx(On, {
                        children: "Electrical and Communication Engineering",
                      }),
                      a.jsxs(Or, {
                        children: [
                          a.jsx("thead", {
                            children: a.jsxs("tr", {
                              children: [
                                a.jsx("th", { children: "Name" }),
                                a.jsx("th", { children: "Email" }),
                                a.jsx("th", { children: "Phone" }),
                                a.jsx("th", { children: "Address" }),
                                a.jsx("th", { children: "Qualification" }),
                                a.jsx("th", { children: "Department" }),
                                a.jsx("th", { children: "Position" }),
                                a.jsx("th", { children: "Subject Codes" }),
                              ],
                            }),
                          }),
                          a.jsx("tbody", {
                            children: o(
                              "ELECTRICAL AND COMMUNICATION ENGINEERING"
                            ).map((l) =>
                              a.jsxs(
                                Dr,
                                {
                                  children: [
                                    a.jsx(F, {
                                      "data-label": "Name",
                                      children: l.name,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Email",
                                      children: l.email,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Phone",
                                      children: l.phone,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Address",
                                      children: l.address,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Qualification",
                                      children: l.qualification,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Department",
                                      children: l.department,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Position",
                                      children: l.position,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Subject Codes",
                                      children: l.subjectCodes,
                                    }),
                                  ],
                                },
                                l.id
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  Ew = j.div`
  display: flex;
`,
  kw = j.div`
  flex: 1;
`,
  Pw = j.div`
  padding: 20px;
`,
  bi = j.h2`
  font-size: 24px;
  margin-bottom: 20px;
`,
  Fc = j.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  thead {
    background-color: #f1f1f1;
  }
`,
  zc = j.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`,
  $ = j.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  word-wrap: break-word;
  max-width: 150px;

  @media (max-width: 768px) {
    display: block;
    text-align: right;

    &::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
    }
  }
`,
  gO = j.form`
  margin-bottom: 20px;
`,
  hl = j.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  Gd = j.select`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  mO = j.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
j.ul`
  list-style: none;
  padding: 0;
`;
j.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const xO = () => {
    const [e, t] = w.useState({
        name: "",
        email: "",
        phone: "",
        registrationNumber: "",
        grade: "",
        section: "",
        subSection: "",
      }),
      [n, r] = w.useState([]);
    w.useEffect(() => {
      i();
    }, []);
    const i = async () => {
        try {
          const c = await T.get(
            "https://bticlz.onrender.com/api/v1/students/getall"
          );
          r(c.data.students);
        } catch (c) {
          console.error("Error fetching students:", c);
        }
      },
      s = async (c) => {
        if (
          (c.preventDefault(),
          e.name.trim() !== "" &&
            e.email.trim() !== "" &&
            e.phone.trim() !== "" &&
            e.registrationNumber.trim() !== "" &&
            e.grade.trim() !== "" &&
            e.section.trim() !== "")
        )
          try {
            await T.post("https://bticlz.onrender.com/api/v1/students", e),
              t({
                name: "",
                email: "",
                phone: "",
                registrationNumber: "",
                grade: "",
                section: "",
                subSection: "",
              }),
              i();
          } catch (u) {
            console.error("Error adding student:", u);
          }
      },
      o = (c, u, d, h) =>
        n.filter(
          (f) =>
            f.registrationNumber.includes(c) &&
            f.grade === u &&
            f.section === d &&
            (!h || f.subSection === h)
        ),
      l = (c, u) => {
        const d = ["1", "2", "3", "4", "5", "6", "7", "8"],
          h = ["P Cycle", "C Cycle", "A", "B", "C", "D", "E", "F"],
          f = {
            "P Cycle": ["P1", "P2", "P3", "P4", "P5"],
            "C Cycle": ["C1", "C2", "C3", "C4", "C5"],
          };
        return a.jsxs(a.Fragment, {
          children: [
            a.jsx(bi, { children: u }),
            d.map((m) =>
              h.map((p) => {
                let g = null;
                if (f[p])
                  g = f[p].map((y) => {
                    const x = o(c, m, p, y);
                    return x.length > 0
                      ? a.jsxs(
                          "div",
                          {
                            children: [
                              a.jsxs(bi, {
                                children: [
                                  "Semester ",
                                  m,
                                  " - Section ",
                                  p,
                                  " - Sub-Section",
                                  " ",
                                  y,
                                ],
                              }),
                              a.jsxs(Fc, {
                                children: [
                                  a.jsx("thead", {
                                    children: a.jsxs("tr", {
                                      children: [
                                        a.jsx($, { children: "Name" }),
                                        a.jsx($, { children: "Email" }),
                                        a.jsx($, { children: "Phone" }),
                                        a.jsx($, { children: "USN" }),
                                        a.jsx($, { children: "Semester" }),
                                        a.jsx($, { children: "Section" }),
                                        a.jsx($, { children: "Sub-Section" }),
                                      ],
                                    }),
                                  }),
                                  a.jsx("tbody", {
                                    children: x.map((v) =>
                                      a.jsxs(
                                        zc,
                                        {
                                          children: [
                                            a.jsx($, { children: v.name }),
                                            a.jsx($, { children: v.email }),
                                            a.jsx($, { children: v.phone }),
                                            a.jsx($, {
                                              children: v.registrationNumber,
                                            }),
                                            a.jsx($, { children: v.grade }),
                                            a.jsx($, { children: v.section }),
                                            a.jsx($, {
                                              children: v.subSection,
                                            }),
                                          ],
                                        },
                                        v.id
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          },
                          `${c}-${m}-${p}-${y}`
                        )
                      : null;
                  });
                else {
                  const y = o(c, m, p, null);
                  y.length > 0 &&
                    (g = a.jsxs(
                      "div",
                      {
                        children: [
                          a.jsxs(bi, {
                            children: ["Semester ", m, " - Section ", p],
                          }),
                          a.jsxs(Fc, {
                            children: [
                              a.jsx("thead", {
                                children: a.jsxs("tr", {
                                  children: [
                                    a.jsx($, { children: "Name" }),
                                    a.jsx($, { children: "Email" }),
                                    a.jsx($, { children: "Phone" }),
                                    a.jsx($, { children: "USN" }),
                                    a.jsx($, { children: "Semester" }),
                                    a.jsx($, { children: "Section" }),
                                    a.jsx($, { children: "Sub-Section" }),
                                  ],
                                }),
                              }),
                              a.jsx("tbody", {
                                children: y.map((x) =>
                                  a.jsxs(
                                    zc,
                                    {
                                      children: [
                                        a.jsx($, { children: x.name }),
                                        a.jsx($, { children: x.email }),
                                        a.jsx($, { children: x.phone }),
                                        a.jsx($, {
                                          children: x.registrationNumber,
                                        }),
                                        a.jsx($, { children: x.grade }),
                                        a.jsx($, { children: x.section }),
                                        a.jsx($, { children: x.subSection }),
                                      ],
                                    },
                                    x.id
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      },
                      `${c}-${m}-${p}`
                    ));
                }
                return g;
              })
            ),
          ],
        });
      };
    return a.jsx(nn, {
      children: a.jsxs(Ew, {
        children: [
          a.jsx(rn, {}),
          a.jsx(kw, {
            children: a.jsxs(Pw, {
              children: [
                a.jsx(bi, { children: "Students" }),
                a.jsxs(gO, {
                  onSubmit: s,
                  children: [
                    a.jsx(hl, {
                      type: "text",
                      placeholder: "Enter student name",
                      value: e.name,
                      onChange: (c) => t({ ...e, name: c.target.value }),
                    }),
                    a.jsx(hl, {
                      type: "email",
                      placeholder: "Enter student email",
                      value: e.email,
                      onChange: (c) => t({ ...e, email: c.target.value }),
                    }),
                    a.jsx(hl, {
                      type: "text",
                      placeholder: "Enter phone number",
                      value: e.phone,
                      onChange: (c) => t({ ...e, phone: c.target.value }),
                    }),
                    a.jsx(hl, {
                      type: "text",
                      placeholder: "Enter USN",
                      value: e.registrationNumber,
                      onChange: (c) =>
                        t({ ...e, registrationNumber: c.target.value }),
                    }),
                    a.jsxs(Gd, {
                      value: e.grade,
                      onChange: (c) => t({ ...e, grade: c.target.value }),
                      children: [
                        a.jsx("option", {
                          value: "",
                          disabled: !0,
                          children: "Select Semester",
                        }),
                        a.jsx("option", { value: "1", children: "1" }),
                        a.jsx("option", { value: "2", children: "2" }),
                        a.jsx("option", { value: "3", children: "3" }),
                        a.jsx("option", { value: "4", children: "4" }),
                        a.jsx("option", { value: "5", children: "5" }),
                        a.jsx("option", { value: "6", children: "6" }),
                        a.jsx("option", { value: "7", children: "7" }),
                        a.jsx("option", { value: "8", children: "8" }),
                      ],
                    }),
                    a.jsxs(Gd, {
                      value: e.section,
                      onChange: (c) => t({ ...e, section: c.target.value }),
                      children: [
                        a.jsx("option", {
                          value: "",
                          disabled: !0,
                          children: "Select Section",
                        }),
                        a.jsx("option", {
                          value: "P Cycle",
                          children: "P Cycle",
                        }),
                        a.jsx("option", {
                          value: "C Cycle",
                          children: "C Cycle",
                        }),
                        a.jsx("option", { value: "A", children: "A" }),
                        a.jsx("option", { value: "B", children: "B" }),
                        a.jsx("option", { value: "C", children: "C" }),
                        a.jsx("option", { value: "D", children: "D" }),
                        a.jsx("option", { value: "E", children: "E" }),
                        a.jsx("option", { value: "F", children: "F" }),
                      ],
                    }),
                    e.section &&
                      (e.section === "P Cycle" || e.section === "C Cycle") &&
                      a.jsxs(Gd, {
                        value: e.subSection,
                        onChange: (c) =>
                          t({ ...e, subSection: c.target.value }),
                        children: [
                          a.jsx("option", {
                            value: "",
                            disabled: !0,
                            children: "Select Sub Section",
                          }),
                          e.section === "P Cycle" &&
                            a.jsxs(a.Fragment, {
                              children: [
                                a.jsx("option", {
                                  value: "P1",
                                  children: "P1",
                                }),
                                a.jsx("option", {
                                  value: "P2",
                                  children: "P2",
                                }),
                                a.jsx("option", {
                                  value: "P3",
                                  children: "P3",
                                }),
                                a.jsx("option", {
                                  value: "P4",
                                  children: "P4",
                                }),
                                a.jsx("option", {
                                  value: "P5",
                                  children: "P5",
                                }),
                              ],
                            }),
                          e.section === "C Cycle" &&
                            a.jsxs(a.Fragment, {
                              children: [
                                a.jsx("option", {
                                  value: "C1",
                                  children: "C1",
                                }),
                                a.jsx("option", {
                                  value: "C2",
                                  children: "C2",
                                }),
                                a.jsx("option", {
                                  value: "C3",
                                  children: "C3",
                                }),
                                a.jsx("option", {
                                  value: "C4",
                                  children: "C4",
                                }),
                                a.jsx("option", {
                                  value: "C5",
                                  children: "C5",
                                }),
                              ],
                            }),
                        ],
                      }),
                    a.jsx(mO, { type: "submit", children: "Add Student" }),
                  ],
                }),
                l("CS", "Computer Science Engineering"),
                l("AI", "Artificial Intelligence and Machine Learning"),
                l("CV", "Civil Engineering"),
                l("EC", "Electrical and Communication Engineering"),
              ],
            }),
          }),
        ],
      }),
    });
  },
  Og = j.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`,
  Dg = j.div`
  flex: 1;
`,
  Iw = j.div`
  padding: 20px;
`,
  Dn = j.h2`
  font-size: 24px;
  margin-bottom: 20px;
`,
  Nw = j.ul`
  list-style: none;
  padding: 0;
`,
  Aw = j.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,
  Tw = j.form`
  margin-bottom: 20px;
`,
  $c = j.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`,
  Ow = j.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  resize: vertical;
`,
  Dw = j.button`
  padding: 10px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`,
  Mr = j.select`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  background-color: #fff;
  font-size: 16px;
`,
  vO = j.div`
  display: block;
`,
  yO = j.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
`,
  bO = j.h3`
  margin-bottom: 10px;
`,
  jO = j.p`
  color: #555;
  margin-bottom: 15px;
`,
  wO = j.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`,
  SO = j.p`
  color: #28a745;
  font-weight: bold;
`,
  CO = () => {
    const [e, t] = w.useState({
        title: "",
        description: "",
        grade: "",
        deadline: "",
        department: "",
        semester: "",
        section: "",
        subSection: "",
      }),
      [n, r] = w.useState([]),
      [i, s] = w.useState(""),
      [o, l] = w.useState(""),
      [c, u] = w.useState("");
    w.useEffect(() => {
      d();
    }, []);
    const d = async () => {
        try {
          const p = await T.get(
            "https://bticlz.onrender.com/api/v1/assignments/getall"
          );
          r(p.data.assignments || []);
        } catch (p) {
          console.error("Error fetching assignments:", p);
        }
      },
      h = async (p) => {
        if (
          (p.preventDefault(),
          e.title.trim() !== "" &&
            e.description.trim() !== "" &&
            e.grade.trim() !== "" &&
            e.deadline.trim() !== "" &&
            e.department.trim() !== "" &&
            e.semester.trim() !== "" &&
            e.section.trim() !== "")
        )
          try {
            const g = await T.post(
              "https://bticlz.onrender.com/api/v1/assignments",
              e
            );
            Z.success("Assignment added successfully"),
              d(),
              t({
                title: "",
                description: "",
                grade: "",
                deadline: "",
                department: "",
                semester: "",
                section: "",
                subSection: "",
              }),
              s(""),
              l(""),
              u("");
          } catch (g) {
            console.error("Error adding assignment:", g),
              Z.error("Error adding assignment");
          }
        else Z.error("Please fill out all required fields");
      },
      f = (p) =>
        n
          .filter((g) => g.department && g.department === p)
          .reduce((g, y) => {
            const x = `${y.semester}-${y.section}`;
            return g[x] || (g[x] = []), g[x].push(y), g;
          }, {}),
      m = (p) => {
        const g = f(p);
        return Object.keys(g).map((y) =>
          a.jsxs(
            "div",
            {
              children: [
                a.jsxs("h3", { children: ["Section: ", y] }),
                a.jsx(Nw, {
                  children: g[y].map((x) =>
                    a.jsxs(
                      Aw,
                      {
                        children: [
                          a.jsxs("strong", { children: [x.title, ": "] }),
                          x.description,
                          ", ",
                          "deadline is:",
                          " ",
                          x.deadline,
                        ],
                      },
                      x._id
                    )
                  ),
                }),
              ],
            },
            y
          )
        );
      };
    return a.jsx(nn, {
      children: a.jsxs(Og, {
        children: [
          a.jsx(Mu, {}),
          a.jsx(rn, {}),
          a.jsx(Dg, {
            children: a.jsxs(Iw, {
              children: [
                a.jsx(Dn, { children: "Assignments" }),
                a.jsxs(Tw, {
                  onSubmit: h,
                  children: [
                    a.jsx($c, {
                      type: "text",
                      placeholder: "Enter subject code",
                      value: e.title,
                      onChange: (p) => t({ ...e, title: p.target.value }),
                    }),
                    a.jsx(Ow, {
                      placeholder: "Enter assignment description",
                      value: e.description,
                      onChange: (p) => t({ ...e, description: p.target.value }),
                    }),
                    a.jsxs(Mr, {
                      value: i,
                      onChange: (p) => {
                        s(p.target.value),
                          l(""),
                          u(""),
                          t({
                            ...e,
                            grade: "",
                            department: p.target.value,
                            semester: "",
                            section: "",
                            subSection: "",
                          });
                      },
                      children: [
                        a.jsx("option", {
                          value: "",
                          disabled: !0,
                          children: "Assign Department",
                        }),
                        a.jsx("option", {
                          value: "COMPUTER SCIENCE ENGINEERING",
                          children: "COMPUTER SCIENCE ENGINEERING",
                        }),
                        a.jsx("option", {
                          value: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
                          children:
                            "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
                        }),
                        a.jsx("option", {
                          value: "CIVIL ENGINEERING",
                          children: "CIVIL ENGINEERING",
                        }),
                        a.jsx("option", {
                          value: "ELECTRONICS AND COMMUNICATION ENGINEERING",
                          children: "ELECTRONICS AND COMMUNICATION ENGINEERING",
                        }),
                      ],
                    }),
                    i &&
                      a.jsxs(Mr, {
                        value: o,
                        onChange: (p) => {
                          l(p.target.value),
                            u(""),
                            t({
                              ...e,
                              grade: p.target.value,
                              semester: p.target.value,
                              section: "",
                              subSection: "",
                            });
                        },
                        children: [
                          a.jsx("option", {
                            value: "",
                            disabled: !0,
                            children: "Select Semester",
                          }),
                          a.jsx("option", { value: "1", children: "1" }),
                          a.jsx("option", { value: "2", children: "2" }),
                          a.jsx("option", { value: "3", children: "3" }),
                          a.jsx("option", { value: "4", children: "4" }),
                          a.jsx("option", { value: "5", children: "5" }),
                          a.jsx("option", { value: "6", children: "6" }),
                          a.jsx("option", { value: "7", children: "7" }),
                          a.jsx("option", { value: "8", children: "8" }),
                        ],
                      }),
                    o &&
                      a.jsxs(Mr, {
                        value: c,
                        onChange: (p) => {
                          u(p.target.value),
                            t({
                              ...e,
                              section: p.target.value,
                              subSection: "",
                            });
                        },
                        children: [
                          a.jsx("option", {
                            value: "",
                            disabled: !0,
                            children: "Select Section",
                          }),
                          a.jsx("option", {
                            value: "P Cycle",
                            children: "P Cycle",
                          }),
                          a.jsx("option", {
                            value: "C Cycle",
                            children: "C Cycle",
                          }),
                          a.jsx("option", { value: "A", children: "A" }),
                          a.jsx("option", { value: "B", children: "B" }),
                          a.jsx("option", { value: "C", children: "C" }),
                          a.jsx("option", { value: "D", children: "D" }),
                          a.jsx("option", { value: "E", children: "E" }),
                          a.jsx("option", { value: "F", children: "F" }),
                        ],
                      }),
                    c &&
                      (c === "P Cycle" || c === "C Cycle") &&
                      a.jsxs(Mr, {
                        value: e.subSection,
                        onChange: (p) =>
                          t({ ...e, subSection: p.target.value }),
                        children: [
                          a.jsx("option", {
                            value: "",
                            disabled: !0,
                            children: "Select Sub Section",
                          }),
                          c === "P Cycle" &&
                            a.jsxs(a.Fragment, {
                              children: [
                                a.jsx("option", {
                                  value: "P1",
                                  children: "P1",
                                }),
                                a.jsx("option", {
                                  value: "P2",
                                  children: "P2",
                                }),
                                a.jsx("option", {
                                  value: "P3",
                                  children: "P3",
                                }),
                                a.jsx("option", {
                                  value: "P4",
                                  children: "P4",
                                }),
                                a.jsx("option", {
                                  value: "P5",
                                  children: "P5",
                                }),
                              ],
                            }),
                          c === "C Cycle" &&
                            a.jsxs(a.Fragment, {
                              children: [
                                a.jsx("option", {
                                  value: "C1",
                                  children: "C1",
                                }),
                                a.jsx("option", {
                                  value: "C2",
                                  children: "C2",
                                }),
                                a.jsx("option", {
                                  value: "C3",
                                  children: "C3",
                                }),
                                a.jsx("option", {
                                  value: "C4",
                                  children: "C4",
                                }),
                                a.jsx("option", {
                                  value: "C5",
                                  children: "C5",
                                }),
                              ],
                            }),
                        ],
                      }),
                    a.jsx($c, {
                      type: "date",
                      placeholder: "Enter assignment deadline",
                      value: e.deadline,
                      onChange: (p) => t({ ...e, deadline: p.target.value }),
                    }),
                    a.jsx(Dw, { type: "submit", children: "Add Assignment" }),
                  ],
                }),
                n.length > 0 &&
                  a.jsxs(a.Fragment, {
                    children: [
                      a.jsx(Dn, { children: "Computer Science Engineering" }),
                      m("COMPUTER SCIENCE ENGINEERING"),
                      a.jsx(Dn, {
                        children:
                          "Artificial Intelligence and Machine Learning",
                      }),
                      m("ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING"),
                      a.jsx(Dn, { children: "Civil Engineering" }),
                      m("CIVIL ENGINEERING"),
                      a.jsx(Dn, {
                        children: "Electronics and Communication Engineering",
                      }),
                      m("ELECTRONICS AND COMMUNICATION ENGINEERING"),
                    ],
                  }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  Mw = j.div`
  display: flex;
`,
  Lw = j.div`
  flex: 1;
  padding: 20px;
`,
  _O = j.h1`
  margin-bottom: 20px;
`,
  EO = j.form`
  margin-bottom: 20px;
`,
  Yd = j.div`
  margin-bottom: 10px;
`,
  qd = j.label`
  display: block;
  margin-bottom: 5px;
`,
  Kd = j.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  T0 = j.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`,
  Rw = j.ul`
  list-style: none;
  padding: 0;
`,
  Fw = j.li`
  margin-bottom: 10px;
`,
  zw = j.span`
  font-weight: bold;
`,
  kO = j.span`
  margin-left: 10px;
`;
j.button`
  margin-left: 10px;
  padding: 4px 8px;
  font-size: 14px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;
const PO = j.div`
display: block;`,
  IO = j.h1`
  font-size: 24px;
  margin-bottom: 20px;
`,
  O0 = j.button`
  padding: 8px 16px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`,
  NO = () => {
    const [e, t] = w.useState([]);
    w.useEffect(() => {
      n();
    }, []);
    const n = async () => {
        try {
          const s = await T.get(
            "https://bticlz.onrender.com/api/v1/library/getall"
          );
          t(s.data.books);
        } catch (s) {
          console.error("Error fetching books:", s);
        }
      },
      r = async (s) => {
        try {
          const o = await T.post(
            "https://bticlz.onrender.com/api/v1/library/books",
            { bookname: s.title, author: s.author }
          );
          t([...e, o.data.book]);
        } catch (o) {
          console.error("Error adding book:", o);
        }
      },
      i = (s, o) => {
        console.log("Token entered for book:", s, o);
      };
    return a.jsx(nn, {
      children: a.jsxs(Mw, {
        children: [
          a.jsx(rn, {}),
          a.jsxs(Lw, {
            children: [
              a.jsx(_O, { children: "Library Management" }),
              a.jsxs(EO, {
                onSubmit: (s) => {
                  s.preventDefault();
                  const o = {
                    id: Math.random().toString(36).substr(2, 9),
                    title: s.target.title.value,
                    author: s.target.author.value,
                  };
                  r(o), s.target.reset();
                },
                children: [
                  a.jsx("h2", { children: "Add New Book" }),
                  a.jsxs(Yd, {
                    children: [
                      a.jsx(qd, { htmlFor: "title", children: "Title:" }),
                      a.jsx(Kd, { type: "text", id: "title", required: !0 }),
                    ],
                  }),
                  a.jsxs(Yd, {
                    children: [
                      a.jsx(qd, { htmlFor: "author", children: "Author:" }),
                      a.jsx(Kd, { type: "text", id: "author", required: !0 }),
                    ],
                  }),
                  a.jsx(T0, { type: "submit", children: "Add Book" }),
                ],
              }),
              a.jsx("h2", { children: "Books" }),
              a.jsx(Rw, {
                children: e.map((s) =>
                  a.jsxs(
                    Fw,
                    {
                      children: [
                        a.jsx(zw, { children: s.bookname }),
                        a.jsxs(kO, { children: ["by ", s.author] }),
                        a.jsxs("form", {
                          onSubmit: (o) => {
                            o.preventDefault();
                            const l = o.target.token.value;
                            i(s._id, l), o.target.reset();
                          },
                          children: [
                            a.jsxs(Yd, {
                              children: [
                                a.jsx(qd, {
                                  htmlFor: `token-${s._id}`,
                                  children: "Enter the generated token:",
                                }),
                                a.jsx(Kd, {
                                  type: "text",
                                  id: `token-${s._id}`,
                                  name: "token",
                                  placeholder: "Enter the generated token",
                                  required: !0,
                                }),
                              ],
                            }),
                            a.jsx(T0, { type: "submit", children: "Enter" }),
                          ],
                        }),
                      ],
                    },
                    s._id
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    });
  },
  Mg = j.div`
  display: flex;
`,
  Lg = j.div`
  display: block;
`,
  Rg = j.div`
  flex: 1;
  padding: 20px;
`,
  Fg = j.h1`
  font-size: 24px;
  margin-bottom: 20px;
`,
  AO = j.div`
  max-width: 400px;
`,
  D0 = j.label`
  font-weight: bold;
`,
  Bc = j.p`
  margin-bottom: 10px;
`,
  $w = j.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`,
  tt = j.div`
  margin-bottom: 20px;
`,
  nt = j.span`
  font-weight: bold;
`,
  dt = j.span`
  margin-left: 10px;
`,
  zg = j.button`
  display: block;
  padding: 10px 20px;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px; // Optional: to add some space if needed
`,
  us = j.input`
  padding: 8px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  No = j.select`
  padding: 8px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  Bw = j.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
`,
  TO = () => {
    const [e, t] = w.useState({ name: "", email: "" }),
      n = Ot();
    w.useEffect(() => {
      (async () => {
        try {
          const s = localStorage.getItem("token"),
            o = await T.get("https://bticlz.onrender.com/api/v1/users/admins", {
              headers: { Authorization: `Bearer ${s}` },
            });
          t({ name: o.data.name, email: o.data.email });
        } catch (s) {
          console.error("Error fetching teacher info:", s);
        }
      })();
    }, []);
    const r = () => {
      localStorage.removeItem("token"), n("/admin-signIn");
    };
    return a.jsx(nn, {
      children: a.jsxs(Mg, {
        children: [
          a.jsx(Lg, { children: a.jsx(rn, {}) }),
          a.jsxs(Rg, {
            children: [
              a.jsx(Fg, { children: "Profile Details" }),
              a.jsxs(AO, {
                children: [
                  a.jsx(D0, { children: "Name:" }),
                  a.jsx(Bc, { children: e.name }),
                  a.jsx(D0, { children: "Email:" }),
                  a.jsx(Bc, { children: e.email }),
                ],
              }),
              a.jsx(zg, { onClick: r, children: "Log Out" }),
            ],
          }),
        ],
      }),
    });
  },
  OO = () => {
    const [e, t] = w.useState([]);
    w.useEffect(() => {
      n();
    }, []);
    const n = async () => {
      try {
        const r = await T.get(
          "https://bticlz.onrender.com/api/v1/class/getall"
        );
        r.data && Array.isArray(r.data.classes)
          ? t(r.data.classes)
          : console.error(
              "Error fetching classes: Invalid data format",
              r.data
            );
      } catch (r) {
        console.error("Error fetching classes:", r.message);
      }
    };
    return a.jsx(mr, {
      children: a.jsxs(mw, {
        children: [
          a.jsx(xw, { children: a.jsx(xr, {}) }),
          a.jsxs(wg, {
            children: [
              a.jsx(vw, { children: "Classes" }),
              a.jsxs(Sg, {
                children: [
                  a.jsx("thead", {
                    children: a.jsxs(Cg, {
                      children: [
                        a.jsx("th", { children: "Class Name" }),
                        a.jsx("th", { children: "Department" }),
                        a.jsx("th", { children: "Semester" }),
                        a.jsx("th", { children: "Section" }),
                        a.jsx("th", { children: "Sub Section" }),
                      ],
                    }),
                  }),
                  a.jsx("tbody", {
                    children: e.map((r, i) =>
                      a.jsxs(
                        _g,
                        {
                          children: [
                            a.jsx(it, { children: r.grade }),
                            a.jsx(it, { children: r.department }),
                            a.jsx(it, { children: r.semester }),
                            a.jsx(it, { children: r.section }),
                            a.jsx(it, { children: r.subSection || "N/A" }),
                          ],
                        },
                        i
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  DO = () => {
    const [e, t] = w.useState([]),
      [n, r] = w.useState([]),
      i = n.length > 0 ? n[0]._id : null;
    w.useEffect(() => {
      s(), o();
    }, []);
    const s = async () => {
        try {
          const c = await T.get(
            "https://bticlz.onrender.com/api/v1/assignments/getall"
          );
          t(c.data.assignments);
        } catch (c) {
          console.error("Error fetching assignments:", c);
        }
      },
      o = async () => {
        try {
          const c = await T.get("https://bticlz.onrender.com/api/v1/students");
          r(c.data.students);
        } catch (c) {
          console.error("Error fetching students:", c);
        }
      },
      l = async (c, u) => {
        if (!i) {
          console.error("No student ID available");
          return;
        }
        try {
          await T.post(
            "https://bticlz.onrender.com/api/v1/assignments/submit",
            { assignmentId: c, studentId: i, opinion: u }
          ),
            t((d) => d.map((h) => (h._id === c ? { ...h, done: !0 } : h)));
        } catch (d) {
          console.error("Error submitting assignment:", d);
        }
      };
    return a.jsx(mr, {
      children: a.jsxs(Og, {
        children: [
          a.jsx(vO, { children: a.jsx(xr, {}) }),
          a.jsxs(Dg, {
            children: [
              a.jsx("h1", { children: "Assignments" }),
              e.map((c) =>
                a.jsxs(
                  yO,
                  {
                    children: [
                      a.jsx(bO, { children: c.title }),
                      a.jsx(jO, { children: c.description }),
                      c.done
                        ? a.jsx(SO, { children: "Assignment Done" })
                        : a.jsx(MO, { onDoAssignment: (u) => l(c._id, u) }),
                    ],
                  },
                  c._id
                )
              ),
            ],
          }),
        ],
      }),
    });
  },
  MO = ({ onDoAssignment: e }) => {
    const [t, n] = w.useState(""),
      r = (s) => {
        n(s.target.value);
      },
      i = (s) => {
        s.preventDefault(),
          t.trim() !== ""
            ? e(t)
            : alert("Please provide your opinion/assignment.");
      };
    return a.jsxs("form", {
      onSubmit: i,
      children: [
        a.jsx("textarea", {
          value: t,
          onChange: r,
          placeholder: "Enter your opinion/assignment...",
        }),
        a.jsx(wO, { type: "submit", children: "Submit" }),
      ],
    });
  };
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function Na(e) {
  return (e + 0.5) | 0;
}
const Lr = (e, t, n) => Math.max(Math.min(e, n), t);
function go(e) {
  return Lr(Na(e * 2.55), 0, 255);
}
function Kr(e) {
  return Lr(Na(e * 255), 0, 255);
}
function er(e) {
  return Lr(Na(e / 2.55) / 100, 0, 1);
}
function M0(e) {
  return Lr(Na(e * 100), 0, 100);
}
const Wt = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Of = [..."0123456789ABCDEF"],
  LO = (e) => Of[e & 15],
  RO = (e) => Of[(e & 240) >> 4] + Of[e & 15],
  fl = (e) => (e & 240) >> 4 === (e & 15),
  FO = (e) => fl(e.r) && fl(e.g) && fl(e.b) && fl(e.a);
function zO(e) {
  var t = e.length,
    n;
  return (
    e[0] === "#" &&
      (t === 4 || t === 5
        ? (n = {
            r: 255 & (Wt[e[1]] * 17),
            g: 255 & (Wt[e[2]] * 17),
            b: 255 & (Wt[e[3]] * 17),
            a: t === 5 ? Wt[e[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (n = {
            r: (Wt[e[1]] << 4) | Wt[e[2]],
            g: (Wt[e[3]] << 4) | Wt[e[4]],
            b: (Wt[e[5]] << 4) | Wt[e[6]],
            a: t === 9 ? (Wt[e[7]] << 4) | Wt[e[8]] : 255,
          })),
    n
  );
}
const $O = (e, t) => (e < 255 ? t(e) : "");
function BO(e) {
  var t = FO(e) ? LO : RO;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + $O(e.a, t) : void 0;
}
const WO =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Ww(e, t, n) {
  const r = t * Math.min(n, 1 - n),
    i = (s, o = (s + e / 30) % 12) =>
      n - r * Math.max(Math.min(o - 3, 9 - o, 1), -1);
  return [i(0), i(8), i(4)];
}
function HO(e, t, n) {
  const r = (i, s = (i + e / 60) % 6) =>
    n - n * t * Math.max(Math.min(s, 4 - s, 1), 0);
  return [r(5), r(3), r(1)];
}
function VO(e, t, n) {
  const r = Ww(e, 1, 0.5);
  let i;
  for (t + n > 1 && ((i = 1 / (t + n)), (t *= i), (n *= i)), i = 0; i < 3; i++)
    (r[i] *= 1 - t - n), (r[i] += t);
  return r;
}
function UO(e, t, n, r, i) {
  return e === i
    ? (t - n) / r + (t < n ? 6 : 0)
    : t === i
    ? (n - e) / r + 2
    : (e - t) / r + 4;
}
function $g(e) {
  const n = e.r / 255,
    r = e.g / 255,
    i = e.b / 255,
    s = Math.max(n, r, i),
    o = Math.min(n, r, i),
    l = (s + o) / 2;
  let c, u, d;
  return (
    s !== o &&
      ((d = s - o),
      (u = l > 0.5 ? d / (2 - s - o) : d / (s + o)),
      (c = UO(n, r, i, d, s)),
      (c = c * 60 + 0.5)),
    [c | 0, u || 0, l]
  );
}
function Bg(e, t, n, r) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, r)).map(Kr);
}
function Wg(e, t, n) {
  return Bg(Ww, e, t, n);
}
function GO(e, t, n) {
  return Bg(VO, e, t, n);
}
function YO(e, t, n) {
  return Bg(HO, e, t, n);
}
function Hw(e) {
  return ((e % 360) + 360) % 360;
}
function qO(e) {
  const t = WO.exec(e);
  let n = 255,
    r;
  if (!t) return;
  t[5] !== r && (n = t[6] ? go(+t[5]) : Kr(+t[5]));
  const i = Hw(+t[2]),
    s = +t[3] / 100,
    o = +t[4] / 100;
  return (
    t[1] === "hwb"
      ? (r = GO(i, s, o))
      : t[1] === "hsv"
      ? (r = YO(i, s, o))
      : (r = Wg(i, s, o)),
    { r: r[0], g: r[1], b: r[2], a: n }
  );
}
function KO(e, t) {
  var n = $g(e);
  (n[0] = Hw(n[0] + t)), (n = Wg(n)), (e.r = n[0]), (e.g = n[1]), (e.b = n[2]);
}
function QO(e) {
  if (!e) return;
  const t = $g(e),
    n = t[0],
    r = M0(t[1]),
    i = M0(t[2]);
  return e.a < 255
    ? `hsla(${n}, ${r}%, ${i}%, ${er(e.a)})`
    : `hsl(${n}, ${r}%, ${i}%)`;
}
const L0 = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  R0 = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function XO() {
  const e = {},
    t = Object.keys(R0),
    n = Object.keys(L0);
  let r, i, s, o, l;
  for (r = 0; r < t.length; r++) {
    for (o = l = t[r], i = 0; i < n.length; i++)
      (s = n[i]), (l = l.replace(s, L0[s]));
    (s = parseInt(R0[o], 16)),
      (e[l] = [(s >> 16) & 255, (s >> 8) & 255, s & 255]);
  }
  return e;
}
let pl;
function JO(e) {
  pl || ((pl = XO()), (pl.transparent = [0, 0, 0, 0]));
  const t = pl[e.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const ZO =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function e4(e) {
  const t = ZO.exec(e);
  let n = 255,
    r,
    i,
    s;
  if (t) {
    if (t[7] !== r) {
      const o = +t[7];
      n = t[8] ? go(o) : Lr(o * 255, 0, 255);
    }
    return (
      (r = +t[1]),
      (i = +t[3]),
      (s = +t[5]),
      (r = 255 & (t[2] ? go(r) : Lr(r, 0, 255))),
      (i = 255 & (t[4] ? go(i) : Lr(i, 0, 255))),
      (s = 255 & (t[6] ? go(s) : Lr(s, 0, 255))),
      { r, g: i, b: s, a: n }
    );
  }
}
function t4(e) {
  return (
    e &&
    (e.a < 255
      ? `rgba(${e.r}, ${e.g}, ${e.b}, ${er(e.a)})`
      : `rgb(${e.r}, ${e.g}, ${e.b})`)
  );
}
const Qd = (e) =>
    e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055,
  qi = (e) => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4));
function n4(e, t, n) {
  const r = qi(er(e.r)),
    i = qi(er(e.g)),
    s = qi(er(e.b));
  return {
    r: Kr(Qd(r + n * (qi(er(t.r)) - r))),
    g: Kr(Qd(i + n * (qi(er(t.g)) - i))),
    b: Kr(Qd(s + n * (qi(er(t.b)) - s))),
    a: e.a + n * (t.a - e.a),
  };
}
function gl(e, t, n) {
  if (e) {
    let r = $g(e);
    (r[t] = Math.max(0, Math.min(r[t] + r[t] * n, t === 0 ? 360 : 1))),
      (r = Wg(r)),
      (e.r = r[0]),
      (e.g = r[1]),
      (e.b = r[2]);
  }
}
function Vw(e, t) {
  return e && Object.assign(t || {}, e);
}
function F0(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(e)
      ? e.length >= 3 &&
        ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
        e.length > 3 && (t.a = Kr(e[3])))
      : ((t = Vw(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Kr(t.a))),
    t
  );
}
function r4(e) {
  return e.charAt(0) === "r" ? e4(e) : qO(e);
}
class ca {
  constructor(t) {
    if (t instanceof ca) return t;
    const n = typeof t;
    let r;
    n === "object"
      ? (r = F0(t))
      : n === "string" && (r = zO(t) || JO(t) || r4(t)),
      (this._rgb = r),
      (this._valid = !!r);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Vw(this._rgb);
    return t && (t.a = er(t.a)), t;
  }
  set rgb(t) {
    this._rgb = F0(t);
  }
  rgbString() {
    return this._valid ? t4(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? BO(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? QO(this._rgb) : void 0;
  }
  mix(t, n) {
    if (t) {
      const r = this.rgb,
        i = t.rgb;
      let s;
      const o = n === s ? 0.5 : n,
        l = 2 * o - 1,
        c = r.a - i.a,
        u = ((l * c === -1 ? l : (l + c) / (1 + l * c)) + 1) / 2;
      (s = 1 - u),
        (r.r = 255 & (u * r.r + s * i.r + 0.5)),
        (r.g = 255 & (u * r.g + s * i.g + 0.5)),
        (r.b = 255 & (u * r.b + s * i.b + 0.5)),
        (r.a = o * r.a + (1 - o) * i.a),
        (this.rgb = r);
    }
    return this;
  }
  interpolate(t, n) {
    return t && (this._rgb = n4(this._rgb, t._rgb, n)), this;
  }
  clone() {
    return new ca(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = Kr(t)), this;
  }
  clearer(t) {
    const n = this._rgb;
    return (n.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      n = Na(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return (t.r = t.g = t.b = n), this;
  }
  opaquer(t) {
    const n = this._rgb;
    return (n.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return gl(this._rgb, 2, t), this;
  }
  darken(t) {
    return gl(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return gl(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return gl(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return KO(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ function qn() {}
const i4 = (() => {
  let e = 0;
  return () => e++;
})();
function de(e) {
  return e === null || typeof e > "u";
}
function we(e) {
  if (Array.isArray && Array.isArray(e)) return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function oe(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function We(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function St(e, t) {
  return We(e) ? e : t;
}
function J(e, t) {
  return typeof e > "u" ? t : e;
}
const s4 = (e, t) =>
  typeof e == "string" && e.endsWith("%") ? (parseFloat(e) / 100) * t : +e;
function fe(e, t, n) {
  if (e && typeof e.call == "function") return e.apply(n, t);
}
function ue(e, t, n, r) {
  let i, s, o;
  if (we(e)) for (s = e.length, i = 0; i < s; i++) t.call(n, e[i], i);
  else if (oe(e))
    for (o = Object.keys(e), s = o.length, i = 0; i < s; i++)
      t.call(n, e[o[i]], o[i]);
}
function Wc(e, t) {
  let n, r, i, s;
  if (!e || !t || e.length !== t.length) return !1;
  for (n = 0, r = e.length; n < r; ++n)
    if (
      ((i = e[n]),
      (s = t[n]),
      i.datasetIndex !== s.datasetIndex || i.index !== s.index)
    )
      return !1;
  return !0;
}
function Hc(e) {
  if (we(e)) return e.map(Hc);
  if (oe(e)) {
    const t = Object.create(null),
      n = Object.keys(e),
      r = n.length;
    let i = 0;
    for (; i < r; ++i) t[n[i]] = Hc(e[n[i]]);
    return t;
  }
  return e;
}
function Uw(e) {
  return ["__proto__", "prototype", "constructor"].indexOf(e) === -1;
}
function o4(e, t, n, r) {
  if (!Uw(e)) return;
  const i = t[e],
    s = n[e];
  oe(i) && oe(s) ? ua(i, s, r) : (t[e] = Hc(s));
}
function ua(e, t, n) {
  const r = we(t) ? t : [t],
    i = r.length;
  if (!oe(e)) return e;
  n = n || {};
  const s = n.merger || o4;
  let o;
  for (let l = 0; l < i; ++l) {
    if (((o = r[l]), !oe(o))) continue;
    const c = Object.keys(o);
    for (let u = 0, d = c.length; u < d; ++u) s(c[u], e, o, n);
  }
  return e;
}
function Ao(e, t) {
  return ua(e, t, { merger: a4 });
}
function a4(e, t, n) {
  if (!Uw(e)) return;
  const r = t[e],
    i = n[e];
  oe(r) && oe(i)
    ? Ao(r, i)
    : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = Hc(i));
}
const z0 = { "": (e) => e, x: (e) => e.x, y: (e) => e.y };
function l4(e) {
  const t = e.split("."),
    n = [];
  let r = "";
  for (const i of t)
    (r += i),
      r.endsWith("\\") ? (r = r.slice(0, -1) + ".") : (n.push(r), (r = ""));
  return n;
}
function c4(e) {
  const t = l4(e);
  return (n) => {
    for (const r of t) {
      if (r === "") break;
      n = n && n[r];
    }
    return n;
  };
}
function Ds(e, t) {
  return (z0[t] || (z0[t] = c4(t)))(e);
}
function Hg(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const da = (e) => typeof e < "u",
  Jr = (e) => typeof e == "function",
  $0 = (e, t) => {
    if (e.size !== t.size) return !1;
    for (const n of e) if (!t.has(n)) return !1;
    return !0;
  };
function u4(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const Me = Math.PI,
  Xt = 2 * Me,
  d4 = Xt + Me,
  Vc = Number.POSITIVE_INFINITY,
  h4 = Me / 180,
  kt = Me / 2,
  li = Me / 4,
  B0 = (Me * 2) / 3,
  Rr = Math.log10,
  zn = Math.sign;
function To(e, t, n) {
  return Math.abs(e - t) < n;
}
function W0(e) {
  const t = Math.round(e);
  e = To(e, t, e / 1e3) ? t : e;
  const n = Math.pow(10, Math.floor(Rr(e))),
    r = e / n;
  return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n;
}
function f4(e) {
  const t = [],
    n = Math.sqrt(e);
  let r;
  for (r = 1; r < n; r++) e % r === 0 && (t.push(r), t.push(e / r));
  return n === (n | 0) && t.push(n), t.sort((i, s) => i - s).pop(), t;
}
function ha(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function p4(e, t) {
  const n = Math.round(e);
  return n - t <= e && n + t >= e;
}
function Gw(e, t, n) {
  let r, i, s;
  for (r = 0, i = e.length; r < i; r++)
    (s = e[r][n]),
      isNaN(s) || ((t.min = Math.min(t.min, s)), (t.max = Math.max(t.max, s)));
}
function Fr(e) {
  return e * (Me / 180);
}
function Vg(e) {
  return e * (180 / Me);
}
function H0(e) {
  if (!We(e)) return;
  let t = 1,
    n = 0;
  for (; Math.round(e * t) / t !== e; ) (t *= 10), n++;
  return n;
}
function g4(e, t) {
  const n = t.x - e.x,
    r = t.y - e.y,
    i = Math.sqrt(n * n + r * r);
  let s = Math.atan2(r, n);
  return s < -0.5 * Me && (s += Xt), { angle: s, distance: i };
}
function Df(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function m4(e, t) {
  return ((e - t + d4) % Xt) - Me;
}
function gn(e) {
  return ((e % Xt) + Xt) % Xt;
}
function Yw(e, t, n, r) {
  const i = gn(e),
    s = gn(t),
    o = gn(n),
    l = gn(s - i),
    c = gn(o - i),
    u = gn(i - s),
    d = gn(i - o);
  return i === s || i === o || (r && s === o) || (l > c && u < d);
}
function Pt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function x4(e) {
  return Pt(e, -32768, 32767);
}
function ji(e, t, n, r = 1e-6) {
  return e >= Math.min(t, n) - r && e <= Math.max(t, n) + r;
}
function Ug(e, t, n) {
  n = n || ((o) => e[o] < t);
  let r = e.length - 1,
    i = 0,
    s;
  for (; r - i > 1; ) (s = (i + r) >> 1), n(s) ? (i = s) : (r = s);
  return { lo: i, hi: r };
}
const wi = (e, t, n, r) =>
    Ug(
      e,
      n,
      r
        ? (i) => {
            const s = e[i][t];
            return s < n || (s === n && e[i + 1][t] === n);
          }
        : (i) => e[i][t] < n
    ),
  v4 = (e, t, n) => Ug(e, n, (r) => e[r][t] >= n);
function y4(e, t, n) {
  let r = 0,
    i = e.length;
  for (; r < i && e[r] < t; ) r++;
  for (; i > r && e[i - 1] > n; ) i--;
  return r > 0 || i < e.length ? e.slice(r, i) : e;
}
const qw = ["push", "pop", "shift", "splice", "unshift"];
function b4(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    qw.forEach((n) => {
      const r = "_onData" + Hg(n),
        i = e[n];
      Object.defineProperty(e, n, {
        configurable: !0,
        enumerable: !1,
        value(...s) {
          const o = i.apply(this, s);
          return (
            e._chartjs.listeners.forEach((l) => {
              typeof l[r] == "function" && l[r](...s);
            }),
            o
          );
        },
      });
    });
}
function V0(e, t) {
  const n = e._chartjs;
  if (!n) return;
  const r = n.listeners,
    i = r.indexOf(t);
  i !== -1 && r.splice(i, 1),
    !(r.length > 0) &&
      (qw.forEach((s) => {
        delete e[s];
      }),
      delete e._chartjs);
}
function Kw(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const Qw = (function () {
  return typeof window > "u"
    ? function (e) {
        return e();
      }
    : window.requestAnimationFrame;
})();
function Xw(e, t) {
  let n = [],
    r = !1;
  return function (...i) {
    (n = i),
      r ||
        ((r = !0),
        Qw.call(window, () => {
          (r = !1), e.apply(t, n);
        }));
  };
}
function j4(e, t) {
  let n;
  return function (...r) {
    return (
      t ? (clearTimeout(n), (n = setTimeout(e, t, r))) : e.apply(this, r), t
    );
  };
}
const Gg = (e) => (e === "start" ? "left" : e === "end" ? "right" : "center"),
  Qe = (e, t, n) => (e === "start" ? t : e === "end" ? n : (t + n) / 2),
  w4 = (e, t, n, r) =>
    e === (r ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t;
function S4(e, t, n) {
  const r = t.length;
  let i = 0,
    s = r;
  if (e._sorted) {
    const { iScale: o, _parsed: l } = e,
      c = o.axis,
      { min: u, max: d, minDefined: h, maxDefined: f } = o.getUserBounds();
    h &&
      (i = Pt(
        Math.min(wi(l, c, u).lo, n ? r : wi(t, c, o.getPixelForValue(u)).lo),
        0,
        r - 1
      )),
      f
        ? (s =
            Pt(
              Math.max(
                wi(l, o.axis, d, !0).hi + 1,
                n ? 0 : wi(t, c, o.getPixelForValue(d), !0).hi + 1
              ),
              i,
              r
            ) - i)
        : (s = r - i);
  }
  return { start: i, count: s };
}
function C4(e) {
  const { xScale: t, yScale: n, _scaleRanges: r } = e,
    i = { xmin: t.min, xmax: t.max, ymin: n.min, ymax: n.max };
  if (!r) return (e._scaleRanges = i), !0;
  const s =
    r.xmin !== t.min ||
    r.xmax !== t.max ||
    r.ymin !== n.min ||
    r.ymax !== n.max;
  return Object.assign(r, i), s;
}
const ml = (e) => e === 0 || e === 1,
  U0 = (e, t, n) =>
    -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * Xt) / n)),
  G0 = (e, t, n) => Math.pow(2, -10 * e) * Math.sin(((e - t) * Xt) / n) + 1,
  Oo = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => -e * (e - 2),
    easeInOutQuad: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => (e -= 1) * e * e + 1,
    easeInOutCubic: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
    easeInOutQuart: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
    easeInOutQuint: (e) =>
      (e /= 0.5) < 1
        ? 0.5 * e * e * e * e * e
        : 0.5 * ((e -= 2) * e * e * e * e + 2),
    easeInSine: (e) => -Math.cos(e * kt) + 1,
    easeOutSine: (e) => Math.sin(e * kt),
    easeInOutSine: (e) => -0.5 * (Math.cos(Me * e) - 1),
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
    easeOutExpo: (e) => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
    easeInOutExpo: (e) =>
      ml(e)
        ? e
        : e < 0.5
        ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
    easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
    easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
    easeInOutCirc: (e) =>
      (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
    easeInElastic: (e) => (ml(e) ? e : U0(e, 0.075, 0.3)),
    easeOutElastic: (e) => (ml(e) ? e : G0(e, 0.075, 0.3)),
    easeInOutElastic(e) {
      return ml(e)
        ? e
        : e < 0.5
        ? 0.5 * U0(e * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * G0(e * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(e) {
      return e * e * ((1.70158 + 1) * e - 1.70158);
    },
    easeOutBack(e) {
      return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
    },
    easeInOutBack(e) {
      let t = 1.70158;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    },
    easeInBounce: (e) => 1 - Oo.easeOutBounce(1 - e),
    easeOutBounce(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    },
    easeInOutBounce: (e) =>
      e < 0.5
        ? Oo.easeInBounce(e * 2) * 0.5
        : Oo.easeOutBounce(e * 2 - 1) * 0.5 + 0.5,
  };
function Yg(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Y0(e) {
  return Yg(e) ? e : new ca(e);
}
function Xd(e) {
  return Yg(e) ? e : new ca(e).saturate(0.5).darken(0.1).hexString();
}
const _4 = ["x", "y", "borderWidth", "radius", "tension"],
  E4 = ["color", "borderColor", "backgroundColor"];
function k4(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    e.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) =>
        t !== "onProgress" && t !== "onComplete" && t !== "fn",
    }),
    e.set("animations", {
      colors: { type: "color", properties: E4 },
      numbers: { type: "number", properties: _4 },
    }),
    e.describe("animations", { _fallback: "animation" }),
    e.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (t) => t | 0 },
        },
      },
    });
}
function P4(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const q0 = new Map();
function I4(e, t) {
  t = t || {};
  const n = e + JSON.stringify(t);
  let r = q0.get(n);
  return r || ((r = new Intl.NumberFormat(e, t)), q0.set(n, r)), r;
}
function qg(e, t, n) {
  return I4(t, n).format(e);
}
const Jw = {
  values(e) {
    return we(e) ? e : "" + e;
  },
  numeric(e, t, n) {
    if (e === 0) return "0";
    const r = this.chart.options.locale;
    let i,
      s = e;
    if (n.length > 1) {
      const u = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (u < 1e-4 || u > 1e15) && (i = "scientific"), (s = N4(e, n));
    }
    const o = Rr(Math.abs(s)),
      l = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
      c = { notation: i, minimumFractionDigits: l, maximumFractionDigits: l };
    return Object.assign(c, this.options.ticks.format), qg(e, r, c);
  },
  logarithmic(e, t, n) {
    if (e === 0) return "0";
    const r = n[t].significand || e / Math.pow(10, Math.floor(Rr(e)));
    return [1, 2, 3, 5, 10, 15].includes(r) || t > 0.8 * n.length
      ? Jw.numeric.call(this, e, t, n)
      : "";
  },
};
function N4(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var $u = { formatters: Jw };
function A4(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, n) => n.lineWidth,
      tickColor: (t, n) => n.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: $u.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    e.route("scale.ticks", "color", "", "color"),
    e.route("scale.grid", "color", "", "borderColor"),
    e.route("scale.border", "color", "", "borderColor"),
    e.route("scale.title", "color", "", "color"),
    e.describe("scale", {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith("before") &&
        !t.startsWith("after") &&
        t !== "callback" &&
        t !== "parser",
      _indexable: (t) =>
        t !== "borderDash" && t !== "tickBorderDash" && t !== "dash",
    }),
    e.describe("scales", { _fallback: "scale" }),
    e.describe("scale.ticks", {
      _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
      _indexable: (t) => t !== "backdropPadding",
    });
}
const Ri = Object.create(null),
  Mf = Object.create(null);
function Do(e, t) {
  if (!t) return e;
  const n = t.split(".");
  for (let r = 0, i = n.length; r < i; ++r) {
    const s = n[r];
    e = e[s] || (e[s] = Object.create(null));
  }
  return e;
}
function Jd(e, t, n) {
  return typeof t == "string" ? ua(Do(e, t), n) : ua(Do(e, ""), t);
}
class T4 {
  constructor(t, n) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (r) => r.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (r, i) => Xd(i.backgroundColor)),
      (this.hoverBorderColor = (r, i) => Xd(i.borderColor)),
      (this.hoverColor = (r, i) => Xd(i.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(n);
  }
  set(t, n) {
    return Jd(this, t, n);
  }
  get(t) {
    return Do(this, t);
  }
  describe(t, n) {
    return Jd(Mf, t, n);
  }
  override(t, n) {
    return Jd(Ri, t, n);
  }
  route(t, n, r, i) {
    const s = Do(this, t),
      o = Do(this, r),
      l = "_" + n;
    Object.defineProperties(s, {
      [l]: { value: s[n], writable: !0 },
      [n]: {
        enumerable: !0,
        get() {
          const c = this[l],
            u = o[i];
          return oe(c) ? Object.assign({}, u, c) : J(c, u);
        },
        set(c) {
          this[l] = c;
        },
      },
    });
  }
  apply(t) {
    t.forEach((n) => n(this));
  }
}
var ke = new T4(
  {
    _scriptable: (e) => !e.startsWith("on"),
    _indexable: (e) => e !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [k4, P4, A4]
);
function O4(e) {
  return !e || de(e.size) || de(e.family)
    ? null
    : (e.style ? e.style + " " : "") +
        (e.weight ? e.weight + " " : "") +
        e.size +
        "px " +
        e.family;
}
function Uc(e, t, n, r, i) {
  let s = t[i];
  return (
    s || ((s = t[i] = e.measureText(i).width), n.push(i)), s > r && (r = s), r
  );
}
function D4(e, t, n, r) {
  r = r || {};
  let i = (r.data = r.data || {}),
    s = (r.garbageCollect = r.garbageCollect || []);
  r.font !== t &&
    ((i = r.data = {}), (s = r.garbageCollect = []), (r.font = t)),
    e.save(),
    (e.font = t);
  let o = 0;
  const l = n.length;
  let c, u, d, h, f;
  for (c = 0; c < l; c++)
    if (((h = n[c]), h != null && !we(h))) o = Uc(e, i, s, o, h);
    else if (we(h))
      for (u = 0, d = h.length; u < d; u++)
        (f = h[u]), f != null && !we(f) && (o = Uc(e, i, s, o, f));
  e.restore();
  const m = s.length / 2;
  if (m > n.length) {
    for (c = 0; c < m; c++) delete i[s[c]];
    s.splice(0, m);
  }
  return o;
}
function ci(e, t, n) {
  const r = e.currentDevicePixelRatio,
    i = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((t - i) * r) / r + i;
}
function K0(e, t) {
  (!t && !e) ||
    ((t = t || e.getContext("2d")),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, e.width, e.height),
    t.restore());
}
function Lf(e, t, n, r) {
  Zw(e, t, n, r, null);
}
function Zw(e, t, n, r, i) {
  let s, o, l, c, u, d, h, f;
  const m = t.pointStyle,
    p = t.rotation,
    g = t.radius;
  let y = (p || 0) * h4;
  if (
    m &&
    typeof m == "object" &&
    ((s = m.toString()),
    s === "[object HTMLImageElement]" || s === "[object HTMLCanvasElement]")
  ) {
    e.save(),
      e.translate(n, r),
      e.rotate(y),
      e.drawImage(m, -m.width / 2, -m.height / 2, m.width, m.height),
      e.restore();
    return;
  }
  if (!(isNaN(g) || g <= 0)) {
    switch ((e.beginPath(), m)) {
      default:
        i ? e.ellipse(n, r, i / 2, g, 0, 0, Xt) : e.arc(n, r, g, 0, Xt),
          e.closePath();
        break;
      case "triangle":
        (d = i ? i / 2 : g),
          e.moveTo(n + Math.sin(y) * d, r - Math.cos(y) * g),
          (y += B0),
          e.lineTo(n + Math.sin(y) * d, r - Math.cos(y) * g),
          (y += B0),
          e.lineTo(n + Math.sin(y) * d, r - Math.cos(y) * g),
          e.closePath();
        break;
      case "rectRounded":
        (u = g * 0.516),
          (c = g - u),
          (o = Math.cos(y + li) * c),
          (h = Math.cos(y + li) * (i ? i / 2 - u : c)),
          (l = Math.sin(y + li) * c),
          (f = Math.sin(y + li) * (i ? i / 2 - u : c)),
          e.arc(n - h, r - l, u, y - Me, y - kt),
          e.arc(n + f, r - o, u, y - kt, y),
          e.arc(n + h, r + l, u, y, y + kt),
          e.arc(n - f, r + o, u, y + kt, y + Me),
          e.closePath();
        break;
      case "rect":
        if (!p) {
          (c = Math.SQRT1_2 * g),
            (d = i ? i / 2 : c),
            e.rect(n - d, r - c, 2 * d, 2 * c);
          break;
        }
        y += li;
      case "rectRot":
        (h = Math.cos(y) * (i ? i / 2 : g)),
          (o = Math.cos(y) * g),
          (l = Math.sin(y) * g),
          (f = Math.sin(y) * (i ? i / 2 : g)),
          e.moveTo(n - h, r - l),
          e.lineTo(n + f, r - o),
          e.lineTo(n + h, r + l),
          e.lineTo(n - f, r + o),
          e.closePath();
        break;
      case "crossRot":
        y += li;
      case "cross":
        (h = Math.cos(y) * (i ? i / 2 : g)),
          (o = Math.cos(y) * g),
          (l = Math.sin(y) * g),
          (f = Math.sin(y) * (i ? i / 2 : g)),
          e.moveTo(n - h, r - l),
          e.lineTo(n + h, r + l),
          e.moveTo(n + f, r - o),
          e.lineTo(n - f, r + o);
        break;
      case "star":
        (h = Math.cos(y) * (i ? i / 2 : g)),
          (o = Math.cos(y) * g),
          (l = Math.sin(y) * g),
          (f = Math.sin(y) * (i ? i / 2 : g)),
          e.moveTo(n - h, r - l),
          e.lineTo(n + h, r + l),
          e.moveTo(n + f, r - o),
          e.lineTo(n - f, r + o),
          (y += li),
          (h = Math.cos(y) * (i ? i / 2 : g)),
          (o = Math.cos(y) * g),
          (l = Math.sin(y) * g),
          (f = Math.sin(y) * (i ? i / 2 : g)),
          e.moveTo(n - h, r - l),
          e.lineTo(n + h, r + l),
          e.moveTo(n + f, r - o),
          e.lineTo(n - f, r + o);
        break;
      case "line":
        (o = i ? i / 2 : Math.cos(y) * g),
          (l = Math.sin(y) * g),
          e.moveTo(n - o, r - l),
          e.lineTo(n + o, r + l);
        break;
      case "dash":
        e.moveTo(n, r),
          e.lineTo(n + Math.cos(y) * (i ? i / 2 : g), r + Math.sin(y) * g);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function ir(e, t, n) {
  return (
    (n = n || 0.5),
    !t ||
      (e &&
        e.x > t.left - n &&
        e.x < t.right + n &&
        e.y > t.top - n &&
        e.y < t.bottom + n)
  );
}
function Kg(e, t) {
  e.save(),
    e.beginPath(),
    e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    e.clip();
}
function Qg(e) {
  e.restore();
}
function M4(e, t, n, r, i) {
  if (!t) return e.lineTo(n.x, n.y);
  if (i === "middle") {
    const s = (t.x + n.x) / 2;
    e.lineTo(s, t.y), e.lineTo(s, n.y);
  } else (i === "after") != !!r ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
  e.lineTo(n.x, n.y);
}
function L4(e, t, n, r) {
  if (!t) return e.lineTo(n.x, n.y);
  e.bezierCurveTo(
    r ? t.cp1x : t.cp2x,
    r ? t.cp1y : t.cp2y,
    r ? n.cp2x : n.cp1x,
    r ? n.cp2y : n.cp1y,
    n.x,
    n.y
  );
}
function R4(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]),
    de(t.rotation) || e.rotate(t.rotation),
    t.color && (e.fillStyle = t.color),
    t.textAlign && (e.textAlign = t.textAlign),
    t.textBaseline && (e.textBaseline = t.textBaseline);
}
function F4(e, t, n, r, i) {
  if (i.strikethrough || i.underline) {
    const s = e.measureText(r),
      o = t - s.actualBoundingBoxLeft,
      l = t + s.actualBoundingBoxRight,
      c = n - s.actualBoundingBoxAscent,
      u = n + s.actualBoundingBoxDescent,
      d = i.strikethrough ? (c + u) / 2 : u;
    (e.strokeStyle = e.fillStyle),
      e.beginPath(),
      (e.lineWidth = i.decorationWidth || 2),
      e.moveTo(o, d),
      e.lineTo(l, d),
      e.stroke();
  }
}
function z4(e, t) {
  const n = e.fillStyle;
  (e.fillStyle = t.color),
    e.fillRect(t.left, t.top, t.width, t.height),
    (e.fillStyle = n);
}
function Fi(e, t, n, r, i, s = {}) {
  const o = we(t) ? t : [t],
    l = s.strokeWidth > 0 && s.strokeColor !== "";
  let c, u;
  for (e.save(), e.font = i.string, R4(e, s), c = 0; c < o.length; ++c)
    (u = o[c]),
      s.backdrop && z4(e, s.backdrop),
      l &&
        (s.strokeColor && (e.strokeStyle = s.strokeColor),
        de(s.strokeWidth) || (e.lineWidth = s.strokeWidth),
        e.strokeText(u, n, r, s.maxWidth)),
      e.fillText(u, n, r, s.maxWidth),
      F4(e, n, r, u, s),
      (r += Number(i.lineHeight));
  e.restore();
}
function fa(e, t) {
  const { x: n, y: r, w: i, h: s, radius: o } = t;
  e.arc(n + o.topLeft, r + o.topLeft, o.topLeft, 1.5 * Me, Me, !0),
    e.lineTo(n, r + s - o.bottomLeft),
    e.arc(n + o.bottomLeft, r + s - o.bottomLeft, o.bottomLeft, Me, kt, !0),
    e.lineTo(n + i - o.bottomRight, r + s),
    e.arc(
      n + i - o.bottomRight,
      r + s - o.bottomRight,
      o.bottomRight,
      kt,
      0,
      !0
    ),
    e.lineTo(n + i, r + o.topRight),
    e.arc(n + i - o.topRight, r + o.topRight, o.topRight, 0, -kt, !0),
    e.lineTo(n + o.topLeft, r);
}
const $4 = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  B4 = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function W4(e, t) {
  const n = ("" + e).match($4);
  if (!n || n[1] === "normal") return t * 1.2;
  switch (((e = +n[2]), n[3])) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const H4 = (e) => +e || 0;
function eS(e, t) {
  const n = {},
    r = oe(t),
    i = r ? Object.keys(t) : t,
    s = oe(e) ? (r ? (o) => J(e[o], e[t[o]]) : (o) => e[o]) : () => e;
  for (const o of i) n[o] = H4(s(o));
  return n;
}
function tS(e) {
  return eS(e, { top: "y", right: "x", bottom: "y", left: "x" });
}
function Ni(e) {
  return eS(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function Ze(e) {
  const t = tS(e);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function ze(e, t) {
  (e = e || {}), (t = t || ke.font);
  let n = J(e.size, t.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let r = J(e.style, t.style);
  r &&
    !("" + r).match(B4) &&
    (console.warn('Invalid font style specified: "' + r + '"'), (r = void 0));
  const i = {
    family: J(e.family, t.family),
    lineHeight: W4(J(e.lineHeight, t.lineHeight), n),
    size: n,
    style: r,
    weight: J(e.weight, t.weight),
    string: "",
  };
  return (i.string = O4(i)), i;
}
function xl(e, t, n, r) {
  let i, s, o;
  for (i = 0, s = e.length; i < s; ++i)
    if (((o = e[i]), o !== void 0 && o !== void 0)) return o;
}
function V4(e, t, n) {
  const { min: r, max: i } = e,
    s = s4(t, (i - r) / 2),
    o = (l, c) => (n && l === 0 ? 0 : l + c);
  return { min: o(r, -Math.abs(s)), max: o(i, s) };
}
function oi(e, t) {
  return Object.assign(Object.create(e), t);
}
function Xg(e, t = [""], n, r, i = () => e[0]) {
  const s = n || e;
  typeof r > "u" && (r = sS("_fallback", e));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: s,
    _fallback: r,
    _getTarget: i,
    override: (l) => Xg([l, ...e], t, s, r),
  };
  return new Proxy(o, {
    deleteProperty(l, c) {
      return delete l[c], delete l._keys, delete e[0][c], !0;
    },
    get(l, c) {
      return rS(l, c, () => J4(c, t, e, l));
    },
    getOwnPropertyDescriptor(l, c) {
      return Reflect.getOwnPropertyDescriptor(l._scopes[0], c);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    has(l, c) {
      return X0(l).includes(c);
    },
    ownKeys(l) {
      return X0(l);
    },
    set(l, c, u) {
      const d = l._storage || (l._storage = i());
      return (l[c] = d[c] = u), delete l._keys, !0;
    },
  });
}
function Ms(e, t, n, r) {
  const i = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: new Set(),
    _descriptors: nS(e, r),
    setContext: (s) => Ms(e, s, n, r),
    override: (s) => Ms(e.override(s), t, n, r),
  };
  return new Proxy(i, {
    deleteProperty(s, o) {
      return delete s[o], delete e[o], !0;
    },
    get(s, o, l) {
      return rS(s, o, () => G4(s, o, l));
    },
    getOwnPropertyDescriptor(s, o) {
      return s._descriptors.allKeys
        ? Reflect.has(e, o)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(e, o);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    has(s, o) {
      return Reflect.has(e, o);
    },
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    set(s, o, l) {
      return (e[o] = l), delete s[o], !0;
    },
  });
}
function nS(e, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: n = t.scriptable,
    _indexable: r = t.indexable,
    _allKeys: i = t.allKeys,
  } = e;
  return {
    allKeys: i,
    scriptable: n,
    indexable: r,
    isScriptable: Jr(n) ? n : () => n,
    isIndexable: Jr(r) ? r : () => r,
  };
}
const U4 = (e, t) => (e ? e + Hg(t) : t),
  Jg = (e, t) =>
    oe(t) &&
    e !== "adapters" &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function rS(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t) || t === "constructor")
    return e[t];
  const r = n();
  return (e[t] = r), r;
}
function G4(e, t, n) {
  const { _proxy: r, _context: i, _subProxy: s, _descriptors: o } = e;
  let l = r[t];
  return (
    Jr(l) && o.isScriptable(t) && (l = Y4(t, l, e, n)),
    we(l) && l.length && (l = q4(t, l, e, o.isIndexable)),
    Jg(t, l) && (l = Ms(l, i, s && s[t], o)),
    l
  );
}
function Y4(e, t, n, r) {
  const { _proxy: i, _context: s, _subProxy: o, _stack: l } = n;
  if (l.has(e))
    throw new Error(
      "Recursion detected: " + Array.from(l).join("->") + "->" + e
    );
  l.add(e);
  let c = t(s, o || r);
  return l.delete(e), Jg(e, c) && (c = Zg(i._scopes, i, e, c)), c;
}
function q4(e, t, n, r) {
  const { _proxy: i, _context: s, _subProxy: o, _descriptors: l } = n;
  if (typeof s.index < "u" && r(e)) return t[s.index % t.length];
  if (oe(t[0])) {
    const c = t,
      u = i._scopes.filter((d) => d !== c);
    t = [];
    for (const d of c) {
      const h = Zg(u, i, e, d);
      t.push(Ms(h, s, o && o[e], l));
    }
  }
  return t;
}
function iS(e, t, n) {
  return Jr(e) ? e(t, n) : e;
}
const K4 = (e, t) => (e === !0 ? t : typeof e == "string" ? Ds(t, e) : void 0);
function Q4(e, t, n, r, i) {
  for (const s of t) {
    const o = K4(n, s);
    if (o) {
      e.add(o);
      const l = iS(o._fallback, n, i);
      if (typeof l < "u" && l !== n && l !== r) return l;
    } else if (o === !1 && typeof r < "u" && n !== r) return null;
  }
  return !1;
}
function Zg(e, t, n, r) {
  const i = t._rootScopes,
    s = iS(t._fallback, n, r),
    o = [...e, ...i],
    l = new Set();
  l.add(r);
  let c = Q0(l, o, n, s || n, r);
  return c === null ||
    (typeof s < "u" && s !== n && ((c = Q0(l, o, s, c, r)), c === null))
    ? !1
    : Xg(Array.from(l), [""], i, s, () => X4(t, n, r));
}
function Q0(e, t, n, r, i) {
  for (; n; ) n = Q4(e, t, n, r, i);
  return n;
}
function X4(e, t, n) {
  const r = e._getTarget();
  t in r || (r[t] = {});
  const i = r[t];
  return we(i) && oe(n) ? n : i || {};
}
function J4(e, t, n, r) {
  let i;
  for (const s of t)
    if (((i = sS(U4(s, e), n)), typeof i < "u"))
      return Jg(e, i) ? Zg(n, r, e, i) : i;
}
function sS(e, t) {
  for (const n of t) {
    if (!n) continue;
    const r = n[e];
    if (typeof r < "u") return r;
  }
}
function X0(e) {
  let t = e._keys;
  return t || (t = e._keys = Z4(e._scopes)), t;
}
function Z4(e) {
  const t = new Set();
  for (const n of e)
    for (const r of Object.keys(n).filter((i) => !i.startsWith("_"))) t.add(r);
  return Array.from(t);
}
const eD = Number.EPSILON || 1e-14,
  Ls = (e, t) => t < e.length && !e[t].skip && e[t],
  oS = (e) => (e === "x" ? "y" : "x");
function tD(e, t, n, r) {
  const i = e.skip ? t : e,
    s = t,
    o = n.skip ? t : n,
    l = Df(s, i),
    c = Df(o, s);
  let u = l / (l + c),
    d = c / (l + c);
  (u = isNaN(u) ? 0 : u), (d = isNaN(d) ? 0 : d);
  const h = r * u,
    f = r * d;
  return {
    previous: { x: s.x - h * (o.x - i.x), y: s.y - h * (o.y - i.y) },
    next: { x: s.x + f * (o.x - i.x), y: s.y + f * (o.y - i.y) },
  };
}
function nD(e, t, n) {
  const r = e.length;
  let i,
    s,
    o,
    l,
    c,
    u = Ls(e, 0);
  for (let d = 0; d < r - 1; ++d)
    if (((c = u), (u = Ls(e, d + 1)), !(!c || !u))) {
      if (To(t[d], 0, eD)) {
        n[d] = n[d + 1] = 0;
        continue;
      }
      (i = n[d] / t[d]),
        (s = n[d + 1] / t[d]),
        (l = Math.pow(i, 2) + Math.pow(s, 2)),
        !(l <= 9) &&
          ((o = 3 / Math.sqrt(l)),
          (n[d] = i * o * t[d]),
          (n[d + 1] = s * o * t[d]));
    }
}
function rD(e, t, n = "x") {
  const r = oS(n),
    i = e.length;
  let s,
    o,
    l,
    c = Ls(e, 0);
  for (let u = 0; u < i; ++u) {
    if (((o = l), (l = c), (c = Ls(e, u + 1)), !l)) continue;
    const d = l[n],
      h = l[r];
    o &&
      ((s = (d - o[n]) / 3),
      (l[`cp1${n}`] = d - s),
      (l[`cp1${r}`] = h - s * t[u])),
      c &&
        ((s = (c[n] - d) / 3),
        (l[`cp2${n}`] = d + s),
        (l[`cp2${r}`] = h + s * t[u]));
  }
}
function iD(e, t = "x") {
  const n = oS(t),
    r = e.length,
    i = Array(r).fill(0),
    s = Array(r);
  let o,
    l,
    c,
    u = Ls(e, 0);
  for (o = 0; o < r; ++o)
    if (((l = c), (c = u), (u = Ls(e, o + 1)), !!c)) {
      if (u) {
        const d = u[t] - c[t];
        i[o] = d !== 0 ? (u[n] - c[n]) / d : 0;
      }
      s[o] = l
        ? u
          ? zn(i[o - 1]) !== zn(i[o])
            ? 0
            : (i[o - 1] + i[o]) / 2
          : i[o - 1]
        : i[o];
    }
  nD(e, i, s), rD(e, s, t);
}
function vl(e, t, n) {
  return Math.max(Math.min(e, n), t);
}
function sD(e, t) {
  let n,
    r,
    i,
    s,
    o,
    l = ir(e[0], t);
  for (n = 0, r = e.length; n < r; ++n)
    (o = s),
      (s = l),
      (l = n < r - 1 && ir(e[n + 1], t)),
      s &&
        ((i = e[n]),
        o &&
          ((i.cp1x = vl(i.cp1x, t.left, t.right)),
          (i.cp1y = vl(i.cp1y, t.top, t.bottom))),
        l &&
          ((i.cp2x = vl(i.cp2x, t.left, t.right)),
          (i.cp2y = vl(i.cp2y, t.top, t.bottom))));
}
function oD(e, t, n, r, i) {
  let s, o, l, c;
  if (
    (t.spanGaps && (e = e.filter((u) => !u.skip)),
    t.cubicInterpolationMode === "monotone")
  )
    iD(e, i);
  else {
    let u = r ? e[e.length - 1] : e[0];
    for (s = 0, o = e.length; s < o; ++s)
      (l = e[s]),
        (c = tD(u, l, e[Math.min(s + 1, o - (r ? 0 : 1)) % o], t.tension)),
        (l.cp1x = c.previous.x),
        (l.cp1y = c.previous.y),
        (l.cp2x = c.next.x),
        (l.cp2y = c.next.y),
        (u = l);
  }
  t.capBezierPoints && sD(e, n);
}
function em() {
  return typeof window < "u" && typeof document < "u";
}
function tm(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Gc(e, t, n) {
  let r;
  return (
    typeof e == "string"
      ? ((r = parseInt(e, 10)),
        e.indexOf("%") !== -1 && (r = (r / 100) * t.parentNode[n]))
      : (r = e),
    r
  );
}
const Bu = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function aD(e, t) {
  return Bu(e).getPropertyValue(t);
}
const lD = ["top", "right", "bottom", "left"];
function Ai(e, t, n) {
  const r = {};
  n = n ? "-" + n : "";
  for (let i = 0; i < 4; i++) {
    const s = lD[i];
    r[s] = parseFloat(e[t + "-" + s + n]) || 0;
  }
  return (r.width = r.left + r.right), (r.height = r.top + r.bottom), r;
}
const cD = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function uD(e, t) {
  const n = e.touches,
    r = n && n.length ? n[0] : e,
    { offsetX: i, offsetY: s } = r;
  let o = !1,
    l,
    c;
  if (cD(i, s, e.target)) (l = i), (c = s);
  else {
    const u = t.getBoundingClientRect();
    (l = r.clientX - u.left), (c = r.clientY - u.top), (o = !0);
  }
  return { x: l, y: c, box: o };
}
function pi(e, t) {
  if ("native" in e) return e;
  const { canvas: n, currentDevicePixelRatio: r } = t,
    i = Bu(n),
    s = i.boxSizing === "border-box",
    o = Ai(i, "padding"),
    l = Ai(i, "border", "width"),
    { x: c, y: u, box: d } = uD(e, n),
    h = o.left + (d && l.left),
    f = o.top + (d && l.top);
  let { width: m, height: p } = t;
  return (
    s && ((m -= o.width + l.width), (p -= o.height + l.height)),
    {
      x: Math.round((((c - h) / m) * n.width) / r),
      y: Math.round((((u - f) / p) * n.height) / r),
    }
  );
}
function dD(e, t, n) {
  let r, i;
  if (t === void 0 || n === void 0) {
    const s = e && tm(e);
    if (!s) (t = e.clientWidth), (n = e.clientHeight);
    else {
      const o = s.getBoundingClientRect(),
        l = Bu(s),
        c = Ai(l, "border", "width"),
        u = Ai(l, "padding");
      (t = o.width - u.width - c.width),
        (n = o.height - u.height - c.height),
        (r = Gc(l.maxWidth, s, "clientWidth")),
        (i = Gc(l.maxHeight, s, "clientHeight"));
    }
  }
  return { width: t, height: n, maxWidth: r || Vc, maxHeight: i || Vc };
}
const yl = (e) => Math.round(e * 10) / 10;
function hD(e, t, n, r) {
  const i = Bu(e),
    s = Ai(i, "margin"),
    o = Gc(i.maxWidth, e, "clientWidth") || Vc,
    l = Gc(i.maxHeight, e, "clientHeight") || Vc,
    c = dD(e, t, n);
  let { width: u, height: d } = c;
  if (i.boxSizing === "content-box") {
    const f = Ai(i, "border", "width"),
      m = Ai(i, "padding");
    (u -= m.width + f.width), (d -= m.height + f.height);
  }
  return (
    (u = Math.max(0, u - s.width)),
    (d = Math.max(0, r ? u / r : d - s.height)),
    (u = yl(Math.min(u, o, c.maxWidth))),
    (d = yl(Math.min(d, l, c.maxHeight))),
    u && !d && (d = yl(u / 2)),
    (t !== void 0 || n !== void 0) &&
      r &&
      c.height &&
      d > c.height &&
      ((d = c.height), (u = yl(Math.floor(d * r)))),
    { width: u, height: d }
  );
}
function J0(e, t, n) {
  const r = t || 1,
    i = Math.floor(e.height * r),
    s = Math.floor(e.width * r);
  (e.height = Math.floor(e.height)), (e.width = Math.floor(e.width));
  const o = e.canvas;
  return (
    o.style &&
      (n || (!o.style.height && !o.style.width)) &&
      ((o.style.height = `${e.height}px`), (o.style.width = `${e.width}px`)),
    e.currentDevicePixelRatio !== r || o.height !== i || o.width !== s
      ? ((e.currentDevicePixelRatio = r),
        (o.height = i),
        (o.width = s),
        e.ctx.setTransform(r, 0, 0, r, 0, 0),
        !0)
      : !1
  );
}
const fD = (function () {
  let e = !1;
  try {
    const t = {
      get passive() {
        return (e = !0), !1;
      },
    };
    em() &&
      (window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t));
  } catch {}
  return e;
})();
function Z0(e, t) {
  const n = aD(e, t),
    r = n && n.match(/^(\d+)(\.\d+)?px$/);
  return r ? +r[1] : void 0;
}
function gi(e, t, n, r) {
  return { x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) };
}
function pD(e, t, n, r) {
  return {
    x: e.x + n * (t.x - e.x),
    y:
      r === "middle"
        ? n < 0.5
          ? e.y
          : t.y
        : r === "after"
        ? n < 1
          ? e.y
          : t.y
        : n > 0
        ? t.y
        : e.y,
  };
}
function gD(e, t, n, r) {
  const i = { x: e.cp2x, y: e.cp2y },
    s = { x: t.cp1x, y: t.cp1y },
    o = gi(e, i, n),
    l = gi(i, s, n),
    c = gi(s, t, n),
    u = gi(o, l, n),
    d = gi(l, c, n);
  return gi(u, d, n);
}
const mD = function (e, t) {
    return {
      x(n) {
        return e + e + t - n;
      },
      setWidth(n) {
        t = n;
      },
      textAlign(n) {
        return n === "center" ? n : n === "right" ? "left" : "right";
      },
      xPlus(n, r) {
        return n - r;
      },
      leftForLtr(n, r) {
        return n - r;
      },
    };
  },
  xD = function () {
    return {
      x(e) {
        return e;
      },
      setWidth(e) {},
      textAlign(e) {
        return e;
      },
      xPlus(e, t) {
        return e + t;
      },
      leftForLtr(e, t) {
        return e;
      },
    };
  };
function ys(e, t, n) {
  return e ? mD(t, n) : xD();
}
function aS(e, t) {
  let n, r;
  (t === "ltr" || t === "rtl") &&
    ((n = e.canvas.style),
    (r = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")]),
    n.setProperty("direction", t, "important"),
    (e.prevTextDirection = r));
}
function lS(e, t) {
  t !== void 0 &&
    (delete e.prevTextDirection,
    e.canvas.style.setProperty("direction", t[0], t[1]));
}
function cS(e) {
  return e === "angle"
    ? { between: Yw, compare: m4, normalize: gn }
    : { between: ji, compare: (t, n) => t - n, normalize: (t) => t };
}
function ev({ start: e, end: t, count: n, loop: r, style: i }) {
  return {
    start: e % n,
    end: t % n,
    loop: r && (t - e + 1) % n === 0,
    style: i,
  };
}
function vD(e, t, n) {
  const { property: r, start: i, end: s } = n,
    { between: o, normalize: l } = cS(r),
    c = t.length;
  let { start: u, end: d, loop: h } = e,
    f,
    m;
  if (h) {
    for (u += c, d += c, f = 0, m = c; f < m && o(l(t[u % c][r]), i, s); ++f)
      u--, d--;
    (u %= c), (d %= c);
  }
  return d < u && (d += c), { start: u, end: d, loop: h, style: e.style };
}
function yD(e, t, n) {
  if (!n) return [e];
  const { property: r, start: i, end: s } = n,
    o = t.length,
    { compare: l, between: c, normalize: u } = cS(r),
    { start: d, end: h, loop: f, style: m } = vD(e, t, n),
    p = [];
  let g = !1,
    y = null,
    x,
    v,
    b;
  const S = () => c(i, b, x) && l(i, b) !== 0,
    C = () => l(s, x) === 0 || c(s, b, x),
    k = () => g || S(),
    _ = () => !g || C();
  for (let E = d, I = d; E <= h; ++E)
    (v = t[E % o]),
      !v.skip &&
        ((x = u(v[r])),
        x !== b &&
          ((g = c(x, i, s)),
          y === null && k() && (y = l(x, i) === 0 ? E : I),
          y !== null &&
            _() &&
            (p.push(ev({ start: y, end: E, loop: f, count: o, style: m })),
            (y = null)),
          (I = E),
          (b = x)));
  return (
    y !== null && p.push(ev({ start: y, end: h, loop: f, count: o, style: m })),
    p
  );
}
function bD(e, t) {
  const n = [],
    r = e.segments;
  for (let i = 0; i < r.length; i++) {
    const s = yD(r[i], e.points, t);
    s.length && n.push(...s);
  }
  return n;
}
function jD(e, t, n, r) {
  let i = 0,
    s = t - 1;
  if (n && !r) for (; i < t && !e[i].skip; ) i++;
  for (; i < t && e[i].skip; ) i++;
  for (i %= t, n && (s += i); s > i && e[s % t].skip; ) s--;
  return (s %= t), { start: i, end: s };
}
function wD(e, t, n, r) {
  const i = e.length,
    s = [];
  let o = t,
    l = e[t],
    c;
  for (c = t + 1; c <= n; ++c) {
    const u = e[c % i];
    u.skip || u.stop
      ? l.skip ||
        ((r = !1),
        s.push({ start: t % i, end: (c - 1) % i, loop: r }),
        (t = o = u.stop ? c : null))
      : ((o = c), l.skip && (t = c)),
      (l = u);
  }
  return o !== null && s.push({ start: t % i, end: o % i, loop: r }), s;
}
function SD(e, t) {
  const n = e.points,
    r = e.options.spanGaps,
    i = n.length;
  if (!i) return [];
  const s = !!e._loop,
    { start: o, end: l } = jD(n, i, s, r);
  if (r === !0) return tv(e, [{ start: o, end: l, loop: s }], n, t);
  const c = l < o ? l + i : l,
    u = !!e._fullLoop && o === 0 && l === i - 1;
  return tv(e, wD(n, o, c, u), n, t);
}
function tv(e, t, n, r) {
  return !r || !r.setContext || !n ? t : CD(e, t, n, r);
}
function CD(e, t, n, r) {
  const i = e._chart.getContext(),
    s = nv(e.options),
    {
      _datasetIndex: o,
      options: { spanGaps: l },
    } = e,
    c = n.length,
    u = [];
  let d = s,
    h = t[0].start,
    f = h;
  function m(p, g, y, x) {
    const v = l ? -1 : 1;
    if (p !== g) {
      for (p += c; n[p % c].skip; ) p -= v;
      for (; n[g % c].skip; ) g += v;
      p % c !== g % c &&
        (u.push({ start: p % c, end: g % c, loop: y, style: x }),
        (d = x),
        (h = g % c));
    }
  }
  for (const p of t) {
    h = l ? h : p.start;
    let g = n[h % c],
      y;
    for (f = h + 1; f <= p.end; f++) {
      const x = n[f % c];
      (y = nv(
        r.setContext(
          oi(i, {
            type: "segment",
            p0: g,
            p1: x,
            p0DataIndex: (f - 1) % c,
            p1DataIndex: f % c,
            datasetIndex: o,
          })
        )
      )),
        _D(y, d) && m(h, f - 1, p.loop, d),
        (g = x),
        (d = y);
    }
    h < f - 1 && m(h, f - 1, p.loop, d);
  }
  return u;
}
function nv(e) {
  return {
    backgroundColor: e.backgroundColor,
    borderCapStyle: e.borderCapStyle,
    borderDash: e.borderDash,
    borderDashOffset: e.borderDashOffset,
    borderJoinStyle: e.borderJoinStyle,
    borderWidth: e.borderWidth,
    borderColor: e.borderColor,
  };
}
function _D(e, t) {
  if (!t) return !1;
  const n = [],
    r = function (i, s) {
      return Yg(s) ? (n.includes(s) || n.push(s), n.indexOf(s)) : s;
    };
  return JSON.stringify(e, r) !== JSON.stringify(t, r);
}
/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ class ED {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, n, r, i) {
    const s = n.listeners[i],
      o = n.duration;
    s.forEach((l) =>
      l({
        chart: t,
        initial: n.initial,
        numSteps: o,
        currentStep: Math.min(r - n.start, o),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = Qw.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let n = 0;
    this._charts.forEach((r, i) => {
      if (!r.running || !r.items.length) return;
      const s = r.items;
      let o = s.length - 1,
        l = !1,
        c;
      for (; o >= 0; --o)
        (c = s[o]),
          c._active
            ? (c._total > r.duration && (r.duration = c._total),
              c.tick(t),
              (l = !0))
            : ((s[o] = s[s.length - 1]), s.pop());
      l && (i.draw(), this._notify(i, r, t, "progress")),
        s.length ||
          ((r.running = !1),
          this._notify(i, r, t, "complete"),
          (r.initial = !1)),
        (n += s.length);
    }),
      (this._lastDate = t),
      n === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const n = this._charts;
    let r = n.get(t);
    return (
      r ||
        ((r = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        n.set(t, r)),
      r
    );
  }
  listen(t, n, r) {
    this._getAnims(t).listeners[n].push(r);
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const n = this._charts.get(t);
    n &&
      ((n.running = !0),
      (n.start = Date.now()),
      (n.duration = n.items.reduce((r, i) => Math.max(r, i._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const n = this._charts.get(t);
    return !(!n || !n.running || !n.items.length);
  }
  stop(t) {
    const n = this._charts.get(t);
    if (!n || !n.items.length) return;
    const r = n.items;
    let i = r.length - 1;
    for (; i >= 0; --i) r[i].cancel();
    (n.items = []), this._notify(t, n, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Kn = new ED();
const rv = "transparent",
  kD = {
    boolean(e, t, n) {
      return n > 0.5 ? t : e;
    },
    color(e, t, n) {
      const r = Y0(e || rv),
        i = r.valid && Y0(t || rv);
      return i && i.valid ? i.mix(r, n).hexString() : t;
    },
    number(e, t, n) {
      return e + (t - e) * n;
    },
  };
class PD {
  constructor(t, n, r, i) {
    const s = n[r];
    i = xl([t.to, i, s, t.from]);
    const o = xl([t.from, s, i]);
    (this._active = !0),
      (this._fn = t.fn || kD[t.type || typeof o]),
      (this._easing = Oo[t.easing] || Oo.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = n),
      (this._prop = r),
      (this._from = o),
      (this._to = i),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, n, r) {
    if (this._active) {
      this._notify(!1);
      const i = this._target[this._prop],
        s = r - this._start,
        o = this._duration - s;
      (this._start = r),
        (this._duration = Math.floor(Math.max(o, t.duration))),
        (this._total += s),
        (this._loop = !!t.loop),
        (this._to = xl([t.to, n, i, t.from])),
        (this._from = xl([t.from, i, n]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const n = t - this._start,
      r = this._duration,
      i = this._prop,
      s = this._from,
      o = this._loop,
      l = this._to;
    let c;
    if (((this._active = s !== l && (o || n < r)), !this._active)) {
      (this._target[i] = l), this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[i] = s;
      return;
    }
    (c = (n / r) % 2),
      (c = o && c > 1 ? 2 - c : c),
      (c = this._easing(Math.min(1, Math.max(0, c)))),
      (this._target[i] = this._fn(s, l, c));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((n, r) => {
      t.push({ res: n, rej: r });
    });
  }
  _notify(t) {
    const n = t ? "res" : "rej",
      r = this._promises || [];
    for (let i = 0; i < r.length; i++) r[i][n]();
  }
}
class uS {
  constructor(t, n) {
    (this._chart = t), (this._properties = new Map()), this.configure(n);
  }
  configure(t) {
    if (!oe(t)) return;
    const n = Object.keys(ke.animation),
      r = this._properties;
    Object.getOwnPropertyNames(t).forEach((i) => {
      const s = t[i];
      if (!oe(s)) return;
      const o = {};
      for (const l of n) o[l] = s[l];
      ((we(s.properties) && s.properties) || [i]).forEach((l) => {
        (l === i || !r.has(l)) && r.set(l, o);
      });
    });
  }
  _animateOptions(t, n) {
    const r = n.options,
      i = ND(t, r);
    if (!i) return [];
    const s = this._createAnimations(i, r);
    return (
      r.$shared &&
        ID(t.options.$animations, r).then(
          () => {
            t.options = r;
          },
          () => {}
        ),
      s
    );
  }
  _createAnimations(t, n) {
    const r = this._properties,
      i = [],
      s = t.$animations || (t.$animations = {}),
      o = Object.keys(n),
      l = Date.now();
    let c;
    for (c = o.length - 1; c >= 0; --c) {
      const u = o[c];
      if (u.charAt(0) === "$") continue;
      if (u === "options") {
        i.push(...this._animateOptions(t, n));
        continue;
      }
      const d = n[u];
      let h = s[u];
      const f = r.get(u);
      if (h)
        if (f && h.active()) {
          h.update(f, d, l);
          continue;
        } else h.cancel();
      if (!f || !f.duration) {
        t[u] = d;
        continue;
      }
      (s[u] = h = new PD(f, t, u, d)), i.push(h);
    }
    return i;
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n);
      return;
    }
    const r = this._createAnimations(t, n);
    if (r.length) return Kn.add(this._chart, r), !0;
  }
}
function ID(e, t) {
  const n = [],
    r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = e[r[i]];
    s && s.active() && n.push(s.wait());
  }
  return Promise.all(n);
}
function ND(e, t) {
  if (!t) return;
  let n = e.options;
  if (!n) {
    e.options = t;
    return;
  }
  return (
    n.$shared &&
      (e.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })),
    n
  );
}
function iv(e, t) {
  const n = (e && e.options) || {},
    r = n.reverse,
    i = n.min === void 0 ? t : 0,
    s = n.max === void 0 ? t : 0;
  return { start: r ? s : i, end: r ? i : s };
}
function AD(e, t, n) {
  if (n === !1) return !1;
  const r = iv(e, n),
    i = iv(t, n);
  return { top: i.end, right: r.end, bottom: i.start, left: r.start };
}
function TD(e) {
  let t, n, r, i;
  return (
    oe(e)
      ? ((t = e.top), (n = e.right), (r = e.bottom), (i = e.left))
      : (t = n = r = i = e),
    { top: t, right: n, bottom: r, left: i, disabled: e === !1 }
  );
}
function dS(e, t) {
  const n = [],
    r = e._getSortedDatasetMetas(t);
  let i, s;
  for (i = 0, s = r.length; i < s; ++i) n.push(r[i].index);
  return n;
}
function sv(e, t, n, r = {}) {
  const i = e.keys,
    s = r.mode === "single";
  let o, l, c, u;
  if (t !== null) {
    for (o = 0, l = i.length; o < l; ++o) {
      if (((c = +i[o]), c === n)) {
        if (r.all) continue;
        break;
      }
      (u = e.values[c]), We(u) && (s || t === 0 || zn(t) === zn(u)) && (t += u);
    }
    return t;
  }
}
function OD(e, t) {
  const { iScale: n, vScale: r } = t,
    i = n.axis === "x" ? "x" : "y",
    s = r.axis === "x" ? "x" : "y",
    o = Object.keys(e),
    l = new Array(o.length);
  let c, u, d;
  for (c = 0, u = o.length; c < u; ++c)
    (d = o[c]), (l[c] = { [i]: d, [s]: e[d] });
  return l;
}
function ov(e, t) {
  const n = e && e.options.stacked;
  return n || (n === void 0 && t.stack !== void 0);
}
function DD(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function MD(e) {
  const { min: t, max: n, minDefined: r, maxDefined: i } = e.getUserBounds();
  return {
    min: r ? t : Number.NEGATIVE_INFINITY,
    max: i ? n : Number.POSITIVE_INFINITY,
  };
}
function LD(e, t, n) {
  const r = e[t] || (e[t] = {});
  return r[n] || (r[n] = {});
}
function av(e, t, n, r) {
  for (const i of t.getMatchingVisibleMetas(r).reverse()) {
    const s = e[i.index];
    if ((n && s > 0) || (!n && s < 0)) return i.index;
  }
  return null;
}
function lv(e, t) {
  const { chart: n, _cachedMeta: r } = e,
    i = n._stacks || (n._stacks = {}),
    { iScale: s, vScale: o, index: l } = r,
    c = s.axis,
    u = o.axis,
    d = DD(s, o, r),
    h = t.length;
  let f;
  for (let m = 0; m < h; ++m) {
    const p = t[m],
      { [c]: g, [u]: y } = p,
      x = p._stacks || (p._stacks = {});
    (f = x[u] = LD(i, d, g)),
      (f[l] = y),
      (f._top = av(f, o, !0, r.type)),
      (f._bottom = av(f, o, !1, r.type));
    const v = f._visualValues || (f._visualValues = {});
    v[l] = y;
  }
}
function Zd(e, t) {
  const n = e.scales;
  return Object.keys(n)
    .filter((r) => n[r].axis === t)
    .shift();
}
function RD(e, t) {
  return oi(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset",
  });
}
function FD(e, t, n) {
  return oi(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: "default",
    type: "data",
  });
}
function ro(e, t) {
  const n = e.controller.index,
    r = e.vScale && e.vScale.axis;
  if (r) {
    t = t || e._parsed;
    for (const i of t) {
      const s = i._stacks;
      if (!s || s[r] === void 0 || s[r][n] === void 0) return;
      delete s[r][n],
        s[r]._visualValues !== void 0 &&
          s[r]._visualValues[n] !== void 0 &&
          delete s[r]._visualValues[n];
    }
  }
}
const eh = (e) => e === "reset" || e === "none",
  cv = (e, t) => (t ? e : Object.assign({}, e)),
  zD = (e, t, n) =>
    e && !t.hidden && t._stacked && { keys: dS(n, !0), values: null };
class bs {
  constructor(t, n) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = n),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = ov(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(t) {
    this.index !== t && ro(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      n = this._cachedMeta,
      r = this.getDataset(),
      i = (h, f, m, p) => (h === "x" ? f : h === "r" ? p : m),
      s = (n.xAxisID = J(r.xAxisID, Zd(t, "x"))),
      o = (n.yAxisID = J(r.yAxisID, Zd(t, "y"))),
      l = (n.rAxisID = J(r.rAxisID, Zd(t, "r"))),
      c = n.indexAxis,
      u = (n.iAxisID = i(c, s, o, l)),
      d = (n.vAxisID = i(c, o, s, l));
    (n.xScale = this.getScaleForId(s)),
      (n.yScale = this.getScaleForId(o)),
      (n.rScale = this.getScaleForId(l)),
      (n.iScale = this.getScaleForId(u)),
      (n.vScale = this.getScaleForId(d));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const n = this._cachedMeta;
    return t === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && V0(this._data, this), t._stacked && ro(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      n = t.data || (t.data = []),
      r = this._data;
    if (oe(n)) {
      const i = this._cachedMeta;
      this._data = OD(n, i);
    } else if (r !== n) {
      if (r) {
        V0(r, this);
        const i = this._cachedMeta;
        ro(i), (i._parsed = []);
      }
      n && Object.isExtensible(n) && b4(n, this),
        (this._syncList = []),
        (this._data = n);
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta,
      r = this.getDataset();
    let i = !1;
    this._dataCheck();
    const s = n._stacked;
    (n._stacked = ov(n.vScale, n)),
      n.stack !== r.stack && ((i = !0), ro(n), (n.stack = r.stack)),
      this._resyncElements(t),
      (i || s !== n._stacked) && lv(this, n._parsed);
  }
  configure() {
    const t = this.chart.config,
      n = t.datasetScopeKeys(this._type),
      r = t.getOptionScopes(this.getDataset(), n, !0);
    (this.options = t.createResolver(r, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, n) {
    const { _cachedMeta: r, _data: i } = this,
      { iScale: s, _stacked: o } = r,
      l = s.axis;
    let c = t === 0 && n === i.length ? !0 : r._sorted,
      u = t > 0 && r._parsed[t - 1],
      d,
      h,
      f;
    if (this._parsing === !1) (r._parsed = i), (r._sorted = !0), (f = i);
    else {
      we(i[t])
        ? (f = this.parseArrayData(r, i, t, n))
        : oe(i[t])
        ? (f = this.parseObjectData(r, i, t, n))
        : (f = this.parsePrimitiveData(r, i, t, n));
      const m = () => h[l] === null || (u && h[l] < u[l]);
      for (d = 0; d < n; ++d)
        (r._parsed[d + t] = h = f[d]), c && (m() && (c = !1), (u = h));
      r._sorted = c;
    }
    o && lv(this, f);
  }
  parsePrimitiveData(t, n, r, i) {
    const { iScale: s, vScale: o } = t,
      l = s.axis,
      c = o.axis,
      u = s.getLabels(),
      d = s === o,
      h = new Array(i);
    let f, m, p;
    for (f = 0, m = i; f < m; ++f)
      (p = f + r),
        (h[f] = { [l]: d || s.parse(u[p], p), [c]: o.parse(n[p], p) });
    return h;
  }
  parseArrayData(t, n, r, i) {
    const { xScale: s, yScale: o } = t,
      l = new Array(i);
    let c, u, d, h;
    for (c = 0, u = i; c < u; ++c)
      (d = c + r),
        (h = n[d]),
        (l[c] = { x: s.parse(h[0], d), y: o.parse(h[1], d) });
    return l;
  }
  parseObjectData(t, n, r, i) {
    const { xScale: s, yScale: o } = t,
      { xAxisKey: l = "x", yAxisKey: c = "y" } = this._parsing,
      u = new Array(i);
    let d, h, f, m;
    for (d = 0, h = i; d < h; ++d)
      (f = d + r),
        (m = n[f]),
        (u[d] = { x: s.parse(Ds(m, l), f), y: o.parse(Ds(m, c), f) });
    return u;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, n, r) {
    const i = this.chart,
      s = this._cachedMeta,
      o = n[t.axis],
      l = { keys: dS(i, !0), values: n._stacks[t.axis]._visualValues };
    return sv(l, o, s.index, { mode: r });
  }
  updateRangeFromParsed(t, n, r, i) {
    const s = r[n.axis];
    let o = s === null ? NaN : s;
    const l = i && r._stacks[n.axis];
    i && l && ((i.values = l), (o = sv(i, s, this._cachedMeta.index))),
      (t.min = Math.min(t.min, o)),
      (t.max = Math.max(t.max, o));
  }
  getMinMax(t, n) {
    const r = this._cachedMeta,
      i = r._parsed,
      s = r._sorted && t === r.iScale,
      o = i.length,
      l = this._getOtherScale(t),
      c = zD(n, r, this.chart),
      u = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: d, max: h } = MD(l);
    let f, m;
    function p() {
      m = i[f];
      const g = m[l.axis];
      return !We(m[t.axis]) || d > g || h < g;
    }
    for (
      f = 0;
      f < o && !(!p() && (this.updateRangeFromParsed(u, t, m, c), s));
      ++f
    );
    if (s) {
      for (f = o - 1; f >= 0; --f)
        if (!p()) {
          this.updateRangeFromParsed(u, t, m, c);
          break;
        }
    }
    return u;
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed,
      r = [];
    let i, s, o;
    for (i = 0, s = n.length; i < s; ++i)
      (o = n[i][t.axis]), We(o) && r.push(o);
    return r;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      r = n.iScale,
      i = n.vScale,
      s = this.getParsed(t);
    return {
      label: r ? "" + r.getLabelForValue(s[r.axis]) : "",
      value: i ? "" + i.getLabelForValue(s[i.axis]) : "",
    };
  }
  _update(t) {
    const n = this._cachedMeta;
    this.update(t || "default"),
      (n._clip = TD(
        J(this.options.clip, AD(n.xScale, n.yScale, this.getMaxOverflow()))
      ));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      n = this.chart,
      r = this._cachedMeta,
      i = r.data || [],
      s = n.chartArea,
      o = [],
      l = this._drawStart || 0,
      c = this._drawCount || i.length - l,
      u = this.options.drawActiveElementsOnTop;
    let d;
    for (r.dataset && r.dataset.draw(t, s, l, c), d = l; d < l + c; ++d) {
      const h = i[d];
      h.hidden || (h.active && u ? o.push(h) : h.draw(t, s));
    }
    for (d = 0; d < o.length; ++d) o[d].draw(t, s);
  }
  getStyle(t, n) {
    const r = n ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(r)
      : this.resolveDataElementOptions(t || 0, r);
  }
  getContext(t, n, r) {
    const i = this.getDataset();
    let s;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const o = this._cachedMeta.data[t];
      (s = o.$context || (o.$context = FD(this.getContext(), t, o))),
        (s.parsed = this.getParsed(t)),
        (s.raw = i.data[t]),
        (s.index = s.dataIndex = t);
    } else
      (s =
        this.$context ||
        (this.$context = RD(this.chart.getContext(), this.index))),
        (s.dataset = i),
        (s.index = s.datasetIndex = this.index);
    return (s.active = !!n), (s.mode = r), s;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t);
  }
  _resolveElementOptions(t, n = "default", r) {
    const i = n === "active",
      s = this._cachedDataOpts,
      o = t + "-" + n,
      l = s[o],
      c = this.enableOptionSharing && da(r);
    if (l) return cv(l, c);
    const u = this.chart.config,
      d = u.datasetElementScopeKeys(this._type, t),
      h = i ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      f = u.getOptionScopes(this.getDataset(), d),
      m = Object.keys(ke.elements[t]),
      p = () => this.getContext(r, i, n),
      g = u.resolveNamedOptions(f, m, p, h);
    return g.$shared && ((g.$shared = c), (s[o] = Object.freeze(cv(g, c)))), g;
  }
  _resolveAnimations(t, n, r) {
    const i = this.chart,
      s = this._cachedDataOpts,
      o = `animation-${n}`,
      l = s[o];
    if (l) return l;
    let c;
    if (i.options.animation !== !1) {
      const d = this.chart.config,
        h = d.datasetAnimationScopeKeys(this._type, n),
        f = d.getOptionScopes(this.getDataset(), h);
      c = d.createResolver(f, this.getContext(t, r, n));
    }
    const u = new uS(i, c && c.animations);
    return c && c._cacheable && (s[o] = Object.freeze(u)), u;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, n) {
    return !n || eh(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, n) {
    const r = this.resolveDataElementOptions(t, n),
      i = this._sharedOptions,
      s = this.getSharedOptions(r),
      o = this.includeOptions(n, s) || s !== i;
    return (
      this.updateSharedOptions(s, n, r), { sharedOptions: s, includeOptions: o }
    );
  }
  updateElement(t, n, r, i) {
    eh(i) ? Object.assign(t, r) : this._resolveAnimations(n, i).update(t, r);
  }
  updateSharedOptions(t, n, r) {
    t && !eh(n) && this._resolveAnimations(void 0, n).update(t, r);
  }
  _setStyle(t, n, r, i) {
    t.active = i;
    const s = this.getStyle(n, i);
    this._resolveAnimations(n, r, i).update(t, {
      options: (!i && this.getSharedOptions(s)) || s,
    });
  }
  removeHoverStyle(t, n, r) {
    this._setStyle(t, r, "active", !1);
  }
  setHoverStyle(t, n, r) {
    this._setStyle(t, r, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const n = this._data,
      r = this._cachedMeta.data;
    for (const [l, c, u] of this._syncList) this[l](c, u);
    this._syncList = [];
    const i = r.length,
      s = n.length,
      o = Math.min(s, i);
    o && this.parse(0, o),
      s > i
        ? this._insertElements(i, s - i, t)
        : s < i && this._removeElements(s, i - s);
  }
  _insertElements(t, n, r = !0) {
    const i = this._cachedMeta,
      s = i.data,
      o = t + n;
    let l;
    const c = (u) => {
      for (u.length += n, l = u.length - 1; l >= o; l--) u[l] = u[l - n];
    };
    for (c(s), l = t; l < o; ++l) s[l] = new this.dataElementType();
    this._parsing && c(i._parsed),
      this.parse(t, n),
      r && this.updateElements(s, t, n, "reset");
  }
  updateElements(t, n, r, i) {}
  _removeElements(t, n) {
    const r = this._cachedMeta;
    if (this._parsing) {
      const i = r._parsed.splice(t, n);
      r._stacked && ro(r, i);
    }
    r.data.splice(t, n);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [n, r, i] = t;
      this[n](r, i);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, n) {
    n && this._sync(["_removeElements", t, n]);
    const r = arguments.length - 2;
    r && this._sync(["_insertElements", t, r]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
W(bs, "defaults", {}),
  W(bs, "datasetElementType", null),
  W(bs, "dataElementType", null);
function $D(e, t) {
  if (!e._cache.$bar) {
    const n = e.getMatchingVisibleMetas(t);
    let r = [];
    for (let i = 0, s = n.length; i < s; i++)
      r = r.concat(n[i].controller.getAllParsedValues(e));
    e._cache.$bar = Kw(r.sort((i, s) => i - s));
  }
  return e._cache.$bar;
}
function BD(e) {
  const t = e.iScale,
    n = $D(t, e.type);
  let r = t._length,
    i,
    s,
    o,
    l;
  const c = () => {
    o === 32767 ||
      o === -32768 ||
      (da(l) && (r = Math.min(r, Math.abs(o - l) || r)), (l = o));
  };
  for (i = 0, s = n.length; i < s; ++i) (o = t.getPixelForValue(n[i])), c();
  for (l = void 0, i = 0, s = t.ticks.length; i < s; ++i)
    (o = t.getPixelForTick(i)), c();
  return r;
}
function WD(e, t, n, r) {
  const i = n.barThickness;
  let s, o;
  return (
    de(i)
      ? ((s = t.min * n.categoryPercentage), (o = n.barPercentage))
      : ((s = i * r), (o = 1)),
    { chunk: s / r, ratio: o, start: t.pixels[e] - s / 2 }
  );
}
function HD(e, t, n, r) {
  const i = t.pixels,
    s = i[e];
  let o = e > 0 ? i[e - 1] : null,
    l = e < i.length - 1 ? i[e + 1] : null;
  const c = n.categoryPercentage;
  o === null && (o = s - (l === null ? t.end - t.start : l - s)),
    l === null && (l = s + s - o);
  const u = s - ((s - Math.min(o, l)) / 2) * c;
  return {
    chunk: ((Math.abs(l - o) / 2) * c) / r,
    ratio: n.barPercentage,
    start: u,
  };
}
function VD(e, t, n, r) {
  const i = n.parse(e[0], r),
    s = n.parse(e[1], r),
    o = Math.min(i, s),
    l = Math.max(i, s);
  let c = o,
    u = l;
  Math.abs(o) > Math.abs(l) && ((c = l), (u = o)),
    (t[n.axis] = u),
    (t._custom = { barStart: c, barEnd: u, start: i, end: s, min: o, max: l });
}
function hS(e, t, n, r) {
  return we(e) ? VD(e, t, n, r) : (t[n.axis] = n.parse(e, r)), t;
}
function uv(e, t, n, r) {
  const i = e.iScale,
    s = e.vScale,
    o = i.getLabels(),
    l = i === s,
    c = [];
  let u, d, h, f;
  for (u = n, d = n + r; u < d; ++u)
    (f = t[u]),
      (h = {}),
      (h[i.axis] = l || i.parse(o[u], u)),
      c.push(hS(f, h, s, u));
  return c;
}
function th(e) {
  return e && e.barStart !== void 0 && e.barEnd !== void 0;
}
function UD(e, t, n) {
  return e !== 0 ? zn(e) : (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1);
}
function GD(e) {
  let t, n, r, i, s;
  return (
    e.horizontal
      ? ((t = e.base > e.x), (n = "left"), (r = "right"))
      : ((t = e.base < e.y), (n = "bottom"), (r = "top")),
    t ? ((i = "end"), (s = "start")) : ((i = "start"), (s = "end")),
    { start: n, end: r, reverse: t, top: i, bottom: s }
  );
}
function YD(e, t, n, r) {
  let i = t.borderSkipped;
  const s = {};
  if (!i) {
    e.borderSkipped = s;
    return;
  }
  if (i === !0) {
    e.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
    return;
  }
  const { start: o, end: l, reverse: c, top: u, bottom: d } = GD(e);
  i === "middle" &&
    n &&
    ((e.enableBorderRadius = !0),
    (n._top || 0) === r
      ? (i = u)
      : (n._bottom || 0) === r
      ? (i = d)
      : ((s[dv(d, o, l, c)] = !0), (i = u))),
    (s[dv(i, o, l, c)] = !0),
    (e.borderSkipped = s);
}
function dv(e, t, n, r) {
  return r ? ((e = qD(e, t, n)), (e = hv(e, n, t))) : (e = hv(e, t, n)), e;
}
function qD(e, t, n) {
  return e === t ? n : e === n ? t : e;
}
function hv(e, t, n) {
  return e === "start" ? t : e === "end" ? n : e;
}
function KD(e, { inflateAmount: t }, n) {
  e.inflateAmount = t === "auto" ? (n === 1 ? 0.33 : 0) : t;
}
class Kl extends bs {
  parsePrimitiveData(t, n, r, i) {
    return uv(t, n, r, i);
  }
  parseArrayData(t, n, r, i) {
    return uv(t, n, r, i);
  }
  parseObjectData(t, n, r, i) {
    const { iScale: s, vScale: o } = t,
      { xAxisKey: l = "x", yAxisKey: c = "y" } = this._parsing,
      u = s.axis === "x" ? l : c,
      d = o.axis === "x" ? l : c,
      h = [];
    let f, m, p, g;
    for (f = r, m = r + i; f < m; ++f)
      (g = n[f]),
        (p = {}),
        (p[s.axis] = s.parse(Ds(g, u), f)),
        h.push(hS(Ds(g, d), p, o, f));
    return h;
  }
  updateRangeFromParsed(t, n, r, i) {
    super.updateRangeFromParsed(t, n, r, i);
    const s = r._custom;
    s &&
      n === this._cachedMeta.vScale &&
      ((t.min = Math.min(t.min, s.min)), (t.max = Math.max(t.max, s.max)));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      { iScale: r, vScale: i } = n,
      s = this.getParsed(t),
      o = s._custom,
      l = th(o)
        ? "[" + o.start + ", " + o.end + "]"
        : "" + i.getLabelForValue(s[i.axis]);
    return { label: "" + r.getLabelForValue(s[r.axis]), value: l };
  }
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const n = this._cachedMeta;
    this.updateElements(n.data, 0, n.data.length, t);
  }
  updateElements(t, n, r, i) {
    const s = i === "reset",
      {
        index: o,
        _cachedMeta: { vScale: l },
      } = this,
      c = l.getBasePixel(),
      u = l.isHorizontal(),
      d = this._getRuler(),
      { sharedOptions: h, includeOptions: f } = this._getSharedOptions(n, i);
    for (let m = n; m < n + r; m++) {
      const p = this.getParsed(m),
        g =
          s || de(p[l.axis])
            ? { base: c, head: c }
            : this._calculateBarValuePixels(m),
        y = this._calculateBarIndexPixels(m, d),
        x = (p._stacks || {})[l.axis],
        v = {
          horizontal: u,
          base: g.base,
          enableBorderRadius:
            !x || th(p._custom) || o === x._top || o === x._bottom,
          x: u ? g.head : y.center,
          y: u ? y.center : g.head,
          height: u ? y.size : Math.abs(g.size),
          width: u ? Math.abs(g.size) : y.size,
        };
      f &&
        (v.options =
          h || this.resolveDataElementOptions(m, t[m].active ? "active" : i));
      const b = v.options || t[m].options;
      YD(v, b, x, o), KD(v, b, d.ratio), this.updateElement(t[m], m, v, i);
    }
  }
  _getStacks(t, n) {
    const { iScale: r } = this._cachedMeta,
      i = r
        .getMatchingVisibleMetas(this._type)
        .filter((c) => c.controller.options.grouped),
      s = r.options.stacked,
      o = [],
      l = (c) => {
        const u = c.controller.getParsed(n),
          d = u && u[c.vScale.axis];
        if (de(d) || isNaN(d)) return !0;
      };
    for (const c of i)
      if (
        !(n !== void 0 && l(c)) &&
        ((s === !1 ||
          o.indexOf(c.stack) === -1 ||
          (s === void 0 && c.stack === void 0)) &&
          o.push(c.stack),
        c.index === t)
      )
        break;
    return o.length || o.push(void 0), o;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, n, r) {
    const i = this._getStacks(t, r),
      s = n !== void 0 ? i.indexOf(n) : -1;
    return s === -1 ? i.length - 1 : s;
  }
  _getRuler() {
    const t = this.options,
      n = this._cachedMeta,
      r = n.iScale,
      i = [];
    let s, o;
    for (s = 0, o = n.data.length; s < o; ++s)
      i.push(r.getPixelForValue(this.getParsed(s)[r.axis], s));
    const l = t.barThickness;
    return {
      min: l || BD(n),
      pixels: i,
      start: r._startPixel,
      end: r._endPixel,
      stackCount: this._getStackCount(),
      scale: r,
      grouped: t.grouped,
      ratio: l ? 1 : t.categoryPercentage * t.barPercentage,
    };
  }
  _calculateBarValuePixels(t) {
    const {
        _cachedMeta: { vScale: n, _stacked: r, index: i },
        options: { base: s, minBarLength: o },
      } = this,
      l = s || 0,
      c = this.getParsed(t),
      u = c._custom,
      d = th(u);
    let h = c[n.axis],
      f = 0,
      m = r ? this.applyStack(n, c, r) : h,
      p,
      g;
    m !== h && ((f = m - h), (m = h)),
      d &&
        ((h = u.barStart),
        (m = u.barEnd - u.barStart),
        h !== 0 && zn(h) !== zn(u.barEnd) && (f = 0),
        (f += h));
    const y = !de(s) && !d ? s : f;
    let x = n.getPixelForValue(y);
    if (
      (this.chart.getDataVisibility(t)
        ? (p = n.getPixelForValue(f + m))
        : (p = x),
      (g = p - x),
      Math.abs(g) < o)
    ) {
      (g = UD(g, n, l) * o), h === l && (x -= g / 2);
      const v = n.getPixelForDecimal(0),
        b = n.getPixelForDecimal(1),
        S = Math.min(v, b),
        C = Math.max(v, b);
      (x = Math.max(Math.min(x, C), S)),
        (p = x + g),
        r &&
          !d &&
          (c._stacks[n.axis]._visualValues[i] =
            n.getValueForPixel(p) - n.getValueForPixel(x));
    }
    if (x === n.getPixelForValue(l)) {
      const v = (zn(g) * n.getLineWidthForValue(l)) / 2;
      (x += v), (g -= v);
    }
    return { size: g, base: x, head: p, center: p + g / 2 };
  }
  _calculateBarIndexPixels(t, n) {
    const r = n.scale,
      i = this.options,
      s = i.skipNull,
      o = J(i.maxBarThickness, 1 / 0);
    let l, c;
    if (n.grouped) {
      const u = s ? this._getStackCount(t) : n.stackCount,
        d = i.barThickness === "flex" ? HD(t, n, i, u) : WD(t, n, i, u),
        h = this._getStackIndex(
          this.index,
          this._cachedMeta.stack,
          s ? t : void 0
        );
      (l = d.start + d.chunk * h + d.chunk / 2),
        (c = Math.min(o, d.chunk * d.ratio));
    } else
      (l = r.getPixelForValue(this.getParsed(t)[r.axis], t)),
        (c = Math.min(o, n.min * n.ratio));
    return { base: l - c / 2, head: l + c / 2, center: l, size: c };
  }
  draw() {
    const t = this._cachedMeta,
      n = t.vScale,
      r = t.data,
      i = r.length;
    let s = 0;
    for (; s < i; ++s)
      this.getParsed(s)[n.axis] !== null &&
        !r[s].hidden &&
        r[s].draw(this._ctx);
  }
}
W(Kl, "id", "bar"),
  W(Kl, "defaults", {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "base", "width", "height"],
      },
    },
  }),
  W(Kl, "overrides", {
    scales: {
      _index_: { type: "category", offset: !0, grid: { offset: !0 } },
      _value_: { type: "linear", beginAtZero: !0 },
    },
  });
class Ql extends bs {
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(t) {
    const n = this._cachedMeta,
      { dataset: r, data: i = [], _dataset: s } = n,
      o = this.chart._animationsDisabled;
    let { start: l, count: c } = S4(n, i, o);
    (this._drawStart = l),
      (this._drawCount = c),
      C4(n) && ((l = 0), (c = i.length)),
      (r._chart = this.chart),
      (r._datasetIndex = this.index),
      (r._decimated = !!s._decimated),
      (r.points = i);
    const u = this.resolveDatasetElementOptions(t);
    this.options.showLine || (u.borderWidth = 0),
      (u.segment = this.options.segment),
      this.updateElement(r, void 0, { animated: !o, options: u }, t),
      this.updateElements(i, l, c, t);
  }
  updateElements(t, n, r, i) {
    const s = i === "reset",
      { iScale: o, vScale: l, _stacked: c, _dataset: u } = this._cachedMeta,
      { sharedOptions: d, includeOptions: h } = this._getSharedOptions(n, i),
      f = o.axis,
      m = l.axis,
      { spanGaps: p, segment: g } = this.options,
      y = ha(p) ? p : Number.POSITIVE_INFINITY,
      x = this.chart._animationsDisabled || s || i === "none",
      v = n + r,
      b = t.length;
    let S = n > 0 && this.getParsed(n - 1);
    for (let C = 0; C < b; ++C) {
      const k = t[C],
        _ = x ? k : {};
      if (C < n || C >= v) {
        _.skip = !0;
        continue;
      }
      const E = this.getParsed(C),
        I = de(E[m]),
        N = (_[f] = o.getPixelForValue(E[f], C)),
        R = (_[m] =
          s || I
            ? l.getBasePixel()
            : l.getPixelForValue(c ? this.applyStack(l, E, c) : E[m], C));
      (_.skip = isNaN(N) || isNaN(R) || I),
        (_.stop = C > 0 && Math.abs(E[f] - S[f]) > y),
        g && ((_.parsed = E), (_.raw = u.data[C])),
        h &&
          (_.options =
            d || this.resolveDataElementOptions(C, k.active ? "active" : i)),
        x || this.updateElement(k, C, _, i),
        (S = E);
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      n = t.dataset,
      r = (n.options && n.options.borderWidth) || 0,
      i = t.data || [];
    if (!i.length) return r;
    const s = i[0].size(this.resolveDataElementOptions(0)),
      o = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
    return Math.max(r, s, o) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
      super.draw();
  }
}
W(Ql, "id", "line"),
  W(Ql, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  }),
  W(Ql, "overrides", {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  });
function ui() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class nm {
  constructor(t) {
    W(this, "options");
    this.options = t || {};
  }
  static override(t) {
    Object.assign(nm.prototype, t);
  }
  init() {}
  formats() {
    return ui();
  }
  parse() {
    return ui();
  }
  format() {
    return ui();
  }
  add() {
    return ui();
  }
  diff() {
    return ui();
  }
  startOf() {
    return ui();
  }
  endOf() {
    return ui();
  }
}
var QD = { _date: nm };
function XD(e, t, n, r) {
  const { controller: i, data: s, _sorted: o } = e,
    l = i._cachedMeta.iScale;
  if (l && t === l.axis && t !== "r" && o && s.length) {
    const c = l._reversePixels ? v4 : wi;
    if (r) {
      if (i._sharedOptions) {
        const u = s[0],
          d = typeof u.getRange == "function" && u.getRange(t);
        if (d) {
          const h = c(s, t, n - d),
            f = c(s, t, n + d);
          return { lo: h.lo, hi: f.hi };
        }
      }
    } else return c(s, t, n);
  }
  return { lo: 0, hi: s.length - 1 };
}
function Aa(e, t, n, r, i) {
  const s = e.getSortedVisibleDatasetMetas(),
    o = n[t];
  for (let l = 0, c = s.length; l < c; ++l) {
    const { index: u, data: d } = s[l],
      { lo: h, hi: f } = XD(s[l], t, o, i);
    for (let m = h; m <= f; ++m) {
      const p = d[m];
      p.skip || r(p, u, m);
    }
  }
}
function JD(e) {
  const t = e.indexOf("x") !== -1,
    n = e.indexOf("y") !== -1;
  return function (r, i) {
    const s = t ? Math.abs(r.x - i.x) : 0,
      o = n ? Math.abs(r.y - i.y) : 0;
    return Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2));
  };
}
function nh(e, t, n, r, i) {
  const s = [];
  return (
    (!i && !e.isPointInArea(t)) ||
      Aa(
        e,
        n,
        t,
        function (l, c, u) {
          (!i && !ir(l, e.chartArea, 0)) ||
            (l.inRange(t.x, t.y, r) &&
              s.push({ element: l, datasetIndex: c, index: u }));
        },
        !0
      ),
    s
  );
}
function ZD(e, t, n, r) {
  let i = [];
  function s(o, l, c) {
    const { startAngle: u, endAngle: d } = o.getProps(
        ["startAngle", "endAngle"],
        r
      ),
      { angle: h } = g4(o, { x: t.x, y: t.y });
    Yw(h, u, d) && i.push({ element: o, datasetIndex: l, index: c });
  }
  return Aa(e, n, t, s), i;
}
function e5(e, t, n, r, i, s) {
  let o = [];
  const l = JD(n);
  let c = Number.POSITIVE_INFINITY;
  function u(d, h, f) {
    const m = d.inRange(t.x, t.y, i);
    if (r && !m) return;
    const p = d.getCenterPoint(i);
    if (!(!!s || e.isPointInArea(p)) && !m) return;
    const y = l(t, p);
    y < c
      ? ((o = [{ element: d, datasetIndex: h, index: f }]), (c = y))
      : y === c && o.push({ element: d, datasetIndex: h, index: f });
  }
  return Aa(e, n, t, u), o;
}
function rh(e, t, n, r, i, s) {
  return !s && !e.isPointInArea(t)
    ? []
    : n === "r" && !r
    ? ZD(e, t, n, i)
    : e5(e, t, n, r, i, s);
}
function fv(e, t, n, r, i) {
  const s = [],
    o = n === "x" ? "inXRange" : "inYRange";
  let l = !1;
  return (
    Aa(e, n, t, (c, u, d) => {
      c[o](t[n], i) &&
        (s.push({ element: c, datasetIndex: u, index: d }),
        (l = l || c.inRange(t.x, t.y, i)));
    }),
    r && !l ? [] : s
  );
}
var t5 = {
  evaluateInteractionItems: Aa,
  modes: {
    index(e, t, n, r) {
      const i = pi(t, e),
        s = n.axis || "x",
        o = n.includeInvisible || !1,
        l = n.intersect ? nh(e, i, s, r, o) : rh(e, i, s, !1, r, o),
        c = [];
      return l.length
        ? (e.getSortedVisibleDatasetMetas().forEach((u) => {
            const d = l[0].index,
              h = u.data[d];
            h &&
              !h.skip &&
              c.push({ element: h, datasetIndex: u.index, index: d });
          }),
          c)
        : [];
    },
    dataset(e, t, n, r) {
      const i = pi(t, e),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      let l = n.intersect ? nh(e, i, s, r, o) : rh(e, i, s, !1, r, o);
      if (l.length > 0) {
        const c = l[0].datasetIndex,
          u = e.getDatasetMeta(c).data;
        l = [];
        for (let d = 0; d < u.length; ++d)
          l.push({ element: u[d], datasetIndex: c, index: d });
      }
      return l;
    },
    point(e, t, n, r) {
      const i = pi(t, e),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      return nh(e, i, s, r, o);
    },
    nearest(e, t, n, r) {
      const i = pi(t, e),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      return rh(e, i, s, n.intersect, r, o);
    },
    x(e, t, n, r) {
      const i = pi(t, e);
      return fv(e, i, "x", n.intersect, r);
    },
    y(e, t, n, r) {
      const i = pi(t, e);
      return fv(e, i, "y", n.intersect, r);
    },
  },
};
const fS = ["left", "top", "right", "bottom"];
function io(e, t) {
  return e.filter((n) => n.pos === t);
}
function pv(e, t) {
  return e.filter((n) => fS.indexOf(n.pos) === -1 && n.box.axis === t);
}
function so(e, t) {
  return e.sort((n, r) => {
    const i = t ? r : n,
      s = t ? n : r;
    return i.weight === s.weight ? i.index - s.index : i.weight - s.weight;
  });
}
function n5(e) {
  const t = [];
  let n, r, i, s, o, l;
  for (n = 0, r = (e || []).length; n < r; ++n)
    (i = e[n]),
      ({
        position: s,
        options: { stack: o, stackWeight: l = 1 },
      } = i),
      t.push({
        index: n,
        box: i,
        pos: s,
        horizontal: i.isHorizontal(),
        weight: i.weight,
        stack: o && s + o,
        stackWeight: l,
      });
  return t;
}
function r5(e) {
  const t = {};
  for (const n of e) {
    const { stack: r, pos: i, stackWeight: s } = n;
    if (!r || !fS.includes(i)) continue;
    const o = t[r] || (t[r] = { count: 0, placed: 0, weight: 0, size: 0 });
    o.count++, (o.weight += s);
  }
  return t;
}
function i5(e, t) {
  const n = r5(e),
    { vBoxMaxWidth: r, hBoxMaxHeight: i } = t;
  let s, o, l;
  for (s = 0, o = e.length; s < o; ++s) {
    l = e[s];
    const { fullSize: c } = l.box,
      u = n[l.stack],
      d = u && l.stackWeight / u.weight;
    l.horizontal
      ? ((l.width = d ? d * r : c && t.availableWidth), (l.height = i))
      : ((l.width = r), (l.height = d ? d * i : c && t.availableHeight));
  }
  return n;
}
function s5(e) {
  const t = n5(e),
    n = so(
      t.filter((u) => u.box.fullSize),
      !0
    ),
    r = so(io(t, "left"), !0),
    i = so(io(t, "right")),
    s = so(io(t, "top"), !0),
    o = so(io(t, "bottom")),
    l = pv(t, "x"),
    c = pv(t, "y");
  return {
    fullSize: n,
    leftAndTop: r.concat(s),
    rightAndBottom: i.concat(c).concat(o).concat(l),
    chartArea: io(t, "chartArea"),
    vertical: r.concat(i).concat(c),
    horizontal: s.concat(o).concat(l),
  };
}
function gv(e, t, n, r) {
  return Math.max(e[n], t[n]) + Math.max(e[r], t[r]);
}
function pS(e, t) {
  (e.top = Math.max(e.top, t.top)),
    (e.left = Math.max(e.left, t.left)),
    (e.bottom = Math.max(e.bottom, t.bottom)),
    (e.right = Math.max(e.right, t.right));
}
function o5(e, t, n, r) {
  const { pos: i, box: s } = n,
    o = e.maxPadding;
  if (!oe(i)) {
    n.size && (e[i] -= n.size);
    const h = r[n.stack] || { size: 0, count: 1 };
    (h.size = Math.max(h.size, n.horizontal ? s.height : s.width)),
      (n.size = h.size / h.count),
      (e[i] += n.size);
  }
  s.getPadding && pS(o, s.getPadding());
  const l = Math.max(0, t.outerWidth - gv(o, e, "left", "right")),
    c = Math.max(0, t.outerHeight - gv(o, e, "top", "bottom")),
    u = l !== e.w,
    d = c !== e.h;
  return (
    (e.w = l),
    (e.h = c),
    n.horizontal ? { same: u, other: d } : { same: d, other: u }
  );
}
function a5(e) {
  const t = e.maxPadding;
  function n(r) {
    const i = Math.max(t[r] - e[r], 0);
    return (e[r] += i), i;
  }
  (e.y += n("top")), (e.x += n("left")), n("right"), n("bottom");
}
function l5(e, t) {
  const n = t.maxPadding;
  function r(i) {
    const s = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      i.forEach((o) => {
        s[o] = Math.max(t[o], n[o]);
      }),
      s
    );
  }
  return r(e ? ["left", "right"] : ["top", "bottom"]);
}
function mo(e, t, n, r) {
  const i = [];
  let s, o, l, c, u, d;
  for (s = 0, o = e.length, u = 0; s < o; ++s) {
    (l = e[s]),
      (c = l.box),
      c.update(l.width || t.w, l.height || t.h, l5(l.horizontal, t));
    const { same: h, other: f } = o5(t, n, l, r);
    (u |= h && i.length), (d = d || f), c.fullSize || i.push(l);
  }
  return (u && mo(i, t, n, r)) || d;
}
function bl(e, t, n, r, i) {
  (e.top = n),
    (e.left = t),
    (e.right = t + r),
    (e.bottom = n + i),
    (e.width = r),
    (e.height = i);
}
function mv(e, t, n, r) {
  const i = n.padding;
  let { x: s, y: o } = t;
  for (const l of e) {
    const c = l.box,
      u = r[l.stack] || { count: 1, placed: 0, weight: 1 },
      d = l.stackWeight / u.weight || 1;
    if (l.horizontal) {
      const h = t.w * d,
        f = u.size || c.height;
      da(u.start) && (o = u.start),
        c.fullSize
          ? bl(c, i.left, o, n.outerWidth - i.right - i.left, f)
          : bl(c, t.left + u.placed, o, h, f),
        (u.start = o),
        (u.placed += h),
        (o = c.bottom);
    } else {
      const h = t.h * d,
        f = u.size || c.width;
      da(u.start) && (s = u.start),
        c.fullSize
          ? bl(c, s, i.top, f, n.outerHeight - i.bottom - i.top)
          : bl(c, s, t.top + u.placed, f, h),
        (u.start = s),
        (u.placed += h),
        (s = c.right);
    }
  }
  (t.x = s), (t.y = o);
}
var Yt = {
  addBox(e, t) {
    e.boxes || (e.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || "top"),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(n) {
                t.draw(n);
              },
            },
          ];
        }),
      e.boxes.push(t);
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1;
    n !== -1 && e.boxes.splice(n, 1);
  },
  configure(e, t, n) {
    (t.fullSize = n.fullSize), (t.position = n.position), (t.weight = n.weight);
  },
  update(e, t, n, r) {
    if (!e) return;
    const i = Ze(e.options.layout.padding),
      s = Math.max(t - i.width, 0),
      o = Math.max(n - i.height, 0),
      l = s5(e.boxes),
      c = l.vertical,
      u = l.horizontal;
    ue(e.boxes, (g) => {
      typeof g.beforeLayout == "function" && g.beforeLayout();
    });
    const d =
        c.reduce(
          (g, y) => (y.box.options && y.box.options.display === !1 ? g : g + 1),
          0
        ) || 1,
      h = Object.freeze({
        outerWidth: t,
        outerHeight: n,
        padding: i,
        availableWidth: s,
        availableHeight: o,
        vBoxMaxWidth: s / 2 / d,
        hBoxMaxHeight: o / 2,
      }),
      f = Object.assign({}, i);
    pS(f, Ze(r));
    const m = Object.assign(
        { maxPadding: f, w: s, h: o, x: i.left, y: i.top },
        i
      ),
      p = i5(c.concat(u), h);
    mo(l.fullSize, m, h, p),
      mo(c, m, h, p),
      mo(u, m, h, p) && mo(c, m, h, p),
      a5(m),
      mv(l.leftAndTop, m, h, p),
      (m.x += m.w),
      (m.y += m.h),
      mv(l.rightAndBottom, m, h, p),
      (e.chartArea = {
        left: m.left,
        top: m.top,
        right: m.left + m.w,
        bottom: m.top + m.h,
        height: m.h,
        width: m.w,
      }),
      ue(l.chartArea, (g) => {
        const y = g.box;
        Object.assign(y, e.chartArea),
          y.update(m.w, m.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class gS {
  acquireContext(t, n) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, n, r) {}
  removeEventListener(t, n, r) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, n, r, i) {
    return (
      (n = Math.max(0, n || t.width)),
      (r = r || t.height),
      { width: n, height: Math.max(0, i ? Math.floor(n / i) : r) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class c5 extends gS {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Xl = "$chartjs",
  u5 = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  xv = (e) => e === null || e === "";
function d5(e, t) {
  const n = e.style,
    r = e.getAttribute("height"),
    i = e.getAttribute("width");
  if (
    ((e[Xl] = {
      initial: {
        height: r,
        width: i,
        style: { display: n.display, height: n.height, width: n.width },
      },
    }),
    (n.display = n.display || "block"),
    (n.boxSizing = n.boxSizing || "border-box"),
    xv(i))
  ) {
    const s = Z0(e, "width");
    s !== void 0 && (e.width = s);
  }
  if (xv(r))
    if (e.style.height === "") e.height = e.width / (t || 2);
    else {
      const s = Z0(e, "height");
      s !== void 0 && (e.height = s);
    }
  return e;
}
const mS = fD ? { passive: !0 } : !1;
function h5(e, t, n) {
  e && e.addEventListener(t, n, mS);
}
function f5(e, t, n) {
  e && e.canvas && e.canvas.removeEventListener(t, n, mS);
}
function p5(e, t) {
  const n = u5[e.type] || e.type,
    { x: r, y: i } = pi(e, t);
  return {
    type: n,
    chart: t,
    native: e,
    x: r !== void 0 ? r : null,
    y: i !== void 0 ? i : null,
  };
}
function Yc(e, t) {
  for (const n of e) if (n === t || n.contains(t)) return !0;
}
function g5(e, t, n) {
  const r = e.canvas,
    i = new MutationObserver((s) => {
      let o = !1;
      for (const l of s)
        (o = o || Yc(l.addedNodes, r)), (o = o && !Yc(l.removedNodes, r));
      o && n();
    });
  return i.observe(document, { childList: !0, subtree: !0 }), i;
}
function m5(e, t, n) {
  const r = e.canvas,
    i = new MutationObserver((s) => {
      let o = !1;
      for (const l of s)
        (o = o || Yc(l.removedNodes, r)), (o = o && !Yc(l.addedNodes, r));
      o && n();
    });
  return i.observe(document, { childList: !0, subtree: !0 }), i;
}
const pa = new Map();
let vv = 0;
function xS() {
  const e = window.devicePixelRatio;
  e !== vv &&
    ((vv = e),
    pa.forEach((t, n) => {
      n.currentDevicePixelRatio !== e && t();
    }));
}
function x5(e, t) {
  pa.size || window.addEventListener("resize", xS), pa.set(e, t);
}
function v5(e) {
  pa.delete(e), pa.size || window.removeEventListener("resize", xS);
}
function y5(e, t, n) {
  const r = e.canvas,
    i = r && tm(r);
  if (!i) return;
  const s = Xw((l, c) => {
      const u = i.clientWidth;
      n(l, c), u < i.clientWidth && n();
    }, window),
    o = new ResizeObserver((l) => {
      const c = l[0],
        u = c.contentRect.width,
        d = c.contentRect.height;
      (u === 0 && d === 0) || s(u, d);
    });
  return o.observe(i), x5(e, s), o;
}
function ih(e, t, n) {
  n && n.disconnect(), t === "resize" && v5(e);
}
function b5(e, t, n) {
  const r = e.canvas,
    i = Xw((s) => {
      e.ctx !== null && n(p5(s, e));
    }, e);
  return h5(r, t, i), i;
}
class j5 extends gS {
  acquireContext(t, n) {
    const r = t && t.getContext && t.getContext("2d");
    return r && r.canvas === t ? (d5(t, n), r) : null;
  }
  releaseContext(t) {
    const n = t.canvas;
    if (!n[Xl]) return !1;
    const r = n[Xl].initial;
    ["height", "width"].forEach((s) => {
      const o = r[s];
      de(o) ? n.removeAttribute(s) : n.setAttribute(s, o);
    });
    const i = r.style || {};
    return (
      Object.keys(i).forEach((s) => {
        n.style[s] = i[s];
      }),
      (n.width = n.width),
      delete n[Xl],
      !0
    );
  }
  addEventListener(t, n, r) {
    this.removeEventListener(t, n);
    const i = t.$proxies || (t.$proxies = {}),
      o = { attach: g5, detach: m5, resize: y5 }[n] || b5;
    i[n] = o(t, n, r);
  }
  removeEventListener(t, n) {
    const r = t.$proxies || (t.$proxies = {}),
      i = r[n];
    if (!i) return;
    (({ attach: ih, detach: ih, resize: ih })[n] || f5)(t, n, i),
      (r[n] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, n, r, i) {
    return hD(t, n, r, i);
  }
  isAttached(t) {
    const n = t && tm(t);
    return !!(n && n.isConnected);
  }
}
function w5(e) {
  return !em() || (typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas)
    ? c5
    : j5;
}
class $n {
  constructor() {
    W(this, "x");
    W(this, "y");
    W(this, "active", !1);
    W(this, "options");
    W(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: n, y: r } = this.getProps(["x", "y"], t);
    return { x: n, y: r };
  }
  hasValue() {
    return ha(this.x) && ha(this.y);
  }
  getProps(t, n) {
    const r = this.$animations;
    if (!n || !r) return this;
    const i = {};
    return (
      t.forEach((s) => {
        i[s] = r[s] && r[s].active() ? r[s]._to : this[s];
      }),
      i
    );
  }
}
W($n, "defaults", {}), W($n, "defaultRoutes");
function S5(e, t) {
  const n = e.options.ticks,
    r = C5(e),
    i = Math.min(n.maxTicksLimit || r, r),
    s = n.major.enabled ? E5(t) : [],
    o = s.length,
    l = s[0],
    c = s[o - 1],
    u = [];
  if (o > i) return k5(t, u, s, o / i), u;
  const d = _5(s, t, i);
  if (o > 0) {
    let h, f;
    const m = o > 1 ? Math.round((c - l) / (o - 1)) : null;
    for (jl(t, u, d, de(m) ? 0 : l - m, l), h = 0, f = o - 1; h < f; h++)
      jl(t, u, d, s[h], s[h + 1]);
    return jl(t, u, d, c, de(m) ? t.length : c + m), u;
  }
  return jl(t, u, d), u;
}
function C5(e) {
  const t = e.options.offset,
    n = e._tickSize(),
    r = e._length / n + (t ? 0 : 1),
    i = e._maxLength / n;
  return Math.floor(Math.min(r, i));
}
function _5(e, t, n) {
  const r = P5(e),
    i = t.length / n;
  if (!r) return Math.max(i, 1);
  const s = f4(r);
  for (let o = 0, l = s.length - 1; o < l; o++) {
    const c = s[o];
    if (c > i) return c;
  }
  return Math.max(i, 1);
}
function E5(e) {
  const t = [];
  let n, r;
  for (n = 0, r = e.length; n < r; n++) e[n].major && t.push(n);
  return t;
}
function k5(e, t, n, r) {
  let i = 0,
    s = n[0],
    o;
  for (r = Math.ceil(r), o = 0; o < e.length; o++)
    o === s && (t.push(e[o]), i++, (s = n[i * r]));
}
function jl(e, t, n, r, i) {
  const s = J(r, 0),
    o = Math.min(J(i, e.length), e.length);
  let l = 0,
    c,
    u,
    d;
  for (
    n = Math.ceil(n), i && ((c = i - r), (n = c / Math.floor(c / n))), d = s;
    d < 0;

  )
    l++, (d = Math.round(s + l * n));
  for (u = Math.max(s, 0); u < o; u++)
    u === d && (t.push(e[u]), l++, (d = Math.round(s + l * n)));
}
function P5(e) {
  const t = e.length;
  let n, r;
  if (t < 2) return !1;
  for (r = e[0], n = 1; n < t; ++n) if (e[n] - e[n - 1] !== r) return !1;
  return r;
}
const I5 = (e) => (e === "left" ? "right" : e === "right" ? "left" : e),
  yv = (e, t, n) => (t === "top" || t === "left" ? e[t] + n : e[t] - n),
  bv = (e, t) => Math.min(t || e, e);
function jv(e, t) {
  const n = [],
    r = e.length / t,
    i = e.length;
  let s = 0;
  for (; s < i; s += r) n.push(e[Math.floor(s)]);
  return n;
}
function N5(e, t, n) {
  const r = e.ticks.length,
    i = Math.min(t, r - 1),
    s = e._startPixel,
    o = e._endPixel,
    l = 1e-6;
  let c = e.getPixelForTick(i),
    u;
  if (
    !(
      n &&
      (r === 1
        ? (u = Math.max(c - s, o - c))
        : t === 0
        ? (u = (e.getPixelForTick(1) - c) / 2)
        : (u = (c - e.getPixelForTick(i - 1)) / 2),
      (c += i < t ? u : -u),
      c < s - l || c > o + l)
    )
  )
    return c;
}
function A5(e, t) {
  ue(e, (n) => {
    const r = n.gc,
      i = r.length / 2;
    let s;
    if (i > t) {
      for (s = 0; s < i; ++s) delete n.data[r[s]];
      r.splice(0, i);
    }
  });
}
function oo(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function wv(e, t) {
  if (!e.display) return 0;
  const n = ze(e.font, t),
    r = Ze(e.padding);
  return (we(e.text) ? e.text.length : 1) * n.lineHeight + r.height;
}
function T5(e, t) {
  return oi(e, { scale: t, type: "scale" });
}
function O5(e, t, n) {
  return oi(e, { tick: n, index: t, type: "tick" });
}
function D5(e, t, n) {
  let r = Gg(e);
  return ((n && t !== "right") || (!n && t === "right")) && (r = I5(r)), r;
}
function M5(e, t, n, r) {
  const { top: i, left: s, bottom: o, right: l, chart: c } = e,
    { chartArea: u, scales: d } = c;
  let h = 0,
    f,
    m,
    p;
  const g = o - i,
    y = l - s;
  if (e.isHorizontal()) {
    if (((m = Qe(r, s, l)), oe(n))) {
      const x = Object.keys(n)[0],
        v = n[x];
      p = d[x].getPixelForValue(v) + g - t;
    } else
      n === "center" ? (p = (u.bottom + u.top) / 2 + g - t) : (p = yv(e, n, t));
    f = l - s;
  } else {
    if (oe(n)) {
      const x = Object.keys(n)[0],
        v = n[x];
      m = d[x].getPixelForValue(v) - y + t;
    } else
      n === "center" ? (m = (u.left + u.right) / 2 - y + t) : (m = yv(e, n, t));
    (p = Qe(r, o, i)), (h = n === "left" ? -kt : kt);
  }
  return { titleX: m, titleY: p, maxWidth: f, rotation: h };
}
class Hi extends $n {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, n) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: r, _suggestedMax: i } = this;
    return (
      (t = St(t, Number.POSITIVE_INFINITY)),
      (n = St(n, Number.NEGATIVE_INFINITY)),
      (r = St(r, Number.POSITIVE_INFINITY)),
      (i = St(i, Number.NEGATIVE_INFINITY)),
      { min: St(t, r), max: St(n, i), minDefined: We(t), maxDefined: We(n) }
    );
  }
  getMinMax(t) {
    let { min: n, max: r, minDefined: i, maxDefined: s } = this.getUserBounds(),
      o;
    if (i && s) return { min: n, max: r };
    const l = this.getMatchingVisibleMetas();
    for (let c = 0, u = l.length; c < u; ++c)
      (o = l[c].controller.getMinMax(this, t)),
        i || (n = Math.min(n, o.min)),
        s || (r = Math.max(r, o.max));
    return (
      (n = s && n > r ? r : n),
      (r = i && n > r ? n : r),
      { min: St(n, St(r, n)), max: St(r, St(n, r)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    fe(this.options.beforeUpdate, [this]);
  }
  update(t, n, r) {
    const { beginAtZero: i, grace: s, ticks: o } = this.options,
      l = o.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = r =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, r)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + r.left + r.right
        : this.height + r.top + r.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = V4(this, s, i)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const c = l < this.ticks.length;
    this._convertTicksToLabels(c ? jv(this.ticks, l) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      o.display &&
        (o.autoSkip || o.source === "auto") &&
        ((this.ticks = S5(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      c && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse,
      n,
      r;
    this.isHorizontal()
      ? ((n = this.left), (r = this.right))
      : ((n = this.top), (r = this.bottom), (t = !t)),
      (this._startPixel = n),
      (this._endPixel = r),
      (this._reversePixels = t),
      (this._length = r - n),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    fe(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    fe(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    fe(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), fe(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    fe(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const n = this.options.ticks;
    let r, i, s;
    for (r = 0, i = t.length; r < i; r++)
      (s = t[r]), (s.label = fe(n.callback, [s.value, r, t], this));
  }
  afterTickToLabelConversion() {
    fe(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    fe(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      n = t.ticks,
      r = bv(this.ticks.length, t.ticks.maxTicksLimit),
      i = n.minRotation || 0,
      s = n.maxRotation;
    let o = i,
      l,
      c,
      u;
    if (
      !this._isVisible() ||
      !n.display ||
      i >= s ||
      r <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = i;
      return;
    }
    const d = this._getLabelSizes(),
      h = d.widest.width,
      f = d.highest.height,
      m = Pt(this.chart.width - h, 0, this.maxWidth);
    (l = t.offset ? this.maxWidth / r : m / (r - 1)),
      h + 6 > l &&
        ((l = m / (r - (t.offset ? 0.5 : 1))),
        (c =
          this.maxHeight -
          oo(t.grid) -
          n.padding -
          wv(t.title, this.chart.options.font)),
        (u = Math.sqrt(h * h + f * f)),
        (o = Vg(
          Math.min(
            Math.asin(Pt((d.highest.height + 6) / l, -1, 1)),
            Math.asin(Pt(c / u, -1, 1)) - Math.asin(Pt(f / u, -1, 1))
          )
        )),
        (o = Math.max(i, Math.min(s, o)))),
      (this.labelRotation = o);
  }
  afterCalculateLabelRotation() {
    fe(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    fe(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: n,
        options: { ticks: r, title: i, grid: s },
      } = this,
      o = this._isVisible(),
      l = this.isHorizontal();
    if (o) {
      const c = wv(i, n.options.font);
      if (
        (l
          ? ((t.width = this.maxWidth), (t.height = oo(s) + c))
          : ((t.height = this.maxHeight), (t.width = oo(s) + c)),
        r.display && this.ticks.length)
      ) {
        const {
            first: u,
            last: d,
            widest: h,
            highest: f,
          } = this._getLabelSizes(),
          m = r.padding * 2,
          p = Fr(this.labelRotation),
          g = Math.cos(p),
          y = Math.sin(p);
        if (l) {
          const x = r.mirror ? 0 : y * h.width + g * f.height;
          t.height = Math.min(this.maxHeight, t.height + x + m);
        } else {
          const x = r.mirror ? 0 : g * h.width + y * f.height;
          t.width = Math.min(this.maxWidth, t.width + x + m);
        }
        this._calculatePadding(u, d, y, g);
      }
    }
    this._handleMargins(),
      l
        ? ((this.width = this._length =
            n.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            n.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, n, r, i) {
    const {
        ticks: { align: s, padding: o },
        position: l,
      } = this.options,
      c = this.labelRotation !== 0,
      u = l !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const d = this.getPixelForTick(0) - this.left,
        h = this.right - this.getPixelForTick(this.ticks.length - 1);
      let f = 0,
        m = 0;
      c
        ? u
          ? ((f = i * t.width), (m = r * n.height))
          : ((f = r * t.height), (m = i * n.width))
        : s === "start"
        ? (m = n.width)
        : s === "end"
        ? (f = t.width)
        : s !== "inner" && ((f = t.width / 2), (m = n.width / 2)),
        (this.paddingLeft = Math.max(
          ((f - d + o) * this.width) / (this.width - d),
          0
        )),
        (this.paddingRight = Math.max(
          ((m - h + o) * this.width) / (this.width - h),
          0
        ));
    } else {
      let d = n.height / 2,
        h = t.height / 2;
      s === "start"
        ? ((d = 0), (h = t.height))
        : s === "end" && ((d = n.height), (h = 0)),
        (this.paddingTop = d + o),
        (this.paddingBottom = h + o);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    fe(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: n } = this.options;
    return n === "top" || n === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let n, r;
    for (n = 0, r = t.length; n < r; n++)
      de(t[n].label) && (t.splice(n, 1), r--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const n = this.options.ticks.sampleSize;
      let r = this.ticks;
      n < r.length && (r = jv(r, n)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            r,
            r.length,
            this.options.ticks.maxTicksLimit
          ));
    }
    return t;
  }
  _computeLabelSizes(t, n, r) {
    const { ctx: i, _longestTextCache: s } = this,
      o = [],
      l = [],
      c = Math.floor(n / bv(n, r));
    let u = 0,
      d = 0,
      h,
      f,
      m,
      p,
      g,
      y,
      x,
      v,
      b,
      S,
      C;
    for (h = 0; h < n; h += c) {
      if (
        ((p = t[h].label),
        (g = this._resolveTickFontOptions(h)),
        (i.font = y = g.string),
        (x = s[y] = s[y] || { data: {}, gc: [] }),
        (v = g.lineHeight),
        (b = S = 0),
        !de(p) && !we(p))
      )
        (b = Uc(i, x.data, x.gc, b, p)), (S = v);
      else if (we(p))
        for (f = 0, m = p.length; f < m; ++f)
          (C = p[f]),
            !de(C) && !we(C) && ((b = Uc(i, x.data, x.gc, b, C)), (S += v));
      o.push(b), l.push(S), (u = Math.max(b, u)), (d = Math.max(S, d));
    }
    A5(s, n);
    const k = o.indexOf(u),
      _ = l.indexOf(d),
      E = (I) => ({ width: o[I] || 0, height: l[I] || 0 });
    return {
      first: E(0),
      last: E(n - 1),
      widest: E(k),
      highest: E(_),
      widths: o,
      heights: l,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, n) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const n = this._startPixel + t * this._length;
    return x4(this._alignToPixels ? ci(this.chart, n, 0) : n);
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: n } = this;
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0;
  }
  getContext(t) {
    const n = this.ticks || [];
    if (t >= 0 && t < n.length) {
      const r = n[t];
      return r.$context || (r.$context = O5(this.getContext(), t, r));
    }
    return this.$context || (this.$context = T5(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      n = Fr(this.labelRotation),
      r = Math.abs(Math.cos(n)),
      i = Math.abs(Math.sin(n)),
      s = this._getLabelSizes(),
      o = t.autoSkipPadding || 0,
      l = s ? s.widest.width + o : 0,
      c = s ? s.highest.height + o : 0;
    return this.isHorizontal()
      ? c * r > l * i
        ? l / r
        : c / i
      : c * i < l * r
      ? c / r
      : l / i;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const n = this.axis,
      r = this.chart,
      i = this.options,
      { grid: s, position: o, border: l } = i,
      c = s.offset,
      u = this.isHorizontal(),
      h = this.ticks.length + (c ? 1 : 0),
      f = oo(s),
      m = [],
      p = l.setContext(this.getContext()),
      g = p.display ? p.width : 0,
      y = g / 2,
      x = function (G) {
        return ci(r, G, g);
      };
    let v, b, S, C, k, _, E, I, N, R, z, ee;
    if (o === "top")
      (v = x(this.bottom)),
        (_ = this.bottom - f),
        (I = v - y),
        (R = x(t.top) + y),
        (ee = t.bottom);
    else if (o === "bottom")
      (v = x(this.top)),
        (R = t.top),
        (ee = x(t.bottom) - y),
        (_ = v + y),
        (I = this.top + f);
    else if (o === "left")
      (v = x(this.right)),
        (k = this.right - f),
        (E = v - y),
        (N = x(t.left) + y),
        (z = t.right);
    else if (o === "right")
      (v = x(this.left)),
        (N = t.left),
        (z = x(t.right) - y),
        (k = v + y),
        (E = this.left + f);
    else if (n === "x") {
      if (o === "center") v = x((t.top + t.bottom) / 2 + 0.5);
      else if (oe(o)) {
        const G = Object.keys(o)[0],
          te = o[G];
        v = x(this.chart.scales[G].getPixelForValue(te));
      }
      (R = t.top), (ee = t.bottom), (_ = v + y), (I = _ + f);
    } else if (n === "y") {
      if (o === "center") v = x((t.left + t.right) / 2);
      else if (oe(o)) {
        const G = Object.keys(o)[0],
          te = o[G];
        v = x(this.chart.scales[G].getPixelForValue(te));
      }
      (k = v - y), (E = k - f), (N = t.left), (z = t.right);
    }
    const ae = J(i.ticks.maxTicksLimit, h),
      K = Math.max(1, Math.ceil(h / ae));
    for (b = 0; b < h; b += K) {
      const G = this.getContext(b),
        te = s.setContext(G),
        O = l.setContext(G),
        M = te.lineWidth,
        D = te.color,
        H = O.dash || [],
        B = O.dashOffset,
        se = te.tickWidth,
        Q = te.tickColor,
        ce = te.tickBorderDash || [],
        ne = te.tickBorderDashOffset;
      (S = N5(this, b, c)),
        S !== void 0 &&
          ((C = ci(r, S, M)),
          u ? (k = E = N = z = C) : (_ = I = R = ee = C),
          m.push({
            tx1: k,
            ty1: _,
            tx2: E,
            ty2: I,
            x1: N,
            y1: R,
            x2: z,
            y2: ee,
            width: M,
            color: D,
            borderDash: H,
            borderDashOffset: B,
            tickWidth: se,
            tickColor: Q,
            tickBorderDash: ce,
            tickBorderDashOffset: ne,
          }));
    }
    return (this._ticksLength = h), (this._borderValue = v), m;
  }
  _computeLabelItems(t) {
    const n = this.axis,
      r = this.options,
      { position: i, ticks: s } = r,
      o = this.isHorizontal(),
      l = this.ticks,
      { align: c, crossAlign: u, padding: d, mirror: h } = s,
      f = oo(r.grid),
      m = f + d,
      p = h ? -d : m,
      g = -Fr(this.labelRotation),
      y = [];
    let x,
      v,
      b,
      S,
      C,
      k,
      _,
      E,
      I,
      N,
      R,
      z,
      ee = "middle";
    if (i === "top")
      (k = this.bottom - p), (_ = this._getXAxisLabelAlignment());
    else if (i === "bottom")
      (k = this.top + p), (_ = this._getXAxisLabelAlignment());
    else if (i === "left") {
      const K = this._getYAxisLabelAlignment(f);
      (_ = K.textAlign), (C = K.x);
    } else if (i === "right") {
      const K = this._getYAxisLabelAlignment(f);
      (_ = K.textAlign), (C = K.x);
    } else if (n === "x") {
      if (i === "center") k = (t.top + t.bottom) / 2 + m;
      else if (oe(i)) {
        const K = Object.keys(i)[0],
          G = i[K];
        k = this.chart.scales[K].getPixelForValue(G) + m;
      }
      _ = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (i === "center") C = (t.left + t.right) / 2 - m;
      else if (oe(i)) {
        const K = Object.keys(i)[0],
          G = i[K];
        C = this.chart.scales[K].getPixelForValue(G);
      }
      _ = this._getYAxisLabelAlignment(f).textAlign;
    }
    n === "y" &&
      (c === "start" ? (ee = "top") : c === "end" && (ee = "bottom"));
    const ae = this._getLabelSizes();
    for (x = 0, v = l.length; x < v; ++x) {
      (b = l[x]), (S = b.label);
      const K = s.setContext(this.getContext(x));
      (E = this.getPixelForTick(x) + s.labelOffset),
        (I = this._resolveTickFontOptions(x)),
        (N = I.lineHeight),
        (R = we(S) ? S.length : 1);
      const G = R / 2,
        te = K.color,
        O = K.textStrokeColor,
        M = K.textStrokeWidth;
      let D = _;
      o
        ? ((C = E),
          _ === "inner" &&
            (x === v - 1
              ? (D = this.options.reverse ? "left" : "right")
              : x === 0
              ? (D = this.options.reverse ? "right" : "left")
              : (D = "center")),
          i === "top"
            ? u === "near" || g !== 0
              ? (z = -R * N + N / 2)
              : u === "center"
              ? (z = -ae.highest.height / 2 - G * N + N)
              : (z = -ae.highest.height + N / 2)
            : u === "near" || g !== 0
            ? (z = N / 2)
            : u === "center"
            ? (z = ae.highest.height / 2 - G * N)
            : (z = ae.highest.height - R * N),
          h && (z *= -1),
          g !== 0 && !K.showLabelBackdrop && (C += (N / 2) * Math.sin(g)))
        : ((k = E), (z = ((1 - R) * N) / 2));
      let H;
      if (K.showLabelBackdrop) {
        const B = Ze(K.backdropPadding),
          se = ae.heights[x],
          Q = ae.widths[x];
        let ce = z - B.top,
          ne = 0 - B.left;
        switch (ee) {
          case "middle":
            ce -= se / 2;
            break;
          case "bottom":
            ce -= se;
            break;
        }
        switch (_) {
          case "center":
            ne -= Q / 2;
            break;
          case "right":
            ne -= Q;
            break;
          case "inner":
            x === v - 1 ? (ne -= Q) : x > 0 && (ne -= Q / 2);
            break;
        }
        H = {
          left: ne,
          top: ce,
          width: Q + B.width,
          height: se + B.height,
          color: K.backdropColor,
        };
      }
      y.push({
        label: S,
        font: I,
        textOffset: z,
        options: {
          rotation: g,
          color: te,
          strokeColor: O,
          strokeWidth: M,
          textAlign: D,
          textBaseline: ee,
          translation: [C, k],
          backdrop: H,
        },
      });
    }
    return y;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options;
    if (-Fr(this.labelRotation)) return t === "top" ? "left" : "right";
    let i = "center";
    return (
      n.align === "start"
        ? (i = "left")
        : n.align === "end"
        ? (i = "right")
        : n.align === "inner" && (i = "inner"),
      i
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: n,
        ticks: { crossAlign: r, mirror: i, padding: s },
      } = this.options,
      o = this._getLabelSizes(),
      l = t + s,
      c = o.widest.width;
    let u, d;
    return (
      n === "left"
        ? i
          ? ((d = this.right + s),
            r === "near"
              ? (u = "left")
              : r === "center"
              ? ((u = "center"), (d += c / 2))
              : ((u = "right"), (d += c)))
          : ((d = this.right - l),
            r === "near"
              ? (u = "right")
              : r === "center"
              ? ((u = "center"), (d -= c / 2))
              : ((u = "left"), (d = this.left)))
        : n === "right"
        ? i
          ? ((d = this.left + s),
            r === "near"
              ? (u = "right")
              : r === "center"
              ? ((u = "center"), (d -= c / 2))
              : ((u = "left"), (d -= c)))
          : ((d = this.left + l),
            r === "near"
              ? (u = "left")
              : r === "center"
              ? ((u = "center"), (d += c / 2))
              : ((u = "right"), (d = this.right)))
        : (u = "right"),
      { textAlign: u, x: d }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      n = this.options.position;
    if (n === "left" || n === "right")
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (n === "top" || n === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: n },
      left: r,
      top: i,
      width: s,
      height: o,
    } = this;
    n && (t.save(), (t.fillStyle = n), t.fillRect(r, i, s, o), t.restore());
  }
  getLineWidthForValue(t) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display) return 0;
    const i = this.ticks.findIndex((s) => s.value === t);
    return i >= 0 ? n.setContext(this.getContext(i)).lineWidth : 0;
  }
  drawGrid(t) {
    const n = this.options.grid,
      r = this.ctx,
      i =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let s, o;
    const l = (c, u, d) => {
      !d.width ||
        !d.color ||
        (r.save(),
        (r.lineWidth = d.width),
        (r.strokeStyle = d.color),
        r.setLineDash(d.borderDash || []),
        (r.lineDashOffset = d.borderDashOffset),
        r.beginPath(),
        r.moveTo(c.x, c.y),
        r.lineTo(u.x, u.y),
        r.stroke(),
        r.restore());
    };
    if (n.display)
      for (s = 0, o = i.length; s < o; ++s) {
        const c = i[s];
        n.drawOnChartArea && l({ x: c.x1, y: c.y1 }, { x: c.x2, y: c.y2 }, c),
          n.drawTicks &&
            l(
              { x: c.tx1, y: c.ty1 },
              { x: c.tx2, y: c.ty2 },
              {
                color: c.tickColor,
                width: c.tickWidth,
                borderDash: c.tickBorderDash,
                borderDashOffset: c.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: n,
        options: { border: r, grid: i },
      } = this,
      s = r.setContext(this.getContext()),
      o = r.display ? s.width : 0;
    if (!o) return;
    const l = i.setContext(this.getContext(0)).lineWidth,
      c = this._borderValue;
    let u, d, h, f;
    this.isHorizontal()
      ? ((u = ci(t, this.left, o) - o / 2),
        (d = ci(t, this.right, l) + l / 2),
        (h = f = c))
      : ((h = ci(t, this.top, o) - o / 2),
        (f = ci(t, this.bottom, l) + l / 2),
        (u = d = c)),
      n.save(),
      (n.lineWidth = s.width),
      (n.strokeStyle = s.color),
      n.beginPath(),
      n.moveTo(u, h),
      n.lineTo(d, f),
      n.stroke(),
      n.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const r = this.ctx,
      i = this._computeLabelArea();
    i && Kg(r, i);
    const s = this.getLabelItems(t);
    for (const o of s) {
      const l = o.options,
        c = o.font,
        u = o.label,
        d = o.textOffset;
      Fi(r, u, 0, d, c, l);
    }
    i && Qg(r);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: n, title: r, reverse: i },
    } = this;
    if (!r.display) return;
    const s = ze(r.font),
      o = Ze(r.padding),
      l = r.align;
    let c = s.lineHeight / 2;
    n === "bottom" || n === "center" || oe(n)
      ? ((c += o.bottom),
        we(r.text) && (c += s.lineHeight * (r.text.length - 1)))
      : (c += o.top);
    const {
      titleX: u,
      titleY: d,
      maxWidth: h,
      rotation: f,
    } = M5(this, c, n, l);
    Fi(t, r.text, 0, 0, s, {
      color: r.color,
      maxWidth: h,
      rotation: f,
      textAlign: D5(l, n, i),
      textBaseline: "middle",
      translation: [u, d],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      n = (t.ticks && t.ticks.z) || 0,
      r = J(t.grid && t.grid.z, -1),
      i = J(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Hi.prototype.draw
      ? [
          {
            z: n,
            draw: (s) => {
              this.draw(s);
            },
          },
        ]
      : [
          {
            z: r,
            draw: (s) => {
              this.drawBackground(), this.drawGrid(s), this.drawTitle();
            },
          },
          {
            z: i,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: n,
            draw: (s) => {
              this.drawLabels(s);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(),
      r = this.axis + "AxisID",
      i = [];
    let s, o;
    for (s = 0, o = n.length; s < o; ++s) {
      const l = n[s];
      l[r] === this.id && (!t || l.type === t) && i.push(l);
    }
    return i;
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t));
    return ze(n.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class wl {
  constructor(t, n, r) {
    (this.type = t),
      (this.scope = n),
      (this.override = r),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype
    );
  }
  register(t) {
    const n = Object.getPrototypeOf(t);
    let r;
    F5(n) && (r = this.register(n));
    const i = this.items,
      s = t.id,
      o = this.scope + "." + s;
    if (!s) throw new Error("class does not have id: " + t);
    return (
      s in i ||
        ((i[s] = t),
        L5(t, o, r),
        this.override && ke.override(t.id, t.overrides)),
      o
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const n = this.items,
      r = t.id,
      i = this.scope;
    r in n && delete n[r],
      i && r in ke[i] && (delete ke[i][r], this.override && delete Ri[r]);
  }
}
function L5(e, t, n) {
  const r = ua(Object.create(null), [
    n ? ke.get(n) : {},
    ke.get(t),
    e.defaults,
  ]);
  ke.set(t, r),
    e.defaultRoutes && R5(t, e.defaultRoutes),
    e.descriptors && ke.describe(t, e.descriptors);
}
function R5(e, t) {
  Object.keys(t).forEach((n) => {
    const r = n.split("."),
      i = r.pop(),
      s = [e].concat(r).join("."),
      o = t[n].split("."),
      l = o.pop(),
      c = o.join(".");
    ke.route(s, i, c, l);
  });
}
function F5(e) {
  return "id" in e && "defaults" in e;
}
class z5 {
  constructor() {
    (this.controllers = new wl(bs, "datasets", !0)),
      (this.elements = new wl($n, "elements")),
      (this.plugins = new wl(Object, "plugins")),
      (this.scales = new wl(Hi, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, n, r) {
    [...n].forEach((i) => {
      const s = r || this._getRegistryForType(i);
      r || s.isForType(i) || (s === this.plugins && i.id)
        ? this._exec(t, s, i)
        : ue(i, (o) => {
            const l = r || this._getRegistryForType(o);
            this._exec(t, l, o);
          });
    });
  }
  _exec(t, n, r) {
    const i = Hg(t);
    fe(r["before" + i], [], r), n[t](r), fe(r["after" + i], [], r);
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const r = this._typedRegistries[n];
      if (r.isForType(t)) return r;
    }
    return this.plugins;
  }
  _get(t, n, r) {
    const i = n.get(t);
    if (i === void 0)
      throw new Error('"' + t + '" is not a registered ' + r + ".");
    return i;
  }
}
var In = new z5();
class $5 {
  constructor() {
    this._init = [];
  }
  notify(t, n, r, i) {
    n === "beforeInit" &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, "install"));
    const s = i ? this._descriptors(t).filter(i) : this._descriptors(t),
      o = this._notify(s, t, n, r);
    return (
      n === "afterDestroy" &&
        (this._notify(s, t, "stop"), this._notify(this._init, t, "uninstall")),
      o
    );
  }
  _notify(t, n, r, i) {
    i = i || {};
    for (const s of t) {
      const o = s.plugin,
        l = o[r],
        c = [n, i, s.options];
      if (fe(l, c, o) === !1 && i.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    de(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const n = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), n;
  }
  _createDescriptors(t, n) {
    const r = t && t.config,
      i = J(r.options && r.options.plugins, {}),
      s = B5(r);
    return i === !1 && !n ? [] : H5(t, s, i, n);
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [],
      r = this._cache,
      i = (s, o) =>
        s.filter((l) => !o.some((c) => l.plugin.id === c.plugin.id));
    this._notify(i(n, r), t, "stop"), this._notify(i(r, n), t, "start");
  }
}
function B5(e) {
  const t = {},
    n = [],
    r = Object.keys(In.plugins.items);
  for (let s = 0; s < r.length; s++) n.push(In.getPlugin(r[s]));
  const i = e.plugins || [];
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    n.indexOf(o) === -1 && (n.push(o), (t[o.id] = !0));
  }
  return { plugins: n, localIds: t };
}
function W5(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function H5(e, { plugins: t, localIds: n }, r, i) {
  const s = [],
    o = e.getContext();
  for (const l of t) {
    const c = l.id,
      u = W5(r[c], i);
    u !== null &&
      s.push({
        plugin: l,
        options: V5(e.config, { plugin: l, local: n[c] }, u, o),
      });
  }
  return s;
}
function V5(e, { plugin: t, local: n }, r, i) {
  const s = e.pluginScopeKeys(t),
    o = e.getOptionScopes(r, s);
  return (
    n && t.defaults && o.push(t.defaults),
    e.createResolver(o, i, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function Rf(e, t) {
  const n = ke.datasets[e] || {};
  return (
    ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x"
  );
}
function U5(e, t) {
  let n = e;
  return (
    e === "_index_" ? (n = t) : e === "_value_" && (n = t === "x" ? "y" : "x"),
    n
  );
}
function G5(e, t) {
  return e === t ? "_index_" : "_value_";
}
function Sv(e) {
  if (e === "x" || e === "y" || e === "r") return e;
}
function Y5(e) {
  if (e === "top" || e === "bottom") return "x";
  if (e === "left" || e === "right") return "y";
}
function Ff(e, ...t) {
  if (Sv(e)) return e;
  for (const n of t) {
    const r =
      n.axis || Y5(n.position) || (e.length > 1 && Sv(e[0].toLowerCase()));
    if (r) return r;
  }
  throw new Error(
    `Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`
  );
}
function Cv(e, t, n) {
  if (n[t + "AxisID"] === e) return { axis: t };
}
function q5(e, t) {
  if (t.data && t.data.datasets) {
    const n = t.data.datasets.filter((r) => r.xAxisID === e || r.yAxisID === e);
    if (n.length) return Cv(e, "x", n[0]) || Cv(e, "y", n[0]);
  }
  return {};
}
function K5(e, t) {
  const n = Ri[e.type] || { scales: {} },
    r = t.scales || {},
    i = Rf(e.type, t),
    s = Object.create(null);
  return (
    Object.keys(r).forEach((o) => {
      const l = r[o];
      if (!oe(l))
        return console.error(`Invalid scale configuration for scale: ${o}`);
      if (l._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${o}`
        );
      const c = Ff(o, l, q5(o, e), ke.scales[l.type]),
        u = G5(c, i),
        d = n.scales || {};
      s[o] = Ao(Object.create(null), [{ axis: c }, l, d[c], d[u]]);
    }),
    e.data.datasets.forEach((o) => {
      const l = o.type || e.type,
        c = o.indexAxis || Rf(l, t),
        d = (Ri[l] || {}).scales || {};
      Object.keys(d).forEach((h) => {
        const f = U5(h, c),
          m = o[f + "AxisID"] || f;
        (s[m] = s[m] || Object.create(null)),
          Ao(s[m], [{ axis: f }, r[m], d[h]]);
      });
    }),
    Object.keys(s).forEach((o) => {
      const l = s[o];
      Ao(l, [ke.scales[l.type], ke.scale]);
    }),
    s
  );
}
function vS(e) {
  const t = e.options || (e.options = {});
  (t.plugins = J(t.plugins, {})), (t.scales = K5(e, t));
}
function yS(e) {
  return (
    (e = e || {}),
    (e.datasets = e.datasets || []),
    (e.labels = e.labels || []),
    e
  );
}
function Q5(e) {
  return (e = e || {}), (e.data = yS(e.data)), vS(e), e;
}
const _v = new Map(),
  bS = new Set();
function Sl(e, t) {
  let n = _v.get(e);
  return n || ((n = t()), _v.set(e, n), bS.add(n)), n;
}
const ao = (e, t, n) => {
  const r = Ds(t, n);
  r !== void 0 && e.add(r);
};
class X5 {
  constructor(t) {
    (this._config = Q5(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = yS(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), vS(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Sl(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, n) {
    return Sl(`${t}.transition.${n}`, () => [
      [`datasets.${t}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${t}`, ""],
    ]);
  }
  datasetElementScopeKeys(t, n) {
    return Sl(`${t}-${n}`, () => [
      [`datasets.${t}.elements.${n}`, `datasets.${t}`, `elements.${n}`, ""],
    ]);
  }
  pluginScopeKeys(t) {
    const n = t.id,
      r = this.type;
    return Sl(`${r}-plugin-${n}`, () => [
      [`plugins.${n}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, n) {
    const r = this._scopeCache;
    let i = r.get(t);
    return (!i || n) && ((i = new Map()), r.set(t, i)), i;
  }
  getOptionScopes(t, n, r) {
    const { options: i, type: s } = this,
      o = this._cachedScopes(t, r),
      l = o.get(n);
    if (l) return l;
    const c = new Set();
    n.forEach((d) => {
      t && (c.add(t), d.forEach((h) => ao(c, t, h))),
        d.forEach((h) => ao(c, i, h)),
        d.forEach((h) => ao(c, Ri[s] || {}, h)),
        d.forEach((h) => ao(c, ke, h)),
        d.forEach((h) => ao(c, Mf, h));
    });
    const u = Array.from(c);
    return (
      u.length === 0 && u.push(Object.create(null)), bS.has(n) && o.set(n, u), u
    );
  }
  chartOptionScopes() {
    const { options: t, type: n } = this;
    return [t, Ri[n] || {}, ke.datasets[n] || {}, { type: n }, ke, Mf];
  }
  resolveNamedOptions(t, n, r, i = [""]) {
    const s = { $shared: !0 },
      { resolver: o, subPrefixes: l } = Ev(this._resolverCache, t, i);
    let c = o;
    if (Z5(o, n)) {
      (s.$shared = !1), (r = Jr(r) ? r() : r);
      const u = this.createResolver(t, r, l);
      c = Ms(o, r, u);
    }
    for (const u of n) s[u] = c[u];
    return s;
  }
  createResolver(t, n, r = [""], i) {
    const { resolver: s } = Ev(this._resolverCache, t, r);
    return oe(n) ? Ms(s, n, void 0, i) : s;
  }
}
function Ev(e, t, n) {
  let r = e.get(t);
  r || ((r = new Map()), e.set(t, r));
  const i = n.join();
  let s = r.get(i);
  return (
    s ||
      ((s = {
        resolver: Xg(t, n),
        subPrefixes: n.filter((l) => !l.toLowerCase().includes("hover")),
      }),
      r.set(i, s)),
    s
  );
}
const J5 = (e) => oe(e) && Object.getOwnPropertyNames(e).some((t) => Jr(e[t]));
function Z5(e, t) {
  const { isScriptable: n, isIndexable: r } = nS(e);
  for (const i of t) {
    const s = n(i),
      o = r(i),
      l = (o || s) && e[i];
    if ((s && (Jr(l) || J5(l))) || (o && we(l))) return !0;
  }
  return !1;
}
var eM = "4.4.3";
const tM = ["top", "bottom", "left", "right", "chartArea"];
function kv(e, t) {
  return e === "top" || e === "bottom" || (tM.indexOf(e) === -1 && t === "x");
}
function Pv(e, t) {
  return function (n, r) {
    return n[e] === r[e] ? n[t] - r[t] : n[e] - r[e];
  };
}
function Iv(e) {
  const t = e.chart,
    n = t.options.animation;
  t.notifyPlugins("afterRender"), fe(n && n.onComplete, [e], t);
}
function nM(e) {
  const t = e.chart,
    n = t.options.animation;
  fe(n && n.onProgress, [e], t);
}
function jS(e) {
  return (
    em() && typeof e == "string"
      ? (e = document.getElementById(e))
      : e && e.length && (e = e[0]),
    e && e.canvas && (e = e.canvas),
    e
  );
}
const Jl = {},
  Nv = (e) => {
    const t = jS(e);
    return Object.values(Jl)
      .filter((n) => n.canvas === t)
      .pop();
  };
function rM(e, t, n) {
  const r = Object.keys(e);
  for (const i of r) {
    const s = +i;
    if (s >= t) {
      const o = e[i];
      delete e[i], (n > 0 || s > t) && (e[s + n] = o);
    }
  }
}
function iM(e, t, n, r) {
  return !n || e.type === "mouseout" ? null : r ? t : e;
}
function Cl(e, t, n) {
  return e.options.clip ? e[n] : t[n];
}
function sM(e, t) {
  const { xScale: n, yScale: r } = e;
  return n && r
    ? {
        left: Cl(n, t, "left"),
        right: Cl(n, t, "right"),
        top: Cl(r, t, "top"),
        bottom: Cl(r, t, "bottom"),
      }
    : t;
}
var Cr;
let Ta =
  ((Cr = class {
    static register(...t) {
      In.add(...t), Av();
    }
    static unregister(...t) {
      In.remove(...t), Av();
    }
    constructor(t, n) {
      const r = (this.config = new X5(n)),
        i = jS(t),
        s = Nv(i);
      if (s)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            s.id +
            "' must be destroyed before the canvas with ID '" +
            s.canvas.id +
            "' can be reused."
        );
      const o = r.createResolver(r.chartOptionScopes(), this.getContext());
      (this.platform = new (r.platform || w5(i))()),
        this.platform.updateConfig(r);
      const l = this.platform.acquireContext(i, o.aspectRatio),
        c = l && l.canvas,
        u = c && c.height,
        d = c && c.width;
      if (
        ((this.id = i4()),
        (this.ctx = l),
        (this.canvas = c),
        (this.width = d),
        (this.height = u),
        (this._options = o),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new $5()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = j4((h) => this.update(h), o.resizeDelay || 0)),
        (this._dataChanges = []),
        (Jl[this.id] = this),
        !l || !c)
      ) {
        console.error(
          "Failed to create chart: can't acquire context from the given item"
        );
        return;
      }
      Kn.listen(this, "complete", Iv),
        Kn.listen(this, "progress", nM),
        this._initialize(),
        this.attached && this.update();
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: n },
        width: r,
        height: i,
        _aspectRatio: s,
      } = this;
      return de(t) ? (n && s ? s : i ? r / i : null) : t;
    }
    get data() {
      return this.config.data;
    }
    set data(t) {
      this.config.data = t;
    }
    get options() {
      return this._options;
    }
    set options(t) {
      this.config.options = t;
    }
    get registry() {
      return In;
    }
    _initialize() {
      return (
        this.notifyPlugins("beforeInit"),
        this.options.responsive
          ? this.resize()
          : J0(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this
      );
    }
    clear() {
      return K0(this.canvas, this.ctx), this;
    }
    stop() {
      return Kn.stop(this), this;
    }
    resize(t, n) {
      Kn.running(this)
        ? (this._resizeBeforeDraw = { width: t, height: n })
        : this._resize(t, n);
    }
    _resize(t, n) {
      const r = this.options,
        i = this.canvas,
        s = r.maintainAspectRatio && this.aspectRatio,
        o = this.platform.getMaximumSize(i, t, n, s),
        l = r.devicePixelRatio || this.platform.getDevicePixelRatio(),
        c = this.width ? "resize" : "attach";
      (this.width = o.width),
        (this.height = o.height),
        (this._aspectRatio = this.aspectRatio),
        J0(this, l, !0) &&
          (this.notifyPlugins("resize", { size: o }),
          fe(r.onResize, [this, o], this),
          this.attached && this._doResize(c) && this.render());
    }
    ensureScalesHaveIDs() {
      const n = this.options.scales || {};
      ue(n, (r, i) => {
        r.id = i;
      });
    }
    buildOrUpdateScales() {
      const t = this.options,
        n = t.scales,
        r = this.scales,
        i = Object.keys(r).reduce((o, l) => ((o[l] = !1), o), {});
      let s = [];
      n &&
        (s = s.concat(
          Object.keys(n).map((o) => {
            const l = n[o],
              c = Ff(o, l),
              u = c === "r",
              d = c === "x";
            return {
              options: l,
              dposition: u ? "chartArea" : d ? "bottom" : "left",
              dtype: u ? "radialLinear" : d ? "category" : "linear",
            };
          })
        )),
        ue(s, (o) => {
          const l = o.options,
            c = l.id,
            u = Ff(c, l),
            d = J(l.type, o.dtype);
          (l.position === void 0 || kv(l.position, u) !== kv(o.dposition)) &&
            (l.position = o.dposition),
            (i[c] = !0);
          let h = null;
          if (c in r && r[c].type === d) h = r[c];
          else {
            const f = In.getScale(d);
            (h = new f({ id: c, type: d, ctx: this.ctx, chart: this })),
              (r[h.id] = h);
          }
          h.init(l, t);
        }),
        ue(i, (o, l) => {
          o || delete r[l];
        }),
        ue(r, (o) => {
          Yt.configure(this, o, o.options), Yt.addBox(this, o);
        });
    }
    _updateMetasets() {
      const t = this._metasets,
        n = this.data.datasets.length,
        r = t.length;
      if ((t.sort((i, s) => i.index - s.index), r > n)) {
        for (let i = n; i < r; ++i) this._destroyDatasetMeta(i);
        t.splice(n, r - n);
      }
      this._sortedMetasets = t.slice(0).sort(Pv("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: t,
        data: { datasets: n },
      } = this;
      t.length > n.length && delete this._stacks,
        t.forEach((r, i) => {
          n.filter((s) => s === r._dataset).length === 0 &&
            this._destroyDatasetMeta(i);
        });
    }
    buildOrUpdateControllers() {
      const t = [],
        n = this.data.datasets;
      let r, i;
      for (
        this._removeUnreferencedMetasets(), r = 0, i = n.length;
        r < i;
        r++
      ) {
        const s = n[r];
        let o = this.getDatasetMeta(r);
        const l = s.type || this.config.type;
        if (
          (o.type &&
            o.type !== l &&
            (this._destroyDatasetMeta(r), (o = this.getDatasetMeta(r))),
          (o.type = l),
          (o.indexAxis = s.indexAxis || Rf(l, this.options)),
          (o.order = s.order || 0),
          (o.index = r),
          (o.label = "" + s.label),
          (o.visible = this.isDatasetVisible(r)),
          o.controller)
        )
          o.controller.updateIndex(r), o.controller.linkScales();
        else {
          const c = In.getController(l),
            { datasetElementType: u, dataElementType: d } = ke.datasets[l];
          Object.assign(c, {
            dataElementType: In.getElement(d),
            datasetElementType: u && In.getElement(u),
          }),
            (o.controller = new c(this, r)),
            t.push(o.controller);
        }
      }
      return this._updateMetasets(), t;
    }
    _resetElements() {
      ue(
        this.data.datasets,
        (t, n) => {
          this.getDatasetMeta(n).controller.reset();
        },
        this
      );
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset");
    }
    update(t) {
      const n = this.config;
      n.update();
      const r = (this._options = n.createResolver(
          n.chartOptionScopes(),
          this.getContext()
        )),
        i = (this._animationsDisabled = !r.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
      )
        return;
      const s = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let o = 0;
      for (let u = 0, d = this.data.datasets.length; u < d; u++) {
        const { controller: h } = this.getDatasetMeta(u),
          f = !i && s.indexOf(h) === -1;
        h.buildOrUpdateElements(f), (o = Math.max(+h.getMaxOverflow(), o));
      }
      (o = this._minPadding = r.layout.autoPadding ? o : 0),
        this._updateLayout(o),
        i ||
          ue(s, (u) => {
            u.reset();
          }),
        this._updateDatasets(t),
        this.notifyPlugins("afterUpdate", { mode: t }),
        this._layers.sort(Pv("z", "_idx"));
      const { _active: l, _lastEvent: c } = this;
      c
        ? this._eventHandler(c, !0)
        : l.length && this._updateHoverStyles(l, l, !0),
        this.render();
    }
    _updateScales() {
      ue(this.scales, (t) => {
        Yt.removeBox(this, t);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const t = this.options,
        n = new Set(Object.keys(this._listeners)),
        r = new Set(t.events);
      (!$0(n, r) || !!this._responsiveListeners !== t.responsive) &&
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        n = this._getUniformDataChanges() || [];
      for (const { method: r, start: i, count: s } of n) {
        const o = r === "_removeElements" ? -s : s;
        rM(t, i, o);
      }
    }
    _getUniformDataChanges() {
      const t = this._dataChanges;
      if (!t || !t.length) return;
      this._dataChanges = [];
      const n = this.data.datasets.length,
        r = (s) =>
          new Set(
            t
              .filter((o) => o[0] === s)
              .map((o, l) => l + "," + o.splice(1).join(","))
          ),
        i = r(0);
      for (let s = 1; s < n; s++) if (!$0(i, r(s))) return;
      return Array.from(i)
        .map((s) => s.split(","))
        .map((s) => ({ method: s[1], start: +s[2], count: +s[3] }));
    }
    _updateLayout(t) {
      if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
      Yt.update(this, this.width, this.height, t);
      const n = this.chartArea,
        r = n.width <= 0 || n.height <= 0;
      (this._layers = []),
        ue(
          this.boxes,
          (i) => {
            (r && i.position === "chartArea") ||
              (i.configure && i.configure(), this._layers.push(...i._layers()));
          },
          this
        ),
        this._layers.forEach((i, s) => {
          i._idx = s;
        }),
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(t) {
      if (
        this.notifyPlugins("beforeDatasetsUpdate", {
          mode: t,
          cancelable: !0,
        }) !== !1
      ) {
        for (let n = 0, r = this.data.datasets.length; n < r; ++n)
          this.getDatasetMeta(n).controller.configure();
        for (let n = 0, r = this.data.datasets.length; n < r; ++n)
          this._updateDataset(n, Jr(t) ? t({ datasetIndex: n }) : t);
        this.notifyPlugins("afterDatasetsUpdate", { mode: t });
      }
    }
    _updateDataset(t, n) {
      const r = this.getDatasetMeta(t),
        i = { meta: r, index: t, mode: n, cancelable: !0 };
      this.notifyPlugins("beforeDatasetUpdate", i) !== !1 &&
        (r.controller._update(n),
        (i.cancelable = !1),
        this.notifyPlugins("afterDatasetUpdate", i));
    }
    render() {
      this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
        (Kn.has(this)
          ? this.attached && !Kn.running(this) && Kn.start(this)
          : (this.draw(), Iv({ chart: this })));
    }
    draw() {
      let t;
      if (this._resizeBeforeDraw) {
        const { width: r, height: i } = this._resizeBeforeDraw;
        this._resize(r, i), (this._resizeBeforeDraw = null);
      }
      if (
        (this.clear(),
        this.width <= 0 ||
          this.height <= 0 ||
          this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
      )
        return;
      const n = this._layers;
      for (t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(this.chartArea);
      for (this._drawDatasets(); t < n.length; ++t) n[t].draw(this.chartArea);
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(t) {
      const n = this._sortedMetasets,
        r = [];
      let i, s;
      for (i = 0, s = n.length; i < s; ++i) {
        const o = n[i];
        (!t || o.visible) && r.push(o);
      }
      return r;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
        return;
      const t = this.getSortedVisibleDatasetMetas();
      for (let n = t.length - 1; n >= 0; --n) this._drawDataset(t[n]);
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(t) {
      const n = this.ctx,
        r = t._clip,
        i = !r.disabled,
        s = sM(t, this.chartArea),
        o = { meta: t, index: t.index, cancelable: !0 };
      this.notifyPlugins("beforeDatasetDraw", o) !== !1 &&
        (i &&
          Kg(n, {
            left: r.left === !1 ? 0 : s.left - r.left,
            right: r.right === !1 ? this.width : s.right + r.right,
            top: r.top === !1 ? 0 : s.top - r.top,
            bottom: r.bottom === !1 ? this.height : s.bottom + r.bottom,
          }),
        t.controller.draw(),
        i && Qg(n),
        (o.cancelable = !1),
        this.notifyPlugins("afterDatasetDraw", o));
    }
    isPointInArea(t) {
      return ir(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, n, r, i) {
      const s = t5.modes[n];
      return typeof s == "function" ? s(this, t, r, i) : [];
    }
    getDatasetMeta(t) {
      const n = this.data.datasets[t],
        r = this._metasets;
      let i = r.filter((s) => s && s._dataset === n).pop();
      return (
        i ||
          ((i = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (n && n.order) || 0,
            index: t,
            _dataset: n,
            _parsed: [],
            _sorted: !1,
          }),
          r.push(i)),
        i
      );
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = oi(null, { chart: this, type: "chart" }))
      );
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
      const n = this.data.datasets[t];
      if (!n) return !1;
      const r = this.getDatasetMeta(t);
      return typeof r.hidden == "boolean" ? !r.hidden : !n.hidden;
    }
    setDatasetVisibility(t, n) {
      const r = this.getDatasetMeta(t);
      r.hidden = !n;
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t];
    }
    _updateVisibility(t, n, r) {
      const i = r ? "show" : "hide",
        s = this.getDatasetMeta(t),
        o = s.controller._resolveAnimations(void 0, i);
      da(n)
        ? ((s.data[n].hidden = !r), this.update())
        : (this.setDatasetVisibility(t, r),
          o.update(s, { visible: r }),
          this.update((l) => (l.datasetIndex === t ? i : void 0)));
    }
    hide(t, n) {
      this._updateVisibility(t, n, !1);
    }
    show(t, n) {
      this._updateVisibility(t, n, !0);
    }
    _destroyDatasetMeta(t) {
      const n = this._metasets[t];
      n && n.controller && n.controller._destroy(), delete this._metasets[t];
    }
    _stop() {
      let t, n;
      for (
        this.stop(), Kn.remove(this), t = 0, n = this.data.datasets.length;
        t < n;
        ++t
      )
        this._destroyDatasetMeta(t);
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas: t, ctx: n } = this;
      this._stop(),
        this.config.clearCache(),
        t &&
          (this.unbindEvents(),
          K0(t, n),
          this.platform.releaseContext(n),
          (this.canvas = null),
          (this.ctx = null)),
        delete Jl[this.id],
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...t) {
      return this.canvas.toDataURL(...t);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0);
    }
    bindUserEvents() {
      const t = this._listeners,
        n = this.platform,
        r = (s, o) => {
          n.addEventListener(this, s, o), (t[s] = o);
        },
        i = (s, o, l) => {
          (s.offsetX = o), (s.offsetY = l), this._eventHandler(s);
        };
      ue(this.options.events, (s) => r(s, i));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const t = this._responsiveListeners,
        n = this.platform,
        r = (c, u) => {
          n.addEventListener(this, c, u), (t[c] = u);
        },
        i = (c, u) => {
          t[c] && (n.removeEventListener(this, c, u), delete t[c]);
        },
        s = (c, u) => {
          this.canvas && this.resize(c, u);
        };
      let o;
      const l = () => {
        i("attach", l),
          (this.attached = !0),
          this.resize(),
          r("resize", s),
          r("detach", o);
      };
      (o = () => {
        (this.attached = !1),
          i("resize", s),
          this._stop(),
          this._resize(0, 0),
          r("attach", l);
      }),
        n.isAttached(this.canvas) ? l() : o();
    }
    unbindEvents() {
      ue(this._listeners, (t, n) => {
        this.platform.removeEventListener(this, n, t);
      }),
        (this._listeners = {}),
        ue(this._responsiveListeners, (t, n) => {
          this.platform.removeEventListener(this, n, t);
        }),
        (this._responsiveListeners = void 0);
    }
    updateHoverStyle(t, n, r) {
      const i = r ? "set" : "remove";
      let s, o, l, c;
      for (
        n === "dataset" &&
          ((s = this.getDatasetMeta(t[0].datasetIndex)),
          s.controller["_" + i + "DatasetHoverStyle"]()),
          l = 0,
          c = t.length;
        l < c;
        ++l
      ) {
        o = t[l];
        const u = o && this.getDatasetMeta(o.datasetIndex).controller;
        u && u[i + "HoverStyle"](o.element, o.datasetIndex, o.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t) {
      const n = this._active || [],
        r = t.map(({ datasetIndex: s, index: o }) => {
          const l = this.getDatasetMeta(s);
          if (!l) throw new Error("No dataset found at index " + s);
          return { datasetIndex: s, element: l.data[o], index: o };
        });
      !Wc(r, n) &&
        ((this._active = r),
        (this._lastEvent = null),
        this._updateHoverStyles(r, n));
    }
    notifyPlugins(t, n, r) {
      return this._plugins.notify(this, t, n, r);
    }
    isPluginEnabled(t) {
      return this._plugins._cache.filter((n) => n.plugin.id === t).length === 1;
    }
    _updateHoverStyles(t, n, r) {
      const i = this.options.hover,
        s = (c, u) =>
          c.filter(
            (d) =>
              !u.some(
                (h) => d.datasetIndex === h.datasetIndex && d.index === h.index
              )
          ),
        o = s(n, t),
        l = r ? t : s(t, n);
      o.length && this.updateHoverStyle(o, i.mode, !1),
        l.length && i.mode && this.updateHoverStyle(l, i.mode, !0);
    }
    _eventHandler(t, n) {
      const r = {
          event: t,
          replay: n,
          cancelable: !0,
          inChartArea: this.isPointInArea(t),
        },
        i = (o) =>
          (o.options.events || this.options.events).includes(t.native.type);
      if (this.notifyPlugins("beforeEvent", r, i) === !1) return;
      const s = this._handleEvent(t, n, r.inChartArea);
      return (
        (r.cancelable = !1),
        this.notifyPlugins("afterEvent", r, i),
        (s || r.changed) && this.render(),
        this
      );
    }
    _handleEvent(t, n, r) {
      const { _active: i = [], options: s } = this,
        o = n,
        l = this._getActiveElements(t, i, r, o),
        c = u4(t),
        u = iM(t, this._lastEvent, r, c);
      r &&
        ((this._lastEvent = null),
        fe(s.onHover, [t, l, this], this),
        c && fe(s.onClick, [t, l, this], this));
      const d = !Wc(l, i);
      return (
        (d || n) && ((this._active = l), this._updateHoverStyles(l, i, n)),
        (this._lastEvent = u),
        d
      );
    }
    _getActiveElements(t, n, r, i) {
      if (t.type === "mouseout") return [];
      if (!r) return n;
      const s = this.options.hover;
      return this.getElementsAtEventForMode(t, s.mode, s, i);
    }
  }),
  W(Cr, "defaults", ke),
  W(Cr, "instances", Jl),
  W(Cr, "overrides", Ri),
  W(Cr, "registry", In),
  W(Cr, "version", eM),
  W(Cr, "getChart", Nv),
  Cr);
function Av() {
  return ue(Ta.instances, (e) => e._plugins.invalidate());
}
function wS(e, t, n = t) {
  (e.lineCap = J(n.borderCapStyle, t.borderCapStyle)),
    e.setLineDash(J(n.borderDash, t.borderDash)),
    (e.lineDashOffset = J(n.borderDashOffset, t.borderDashOffset)),
    (e.lineJoin = J(n.borderJoinStyle, t.borderJoinStyle)),
    (e.lineWidth = J(n.borderWidth, t.borderWidth)),
    (e.strokeStyle = J(n.borderColor, t.borderColor));
}
function oM(e, t, n) {
  e.lineTo(n.x, n.y);
}
function aM(e) {
  return e.stepped
    ? M4
    : e.tension || e.cubicInterpolationMode === "monotone"
    ? L4
    : oM;
}
function SS(e, t, n = {}) {
  const r = e.length,
    { start: i = 0, end: s = r - 1 } = n,
    { start: o, end: l } = t,
    c = Math.max(i, o),
    u = Math.min(s, l),
    d = (i < o && s < o) || (i > l && s > l);
  return {
    count: r,
    start: c,
    loop: t.loop,
    ilen: u < c && !d ? r + u - c : u - c,
  };
}
function lM(e, t, n, r) {
  const { points: i, options: s } = t,
    { count: o, start: l, loop: c, ilen: u } = SS(i, n, r),
    d = aM(s);
  let { move: h = !0, reverse: f } = r || {},
    m,
    p,
    g;
  for (m = 0; m <= u; ++m)
    (p = i[(l + (f ? u - m : m)) % o]),
      !p.skip &&
        (h ? (e.moveTo(p.x, p.y), (h = !1)) : d(e, g, p, f, s.stepped),
        (g = p));
  return c && ((p = i[(l + (f ? u : 0)) % o]), d(e, g, p, f, s.stepped)), !!c;
}
function cM(e, t, n, r) {
  const i = t.points,
    { count: s, start: o, ilen: l } = SS(i, n, r),
    { move: c = !0, reverse: u } = r || {};
  let d = 0,
    h = 0,
    f,
    m,
    p,
    g,
    y,
    x;
  const v = (S) => (o + (u ? l - S : S)) % s,
    b = () => {
      g !== y && (e.lineTo(d, y), e.lineTo(d, g), e.lineTo(d, x));
    };
  for (c && ((m = i[v(0)]), e.moveTo(m.x, m.y)), f = 0; f <= l; ++f) {
    if (((m = i[v(f)]), m.skip)) continue;
    const S = m.x,
      C = m.y,
      k = S | 0;
    k === p
      ? (C < g ? (g = C) : C > y && (y = C), (d = (h * d + S) / ++h))
      : (b(), e.lineTo(S, C), (p = k), (h = 0), (g = y = C)),
      (x = C);
  }
  b();
}
function zf(e) {
  const t = e.options,
    n = t.borderDash && t.borderDash.length;
  return !e._decimated &&
    !e._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== "monotone" &&
    !t.stepped &&
    !n
    ? cM
    : lM;
}
function uM(e) {
  return e.stepped
    ? pD
    : e.tension || e.cubicInterpolationMode === "monotone"
    ? gD
    : gi;
}
function dM(e, t, n, r) {
  let i = t._path;
  i || ((i = t._path = new Path2D()), t.path(i, n, r) && i.closePath()),
    wS(e, t.options),
    e.stroke(i);
}
function hM(e, t, n, r) {
  const { segments: i, options: s } = t,
    o = zf(t);
  for (const l of i)
    wS(e, s, l.style),
      e.beginPath(),
      o(e, t, l, { start: n, end: n + r - 1 }) && e.closePath(),
      e.stroke();
}
const fM = typeof Path2D == "function";
function pM(e, t, n, r) {
  fM && !t.options.segment ? dM(e, t, n, r) : hM(e, t, n, r);
}
class xo extends $n {
  constructor(t) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t);
  }
  updateControlPoints(t, n) {
    const r = this.options;
    if (
      (r.tension || r.cubicInterpolationMode === "monotone") &&
      !r.stepped &&
      !this._pointsUpdated
    ) {
      const i = r.spanGaps ? this._loop : this._fullLoop;
      oD(this._points, r, t, i, n), (this._pointsUpdated = !0);
    }
  }
  set points(t) {
    (this._points = t),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = SD(this, this.options.segment));
  }
  first() {
    const t = this.segments,
      n = this.points;
    return t.length && n[t[0].start];
  }
  last() {
    const t = this.segments,
      n = this.points,
      r = t.length;
    return r && n[t[r - 1].end];
  }
  interpolate(t, n) {
    const r = this.options,
      i = t[n],
      s = this.points,
      o = bD(this, { property: n, start: i, end: i });
    if (!o.length) return;
    const l = [],
      c = uM(r);
    let u, d;
    for (u = 0, d = o.length; u < d; ++u) {
      const { start: h, end: f } = o[u],
        m = s[h],
        p = s[f];
      if (m === p) {
        l.push(m);
        continue;
      }
      const g = Math.abs((i - m[n]) / (p[n] - m[n])),
        y = c(m, p, g, r.stepped);
      (y[n] = t[n]), l.push(y);
    }
    return l.length === 1 ? l[0] : l;
  }
  pathSegment(t, n, r) {
    return zf(this)(t, this, n, r);
  }
  path(t, n, r) {
    const i = this.segments,
      s = zf(this);
    let o = this._loop;
    (n = n || 0), (r = r || this.points.length - n);
    for (const l of i) o &= s(t, this, l, { start: n, end: n + r - 1 });
    return !!o;
  }
  draw(t, n, r, i) {
    const s = this.options || {};
    (this.points || []).length &&
      s.borderWidth &&
      (t.save(), pM(t, this, r, i), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
W(xo, "id", "line"),
  W(xo, "defaults", {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  W(xo, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  }),
  W(xo, "descriptors", {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash" && t !== "fill",
  });
function Tv(e, t, n, r) {
  const i = e.options,
    { [n]: s } = e.getProps([n], r);
  return Math.abs(t - s) < i.radius + i.hitRadius;
}
class Zl extends $n {
  constructor(n) {
    super();
    W(this, "parsed");
    W(this, "skip");
    W(this, "stop");
    (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      n && Object.assign(this, n);
  }
  inRange(n, r, i) {
    const s = this.options,
      { x: o, y: l } = this.getProps(["x", "y"], i);
    return (
      Math.pow(n - o, 2) + Math.pow(r - l, 2) <
      Math.pow(s.hitRadius + s.radius, 2)
    );
  }
  inXRange(n, r) {
    return Tv(this, n, "x", r);
  }
  inYRange(n, r) {
    return Tv(this, n, "y", r);
  }
  getCenterPoint(n) {
    const { x: r, y: i } = this.getProps(["x", "y"], n);
    return { x: r, y: i };
  }
  size(n) {
    n = n || this.options || {};
    let r = n.radius || 0;
    r = Math.max(r, (r && n.hoverRadius) || 0);
    const i = (r && n.borderWidth) || 0;
    return (r + i) * 2;
  }
  draw(n, r) {
    const i = this.options;
    this.skip ||
      i.radius < 0.1 ||
      !ir(this, r, this.size(i) / 2) ||
      ((n.strokeStyle = i.borderColor),
      (n.lineWidth = i.borderWidth),
      (n.fillStyle = i.backgroundColor),
      Lf(n, i, this.x, this.y));
  }
  getRange() {
    const n = this.options || {};
    return n.radius + n.hitRadius;
  }
}
W(Zl, "id", "point"),
  W(Zl, "defaults", {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  }),
  W(Zl, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
function CS(e, t) {
  const {
    x: n,
    y: r,
    base: i,
    width: s,
    height: o,
  } = e.getProps(["x", "y", "base", "width", "height"], t);
  let l, c, u, d, h;
  return (
    e.horizontal
      ? ((h = o / 2),
        (l = Math.min(n, i)),
        (c = Math.max(n, i)),
        (u = r - h),
        (d = r + h))
      : ((h = s / 2),
        (l = n - h),
        (c = n + h),
        (u = Math.min(r, i)),
        (d = Math.max(r, i))),
    { left: l, top: u, right: c, bottom: d }
  );
}
function zr(e, t, n, r) {
  return e ? 0 : Pt(t, n, r);
}
function gM(e, t, n) {
  const r = e.options.borderWidth,
    i = e.borderSkipped,
    s = tS(r);
  return {
    t: zr(i.top, s.top, 0, n),
    r: zr(i.right, s.right, 0, t),
    b: zr(i.bottom, s.bottom, 0, n),
    l: zr(i.left, s.left, 0, t),
  };
}
function mM(e, t, n) {
  const { enableBorderRadius: r } = e.getProps(["enableBorderRadius"]),
    i = e.options.borderRadius,
    s = Ni(i),
    o = Math.min(t, n),
    l = e.borderSkipped,
    c = r || oe(i);
  return {
    topLeft: zr(!c || l.top || l.left, s.topLeft, 0, o),
    topRight: zr(!c || l.top || l.right, s.topRight, 0, o),
    bottomLeft: zr(!c || l.bottom || l.left, s.bottomLeft, 0, o),
    bottomRight: zr(!c || l.bottom || l.right, s.bottomRight, 0, o),
  };
}
function xM(e) {
  const t = CS(e),
    n = t.right - t.left,
    r = t.bottom - t.top,
    i = gM(e, n / 2, r / 2),
    s = mM(e, n / 2, r / 2);
  return {
    outer: { x: t.left, y: t.top, w: n, h: r, radius: s },
    inner: {
      x: t.left + i.l,
      y: t.top + i.t,
      w: n - i.l - i.r,
      h: r - i.t - i.b,
      radius: {
        topLeft: Math.max(0, s.topLeft - Math.max(i.t, i.l)),
        topRight: Math.max(0, s.topRight - Math.max(i.t, i.r)),
        bottomLeft: Math.max(0, s.bottomLeft - Math.max(i.b, i.l)),
        bottomRight: Math.max(0, s.bottomRight - Math.max(i.b, i.r)),
      },
    },
  };
}
function sh(e, t, n, r) {
  const i = t === null,
    s = n === null,
    l = e && !(i && s) && CS(e, r);
  return l && (i || ji(t, l.left, l.right)) && (s || ji(n, l.top, l.bottom));
}
function vM(e) {
  return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight;
}
function yM(e, t) {
  e.rect(t.x, t.y, t.w, t.h);
}
function oh(e, t, n = {}) {
  const r = e.x !== n.x ? -t : 0,
    i = e.y !== n.y ? -t : 0,
    s = (e.x + e.w !== n.x + n.w ? t : 0) - r,
    o = (e.y + e.h !== n.y + n.h ? t : 0) - i;
  return { x: e.x + r, y: e.y + i, w: e.w + s, h: e.h + o, radius: e.radius };
}
class ec extends $n {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t);
  }
  draw(t) {
    const {
        inflateAmount: n,
        options: { borderColor: r, backgroundColor: i },
      } = this,
      { inner: s, outer: o } = xM(this),
      l = vM(o.radius) ? fa : yM;
    t.save(),
      (o.w !== s.w || o.h !== s.h) &&
        (t.beginPath(),
        l(t, oh(o, n, s)),
        t.clip(),
        l(t, oh(s, -n, o)),
        (t.fillStyle = r),
        t.fill("evenodd")),
      t.beginPath(),
      l(t, oh(s, n)),
      (t.fillStyle = i),
      t.fill(),
      t.restore();
  }
  inRange(t, n, r) {
    return sh(this, t, n, r);
  }
  inXRange(t, n) {
    return sh(this, t, null, n);
  }
  inYRange(t, n) {
    return sh(this, null, t, n);
  }
  getCenterPoint(t) {
    const {
      x: n,
      y: r,
      base: i,
      horizontal: s,
    } = this.getProps(["x", "y", "base", "horizontal"], t);
    return { x: s ? (n + i) / 2 : n, y: s ? r : (r + i) / 2 };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
W(ec, "id", "bar"),
  W(ec, "defaults", {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0,
  }),
  W(ec, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
const Ov = (e, t) => {
    let { boxHeight: n = t, boxWidth: r = t } = e;
    return (
      e.usePointStyle &&
        ((n = Math.min(n, t)), (r = e.pointStyleWidth || Math.min(r, t))),
      { boxWidth: r, boxHeight: n, itemHeight: Math.max(t, n) }
    );
  },
  bM = (e, t) =>
    e !== null &&
    t !== null &&
    e.datasetIndex === t.datasetIndex &&
    e.index === t.index;
class Dv extends $n {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, n, r) {
    (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = r),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let n = fe(t.generateLabels, [this.chart], this) || [];
    t.filter && (n = n.filter((r) => t.filter(r, this.chart.data))),
      t.sort && (n = n.sort((r, i) => t.sort(r, i, this.chart.data))),
      this.options.reverse && n.reverse(),
      (this.legendItems = n);
  }
  fit() {
    const { options: t, ctx: n } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const r = t.labels,
      i = ze(r.font),
      s = i.size,
      o = this._computeTitleHeight(),
      { boxWidth: l, itemHeight: c } = Ov(r, s);
    let u, d;
    (n.font = i.string),
      this.isHorizontal()
        ? ((u = this.maxWidth), (d = this._fitRows(o, s, l, c) + 10))
        : ((d = this.maxHeight), (u = this._fitCols(o, i, l, c) + 10)),
      (this.width = Math.min(u, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(d, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, n, r, i) {
    const {
        ctx: s,
        maxWidth: o,
        options: {
          labels: { padding: l },
        },
      } = this,
      c = (this.legendHitBoxes = []),
      u = (this.lineWidths = [0]),
      d = i + l;
    let h = t;
    (s.textAlign = "left"), (s.textBaseline = "middle");
    let f = -1,
      m = -d;
    return (
      this.legendItems.forEach((p, g) => {
        const y = r + n / 2 + s.measureText(p.text).width;
        (g === 0 || u[u.length - 1] + y + 2 * l > o) &&
          ((h += d), (u[u.length - (g > 0 ? 0 : 1)] = 0), (m += d), f++),
          (c[g] = { left: 0, top: m, row: f, width: y, height: i }),
          (u[u.length - 1] += y + l);
      }),
      h
    );
  }
  _fitCols(t, n, r, i) {
    const {
        ctx: s,
        maxHeight: o,
        options: {
          labels: { padding: l },
        },
      } = this,
      c = (this.legendHitBoxes = []),
      u = (this.columnSizes = []),
      d = o - t;
    let h = l,
      f = 0,
      m = 0,
      p = 0,
      g = 0;
    return (
      this.legendItems.forEach((y, x) => {
        const { itemWidth: v, itemHeight: b } = jM(r, n, s, y, i);
        x > 0 &&
          m + b + 2 * l > d &&
          ((h += f + l),
          u.push({ width: f, height: m }),
          (p += f + l),
          g++,
          (f = m = 0)),
          (c[x] = { left: p, top: m, col: g, width: v, height: b }),
          (f = Math.max(f, v)),
          (m += b + l);
      }),
      (h += f),
      u.push({ width: f, height: m }),
      h
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: n,
        options: {
          align: r,
          labels: { padding: i },
          rtl: s,
        },
      } = this,
      o = ys(s, this.left, this.width);
    if (this.isHorizontal()) {
      let l = 0,
        c = Qe(r, this.left + i, this.right - this.lineWidths[l]);
      for (const u of n)
        l !== u.row &&
          ((l = u.row),
          (c = Qe(r, this.left + i, this.right - this.lineWidths[l]))),
          (u.top += this.top + t + i),
          (u.left = o.leftForLtr(o.x(c), u.width)),
          (c += u.width + i);
    } else {
      let l = 0,
        c = Qe(r, this.top + t + i, this.bottom - this.columnSizes[l].height);
      for (const u of n)
        u.col !== l &&
          ((l = u.col),
          (c = Qe(
            r,
            this.top + t + i,
            this.bottom - this.columnSizes[l].height
          ))),
          (u.top = c),
          (u.left += this.left + i),
          (u.left = o.leftForLtr(o.x(u.left), u.width)),
          (c += u.height + i);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Kg(t, this), this._draw(), Qg(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: r, ctx: i } = this,
      { align: s, labels: o } = t,
      l = ke.color,
      c = ys(t.rtl, this.left, this.width),
      u = ze(o.font),
      { padding: d } = o,
      h = u.size,
      f = h / 2;
    let m;
    this.drawTitle(),
      (i.textAlign = c.textAlign("left")),
      (i.textBaseline = "middle"),
      (i.lineWidth = 0.5),
      (i.font = u.string);
    const { boxWidth: p, boxHeight: g, itemHeight: y } = Ov(o, h),
      x = function (k, _, E) {
        if (isNaN(p) || p <= 0 || isNaN(g) || g < 0) return;
        i.save();
        const I = J(E.lineWidth, 1);
        if (
          ((i.fillStyle = J(E.fillStyle, l)),
          (i.lineCap = J(E.lineCap, "butt")),
          (i.lineDashOffset = J(E.lineDashOffset, 0)),
          (i.lineJoin = J(E.lineJoin, "miter")),
          (i.lineWidth = I),
          (i.strokeStyle = J(E.strokeStyle, l)),
          i.setLineDash(J(E.lineDash, [])),
          o.usePointStyle)
        ) {
          const N = {
              radius: (g * Math.SQRT2) / 2,
              pointStyle: E.pointStyle,
              rotation: E.rotation,
              borderWidth: I,
            },
            R = c.xPlus(k, p / 2),
            z = _ + f;
          Zw(i, N, R, z, o.pointStyleWidth && p);
        } else {
          const N = _ + Math.max((h - g) / 2, 0),
            R = c.leftForLtr(k, p),
            z = Ni(E.borderRadius);
          i.beginPath(),
            Object.values(z).some((ee) => ee !== 0)
              ? fa(i, { x: R, y: N, w: p, h: g, radius: z })
              : i.rect(R, N, p, g),
            i.fill(),
            I !== 0 && i.stroke();
        }
        i.restore();
      },
      v = function (k, _, E) {
        Fi(i, E.text, k, _ + y / 2, u, {
          strikethrough: E.hidden,
          textAlign: c.textAlign(E.textAlign),
        });
      },
      b = this.isHorizontal(),
      S = this._computeTitleHeight();
    b
      ? (m = {
          x: Qe(s, this.left + d, this.right - r[0]),
          y: this.top + d + S,
          line: 0,
        })
      : (m = {
          x: this.left + d,
          y: Qe(s, this.top + S + d, this.bottom - n[0].height),
          line: 0,
        }),
      aS(this.ctx, t.textDirection);
    const C = y + d;
    this.legendItems.forEach((k, _) => {
      (i.strokeStyle = k.fontColor), (i.fillStyle = k.fontColor);
      const E = i.measureText(k.text).width,
        I = c.textAlign(k.textAlign || (k.textAlign = o.textAlign)),
        N = p + f + E;
      let R = m.x,
        z = m.y;
      c.setWidth(this.width),
        b
          ? _ > 0 &&
            R + N + d > this.right &&
            ((z = m.y += C),
            m.line++,
            (R = m.x = Qe(s, this.left + d, this.right - r[m.line])))
          : _ > 0 &&
            z + C > this.bottom &&
            ((R = m.x = R + n[m.line].width + d),
            m.line++,
            (z = m.y =
              Qe(s, this.top + S + d, this.bottom - n[m.line].height)));
      const ee = c.x(R);
      if (
        (x(ee, z, k),
        (R = w4(I, R + p + f, b ? R + N : this.right, t.rtl)),
        v(c.x(R), z, k),
        b)
      )
        m.x += N + d;
      else if (typeof k.text != "string") {
        const ae = u.lineHeight;
        m.y += _S(k, ae) + d;
      } else m.y += C;
    }),
      lS(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      n = t.title,
      r = ze(n.font),
      i = Ze(n.padding);
    if (!n.display) return;
    const s = ys(t.rtl, this.left, this.width),
      o = this.ctx,
      l = n.position,
      c = r.size / 2,
      u = i.top + c;
    let d,
      h = this.left,
      f = this.width;
    if (this.isHorizontal())
      (f = Math.max(...this.lineWidths)),
        (d = this.top + u),
        (h = Qe(t.align, h, this.right - f));
    else {
      const p = this.columnSizes.reduce((g, y) => Math.max(g, y.height), 0);
      d =
        u +
        Qe(
          t.align,
          this.top,
          this.bottom - p - t.labels.padding - this._computeTitleHeight()
        );
    }
    const m = Qe(l, h, h + f);
    (o.textAlign = s.textAlign(Gg(l))),
      (o.textBaseline = "middle"),
      (o.strokeStyle = n.color),
      (o.fillStyle = n.color),
      (o.font = r.string),
      Fi(o, n.text, m, d, r);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      n = ze(t.font),
      r = Ze(t.padding);
    return t.display ? n.lineHeight + r.height : 0;
  }
  _getLegendItemAt(t, n) {
    let r, i, s;
    if (ji(t, this.left, this.right) && ji(n, this.top, this.bottom)) {
      for (s = this.legendHitBoxes, r = 0; r < s.length; ++r)
        if (
          ((i = s[r]),
          ji(t, i.left, i.left + i.width) && ji(n, i.top, i.top + i.height))
        )
          return this.legendItems[r];
    }
    return null;
  }
  handleEvent(t) {
    const n = this.options;
    if (!CM(t.type, n)) return;
    const r = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const i = this._hoveredItem,
        s = bM(i, r);
      i && !s && fe(n.onLeave, [t, i, this], this),
        (this._hoveredItem = r),
        r && !s && fe(n.onHover, [t, r, this], this);
    } else r && fe(n.onClick, [t, r, this], this);
  }
}
function jM(e, t, n, r, i) {
  const s = wM(r, e, t, n),
    o = SM(i, r, t.lineHeight);
  return { itemWidth: s, itemHeight: o };
}
function wM(e, t, n, r) {
  let i = e.text;
  return (
    i &&
      typeof i != "string" &&
      (i = i.reduce((s, o) => (s.length > o.length ? s : o))),
    t + n.size / 2 + r.measureText(i).width
  );
}
function SM(e, t, n) {
  let r = e;
  return typeof t.text != "string" && (r = _S(t, n)), r;
}
function _S(e, t) {
  const n = e.text ? e.text.length : 0;
  return t * n;
}
function CM(e, t) {
  return !!(
    ((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave)) ||
    (t.onClick && (e === "click" || e === "mouseup"))
  );
}
var ES = {
  id: "legend",
  _element: Dv,
  start(e, t, n) {
    const r = (e.legend = new Dv({ ctx: e.ctx, options: n, chart: e }));
    Yt.configure(e, r, n), Yt.addBox(e, r);
  },
  stop(e) {
    Yt.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, n) {
    const r = e.legend;
    Yt.configure(e, r, n), (r.options = n);
  },
  afterUpdate(e) {
    const t = e.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, n) {
      const r = t.datasetIndex,
        i = n.chart;
      i.isDatasetVisible(r)
        ? (i.hide(r), (t.hidden = !0))
        : (i.show(r), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets,
          {
            labels: {
              usePointStyle: n,
              pointStyle: r,
              textAlign: i,
              color: s,
              useBorderRadius: o,
              borderRadius: l,
            },
          } = e.legend.options;
        return e._getSortedDatasetMetas().map((c) => {
          const u = c.controller.getStyle(n ? 0 : void 0),
            d = Ze(u.borderWidth);
          return {
            text: t[c.index].label,
            fillStyle: u.backgroundColor,
            fontColor: s,
            hidden: !c.visible,
            lineCap: u.borderCapStyle,
            lineDash: u.borderDash,
            lineDashOffset: u.borderDashOffset,
            lineJoin: u.borderJoinStyle,
            lineWidth: (d.width + d.height) / 4,
            strokeStyle: u.borderColor,
            pointStyle: r || u.pointStyle,
            rotation: u.rotation,
            textAlign: i || u.textAlign,
            borderRadius: o && (l || u.borderRadius),
            datasetIndex: c.index,
          };
        }, this);
      },
    },
    title: {
      color: (e) => e.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (e) => !e.startsWith("on"),
    labels: {
      _scriptable: (e) => !["generateLabels", "filter", "sort"].includes(e),
    },
  },
};
class kS extends $n {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, n) {
    const r = this.options;
    if (((this.left = 0), (this.top = 0), !r.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = t), (this.height = this.bottom = n);
    const i = we(r.text) ? r.text.length : 1;
    this._padding = Ze(r.padding);
    const s = i * ze(r.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = s) : (this.width = s);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: n, left: r, bottom: i, right: s, options: o } = this,
      l = o.align;
    let c = 0,
      u,
      d,
      h;
    return (
      this.isHorizontal()
        ? ((d = Qe(l, r, s)), (h = n + t), (u = s - r))
        : (o.position === "left"
            ? ((d = r + t), (h = Qe(l, i, n)), (c = Me * -0.5))
            : ((d = s - t), (h = Qe(l, n, i)), (c = Me * 0.5)),
          (u = i - n)),
      { titleX: d, titleY: h, maxWidth: u, rotation: c }
    );
  }
  draw() {
    const t = this.ctx,
      n = this.options;
    if (!n.display) return;
    const r = ze(n.font),
      s = r.lineHeight / 2 + this._padding.top,
      { titleX: o, titleY: l, maxWidth: c, rotation: u } = this._drawArgs(s);
    Fi(t, n.text, 0, 0, r, {
      color: n.color,
      maxWidth: c,
      rotation: u,
      textAlign: Gg(n.align),
      textBaseline: "middle",
      translation: [o, l],
    });
  }
}
function _M(e, t) {
  const n = new kS({ ctx: e.ctx, options: t, chart: e });
  Yt.configure(e, n, t), Yt.addBox(e, n), (e.titleBlock = n);
}
var PS = {
  id: "title",
  _element: kS,
  start(e, t, n) {
    _M(e, n);
  },
  stop(e) {
    const t = e.titleBlock;
    Yt.removeBox(e, t), delete e.titleBlock;
  },
  beforeUpdate(e, t, n) {
    const r = e.titleBlock;
    Yt.configure(e, r, n), (r.options = n);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const vo = {
  average(e) {
    if (!e.length) return !1;
    let t,
      n,
      r = new Set(),
      i = 0,
      s = 0;
    for (t = 0, n = e.length; t < n; ++t) {
      const l = e[t].element;
      if (l && l.hasValue()) {
        const c = l.tooltipPosition();
        r.add(c.x), (i += c.y), ++s;
      }
    }
    return { x: [...r].reduce((l, c) => l + c) / r.size, y: i / s };
  },
  nearest(e, t) {
    if (!e.length) return !1;
    let n = t.x,
      r = t.y,
      i = Number.POSITIVE_INFINITY,
      s,
      o,
      l;
    for (s = 0, o = e.length; s < o; ++s) {
      const c = e[s].element;
      if (c && c.hasValue()) {
        const u = c.getCenterPoint(),
          d = Df(t, u);
        d < i && ((i = d), (l = c));
      }
    }
    if (l) {
      const c = l.tooltipPosition();
      (n = c.x), (r = c.y);
    }
    return { x: n, y: r };
  },
};
function kn(e, t) {
  return t && (we(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function Qn(e) {
  return (typeof e == "string" || e instanceof String) &&
    e.indexOf(`
`) > -1
    ? e.split(`
`)
    : e;
}
function EM(e, t) {
  const { element: n, datasetIndex: r, index: i } = t,
    s = e.getDatasetMeta(r).controller,
    { label: o, value: l } = s.getLabelAndValue(i);
  return {
    chart: e,
    label: o,
    parsed: s.getParsed(i),
    raw: e.data.datasets[r].data[i],
    formattedValue: l,
    dataset: s.getDataset(),
    dataIndex: i,
    datasetIndex: r,
    element: n,
  };
}
function Mv(e, t) {
  const n = e.chart.ctx,
    { body: r, footer: i, title: s } = e,
    { boxWidth: o, boxHeight: l } = t,
    c = ze(t.bodyFont),
    u = ze(t.titleFont),
    d = ze(t.footerFont),
    h = s.length,
    f = i.length,
    m = r.length,
    p = Ze(t.padding);
  let g = p.height,
    y = 0,
    x = r.reduce(
      (S, C) => S + C.before.length + C.lines.length + C.after.length,
      0
    );
  if (
    ((x += e.beforeBody.length + e.afterBody.length),
    h &&
      (g += h * u.lineHeight + (h - 1) * t.titleSpacing + t.titleMarginBottom),
    x)
  ) {
    const S = t.displayColors ? Math.max(l, c.lineHeight) : c.lineHeight;
    g += m * S + (x - m) * c.lineHeight + (x - 1) * t.bodySpacing;
  }
  f && (g += t.footerMarginTop + f * d.lineHeight + (f - 1) * t.footerSpacing);
  let v = 0;
  const b = function (S) {
    y = Math.max(y, n.measureText(S).width + v);
  };
  return (
    n.save(),
    (n.font = u.string),
    ue(e.title, b),
    (n.font = c.string),
    ue(e.beforeBody.concat(e.afterBody), b),
    (v = t.displayColors ? o + 2 + t.boxPadding : 0),
    ue(r, (S) => {
      ue(S.before, b), ue(S.lines, b), ue(S.after, b);
    }),
    (v = 0),
    (n.font = d.string),
    ue(e.footer, b),
    n.restore(),
    (y += p.width),
    { width: y, height: g }
  );
}
function kM(e, t) {
  const { y: n, height: r } = t;
  return n < r / 2 ? "top" : n > e.height - r / 2 ? "bottom" : "center";
}
function PM(e, t, n, r) {
  const { x: i, width: s } = r,
    o = n.caretSize + n.caretPadding;
  if ((e === "left" && i + s + o > t.width) || (e === "right" && i - s - o < 0))
    return !0;
}
function IM(e, t, n, r) {
  const { x: i, width: s } = n,
    {
      width: o,
      chartArea: { left: l, right: c },
    } = e;
  let u = "center";
  return (
    r === "center"
      ? (u = i <= (l + c) / 2 ? "left" : "right")
      : i <= s / 2
      ? (u = "left")
      : i >= o - s / 2 && (u = "right"),
    PM(u, e, t, n) && (u = "center"),
    u
  );
}
function Lv(e, t, n) {
  const r = n.yAlign || t.yAlign || kM(e, n);
  return { xAlign: n.xAlign || t.xAlign || IM(e, t, n, r), yAlign: r };
}
function NM(e, t) {
  let { x: n, width: r } = e;
  return t === "right" ? (n -= r) : t === "center" && (n -= r / 2), n;
}
function AM(e, t, n) {
  let { y: r, height: i } = e;
  return (
    t === "top" ? (r += n) : t === "bottom" ? (r -= i + n) : (r -= i / 2), r
  );
}
function Rv(e, t, n, r) {
  const { caretSize: i, caretPadding: s, cornerRadius: o } = e,
    { xAlign: l, yAlign: c } = n,
    u = i + s,
    { topLeft: d, topRight: h, bottomLeft: f, bottomRight: m } = Ni(o);
  let p = NM(t, l);
  const g = AM(t, c, u);
  return (
    c === "center"
      ? l === "left"
        ? (p += u)
        : l === "right" && (p -= u)
      : l === "left"
      ? (p -= Math.max(d, f) + i)
      : l === "right" && (p += Math.max(h, m) + i),
    { x: Pt(p, 0, r.width - t.width), y: Pt(g, 0, r.height - t.height) }
  );
}
function _l(e, t, n) {
  const r = Ze(n.padding);
  return t === "center"
    ? e.x + e.width / 2
    : t === "right"
    ? e.x + e.width - r.right
    : e.x + r.left;
}
function Fv(e) {
  return kn([], Qn(e));
}
function TM(e, t, n) {
  return oi(e, { tooltip: t, tooltipItems: n, type: "tooltip" });
}
function zv(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return n ? e.override(n) : e;
}
const IS = {
  beforeTitle: qn,
  title(e) {
    if (e.length > 0) {
      const t = e[0],
        n = t.chart.data.labels,
        r = n ? n.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label) return t.label;
      if (r > 0 && t.dataIndex < r) return n[t.dataIndex];
    }
    return "";
  },
  afterTitle: qn,
  beforeBody: qn,
  beforeLabel: qn,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue;
    let t = e.dataset.label || "";
    t && (t += ": ");
    const n = e.formattedValue;
    return de(n) || (t += n), t;
  },
  labelColor(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return { pointStyle: n.pointStyle, rotation: n.rotation };
  },
  afterLabel: qn,
  afterBody: qn,
  beforeFooter: qn,
  footer: qn,
  afterFooter: qn,
};
function ut(e, t, n, r) {
  const i = e[t].call(n, r);
  return typeof i > "u" ? IS[t].call(n, r) : i;
}
class $f extends $n {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const n = this.chart,
      r = this.options.setContext(this.getContext()),
      i = r.enabled && n.options.animation && r.animations,
      s = new uS(this.chart, i);
    return i._cacheable && (this._cachedAnimations = Object.freeze(s)), s;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = TM(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(t, n) {
    const { callbacks: r } = n,
      i = ut(r, "beforeTitle", this, t),
      s = ut(r, "title", this, t),
      o = ut(r, "afterTitle", this, t);
    let l = [];
    return (l = kn(l, Qn(i))), (l = kn(l, Qn(s))), (l = kn(l, Qn(o))), l;
  }
  getBeforeBody(t, n) {
    return Fv(ut(n.callbacks, "beforeBody", this, t));
  }
  getBody(t, n) {
    const { callbacks: r } = n,
      i = [];
    return (
      ue(t, (s) => {
        const o = { before: [], lines: [], after: [] },
          l = zv(r, s);
        kn(o.before, Qn(ut(l, "beforeLabel", this, s))),
          kn(o.lines, ut(l, "label", this, s)),
          kn(o.after, Qn(ut(l, "afterLabel", this, s))),
          i.push(o);
      }),
      i
    );
  }
  getAfterBody(t, n) {
    return Fv(ut(n.callbacks, "afterBody", this, t));
  }
  getFooter(t, n) {
    const { callbacks: r } = n,
      i = ut(r, "beforeFooter", this, t),
      s = ut(r, "footer", this, t),
      o = ut(r, "afterFooter", this, t);
    let l = [];
    return (l = kn(l, Qn(i))), (l = kn(l, Qn(s))), (l = kn(l, Qn(o))), l;
  }
  _createItems(t) {
    const n = this._active,
      r = this.chart.data,
      i = [],
      s = [],
      o = [];
    let l = [],
      c,
      u;
    for (c = 0, u = n.length; c < u; ++c) l.push(EM(this.chart, n[c]));
    return (
      t.filter && (l = l.filter((d, h, f) => t.filter(d, h, f, r))),
      t.itemSort && (l = l.sort((d, h) => t.itemSort(d, h, r))),
      ue(l, (d) => {
        const h = zv(t.callbacks, d);
        i.push(ut(h, "labelColor", this, d)),
          s.push(ut(h, "labelPointStyle", this, d)),
          o.push(ut(h, "labelTextColor", this, d));
      }),
      (this.labelColors = i),
      (this.labelPointStyles = s),
      (this.labelTextColors = o),
      (this.dataPoints = l),
      l
    );
  }
  update(t, n) {
    const r = this.options.setContext(this.getContext()),
      i = this._active;
    let s,
      o = [];
    if (!i.length) this.opacity !== 0 && (s = { opacity: 0 });
    else {
      const l = vo[r.position].call(this, i, this._eventPosition);
      (o = this._createItems(r)),
        (this.title = this.getTitle(o, r)),
        (this.beforeBody = this.getBeforeBody(o, r)),
        (this.body = this.getBody(o, r)),
        (this.afterBody = this.getAfterBody(o, r)),
        (this.footer = this.getFooter(o, r));
      const c = (this._size = Mv(this, r)),
        u = Object.assign({}, l, c),
        d = Lv(this.chart, r, u),
        h = Rv(r, u, d, this.chart);
      (this.xAlign = d.xAlign),
        (this.yAlign = d.yAlign),
        (s = {
          opacity: 1,
          x: h.x,
          y: h.y,
          width: c.width,
          height: c.height,
          caretX: l.x,
          caretY: l.y,
        });
    }
    (this._tooltipItems = o),
      (this.$context = void 0),
      s && this._resolveAnimations().update(this, s),
      t &&
        r.external &&
        r.external.call(this, { chart: this.chart, tooltip: this, replay: n });
  }
  drawCaret(t, n, r, i) {
    const s = this.getCaretPosition(t, r, i);
    n.lineTo(s.x1, s.y1), n.lineTo(s.x2, s.y2), n.lineTo(s.x3, s.y3);
  }
  getCaretPosition(t, n, r) {
    const { xAlign: i, yAlign: s } = this,
      { caretSize: o, cornerRadius: l } = r,
      { topLeft: c, topRight: u, bottomLeft: d, bottomRight: h } = Ni(l),
      { x: f, y: m } = t,
      { width: p, height: g } = n;
    let y, x, v, b, S, C;
    return (
      s === "center"
        ? ((S = m + g / 2),
          i === "left"
            ? ((y = f), (x = y - o), (b = S + o), (C = S - o))
            : ((y = f + p), (x = y + o), (b = S - o), (C = S + o)),
          (v = y))
        : (i === "left"
            ? (x = f + Math.max(c, d) + o)
            : i === "right"
            ? (x = f + p - Math.max(u, h) - o)
            : (x = this.caretX),
          s === "top"
            ? ((b = m), (S = b - o), (y = x - o), (v = x + o))
            : ((b = m + g), (S = b + o), (y = x + o), (v = x - o)),
          (C = b)),
      { x1: y, x2: x, x3: v, y1: b, y2: S, y3: C }
    );
  }
  drawTitle(t, n, r) {
    const i = this.title,
      s = i.length;
    let o, l, c;
    if (s) {
      const u = ys(r.rtl, this.x, this.width);
      for (
        t.x = _l(this, r.titleAlign, r),
          n.textAlign = u.textAlign(r.titleAlign),
          n.textBaseline = "middle",
          o = ze(r.titleFont),
          l = r.titleSpacing,
          n.fillStyle = r.titleColor,
          n.font = o.string,
          c = 0;
        c < s;
        ++c
      )
        n.fillText(i[c], u.x(t.x), t.y + o.lineHeight / 2),
          (t.y += o.lineHeight + l),
          c + 1 === s && (t.y += r.titleMarginBottom - l);
    }
  }
  _drawColorBox(t, n, r, i, s) {
    const o = this.labelColors[r],
      l = this.labelPointStyles[r],
      { boxHeight: c, boxWidth: u } = s,
      d = ze(s.bodyFont),
      h = _l(this, "left", s),
      f = i.x(h),
      m = c < d.lineHeight ? (d.lineHeight - c) / 2 : 0,
      p = n.y + m;
    if (s.usePointStyle) {
      const g = {
          radius: Math.min(u, c) / 2,
          pointStyle: l.pointStyle,
          rotation: l.rotation,
          borderWidth: 1,
        },
        y = i.leftForLtr(f, u) + u / 2,
        x = p + c / 2;
      (t.strokeStyle = s.multiKeyBackground),
        (t.fillStyle = s.multiKeyBackground),
        Lf(t, g, y, x),
        (t.strokeStyle = o.borderColor),
        (t.fillStyle = o.backgroundColor),
        Lf(t, g, y, x);
    } else {
      (t.lineWidth = oe(o.borderWidth)
        ? Math.max(...Object.values(o.borderWidth))
        : o.borderWidth || 1),
        (t.strokeStyle = o.borderColor),
        t.setLineDash(o.borderDash || []),
        (t.lineDashOffset = o.borderDashOffset || 0);
      const g = i.leftForLtr(f, u),
        y = i.leftForLtr(i.xPlus(f, 1), u - 2),
        x = Ni(o.borderRadius);
      Object.values(x).some((v) => v !== 0)
        ? (t.beginPath(),
          (t.fillStyle = s.multiKeyBackground),
          fa(t, { x: g, y: p, w: u, h: c, radius: x }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = o.backgroundColor),
          t.beginPath(),
          fa(t, { x: y, y: p + 1, w: u - 2, h: c - 2, radius: x }),
          t.fill())
        : ((t.fillStyle = s.multiKeyBackground),
          t.fillRect(g, p, u, c),
          t.strokeRect(g, p, u, c),
          (t.fillStyle = o.backgroundColor),
          t.fillRect(y, p + 1, u - 2, c - 2));
    }
    t.fillStyle = this.labelTextColors[r];
  }
  drawBody(t, n, r) {
    const { body: i } = this,
      {
        bodySpacing: s,
        bodyAlign: o,
        displayColors: l,
        boxHeight: c,
        boxWidth: u,
        boxPadding: d,
      } = r,
      h = ze(r.bodyFont);
    let f = h.lineHeight,
      m = 0;
    const p = ys(r.rtl, this.x, this.width),
      g = function (E) {
        n.fillText(E, p.x(t.x + m), t.y + f / 2), (t.y += f + s);
      },
      y = p.textAlign(o);
    let x, v, b, S, C, k, _;
    for (
      n.textAlign = o,
        n.textBaseline = "middle",
        n.font = h.string,
        t.x = _l(this, y, r),
        n.fillStyle = r.bodyColor,
        ue(this.beforeBody, g),
        m = l && y !== "right" ? (o === "center" ? u / 2 + d : u + 2 + d) : 0,
        S = 0,
        k = i.length;
      S < k;
      ++S
    ) {
      for (
        x = i[S],
          v = this.labelTextColors[S],
          n.fillStyle = v,
          ue(x.before, g),
          b = x.lines,
          l &&
            b.length &&
            (this._drawColorBox(n, t, S, p, r),
            (f = Math.max(h.lineHeight, c))),
          C = 0,
          _ = b.length;
        C < _;
        ++C
      )
        g(b[C]), (f = h.lineHeight);
      ue(x.after, g);
    }
    (m = 0), (f = h.lineHeight), ue(this.afterBody, g), (t.y -= s);
  }
  drawFooter(t, n, r) {
    const i = this.footer,
      s = i.length;
    let o, l;
    if (s) {
      const c = ys(r.rtl, this.x, this.width);
      for (
        t.x = _l(this, r.footerAlign, r),
          t.y += r.footerMarginTop,
          n.textAlign = c.textAlign(r.footerAlign),
          n.textBaseline = "middle",
          o = ze(r.footerFont),
          n.fillStyle = r.footerColor,
          n.font = o.string,
          l = 0;
        l < s;
        ++l
      )
        n.fillText(i[l], c.x(t.x), t.y + o.lineHeight / 2),
          (t.y += o.lineHeight + r.footerSpacing);
    }
  }
  drawBackground(t, n, r, i) {
    const { xAlign: s, yAlign: o } = this,
      { x: l, y: c } = t,
      { width: u, height: d } = r,
      {
        topLeft: h,
        topRight: f,
        bottomLeft: m,
        bottomRight: p,
      } = Ni(i.cornerRadius);
    (n.fillStyle = i.backgroundColor),
      (n.strokeStyle = i.borderColor),
      (n.lineWidth = i.borderWidth),
      n.beginPath(),
      n.moveTo(l + h, c),
      o === "top" && this.drawCaret(t, n, r, i),
      n.lineTo(l + u - f, c),
      n.quadraticCurveTo(l + u, c, l + u, c + f),
      o === "center" && s === "right" && this.drawCaret(t, n, r, i),
      n.lineTo(l + u, c + d - p),
      n.quadraticCurveTo(l + u, c + d, l + u - p, c + d),
      o === "bottom" && this.drawCaret(t, n, r, i),
      n.lineTo(l + m, c + d),
      n.quadraticCurveTo(l, c + d, l, c + d - m),
      o === "center" && s === "left" && this.drawCaret(t, n, r, i),
      n.lineTo(l, c + h),
      n.quadraticCurveTo(l, c, l + h, c),
      n.closePath(),
      n.fill(),
      i.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(t) {
    const n = this.chart,
      r = this.$animations,
      i = r && r.x,
      s = r && r.y;
    if (i || s) {
      const o = vo[t.position].call(this, this._active, this._eventPosition);
      if (!o) return;
      const l = (this._size = Mv(this, t)),
        c = Object.assign({}, o, this._size),
        u = Lv(n, t, c),
        d = Rv(t, c, u, n);
      (i._to !== d.x || s._to !== d.y) &&
        ((this.xAlign = u.xAlign),
        (this.yAlign = u.yAlign),
        (this.width = l.width),
        (this.height = l.height),
        (this.caretX = o.x),
        (this.caretY = o.y),
        this._resolveAnimations().update(this, d));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const n = this.options.setContext(this.getContext());
    let r = this.opacity;
    if (!r) return;
    this._updateAnimationTarget(n);
    const i = { width: this.width, height: this.height },
      s = { x: this.x, y: this.y };
    r = Math.abs(r) < 0.001 ? 0 : r;
    const o = Ze(n.padding),
      l =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    n.enabled &&
      l &&
      (t.save(),
      (t.globalAlpha = r),
      this.drawBackground(s, t, i, n),
      aS(t, n.textDirection),
      (s.y += o.top),
      this.drawTitle(s, t, n),
      this.drawBody(s, t, n),
      this.drawFooter(s, t, n),
      lS(t, n.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, n) {
    const r = this._active,
      i = t.map(({ datasetIndex: l, index: c }) => {
        const u = this.chart.getDatasetMeta(l);
        if (!u) throw new Error("Cannot find a dataset at index " + l);
        return { datasetIndex: l, element: u.data[c], index: c };
      }),
      s = !Wc(r, i),
      o = this._positionChanged(i, n);
    (s || o) &&
      ((this._active = i),
      (this._eventPosition = n),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, n, r = !0) {
    if (n && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const i = this.options,
      s = this._active || [],
      o = this._getActiveElements(t, s, n, r),
      l = this._positionChanged(o, t),
      c = n || !Wc(o, s) || l;
    return (
      c &&
        ((this._active = o),
        (i.enabled || i.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, n))),
      c
    );
  }
  _getActiveElements(t, n, r, i) {
    const s = this.options;
    if (t.type === "mouseout") return [];
    if (!i)
      return n.filter(
        (l) =>
          this.chart.data.datasets[l.datasetIndex] &&
          this.chart
            .getDatasetMeta(l.datasetIndex)
            .controller.getParsed(l.index) !== void 0
      );
    const o = this.chart.getElementsAtEventForMode(t, s.mode, s, r);
    return s.reverse && o.reverse(), o;
  }
  _positionChanged(t, n) {
    const { caretX: r, caretY: i, options: s } = this,
      o = vo[s.position].call(this, t, n);
    return o !== !1 && (r !== o.x || i !== o.y);
  }
}
W($f, "positioners", vo);
var NS = {
  id: "tooltip",
  _element: $f,
  positioners: vo,
  afterInit(e, t, n) {
    n && (e.tooltip = new $f({ chart: e, options: n }));
  },
  beforeUpdate(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  reset(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  afterDraw(e) {
    const t = e.tooltip;
    if (t && t._willRender()) {
      const n = { tooltip: t };
      if (e.notifyPlugins("beforeTooltipDraw", { ...n, cancelable: !0 }) === !1)
        return;
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n);
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const n = t.replay;
      e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: IS,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const OM = (e, t, n, r) => (
  typeof t == "string"
    ? ((n = e.push(t) - 1), r.unshift({ index: n, label: t }))
    : isNaN(t) && (n = null),
  n
);
function DM(e, t, n, r) {
  const i = e.indexOf(t);
  if (i === -1) return OM(e, t, n, r);
  const s = e.lastIndexOf(t);
  return i !== s ? n : i;
}
const MM = (e, t) => (e === null ? null : Pt(Math.round(e), 0, t));
function $v(e) {
  const t = this.getLabels();
  return e >= 0 && e < t.length ? t[e] : e;
}
class qc extends Hi {
  constructor(t) {
    super(t),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(t) {
    const n = this._addedLabels;
    if (n.length) {
      const r = this.getLabels();
      for (const { index: i, label: s } of n) r[i] === s && r.splice(i, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, n) {
    if (de(t)) return null;
    const r = this.getLabels();
    return (
      (n =
        isFinite(n) && r[n] === t ? n : DM(r, t, J(n, t), this._addedLabels)),
      MM(n, r.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let { min: r, max: i } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (t || (r = 0), n || (i = this.getLabels().length - 1)),
      (this.min = r),
      (this.max = i);
  }
  buildTicks() {
    const t = this.min,
      n = this.max,
      r = this.options.offset,
      i = [];
    let s = this.getLabels();
    (s = t === 0 && n === s.length - 1 ? s : s.slice(t, n + 1)),
      (this._valueRange = Math.max(s.length - (r ? 0 : 1), 1)),
      (this._startValue = this.min - (r ? 0.5 : 0));
    for (let o = t; o <= n; o++) i.push({ value: o });
    return i;
  }
  getLabelForValue(t) {
    return $v.call(this, t);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return (
      typeof t != "number" && (t = this.parse(t)),
      t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
W(qc, "id", "category"), W(qc, "defaults", { ticks: { callback: $v } });
function LM(e, t) {
  const n = [],
    {
      bounds: i,
      step: s,
      min: o,
      max: l,
      precision: c,
      count: u,
      maxTicks: d,
      maxDigits: h,
      includeBounds: f,
    } = e,
    m = s || 1,
    p = d - 1,
    { min: g, max: y } = t,
    x = !de(o),
    v = !de(l),
    b = !de(u),
    S = (y - g) / (h + 1);
  let C = W0((y - g) / p / m) * m,
    k,
    _,
    E,
    I;
  if (C < 1e-14 && !x && !v) return [{ value: g }, { value: y }];
  (I = Math.ceil(y / C) - Math.floor(g / C)),
    I > p && (C = W0((I * C) / p / m) * m),
    de(c) || ((k = Math.pow(10, c)), (C = Math.ceil(C * k) / k)),
    i === "ticks"
      ? ((_ = Math.floor(g / C) * C), (E = Math.ceil(y / C) * C))
      : ((_ = g), (E = y)),
    x && v && s && p4((l - o) / s, C / 1e3)
      ? ((I = Math.round(Math.min((l - o) / C, d))),
        (C = (l - o) / I),
        (_ = o),
        (E = l))
      : b
      ? ((_ = x ? o : _), (E = v ? l : E), (I = u - 1), (C = (E - _) / I))
      : ((I = (E - _) / C),
        To(I, Math.round(I), C / 1e3)
          ? (I = Math.round(I))
          : (I = Math.ceil(I)));
  const N = Math.max(H0(C), H0(_));
  (k = Math.pow(10, de(c) ? N : c)),
    (_ = Math.round(_ * k) / k),
    (E = Math.round(E * k) / k);
  let R = 0;
  for (
    x &&
    (f && _ !== o
      ? (n.push({ value: o }),
        _ < o && R++,
        To(Math.round((_ + R * C) * k) / k, o, Bv(o, S, e)) && R++)
      : _ < o && R++);
    R < I;
    ++R
  ) {
    const z = Math.round((_ + R * C) * k) / k;
    if (v && z > l) break;
    n.push({ value: z });
  }
  return (
    v && f && E !== l
      ? n.length && To(n[n.length - 1].value, l, Bv(l, S, e))
        ? (n[n.length - 1].value = l)
        : n.push({ value: l })
      : (!v || E === l) && n.push({ value: E }),
    n
  );
}
function Bv(e, t, { horizontal: n, minRotation: r }) {
  const i = Fr(r),
    s = (n ? Math.sin(i) : Math.cos(i)) || 0.001,
    o = 0.75 * t * ("" + e).length;
  return Math.min(t / s, o);
}
class Kc extends Hi {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, n) {
    return de(t) ||
      ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: n, maxDefined: r } = this.getUserBounds();
    let { min: i, max: s } = this;
    const o = (c) => (i = n ? i : c),
      l = (c) => (s = r ? s : c);
    if (t) {
      const c = zn(i),
        u = zn(s);
      c < 0 && u < 0 ? l(0) : c > 0 && u > 0 && o(0);
    }
    if (i === s) {
      let c = s === 0 ? 1 : Math.abs(s * 0.05);
      l(s + c), t || o(i - c);
    }
    (this.min = i), (this.max = s);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: n, stepSize: r } = t,
      i;
    return (
      r
        ? ((i = Math.ceil(this.max / r) - Math.floor(this.min / r) + 1),
          i > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`
            ),
            (i = 1e3)))
        : ((i = this.computeTickLimit()), (n = n || 11)),
      n && (i = Math.min(n, i)),
      i
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      n = t.ticks;
    let r = this.getTickLimit();
    r = Math.max(2, r);
    const i = {
        maxTicks: r,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: n.precision,
        step: n.stepSize,
        count: n.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: n.minRotation || 0,
        includeBounds: n.includeBounds !== !1,
      },
      s = this._range || this,
      o = LM(i, s);
    return (
      t.bounds === "ticks" && Gw(o, this, "value"),
      t.reverse
        ? (o.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      o
    );
  }
  configure() {
    const t = this.ticks;
    let n = this.min,
      r = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const i = (r - n) / Math.max(t.length - 1, 1) / 2;
      (n -= i), (r += i);
    }
    (this._startValue = n), (this._endValue = r), (this._valueRange = r - n);
  }
  getLabelForValue(t) {
    return qg(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Qc extends Kc {
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    (this.min = We(t) ? t : 0),
      (this.max = We(n) ? n : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      n = t ? this.width : this.height,
      r = Fr(this.options.ticks.minRotation),
      i = (t ? Math.sin(r) : Math.cos(r)) || 0.001,
      s = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, s.lineHeight / i));
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
W(Qc, "id", "linear"),
  W(Qc, "defaults", { ticks: { callback: $u.formatters.numeric } });
const ga = (e) => Math.floor(Rr(e)),
  di = (e, t) => Math.pow(10, ga(e) + t);
function Wv(e) {
  return e / Math.pow(10, ga(e)) === 1;
}
function Hv(e, t, n) {
  const r = Math.pow(10, n),
    i = Math.floor(e / r);
  return Math.ceil(t / r) - i;
}
function RM(e, t) {
  const n = t - e;
  let r = ga(n);
  for (; Hv(e, t, r) > 10; ) r++;
  for (; Hv(e, t, r) < 10; ) r--;
  return Math.min(r, ga(e));
}
function FM(e, { min: t, max: n }) {
  t = St(e.min, t);
  const r = [],
    i = ga(t);
  let s = RM(t, n),
    o = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
  const l = Math.pow(10, s),
    c = i > s ? Math.pow(10, i) : 0,
    u = Math.round((t - c) * o) / o,
    d = Math.floor((t - c) / l / 10) * l * 10;
  let h = Math.floor((u - d) / Math.pow(10, s)),
    f = St(e.min, Math.round((c + d + h * Math.pow(10, s)) * o) / o);
  for (; f < n; )
    r.push({ value: f, major: Wv(f), significand: h }),
      h >= 10 ? (h = h < 15 ? 15 : 20) : h++,
      h >= 20 && (s++, (h = 2), (o = s >= 0 ? 1 : o)),
      (f = Math.round((c + d + h * Math.pow(10, s)) * o) / o);
  const m = St(e.max, f);
  return r.push({ value: m, major: Wv(m), significand: h }), r;
}
class Vv extends Hi {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, n) {
    const r = Kc.prototype.parse.apply(this, [t, n]);
    if (r === 0) {
      this._zero = !0;
      return;
    }
    return We(r) && r > 0 ? r : null;
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    (this.min = We(t) ? Math.max(0, t) : null),
      (this.max = We(n) ? Math.max(0, n) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !We(this._userMin) &&
        (this.min = t === di(this.min, 0) ? di(this.min, -1) : di(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let r = this.min,
      i = this.max;
    const s = (l) => (r = t ? r : l),
      o = (l) => (i = n ? i : l);
    r === i && (r <= 0 ? (s(1), o(10)) : (s(di(r, -1)), o(di(i, 1)))),
      r <= 0 && s(di(i, -1)),
      i <= 0 && o(di(r, 1)),
      (this.min = r),
      (this.max = i);
  }
  buildTicks() {
    const t = this.options,
      n = { min: this._userMin, max: this._userMax },
      r = FM(n, this);
    return (
      t.bounds === "ticks" && Gw(r, this, "value"),
      t.reverse
        ? (r.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      r
    );
  }
  getLabelForValue(t) {
    return t === void 0
      ? "0"
      : qg(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(),
      (this._startValue = Rr(t)),
      (this._valueRange = Rr(this.max) - Rr(t));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (Rr(t) - this._startValue) / this._valueRange
          )
    );
  }
  getValueForPixel(t) {
    const n = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + n * this._valueRange);
  }
}
W(Vv, "id", "logarithmic"),
  W(Vv, "defaults", {
    ticks: { callback: $u.formatters.logarithmic, major: { enabled: !0 } },
  });
function Bf(e) {
  const t = e.ticks;
  if (t.display && e.display) {
    const n = Ze(t.backdropPadding);
    return J(t.font && t.font.size, ke.font.size) + n.height;
  }
  return 0;
}
function zM(e, t, n) {
  return (
    (n = we(n) ? n : [n]), { w: D4(e, t.string, n), h: n.length * t.lineHeight }
  );
}
function Uv(e, t, n, r, i) {
  return e === r || e === i
    ? { start: t - n / 2, end: t + n / 2 }
    : e < r || e > i
    ? { start: t - n, end: t }
    : { start: t, end: t + n };
}
function $M(e) {
  const t = {
      l: e.left + e._padding.left,
      r: e.right - e._padding.right,
      t: e.top + e._padding.top,
      b: e.bottom - e._padding.bottom,
    },
    n = Object.assign({}, t),
    r = [],
    i = [],
    s = e._pointLabels.length,
    o = e.options.pointLabels,
    l = o.centerPointLabels ? Me / s : 0;
  for (let c = 0; c < s; c++) {
    const u = o.setContext(e.getPointLabelContext(c));
    i[c] = u.padding;
    const d = e.getPointPosition(c, e.drawingArea + i[c], l),
      h = ze(u.font),
      f = zM(e.ctx, h, e._pointLabels[c]);
    r[c] = f;
    const m = gn(e.getIndexAngle(c) + l),
      p = Math.round(Vg(m)),
      g = Uv(p, d.x, f.w, 0, 180),
      y = Uv(p, d.y, f.h, 90, 270);
    BM(n, t, m, g, y);
  }
  e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b),
    (e._pointLabelItems = VM(e, r, i));
}
function BM(e, t, n, r, i) {
  const s = Math.abs(Math.sin(n)),
    o = Math.abs(Math.cos(n));
  let l = 0,
    c = 0;
  r.start < t.l
    ? ((l = (t.l - r.start) / s), (e.l = Math.min(e.l, t.l - l)))
    : r.end > t.r && ((l = (r.end - t.r) / s), (e.r = Math.max(e.r, t.r + l))),
    i.start < t.t
      ? ((c = (t.t - i.start) / o), (e.t = Math.min(e.t, t.t - c)))
      : i.end > t.b &&
        ((c = (i.end - t.b) / o), (e.b = Math.max(e.b, t.b + c)));
}
function WM(e, t, n) {
  const r = e.drawingArea,
    { extra: i, additionalAngle: s, padding: o, size: l } = n,
    c = e.getPointPosition(t, r + i + o, s),
    u = Math.round(Vg(gn(c.angle + kt))),
    d = YM(c.y, l.h, u),
    h = UM(u),
    f = GM(c.x, l.w, h);
  return {
    visible: !0,
    x: c.x,
    y: d,
    textAlign: h,
    left: f,
    top: d,
    right: f + l.w,
    bottom: d + l.h,
  };
}
function HM(e, t) {
  if (!t) return !0;
  const { left: n, top: r, right: i, bottom: s } = e;
  return !(
    ir({ x: n, y: r }, t) ||
    ir({ x: n, y: s }, t) ||
    ir({ x: i, y: r }, t) ||
    ir({ x: i, y: s }, t)
  );
}
function VM(e, t, n) {
  const r = [],
    i = e._pointLabels.length,
    s = e.options,
    { centerPointLabels: o, display: l } = s.pointLabels,
    c = { extra: Bf(s) / 2, additionalAngle: o ? Me / i : 0 };
  let u;
  for (let d = 0; d < i; d++) {
    (c.padding = n[d]), (c.size = t[d]);
    const h = WM(e, d, c);
    r.push(h), l === "auto" && ((h.visible = HM(h, u)), h.visible && (u = h));
  }
  return r;
}
function UM(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function GM(e, t, n) {
  return n === "right" ? (e -= t) : n === "center" && (e -= t / 2), e;
}
function YM(e, t, n) {
  return (
    n === 90 || n === 270 ? (e -= t / 2) : (n > 270 || n < 90) && (e -= t), e
  );
}
function qM(e, t, n) {
  const { left: r, top: i, right: s, bottom: o } = n,
    { backdropColor: l } = t;
  if (!de(l)) {
    const c = Ni(t.borderRadius),
      u = Ze(t.backdropPadding);
    e.fillStyle = l;
    const d = r - u.left,
      h = i - u.top,
      f = s - r + u.width,
      m = o - i + u.height;
    Object.values(c).some((p) => p !== 0)
      ? (e.beginPath(), fa(e, { x: d, y: h, w: f, h: m, radius: c }), e.fill())
      : e.fillRect(d, h, f, m);
  }
}
function KM(e, t) {
  const {
    ctx: n,
    options: { pointLabels: r },
  } = e;
  for (let i = t - 1; i >= 0; i--) {
    const s = e._pointLabelItems[i];
    if (!s.visible) continue;
    const o = r.setContext(e.getPointLabelContext(i));
    qM(n, o, s);
    const l = ze(o.font),
      { x: c, y: u, textAlign: d } = s;
    Fi(n, e._pointLabels[i], c, u + l.lineHeight / 2, l, {
      color: o.color,
      textAlign: d,
      textBaseline: "middle",
    });
  }
}
function AS(e, t, n, r) {
  const { ctx: i } = e;
  if (n) i.arc(e.xCenter, e.yCenter, t, 0, Xt);
  else {
    let s = e.getPointPosition(0, t);
    i.moveTo(s.x, s.y);
    for (let o = 1; o < r; o++)
      (s = e.getPointPosition(o, t)), i.lineTo(s.x, s.y);
  }
}
function QM(e, t, n, r, i) {
  const s = e.ctx,
    o = t.circular,
    { color: l, lineWidth: c } = t;
  (!o && !r) ||
    !l ||
    !c ||
    n < 0 ||
    (s.save(),
    (s.strokeStyle = l),
    (s.lineWidth = c),
    s.setLineDash(i.dash),
    (s.lineDashOffset = i.dashOffset),
    s.beginPath(),
    AS(e, n, o, r),
    s.closePath(),
    s.stroke(),
    s.restore());
}
function XM(e, t, n) {
  return oi(e, { label: n, index: t, type: "pointLabel" });
}
class El extends Kc {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = Ze(Bf(this.options) / 2)),
      n = (this.width = this.maxWidth - t.width),
      r = (this.height = this.maxHeight - t.height);
    (this.xCenter = Math.floor(this.left + n / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + r / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(n, r) / 2));
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!1);
    (this.min = We(t) && !isNaN(t) ? t : 0),
      (this.max = We(n) && !isNaN(n) ? n : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Bf(this.options));
  }
  generateTickLabels(t) {
    Kc.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((n, r) => {
          const i = fe(this.options.pointLabels.callback, [n, r], this);
          return i || i === 0 ? i : "";
        })
        .filter((n, r) => this.chart.getDataVisibility(r)));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display
      ? $M(this)
      : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, n, r, i) {
    (this.xCenter += Math.floor((t - n) / 2)),
      (this.yCenter += Math.floor((r - i) / 2)),
      (this.drawingArea -= Math.min(
        this.drawingArea / 2,
        Math.max(t, n, r, i)
      ));
  }
  getIndexAngle(t) {
    const n = Xt / (this._pointLabels.length || 1),
      r = this.options.startAngle || 0;
    return gn(t * n + Fr(r));
  }
  getDistanceFromCenterForValue(t) {
    if (de(t)) return NaN;
    const n = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * n : (t - this.min) * n;
  }
  getValueForDistanceFromCenter(t) {
    if (de(t)) return NaN;
    const n = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - n : this.min + n;
  }
  getPointLabelContext(t) {
    const n = this._pointLabels || [];
    if (t >= 0 && t < n.length) {
      const r = n[t];
      return XM(this.getContext(), t, r);
    }
  }
  getPointPosition(t, n, r = 0) {
    const i = this.getIndexAngle(t) - kt + r;
    return {
      x: Math.cos(i) * n + this.xCenter,
      y: Math.sin(i) * n + this.yCenter,
      angle: i,
    };
  }
  getPointPositionForValue(t, n) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(n));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: n, top: r, right: i, bottom: s } = this._pointLabelItems[t];
    return { left: n, top: r, right: i, bottom: s };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: n },
    } = this.options;
    if (t) {
      const r = this.ctx;
      r.save(),
        r.beginPath(),
        AS(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          n,
          this._pointLabels.length
        ),
        r.closePath(),
        (r.fillStyle = t),
        r.fill(),
        r.restore();
    }
  }
  drawGrid() {
    const t = this.ctx,
      n = this.options,
      { angleLines: r, grid: i, border: s } = n,
      o = this._pointLabels.length;
    let l, c, u;
    if (
      (n.pointLabels.display && KM(this, o),
      i.display &&
        this.ticks.forEach((d, h) => {
          if (h !== 0 || (h === 0 && this.min < 0)) {
            c = this.getDistanceFromCenterForValue(d.value);
            const f = this.getContext(h),
              m = i.setContext(f),
              p = s.setContext(f);
            QM(this, m, c, o, p);
          }
        }),
      r.display)
    ) {
      for (t.save(), l = o - 1; l >= 0; l--) {
        const d = r.setContext(this.getPointLabelContext(l)),
          { color: h, lineWidth: f } = d;
        !f ||
          !h ||
          ((t.lineWidth = f),
          (t.strokeStyle = h),
          t.setLineDash(d.borderDash),
          (t.lineDashOffset = d.borderDashOffset),
          (c = this.getDistanceFromCenterForValue(
            n.ticks.reverse ? this.min : this.max
          )),
          (u = this.getPointPosition(l, c)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(u.x, u.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      n = this.options,
      r = n.ticks;
    if (!r.display) return;
    const i = this.getIndexAngle(0);
    let s, o;
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(i),
      (t.textAlign = "center"),
      (t.textBaseline = "middle"),
      this.ticks.forEach((l, c) => {
        if (c === 0 && this.min >= 0 && !n.reverse) return;
        const u = r.setContext(this.getContext(c)),
          d = ze(u.font);
        if (
          ((s = this.getDistanceFromCenterForValue(this.ticks[c].value)),
          u.showLabelBackdrop)
        ) {
          (t.font = d.string),
            (o = t.measureText(l.label).width),
            (t.fillStyle = u.backdropColor);
          const h = Ze(u.backdropPadding);
          t.fillRect(
            -o / 2 - h.left,
            -s - d.size / 2 - h.top,
            o + h.width,
            d.size + h.height
          );
        }
        Fi(t, l.label, 0, -s, d, {
          color: u.color,
          strokeColor: u.textStrokeColor,
          strokeWidth: u.textStrokeWidth,
        });
      }),
      t.restore();
  }
  drawTitle() {}
}
W(El, "id", "radialLinear"),
  W(El, "defaults", {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: $u.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  W(El, "defaultRoutes", {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color",
  }),
  W(El, "descriptors", { angleLines: { _fallback: "grid" } });
const Wu = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  ft = Object.keys(Wu);
function Gv(e, t) {
  return e - t;
}
function Yv(e, t) {
  if (de(t)) return null;
  const n = e._adapter,
    { parser: r, round: i, isoWeekday: s } = e._parseOpts;
  let o = t;
  return (
    typeof r == "function" && (o = r(o)),
    We(o) || (o = typeof r == "string" ? n.parse(o, r) : n.parse(o)),
    o === null
      ? null
      : (i &&
          (o =
            i === "week" && (ha(s) || s === !0)
              ? n.startOf(o, "isoWeek", s)
              : n.startOf(o, i)),
        +o)
  );
}
function qv(e, t, n, r) {
  const i = ft.length;
  for (let s = ft.indexOf(e); s < i - 1; ++s) {
    const o = Wu[ft[s]],
      l = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
    if (o.common && Math.ceil((n - t) / (l * o.size)) <= r) return ft[s];
  }
  return ft[i - 1];
}
function JM(e, t, n, r, i) {
  for (let s = ft.length - 1; s >= ft.indexOf(n); s--) {
    const o = ft[s];
    if (Wu[o].common && e._adapter.diff(i, r, o) >= t - 1) return o;
  }
  return ft[n ? ft.indexOf(n) : 0];
}
function ZM(e) {
  for (let t = ft.indexOf(e) + 1, n = ft.length; t < n; ++t)
    if (Wu[ft[t]].common) return ft[t];
}
function Kv(e, t, n) {
  if (!n) e[t] = !0;
  else if (n.length) {
    const { lo: r, hi: i } = Ug(n, t),
      s = n[r] >= t ? n[r] : n[i];
    e[s] = !0;
  }
}
function eL(e, t, n, r) {
  const i = e._adapter,
    s = +i.startOf(t[0].value, r),
    o = t[t.length - 1].value;
  let l, c;
  for (l = s; l <= o; l = +i.add(l, 1, r))
    (c = n[l]), c >= 0 && (t[c].major = !0);
  return t;
}
function Qv(e, t, n) {
  const r = [],
    i = {},
    s = t.length;
  let o, l;
  for (o = 0; o < s; ++o)
    (l = t[o]), (i[l] = o), r.push({ value: l, major: !1 });
  return s === 0 || !n ? r : eL(e, r, i, n);
}
class Xc extends Hi {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, n = {}) {
    const r = t.time || (t.time = {}),
      i = (this._adapter = new QD._date(t.adapters.date));
    i.init(n),
      Ao(r.displayFormats, i.formats()),
      (this._parseOpts = {
        parser: r.parser,
        round: r.round,
        isoWeekday: r.isoWeekday,
      }),
      super.init(t),
      (this._normalized = n.normalized);
  }
  parse(t, n) {
    return t === void 0 ? null : Yv(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this.options,
      n = this._adapter,
      r = t.time.unit || "day";
    let { min: i, max: s, minDefined: o, maxDefined: l } = this.getUserBounds();
    function c(u) {
      !o && !isNaN(u.min) && (i = Math.min(i, u.min)),
        !l && !isNaN(u.max) && (s = Math.max(s, u.max));
    }
    (!o || !l) &&
      (c(this._getLabelBounds()),
      (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
        c(this.getMinMax(!1))),
      (i = We(i) && !isNaN(i) ? i : +n.startOf(Date.now(), r)),
      (s = We(s) && !isNaN(s) ? s : +n.endOf(Date.now(), r) + 1),
      (this.min = Math.min(i, s - 1)),
      (this.max = Math.max(i + 1, s));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY,
      r = Number.NEGATIVE_INFINITY;
    return t.length && ((n = t[0]), (r = t[t.length - 1])), { min: n, max: r };
  }
  buildTicks() {
    const t = this.options,
      n = t.time,
      r = t.ticks,
      i = r.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" &&
      i.length &&
      ((this.min = this._userMin || i[0]),
      (this.max = this._userMax || i[i.length - 1]));
    const s = this.min,
      o = this.max,
      l = y4(i, s, o);
    return (
      (this._unit =
        n.unit ||
        (r.autoSkip
          ? qv(n.minUnit, this.min, this.max, this._getLabelCapacity(s))
          : JM(this, l.length, n.minUnit, this.min, this.max))),
      (this._majorUnit =
        !r.major.enabled || this._unit === "year" ? void 0 : ZM(this._unit)),
      this.initOffsets(i),
      t.reverse && l.reverse(),
      Qv(this, l, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let n = 0,
      r = 0,
      i,
      s;
    this.options.offset &&
      t.length &&
      ((i = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (n = 1 - i)
        : (n = (this.getDecimalForValue(t[1]) - i) / 2),
      (s = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (r = s)
        : (r = (s - this.getDecimalForValue(t[t.length - 2])) / 2));
    const o = t.length < 3 ? 0.5 : 0.25;
    (n = Pt(n, 0, o)),
      (r = Pt(r, 0, o)),
      (this._offsets = { start: n, end: r, factor: 1 / (n + 1 + r) });
  }
  _generate() {
    const t = this._adapter,
      n = this.min,
      r = this.max,
      i = this.options,
      s = i.time,
      o = s.unit || qv(s.minUnit, n, r, this._getLabelCapacity(n)),
      l = J(i.ticks.stepSize, 1),
      c = o === "week" ? s.isoWeekday : !1,
      u = ha(c) || c === !0,
      d = {};
    let h = n,
      f,
      m;
    if (
      (u && (h = +t.startOf(h, "isoWeek", c)),
      (h = +t.startOf(h, u ? "day" : o)),
      t.diff(r, n, o) > 1e5 * l)
    )
      throw new Error(
        n + " and " + r + " are too far apart with stepSize of " + l + " " + o
      );
    const p = i.ticks.source === "data" && this.getDataTimestamps();
    for (f = h, m = 0; f < r; f = +t.add(f, l, o), m++) Kv(d, f, p);
    return (
      (f === r || i.bounds === "ticks" || m === 1) && Kv(d, f, p),
      Object.keys(d)
        .sort(Gv)
        .map((g) => +g)
    );
  }
  getLabelForValue(t) {
    const n = this._adapter,
      r = this.options.time;
    return r.tooltipFormat
      ? n.format(t, r.tooltipFormat)
      : n.format(t, r.displayFormats.datetime);
  }
  format(t, n) {
    const i = this.options.time.displayFormats,
      s = this._unit,
      o = n || i[s];
    return this._adapter.format(t, o);
  }
  _tickFormatFunction(t, n, r, i) {
    const s = this.options,
      o = s.ticks.callback;
    if (o) return fe(o, [t, n, r], this);
    const l = s.time.displayFormats,
      c = this._unit,
      u = this._majorUnit,
      d = c && l[c],
      h = u && l[u],
      f = r[n],
      m = u && h && f && f.major;
    return this._adapter.format(t, i || (m ? h : d));
  }
  generateTickLabels(t) {
    let n, r, i;
    for (n = 0, r = t.length; n < r; ++n)
      (i = t[n]), (i.label = this._tickFormatFunction(i.value, n, t));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const n = this._offsets,
      r = this.getDecimalForValue(t);
    return this.getPixelForDecimal((n.start + r) * n.factor);
  }
  getValueForPixel(t) {
    const n = this._offsets,
      r = this.getDecimalForPixel(t) / n.factor - n.end;
    return this.min + r * (this.max - this.min);
  }
  _getLabelSize(t) {
    const n = this.options.ticks,
      r = this.ctx.measureText(t).width,
      i = Fr(this.isHorizontal() ? n.maxRotation : n.minRotation),
      s = Math.cos(i),
      o = Math.sin(i),
      l = this._resolveTickFontOptions(0).size;
    return { w: r * s + l * o, h: r * o + l * s };
  }
  _getLabelCapacity(t) {
    const n = this.options.time,
      r = n.displayFormats,
      i = r[n.unit] || r.millisecond,
      s = this._tickFormatFunction(t, 0, Qv(this, [t], this._majorUnit), i),
      o = this._getLabelSize(s),
      l =
        Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) -
        1;
    return l > 0 ? l : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      n,
      r;
    if (t.length) return t;
    const i = this.getMatchingVisibleMetas();
    if (this._normalized && i.length)
      return (this._cache.data = i[0].controller.getAllParsedValues(this));
    for (n = 0, r = i.length; n < r; ++n)
      t = t.concat(i[n].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let n, r;
    if (t.length) return t;
    const i = this.getLabels();
    for (n = 0, r = i.length; n < r; ++n) t.push(Yv(this, i[n]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return Kw(t.sort(Gv));
  }
}
W(Xc, "id", "time"),
  W(Xc, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  });
function kl(e, t, n) {
  let r = 0,
    i = e.length - 1,
    s,
    o,
    l,
    c;
  n
    ? (t >= e[r].pos && t <= e[i].pos && ({ lo: r, hi: i } = wi(e, "pos", t)),
      ({ pos: s, time: l } = e[r]),
      ({ pos: o, time: c } = e[i]))
    : (t >= e[r].time &&
        t <= e[i].time &&
        ({ lo: r, hi: i } = wi(e, "time", t)),
      ({ time: s, pos: l } = e[r]),
      ({ time: o, pos: c } = e[i]));
  const u = o - s;
  return u ? l + ((c - l) * (t - s)) / u : l;
}
class Xv extends Xc {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(t));
    (this._minPos = kl(n, this.min)),
      (this._tableRange = kl(n, this.max) - this._minPos),
      super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: n, max: r } = this,
      i = [],
      s = [];
    let o, l, c, u, d;
    for (o = 0, l = t.length; o < l; ++o)
      (u = t[o]), u >= n && u <= r && i.push(u);
    if (i.length < 2)
      return [
        { time: n, pos: 0 },
        { time: r, pos: 1 },
      ];
    for (o = 0, l = i.length; o < l; ++o)
      (d = i[o + 1]),
        (c = i[o - 1]),
        (u = i[o]),
        Math.round((d + c) / 2) !== u && s.push({ time: u, pos: o / (l - 1) });
    return s;
  }
  _generate() {
    const t = this.min,
      n = this.max;
    let r = super.getDataTimestamps();
    return (
      (!r.includes(t) || !r.length) && r.splice(0, 0, t),
      (!r.includes(n) || r.length === 1) && r.push(n),
      r.sort((i, s) => i - s)
    );
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const n = this.getDataTimestamps(),
      r = this.getLabelTimestamps();
    return (
      n.length && r.length
        ? (t = this.normalize(n.concat(r)))
        : (t = n.length ? n : r),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (kl(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const n = this._offsets,
      r = this.getDecimalForPixel(t) / n.factor - n.end;
    return kl(this._table, r * this._tableRange + this._minPos, !0);
  }
}
W(Xv, "id", "timeseries"), W(Xv, "defaults", Xc.defaults);
const TS = "label";
function Jv(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function tL(e, t) {
  const n = e.options;
  n && t && Object.assign(n, t);
}
function OS(e, t) {
  e.labels = t;
}
function DS(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : TS;
  const r = [];
  e.datasets = t.map((i) => {
    const s = e.datasets.find((o) => o[n] === i[n]);
    return !s || !i.data || r.includes(s)
      ? { ...i }
      : (r.push(s), Object.assign(s, i), s);
  });
}
function nL(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : TS;
  const n = { labels: [], datasets: [] };
  return OS(n, e.labels), DS(n, e.datasets, t), n;
}
function rL(e, t) {
  const {
      height: n = 150,
      width: r = 300,
      redraw: i = !1,
      datasetIdKey: s,
      type: o,
      data: l,
      options: c,
      plugins: u = [],
      fallbackContent: d,
      updateMode: h,
      ...f
    } = e,
    m = w.useRef(null),
    p = w.useRef(),
    g = () => {
      m.current &&
        ((p.current = new Ta(m.current, {
          type: o,
          data: nL(l, s),
          options: c && { ...c },
          plugins: u,
        })),
        Jv(t, p.current));
    },
    y = () => {
      Jv(t, null), p.current && (p.current.destroy(), (p.current = null));
    };
  return (
    w.useEffect(() => {
      !i && p.current && c && tL(p.current, c);
    }, [i, c]),
    w.useEffect(() => {
      !i && p.current && OS(p.current.config.data, l.labels);
    }, [i, l.labels]),
    w.useEffect(() => {
      !i && p.current && l.datasets && DS(p.current.config.data, l.datasets, s);
    }, [i, l.datasets]),
    w.useEffect(() => {
      p.current && (i ? (y(), setTimeout(g)) : p.current.update(h));
    }, [i, c, l.labels, l.datasets, h]),
    w.useEffect(() => {
      p.current && (y(), setTimeout(g));
    }, [o]),
    w.useEffect(() => (g(), () => y()), []),
    U.createElement(
      "canvas",
      Object.assign({ ref: m, role: "img", height: n, width: r }, f),
      d
    )
  );
}
const iL = w.forwardRef(rL);
function MS(e, t) {
  return (
    Ta.register(t),
    w.forwardRef((n, r) =>
      U.createElement(iL, Object.assign({}, n, { ref: r, type: e }))
    )
  );
}
const sL = MS("line", Ql),
  oL = MS("bar", Kl);
Ta.register(qc, Qc, ec, PS, NS, ES);
const aL = () => {
  const e = w.useRef(null),
    t = {
      subjects: ["21C61", "21CS52", "21CS63", "21CS64"],
      results: [80, 75, 90, 85],
    },
    n = {
      labels: t.subjects,
      datasets: [
        {
          label: "Exam Results",
          backgroundColor: "#007bff",
          borderColor: "#007bff",
          borderWidth: 1,
          hoverBackgroundColor: "#0056b3",
          hoverBorderColor: "#0056b3",
          data: t.results,
        },
      ],
    },
    r = { scales: { y: { type: "linear", beginAtZero: !0, max: 100 } } };
  return a.jsx(mr, {
    children: a.jsxs(Eg, {
      children: [
        a.jsx(nO, { children: a.jsx(xr, {}) }),
        a.jsxs(kg, {
          children: [
            a.jsx(rr, { children: "Exam Results" }),
            a.jsxs(rO, {
              children: [
                t.subjects.map((i, s) =>
                  a.jsxs(
                    "div",
                    {
                      children: [
                        a.jsx(iO, { children: i }),
                        a.jsxs(sO, {
                          children: ["Score: ", t.results[s], "%"],
                        }),
                      ],
                    },
                    s
                  )
                ),
                a.jsx(oO, {
                  children: a.jsx(oL, { ref: e, data: n, options: r }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
Ta.register(qc, Qc, Zl, xo, PS, NS, ES);
const lL = () => {
    const e = w.useRef(null),
      t = {
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        marks: [80, 85, 90, 88, 92, 85],
        totalMarks: 520,
      },
      n = {
        labels: t.months,
        datasets: [
          {
            label: "Performance Trends",
            fill: !1,
            lineTension: 0.1,
            backgroundColor: "#007bff",
            borderColor: "#007bff",
            data: t.marks,
          },
        ],
      },
      r = { scales: { y: { beginAtZero: !0 } } };
    return a.jsx(mr, {
      children: a.jsxs(vg, {
        children: [
          a.jsx(pT, { children: a.jsx(xr, {}) }),
          a.jsxs(yg, {
            children: [
              a.jsx(la, { children: "Performance" }),
              a.jsxs(gT, {
                children: [
                  a.jsx(mT, {
                    children: a.jsx(sL, { ref: e, data: n, options: r }),
                  }),
                  a.jsxs(xT, { children: ["Total Marks: ", t.totalMarks] }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  cL = () => {
    const e = [
      { id: 1, date: "2024-05-16", present: !0 },
      { id: 2, date: "2024-05-15", present: !1 },
      { id: 3, date: "2024-05-16", present: !0 },
      { id: 4, date: "2024-05-17", present: !0 },
      { id: 5, date: "2024-05-18", present: !0 },
    ];
    return a.jsx(mr, {
      children: a.jsxs(Pg, {
        children: [
          a.jsx(lO, { children: a.jsx(xr, {}) }),
          a.jsxs(Ig, {
            children: [
              a.jsx(Ng, { children: "Attendance" }),
              a.jsx(Ag, {
                children: e.map(({ id: t, date: n, present: r }) =>
                  a.jsxs(
                    Tg,
                    {
                      children: [
                        a.jsx(cO, { children: n }),
                        a.jsx(uO, {
                          present: r,
                          children: r ? "Present" : "Absent",
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    });
  },
  uL = () => {
    const [e, t] = w.useState([]),
      n = Ot();
    w.useEffect(() => {
      r();
    }, []);
    const r = async () => {
        try {
          const o = await T.get(
            "https://bticlz.onrender.com/api/v1/library/getall"
          );
          t(o.data.books);
        } catch (o) {
          console.error("Error fetching books:", o);
        }
      },
      i = (o, l) => {
        n("/borrow");
      },
      s = async (o, l) => {
        n("/return");
      };
    return a.jsx(mr, {
      children: a.jsxs(Mw, {
        children: [
          a.jsx(PO, { children: a.jsx(xr, {}) }),
          a.jsxs(Lw, {
            children: [
              a.jsx(IO, { children: "Library" }),
              a.jsx(Rw, {
                children: e.map((o) =>
                  a.jsxs(
                    Fw,
                    {
                      children: [
                        a.jsx(zw, { children: o.bookname }),
                        a.jsxs("p", { children: ["Author: ", o.author] }),
                        a.jsx(O0, {
                          onClick: () => i(o._id),
                          children: "Borrow",
                        }),
                        a.jsx(O0, {
                          onClick: () => s(o._id),
                          children: "Return",
                        }),
                      ],
                    },
                    o._id
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    });
  },
  dL = ({ isDashboard: e }) => {
    const [t, n] = w.useState([]),
      r = async () => {
        try {
          const i = await T.get(
            "https://bticlz.onrender.com/api/v1/announcements/getall"
          );
          n(i.data.announcements);
        } catch (i) {
          console.error("Error fetching announcements:", i);
        }
      };
    return (
      w.useEffect(() => {
        r();
      }, []),
      a.jsx(mr, {
        children: a.jsxs(gg, {
          isDashboard: e,
          children: [
            a.jsx(xr, {}),
            a.jsxs(mg, {
              children: [
                a.jsx(xg, { children: "Announcements" }),
                a.jsx(Lu, {
                  children: t.map((i) =>
                    a.jsxs(
                      Ru,
                      {
                        children: [
                          a.jsx(Fu, { children: i.announcement }),
                          a.jsx(zu, {
                            children: new Date(i.date).toLocaleDateString(),
                          }),
                        ],
                      },
                      i._id
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  hL = () => {
    const [e, t] = w.useState({
        name: "",
        email: "",
        phone: "",
        grade: "",
        registrationNumber: "",
        section: "",
        subSection: "",
        _id: "",
      }),
      [n, r] = w.useState(!1),
      i = Ot();
    w.useEffect(() => {
      (async () => {
        try {
          const d = localStorage.getItem("token"),
            h = await T.get("https://bticlz.onrender.com/api/v1/students", {
              headers: { Authorization: `Bearer ${d}` },
            });
          console.log("Student response:", h.data.data);
          const f = h.data.data;
          if (
            f != null &&
            f.phone != null &&
            f.grade != null &&
            f.registrationNumber != null &&
            f.section != null
          )
            t({
              name: f.name,
              email: f.email,
              phone: f.phone,
              grade: f.grade,
              registrationNumber: f.registrationNumber,
              section: f.section,
              subSection: f.subSection || "",
              _id: f._id,
            });
          else {
            const m = await T.get(
              "https://bticlz.onrender.com/api/v1/users/students",
              { headers: { Authorization: `Bearer ${d}` } }
            );
            console.log("User response:", m.data);
            const p = m.data;
            t({
              name: p.name,
              email: p.email,
              phone: p.phone || "",
              grade: p.grade || "",
              registrationNumber: p.registrationNumber || "",
              section: p.section || "",
              subSection: p.subSection || "",
              _id: p._id,
            });
          }
        } catch (d) {
          console.error("Error fetching student info:", d);
        }
      })();
    }, []);
    const s = (u) => {
        const { name: d, value: h } = u.target;
        t((f) => ({ ...f, [d]: h }));
      },
      o = async () => {
        try {
          const u = localStorage.getItem("token");
          await T.post("https://bticlz.onrender.com/api/v1/students", e, {
            headers: { Authorization: `Bearer ${u}` },
          }),
            r(!1);
        } catch (u) {
          console.error("Error updating student info:", u);
        }
      },
      l = () => {
        localStorage.removeItem("token"), i("/student-signIn");
      },
      c = () => {
        r((u) => !u);
      };
    return a.jsx(mr, {
      children: a.jsxs(Mg, {
        children: [
          a.jsx(Lg, { children: a.jsx(xr, {}) }),
          a.jsxs(Rg, {
            children: [
              a.jsx(Fg, { children: "Profile" }),
              a.jsxs(Bc, {
                children: [
                  a.jsxs(tt, {
                    children: [
                      a.jsx(nt, { children: "Name:" }),
                      a.jsx(dt, { children: e.name }),
                    ],
                  }),
                  a.jsxs(tt, {
                    children: [
                      a.jsx(nt, { children: "Phone:" }),
                      n
                        ? a.jsx(us, {
                            type: "text",
                            name: "phone",
                            value: e.phone,
                            onChange: s,
                          })
                        : a.jsx(dt, { children: e.phone }),
                    ],
                  }),
                  a.jsxs(tt, {
                    children: [
                      a.jsx(nt, { children: "Semester:" }),
                      n
                        ? a.jsxs(No, {
                            name: "grade",
                            value: e.grade,
                            onChange: s,
                            children: [
                              a.jsx("option", {
                                value: "",
                                children: "Select Semester",
                              }),
                              a.jsx("option", { value: "1", children: "1" }),
                              a.jsx("option", { value: "2", children: "2" }),
                              a.jsx("option", { value: "3", children: "3" }),
                              a.jsx("option", { value: "4", children: "4" }),
                              a.jsx("option", { value: "5", children: "5" }),
                              a.jsx("option", { value: "6", children: "6" }),
                              a.jsx("option", { value: "7", children: "7" }),
                              a.jsx("option", { value: "8", children: "8" }),
                            ],
                          })
                        : a.jsx(dt, { children: e.grade }),
                    ],
                  }),
                  a.jsxs(tt, {
                    children: [
                      a.jsx(nt, { children: "USN:" }),
                      n
                        ? a.jsx(us, {
                            type: "text",
                            name: "registrationNumber",
                            value: e.registrationNumber,
                            onChange: s,
                          })
                        : a.jsx(dt, { children: e.registrationNumber }),
                    ],
                  }),
                  a.jsxs(tt, {
                    children: [
                      a.jsx(nt, { children: "Section:" }),
                      n
                        ? a.jsxs(No, {
                            name: "section",
                            value: e.section,
                            onChange: s,
                            children: [
                              a.jsx("option", {
                                value: "",
                                children: "Select Section",
                              }),
                              a.jsx("option", {
                                value: "P Cycle",
                                children: "P Cycle",
                              }),
                              a.jsx("option", {
                                value: "C Cycle",
                                children: "C Cycle",
                              }),
                              a.jsx("option", { value: "A", children: "A" }),
                              a.jsx("option", { value: "B", children: "B" }),
                              a.jsx("option", { value: "C", children: "C" }),
                              a.jsx("option", { value: "D", children: "D" }),
                              a.jsx("option", { value: "E", children: "E" }),
                              a.jsx("option", { value: "F", children: "F" }),
                            ],
                          })
                        : a.jsx(dt, { children: e.section }),
                    ],
                  }),
                  n &&
                    (e.section === "P Cycle" || e.section === "C Cycle") &&
                    a.jsxs(tt, {
                      children: [
                        a.jsx(nt, { children: "Sub Section:" }),
                        a.jsxs(No, {
                          name: "subSection",
                          value: e.subSection,
                          onChange: s,
                          children: [
                            a.jsx("option", {
                              value: "",
                              children: "Select Sub Section",
                            }),
                            e.section === "P Cycle" &&
                              a.jsxs(a.Fragment, {
                                children: [
                                  a.jsx("option", {
                                    value: "P1",
                                    children: "P1",
                                  }),
                                  a.jsx("option", {
                                    value: "P2",
                                    children: "P2",
                                  }),
                                  a.jsx("option", {
                                    value: "P3",
                                    children: "P3",
                                  }),
                                  a.jsx("option", {
                                    value: "P4",
                                    children: "P4",
                                  }),
                                  a.jsx("option", {
                                    value: "P5",
                                    children: "P5",
                                  }),
                                ],
                              }),
                            e.section === "C Cycle" &&
                              a.jsxs(a.Fragment, {
                                children: [
                                  a.jsx("option", {
                                    value: "C1",
                                    children: "C1",
                                  }),
                                  a.jsx("option", {
                                    value: "C2",
                                    children: "C2",
                                  }),
                                  a.jsx("option", {
                                    value: "C3",
                                    children: "C3",
                                  }),
                                  a.jsx("option", {
                                    value: "C4",
                                    children: "C4",
                                  }),
                                  a.jsx("option", {
                                    value: "C5",
                                    children: "C5",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  a.jsxs(tt, {
                    children: [
                      a.jsx(nt, { children: "Email:" }),
                      a.jsx(dt, { children: e.email }),
                    ],
                  }),
                  n
                    ? a.jsx(Bw, {
                        onClick: o,
                        children: "Complete Your Profile",
                      })
                    : a.jsx($w, { onClick: c, children: "Edit Profile" }),
                  a.jsx(zg, { onClick: l, children: "Log Out" }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  fL = () => {
    const [e, t] = w.useState([]);
    w.useEffect(() => {
      n();
    }, []);
    const n = async () => {
      try {
        const r = await T.get(
          "https://bticlz.onrender.com/api/v1/class/getall"
        );
        r.data && Array.isArray(r.data.classes)
          ? t(r.data.classes)
          : console.error(
              "Error fetching classes: Invalid data format",
              r.data
            );
      } catch (r) {
        console.error("Error fetching classes:", r.message);
      }
    };
    return a.jsx(jn, {
      children: a.jsxs(mw, {
        children: [
          a.jsx(xw, { children: a.jsx(wn, {}) }),
          a.jsxs(wg, {
            children: [
              a.jsx(vw, { children: "Classes" }),
              a.jsxs(Sg, {
                children: [
                  a.jsx("thead", {
                    children: a.jsxs(Cg, {
                      children: [
                        a.jsx("th", { children: "Class Name" }),
                        a.jsx("th", { children: "Department" }),
                        a.jsx("th", { children: "Semester" }),
                        a.jsx("th", { children: "Section" }),
                        a.jsx("th", { children: "Sub Section" }),
                      ],
                    }),
                  }),
                  a.jsx("tbody", {
                    children: e.map((r, i) =>
                      a.jsxs(
                        _g,
                        {
                          children: [
                            a.jsx(it, { children: r.grade }),
                            a.jsx(it, { children: r.department }),
                            a.jsx(it, { children: r.semester }),
                            a.jsx(it, { children: r.section }),
                            a.jsx(it, { children: r.subSection || "N/A" }),
                          ],
                        },
                        i
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  pL = () => {
    const [e, t] = w.useState([]);
    w.useEffect(() => {
      n();
    }, []);
    const n = async () => {
        try {
          const s = await T.get(
            "https://bticlz.onrender.com/api/v1/students/getall"
          );
          t(s.data.students);
        } catch (s) {
          console.error("Error fetching students:", s);
        }
      },
      r = (s, o, l, c) =>
        e.filter(
          (u) =>
            u.registrationNumber.includes(s) &&
            u.grade === o &&
            u.section === l &&
            (!c || u.subSection === c)
        ),
      i = (s, o) => {
        const l = ["1", "2", "3", "4", "5", "6", "7", "8"],
          c = ["P Cycle", "C Cycle", "A", "B", "C", "D", "E", "F"],
          u = {
            "P Cycle": ["P1", "P2", "P3", "P4", "P5"],
            "C Cycle": ["C1", "C2", "C3", "C4", "C5"],
          };
        return a.jsxs(a.Fragment, {
          children: [
            a.jsx(bi, { children: o }),
            l.map((d) =>
              c.map((h) => {
                let f = null;
                if (u[h])
                  f = u[h].map((m) => {
                    const p = r(s, d, h, m);
                    return p.length > 0
                      ? a.jsxs(
                          "div",
                          {
                            children: [
                              a.jsxs(bi, {
                                children: [
                                  "Semester ",
                                  d,
                                  " - Section ",
                                  h,
                                  " - Sub-Section",
                                  " ",
                                  m,
                                ],
                              }),
                              a.jsxs(Fc, {
                                children: [
                                  a.jsx("thead", {
                                    children: a.jsxs("tr", {
                                      children: [
                                        a.jsx($, { children: "Name" }),
                                        a.jsx($, { children: "Email" }),
                                        a.jsx($, { children: "Phone" }),
                                        a.jsx($, { children: "USN" }),
                                        a.jsx($, { children: "Semester" }),
                                        a.jsx($, { children: "Section" }),
                                        a.jsx($, { children: "Sub-Section" }),
                                      ],
                                    }),
                                  }),
                                  a.jsx("tbody", {
                                    children: p.map((g) =>
                                      a.jsxs(
                                        zc,
                                        {
                                          children: [
                                            a.jsx($, { children: g.name }),
                                            a.jsx($, { children: g.email }),
                                            a.jsx($, { children: g.phone }),
                                            a.jsx($, {
                                              children: g.registrationNumber,
                                            }),
                                            a.jsx($, { children: g.grade }),
                                            a.jsx($, { children: g.section }),
                                            a.jsx($, {
                                              children: g.subSection,
                                            }),
                                          ],
                                        },
                                        g.id
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          },
                          `${s}-${d}-${h}-${m}`
                        )
                      : null;
                  });
                else {
                  const m = r(s, d, h, null);
                  m.length > 0 &&
                    (f = a.jsxs(
                      "div",
                      {
                        children: [
                          a.jsxs(bi, {
                            children: ["Semester ", d, " - Section ", h],
                          }),
                          a.jsxs(Fc, {
                            children: [
                              a.jsx("thead", {
                                children: a.jsxs("tr", {
                                  children: [
                                    a.jsx($, { children: "Name" }),
                                    a.jsx($, { children: "Email" }),
                                    a.jsx($, { children: "Phone" }),
                                    a.jsx($, { children: "USN" }),
                                    a.jsx($, { children: "Semester" }),
                                    a.jsx($, { children: "Section" }),
                                    a.jsx($, { children: "Sub-Section" }),
                                  ],
                                }),
                              }),
                              a.jsx("tbody", {
                                children: m.map((p) =>
                                  a.jsxs(
                                    zc,
                                    {
                                      children: [
                                        a.jsx($, { children: p.name }),
                                        a.jsx($, { children: p.email }),
                                        a.jsx($, { children: p.phone }),
                                        a.jsx($, {
                                          children: p.registrationNumber,
                                        }),
                                        a.jsx($, { children: p.grade }),
                                        a.jsx($, { children: p.section }),
                                        a.jsx($, { children: p.subSection }),
                                      ],
                                    },
                                    p.id
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      },
                      `${s}-${d}-${h}`
                    ));
                }
                return f;
              })
            ),
          ],
        });
      };
    return a.jsx(jn, {
      children: a.jsxs(Ew, {
        children: [
          a.jsx(wn, {}),
          a.jsx(kw, {
            children: a.jsxs(Pw, {
              children: [
                i("CS", "Computer Science Engineering"),
                i("AI", "Artificial Intelligence and Machine Learning"),
                i("CV", "Civil Engineering"),
                i("EC", "Electrical and Communication Engineering"),
              ],
            }),
          }),
        ],
      }),
    });
  },
  gL = () => {
    const [e, t] = w.useState([]);
    w.useEffect(() => {
      n();
    }, []);
    const n = async () => {
        try {
          const i = await T.get(
            "https://bticlz.onrender.com/api/v1/teachers/getall"
          );
          t(i.data.teachers);
        } catch (i) {
          console.error("Error fetching teachers:", i);
        }
      },
      r = (i) => e.filter((s) => s.department === i);
    return a.jsx(jn, {
      children: a.jsxs(Sw, {
        children: [
          a.jsx(wn, {}),
          a.jsx(Cw, {
            children: a.jsxs(_w, {
              children: [
                a.jsx(On, { children: "Teachers" }),
                r("COMPUTER SCIENCE ENGINEERING").length > 0 &&
                  a.jsxs(a.Fragment, {
                    children: [
                      a.jsx(On, { children: "Computer Science Engineering" }),
                      a.jsxs(Or, {
                        children: [
                          a.jsx("thead", {
                            children: a.jsxs("tr", {
                              children: [
                                a.jsx("th", { children: "Name" }),
                                a.jsx("th", { children: "Email" }),
                                a.jsx("th", { children: "Phone" }),
                                a.jsx("th", { children: "Address" }),
                                a.jsx("th", { children: "Qualification" }),
                                a.jsx("th", { children: "Department" }),
                                a.jsx("th", { children: "Position" }),
                                a.jsx("th", { children: "Subject Codes" }),
                              ],
                            }),
                          }),
                          a.jsx("tbody", {
                            children: r("COMPUTER SCIENCE ENGINEERING").map(
                              (i) =>
                                a.jsxs(
                                  Dr,
                                  {
                                    children: [
                                      a.jsx(F, {
                                        "data-label": "Name",
                                        children: i.name,
                                      }),
                                      a.jsx(F, {
                                        "data-label": "Email",
                                        children: i.email,
                                      }),
                                      a.jsx(F, {
                                        "data-label": "Phone",
                                        children: i.phone,
                                      }),
                                      a.jsx(F, {
                                        "data-label": "Address",
                                        children: i.address,
                                      }),
                                      a.jsx(F, {
                                        "data-label": "Qualification",
                                        children: i.qualification,
                                      }),
                                      a.jsx(F, {
                                        "data-label": "Department",
                                        children: i.department,
                                      }),
                                      a.jsx(F, {
                                        "data-label": "Position",
                                        children: i.position,
                                      }),
                                      a.jsx(F, {
                                        "data-label": "Subject Codes",
                                        children: i.subjectCodes,
                                      }),
                                    ],
                                  },
                                  i.id
                                )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                r("ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING").length > 0 &&
                  a.jsxs(a.Fragment, {
                    children: [
                      a.jsx(On, {
                        children:
                          "Artificial Intelligence and Machine Learning",
                      }),
                      a.jsxs(Or, {
                        children: [
                          a.jsx("thead", {
                            children: a.jsxs("tr", {
                              children: [
                                a.jsx("th", { children: "Name" }),
                                a.jsx("th", { children: "Email" }),
                                a.jsx("th", { children: "Phone" }),
                                a.jsx("th", { children: "Address" }),
                                a.jsx("th", { children: "Qualification" }),
                                a.jsx("th", { children: "Department" }),
                                a.jsx("th", { children: "Position" }),
                                a.jsx("th", { children: "Subject Codes" }),
                              ],
                            }),
                          }),
                          a.jsx("tbody", {
                            children: r(
                              "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING"
                            ).map((i) =>
                              a.jsxs(
                                Dr,
                                {
                                  children: [
                                    a.jsx(F, {
                                      "data-label": "Name",
                                      children: i.name,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Email",
                                      children: i.email,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Phone",
                                      children: i.phone,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Address",
                                      children: i.address,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Qualification",
                                      children: i.qualification,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Department",
                                      children: i.department,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Position",
                                      children: i.position,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Subject Codes",
                                      children: i.subjectCodes,
                                    }),
                                  ],
                                },
                                i.id
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                r("CIVIL ENGINEERING").length > 0 &&
                  a.jsxs(a.Fragment, {
                    children: [
                      a.jsx(On, { children: "Civil Engineering" }),
                      a.jsxs(Or, {
                        children: [
                          a.jsx("thead", {
                            children: a.jsxs("tr", {
                              children: [
                                a.jsx("th", { children: "Name" }),
                                a.jsx("th", { children: "Email" }),
                                a.jsx("th", { children: "Phone" }),
                                a.jsx("th", { children: "Address" }),
                                a.jsx("th", { children: "Qualification" }),
                                a.jsx("th", { children: "Department" }),
                                a.jsx("th", { children: "Position" }),
                                a.jsx("th", { children: "Subject Codes" }),
                              ],
                            }),
                          }),
                          a.jsx("tbody", {
                            children: r("CIVIL ENGINEERING").map((i) =>
                              a.jsxs(
                                Dr,
                                {
                                  children: [
                                    a.jsx(F, {
                                      "data-label": "Name",
                                      children: i.name,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Email",
                                      children: i.email,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Phone",
                                      children: i.phone,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Address",
                                      children: i.address,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Qualification",
                                      children: i.qualification,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Department",
                                      children: i.department,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Position",
                                      children: i.position,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Subject Codes",
                                      children: i.subjectCodes,
                                    }),
                                  ],
                                },
                                i.id
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                r("ELECTRONICS AND COMMUNICATION ENGINEERING").length > 0 &&
                  a.jsxs(a.Fragment, {
                    children: [
                      a.jsx(On, {
                        children: "Electronics and Communication Engineering",
                      }),
                      a.jsxs(Or, {
                        children: [
                          a.jsx("thead", {
                            children: a.jsxs("tr", {
                              children: [
                                a.jsx("th", { children: "Name" }),
                                a.jsx("th", { children: "Email" }),
                                a.jsx("th", { children: "Phone" }),
                                a.jsx("th", { children: "Address" }),
                                a.jsx("th", { children: "Qualification" }),
                                a.jsx("th", { children: "Department" }),
                                a.jsx("th", { children: "Position" }),
                                a.jsx("th", { children: "Subject Codes" }),
                              ],
                            }),
                          }),
                          a.jsx("tbody", {
                            children: r(
                              "ELECTRONICS AND COMMUNICATION ENGINEERING"
                            ).map((i) =>
                              a.jsxs(
                                Dr,
                                {
                                  children: [
                                    a.jsx(F, {
                                      "data-label": "Name",
                                      children: i.name,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Email",
                                      children: i.email,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Phone",
                                      children: i.phone,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Address",
                                      children: i.address,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Qualification",
                                      children: i.qualification,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Department",
                                      children: i.department,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Position",
                                      children: i.position,
                                    }),
                                    a.jsx(F, {
                                      "data-label": "Subject Codes",
                                      children: i.subjectCodes,
                                    }),
                                  ],
                                },
                                i.id
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  mL = ({ isDashboard: e }) => {
    const [t, n] = w.useState([]),
      [r, i] = w.useState(!0),
      s = { averageScore: 85, totalStudents: 100 };
    return (
      w.useEffect(() => {
        (async () => {
          try {
            const l = await T.get(
              "https://bticlz.onrender.com/api/v1/students/getall"
            );
            console.log("Students Response:", l.data);
            const c = l.data.students;
            if (!Array.isArray(c))
              throw new Error("Expected an array of students");
            const u = await Promise.all(
              c.map(async (d) => {
                try {
                  const h = await T.get(
                    `https://bticlz.onrender.com/api/v1/marks/percentage/${d._id}`
                  );
                  return (
                    console.log("Percentage Response:", h.data),
                    {
                      id: d._id,
                      name: d.name,
                      score: h.data.externalPercentage,
                    }
                  );
                } catch (h) {
                  return (
                    console.error(
                      `Error fetching percentage for student ${d._id}:`,
                      h
                    ),
                    { id: d._id, name: d.name, score: null }
                  );
                }
              })
            );
            n(u), i(!1);
          } catch (l) {
            console.error("Error fetching individual performance data:", l),
              i(!1);
          }
        })();
      }, []),
      a.jsx(jn, {
        children: a.jsxs(vg, {
          isDashboard: e,
          children: [
            a.jsx(wn, {}),
            a.jsx(yg, {
              children: a.jsxs(cw, {
                children: [
                  a.jsx(la, { children: "School Performance" }),
                  a.jsxs(uw, {
                    children: [
                      a.jsxs("p", {
                        children: ["Average Score: ", s.averageScore],
                      }),
                      a.jsxs("p", {
                        children: ["Total Students: ", s.totalStudents],
                      }),
                    ],
                  }),
                  a.jsx(la, { children: "Individual Performance" }),
                  a.jsx(dw, {
                    children: r
                      ? a.jsx("p", { children: "Loading..." })
                      : t.map((o) =>
                          a.jsxs(
                            "p",
                            {
                              children: [
                                o.name,
                                ":",
                                " ",
                                o.score !== null ? `${o.score}%` : "Not found",
                              ],
                            },
                            o.id
                          )
                        ),
                  }),
                ],
              }),
            }),
          ],
        }),
      })
    );
  },
  xL = () => {
    const [e, t] = w.useState([]),
      [n, r] = w.useState(null),
      i = async () => {
        try {
          const s = await T.get(
            "https://bticlz.onrender.com/api/v1/events/getall"
          );
          t(s.data.events || []);
        } catch (s) {
          console.error("Error fetching events:", s),
            r("Error fetching events");
        }
      };
    return (
      w.useEffect(() => {
        i();
      }, []),
      a.jsx(jn, {
        children: a.jsxs(qj, {
          children: [
            a.jsx(wn, {}),
            a.jsxs(Kj, {
              children: [
                a.jsx("h1", { children: "Events & Calendar" }),
                a.jsxs("div", {
                  children: ["Current Time: ", new Date().toLocaleString()],
                }),
                a.jsx(Qj, { children: a.jsx(Yj, {}) }),
                n && a.jsx(Xj, { children: n }),
                a.jsxs(Au, {
                  children: [
                    a.jsx("h2", { children: "Events" }),
                    e.map((s, o) =>
                      a.jsxs(
                        Tu,
                        {
                          children: [
                            a.jsx("div", { children: s.event }),
                            a.jsx("div", {
                              children: new Date(s.date).toLocaleDateString(),
                            }),
                          ],
                        },
                        o
                      )
                    ),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  vL = () => {
    const [e, t] = w.useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        qualification: "",
        department: "",
        position: "",
        subjectCodes: "",
        _id: "",
      }),
      [n, r] = w.useState(!1),
      i = Ot();
    w.useEffect(() => {
      (async () => {
        try {
          const d = localStorage.getItem("token"),
            h = await T.get("https://bticlz.onrender.com/api/v1/teachers", {
              headers: { Authorization: `Bearer ${d}` },
            });
          console.log("Teacher response:", h.data.data);
          const f = h.data.data;
          if (
            f != null &&
            f.phone != null &&
            f.address != null &&
            f.qualification != null &&
            f.department != null &&
            f.position != null &&
            f.subjectCodes != null
          )
            t({
              name: f.name,
              email: f.email,
              phone: f.phone,
              address: f.address,
              qualification: f.qualification,
              department: f.department || "",
              position: f.position || "",
              subjectCodes: f.subjectCodes || "",
              _id: f._id,
            });
          else {
            const m = await T.get(
              "https://bticlz.onrender.com/api/v1/users/teachers",
              { headers: { Authorization: `Bearer ${d}` } }
            );
            console.log("User response:", m.data);
            const p = m.data;
            t({
              name: p.name,
              email: p.email,
              phone: p.phone || "",
              address: p.address || "",
              qualification: p.qualification || "",
              department: p.department || "",
              position: p.position || "",
              subjectCodes: p.subjectCodes || "",
              _id: p._id,
            });
          }
        } catch (d) {
          console.error("Error fetching teacher info:", d);
        }
      })();
    }, []);
    const s = (u) => {
        const { name: d, value: h } = u.target;
        t((f) => ({ ...f, [d]: h }));
      },
      o = async () => {
        try {
          const u = localStorage.getItem("token");
          await T.post("https://bticlz.onrender.com/api/v1/teachers", e, {
            headers: { Authorization: `Bearer ${u}` },
          }),
            r(!1);
        } catch (u) {
          console.error("Error updating teacher info:", u);
        }
      },
      l = () => {
        localStorage.removeItem("token"), i("/teacher-signIn");
      },
      c = () => {
        r((u) => !u);
      };
    return a.jsx(jn, {
      children: a.jsxs(Mg, {
        children: [
          a.jsx(Lg, { children: a.jsx(wn, {}) }),
          a.jsxs(Rg, {
            children: [
              a.jsx(Fg, { children: "Profile Details" }),
              a.jsxs(Bc, {
                children: [
                  a.jsxs(tt, {
                    children: [
                      a.jsx(nt, { children: "Name:" }),
                      a.jsx(dt, { children: e.name }),
                    ],
                  }),
                  a.jsxs(tt, {
                    children: [
                      a.jsx(nt, { children: "Phone:" }),
                      n
                        ? a.jsx(us, {
                            type: "text",
                            name: "phone",
                            value: e.phone,
                            onChange: s,
                          })
                        : a.jsx(dt, { children: e.phone }),
                    ],
                  }),
                  a.jsxs(tt, {
                    children: [
                      a.jsx(nt, { children: "Address:" }),
                      n
                        ? a.jsx(us, {
                            type: "text",
                            name: "address",
                            value: e.address,
                            onChange: s,
                          })
                        : a.jsx(dt, { children: e.address }),
                    ],
                  }),
                  a.jsxs(tt, {
                    children: [
                      a.jsx(nt, { children: "Qualification:" }),
                      n
                        ? a.jsx(us, {
                            type: "text",
                            name: "qualification",
                            value: e.qualification,
                            onChange: s,
                          })
                        : a.jsx(dt, { children: e.qualification }),
                    ],
                  }),
                  a.jsxs(tt, {
                    children: [
                      a.jsx(nt, { children: "Department:" }),
                      n
                        ? a.jsxs(No, {
                            name: "department",
                            value: e.department,
                            onChange: s,
                            children: [
                              a.jsx("option", {
                                value: "",
                                children: "Select Department",
                              }),
                              a.jsx("option", {
                                value: "COMPUTER SCIENCE ENGINEERING",
                                children: "COMPUTER SCIENCE ENGINEERING",
                              }),
                              a.jsx("option", {
                                value:
                                  "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
                                children:
                                  "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
                              }),
                              a.jsx("option", {
                                value: "CIVIL ENGINEERING",
                                children: "CIVIL ENGINEERING",
                              }),
                              a.jsx("option", {
                                value:
                                  "ELECTRICAL AND COMMUNICATION ENGINEERING",
                                children:
                                  "ELECTRICAL AND COMMUNICATION ENGINEERING",
                              }),
                            ],
                          })
                        : a.jsx(dt, { children: e.department }),
                    ],
                  }),
                  a.jsxs(tt, {
                    children: [
                      a.jsx(nt, { children: "Position:" }),
                      n
                        ? a.jsxs(No, {
                            name: "position",
                            value: e.position,
                            onChange: s,
                            children: [
                              a.jsx("option", {
                                value: "",
                                children: "Select Position",
                              }),
                              a.jsx("option", {
                                value: "Assistant Professor",
                                children: "Assistant Professor",
                              }),
                              a.jsx("option", {
                                value: "Associate Professor",
                                children: "Associate Professor",
                              }),
                            ],
                          })
                        : a.jsx(dt, { children: e.position }),
                    ],
                  }),
                  a.jsxs(tt, {
                    children: [
                      a.jsx(nt, { children: "Subject Codes:" }),
                      n
                        ? a.jsx(us, {
                            type: "text",
                            name: "subjectCodes",
                            value: e.subjectCodes,
                            onChange: s,
                            placeholder:
                              "Enter subject codes separated by space",
                          })
                        : a.jsx(dt, { children: e.subjectCodes }),
                    ],
                  }),
                  a.jsxs(tt, {
                    children: [
                      a.jsx(nt, { children: "Email:" }),
                      a.jsx(dt, { children: e.email }),
                    ],
                  }),
                  n
                    ? a.jsx(Bw, {
                        onClick: o,
                        children: "Complete Your Profile",
                      })
                    : a.jsx($w, { onClick: c, children: "Edit Profile" }),
                  a.jsx(zg, { onClick: l, children: "Log Out" }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  yL = () => {
    const [e, t] = w.useState({
        title: "",
        description: "",
        grade: "",
        deadline: "",
        department: "",
        semester: "",
        section: "",
        subSection: "",
      }),
      [n, r] = w.useState([]),
      [i, s] = w.useState(""),
      [o, l] = w.useState(""),
      [c, u] = w.useState("");
    w.useEffect(() => {
      d();
    }, []);
    const d = async () => {
        try {
          const p = await T.get(
            "https://bticlz.onrender.com/api/v1/assignments/getall"
          );
          r(p.data.assignments || []);
        } catch (p) {
          console.error("Error fetching assignments:", p);
        }
      },
      h = async (p) => {
        if (
          (p.preventDefault(),
          e.title.trim() !== "" &&
            e.description.trim() !== "" &&
            e.grade.trim() !== "" &&
            e.deadline.trim() !== "" &&
            e.department.trim() !== "" &&
            e.semester.trim() !== "" &&
            e.section.trim() !== "")
        )
          try {
            const g = await T.post(
              "https://bticlz.onrender.com/api/v1/assignments",
              e
            );
            Z.success("Assignment added successfully"),
              d(),
              t({
                title: "",
                description: "",
                grade: "",
                deadline: "",
                department: "",
                semester: "",
                section: "",
                subSection: "",
              }),
              s(""),
              l(""),
              u("");
          } catch (g) {
            console.error("Error adding assignment:", g),
              Z.error("Error adding assignment");
          }
        else Z.error("Please fill out all required fields");
      },
      f = (p) =>
        n
          .filter((g) => g.department && g.department === p)
          .reduce((g, y) => {
            const x = `${y.semester}-${y.section}`;
            return g[x] || (g[x] = []), g[x].push(y), g;
          }, {}),
      m = (p) => {
        const g = f(p);
        return Object.keys(g).map((y) =>
          a.jsxs(
            "div",
            {
              children: [
                a.jsxs("h3", { children: ["Section: ", y] }),
                a.jsx(Nw, {
                  children: g[y].map((x) =>
                    a.jsxs(
                      Aw,
                      {
                        children: [
                          a.jsxs("strong", { children: [x.title, ": "] }),
                          x.description,
                          ", ",
                          "deadline is:",
                          " ",
                          x.deadline,
                        ],
                      },
                      x._id
                    )
                  ),
                }),
              ],
            },
            y
          )
        );
      };
    return a.jsx(jn, {
      children: a.jsxs(Og, {
        children: [
          a.jsx(Mu, {}),
          a.jsx(wn, {}),
          a.jsx(Dg, {
            children: a.jsxs(Iw, {
              children: [
                a.jsx(Dn, { children: "Assignments" }),
                a.jsxs(Tw, {
                  onSubmit: h,
                  children: [
                    a.jsx($c, {
                      type: "text",
                      placeholder: "Enter subject code",
                      value: e.title,
                      onChange: (p) => t({ ...e, title: p.target.value }),
                    }),
                    a.jsx(Ow, {
                      placeholder: "Enter assignment description",
                      value: e.description,
                      onChange: (p) => t({ ...e, description: p.target.value }),
                    }),
                    a.jsxs(Mr, {
                      value: i,
                      onChange: (p) => {
                        s(p.target.value),
                          l(""),
                          u(""),
                          t({
                            ...e,
                            grade: "",
                            department: p.target.value,
                            semester: "",
                            section: "",
                            subSection: "",
                          });
                      },
                      children: [
                        a.jsx("option", {
                          value: "",
                          disabled: !0,
                          children: "Assign Department",
                        }),
                        a.jsx("option", {
                          value: "COMPUTER SCIENCE ENGINEERING",
                          children: "COMPUTER SCIENCE ENGINEERING",
                        }),
                        a.jsx("option", {
                          value: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
                          children:
                            "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
                        }),
                        a.jsx("option", {
                          value: "CIVIL ENGINEERING",
                          children: "CIVIL ENGINEERING",
                        }),
                        a.jsx("option", {
                          value: "ELECTRONICS AND COMMUNICATION ENGINEERING",
                          children: "ELECTRONICS AND COMMUNICATION ENGINEERING",
                        }),
                      ],
                    }),
                    i &&
                      a.jsxs(Mr, {
                        value: o,
                        onChange: (p) => {
                          l(p.target.value),
                            u(""),
                            t({
                              ...e,
                              grade: p.target.value,
                              semester: p.target.value,
                              section: "",
                              subSection: "",
                            });
                        },
                        children: [
                          a.jsx("option", {
                            value: "",
                            disabled: !0,
                            children: "Select Semester",
                          }),
                          a.jsx("option", { value: "1", children: "1" }),
                          a.jsx("option", { value: "2", children: "2" }),
                          a.jsx("option", { value: "3", children: "3" }),
                          a.jsx("option", { value: "4", children: "4" }),
                          a.jsx("option", { value: "5", children: "5" }),
                          a.jsx("option", { value: "6", children: "6" }),
                          a.jsx("option", { value: "7", children: "7" }),
                          a.jsx("option", { value: "8", children: "8" }),
                        ],
                      }),
                    o &&
                      a.jsxs(Mr, {
                        value: c,
                        onChange: (p) => {
                          u(p.target.value),
                            t({
                              ...e,
                              section: p.target.value,
                              subSection: "",
                            });
                        },
                        children: [
                          a.jsx("option", {
                            value: "",
                            disabled: !0,
                            children: "Select Section",
                          }),
                          a.jsx("option", {
                            value: "P Cycle",
                            children: "P Cycle",
                          }),
                          a.jsx("option", {
                            value: "C Cycle",
                            children: "C Cycle",
                          }),
                          a.jsx("option", { value: "A", children: "A" }),
                          a.jsx("option", { value: "B", children: "B" }),
                          a.jsx("option", { value: "C", children: "C" }),
                          a.jsx("option", { value: "D", children: "D" }),
                          a.jsx("option", { value: "E", children: "E" }),
                          a.jsx("option", { value: "F", children: "F" }),
                        ],
                      }),
                    c &&
                      (c === "P Cycle" || c === "C Cycle") &&
                      a.jsxs(Mr, {
                        value: e.subSection,
                        onChange: (p) =>
                          t({ ...e, subSection: p.target.value }),
                        children: [
                          a.jsx("option", {
                            value: "",
                            disabled: !0,
                            children: "Select Sub Section",
                          }),
                          c === "P Cycle" &&
                            a.jsxs(a.Fragment, {
                              children: [
                                a.jsx("option", {
                                  value: "P1",
                                  children: "P1",
                                }),
                                a.jsx("option", {
                                  value: "P2",
                                  children: "P2",
                                }),
                                a.jsx("option", {
                                  value: "P3",
                                  children: "P3",
                                }),
                                a.jsx("option", {
                                  value: "P4",
                                  children: "P4",
                                }),
                                a.jsx("option", {
                                  value: "P5",
                                  children: "P5",
                                }),
                              ],
                            }),
                          c === "C Cycle" &&
                            a.jsxs(a.Fragment, {
                              children: [
                                a.jsx("option", {
                                  value: "C1",
                                  children: "C1",
                                }),
                                a.jsx("option", {
                                  value: "C2",
                                  children: "C2",
                                }),
                                a.jsx("option", {
                                  value: "C3",
                                  children: "C3",
                                }),
                                a.jsx("option", {
                                  value: "C4",
                                  children: "C4",
                                }),
                                a.jsx("option", {
                                  value: "C5",
                                  children: "C5",
                                }),
                              ],
                            }),
                        ],
                      }),
                    a.jsx($c, {
                      type: "date",
                      placeholder: "Enter assignment deadline",
                      value: e.deadline,
                      onChange: (p) => t({ ...e, deadline: p.target.value }),
                    }),
                    a.jsx(Dw, { type: "submit", children: "Add Assignment" }),
                  ],
                }),
                n.length > 0 &&
                  a.jsxs(a.Fragment, {
                    children: [
                      a.jsx(Dn, { children: "Computer Science Engineering" }),
                      m("COMPUTER SCIENCE ENGINEERING"),
                      a.jsx(Dn, {
                        children:
                          "Artificial Intelligence and Machine Learning",
                      }),
                      m("ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING"),
                      a.jsx(Dn, { children: "Civil Engineering" }),
                      m("CIVIL ENGINEERING"),
                      a.jsx(Dn, {
                        children: "Electronics and Communication Engineering",
                      }),
                      m("ELECTRONICS AND COMMUNICATION ENGINEERING"),
                    ],
                  }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  bL = () => {
    const [e, t] = w.useState([]),
      [n, r] = w.useState([]);
    w.useEffect(() => {
      i();
    }, []);
    const i = async () => {
        try {
          const c = await T.get(
            "https://bticlz.onrender.com/api/v1/students/getall"
          );
          t(c.data.students), s(c.data.students);
        } catch (c) {
          console.error("Error fetching students:", c);
        }
      },
      s = (c) => {
        const u = c.map((d) => ({ id: d.id, name: d.name, status: "Present" }));
        r(u);
      },
      o = (c, u) => {
        const d = n.map((h) => (h.id === c ? { ...h, status: u } : h));
        r(d);
      },
      l = async () => {
        try {
          const c = n.map(({ id: d, name: h, status: f }) => ({
              studentId: d,
              name: h,
              status: f,
            })),
            u = await T.post("https://bticlz.onrender.com/api/v1/attendance", {
              attendanceData: c,
            });
          console.log("Attendance data submitted:", u.data);
        } catch (c) {
          console.error("Error submitting attendance data:", c);
        }
      };
    return a.jsx(jn, {
      children: a.jsxs(Pg, {
        children: [
          a.jsx(wn, {}),
          a.jsx(Ig, {
            children: a.jsxs(yw, {
              children: [
                a.jsx(Ng, { children: "Attendance" }),
                a.jsx(Ag, {
                  children: e.map((c, u) => {
                    var d, h, f;
                    return a.jsxs(
                      U.Fragment,
                      {
                        children: [
                          a.jsxs(Tg, {
                            children: [
                              a.jsx(bw, { children: c.name }),
                              a.jsxs(vs, {
                                children: [
                                  a.jsx("input", {
                                    type: "checkbox",
                                    checked:
                                      ((d = n[u]) == null
                                        ? void 0
                                        : d.status) === "Present",
                                    onChange: () => o(c.id, "Present"),
                                  }),
                                  "Present",
                                ],
                              }),
                              a.jsxs(vs, {
                                children: [
                                  a.jsx("input", {
                                    type: "checkbox",
                                    checked:
                                      ((h = n[u]) == null
                                        ? void 0
                                        : h.status) === "Absent",
                                    onChange: () => o(c.id, "Absent"),
                                  }),
                                  "Absent",
                                ],
                              }),
                              a.jsxs(vs, {
                                children: [
                                  a.jsx("input", {
                                    type: "checkbox",
                                    checked:
                                      ((f = n[u]) == null
                                        ? void 0
                                        : f.status) === "Absent with apology",
                                    onChange: () =>
                                      o(c.id, "Absent with apology"),
                                  }),
                                  "Absent with apology",
                                ],
                              }),
                            ],
                          }),
                          u !== e.length - 1 && a.jsx(jw, {}),
                        ],
                      },
                      c.id
                    );
                  }),
                }),
                a.jsx(ww, { onClick: l, children: "Submit" }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  jL = () => {
    const [e, t] = w.useState([]),
      [n, r] = w.useState(null);
    w.useEffect(() => {
      i();
    }, []);
    const i = async () => {
        try {
          const c = await T.get(
            "https://bticlz.onrender.com/api/v1/students/getall"
          );
          t(c.data.students);
        } catch (c) {
          console.error("Error fetching students:", c);
        }
      },
      s = (c) => {
        r(`/add-marks/${c}`);
      },
      o = (c, u, d, h) =>
        e.filter(
          (f) =>
            f.registrationNumber.includes(c) &&
            f.grade === u &&
            f.section === d &&
            (!h || f.subSection === h)
        ),
      l = (c, u) => {
        const d = ["1", "2", "3", "4", "5", "6", "7", "8"],
          h = ["P Cycle", "C Cycle", "A", "B", "C", "D", "E", "F"],
          f = {
            "P Cycle": ["P1", "P2", "P3", "P4", "P5"],
            "C Cycle": ["C1", "C2", "C3", "C4", "C5"],
          };
        return a.jsxs(a.Fragment, {
          children: [
            a.jsx(rr, { children: u }),
            d.map((m) =>
              h.map((p) => {
                let g = null;
                if (f[p])
                  g = f[p].map((y) => {
                    const x = o(c, m, p, y);
                    return x.length > 0
                      ? a.jsxs(
                          "div",
                          {
                            children: [
                              a.jsxs(rr, {
                                children: [
                                  "Semester ",
                                  m,
                                  " - Section ",
                                  p,
                                  " - Sub-Section",
                                  " ",
                                  y,
                                ],
                              }),
                              a.jsx(Mc, {
                                children: x.map((v) =>
                                  a.jsxs(
                                    Lc,
                                    {
                                      children: [
                                        a.jsxs("div", {
                                          children: [
                                            "Name: ",
                                            v.name,
                                            ", USN:",
                                            " ",
                                            v.registrationNumber,
                                          ],
                                        }),
                                        a.jsx("div", {
                                          children: a.jsx(Rc, {
                                            onClick: () => s(v._id),
                                            children: "Add Marks",
                                          }),
                                        }),
                                      ],
                                    },
                                    v._id
                                  )
                                ),
                              }),
                            ],
                          },
                          `${c}-${m}-${p}-${y}`
                        )
                      : null;
                  });
                else {
                  const y = o(c, m, p, null);
                  y.length > 0 &&
                    (g = a.jsxs(
                      "div",
                      {
                        children: [
                          a.jsxs(rr, {
                            children: ["Semester ", m, " - Section ", p],
                          }),
                          a.jsx(Mc, {
                            children: y.map((x) =>
                              a.jsxs(
                                Lc,
                                {
                                  children: [
                                    a.jsxs("div", {
                                      children: [
                                        "Name: ",
                                        x.name,
                                        ", USN:",
                                        " ",
                                        x.registrationNumber,
                                      ],
                                    }),
                                    a.jsx("div", {
                                      children: a.jsx(Rc, {
                                        onClick: () => s(x._id),
                                        children: "Add Marks",
                                      }),
                                    }),
                                  ],
                                },
                                x._id
                              )
                            ),
                          }),
                        ],
                      },
                      `${c}-${m}-${p}`
                    ));
                }
                return g;
              })
            ),
          ],
        });
      };
    return n
      ? a.jsx(ja, { to: n })
      : a.jsx(jn, {
          children: a.jsxs(Eg, {
            children: [
              a.jsx(wn, {}),
              a.jsxs(kg, {
                children: [
                  a.jsx(rr, { children: "Exam Evaluation Details" }),
                  l("CS", "Computer Science and Engineering"),
                  l("AI", "Artificial Intelligence and Machine Learning"),
                  l("CV", "Civil Engineering"),
                  l("EC", "Electronics and Communication Engineering"),
                ],
              }),
            ],
          }),
        });
  },
  rm = j.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom right, orange, #401902, #edd68c);
  min-height: 100vh; /* Full height of the viewport */
`,
  im = j.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  width: 80%;
  max-width: 300px; /* Limit form width */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,
  cr = j.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`,
  sm = j.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: #ff4500;
  color: white;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: orange;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`,
  wL = () => {
    const [e, t] = w.useState(""),
      [n, r] = w.useState(""),
      [i, s] = w.useState(""),
      o = async (l) => {
        l.preventDefault();
        try {
          (
            await T.post("https://bticlz.onrender.com/api/v1/users/admins", {
              name: e,
              email: n,
              password: i,
            })
          ).status === 200
            ? (window.location.href = "/admin-signIn")
            : console.error("Registration failed");
        } catch (c) {
          console.error("Error during registration:", c);
        }
      };
    return a.jsxs(rm, {
      children: [
        a.jsx("h2", { children: "Admin Register" }),
        a.jsxs(im, {
          children: [
            a.jsx("h3", { children: "Welcome to BTI" }),
            a.jsx(cr, {
              type: "text",
              placeholder: "Enter Your Name",
              value: e,
              onChange: (l) => t(l.target.value),
            }),
            a.jsx(cr, {
              type: "email",
              placeholder: "Email",
              value: n,
              onChange: (l) => r(l.target.value),
              required: !0,
            }),
            a.jsx(cr, {
              type: "password",
              placeholder: "Password",
              value: i,
              onChange: (l) => s(l.target.value),
              required: !0,
            }),
            a.jsx(sm, { onClick: (l) => o(l), children: "Register" }),
          ],
        }),
      ],
    });
  },
  SL = () => {
    const [e, t] = w.useState(""),
      [n, r] = w.useState(""),
      [i, s] = w.useState(""),
      o = async (l) => {
        l.preventDefault();
        try {
          (
            await T.post("https://bticlz.onrender.com/api/v1/users/students", {
              name: e,
              email: n,
              password: i,
            })
          ).status === 200
            ? (window.location.href = "/student-signIn")
            : console.error("Registration failed");
        } catch (c) {
          console.error("Error during registration:", c);
        }
      };
    return a.jsxs(rm, {
      children: [
        a.jsx("h2", { children: "Student Register" }),
        a.jsxs(im, {
          children: [
            a.jsx("h3", { children: "Welcome to BTI" }),
            a.jsx(cr, {
              type: "text",
              placeholder: "Enter Your Name",
              value: e,
              onChange: (l) => t(l.target.value),
            }),
            a.jsx(cr, {
              type: "email",
              placeholder: "Email",
              value: n,
              onChange: (l) => r(l.target.value),
              required: !0,
            }),
            a.jsx(cr, {
              type: "password",
              placeholder: "Password",
              value: i,
              onChange: (l) => s(l.target.value),
              required: !0,
            }),
            a.jsx(sm, { onClick: (l) => o(l), children: "Register" }),
          ],
        }),
      ],
    });
  },
  CL = () => {
    const [e, t] = w.useState(""),
      [n, r] = w.useState(""),
      [i, s] = w.useState(""),
      o = async (l) => {
        l.preventDefault();
        try {
          (
            await T.post("https://bticlz.onrender.com/api/v1/users/teachers", {
              name: e,
              email: n,
              password: i,
            })
          ).status === 200
            ? (window.location.href = "/teacher-signIn")
            : console.error("Registration failed");
        } catch (c) {
          console.error("Error during registration:", c);
        }
      };
    return a.jsxs(rm, {
      children: [
        a.jsx("h2", { children: "Teacher Register" }),
        a.jsxs(im, {
          children: [
            a.jsx("h3", { children: "Welcome to BTI" }),
            a.jsx(cr, {
              type: "text",
              placeholder: "Enter Your Name",
              value: e,
              onChange: (l) => t(l.target.value),
            }),
            a.jsx(cr, {
              type: "email",
              placeholder: "Email",
              value: n,
              onChange: (l) => r(l.target.value),
              required: !0,
            }),
            a.jsx(cr, {
              type: "password",
              placeholder: "Password",
              value: i,
              onChange: (l) => s(l.target.value),
              required: !0,
            }),
            a.jsx(sm, { onClick: (l) => o(l), children: "Register" }),
          ],
        }),
      ],
    });
  },
  _L = () =>
    a.jsx(Pk, {
      children: a.jsxs(jk, {
        children: [
          a.jsxs(V, {
            path: "/",
            element: a.jsx(Q2, {}),
            children: [
              a.jsx(V, { index: !0, element: a.jsx(AP, {}) }),
              a.jsx(V, { path: "about", element: a.jsx(TP, {}) }),
              a.jsx(V, { path: "notes", element: a.jsx(OP, {}) }),
              a.jsx(V, { path: "chatroom", element: a.jsx(DP, {}) }),
            ],
          }),
          a.jsx(V, { path: "choose-user", element: a.jsx(LP, {}) }),
          a.jsx(V, { path: "admin-signIn", element: a.jsx(eN, {}) }),
          a.jsx(V, { path: "student-signIn", element: a.jsx(iN, {}) }),
          a.jsx(V, { path: "teacher-signIn", element: a.jsx(lN, {}) }),
          a.jsx(V, { path: "admin/register", element: a.jsx(wL, {}) }),
          a.jsx(V, { path: "students/register", element: a.jsx(SL, {}) }),
          a.jsx(V, { path: "teachers/register", element: a.jsx(CL, {}) }),
          a.jsx(V, {
            path: "admin/dashboard",
            element: a.jsx(Rt, { element: ST }),
          }),
          a.jsx(V, {
            path: "admin/classes",
            element: a.jsx(Rt, { element: qT }),
          }),
          a.jsx(V, {
            path: "admin/exams",
            element: a.jsx(Rt, { element: aO }),
          }),
          a.jsx(V, { path: "/add-marks/:studentId", element: a.jsx(ZT, {}) }),
          a.jsx(V, { path: "/borrow", element: a.jsx(eO, {}) }),
          a.jsx(V, { path: "/return", element: a.jsx(tO, {}) }),
          a.jsx(V, {
            path: "admin/attendance",
            element: a.jsx(Rt, { element: dO }),
          }),
          a.jsx(V, {
            path: "admin/performance",
            element: a.jsx(Rt, { element: hw }),
          }),
          a.jsx(V, {
            path: "admin/teachers",
            element: a.jsx(Rt, { element: pO }),
          }),
          a.jsx(V, {
            path: "admin/students",
            element: a.jsx(Rt, { element: xO }),
          }),
          a.jsx(V, {
            path: "admin/assignments",
            element: a.jsx(Rt, { element: CO }),
          }),
          a.jsx(V, {
            path: "admin/library",
            element: a.jsx(Rt, { element: NO }),
          }),
          a.jsx(V, {
            path: "admin/communication",
            element: a.jsx(Rt, { element: lw }),
          }),
          a.jsx(V, {
            path: "admin/events",
            element: a.jsx(Rt, { element: Jj }),
          }),
          a.jsx(V, {
            path: "admin/settings",
            element: a.jsx(Rt, { element: TO }),
          }),
          a.jsx(V, {
            path: "student/dashboard",
            element: a.jsx(Vn, { element: TT }),
          }),
          a.jsx(V, {
            path: "student/classes",
            element: a.jsx(Vn, { element: OO }),
          }),
          a.jsx(V, {
            path: "student/assignments",
            element: a.jsx(Vn, { element: DO }),
          }),
          a.jsx(V, {
            path: "student/exams",
            element: a.jsx(Vn, { element: aL }),
          }),
          a.jsx(V, {
            path: "student/performance",
            element: a.jsx(Vn, { element: lL }),
          }),
          a.jsx(V, {
            path: "student/attendance",
            element: a.jsx(Vn, { element: cL }),
          }),
          a.jsx(V, {
            path: "student/library",
            element: a.jsx(Vn, { element: uL }),
          }),
          a.jsx(V, {
            path: "student/communication",
            element: a.jsx(Vn, { element: dL }),
          }),
          a.jsx(V, {
            path: "student/settings",
            element: a.jsx(Vn, { element: hL }),
          }),
          a.jsx(V, {
            path: "teacher/dashboard",
            element: a.jsx(cn, { element: BT }),
          }),
          a.jsx(V, {
            path: "teacher/classes",
            element: a.jsx(cn, { element: fL }),
          }),
          a.jsx(V, {
            path: "teacher/students",
            element: a.jsx(cn, { element: pL }),
          }),
          a.jsx(V, {
            path: "teacher/teachers",
            element: a.jsx(cn, { element: gL }),
          }),
          a.jsx(V, {
            path: "teacher/assignments",
            element: a.jsx(cn, { element: yL }),
          }),
          a.jsx(V, {
            path: "teacher/exams",
            element: a.jsx(cn, { element: jL }),
          }),
          a.jsx(V, {
            path: "teacher/performance",
            element: a.jsx(cn, { element: mL }),
          }),
          a.jsx(V, {
            path: "teacher/attendance",
            element: a.jsx(cn, { element: bL }),
          }),
          a.jsx(V, {
            path: "teacher/communication",
            element: a.jsx(cn, { element: gw }),
          }),
          a.jsx(V, {
            path: "teacher/events",
            element: a.jsx(cn, { element: xL }),
          }),
          a.jsx(V, {
            path: "teacher/settings",
            element: a.jsx(cn, { element: vL }),
          }),
        ],
      }),
    });
ah.createRoot(document.getElementById("root")).render(
  a.jsx(U.StrictMode, { children: a.jsx(_L, {}) })
);
