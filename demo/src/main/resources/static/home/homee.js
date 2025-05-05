

// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
let storesArrow = document.querySelector(".stores-arrow");
storesArrow.onclick = function() {
  navLinks.classList.toggle("showStores");
}
// Submenu toggles
let bhomikaArrow = document.querySelector(".bhomika-arrow");
bhomikaArrow.onclick = function() {
  navLinks.classList.toggle("showBhomika");
}

let kanbanArrow = document.querySelector(".kanban-arrow");
kanbanArrow.onclick = function() {
  navLinks.classList.toggle("showKanban");
}

let ifatArrow = document.querySelector(".ifat-arrow");
ifatArrow.onclick = function() {
  navLinks.classList.toggle("showIfat");
}

let cfatArrow = document.querySelector(".cfat-arrow");
cfatArrow.onclick = function() {
  navLinks.classList.toggle("showCfat");
}

let othersArrow = document.querySelector(".others-arrow");
othersArrow.onclick = function() {
  navLinks.classList.toggle("showOthers");
}
