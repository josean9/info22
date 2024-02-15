function cambiarTitulo() {
    const nuevoNombre = document.getElementById("nombreInput").value;
    const nuevaDescri = document.getElementById("descriInput").value;

    document.getElementById("titulo").innerHTML = nuevoNombre
    document.getElementById("descripcion").innerHTML = nuevaDescri
}
function validarFormulario() {
    let edad = document.getElementById("edad").value;
    let nombre = document.getElementById('nombre').value;
    if (nombre === "") {
        document.getElementById('nombre').style.borderColor = 'red';
        document.getElementById('errorNombre').style.color = 'red';
        document.getElementById("errorNombre").innerText = "El nombre no puede estar vacío.";

    }
    else{
        document.getElementById('nombre').style.borderColor = '';
        document.getElementById("errorNombre").innerText = "";

    }

    if (edad > 99 || 18 > edad || isNaN(edad)){
        document.getElementById('edad').style.borderColor = 'red';
        document.getElementById('errorEdad').style.color = 'red';
        document.getElementById("errorEdad").innerText = "La edad no esta entre los limites.";
    }
    else{
        document.getElementById("edad").style.borderColor = "";
        document.getElementById("errorEdad").innerText ="";
    }
}
function inicializar(){
    let contador = localStorage.getItem("accesos");

    if(isNaN(contador)){
        contador = 0;
    }
    else {
        contador = parseInt(contador) + 1;
    }

    localStorage.setItem("accesos",contador);
    document.getElementById("accesostexto").textContent = contador;
}

document.addEventListener("DOMContentLoaded",inicializar)

function cambioColor(){
    document.getElementById("edad").style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("nombre").style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}
document.addEventListener("DOMContentLoaded",cambioColor)

function localTodo(){
    let edad = document.getElementById("edad").value;
    let nombre = document.getElementById('nombre').value;

    localStorage.setItem("nombre",nombre);
    localStorage.setItem("edad",edad);
}
function todoNuevo(){
    let edad = localStorage.getItem("edad");
    let nombre = localStorage.getItem("nombre");

    document.getElementById("nombre").value = nombre;
    document.getElementById("edad").value = edad;
}
document.addEventListener("DOMContentLoaded",todoNuevo)