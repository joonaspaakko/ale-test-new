import { b as getAugmentedNamespace, c as commonjsGlobal, g as getDefaultExportFromCjs } from "./jquery.050764e9.js";
import { N as EffectScope, R as ReactiveEffect, O as customRef, P as effect, Q as effectScope, S as getCurrentScope, T as isProxy, U as isReactive, V as isReadonly, W as isRef, X as isShallow, Y as markRaw, Z as onScopeDispose, $ as proxyRefs, D as reactive, a0 as readonly, K as ref, a1 as shallowReactive, a2 as shallowReadonly, A as shallowRef, a3 as stop, a4 as toRaw, a5 as toRef, a6 as toRefs, a7 as triggerRef, B as unref, a8 as camelize, a9 as capitalize, g as normalizeClass, l as normalizeProps, n as normalizeStyle, t as toDisplayString, aa as toHandlerKey, ab as BaseTransition, ac as Comment, F as Fragment, ad as KeepAlive, ae as Static, af as Suspense, ag as Teleport, ah as Text, ai as callWithAsyncErrorHandling, aj as callWithErrorHandling, ak as cloneVNode, al as compatUtils, C as computed, i as createBlock, e as createCommentVNode, c as createElementBlock, a as createBaseVNode, am as createHydrationRenderer, an as createPropsRestProxy, ao as createRenderer, ap as createSlots, s as createStaticVNode, x as createTextVNode, d as createVNode, aq as defineAsyncComponent, G as defineComponent, ar as defineEmits, as as defineExpose, at as defineProps, au as devtools, av as getCurrentInstance, aw as getTransitionRawChildren, ax as guardReactiveProps, I as h, ay as handleError, az as initCustomFormatter, H as inject, aA as isMemoSame, aB as isRuntimeOnly, aC as isVNode, aD as mergeDefaults, aE as mergeProps, E as nextTick, aF as onActivated, aG as onBeforeMount, aH as onBeforeUnmount, aI as onBeforeUpdate, aJ as onDeactivated, aK as onErrorCaptured, aL as onMounted, aM as onRenderTracked, aN as onRenderTriggered, aO as onServerPrefetch, aP as onUnmounted, aQ as onUpdated, o as openBlock, f as popScopeId, J as provide, p as pushScopeId, aR as queuePostFlushCb, aS as registerRuntimeCompiler, j as renderList, q as renderSlot, r as resolveComponent, b as resolveDirective, m as resolveDynamicComponent, aT as resolveFilter, aU as resolveTransitionHooks, aV as setBlockTracking, aW as setDevtoolsHook, aX as setTransitionHooks, aY as ssrContextKey, aZ as ssrUtils, a_ as toHandlers, a$ as transformVNodeArgs, b0 as useAttrs, b1 as useSSRContext, b2 as useSlots, b3 as useTransitionState, b4 as version, b5 as warn, L as watch, b6 as watchEffect, b7 as watchPostEffect, b8 as watchSyncEffect, b9 as withAsyncContext, k as withCtx, ba as withDefaults, w as withDirectives, bb as withMemo, bc as withScopeId, bd as Transition, be as TransitionGroup, bf as VueElement, M as createApp, bg as createSSRApp, bh as defineCustomElement, bi as defineSSRCustomElement, bj as hydrate, bk as initDirectivesForSSR, bl as render, bm as useCssModule, bn as useCssVars, u as vModelCheckbox, bo as vModelDynamic, y as vModelRadio, bp as vModelSelect, bq as vModelText, v as vShow, br as withKeys, h as withModifiers } from "./lodash.1321b47a.js";
const compile = () => {
};
var vue_runtime_esmBundler = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compile,
  EffectScope,
  ReactiveEffect,
  customRef,
  effect,
  effectScope,
  getCurrentScope,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  isShallow,
  markRaw,
  onScopeDispose,
  proxyRefs,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  stop,
  toRaw,
  toRef,
  toRefs,
  triggerRef,
  unref,
  camelize,
  capitalize,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  toDisplayString,
  toHandlerKey,
  BaseTransition,
  Comment,
  Fragment,
  KeepAlive,
  Static,
  Suspense,
  Teleport,
  Text,
  callWithAsyncErrorHandling,
  callWithErrorHandling,
  cloneVNode,
  compatUtils,
  computed,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createElementVNode: createBaseVNode,
  createHydrationRenderer,
  createPropsRestProxy,
  createRenderer,
  createSlots,
  createStaticVNode,
  createTextVNode,
  createVNode,
  defineAsyncComponent,
  defineComponent,
  defineEmits,
  defineExpose,
  defineProps,
  get devtools() {
    return devtools;
  },
  getCurrentInstance,
  getTransitionRawChildren,
  guardReactiveProps,
  h,
  handleError,
  initCustomFormatter,
  inject,
  isMemoSame,
  isRuntimeOnly,
  isVNode,
  mergeDefaults,
  mergeProps,
  nextTick,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onServerPrefetch,
  onUnmounted,
  onUpdated,
  openBlock,
  popScopeId,
  provide,
  pushScopeId,
  queuePostFlushCb,
  registerRuntimeCompiler,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDirective,
  resolveDynamicComponent,
  resolveFilter,
  resolveTransitionHooks,
  setBlockTracking,
  setDevtoolsHook,
  setTransitionHooks,
  ssrContextKey,
  ssrUtils,
  toHandlers,
  transformVNodeArgs,
  useAttrs,
  useSSRContext,
  useSlots,
  useTransitionState,
  version,
  warn,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
  withAsyncContext,
  withCtx,
  withDefaults,
  withDirectives,
  withMemo,
  withScopeId,
  Transition,
  TransitionGroup,
  VueElement,
  createApp,
  createSSRApp,
  defineCustomElement,
  defineSSRCustomElement,
  hydrate,
  initDirectivesForSSR,
  render,
  useCssModule,
  useCssVars,
  vModelCheckbox,
  vModelDynamic,
  vModelRadio,
  vModelSelect,
  vModelText,
  vShow,
  withKeys,
  withModifiers
}, Symbol.toStringTag, { value: "Module" }));
var require$$0 = /* @__PURE__ */ getAugmentedNamespace(vue_runtime_esmBundler);
var dist = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }("undefined" != typeof self ? self : commonjsGlobal, function() {
    return function(e) {
      function t(r) {
        if (n[r])
          return n[r].exports;
        var o = n[r] = { i: r, l: false, exports: {} };
        return e[r].call(o.exports, o, o.exports, t), o.l = true, o.exports;
      }
      var n = {};
      return t.m = e, t.c = n, t.d = function(e2, n2, r) {
        t.o(e2, n2) || Object.defineProperty(e2, n2, { configurable: false, enumerable: true, get: r });
      }, t.n = function(e2) {
        var n2 = e2 && e2.__esModule ? function() {
          return e2.default;
        } : function() {
          return e2;
        };
        return t.d(n2, "a", n2), n2;
      }, t.o = function(e2, t2) {
        return Object.prototype.hasOwnProperty.call(e2, t2);
      }, t.p = "../dist/", t(t.s = 0);
    }([function(e, t, n) {
      (function(r) {
        function o(e2) {
          if (Array.isArray(e2)) {
            for (var t2 = 0, n2 = Array(e2.length); t2 < e2.length; t2++)
              n2[t2] = e2[t2];
            return n2;
          }
          return Array.from(e2);
        }
        var u;
        n(2), n(3);
        var c = {}, i = {}, a = [], l = [], s = false, f = function(e2) {
          return e2 = "string" == typeof e2 ? JSON.parse(e2.replace(/\'/gi, '"')) : e2, e2 instanceof Array ? { "": e2 } : e2;
        }, p = function(e2, t2, n2, r2) {
          var o2 = true === n2.modifiers.push, u2 = true === n2.modifiers.avoid, c2 = true == !n2.modifiers.focus, i2 = true === n2.modifiers.once, l2 = true === n2.modifiers.propagte;
          u2 ? (a = a.filter(function(e3) {
            return !e3 === t2;
          }), a.push(t2)) : v({ b: e2, push: o2, once: i2, focus: c2, propagte: l2, el: r2.el });
        }, d = function(e2, t2) {
          for (var n2 in e2) {
            var r2 = c.encodeKey(e2[n2]), o2 = i[r2].el.indexOf(t2);
            i[r2].el.length > 1 && o2 > -1 ? i[r2].el.splice(o2, 1) : delete i[r2];
          }
        };
        c.install = function(e2, t2) {
          l = [].concat(o(t2 && t2.prevent ? t2.prevent : [])), e2.directive("shortkey", { beforeMount: function(e3, t3, n2) {
            var r2 = f(t3.value);
            p(r2, e3, t3, n2);
          }, updated: function(e3, t3, n2) {
            var r2 = f(t3.oldValue);
            d(r2, e3);
            var o2 = f(t3.value);
            p(o2, e3, t3, n2);
          }, unmounted: function(e3, t3) {
            var n2 = f(t3.value);
            d(n2, e3);
          } });
        }, c.decodeKey = function(e2) {
          return y(e2);
        }, c.encodeKey = function(e2) {
          var t2 = {};
          t2.shiftKey = e2.includes("shift"), t2.ctrlKey = e2.includes("ctrl"), t2.metaKey = e2.includes("meta"), t2.altKey = e2.includes("alt");
          var n2 = y(t2);
          return n2 += e2.filter(function(e3) {
            return !["shift", "ctrl", "meta", "alt"].includes(e3);
          }).join("");
        };
        var y = function(e2) {
          var t2 = "";
          return ("Shift" === e2.key || e2.shiftKey) && (t2 += "shift"), ("Control" === e2.key || e2.ctrlKey) && (t2 += "ctrl"), ("Meta" === e2.key || e2.metaKey) && (t2 += "meta"), ("Alt" === e2.key || e2.altKey) && (t2 += "alt"), "ArrowUp" === e2.key && (t2 += "arrowup"), "ArrowLeft" === e2.key && (t2 += "arrowleft"), "ArrowRight" === e2.key && (t2 += "arrowright"), "ArrowDown" === e2.key && (t2 += "arrowdown"), "AltGraph" === e2.key && (t2 += "altgraph"), "Escape" === e2.key && (t2 += "esc"), "Enter" === e2.key && (t2 += "enter"), "Tab" === e2.key && (t2 += "tab"), " " === e2.key && (t2 += "space"), "PageUp" === e2.key && (t2 += "pageup"), "PageDown" === e2.key && (t2 += "pagedown"), "Home" === e2.key && (t2 += "home"), "End" === e2.key && (t2 += "end"), "Delete" === e2.key && (t2 += "del"), "Backspace" === e2.key && (t2 += "backspace"), "Insert" === e2.key && (t2 += "insert"), "NumLock" === e2.key && (t2 += "numlock"), "CapsLock" === e2.key && (t2 += "capslock"), "Pause" === e2.key && (t2 += "pause"), "ContextMenu" === e2.key && (t2 += "contextmenu"), "ScrollLock" === e2.key && (t2 += "scrolllock"), "BrowserHome" === e2.key && (t2 += "browserhome"), "MediaSelect" === e2.key && (t2 += "mediaselect"), (e2.key && " " !== e2.key && 1 === e2.key.length || /F\d{1,2}|\//g.test(e2.key)) && (t2 += e2.key.toLowerCase()), t2;
        }, h2 = function(e2) {
          var t2 = new CustomEvent("shortkey", { bubbles: false });
          i[e2].key && (t2.srcKey = i[e2].key);
          var n2 = i[e2].el;
          i[e2].propagte ? n2.forEach(function(e3) {
            return e3.dispatchEvent(t2);
          }) : n2[n2.length - 1].dispatchEvent(t2);
        };
        c.keyDown = function(e2) {
          (!i[e2].once && !i[e2].push || i[e2].push && !s) && h2(e2);
        }, r && Object({ NODE_ENV: "production" }) && function() {
          document.addEventListener("keydown", function(e2) {
            var t2 = c.decodeKey(e2);
            if (m(t2)) {
              if (i[t2].propagte || (e2.preventDefault(), e2.stopPropagation()), i[t2].focus)
                c.keyDown(t2), s = true;
              else if (!s) {
                var n2 = i[t2].el;
                n2[n2.length - 1].focus(), s = true;
              }
            }
          }, true), document.addEventListener("keyup", function(e2) {
            var t2 = c.decodeKey(e2);
            m(t2) && (i[t2].propagte || (e2.preventDefault(), e2.stopPropagation()), (i[t2].once || i[t2].push) && h2(t2)), s = false;
          }, true);
        }();
        var v = function(e2) {
          var t2 = e2.b, n2 = e2.push, r2 = e2.once, o2 = e2.focus, u2 = e2.propagte, a2 = e2.el;
          for (var l2 in t2) {
            var s2 = c.encodeKey(t2[l2]), f2 = i[s2] && i[s2].el ? i[s2].el : [], p2 = i[s2] && i[s2].propagte;
            f2.push(a2), i[s2] = { push: n2, once: r2, focus: o2, key: l2, propagte: p2 || u2, el: f2 };
          }
        }, m = function(e2) {
          var t2 = !!a.find(function(e3) {
            return e3 === document.activeElement;
          }), n2 = !!l.find(function(e3) {
            return document.activeElement && document.activeElement.matches(e3);
          });
          return !!i[e2] && !(t2 || n2);
        };
        void 0 !== e && e.exports ? e.exports = c : void 0 !== (u = function() {
          return c;
        }.call(t, n, t, e)) && (e.exports = u);
      }).call(t, n(1));
    }, function(e, t) {
      function n() {
        throw new Error("setTimeout has not been defined");
      }
      function r() {
        throw new Error("clearTimeout has not been defined");
      }
      function o(e2) {
        if (s === setTimeout)
          return setTimeout(e2, 0);
        if ((s === n || !s) && setTimeout)
          return s = setTimeout, setTimeout(e2, 0);
        try {
          return s(e2, 0);
        } catch (t2) {
          try {
            return s.call(null, e2, 0);
          } catch (t3) {
            return s.call(this, e2, 0);
          }
        }
      }
      function u(e2) {
        if (f === clearTimeout)
          return clearTimeout(e2);
        if ((f === r || !f) && clearTimeout)
          return f = clearTimeout, clearTimeout(e2);
        try {
          return f(e2);
        } catch (t2) {
          try {
            return f.call(null, e2);
          } catch (t3) {
            return f.call(this, e2);
          }
        }
      }
      function c() {
        h2 && d && (h2 = false, d.length ? y = d.concat(y) : v = -1, y.length && i());
      }
      function i() {
        if (!h2) {
          var e2 = o(c);
          h2 = true;
          for (var t2 = y.length; t2; ) {
            for (d = y, y = []; ++v < t2; )
              d && d[v].run();
            v = -1, t2 = y.length;
          }
          d = null, h2 = false, u(e2);
        }
      }
      function a(e2, t2) {
        this.fun = e2, this.array = t2;
      }
      function l() {
      }
      var s, f, p = e.exports = {};
      !function() {
        try {
          s = "function" == typeof setTimeout ? setTimeout : n;
        } catch (e2) {
          s = n;
        }
        try {
          f = "function" == typeof clearTimeout ? clearTimeout : r;
        } catch (e2) {
          f = r;
        }
      }();
      var d, y = [], h2 = false, v = -1;
      p.nextTick = function(e2) {
        var t2 = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n2 = 1; n2 < arguments.length; n2++)
            t2[n2 - 1] = arguments[n2];
        y.push(new a(e2, t2)), 1 !== y.length || h2 || o(i);
      }, a.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, p.title = "browser", p.browser = true, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = l, p.addListener = l, p.once = l, p.off = l, p.removeListener = l, p.removeAllListeners = l, p.emit = l, p.prependListener = l, p.prependOnceListener = l, p.listeners = function(e2) {
        return [];
      }, p.binding = function(e2) {
        throw new Error("process.binding is not supported");
      }, p.cwd = function() {
        return "/";
      }, p.chdir = function(e2) {
        throw new Error("process.chdir is not supported");
      }, p.umask = function() {
        return 0;
      };
    }, function(e, t) {
      Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    }, function(e, t) {
      !function() {
        if ("undefined" != typeof window)
          try {
            var e2 = new window.CustomEvent("test", { cancelable: true });
            if (e2.preventDefault(), true !== e2.defaultPrevented)
              throw new Error("Could not prevent default");
          } catch (e3) {
            var t2 = function(e4, t3) {
              var n, r;
              return t3 = t3 || {}, t3.bubbles = !!t3.bubbles, t3.cancelable = !!t3.cancelable, n = document.createEvent("CustomEvent"), n.initCustomEvent(e4, t3.bubbles, t3.cancelable, t3.detail), r = n.preventDefault, n.preventDefault = function() {
                r.call(this);
                try {
                  Object.defineProperty(this, "defaultPrevented", { get: function() {
                    return true;
                  } });
                } catch (e5) {
                  this.defaultPrevented = true;
                }
              }, n;
            };
            t2.prototype = window.Event.prototype, window.CustomEvent = t2;
          }
      }();
    }]);
  });
})(dist);
var shortkey = /* @__PURE__ */ getDefaultExportFromCjs(dist.exports);
export { require$$0 as r, shortkey as s };
//# sourceMappingURL=index.ee874ed1.js.map
