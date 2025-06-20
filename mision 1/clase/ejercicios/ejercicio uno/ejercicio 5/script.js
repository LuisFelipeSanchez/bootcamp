function verificarMultiplo() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(numero)) {
    resultado.textContent = "Por favor, escribe un número válido.";
    return;
  }

  if (numero % 5 === 0) {
    resultado.textContent = numero + " SÍ es múltiplo de 5.";
  } else {
    resultado.textContent = numero + " NO es múltiplo de 5.";
  }
}
