// Obtener el botón y el menú lateral
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

// Añadir un evento de click al botón para alternar la visibilidad del menú
menuToggle.addEventListener('click', function() {
    // Verificar si el menú está visible (left = 0)
    if (sideMenu.style.left === '0px') {
        // Si el menú está visible, lo ocultamos
        sideMenu.style.left = '-250px';
    } else {
        // Si el menú está oculto, lo mostramos
        sideMenu.style.left = '0';
    }
});
