const slides = document.querySelectorAll('.slides');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dots = document.querySelectorAll('.dot')


let index = 0;

// Adding opacity to first dot on first time

dots[0].style.opacity='1'

// positioning the slides

slides.forEach((slide,index)=>{
  slide.style.left=`${index*100}%`
});


// move slide function

const moveSlide = () =>{
  slides.forEach((slide)=>{
    slide.style.transform=`translateX(-${index*100}%)`;
  });
}

// remove dots opacity 1 from all dots

const removeDotsOpacity = () =>{
  dots.forEach((dot)=>{
    dot.style.opacity='.2';
  });
}

dots.forEach((dot,i)=>{
  dot.addEventListener("click",(e)=>{
    index=i;
    removeDotsOpacity();
    e.target.style.opacity='1'
    moveSlide();
  })
});

// show the previous slide

prevBtn.addEventListener('click',()=>{
  if(index===0) return index;
  index--;
  removeDotsOpacity();
  dots[index].style.opacity='1'
  moveSlide();
});

// show the next slide

nextBtn.addEventListener('click',()=>{
  if(index===slides.length-1) return index;
  index++;
  removeDotsOpacity();
  dots[index].style.opacity='1'
  moveSlide();
});

// auto play slide

const autoPlaySlide = () =>{
  removeDotsOpacity();
  if(index===slides.length-1) index= -1;
  index++;
  dots[index].style.opacity='1'
  moveSlide();
}

window.onload=()=>{
  setInterval(autoPlaySlide,6000);
}

// 

'use strict';
(function($) {
  $('document').ready(function() {

    /* Current Facts Slider */
    if ('.ct-js-current-facts__slider'.length) {
      $('.ct-js-current-facts__slider').slick({
        arrows: true,
        slidesToShow: 4,
        autoplay: false,
        prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow--next">' + '<img src="https://www.solodev.com/assets/statistics-slider/arrow-next.jpg" />' + '</button>',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2
            }
          }, {
            breakpoint: 767,
            settings: {
              slidesToShow: 2
            }
          }, {
            breakpoint: 479,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    }

  });

})(jQuery);