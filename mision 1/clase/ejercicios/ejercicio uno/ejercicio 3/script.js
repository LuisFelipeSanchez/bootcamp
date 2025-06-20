function mostrarNumeros() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = ""; // limpiar antes de mostrar

  if (isNaN(numero) || numero < 1) {
    resultadoDiv.textContent = "Por favor escribe un número válido mayor a 0.";
    return;
  }

  for (let i = 1; i <= numero; i++) {
    resultadoDiv.innerHTML += i + "<br>";
  }
}
