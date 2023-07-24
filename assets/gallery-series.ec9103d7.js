import { _ as __unplugin_components_1 } from "./gallery-lazy.719d725f.js";
import { a as __unplugin_components_0 } from "./gallery-search.6ac06c4e.js";
import { f as findSubPageSource } from "./gallery-findSubPageSource.65b5640c.js";
import { _ as _export_sfc, c as createElementBlock, d as createVNode, a as createBaseVNode, F as Fragment, j as renderList, n as normalizeStyle, e as createCommentVNode, r as resolveComponent, b as resolveDirective, o as openBlock, i as createBlock, k as withCtx, t as toDisplayString, w as withDirectives, g as normalizeClass } from "./lodash.1321b47a.js";
import "./gallery.c4d212c8.js";
import "./gallery-makeCoverUrl.8378190f.js";
import "./jquery.050764e9.js";
import "./index.ee874ed1.js";
import "./content-script-helpers.e49fc91b.js";
import "./howler.22814ddb.js";
import "./tippy.82bfa66a.js";
import "./gallery-page-title.a786f9b3.js";
import "./gallery-timeStringToSeconds.9aa0cb6a.js";
var gallerySeries_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "aleSeries",
  mixins: [findSubPageSource],
  data: function() {
    return {
      collectionSource: "pageCollection",
      pageTitle: "Series",
      pageSubTitle: null,
      listReady: false
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
      let seriesCollection = [];
      let addedCounter = 1;
      let librarySeries = this.$store.state.library.series;
      _.eachRight(vue.subPageSource.collection, function(book) {
        if (book.series) {
          _.each(book.series, function(series) {
            const seriesAdded = _.find(seriesCollection, { asin: series.asin });
            let thisSeriesFromLibrary = !!librarySeries ? _.find(librarySeries, { asin: series.asin }) : false;
            let myBooks, maxSeriesBookNumber, myMaxBookNumber;
            if (!seriesAdded) {
              if (vue.subPageSource.library) {
                thisSeriesFromLibrary.allBooksMinusDupes = vue.removeDuplicates(thisSeriesFromLibrary.allBooks);
                myBooks = thisSeriesFromLibrary.allBooksMinusDupes.filter((ab) => thisSeriesFromLibrary.books.some((asin) => asin === ab.asin));
                maxSeriesBookNumber = _.max(thisSeriesFromLibrary.allBooksMinusDupes.map((b) => _.toNumber(b.bookNumbers)));
                myMaxBookNumber = _.max(myBooks.map((b) => _.toNumber(b.bookNumbers)));
              }
              const newSeries = {
                name: series.name,
                asin: series.asin,
                added: addedCounter,
                books: [book.title || book.shortTitle],
                authors: book.authors,
                narrators: book.narrators,
                publishers: book.publishers
              };
              if (vue.subPageSource.library && !!thisSeriesFromLibrary) {
                ++addedCounter;
                newSeries.minRating = _.toNumber(book.myRating), newSeries.allBooksMinusDupes = thisSeriesFromLibrary.allBooksMinusDupes;
                newSeries.missingLatest = myMaxBookNumber !== maxSeriesBookNumber, seriesCollection.push(newSeries);
              } else if (vue.subPageSource.wishlist) {
                ++addedCounter;
                seriesCollection.push(newSeries);
              }
            } else {
              seriesAdded.books.push(book.title || book.shortTitle);
              if (vue.subPageSource.library) {
                seriesAdded.minRating = _.min(
                  [seriesAdded.minRating, book.myRating].map(_.toNumber).filter((rating) => !_.isNaN(rating))
                );
                seriesAdded.allBooksMinusDupes = thisSeriesFromLibrary.allBooksMinusDupes;
                seriesAdded.missingLatest = myMaxBookNumber !== maxSeriesBookNumber;
              }
            }
          });
        }
      });
      _.reverse(seriesCollection);
      this.$store.commit("prop", { key: "pageCollection", value: seriesCollection });
      this.updateListRenderingOptions();
      this.listReady = true;
    },
    updateListRenderingOptions: function() {
      let vue = this;
      let list = {
        scope: [
          { active: true, key: "name", tippy: "Search series by name", weight: 5 },
          { active: true, key: "books", tippy: "Search series by book titles", weight: 1 },
          { active: true, key: "authors.name", tippy: "Search series by authors", weight: 1 },
          { active: true, key: "narrators.name", tippy: "Search series by narrators", weight: 1 },
          { active: true, key: "publishers.name", tippy: "Search series by publishers", weight: 1 }
        ],
        filter: [
          {
            active: false,
            type: "filterExtras",
            label: "Number of books",
            key: "inSeries",
            range: [1, function() {
              let series = _.get(vue.$store.state, vue.collectionSource);
              let max = _.maxBy(series, function(series2) {
                if (series2.books)
                  return series2.books.length;
              });
              return max ? max.books.length : 1;
            }()],
            rangeMinDist: 0,
            rangeSuffix: "",
            rangeMin: function() {
              return 1;
            },
            rangeMax: function() {
              let series = _.get(vue.$store.state, vue.collectionSource);
              let max = _.maxBy(series, function(series2) {
                if (series2.books)
                  return series2.books.length;
              });
              return max ? max.books.length : 1;
            },
            condition: function(series) {
              if (series.books) {
                let min = this.range[0];
                let max = this.range[1];
                return series.books.length >= min && series.books.length <= max;
              }
            }
          },
          {
            excludeFromWishlist: true,
            type: "divider",
            key: "divider1.0"
          },
          {
            excludeFromWishlist: true,
            active: false,
            type: "filterExtras",
            label: "Rating (min)",
            tippy: "Based on the book you rated lowest in the series",
            key: "min-rating",
            condition: function(series) {
              return (series.minRating || 0) >= this.range[0];
            },
            range: true,
            rangeMin: () => 1,
            rangeMax: () => 5,
            rangeMinDist: 0,
            rangeSuffix: "",
            tooltipFormatter: function(val) {
              switch (val) {
                case 1:
                  return val + " (Not for me)";
                case 2:
                  return val + " (It\u2019s okay)";
                case 3:
                  return val + " (Pretty good)";
                case 4:
                  return val + " (It\u2019s great)";
                case 5:
                  return val + " (I love it)";
                default:
                  return 0;
              }
            }
          },
          {
            excludeFromWishlist: true,
            type: "divider",
            key: "divider1.1"
          },
          {
            excludeFromWishlist: true,
            active: false,
            type: "filterExtras",
            label: "Incomplete series",
            key: "series-incomplete",
            tippy: "Series where I don't own all the books",
            condition: function(series) {
              return series.allBooksMinusDupes.length > series.books.length;
            }
          },
          {
            excludeFromWishlist: true,
            type: "divider",
            key: "divider1.2"
          },
          {
            excludeFromWishlist: true,
            active: false,
            type: "filterExtras",
            label: "Missing latest book",
            key: "missing-latest",
            condition: function(series) {
              return series.missingLatest && series.allBooksMinusDupes.length > series.books.length;
            }
          }
        ],
        sort: [
          {
            active: false,
            key: "randomize",
            label: "Randomize",
            type: "sortExtras",
            tippy: "Ignores sorting and randomizes instead unless there's an active search."
          },
          { type: "divider", key: "divider1" },
          {
            active: true,
            current: true,
            key: "added",
            label: "Added",
            type: "sort",
            tippy: '<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'
          },
          { active: true, current: false, key: "name", label: "Name", type: "sort", tippy: "Sort by series name" },
          {
            active: false,
            current: false,
            key: "amount",
            label: "Number of books",
            type: "sort"
          },
          {
            excludeFromWishlist: true,
            active: false,
            current: false,
            key: "amountTotal",
            label: "Total number of books",
            type: "sort"
          },
          {
            excludeFromWishlist: true,
            active: false,
            current: false,
            key: "missing",
            label: "Missing",
            tippy: "Number of missing books",
            type: "sort"
          }
        ]
      };
      if (this.subPageSource.wishlist) {
        list.filter = _.filter(list.filter, function(o) {
          return !o.excludeFromWishlist;
        });
        list.sort = _.filter(list.sort, function(o) {
          return !o.excludeFromWishlist;
        });
      }
      this.$setListRenderingOpts(list);
    },
    removeDuplicates: function(books) {
      let dollybooks = _.clone(books);
      var n = 0;
      _.each(dollybooks, function(book) {
        book.order = ++n;
      });
      dollybooks = _.groupBy(dollybooks, "bookNumbers");
      _.each(dollybooks, function(chunk, i) {
        if (chunk.length === 1) {
          dollybooks[i] = [chunk[0]];
        } else {
          var inLibrary = _.filter(chunk, function(o) {
            return !o.notInLibrary;
          });
          if (inLibrary.length > 0) {
            dollybooks[i] = inLibrary;
          } else {
            dollybooks[i] = [chunk[0]];
          }
        }
      });
      dollybooks = _.map(dollybooks, function(o) {
        return o;
      });
      dollybooks = _.flatten(dollybooks);
      dollybooks = _.orderBy(dollybooks, "order", "asc");
      return dollybooks;
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "books-total",
  content: "Total number of books I have in this series."
};
const _hoisted_2 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_search = __unplugin_components_0;
  const _component_router_link = resolveComponent("router-link");
  const _component_gallery_lazy = __unplugin_components_1;
  const _directive_tippy = resolveDirective("tippy");
  return _ctx.listReady ? (openBlock(), createElementBlock("div", {
    key: 0,
    id: "ale-series",
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
          "data-asin": item.asin,
          key: "series:" + item.asin
        }, {
          default: withCtx(() => [
            createVNode(_component_router_link, {
              to: { name: "series", params: { series: item.asin }, query: { subPageSource: _ctx.subPageSource.name } }
            }, {
              default: withCtx(() => [
                createBaseVNode("h2", null, toDisplayString(item.name), 1),
                item.books && item.books.length ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
                  createBaseVNode("span", {
                    class: normalizeClass({ "my-books": item.allBooksMinusDupes && item.allBooksMinusDupes.length })
                  }, toDisplayString(item.books.length), 3),
                  item.allBooksMinusDupes && item.allBooksMinusDupes.length ? (openBlock(), createElementBlock("span", _hoisted_2, "\xA0of\xA0" + toDisplayString(item.allBooksMinusDupes.length), 1)) : createCommentVNode("", true)
                ])), [
                  [_directive_tippy, { placement: "right" }]
                ]) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["to"])
          ]),
          _: 2
        }, 1032, ["data-asin"]);
      }), 128))
    ], 4)
  ], 4)) : createCommentVNode("", true);
}
var gallerySeries = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-23b144c1"]]);
export { gallerySeries as default };
//# sourceMappingURL=gallery-series.ec9103d7.js.map
