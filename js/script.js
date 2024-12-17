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

if (client_tab) {
  client_tab.onclick = () => {
    if (trainer_frm.classList.contains("active")) {
      client_tab.classList.add("active");
      trainer_tab.classList.remove("active");

      trainer_frm.classList.add("hide");
      client_frm.classList.add("active");
      client_frm.classList.remove("hide");
    }
  };
}

if (trainer_tab) {
  trainer_tab.onclick = () => {
    if (client_frm.classList.contains("active")) {
      trainer_tab.classList.add("active");
      client_tab.classList.remove("active");

      client_frm.classList.add("hide");
      trainer_frm.classList.add("active");
      trainer_frm.classList.remove("hide");
    }
  };
}

// multi stap form
const slidePage = document.querySelector(".slidePage");
const firstNextBtn = document.querySelector(".next-1");
const secondNextBtn = document.querySelector(".next-2");
const progress_bar = document.querySelector(".progress-bar div");
const back_icon = document.querySelector(".back-icon");

if (firstNextBtn) {
  firstNextBtn.onclick = () => {
    slidePage.style.marginLeft = "-25%";
    progress_bar.style.width = "100%";
    back_icon.style.opacity = "1";
  };
}
if (back_icon) {
  back_icon.onclick = () => {
    slidePage.style.marginLeft = "0";
    progress_bar.style.width = "50%";
    back_icon.style.opacity = "0";
  };
}

// choose file function
const chooseFileBtn = document.querySelector(".chooseFileBtn");
const FileInput = document.querySelector(".FileInput");
const choose_file_area = document.querySelector(".choose-file-area img");
let file;
chooseFileBtn.onclick = () => {
  FileInput.click();
};

FileInput.addEventListener("change", function () {
  file = this.files[0];
  let fileReader = new FileReader();
  fileReader.onload = () => {
    let fileUrl = fileReader.result;
    // choose_file_area.innerHTML = `<img src="${fileUrl}"/>`;
    choose_file_area.src = fileUrl;
    choose_file_area.style.width = "100%";
  };
  fileReader.readAsDataURL(file);
});
