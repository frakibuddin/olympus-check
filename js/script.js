let header_search = document.querySelector(".header-search img");
let search_close = document.querySelector(".search-close");
let header_search_bar = document.querySelector(".header-search-bar");
let menu = document.querySelector("menu");
let menu_tgl_btn = document.querySelector(".menu-tgl-btn");
let eye_icon = document.querySelector(".eye-icon");
let input_password = document.querySelector(".input-password");

header_search.onclick = () => {
  header_search_bar.classList.add("search-open");
};
search_close.onclick = () => {
  header_search_bar.classList.remove("search-open");
};
menu_tgl_btn.onclick = () => {
  menu.classList.toggle("show");
};

eye_icon.onclick = () => {
  if (input_password.type == "password") {
    input_password.type = "text";
    eye_icon.classList.add("hide");
  } else {
    input_password.type = "password";
    eye_icon.classList.remove("hide");
  }
};
