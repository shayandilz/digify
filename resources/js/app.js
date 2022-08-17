require('./bootstrap');
// require('./gsap');
import 'swiper/css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import $ from 'jquery';


document.addEventListener('DOMContentLoaded', function () {
    //play pause button
    let playButton = document.getElementById("play_button");
    let video_tr = document.getElementById("video_tr")
    // Event listener for the play/pause button
    // playButton.addEventListener("click", function () {
    //     if (video.paused == true) {
    //         // Play the video
    //         video.play();
    //
    //         // Update the button text to 'Pause'
    //         playButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="#fff" class="bi bi-pause-fill" viewBox="0 0 16 16">
    //                                   <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
    //                                 </svg>`;
    //         video_tr.classList.add('transparent');
    //
    //     } else {
    //         // Pause the video
    //         video.pause();
    //
    //         // Update the button text to 'Play'
    //         playButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="#fff" class="bi bi-play-fill" viewBox="0 0 16 16">
    //                                     <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
    //                                 </svg>`;
    //         video_tr.classList.remove('transparent');
    //     }
    // });
    if (window.matchMedia('(max-width: 1200px)').matches) {

        $('.custom-dropdown').on('click', function (e) {
            let subMenu = $(this).children("ul");
            if (subMenu.is(':visible')) {
                subMenu.slideUp();
            } else {
                subMenu.slideDown();
            }

            return false;
        });
    } else {
        $("#navbarNav .custom-dropdown").hover(function () {
            var isHovered = $(this).is(":hover");
            if (isHovered) {
                $(this).children("ul").stop().slideDown(300);
            } else {
                $(this).children("ul").stop().slideUp(300);
            }
        });
    }

    //toggle header on time
    const toggleScrollClass = function () {
        if (window.scrollY > 24) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    }
    toggleScrollClass();

    //check scroll to take actions on it
    window.addEventListener('scroll', function () {
        toggleScrollClass();
    });

    const swiper = new Swiper('.swiper1', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 2000,
        },
        disableOnInteraction: false,
    });
    const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 35,
        slidesPerView: 3,
        centeredSlides: true,
        roundLengths: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        disableOnInteraction: false,
        breakpoints: {
            360: {
                slidesPerView: 1,
            },
            1050: {
                slidesPerView: 3,
            }
        }
    });
    const swiper3 = new Swiper('.swiper3', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        grabCursor: false,
        effect: 'creative',
        creativeEffect: {
            limitProgress: 2,
            prev: {
                // will set `translateZ(-400px)` on previous slides
                translate: [0, 0, 0],
            },
            next: {
                // will set `translateX(100%)` on next slides
                translate: [10, 10, 0],
            },
            shadowPerProgress: true,
            progressMultiplier: 1
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    // swiper3.changeLanguageDirection('rtl');
    var names = [];
    $(".swiper-wrapper .swiper-slide").each(function(i) {
        names.push($(this).data("name"));
    });
    // var menu = ['Slide 1', 'Slide 2', 'Slide 3']
    const swiper4 = new Swiper('.swiper4', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        grabCursor: false,
        effect: 'creative',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (names[index]) + '</span>';
            },
        },
        creativeEffect: {
            limitProgress: 2,
            prev: {
                // will set `translateZ(-400px)` on previous slides
                translate: [0, 0, 0],
            },
            next: {
                // will set `translateX(100%)` on next slides
                translate: [10, 10, 0],
            },
            shadowPerProgress: true,
            progressMultiplier: 1
        }
    });
    // swiper4.changeLanguageDirection('rtl');

})


