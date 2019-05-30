$(document).ready(function () {

    $('.main-slider').slick({
        infinite: true,
        dots: true,
        arrows: false
    });

    $('.gallery-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        centerMode: true,
        centerPadding: '160px',
        slidesToShow: 1,
        swipe: false,
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: '0px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: '0px'
                }
            }
        ]
    });

    $('.reviews-slider').slick({
        slidesToShow: 1,
        dots: false,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.about-slider').slick({
        dots: false,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        slidesToShow: 1,
    });

    $(".about-slider").on('afterChange', function(event, slick, currentSlide){
        $(".cp").text(currentSlide<10?`0${currentSlide+1}`:currentSlide+1);
    });

    $('.certificate-slider').slick({
        slidesToShow: 5,
        dots: false,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [
            {
                breakpoint: 1040,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.company-document-slider').slick({
        slidesToShow: 1,
        dots: true,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        appendArrows: '.company-document__navigation',
        appendDots: '.company-document__navigation'
    });

    $('.item-dropdown').on('click', function () {
       $(this).find('.dropdown-menu').slideToggle();
    });


    $('.twentytwenty-container').twentytwenty({
        after_label: '',
        before_label: ''
    });

    // активная ссылка меню
    $('.menu li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location == link) {
            $(this).addClass('current');
        }
    });
// end


    $('.panel_heading .block_title').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.panel_heading .block_title').not(this).removeClass('in').next().slideUp();
    });


    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.btn-mobile-menu').click(function () {
        $(this).toggleClass('in');
       $('.navigation').slideToggle();
    });

    ymaps.ready(function () {
        var map = new ymaps.Map("map", {
            center: [55.75399399999374, 37.62209300000001],
            zoom: 9
        });

        var place = new ymaps.Placemark(
            [55.697890392690915, 37.4114910109405], {
                hintContent: 'г. Москва, ул. Бутлерова, д.17, БЦ NEO GEO',
            }, {
                iconImageHref: 'img/location.png',
                iconImageSize: [25, 38],
                iconLayout: 'default#image',
            }
        );
        map.geoObjects.add(place);
    });


});

$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});

$(window).on('load resize', function() {
    if ($(window).width() < 1120) {
        $('.specialist-content:not(.slick-initialized)').slick({
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 3,
            arrows: true,
            nextArrow: '<button type="button" class="slick-next"></button>',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            responsive: [
                {
                    breakpoint: 920,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 620,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    } else {
        $(".specialist-content.slick-initialized").slick("unslick");
    }

    if ($(window).width() < 768) {
        $('.tabs-work .tabs__caption:not(.slick-initialized)').slick({
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 3,
            arrows: false,
            responsive: [
                {
                    breakpoint: 430,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    } else {
        $(".tabs-work .tabs__caption.slick-initialized").slick("unslick");
    }
});

$(document).ready(function () {
    $(function () {

        if ($(window).resize() < 481) {
            // $('.header-box').unwrap('.header-top');
            // $('.btn-mobile-menu').unwrap('.header-bottom');

            $('.header .box-address .icon').on('click', function () {
               $(this).siblings('.text').slideToggle();
            });

            $('.header .box-phone .icon').on('click', function () {
                $(this).siblings('.text').slideToggle();
            });
        }
        else {
            if ($(window).width() > 481) {
                $('.header-box .text').show();
            }
        }

        if ($(window).width() < 481) {
            // $('.header-box').unwrap('.header-top');
            // $('.btn-mobile-menu').unwrap('.header-bottom');

            $('.header .box-address .icon').on('click', function () {
                $(this).siblings('.text').slideToggle();
            });

            $('.header .box-phone .icon').on('click', function () {
                $(this).siblings('.text').slideToggle();
            });
        }
        else {
            if ($(window).width() > 481) {
                $('.header-box .text').show();
            }
        }

    });


    window.addEventListener("resize", function() {
        if ($(window).width() < 481) {
            // $('.header-box').unwrap('.header-top');
            // $('.btn-mobile-menu').unwrap('.header-bottom');

            $('.header .box-address .icon').on('click', function () {
                $(this).siblings('.text').slideToggle();
            });

            $('.header .box-phone .icon').on('click', function () {
                $(this).siblings('.text').slideToggle();
            });
        } else {
            if ($(window).width() > 481) {
                $('.header-box .text').show();
            }
        }


    }, false);
});
