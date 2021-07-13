new Glider(document.querySelector('.glider'), {
  slidesToShow: 1.04,
  slidesToScroll: 1,
  draggable: true,
  scrollLock: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2.05,
        slidesToScroll: 1,
      }
    },{
      // screens greater than >= 992px
      breakpoint: 992,
      settings: {
        slidesToShow: 2.15,
        slidesToScroll: 1,
        scrollLock: false,
      }
    }
  ]
});