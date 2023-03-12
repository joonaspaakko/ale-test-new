(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/content-script.43597239.js")
    );
  })().catch(console.error);

})();
