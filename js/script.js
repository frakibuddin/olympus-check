let header_search = document.querySelector(".header-search img");
let search_close = document.querySelector(".search-close");
let header_search_bar = document.querySelector(".header-search-bar");
let menu = document.querySelector("menu");
let menu_tgl_btn = document.querySelector(".menu-tgl-btn");
let eye_icon = document.querySelectorAll(".eye-icon");
let input_password = document.querySelectorAll(".input-password");

header_search.onclick = () => {
  header_search_bar.classList.add("search-open");
};
search_close.onclick = () => {
  header_search_bar.classList.remove("search-open");
};
menu_tgl_btn.onclick = () => {
  menu.classList.toggle("show");
};
eye_icon.forEach((e, n) => {
  e.onclick = () => {
    if (input_password[n].type == "password") {
      input_password[n].type = "text";
      e.classList.add("hide");
    } else {
      input_password[n].type = "password";
      e.classList.remove("hide");
    }
  };
});

// tab
let client_tab = document.querySelector(".client-tab");
let trainer_tab = document.querySelector(".trainer-tab");
let client_frm = document.querySelector(".client-frm");
let trainer_frm = document.querySelector(".trainer-frm");

client_tab.onclick = () => {
  if (trainer_frm.classList.contains("active")) {
    client_tab.classList.add("active");
    trainer_tab.classList.remove("active");

    trainer_frm.classList.add("hide");
    client_frm.classList.add("active");
    client_frm.classList.remove("hide");
  }
};
trainer_tab.onclick = () => {
  if (client_frm.classList.contains("active")) {
    trainer_tab.classList.add("active");
    client_tab.classList.remove("active");

    client_frm.classList.add("hide");
    trainer_frm.classList.add("active");
    trainer_frm.classList.remove("hide");
  }
};
