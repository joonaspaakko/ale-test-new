
      importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');
      
      workbox.setConfig({
        debug: false,
      });
      
      workbox.loadModule('workbox-routing');
      workbox.loadModule('workbox-strategies');
      workbox.loadModule('workbox-expiration');
      workbox.loadModule('workbox-cacheable-response');
      
      // Cache page navigations (html) with a Network First strategy
      workbox.route.registerRoute(
        // Check to see if the request is a navigation to a new page
        ({ request }) => request.mode === 'navigate',
        // Use a Network First caching strategy
        new workbox.strategies.networkFirst({
          // Put all cached files in a cache named 'pages'
          cacheName: 'pages',
          plugins: [
            // Ensure that only requests that result in a 200 status are cached
            new workbox.cacheableResponse.cacheableResponsePlugin({
              statuses: [200],
            }),
          ],
        }),
      );

      // Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
      workbox.route.registerRoute(
        // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
        ({ request }) =>
          request.destination === 'style' ||
          request.destination === 'script' ||
          request.destination === 'worker',
        // Use a Stale While Revalidate caching strategy
        new workbox.strategies.staleWhileRevalidate({
          // Put all cached files in a cache named 'assets'
          cacheName: 'assets',
          plugins: [
            // Ensure that only requests that result in a 200 status are cached
            new workbox.cacheableResponse.cacheableResponsePlugin({
              statuses: [200],
            }),
          ],
        }),
      );

      // Cache images with a Cache First strategy
      workbox.route.registerRoute(
        // Check to see if the request's destination is style for an image
        ({ request }) => request.destination === 'image',
        // Use a Cache First caching strategy
        new workbox.strategies.cacheFirst({
          // Put all cached files in a cache named 'images'
          cacheName: 'images',
          plugins: [
            // Ensure that only requests that result in a 200 status are cached
            new workbox.cacheableResponse.cacheableResponsePlugin({
              statuses: [200],
            }),
            // Don't cache more than 50 items, and expire them after 30 days
            new workbox.expiration.expirationPlugin({
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
            }),
          ],
        }),
      );
      
      // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
      workbox.route.registerRoute(
        ({url}) => url.origin === 'https://fonts.googleapis.com',
        new workbox.strategies.staleWhileRevalidate({
          cacheName: 'google-fonts-stylesheets',
        })
      );

      // Cache the underlying font files with a cache-first strategy for 1 year.
      workbox.route.registerRoute(
        ({url}) => url.origin === 'https://fonts.gstatic.com',
        new workbox.strategies.cacheFirst({
          cacheName: 'google-fonts-webfonts',
          plugins: [
            new workbox.cacheableResponse.cacheableResponsePlugin({
              statuses: [0, 200],
            }),
            new workbox.expiration.expirationPlugin({
              maxAgeSeconds: 60 * 60 * 24 * 365,
              maxEntries: 30,
            }),
          ],
        })
      );
      