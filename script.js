// Selecciona el elemento con el id "menu-icon" y agrega un evento de clic
document.getElementById("menu-icon").addEventListener("click", function () {
  // Dentro del evento de clic, selecciona el elemento con el id "menu"
  const menu = document.getElementById("menu");

  // Alterna la clase "hidden" en el elemento "menu"
  // Si la clase "hidden" está presente, la elimina; si no está, la agrega
  menu.classList.toggle("hidden");
});

function gen() {
      const size = parseInt(document.getElementById("size").value);
      const fib = [0n, 1n];
      let res = "";
      for (let i = 0; i < size; i++) {
        if (i > 1) fib.push(fib[i-1] + fib[i-2]);
        res += fib[i] + " ";
      }
      document.getElementById("out").textContent = res.trim();
    }
