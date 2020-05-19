function getResultStandingsJSON(data) {
    var tableStandingsHtml = "";

    data.standings.forEach(function(standing) {
        var tableDataStanding = "";

        standing.table.forEach(function(team) {
            team = JSON.parse(JSON.stringify(team).replace(/^http:\/\//i, 'https://'));

            tableDataStanding += `
                <tr>
                    <td>
                    <p style="display: flex; align-items: center;">
                        <img class="materialboxed" style="float:left; margin-right:20px" width="20" height="20" src="${team.team.crestUrl}"><a style="font-weight: bold;" href="./detailteam.html?id=${team.team.id}">
                        ${team.team.name} </a>
                    </p>
                    </td>
                    <td class="center-align">${team.won}</td>
                    <td class="center-align">${team.lost}</td>
                    <td class="center-align">${team.points}</td>
                </tr>
            `;
        })

        tableStandingsHtml += `
            <div class="card" style="margin-top: -40px;">
                <table class="container striped tablesqu">
                    <thead>
                        <tr>
                            <th>Team</th>
                            <th class="center-align">Won</th>
                            <th class="center-align">Lost</th>
                            <th class="center-align">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        ` + tableDataStanding + `
                    </tbody>
                </table>
            </div>
        `;
    });

    document.getElementById('standings').innerHTML = tableStandingsHtml;
}