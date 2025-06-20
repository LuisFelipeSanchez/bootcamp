function cambiarColor() {
  // Generar un color hexadecimal aleatorio
  const colorAleatorio = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = colorAleatorio;
}
