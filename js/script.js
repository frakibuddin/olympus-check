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
const thirdNextBtn = document.querySelector(".next-3");
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

//
const nx1 = document.querySelector(".nx-1");
const nx2 = document.querySelector(".nx-2");
const nx3 = document.querySelector(".nx-3");

if (nx1) {
  nx1.onclick = () => {
    slidePage.style.marginLeft = "-25%";
    progress_bar.style.width = "75%";
    back_icon.style.opacity = "1";
  };
}

if (nx2) {
  nx2.onclick = () => {
    slidePage.style.marginLeft = "-50%";
    progress_bar.style.width = "100%";
    back_icon.style.opacity = "1";
  };
}

// choose file function
const chooseFileBtn = document.querySelectorAll(".chooseFileBtn");
const FileInput = document.querySelectorAll(".FileInput");
const choose_file_area = document.querySelector(".choose-file-area img");
let file;

chooseFileBtn.forEach((e, i) => {
  chooseFileBtn[i].onclick = () => {
    FileInput[i].click();
  };
});
if (FileInput[0]) {
  FileInput[0].addEventListener("change", function () {
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
}

// select-year-box
let select_year_box = document.querySelector(".select-year-box");
let select_box = document.querySelector(".select-box");
let select_year_box_close = document.querySelector(".select-year-box-close");

if (select_year_box_close) {
  select_year_box_close.onclick = () => {
    select_box.classList.add("hide");
  };
}
if (select_year_box) {
  select_year_box.onclick = () => {
    select_box.classList.remove("hide");
  };
}

// sliderList
const sliderList = document.getElementById("year-list");
const slider = document.getElementById("slider");
const input_select_year = document.querySelector(".input-select-year");

let currentIndex = 3; // Default active index for '4'
let isDragging = false;
let startY = 0;
let currentY = 0;

// Update slider position and active class
function updateSlider() {
  const items = document.querySelectorAll("#year-list li");
  items.forEach((item, index) => {
    item.classList.remove("active");
    if (index === currentIndex) {
      item.classList.add("active");
    }
  });
  sliderList.style.transform = `translateY(-${(currentIndex - 3) * 40}px)`;
}

// Handle drag start
if (slider) {
  slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    startY = e.clientY;
    slider.style.cursor = "grabbing";
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    currentY = e.clientY - startY;

    if (currentY > 40 && currentIndex > 0) {
      currentIndex--;
      startY = e.clientY;
      currentY = 0;
    } else if (currentY < -40 && currentIndex < 6) {
      currentIndex++;
      startY = e.clientY;
      currentY = 0;
    }
    updateSlider();
  });

  // End dragging
  window.addEventListener("mouseup", () => {
    isDragging = false;
    slider.style.cursor = "grab";
  });

  // Handle mouse scroll
  slider.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
      // Scroll Down
      if (currentIndex < 6) currentIndex++;
    } else {
      // Scroll Up
      if (currentIndex > 0) currentIndex--;
    }
    updateSlider();
  });

  // Handle year selection
  function selectYear() {
    const selectedYear = document.querySelector(
      "#year-list li.active"
    ).innerText;
    input_select_year.value = selectedYear;
    select_box.classList.add("hide");
    // alert("Selected Year: " + selectedYear);
  }

  updateSlider(); // Initialize the slider
}

let icon_popup = document.querySelector(".icon-popup");
let icon_popup_close = document.querySelector(".icon-popup-close");

icon_popup_close.onclick = () => {
  icon_popup.classList.add("close");
};
