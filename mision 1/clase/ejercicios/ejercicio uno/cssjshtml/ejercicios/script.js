// script.js
function validarEdad() {
  let edad = document.getElementById("edad").value; // obtengo la edad escrita
  edad = parseInt(edad); // convierto el texto a número

  if (isNaN(edad)) {
    alert("Por favor escribe un número válido");
  } else if (edad < 18) {
    alert("Acceso denegado");
  } else {
    alert("Bienvenido");
  }
}
