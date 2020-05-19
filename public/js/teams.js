function getResultTeamJSON(data) {
    var teamsHTML = "";
    data.teams.forEach(function(team) {
        teamsHTML += `
                    <div class="col s12 m4">
                        <div class="card">
                          <a href="./detailteam.html?id=${team.id}">
                          <div class="background">
                            <div class="card-image">
                            <img src="${
            team.crestUrl !== null
                ? team.crestUrl.replace(/^http:\/\//i, "https://")
                : "image/icon-192.png"
            }" class="responsive-img center-align" onerror="this.onerror=null; this.src='image/icon-192.png'">
                            </div>
                          </div>
                          </a>
                          <div class="card-content">
                            <span class="card-title truncate center">${team.name}</span>
                          </div>
                        </div>
                    </div>
                `;
    });
    document.getElementById("teams").innerHTML = teamsHTML;
}