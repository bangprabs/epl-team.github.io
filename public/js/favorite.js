function getFavoriteJSON(data) {
    console.log(data);
    // Menyusun komponen card artikel secara dinamis
    var favoriteHTML = "";
    data.forEach(function(data) {
        favoriteHTML += `
        <div class="col s12 m12 l12">
        <div class="card">
        <a href="./detailteam.html?id=${data.id}&saved=true">
          <div class="card-image">
          <img src="${ data.crestUrl !== null ? data.crestUrl.replace(/^http:\/\//i, "https://") : "image/icon-192.png" }" class="responsive-img center-align" onerror="this.onerror=null; this.src='image/icon-192.png'">
            <a class="btn-floating halfway-fab waves-effect waves-light red" onclick="removeFromFavorites(${data.id})" ><img class="icon-fav" src="image/delete-icon.svg"></img></a>
          </div>
          <div class="card-content">
          <span class="card-title truncate center">${data.name}</span>
          </div>
        </div>
      </div>
      </div>
  `;
    });

    // Sisipkan komponen card ke dalam elemen dengan id #body-content
    document.getElementById("favorite").innerHTML = favoriteHTML;
}

function showEmptyFavoriteView() {
    var favoriteMessage = "";

    favoriteMessage += `
        <div class="card-content">
            <div class="center-align">
                <img style="width: 50%;" src="image/man-sitting.jpg"></img>
                <h4>Belum Ada Team Favorite</h4>
            </div>
        </div>
    `;

    document.getElementById("favorite-empty").innerHTML = favoriteMessage;
}

function getFavoriteByIdJSON(data) {
    var teamsHTML = "";
    var teamsHTML = `
  <div class="col s12 m6 l4">
      <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
          <img src="${data.crestUrl.replace(
                  /^http:\/\//i,
                  "https://"
              )}" class="responsive-img"/>
          </div>
          <div class="card-content" style="padding : 5px;">
              <span class="card-title center" style="font-weight: bold; color: rgb(92, 215, 231)">${data.name}</span>
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