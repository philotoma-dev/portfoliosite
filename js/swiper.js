// =========================
// Skills / Works / Other Swiper
// =========================

let skillsSwiper = undefined;
let worksSwiper = undefined;
let otherSwiper = undefined;


// =========================
// Skills / Works Swiper
// 768px以下のみ
// =========================

function initResponsiveSwipers() {

    const mediaQuery = window.matchMedia('(max-width: 768px)');


    function handleSwiper(e) {

        if (e.matches) {

            // -------------------------
            // Skills Swiper
            // -------------------------

            if (!skillsSwiper) {

                skillsSwiper = new Swiper(
                    '.skills-swiper',
                    {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        centeredSlides: true,
                        loop: true,

                        pagination: {
                            el: '.skills-swiper .swiper-pagination',
                            clickable: true,
                        },
                    }
                );

            }


            // -------------------------
            // Works Swiper
            // -------------------------

            if (!worksSwiper) {

                worksSwiper = new Swiper(
                    '.works-swiper',
                    {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        centeredSlides: true,
                        loop: true,

                        pagination: {
                            el: '.works-swiper .swiper-pagination',
                            clickable: true,
                        },
                    }
                );

            }

        } else {

            // -------------------------
            // Skills Swiperを破棄
            // -------------------------

            if (skillsSwiper) {

                skillsSwiper.destroy(true, true);
                skillsSwiper = undefined;

            }


            // -------------------------
            // Works Swiperを破棄
            // -------------------------

            if (worksSwiper) {

                worksSwiper.destroy(true, true);
                worksSwiper = undefined;

            }

        }

    }


    mediaQuery.addEventListener(
        'change',
        handleSwiper
    );

    handleSwiper(mediaQuery);

}


// =========================
// Other Swiper
// =========================

function initOtherSwiper() {

    const otherSwiperElement = document.querySelector('.other-swiper');

    if (!otherSwiperElement) return;

    otherSwiper = new Swiper(
        '.other-swiper',
        {
            loop: true,
            spaceBetween: 20,
            speed: 600,
            slidesPerView: 1.5,

            breakpoints: {

                480: {
                    slidesPerView: 2.2,
                    spaceBetween: 15,
                },

                768: {
                    slidesPerView: 3.5,
                    spaceBetween: 15,
                },

                1024: {
                    slidesPerView: 4.5,
                    spaceBetween: 15,
                },

            },

            pagination: {
                el: '.other-swiper .swiper-pagination',
                type: 'progressbar',
            },

        }
    );

}

const mvSwiper = new Swiper('.mv-swiper', {
    loop: true,             
    effect: 'fade',  
    fadeEffect: {
        crossFade: true   
    },
    speed: 1500,         
    autoplay: {
        delay: 4000,         
        disableOnInteraction: false, 
    },
});

// =========================
// 初期化
// =========================

initResponsiveSwipers();
initOtherSwiper();