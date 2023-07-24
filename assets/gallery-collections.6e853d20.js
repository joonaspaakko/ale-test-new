import { _ as __unplugin_components_1 } from "./gallery-lazy.719d725f.js";
import { _ as __unplugin_components_0 } from "./gallery-page-title.a786f9b3.js";
import { c as slugify } from "./gallery.c4d212c8.js";
import { m as makeCoverUrl } from "./gallery-makeCoverUrl.8378190f.js";
import { _ as _export_sfc, c as createElementBlock, d as createVNode, a as createBaseVNode, t as toDisplayString, F as Fragment, j as renderList, e as createCommentVNode, r as resolveComponent, b as resolveDirective, o as openBlock, g as normalizeClass, i as createBlock, k as withCtx, w as withDirectives } from "./lodash.1321b47a.js";
import "./content-script-helpers.e49fc91b.js";
import "./jquery.050764e9.js";
import "./index.ee874ed1.js";
import "./howler.22814ddb.js";
import "./tippy.82bfa66a.js";
var galleryCollections_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "aleCollections",
  mixins: [slugify, makeCoverUrl],
  data: function() {
    return {
      collections: null,
      pageTitle: null,
      pageSubTitle: null
    };
  },
  computed: {
    filteredCollections() {
      const vue = this;
      const array = _.filter(this.collections, function(chunk) {
        if (chunk.key === "audible") {
          return !vue.$store.state.sticky.collectionsHidePremade;
        } else {
          return true;
        }
      });
      return array;
    }
  },
  created: function() {
    this.pageTitle = "Collections";
    this.pageSubTitle = null;
    const vue = this;
    let collections = [];
    console.log(this.$store.state.library);
    _.each(this.$store.state.library.collections, function(collection) {
      let newCollection = {
        id: collection.id,
        title: collection.title,
        isSpecial: vue.isSpecial(collection)
      };
      newCollection.books = _.filter(vue.$store.state.library.books, function(book) {
        return _.includes(collection.books, book.asin);
      });
      collections.push(newCollection);
    });
    collections = _.orderBy(
      collections,
      [
        function(o) {
          return vue.isSpecial(o);
        },
        "title"
      ],
      [
        "desc",
        "asc"
      ]
    );
    this.collections = this.chunkify(collections);
    this.$store.commit("prop", [
      { key: "pageCollection", value: [] },
      { key: "mutatingCollection", value: [] }
    ]);
  },
  methods: {
    getRandomBooks: function(books, number) {
      return _.sampleSize(books, number);
    },
    isSpecial(obj) {
      return _.get(obj, "id", "").indexOf("__") === 0;
    },
    chunkify(collections) {
      const specialBoysLength = _.filter(collections, { isSpecial: true }).length;
      const specialBoysChunk = collections.splice(0, specialBoysLength);
      return [
        {
          key: "audible",
          items: specialBoysChunk
        },
        {
          key: "user",
          items: collections
        }
      ];
    }
  }
};
const _hoisted_1 = {
  key: 0,
  id: "ale-collections",
  class: "box-layout-wrapper"
};
const _hoisted_2 = { class: "hide-premade-btn-wrapper" };
const _hoisted_3 = { class: "sample-covers-square" };
const _hoisted_4 = ["src"];
const _hoisted_5 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_page_title = __unplugin_components_0;
  const _component_router_link = resolveComponent("router-link");
  const _component_gallery_lazy = __unplugin_components_1;
  const _directive_tippy = resolveDirective("tippy");
  return _ctx.collections ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_gallery_page_title),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", {
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$store.commit("prop", { key: "sticky.collectionsHidePremade", value: !_ctx.$store.state.sticky.collectionsHidePremade }))
      }, toDisplayString(_ctx.$store.state.sticky.collectionsHidePremade ? "show" : "hide") + " premade collections ", 1)
    ]),
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.filteredCollections, (chunk) => {
      return openBlock(), createElementBlock("div", {
        key: chunk.key,
        class: normalizeClass([chunk.key + "-collection"])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(chunk.items, (collection, index) => {
          return openBlock(), createBlock(_component_gallery_lazy, {
            tag: collection.isSpecial ? "span" : "div",
            class: normalizeClass(["single-box", { "is-special": collection.isSpecial }]),
            "data-collection-id": collection.id,
            key: collection.id
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($options.getRandomBooks(collection.books, 4), (book) => {
                  return openBlock(), createElementBlock("div", {
                    class: "sample-cover",
                    key: book.asin
                  }, [
                    createVNode(_component_router_link, {
                      to: {
                        name: "collection",
                        params: { collection: collection.id },
                        query: { book: book.asin }
                      }
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("img", {
                          crossorigin: "anonymous",
                          src: _ctx.makeCoverUrl(book.cover),
                          alt: ""
                        }, null, 8, _hoisted_4)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]);
                }), 128))
              ]),
              createVNode(_component_router_link, {
                class: "collection-title",
                to: { name: "collection", params: { collection: collection.id } }
              }, {
                default: withCtx(() => [
                  createBaseVNode("h2", null, toDisplayString(collection.title), 1)
                ]),
                _: 2
              }, 1032, ["to"]),
              collection.books && collection.books.length ? (openBlock(), createBlock(_component_router_link, {
                key: 0,
                class: "books-total",
                to: { name: "collection", params: { collection: collection.id } }
              }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("div", {
                    innerHTML: collection.books.length,
                    content: "Total number of books in this collection."
                  }, null, 8, _hoisted_5), [
                    [_directive_tippy, { placement: "right" }]
                  ])
                ]),
                _: 2
              }, 1032, ["to"])) : createCommentVNode("", true)
            ]),
            _: 2
          }, 1032, ["tag", "data-collection-id", "class"]);
        }), 128))
      ], 2);
    }), 128))
  ])) : createCommentVNode("", true);
}
var galleryCollections = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-06c0c804"]]);
export { galleryCollections as default };
//# sourceMappingURL=gallery-collections.6e853d20.js.map
