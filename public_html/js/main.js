$(document).ready(function () {

    $('header .navbar-toggler').click(function () {
        $(this).children('span').toggleClass('fa-bars fa-times');
    });

    if ($('.home .home-slider').length > 0) {
        $('.home-slider').owlCarousel({
            autoplay: true,
            loop: true,
            autoplayHoverPause: true,
            items: 1
        });
    }

    function setMarginTop() {
        let headerHeight = $('header').outerHeight();
        $('main').css('marginTop', headerHeight);
    }
    function setMarginViaScroll() {
        let headerHeight = $('header').outerHeight();
        if (($(window).scrollTop()) > headerHeight) {
            $('header').addClass('py-2');
            headerHeight = $('header').outerHeight();
            $('main').css('marginTop', headerHeight);
        } else {
            $('header').removeClass('py-2');
            headerHeight = $('header').outerHeight();
            $('main').css('marginTop', headerHeight);
        }
    }
    setMarginViaScroll();
    setMarginTop();
    $(window).resize(function () {
        setMarginTop();
    }).scroll(function () {
        setMarginViaScroll();
        animation();
    });
    
    function animation(){
        let windowHeight = $(window).height();
        let scrollFromTop = $(window).scrollTop();
        $('.animation').each(function(){
            let elementPosition = $(this).offset().top;
            let animation = $(this).attr('data-animation');
            if (elementPosition < scrollFromTop + windowHeight - 150){
                $(this).addClass(animation);
            }
        });  
    }
    animation();

    
    if ($('.counter').length > 0) {
        $('.counter').counterUp();
    }


    if ($('.testimonials .testimonials-slider').length > 0) {
        $('.testimonials-slider').owlCarousel({
            autoplay: true,
            loop: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2,
                    margin: 30
                }
            }
        });
    }


    if ($('.client-slider').length > 0) {
        $('.client-slider').owlCarousel({
            autoplay: true,
            loop: true,
            autoplayHoverPause: true,
            margin: 30,
            responsive: {
                0: {
                    items: 2

                },
                768: {
                    items: 3
                },
                1200: {
                    items: 6
                }
            }
        });
    }


    $(function () {
        $(".login-form").validate({
            highlight: function (element) {
                $(element).addClass("is-invalid").removeClass("is-valid");
                $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
            },
            unhighlight: function (element) {
                $(element).removeClass('is-invalid').addClass('is-valid');
                $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
            },
            rules: {
                username: {
                    required: true,
                    rangelength: [2, 20]
                },
                password: {
                    required: true,
                    minlength: 6
                  
                           
                }


            },
            messages: {
                username: {
                    required: 'Ime je obavezno polje',
                    rangelength: 'Ime mora bitii izmedju 2 i 20 karaktera'
                },
                
                password: {
                    required: 'Lozinka je obavezno polje',
                    minlength: 'Lozinka mora imati min 6 karaktera'
                    
                }

            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.error-message'));
            }

        });
    });
});

