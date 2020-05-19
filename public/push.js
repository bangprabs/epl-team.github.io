var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BGARqu6B3mDHtdIFQHmhYji_1jLVimpXsSaumt_QMFICmYI873maypaR4tCRlJvYRPMF2L4hzUit2wVGqS1ZDUo",
    "privateKey": "0lhVEAZEEpDbNMTgxbPrCdriXo4VwgGV9LYwJ3fkLgs"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/d4YtNtbvi5Y:APA91bGguKq20ff9xlFyAa1ta25qFEUOBuEurZrAnfNs5yIWvk-fyYe1_R2DVCdzBteRC_EKDL_hNIhMboSnseYQTJF0B3JVidZ73y9zQnNhxLDuXvNS1APa66X4cjonRkrtm_zofb8b",
    "keys": {
        "p256dh": "BI8oNx4zOt/dWsbaEyhnjaQpwBrGuBQ9qFtvynG1A8FERCHF0FRox0EdcEJssr+/Fc9oZO1AgFt5J+gXV8t1m90=",
        "auth": "8qEEPb13CrHeJlFi+yx5hg=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: '1016996999435',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);