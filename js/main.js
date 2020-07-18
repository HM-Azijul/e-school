(function ($) {
    "use strict";
    // active JS 
    $('.navbar-toggler .nav-icon').click(function () {
        $('.nav-icon').removeClass("active");
        $(this).addClass("active");
    });

})(jQuery);