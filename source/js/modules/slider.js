const initSwiper = () => {
  new Swiper('.swiper--coaches', { // eslint-disable-line
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.coaches__btn--next',
      prevEl: '.coaches__btn--prev',
    },
    spaceBetween: 40,
    maxBackfaceHiddenSlides: 0,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 6,
      },
      1200: {
        slidesPerView: 4,
        initialSlide: 4,
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
