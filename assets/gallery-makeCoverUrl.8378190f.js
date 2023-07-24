const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var makeCoverUrl = {
  methods: {
    makeCoverUrl: function(coverID, size) {
      if (!coverID) {
        return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjUwMHB4IiBoZWlnaHQ9IjUwMHB4IiB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDEuMiAoMzUzOTcpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmltZy1jb3ZlcmFydDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48L3JlY3Q+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQWNjb3VudC1kZXRhaWxzOi1tZW1iZXJzaGlwLWFzaW4tZG9jIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODcuMDAwMDAwLCAtODY3LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY1LjAwMDAwMCwgNzgwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImltZy1jb3ZlcmFydCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIuMDAwMDAwLCA4Ny4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgIDx1c2UgaWQ9Im1hc2siIGZpbGw9IiNCQkJCQkIiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNTEuMzE0NjA1LDMwNy4xOTExNzYgTDEyNi4zMTU3ODksMjI5LjA5MDYyNyBMMTI2LjMxNTc4OSwyNTAuMTg2NTYyIEwyNTEuMzE0NjA1LDMyOC4yODk0NzQgTDM3Ni4zMTU3ODksMjUwLjE4NjU2MiBMMzc2LjMxNTc4OSwyMjkuMDkwNjI3IEwyNTEuMzE0NjA1LDMwNy4xOTExNzYgWiBNMzAwLjMzODQ4NiwyNTcuMTk4Njk4IEwzMTguNzQzNTIyLDI0NS42OTc2MjIgTDMxOC43NTc2OTUsMjQ1LjY5NzYyMiBDMzA0LjIzODcxOCwyMjMuOTAyNTA0IDI3OS40MzY0NDcsMjA5LjU0MDkyMyAyNTEuMjc3Mjc5LDIwOS41NDA5MjMgQzIyMy4xNDY0NjQsMjA5LjU0MDkyMyAxOTguMzYzMDkzLDIyMy44Nzg4ODMgMTgzLjgzOTM4OSwyNDUuNjQzMjkzIEwxODMuOTUyNzgyLDI0NS42NTUxMDQgQzE4NC45MzMxNTcsMjQ0Ljc2MjIyOSAxODUuOTMwMDYzLDI0My44ODU4ODkgMTg2Ljk1NTMyMSwyNDMuMDMzMTcgQzIyMi4wMzM4MDMsMjEzLjk2MDQxNiAyNzIuNjY4MzI0LDIyMC4zNDI4MTYgMzAwLjMzODQ4NiwyNTcuMTk4Njk4IFogTTIxNC4zNzA4MTksMjY0LjUzMjA4IEMyMjAuOTgwNjY2LDI1OS44OTI5MTIgMjI4LjYyOTk0NCwyNTcuMjI2MDk4IDIzNi43OTY1NzUsMjU3LjIyNjA5OCBDMjUwLjIyODg3NCwyNTcuMjI2MDk4IDI2Mi4yODM5MjIsMjY0LjQxMzk3NSAyNzAuNTU2ODYyLDI3NS44MTExMTkgTDI4OC4zMDk4OSwyNjQuNzE2MzI0IEwyODguMzE5MzQzLDI2NC43MTYzMjQgQzI4MC4xNTc0MzgsMjUzLjA0MDQ1MyAyNjYuNjExNzQsMjQ1LjM5NjY5IDI1MS4yNzc3NTMsMjQ1LjM5NjY5IEMyMzYuMDI2NDQ4LDI0NS4zOTY2OSAyMjIuNTQ5MjY2LDI1Mi45NTc3OCAyMTQuMzcwODE5LDI2NC41MzIwOCBaIE0xNjYuNzg5Mzk0LDIxMy45MDEzNjMgQzIxOC4yNTU0NjIsMTczLjE2NDU0OCAyOTEuMDg4OTU1LDE4NC4wNzk4MjMgMzI5Ljg3ODY3OCwyMzguMTcxOTY0IEwzMzAuMTM2MTczLDIzOC41Njg3OTcgTDM0OS4xODYxMzMsMjI2LjcwMTU5NiBDMzI4LjMxOTUzLDE5NC43Nzc3ODQgMjkyLjI2MzA0MiwxNzMuNjg0MjExIDI1MS4yNzg3MDEsMTczLjY4NDIxMSBDMjEwLjg2NjA0OCwxNzMuNjg0MjExIDE3NC40NzE3NCwxOTQuNTcyMjgxIDE1My40MTYxNTIsMjI2LjYzMzA5NSBDMTU3LjI4MzMxMSwyMjIuNTYwODMgMTYyLjI5NjIxLDIxNy40NTg2ODkgMTY2Ljc4OTM5NCwyMTMuOTAxMzYzIFoiIGlkPSJpY24tYXVkaWJsZSIgZmlsbD0iI0ZGRkZGRiIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
      } else {
        return "https://m.media-amazon.com/images/I/" + coverID + "._SL" + (size || 500) + "_.jpg";
      }
    }
  }
};
export { makeCoverUrl as m };
//# sourceMappingURL=gallery-makeCoverUrl.8378190f.js.map
