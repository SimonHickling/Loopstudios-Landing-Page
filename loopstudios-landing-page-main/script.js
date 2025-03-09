const hamburgerIcon = document.getElementById("hamburger-icon");
const hamburgerMenu = document.getElementById("hamburger-menu");
const navBar = document.getElementById("nav-bar")
const hamburgerIconClose = document.getElementById("hamburger-icon-close")
//hamburger sidebar menu
hamburgerIcon.onclick = function() {
    navBar.classList.add('show')
    hamburgerIcon.classList.add('hidden')
    hamburgerIconClose.classList.remove('hidden')
}

hamburgerIconClose.onclick = function() {
    navBar.classList.remove('show')
    hamburgerIcon.classList.remove('hidden')
    hamburgerIconClose.classList.add('hidden')

}

//Screen size show hamburger

function hamburgerActive() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 800) {
        hamburgerMenu.classList.remove("hidden")
    }

    else if (screenWidth >= 800) {
        hamburgerMenu.classList.add('hidden')
    }
}

window.addEventListener('resize', hamburgerActive);


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.remove('fade');
          entry.target.classList.add('unfade');
      }
      else {
          entry.target.classList.add('fade');
          entry.target.classList.remove('unfade');
      }
  
    });
  });

  const hiddenElements = document.querySelectorAll('.fade')
  hiddenElements.forEach((el) => observer.observe(el));