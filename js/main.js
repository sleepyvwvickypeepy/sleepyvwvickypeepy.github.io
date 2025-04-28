const swiper = new Swiper('.swiper', {
    
    loop: true, //количество элементов бесконечное или конеечное
    //freeMode: true, 


    slidesPerView: 3,
    spaceBetween: 32,
    

    /*breakpoints: {
        630: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024 {
            slidesPerView: 5,
            spaceBetween: 50,
        },

    },*/
    
    navigation: {
      nextEl: '.slider__btn--next',
      prevEl: '.slider__btn--prev',
    },
  });