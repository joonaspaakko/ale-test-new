import { _ as __unplugin_components_1 } from "./gallery-lazy.719d725f.js";
import { a as __unplugin_components_0 } from "./gallery-search.436556ed.js";
import { c as slugify } from "./gallery.db031907.js";
import { f as findSubPageSource } from "./gallery-findSubPageSource.65b5640c.js";
import { _ as _export_sfc, c as createElementBlock, d as createVNode, a as createBaseVNode, F as Fragment, j as renderList, n as normalizeStyle, e as createCommentVNode, r as resolveComponent, b as resolveDirective, o as openBlock, i as createBlock, k as withCtx, t as toDisplayString, w as withDirectives, x as createTextVNode } from "./lodash.1321b47a.js";
import "./gallery-page-title.a786f9b3.js";
import "./content-script-helpers.e49fc91b.js";
import "./jquery.050764e9.js";
import "./gallery-timeStringToSeconds.9aa0cb6a.js";
import "./gallery-makeCoverUrl.8378190f.js";
import "./index.ee874ed1.js";
import "./howler.22814ddb.js";
import "./tippy.82bfa66a.js";
var galleryPublishers_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "alePublishers",
  mixins: [slugify, findSubPageSource],
  data: function() {
    return {
      collectionSource: "pageCollection",
      listReady: false,
      pageTitle: "Publishers",
      pageSubTitle: null
    };
  },
  computed: {
    optionsOpenMargin: function() {
      if (this.$store.state.searchOptOpenHeight) {
        return {
          marginBottom: 0
        };
      } else {
        return false;
      }
    },
    galleryStyle: function() {
      if (this.$store.state.searchOptOpenHeight) {
        return {
          overflow: "hidden",
          height: this.$store.state.searchOptOpenHeight - this.$refs.wrapper.offsetTop * 2 + "px"
        };
      } else {
        return false;
      }
    }
  },
  methods: {
    makeCollection: function() {
      const vue = this;
      let publishersCollection = [];
      let addedCounter = 1;
      _.eachRight(vue.subPageSource.collection, function(book) {
        if (book.publishers) {
          _.each(book.publishers, function(publisher) {
            if (publisher.name) {
              let publishersAdded = _.find(publishersCollection, { name: publisher.name });
              if (!publishersAdded) {
                const newSeries = {
                  name: publisher.name,
                  url: vue.slugify(publisher.name),
                  added: addedCounter,
                  books: [book.title || book.shortTitle],
                  authors: book.authors,
                  narrators: book.narrators,
                  series: book.series
                };
                publishersCollection.push(newSeries);
                ++addedCounter;
              } else {
                publishersAdded.books.push(book.title || book.shortTitle);
                return false;
              }
            }
          });
        }
      });
      _.reverse(publishersCollection);
      this.$store.commit("prop", { key: "pageCollection", value: publishersCollection });
      this.updateListRenderingOptions();
      this.listReady = true;
    },
    updateListRenderingOptions: function() {
      let vue = this;
      const list = {
        scope: [
          { active: true, key: "name", tippy: "Search publishers by name", weight: 5 },
          { active: true, key: "books", tippy: "Search publishers by book titles", weight: 1 },
          { active: true, key: "authors.name", tippy: "Search publishers by authors", weight: 1 },
          { active: true, key: "narrators.name", tippy: "Search publishers by narrators", weight: 1 },
          { active: true, key: "series.name", tippy: "Search publishers by series", weight: 1 }
        ],
        filter: [
          {
            active: false,
            type: "filterExtras",
            label: "Number of books",
            key: "books",
            range: [1, function() {
              let publishers = _.get(vue.$store.state, vue.collectionSource);
              let max = _.maxBy(publishers, function(publisher) {
                if (publisher.books)
                  return publisher.books.length;
              });
              return max ? max.books.length : 1;
            }()],
            rangeMinDist: 0,
            rangeSuffix: "",
            rangeMin: function() {
              return 1;
            },
            rangeMax: function() {
              let publishers = _.get(vue.$store.state, vue.collectionSource);
              let max = _.maxBy(publishers, function(publisher) {
                if (publisher.books)
                  return publisher.books.length;
              });
              return max ? max.books.length : 1;
            },
            condition: function(publisher) {
              if (publisher.books) {
                let min = this.range[0];
                let max = this.range[1];
                return publisher.books.length >= min && publisher.books.length <= max;
              }
            }
          }
        ],
        sort: [
          { active: false, key: "randomize", label: "Randomize", type: "sortExtras", tippy: "Ignores sorting and randomizes instead unless there's an active search." },
          { type: "divider", key: "divider1" },
          { active: true, current: true, key: "added", label: "Added", type: "sort", tippy: '<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>' },
          { active: true, current: false, key: "name", label: "Name", type: "sort", tippy: "Sort by publisher's name" },
          { active: false, current: false, key: "amount", label: "Number of books", type: "sort" }
        ]
      };
      this.$setListRenderingOpts(list);
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "books-total",
  content: "Total number of books from this publisher."
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_search = __unplugin_components_0;
  const _component_router_link = resolveComponent("router-link");
  const _component_gallery_lazy = __unplugin_components_1;
  const _directive_tippy = resolveDirective("tippy");
  return _ctx.listReady ? (openBlock(), createElementBlock("div", {
    key: 0,
    id: "ale-publishers",
    class: "box-layout-wrapper",
    style: normalizeStyle($options.optionsOpenMargin),
    ref: "wrapper"
  }, [
    createVNode(_component_gallery_search, { collectionSource: _ctx.collectionSource }, null, 8, ["collectionSource"]),
    createBaseVNode("div", {
      style: normalizeStyle($options.galleryStyle),
      class: "page-content"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.$store.getters.collection, (item, index) => {
        return openBlock(), createBlock(_component_gallery_lazy, {
          class: "single-box",
          "data-name": item.name,
          key: "publishers:" + item.name
        }, {
          default: withCtx(() => [
            createVNode(_component_router_link, {
              to: { name: "publisher", params: { publisher: item.url }, query: { subPageSource: _ctx.subPageSource.name } }
            }, {
              default: withCtx(() => [
                createBaseVNode("h2", null, toDisplayString(item.name), 1),
                item.books && item.books.length ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
                  createTextVNode(toDisplayString(item.books.length), 1)
                ])), [
                  [_directive_tippy, { placement: "right" }]
                ]) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["to"])
          ]),
          _: 2
        }, 1032, ["data-name"]);
      }), 128))
    ], 4)
  ], 4)) : createCommentVNode("", true);
}
var galleryPublishers = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ca5bfb4e"]]);
export { galleryPublishers as default };
//# sourceMappingURL=gallery-publishers.1af28afe.js.map
