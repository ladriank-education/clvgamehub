const urlApi = 'http://192.168.1.10:7002/api/juegos';

fetch(urlApi)
  .then(response => response.json())
  .then(data => {
    const gameList = document.getElementById('desktop');
    for (let i = 0; i < data.length; i++) {
      const gameName = data[i].nombre;
      const gameLink = data[i].index;
      const gameIcon = data[i].favicon;

      const gameElement = document.createElement('div')
      /*
      gameElement.innerHTML = ```
        <a href='${gameLink}'>
          <img src='${gameIcon}' class='icon'/>
          <h1 class='game-title'>${gameName}</h1>
        </a>
      ```
      */

      const gameIconDiv = document.createElement('div');
      gameIconDiv.classList.add('icon');

      /*
       gameIconDiv.style.backgroundImage = 'url("'+ gameIcon +'")';

       gameIconDiv.title = gameName;
       gameIconDiv.addEventListener('click', function() {
         window.location.assign(gameLink);
       });
       */

      linkDiv = document.createElement('a');
      linkDiv.href = gameLink;
      linkDiv.target= "_blank";

      imagenDiv = document.createElement('img');
      imagenDiv.src = gameIcon;
      imagenDiv.alt = gameName.replace(/_/g, " ").toUpperCase();

      linkDiv.appendChild(imagenDiv);

      nombreDiv = document.createElement('h2');
      nombreDiv.textContent = gameName.replace(/_/g, " ").toUpperCase();

      //gameIconDiv.appendChild(linkDiv);
      //gameIconDiv.appendChild(nombreDiv);
      gameList.appendChild(gameElement);
    }
  })
  .catch(error => console.error(error));
