

/* CÓDIGO MENÚ */

// const menuPrincipal = document.getElementById("menu");

function showMenu(menuPrincipal) {
  menuPrincipal.classList.contains("shown")
    ? menuPrincipal.classList.remove("shown")
    : menuPrincipal.classList.add("shown");
}
