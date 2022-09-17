gsap.from('.header',{duration:1, y:'-100%',ease:'bounce'})
gsap.from('.link',{duration:2,opacity:0, stagger:.4})
gsap.from('.right',{duration:1,delay:.5,x:'100%'})
gsap.from('.left',{duration:1,delay:.5,x:'-100%'})
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


/*
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}
*/

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






var slider = new Swiper(".swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 150,
  centeredSlides: true,
  mousewheel: true
})

slider.on('slideChange', function () {
  TweenMax.to('.slide-text span', .2, {
    y: '-100px',
  })
  TweenMax.to('.slide-number span', .2, {
    x: '-100px',
  })
  TweenMax.to('.swiper-slide-active', .5, {
    scale: .85
  })
})

slider.on('slideChangeTransitionEnd', function () {

  TweenMax.to('.slide-text span', .2, {
    y: 0,
    delay: .5
  })
  TweenMax.to('.slide-text span', 0, {
    y: '100px',
  })

  TweenMax.to('.slide-number span', .2, {
    x: 0,
    delay: .7
  })
  TweenMax.to('.slide-number span', 0, {
    x: '100px',
  })

  TweenMax.to('.swiper-slide-active', .5, {
    scale: 1,
    ease: Power4.easeOut,
  })

  TweenMax.to('.swiper-slide-active .slide-text', 0, {
    autoAlpha: 1
  })
  TweenMax.to('.swiper-slide-active .slide-number', 0, {
    autoAlpha: 1
  })

  TweenMax.to('.swiper-slide-next .slide-text', 0, {
    autoAlpha: 0
  })
  TweenMax.to('.swiper-slide-prev .slide-text', 0, {
    autoAlpha: 0
  })

  TweenMax.to('.swiper-slide-next .slide-number', 0, {
    autoAlpha: 0
  })
  TweenMax.to('.swiper-slide-prev .slide-number', 0, {
    autoAlpha: 0
  })
})

TweenMax.to('.swiper-slide-next .slide-text', 0, {
  autoAlpha: 0
})
TweenMax.to('.swiper-slide-prev .slide-text', 0, {
  autoAlpha: 0
})

TweenMax.to('.swiper-slide-next .slide-number', 0, {
  autoAlpha: 0
})
TweenMax.to('.swiper-slide-prev .slide-number', 0, {
  autoAlpha: 0
})

TweenMax.to('.swiper-slide', 0, {
  scale: .85,
})

TweenMax.to('.swiper-slide-active', 0, {
  scale: 1,
})
