
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    effect: 'fade',
    loop: true,
    speed: 300,
    mousewheel: false,
    pagination: false,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });