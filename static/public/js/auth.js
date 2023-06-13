document.addEventListener('deviceready', onDeviceReady, false);

var title = null;
var login = null;
var signup = null;

var user;

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    titulo = document.getElementById('btn_menu');
    login = document.getElementById('form-login');
    signup = document.getElementById('form-signup');

    titulo.addEventListener("click", function() {
        //document.getElementById('aplicacion').src='http://localhost/ejemplo_escritorio/escritorio2.html';
        document.getElementById('aplicacion').src='http://80.30.41.125:8080/';
    });
}

// login.addEventListener('submit', async (event) => {
//     event.preventDefault(); // Evita que el formulario se envíe automáticamente

//     const name = login.name.value;
//     const pwd = login.password.value;

//     // Enviar la solicitud a la API
//     const respuesta = await fetch('https://api.example.com/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ nombre, psw })
//     });

//     // Manejar la respuesta de la API
//     if (respuesta.ok) {
//         const user = await respuesta.json();
//         // Inicio de sesión exitoso, hacer algo con la información del usuario
//         usuario = user;
        
//         document.getElementById('deviceready').classList.add('ready');

//         document.getElementById('aplicacion').src='http://80.30.41.125:8080/';
//         //document.getElementById('aplicacion').src='http://localhost/ejemplo_escritorio/escritorio2.html';
//     } else {
//         // Inicio de sesión fallido, mostrar un mensaje de error
//         const error = await respuesta.json();
//         console.error(error.mensaje);

//         document.getElementById('alertas').innerHTML('<div class="alert alert-danger alert-dismissible fade show"><button type="button" class="btn-close" data-bs-dismiss="alert"></button><strong>Danger!</strong>Error durante login.</div>');
//     }
// });

//TODO: modificar para primero comprobar si existe el usuario, si existe avisa y fallará, si no, creará y hará login
// signup.addEventListener('submit', async (event) => {
//     event.preventDefault(); // Evita que el formulario se envíe automáticamente

//     const nombre = signup.floatingInputCrear.value;
//     const psw = signup.floatingPasswordCrear.value;

//     // Enviar la solicitud a la API
//     const respuesta = await fetch('https://api.example.com/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ nombre, psw })
//     });

//     // Manejar la respuesta de la API
//     if (respuesta.ok) {
//         const user = await respuesta.json();
//         // Inicio de sesión exitoso, hacer algo con la información del usuario
//         usuario = user;

//         //Añadir funcionalidad de login
                
//         document.getElementById('deviceready').classList.add('ready');

//         document.getElementById('aplicacion').src='http://80.30.41.125:8080/';
//         //document.getElementById('aplicacion').src='http://localhost/ejemplo_escritorio/escritorio2.html';
//     } else {
//         // Inicio de sesión fallido, mostrar un mensaje de error
//         const error = await respuesta.json();
//         console.error(error.mensaje);
//     }
// });