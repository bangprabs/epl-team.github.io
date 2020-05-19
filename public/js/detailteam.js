function getResultDetailTeamJSON(data) {
    var teamsHTML = "";
    var teamsHTML = `
    <div class="col s12 m6 l4">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
            <img src="${data.crestUrl.replace(
                    /^http:\/\//i,
                    "https://"
                )}" class="responsive-img" alt="logo-club"/>
            </div>
            <div class="card-content" style="padding : 5px;">
                <span class="card-title center" style="font-weight: bold; color: #85d236;">${data.name}</span>
                <p>Sebuah klub yang berlaga sejak ${data.founded}, serta bermarkas di ${data.venue}. Dan ${data.name} ini memiliki warna dominan pada jersey yaitu ${data.clubColors}.</p>
                <p>Untuk info lainnya mengenai ${data.name}, dapat diakses melalui website <a href = "${data.website}">${data.website}</a>, atau juga bisa menghubungi email dan telepon di 
                <a href = "${data.email}">${data.email}</a> dan  <a href = "tel:${data.phone}">${data.phone}</a></p>
            </div>
        </div>
    </div>
    `;

    var tableSquadHtml = "";
    data.squad.forEach(function(squad) {
        tableSquadHtml += `
        <tr>
            <td>${squad.name ? squad.name : "-"}</td>
            <td>${squad.position ? squad.position : "-"}</td>
            <td class="center-align">${squad.nationality ? squad.nationality : "-"}</td>
        </tr>
        `;
    });
    // Sisipkan komponen card ke dalam elemen dengan id #content
    document.getElementById("body-content").innerHTML = teamsHTML;
    document.getElementById("squad-team").innerHTML = tableSquadHtml;
}