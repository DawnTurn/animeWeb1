const progressBar = document.querySelector(".progressBar");
const page = document.querySelector(".container");
const nav = document.querySelector("nav");
const burger = document.querySelector(".burger");
const navLink = document.querySelectorAll("nav li");
const inputAni = document.querySelector(".search");
const bounce = document.querySelector("#bouncing");
const darkened = document.querySelector('.darkened')
const body = document.querySelector('body')

// function animateProgressBar() {
//   let scrollDistance = page.getBoundingClientRect().top;
//   let progressWidth = (scrollDistance / (page.getBoundingClientRect().height - document.documentElement.clientHeight + 149));
//   let value = Math.floor(progressWidth);
//   progressBar.style.left = value + "%";
// }

// window.addEventListener("scroll", animateProgressBar);

function zoom() {
  if (inputAni.style.animation) {
    inputAni.style.animation = "";
  } else {
    inputAni.style.animation = "zoom 1.4s ease forwards";
  }
}

burger.addEventListener("click", () => {
  nav.classList.toggle("open-nav");
  burger.classList.toggle("toggle");
  darkened.classList.toggle('lightened')
  body.classList.toggle('overflow')

  navLink.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `list .5s ease forwards ${index / 6 + 0.4}s`;
    }
  });
  zoom();
});

bounce.addEventListener("click", () => {
    bounce.style.animation = "bounce 1s ease forwards";
    setTimeout(() => {
      bounce.style.animation = ""
    }, 1000)
});

var typed = new Typed("#typing", {
  strings: ["eality", "ealm", "eal-life"],
  typeSpeed: 200,
  backSpeed: 150,
  loop: true,
});