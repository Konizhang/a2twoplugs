$(document).ready(function() {

    new $.Zebra_Accordion('#Zebra_Accordion', {
        'collapsible':  true,
        show:  4
    });
    $("#slider-comment").responsiveSlides({
        manualControls: '#comment-thumbs',
        auto: false,
        nav: true
    });
    $("#delicious-slider").responsiveSlides({
        auto: false,
        nav: false,
        manualControls: '.delicious-preview'

    });
    $(".our-work").responsiveSlides({
        auto: false,
        nav: false,
        manualControls: '.our-work-thumb'
    });
    $(function(){
        var sml = window.matchMedia('all and (max-width: 1024px)');
        if (sml.matches) {
            $('html body br').remove()
        }
    });
    $("header .container .toggle-nav").click(function(){
        $('header .container .navbar-nav ul ').toggle()
    });
//navigation fixed
    $(function(){
        var $win = $(window);
        var $nav = $('header');
        var navTop = $('header').length && $('header').offset().top+673;
        var isFixed=0;

        processScroll()
        $win.on('scroll', processScroll)

        function processScroll() {
            var i, scrollTop = $win.scrollTop()

            if (scrollTop >= navTop && !isFixed) {
                isFixed = 1
                $nav.addClass('header-fixed')
            } else if (scrollTop <= navTop && isFixed) {
                isFixed = 0
                $nav.removeClass('header-fixed')
            }
        }


    });
    $('.fancybox-media')
        .attr('rel', 'media-gallery')
        .fancybox({
            openEffect : 'none',
            closeEffect : 'none',
            prevEffect : 'none',
            nextEffect : 'none',

            arrows : false,
            helpers : {
                media : {},
                buttons : {}
            }
        });
    $('.typeFile input,.check input,.cuSelect select').styler({
    });

});