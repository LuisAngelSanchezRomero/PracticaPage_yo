// Obtener el botón y el cuerpo de la página
const button = document.getElementById('modeToggle');
const body = document.body;

// Comprobar si hay un modo almacenado en localStorage
const storedMode = localStorage.getItem('mode');

// Si el modo almacenado es oscuro, aplicamos el modo oscuro
if (storedMode === 'dark') {
  body.classList.add('dark-mode');
  button.textContent = 'Modo Claro'; // Cambiar el texto del botón
} else {
  body.classList.remove('dark-mode');
  button.textContent = 'Modo Oscuro'; // Cambiar el texto del botón
}

// Evento para cambiar el modo al hacer clic en el botón
button.addEventListener('click', () => {
  // Alternar la clase 'dark-mode' en el body
  body.classList.toggle('dark-mode');

  // Cambiar el texto del botón
  if (body.classList.contains('dark-mode')) {
    button.textContent = 'Modo Claro';
    localStorage.setItem('mode', 'dark'); // Guardar la preferencia en localStorage
  } else {
    button.textContent = 'Modo Oscuro';
    localStorage.setItem('mode', 'light'); // Guardar la preferencia en localStorage
  }
});