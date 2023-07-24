import { f as findSubPageSource, _ as __unplugin_components_1 } from "./gallery-findSubPageSource.65b5640c.js";
import { _ as __unplugin_components_0 } from "./gallery-page-title.a786f9b3.js";
import { c as slugify } from "./gallery.c4d212c8.js";
import { m as makeCoverUrl } from "./gallery-makeCoverUrl.8378190f.js";
import { _ as _export_sfc, c as createElementBlock, d as createVNode, F as Fragment, j as renderList, e as createCommentVNode, r as resolveComponent, b as resolveDirective, o as openBlock, a as createBaseVNode, i as createBlock, k as withCtx, x as createTextVNode, t as toDisplayString, w as withDirectives } from "./lodash.1321b47a.js";
import "./content-script-helpers.e49fc91b.js";
import "./jquery.050764e9.js";
import "./index.ee874ed1.js";
import "./howler.22814ddb.js";
import "./tippy.82bfa66a.js";
var galleryCategories_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "aleCategories",
  mixins: [slugify, makeCoverUrl, findSubPageSource],
  data: function() {
    return {
      categories: null,
      listReady: false,
      pageTitle: "Categories",
      pageSubTitle: null
    };
  },
  methods: {
    getRandomBooks: function(books, number) {
      let booksWithCategories = _.filter(books, function(book) {
        return book.categories && book.categories.length > 1 && book.cover;
      });
      return _.sampleSize(booksWithCategories, number);
    },
    makeCollection: function() {
      const vue = this;
      let categories = {};
      categories.parent = [];
      _.each(vue.subPageSource.collection, function(book, index) {
        if (book.categories) {
          const parentCategory = _.get(book, "categories[0].name");
          let parentObj = _.find(categories.parent, ["name", parentCategory]);
          if (!parentObj) {
            parentObj = categories.parent.push({
              name: parentCategory,
              slug: vue.slugify(parentCategory),
              books: []
            });
          }
          parentObj = _.find(categories.parent, ["name", parentCategory]);
          parentObj.books.push(book);
          const childCategory = _.get(book, "categories[1].name");
          if (childCategory) {
            if (!parentObj.sub)
              parentObj.sub = [];
            let childObj = _.find(parentObj.sub, ["name", childCategory]);
            if (!childObj) {
              childObj = parentObj.sub.push({
                name: childCategory,
                slug: vue.slugify(childCategory),
                books: []
              });
            }
            childObj = _.find(parentObj.sub, ["name", childCategory]);
            childObj.books.push(book);
          }
        }
      });
      categories.parent = _.orderBy(categories.parent, "name", "asc");
      _.each(categories.parent, function(category, index) {
        category.sub = _.orderBy(category.sub, "name", "asc");
      });
      this.categories = categories.parent;
      this.$store.commit("prop", { key: "pageCollection", value: [] });
      this.$store.commit("prop", { key: "mutatingCollection", value: [] });
      this.listReady = true;
    }
  }
};
const _hoisted_1 = {
  key: 0,
  id: "ale-categories",
  class: "box-layout-wrapper"
};
const _hoisted_2 = ["data-category"];
const _hoisted_3 = { key: 1 };
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = {
  key: 2,
  class: "child-categories"
};
const _hoisted_7 = { key: 1 };
const _hoisted_8 = {
  key: 2,
  class: "number-of-books"
};
const _hoisted_9 = { class: "sample-covers" };
const _hoisted_10 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_page_title = __unplugin_components_0;
  const _component_gallery_library_wishlist_switcher = __unplugin_components_1;
  const _component_router_link = resolveComponent("router-link");
  const _directive_tippy = resolveDirective("tippy");
  return _ctx.listReady ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_gallery_page_title),
    createVNode(_component_gallery_library_wishlist_switcher),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.categories, (parent, index) => {
      return openBlock(), createElementBlock("div", {
        class: "single-box",
        "data-category": parent.name,
        key: parent.name
      }, [
        createBaseVNode("h2", null, [
          parent.slug ? (openBlock(), createBlock(_component_router_link, {
            key: 0,
            to: { name: "category", params: { parent: parent.slug, child: void 0 }, query: { subPageSource: _ctx.subPageSource.name } }
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(parent.name), 1)
            ]),
            _: 2
          }, 1032, ["to"])) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(parent.name), 1))
        ]),
        parent.slug ? (openBlock(), createBlock(_component_router_link, {
          key: 0,
          class: "books-total",
          to: { name: "category", params: { parent: parent.slug, child: void 0 }, query: { subPageSource: _ctx.subPageSource.name } }
        }, {
          default: withCtx(() => [
            parent.books ? withDirectives((openBlock(), createElementBlock("div", {
              key: 0,
              innerHTML: parent.books.length,
              content: "Total number of books in this category."
            }, null, 8, _hoisted_4)), [
              [_directive_tippy, { placement: "right" }]
            ]) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1032, ["to"])) : parent.books ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          innerHTML: parent.books.length,
          content: "Total number of books in this category."
        }, null, 8, _hoisted_5)), [
          [_directive_tippy, { placement: "right" }]
        ]) : createCommentVNode("", true),
        parent.sub ? (openBlock(), createElementBlock("div", _hoisted_6, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(parent.sub, (child, index2) => {
            return openBlock(), createElementBlock("div", {
              key: child.name
            }, [
              parent && parent.slug && (child && child.slug) ? (openBlock(), createBlock(_component_router_link, {
                key: 0,
                to: { name: "category", params: { parent: parent.slug, child: child.slug }, query: { subPageSource: _ctx.subPageSource.name } }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(child.name), 1)
                ]),
                _: 2
              }, 1032, ["to"])) : (openBlock(), createElementBlock("span", _hoisted_7)),
              child.books ? (openBlock(), createElementBlock("span", _hoisted_8, "(" + toDisplayString(child.books.length) + ")", 1)) : createCommentVNode("", true)
            ]);
          }), 128))
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_9, [
          parent && parent.books ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($options.getRandomBooks(parent.books, 5), (book, index2) => {
            return openBlock(), createElementBlock("div", {
              class: "sample-cover",
              key: book.asin
            }, [
              createVNode(_component_router_link, {
                to: {
                  name: "category",
                  params: {
                    parent: book.categories[0] ? _ctx.slugify(book.categories[0].name) : null,
                    child: book.categories[1] ? _ctx.slugify(book.categories[1].name) : null
                  },
                  query: { book: book.asin, subPageSource: _ctx.subPageSource.name }
                }
              }, {
                default: withCtx(() => [
                  createBaseVNode("img", {
                    crossorigin: "anonymous",
                    src: _ctx.makeCoverUrl(book.cover),
                    alt: ""
                  }, null, 8, _hoisted_10)
                ]),
                _: 2
              }, 1032, ["to"])
            ]);
          }), 128)) : createCommentVNode("", true)
        ])
      ], 8, _hoisted_2);
    }), 128))
  ])) : createCommentVNode("", true);
}
var galleryCategories = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-39601c31"]]);
export { galleryCategories as default };
//# sourceMappingURL=gallery-categories.87722c04.js.map
