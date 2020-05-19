const base_url = "https://api.football-data.org/v2/";
const id_liga = "2021";
const headers = {
    "X-Auth-Token": "368d04e80a184141acad3adeff567fc3"
};

function status(response) {
    if (response.status !== 200) {
        console.log("Error : " + response.status);
        return Promise.reject(new Error(response.statusText));
    } else {
        return Promise.resolve(response);
    }
}

function json(response) {
    return response.json();
}

function error(error) {
    console.log("Error : " + error);
}

function getTeams() {
    return new Promise(function(resolve, reject) {
        if ("caches" in window) {
            caches.match(`${base_url}competitions/${id_liga}/teams`).then(function(response) {
                if (response) {
                    response.json().then(function(data) {
                        getResultTeamJSON(data);
                        resolve(data);
                    });
                }
            });
        }

        fetch(`${base_url}competitions/${id_liga}/teams`, {
                headers
            })
            .then(status)
            .then(json)
            .then(function(data) {
                getResultTeamJSON(data);
                resolve(data);
            });
    });
}

function getTeamsById() {
    return new Promise(function(resolve, reject) {
        var urlParams = new URLSearchParams(window.location.search);
        var idParam = urlParams.get("id");

        if ("caches" in window) {
            caches.match(`${base_url}teams/${idParam}`).then(function(response) {
                if (response) {
                    response.json().then(function(data) {
                        getResultDetailTeamJSON(data)
                        resolve(data);
                    });
                }
            });
        }

        fetch(`${base_url}teams/${idParam}`, {
                headers
            })
            .then(status)
            .then(json)
            .then(function(data) {
                getResultDetailTeamJSON(data)
                resolve(data);
            });
    });
};


function getStandings() {
    return new Promise(function(resolve, reject) {
        if ("caches" in window) {
            caches.match(`${base_url}/competitions/${id_liga}/standings?standingType=TOTAL`).then(function(response) {
                if (response) {
                    response.json().then(function(data) {
                        getResultStandingsJSON(data);
                        resolve(data);
                    });
                }
            });
        }

        fetch(`${base_url}/competitions/${id_liga}/standings?standingType=TOTAL`, {
                headers
            })
            .then(status)
            .then(json)
            .then(function(data) {
                getResultStandingsJSON(data);
                resolve(data);
            })
            .catch(error);
    });
}

function getFavorite() {
    getAll().then(function(data) {
        if (data == "") {
            showEmptyFavoriteView();
        } else {
            getFavoriteJSON(data);
        }
    });
}

function getFavoriteById(id) {
    var urlParams = new URLSearchParams(window.location.search);
    var idParam = urlParams.get("id");

    getById(id).then(function(data) {
        getFavoriteByIdJSON(data)
    });
}