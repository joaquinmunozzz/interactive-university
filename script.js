// script.js
document.querySelectorAll('.ramo').forEach(boton => {
  boton.addEventListener('click', () => {
    if (boton.classList.contains('locked')) return;

    boton.classList.add('approved');
    const siguiente = boton.getAttribute('data-unlocks');

    if (siguiente) {
      const siguienteElemento = document.getElementById(siguiente);
      if (siguienteElemento) {
        siguienteElemento.classList.remove('locked');
      }
    }
  });
});
