// Get Modal Element
var modal = document.getElementById("simpleModal");
// Get Mobile-Nav Element
var mobileNav = document.getElementById("mobile-nav")
// Get open modal button or link
var modalBtn = document.getElementById("modalBtn");
// Get close Button
var closeBtn = document.getElementsByClassName("closeBtn")[0];
// Get mobile menu icon
var mobileBtn = document.getElementById("menu-icon");

// Listen for open/close click
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
mobileBtn.addEventListener("click", operateNav);
// mobileBtn.addEventListener("click", closeNav);
// Listen for outside click
window.addEventListener("click", outsideClick);

function openModal(){
  modal.style.display = 'block';
}

function closeModal(){
  modal.style.display = 'none';
}

function outsideClick(e){
  // modal equals the area outside modal???
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}

function operateNav() {
  if (mobileNav.style.display == 'none') {
    mobileNav.style.display = 'block';
  }
  else {
    mobileNav.style.display = 'none';
  }

}
