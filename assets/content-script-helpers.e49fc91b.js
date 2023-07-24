import { c as commonjsGlobal, a as commonjsRequire } from "./jquery.050764e9.js";
var url_min = { exports: {} };
(function(module) {
  !function(t) {
    var y = /^[a-z]+:/, d = /[-a-z0-9]+(\.[-a-z0-9])*:\d+/i, v = /\/\/(.*?)(?::(.*?))?@/, r = /^win/i, g = /:$/, m = /^\?/, q = /^#/, w = /(.*\/)/, A = /^\/{2,}/, I = /(^\/?)/, e = /'/g, o = /%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi, n = /%([cd][0-9a-f])%([89ab][0-9a-f])/gi, i = /%([0-7][0-9a-f])/gi, s = /\+/g, a = /^\w:$/, C = /[^/#?]/;
    var p, S = "undefined" == typeof window && "undefined" != typeof commonjsGlobal && "function" == typeof commonjsRequire, b = !S && t.navigator && t.navigator.userAgent && ~t.navigator.userAgent.indexOf("MSIE"), x = S ? t.require : null, j = { protocol: "protocol", host: "hostname", port: "port", path: "pathname", query: "search", hash: "hash" }, z = { ftp: 21, gopher: 70, http: 80, https: 443, ws: 80, wss: 443 };
    function E() {
      return S ? p = p || "file://" + (process.platform.match(r) ? "/" : "") + x("fs").realpathSync(".") : "about:srcdoc" === document.location.href ? self.parent.document.location.href : document.location.href;
    }
    function h(t2, r2, e2) {
      var o2, n2, i2;
      r2 = r2 || E(), S ? o2 = x("url").parse(r2) : (o2 = document.createElement("a")).href = r2;
      var a2, s2, p2 = (s2 = { path: true, query: true, hash: true }, (a2 = r2) && y.test(a2) && (s2.protocol = true, s2.host = true, d.test(a2) && (s2.port = true), v.test(a2) && (s2.user = true, s2.pass = true)), s2);
      for (n2 in i2 = r2.match(v) || [], j)
        p2[n2] ? t2[n2] = o2[j[n2]] || "" : t2[n2] = "";
      if (t2.protocol = t2.protocol.replace(g, ""), t2.query = t2.query.replace(m, ""), t2.hash = F(t2.hash.replace(q, "")), t2.user = F(i2[1] || ""), t2.pass = F(i2[2] || ""), t2.port = z[t2.protocol] == t2.port || 0 == t2.port ? "" : t2.port, !p2.protocol && C.test(r2.charAt(0)) && (t2.path = r2.split("?")[0].split("#")[0]), !p2.protocol && e2) {
        var h2 = new L(E().match(w)[0]), u2 = h2.path.split("/"), c = t2.path.split("/"), f = ["protocol", "user", "pass", "host", "port"], l = f.length;
        for (u2.pop(), n2 = 0; n2 < l; n2++)
          t2[f[n2]] = h2[f[n2]];
        for (; ".." === c[0]; )
          u2.pop(), c.shift();
        t2.path = ("/" !== r2.charAt(0) ? u2.join("/") : "") + "/" + c.join("/");
      }
      t2.path = t2.path.replace(A, "/"), b && (t2.path = t2.path.replace(I, "/")), t2.paths(t2.paths()), t2.query = new U(t2.query);
    }
    function u(t2) {
      return encodeURIComponent(t2).replace(e, "%27");
    }
    function F(t2) {
      return (t2 = (t2 = (t2 = t2.replace(s, " ")).replace(o, function(t3, r2, e2, o2) {
        var n2 = parseInt(r2, 16) - 224, i2 = parseInt(e2, 16) - 128;
        if (0 == n2 && i2 < 32)
          return t3;
        var a2 = (n2 << 12) + (i2 << 6) + (parseInt(o2, 16) - 128);
        return 65535 < a2 ? t3 : String.fromCharCode(a2);
      })).replace(n, function(t3, r2, e2) {
        var o2 = parseInt(r2, 16) - 192;
        if (o2 < 2)
          return t3;
        var n2 = parseInt(e2, 16) - 128;
        return String.fromCharCode((o2 << 6) + n2);
      })).replace(i, function(t3, r2) {
        return String.fromCharCode(parseInt(r2, 16));
      });
    }
    function U(t2) {
      for (var r2 = t2.split("&"), e2 = 0, o2 = r2.length; e2 < o2; e2++) {
        var n2 = r2[e2].split("="), i2 = decodeURIComponent(n2[0].replace(s, " "));
        if (i2) {
          var a2 = void 0 !== n2[1] ? F(n2[1]) : null;
          void 0 === this[i2] ? this[i2] = a2 : (this[i2] instanceof Array || (this[i2] = [this[i2]]), this[i2].push(a2));
        }
      }
    }
    function L(t2, r2) {
      h(this, t2, !r2);
    }
    U.prototype.toString = function() {
      var t2, r2, e2 = "", o2 = u;
      for (t2 in this) {
        var n2 = this[t2];
        if (!(n2 instanceof Function || void 0 === n2))
          if (n2 instanceof Array) {
            var i2 = n2.length;
            if (!i2) {
              e2 += (e2 ? "&" : "") + o2(t2) + "=";
              continue;
            }
            for (r2 = 0; r2 < i2; r2++) {
              var a2 = n2[r2];
              void 0 !== a2 && (e2 += e2 ? "&" : "", e2 += o2(t2) + (null === a2 ? "" : "=" + o2(a2)));
            }
          } else
            e2 += e2 ? "&" : "", e2 += o2(t2) + (null === n2 ? "" : "=" + o2(n2));
      }
      return e2;
    }, L.prototype.clearQuery = function() {
      for (var t2 in this.query)
        this.query[t2] instanceof Function || delete this.query[t2];
      return this;
    }, L.prototype.queryLength = function() {
      var t2 = 0;
      for (var r2 in this.query)
        this.query[r2] instanceof Function || t2++;
      return t2;
    }, L.prototype.isEmptyQuery = function() {
      return 0 === this.queryLength();
    }, L.prototype.paths = function(t2) {
      var r2, e2 = "", o2 = 0;
      if (t2 && t2.length && t2 + "" !== t2) {
        for (this.isAbsolute() && (e2 = "/"), r2 = t2.length; o2 < r2; o2++)
          t2[o2] = !o2 && a.test(t2[o2]) ? t2[o2] : u(t2[o2]);
        this.path = e2 + t2.join("/");
      }
      for (o2 = 0, r2 = (t2 = ("/" === this.path.charAt(0) ? this.path.slice(1) : this.path).split("/")).length; o2 < r2; o2++)
        t2[o2] = F(t2[o2]);
      return t2;
    }, L.prototype.encode = u, L.prototype.decode = F, L.prototype.isAbsolute = function() {
      return this.protocol || "/" === this.path.charAt(0);
    }, L.prototype.toString = function() {
      return (this.protocol && this.protocol + "://") + (this.user && u(this.user) + (this.pass && ":" + u(this.pass)) + "@") + (this.host && this.host) + (this.port && ":" + this.port) + (this.path && this.path) + (this.query.toString() && "?" + this.query) + (this.hash && "#" + u(this.hash));
    }, t[t.exports ? "exports" : "Url"] = L;
  }(module.exports ? module : window);
})(url_min);
var Url$1 = url_min.exports;
var helpers = {
  methods: {
    shortenLength: function(string) {
      if (string) {
        string = DOMPurify.sanitize(string.trimToColon().trimAll());
        if (string.match(/\d/)) {
          const lengthInSeconds = this.timeStringToSeconds(string);
          return this.secondsToTimeString(lengthInSeconds, true);
        } else {
          return null;
        }
      } else {
        return null;
      }
    },
    getSummary: function(el) {
      el.removeAttribute("class");
      var children = el.querySelectorAll("*");
      $.each(children, function() {
        this.removeAttribute("class");
      });
      return DOMPurify.sanitize(el.outerHTML.trimAll());
    },
    fixDates: function(source) {
      var date = typeof source === "object" ? DOMPurify.sanitize(source.textContent.trimToColon()) : DOMPurify.sanitize(source);
      if (source && date) {
        const domainExtension = this.domainExtension;
        const regionalDateFormats = {
          ".com": ["m-d-y", "MM-dd-yyyy"],
          ".ca": ["y-m-d", "yyyy-MM-dd"],
          ".co.uk": ["d-m-y", "dd-MM-yyyy"],
          ".de": ["d-m-y", "dd-MM-yyyy"],
          ".fr": ["d-m-y", "dd-MM-yyyy"],
          ".it": ["d-m-y", "dd-MM-yyyy"],
          ".com.au": ["d-m-y", "dd-MM-yyyy"],
          ".in": ["d-m-y", "dd-MM-yyyy"]
        };
        const formatString = regionalDateFormats[domainExtension] ? regionalDateFormats[domainExtension][0] : null;
        let splitDate = date.split("-");
        if (!formatString || !date.match(/\-/) || splitDate.length !== 3) {
          return date;
        } else {
          const formatSplit = formatString.split("-");
          const newDate = {
            y: null,
            m: null,
            d: null
          };
          $.each(splitDate, function(i, date2) {
            newDate[formatSplit[i]] = date2;
          });
          date = null;
          if (newDate.y.length <= 2) {
            if (newDate.y >= 95 && newDate.y <= 99) {
              newDate.y = "19" + newDate.y;
            } else if (newDate.y < 95) {
              newDate.y = "20" + newDate.y;
            }
          }
          const ISO8601 = [newDate.y, newDate.m, newDate.d];
          return dateFormat(new Date(ISO8601[0], ISO8601[1] - 1, ISO8601[2]), "yyyy-MM-dd");
        }
      } else {
        return null;
      }
    },
    getSeries: function(element, reverse) {
      const series = [];
      if (element) {
        const html = DOMPurify.sanitize($(element).html());
        var string = html.trimAll().trimToColon();
        string = $.parseHTML(string);
        const strings = _.filter(string, function(object) {
          var str = object.textContent.trim().replace(/^,/, "") || "";
          if (str)
            return object;
        });
        $.each(strings, function(index, object) {
          var string2 = object.textContent.trim().replace(/^,/, "").trimAll() || "";
          var titleRow = (index + 1) % 2;
          var numberRow = !titleRow;
          if (titleRow) {
            let url = new Url(object.href);
            series.push({
              name: string2,
              asin: reverse ? url.query.asin : url.path.substring(url.path.lastIndexOf("/") + 1)
            });
          } else if (numberRow && string2.match(/\d/)) {
            var numbers = string2.replace(/^[^0-9]*/, "").replace(/,$/, "").replace(/;$/, "").trim().split(",");
            var lastItem = series[series.length - 1];
            lastItem.bookNumbers = $.map(numbers, function(n) {
              return "" + n;
            });
          }
        });
      }
      return series.length > 0 ? reverse ? series.reverse() : series : null;
    },
    getArray: function(elements) {
      const objArray = [];
      $(elements).each(function() {
        const url = new Url(DOMPurify.sanitize($(this).attr("href")), true);
        let searchAuthor;
        let searchNarrator;
        let searchProvider;
        if (url.query.searchAuthor)
          searchAuthor = url.query.searchAuthor;
        if (url.query.searchNarrator)
          searchNarrator = url.query.searchNarrator;
        if (url.query.searchProvider)
          searchProvider = url.query.searchProvider;
        url.clearQuery();
        if (searchAuthor)
          url.query.searchAuthor = searchAuthor;
        if (searchNarrator)
          url.query.searchNarrator = searchNarrator;
        if (searchProvider)
          url.query.searchProvider = searchProvider;
        searchNarrator = null;
        searchProvider = null;
        let obj = {
          name: DOMPurify.sanitize($(this).text().trim())
        };
        const minifiedUrl = minifyUrl(url.toString());
        if (minifiedUrl)
          obj.url = minifiedUrl;
        objArray.push(obj);
      });
      return objArray.length > 0 ? objArray : null;
      function minifyUrl(url) {
        if (url.match(/^\/cat\//) || url.match(/^\/author\//)) {
          return url.substring(url.lastIndexOf("/") + 1);
        } else if (url.match(/^\/search\?searchAuthor/) || url.match(/^\/search\?searchNarrator/) || url.match(/^\/search\?searchProvider/)) {
          return null;
        } else {
          return url;
        }
      }
    },
    addedOrder: function(books) {
      let id = books.length + 1;
      _.each(books, function(book) {
        --id;
        book.added = id;
      });
    },
    makeFrenchFries: function(hotpotato) {
      hotpotato.extras = hotpotato.extras || {};
      hotpotato.extras["domain-extension"] = hotpotato.extras["domain-extension"] || this.domainExtension;
      hotpotato.chunks = [];
      _.each(hotpotato, function(item, key) {
        if (key !== "chunks" && _.isArray(item)) {
          const chunks = _.chunk(item, 50);
          hotpotato.chunks.push(key);
          hotpotato[key + "-chunk-length"] = chunks.length;
          _.each(chunks, function(chunk, i) {
            hotpotato[key + "-chunk-" + i] = chunk;
          });
          delete hotpotato[key];
        }
      });
    },
    glueFriesBackTogether: function(data) {
      if (data && _.isEmpty(data)) {
        return null;
      } else {
        _.each(data.chunks, function(chunkName) {
          const chunksLength = data[chunkName + "-chunk-length"];
          const chunkNumbers = _.range(0, chunksLength);
          data[chunkName] = [];
          _.each(chunkNumbers, function(n) {
            data[chunkName] = data[chunkName].concat(
              data[chunkName + "-chunk-" + n]
            );
            delete data[chunkName + "-chunk-" + n];
          });
          delete data[chunkName + "-chunk-length"];
        });
        delete data.chunks;
      }
    },
    removeFromSeries: function(potatoSeries, removedBooks) {
      _.each(removedBooks, function(book) {
        if (book.series) {
          _.each(book.series, function(bookSeries) {
            let targetSeries = _.find(potatoSeries, { asin: bookSeries.asin });
            _.remove(targetSeries.books, function(asin) {
              return asin === book.asin;
            });
            if (targetSeries.books.length < 1) {
              _.remove(potatoSeries, function(o) {
                return o.asin === bookSeries.asin;
              });
            }
          });
        }
      });
    },
    removeFromCollections: function(potatoCollections, removedBooks) {
      potatoCollections = _.compact(potatoCollections);
      _.each(potatoCollections, function(collection) {
        if (collection.books.length > 0) {
          _.each(removedBooks, function(book) {
            const bookInCollection = _.includes(collection.books, book.asin);
            if (bookInCollection)
              _.remove(collection.books, function(asin) {
                return asin === book.asin;
              });
            if (collection.books.length < 1) {
              _.remove(potatoCollections, function(o) {
                return o.id === collection.id;
              });
            }
          });
        }
      });
    }
  }
};
export { Url$1 as U, helpers as h };
//# sourceMappingURL=content-script-helpers.e49fc91b.js.map
