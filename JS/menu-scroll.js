// Función para ajustar la visibilidad del encabezado y el botón
function adjustVisibility() {
  var header = document.querySelector('.Cabecera');
  var narrowHeader = document.querySelector('.Header');
  var Btn = document.querySelector('.Header-btn');
  var scrollDistance = 275; // Distancia de desplazamiento en píxeles
  var windowWidth = window.innerWidth;
  var isScrolled = window.pageYOffset > scrollDistance;

  if (windowWidth <= 767) {
    header.style.display = 'none';
    narrowHeader.style.display = 'flex';
    Btn.style.display = 'block';
  } else {
    header.style.display = 'flex';
    narrowHeader.style.display = isScrolled ? 'flex' : 'none';
    Btn.style.display = isScrolled && windowWidth <= 1024 ? 'block' : 'none';
  }
}

// Evento de desplazamiento
window.addEventListener('scroll', function() {
  adjustVisibility();
});

// Evento de redimensionamiento de ventana
window.addEventListener('resize', function() {
  adjustVisibility();
});

// Ejecutar el código al cargar la página
window.dispatchEvent(new Event('resize'));