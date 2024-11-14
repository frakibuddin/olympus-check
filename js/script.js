let header_search = document.querySelector(".header-search img");
let search_close = document.querySelector(".search-close");
let header_search_bar = document.querySelector(".header-search-bar");
let menu = document.querySelector("menu");
let menu_tgl_btn = document.querySelector(".menu-tgl-btn");

header_search.onclick = () => {
  header_search_bar.classList.add("search-open");
};
search_close.onclick = () => {
  header_search_bar.classList.remove("search-open");
};
menu_tgl_btn.onclick = () => {
  menu.classList.toggle("show");
};
