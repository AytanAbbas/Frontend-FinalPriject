$(document).ready(function() {

    $("#owl-demo").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    //section-pricing
    $("#pricing .pricing-list ul li .month").click(function() {
        $(".content").css({ "display": "block" });
        $(".content2").css({ "display": "none" });
        $(".month").css({ "background-color": "#080a3c" });
        $(".month").css({ "color": "#ffffff" });
        $(".month").css({ "transition": " 0.5s" });
        $(".year").css({ "background-color": "#ffffff" });
        $(".year").css({ "color": "#8d8fb4" });
        $(".month").css({ "border-radius": " 30px 0 0 30px" });
        $(".year").css({ "border-radius": " 0 30px 30px 0" });



    });
    $("#pricing .pricing-list ul li .year").click(function() {
        $(".content").css({ "display": "none" });
        $(".content2").css({ "display": "block" });
        $(".year").css({ "background-color": "#080a3c" });
        $(".year").css({ "color": "#ffffff" });
        $(".month").css({ "background-color": "#ffffff" });
        $(".month").css({ "color": "#8d8fb4" });
        $(".month").css({ "border-radius": " 30px 0 0 30px" });
        $(".year").css({ "border-radius": " 0 30px 30px 0" });
        $(".year").css({ "transition": " 0.5s" });

    });


    //section-aboutStrax
    $(function() {
        $('.accordions').find('a').on('click', function() {

            $("a .fa-minus").css("display", "block");
            $("a .fa-plus").css("display", "none");
            $(this).toggleClass('active');
            $('p').css("border-top", " 1px solid #ff612f");
            $('#aboutStrax').css("padding-bottom", " 150px");
            $(this).next().slideToggle('hide');
            $('p').not($(this).next()).slideUp('hide');
            $('a').not($(this)).removeClass('active');
        });
    });


    //section-subscribe


    //goTop
    $(function() {
        // on scroll
        $(window).on('scroll', function() {
            let scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.goTop').addClass('active');
            if (scrolled < 600) $('.goTop').removeClass('active');
        });
        // on click
        $('.goTop').on('click', function() {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });





});