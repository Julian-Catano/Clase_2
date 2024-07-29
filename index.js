let MenuVisible=false;

function mostrarOcultarMenu(){
    if(MenuVisible){
        document.getElementById("nav").classList="";
        MenuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        MenuVisible = true;
    }
}

const body = document.querySelector('body');

const title = document.createElement('h1');
title.textContent = 'Este es el título';

const photo1 = document.createElement('img');
photo1.src = 'https://i.pinimg.com/236x/95/27/49/9527498ff6d78f39ff4c8fe366f6f0c6.jpg'; // Reemplaza con la ruta de tu imagen
photo1.alt = 'Descripción de la foto 1';

const photo2 = document.createElement('img');
photo2.src = 'https://i.pinimg.com/236x/95/27/49/9527498ff6d78f39ff4c8fe366f6f0c6.jpg'; // Reemplaza con la ruta de tu imagen
photo2.alt = 'Descripción de la foto 2';

// Crear el texto
const text = document.createElement('p');
text.textContent = 'Los Diablooooooooooooooooooooooooooooooooooooo.';

// Crear el botón
const button = document.createElement('button');
button.textContent = 'Haz clic aquí';
button.onclick = () => alert('¡Botón clicado!');

// Agregar todos los elementos al contenedor
body.appendChild(title);
body.appendChild(photo1);
body.appendChild(photo2);
body.appendChild(text);
body.appendChild(button);

const link = document.createElement('link');
link.rel = "stylesheet";
link.href = "estilos.css"
document.head.appendChild(link);

const nombre = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")
const telefono = document.querySelector("#telefono")
function EnvLocal(){
    localStorage.setItem('nombre', JSON.stringify(nombre.value));
    localStorage.setItem('apellido', JSON.stringify(apellido.value));
    localStorage.setItem('telefono', JSON.stringify(telefono.value));
}

function Recuperar(){
    nombre.value = JSON.parse(localStorage.getItem('nombre'));
    apellido.value = JSON.parse(localStorage.getItem('apellido'));
    telefono.value = JSON.parse(localStorage.getItem('telefono'));
}

console.log(Recuperar());