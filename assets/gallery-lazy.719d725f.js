import { _ as _export_sfc, o as openBlock, i as createBlock, k as withCtx, q as renderSlot, e as createCommentVNode, g as normalizeClass, m as resolveDynamicComponent } from "./lodash.1321b47a.js";
const _sfc_main = {
  name: "lazy",
  props: ["tag", "offset", "delay"],
  data: function() {
    return {
      observer: null,
      intersected: false
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.observe();
    });
  },
  destroyed() {
    if (this.observer)
      this.observer.disconnect();
  },
  methods: {
    observe() {
      const vue = this;
      this.observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
          setTimeout(function() {
            vue.intersected = true;
            vue.observer.disconnect();
          }, vue.delay || 0);
        }
      }, {
        threshold: 0,
        rootMargin: (this.offset || 100) + "px"
      });
      this.observer.observe(this.$el);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag || "div"), {
    class: normalizeClass({ mounted: _ctx.intersected })
  }, {
    default: withCtx(() => [
      _ctx.intersected ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true)
    ]),
    _: 3
  }, 8, ["class"]);
}
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __unplugin_components_1 as _ };
//# sourceMappingURL=gallery-lazy.719d725f.js.map
