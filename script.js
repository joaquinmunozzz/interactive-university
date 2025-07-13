document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".ramo");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      if (boton.disabled) return;

      boton.classList.add("aprobado");
      boton.disabled = true;

      const desbloquea = boton.dataset.desbloquea;

      if (desbloquea) {
        const siguiente = Array.from(botones).find(b => b.dataset.nombre === desbloquea);
        if (siguiente) {
          siguiente.disabled = false;
        }
      }
    });
  });
});
