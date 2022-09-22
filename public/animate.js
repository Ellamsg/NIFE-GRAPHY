  
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