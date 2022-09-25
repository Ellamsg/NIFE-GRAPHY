//page transition
const link2 = document.querySelector(".link2");
const transition = document.querySelector(".transition");
link2.addEventListener("click", (e) => {
  e.preventDefault();
  transition.classList.add("slide");
  setTimeout(() => {
    window.location = link2.href;
  }, 900);
});

const callback = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    } else {
      entry.target.classList.remove("animate-fadeIn");
    }
  });
};
const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});

//numbers onclick background changer
let bgchange = document.getElementById("bg-change");
let num1 = document.getElementById("click1");
let num2 = document.getElementById("click2");
let num3 = document.getElementById("click3");
let num4 = document.getElementById("click4");
let num5 = document.getElementById("click5");
num1.addEventListener("click", () => {
  bgchange.style.backgroundImage = "url(page/eye.jpg)";
  bgchange.style.transition = "all 2s";
});
num2.addEventListener("click", () => {
  bgchange.style.backgroundImage = "url(page/girlsad.jfif)";
  bgchange.style.transition = "all 2s";
});
num3.addEventListener("click", () => {
  bgchange.style.backgroundImage = "url(page/pink.jpg)";
  bgchange.style.transition = "all 2s";
});
num4.addEventListener("click", () => {
  bgchange.style.backgroundImage = "url(page/manknown.jpg)";
  bgchange.style.transition = "all 2s";
});
num5.addEventListener("click", () => {
  bgchange.style.backgroundImage = "url(page/girlonafro.jpeg)";
  bgchange.style.transition = "all 2s";
});

