const mobileBtn = document.querySelector(".mobile-nav-icon button");
const mobileOverlay= document.querySelector(".mobile-nav-container");
const mobileMenuContainer = document.querySelector(".mobile-nav-container");

let menuBar ='<i class="fas fa-bars"></i>';
let closeBtn = '<img src="./images/icon-close.svg" alt="close Button">';

mobileBtn.addEventListener('click', function(){
    mobileMenuContainer.style.display = "flex";
    mobileBtn.innerHTML = closeBtn;
})

mobileOverlay.addEventListener('click', function(){
    mobileMenuContainer.style.display = "none";
    mobileBtn.innerHTML = menuBar;
})