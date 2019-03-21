(function ($) {
    var $window = $(window);
    var $document = $(document);
    var sections;

    $document.ready(function () {
        sections = $('#main>.section')
        var swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 5000,
            }
        });

        $(function () {
            $("#tabs").tabs();
        });

        $window.scroll(function () {
            var scrollTop = $window.scrollTop();
            sections.each(function () {
                var $this = $(this)
                if (scrollTop >= $this.offset().top) {
                    $this.addClass('active');
                }
                else {
                    $this.removeClass('active');
                }
            });
        });

        $('.navbar li a').click(function () {
            $('.navbar li').removeClass('active');
            $(this).parent().addClass('active');
        })

        $('.mobile-menu').click(function () {
            $('.navbar').toggleClass('active');
        })

    });
})(jQuery)