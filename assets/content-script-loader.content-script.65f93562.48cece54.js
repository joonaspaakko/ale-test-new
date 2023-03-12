(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/content-script.65f93562.js")
    );
  })().catch(console.error);

})();
