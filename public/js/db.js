var dbPromised = idb.open('pwa-league', 1, upgradeDb => {
    const teamObjectStore = upgradeDb.createObjectStore('storeNameTeam', {
        keyPath: 'id'
    });
    teamObjectStore.createIndex('team_name', 'name', { unique: false });
});

function addFavorite(data) {
    dbPromised
        .then(function(db) {
            var tx = db.transaction("storeNameTeam", "readwrite");
            var store = tx.objectStore("storeNameTeam");
            console.log(data);
            store.put(data);
            return tx.complete;
        })
        .then(function() {
            M.toast({
                html: "Berhasil ditambahkan ke favorite",
            });
        });
}

function getAll() {
    return new Promise(function(resolve, reject) {
        dbPromised
            .then(function(db) {
                var tx = db.transaction("storeNameTeam", "readonly");
                var store = tx.objectStore("storeNameTeam");
                return store.getAll();
            })
            .then(function(data) {
                resolve(data);
            });
    });
}

function removeFromFavorites(id) {
    dbPromised
        .then(function(db) {
            var tx = db.transaction("storeNameTeam", "readwrite");
            var store = tx.objectStore("storeNameTeam");

            store.delete(id);

            return tx.complete;
        })
        .then(function() {
            M.toast({
                html: "Berhasil dihapus dari favorite",
            });
        });
    location.reload();
}

function getById(id) {
    return new Promise(function(resolve, reject) {
        dbPromised
            .then(function(db) {
                var tx = db.transaction("storeNameTeam", "readonly");
                var store = tx.objectStore("storeNameTeam");
                return store.get(id);
            })
            .then(function(data) {
                resolve(data);
            });
    });
}