importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

workbox.precaching.precacheAndRoute([
    { url: "/", revision: "1" },
    { url: "/nav.html", revision: "1" },
    { url: "/index.html", revision: "1" },
    { url: "/detailteam.html", revision: "1" },
    { url: "/pages/saved.html", revision: "1" },
    { url: "/pages/home.html", revision: "1" },
    { url: "/pages/standings.html", revision: "1" },
    { url: "/image/icon-512.png", revision: "1" },
    { url: "/image/icon-192.png", revision: "1" },
    { url: "/image/icon-96.png", revision: "1" },
    { url: "/image/man-sitting.jpg", revision: "1" },
    { url: "/image/delete-icon.svg", revision: "1" },
    { url: "/image/icon-ios.png", revision: "1" },
    { url: "/image/field.jpg", revision: "1" },
    { url: "/image/field2.jpg", revision: "1" },
    { url: "/css/materialize.min.css", revision: "1" },
    { url: "/css/style.css", revision: "1" },
    { url: "/js/materialize.min.js", revision: "1" },
    { url: "/manifest.json", revision: "1" },
    { url: "/js/standings.js", revision: "1" },
    { url: "/js/helpers.js", revision: "1" },
    { url: "/js/teams.js", revision: "1" },
    { url: "/js/detailteam.js", revision: "1" },
    { url: "/js/favorite.js", revision: "1" },
    { url: "/js/nav.js", revision: "1" },
    { url: "/js/api.js", revision: "1" },
    { url: "/js/db.js", revision: "1" },
    { url: "/js/idb.js", revision: "1" },
    { url: "/js/sw-register.js", revision: "1" },
    { url: "/js/script-notification.js", revision: "1" },
    { url: "/icon.png", revision: "1" },
], {
    ignoreUrlParametersMatching: [/.*/]
});

if (workbox) {
    console.log(`Workbox sukses terload`);
} else {
    console.log(`Workbox gagal terload`);
}
workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 50,
                maxAgeSeconds: 7 * 24 * 60 * 60,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    new RegExp("/"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "pwa-cache"
    })
);

workbox.routing.registerRoute(
    new RegExp('https://api.football-data.org/v2/'),
    workbox.strategies.staleWhileRevalidate()
)

self.addEventListener("push", event => {
    var body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = "Push message no payload";
    }

    var options = {
        body: body,
        icon: "image/icon-192.png",
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };

    event.waitUntil(
        self.registration.showNotification("Push Notification", options)
    );
});