$(document).ready(function(event) {
    games = $.fn.apiGetJsonData('game', null, function (games) {
        games.forEach(function(game) {
            var name_split = game.name.split(" ")
            var game_name = ""
            for (var i=0; i<name_split.length; i++) {
                game_name+=name_split[i]
                game_name+="-"
            }
            game_name = game_name.substr(0, game_name.length-1)
            game_name = game_name.toLowerCase()
            var div = `
            <div class="game">
            <a href="jugar/${game_name}">
            <img src="/static/public/img/games/${game_name}.png" alt="icono ${game.name}"/>
            <h1>${game.name}</h1>
            </a>
            </div>
            `
            $("#desktop").append(div)
        });
    })
});

// const urlApi = 'http://192.168.1.10/api/game';

// fetch(urlApi)
// .then(response => response.json())
// .then(data => {
//     const gameList = document.getElementById('desktop');
//     for (let i = 0; i < data.length; i++) {
//       const gameName = data[i].nombre;
//       const gameLink = data[i].index;
//       const gameIcon = data[i].favicon;

//       const gameElement = document.createElement('div')
//       gameElement.classList.add('game-element')
//       gameElement.innerHTML = `
//       <a href='${gameLink}'>
//       <img src='${gameIcon}' class='border game-icon'/>
//       <h1 class='game-title'>${gameName}</h1>
//       </a>
//       `
//       gameList.appendChild(gameElement);
//   }
// })
// .catch(error => console.error(error));