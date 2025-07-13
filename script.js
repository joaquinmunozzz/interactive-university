document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.ramo').forEach(boton => {
    boton.addEventListener('click', () => {
      if (boton.classList.contains('locked') || boton.classList.contains('approved')) return;

      boton.classList.add('approved');

      const siguienteId = boton.dataset.unlocks;
      if (siguienteId) {
        const siguienteRamo = document.getElementById(siguienteId);
        if (siguienteRamo && siguienteRamo.classList.contains('locked')) {
          siguienteRamo.classList.remove('locked');
        }
      }
    });
  });
});
