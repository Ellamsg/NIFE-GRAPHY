gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });
gsap.from(".link", { duration: 2, opacity: 0, stagger: 0.4 });
gsap.from(".right", { duration: 1, delay: 0.5, x: "100%" });
gsap.from(".left", { duration: 1, delay: 0.5, x: "-100%" });

//hamburger toggle

$(document).ready(function () {
  $(".nav-toggler").each(function (_, navToggler) {
    var target = $(navToggler).data("target");
    $(navToggler).on("click", function () {
      $(target).animate({
        height: "toggle",
      });
    });
  });
});

var slider = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 150,
  centeredSlides: true,
  mousewheel: true,
});

slider.on("slideChange", function () {
  TweenMax.to(".slide-text span", 0.2, {
    y: "-100px",
  });
  TweenMax.to(".slide-number span", 0.2, {
    x: "-100px",
  });
  TweenMax.to(".swiper-slide-active", 0.5, {
    scale: 0.85,
  });
});

slider.on("slideChangeTransitionEnd", function () {
  TweenMax.to(".slide-text span", 0.2, {
    y: 0,
    delay: 0.5,
  });
  TweenMax.to(".slide-text span", 0, {
    y: "100px",
  });

  TweenMax.to(".slide-number span", 0.2, {
    x: 0,
    delay: 0.7,
  });
  TweenMax.to(".slide-number span", 0, {
    x: "100px",
  });

  TweenMax.to(".swiper-slide-active", 0.5, {
    scale: 1,
    ease: Power4.easeOut,
  });

  TweenMax.to(".swiper-slide-active .slide-text", 0, {
    autoAlpha: 1,
  });
  TweenMax.to(".swiper-slide-active .slide-number", 0, {
    autoAlpha: 1,
  });

  TweenMax.to(".swiper-slide-next .slide-text", 0, {
    autoAlpha: 0,
  });
  TweenMax.to(".swiper-slide-prev .slide-text", 0, {
    autoAlpha: 0,
  });

  TweenMax.to(".swiper-slide-next .slide-number", 0, {
    autoAlpha: 0,
  });
  TweenMax.to(".swiper-slide-prev .slide-number", 0, {
    autoAlpha: 0,
  });
});

TweenMax.to(".swiper-slide-next .slide-text", 0, {
  autoAlpha: 0,
});
TweenMax.to(".swiper-slide-prev .slide-text", 0, {
  autoAlpha: 0,
});

TweenMax.to(".swiper-slide-next .slide-number", 0, {
  autoAlpha: 0,
});
TweenMax.to(".swiper-slide-prev .slide-number", 0, {
  autoAlpha: 0,
});

TweenMax.to(".swiper-slide", 0, {
  scale: 0.85,
});

TweenMax.to(".swiper-slide-active", 0, {
  scale: 1,
});
