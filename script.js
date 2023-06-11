const swiperFirst = new Swiper(".buy-swiper-first", {
    navigation: {
        nextEl: "#swiper-button-next-first",
        prevEl: "#swiper-button-prev-first",
    },
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: false
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            allowTouchMove: false,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            allowTouchMove: true,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 2,
        },
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});

const swiperSecond = new Swiper(".buy-swiper-second", {
    navigation: {
        nextEl: "#swiper-button-next-second",
        prevEl: "#swiper-button-prev-second",
    },
    autoplay: {
        delay: 3300,
        pauseOnMouseEnter: false
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            allowTouchMove: false,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            allowTouchMove: true,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 2,
        },
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});

const swiperThird = new Swiper(".buy-swiper-third", {
    navigation: {
        nextEl: "#swiper-button-next-third",
        prevEl: "#swiper-button-prev-third",
    },
    autoplay: {
        delay: 3500,
        pauseOnMouseEnter: false
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            allowTouchMove: false,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            allowTouchMove: true,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 2,
        },
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});

const swiperFour = new Swiper(".buy-swiper-four", {
    navigation: {
        nextEl: "#swiper-button-next-four",
        prevEl: "#swiper-button-prev-four",
    },
    autoplay: {
        delay: 3200,
        pauseOnMouseEnter: false
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            allowTouchMove: false,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            allowTouchMove: true,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 2,
        },
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});