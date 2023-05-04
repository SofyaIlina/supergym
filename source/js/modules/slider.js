const initSwiper = () => {
  new Swiper('.swiper--coaches', { // eslint-disable-line
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.coaches__btn--next',
      prevEl: '.coaches__btn--prev',
    },
    maxBackfaceHiddenSlides: 0,
    spaceBetween: 40,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
};

const initReviewsSwiper = () => {
  new Swiper('.swiper--reviews', { // eslint-disable-line
    direction: 'horizontal',

    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev',
    },

    slidesPerView: 1,
  });
};

initSwiper();
initReviewsSwiper();
