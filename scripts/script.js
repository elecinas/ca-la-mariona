

/* CÓDIGO MENÚ */

// const menuPrincipal = document.getElementById("menu");

function showMenu(item, className) {
  item.classList.contains(className)
    ? item.classList.remove(className)
    : item.classList.add(className);
}
