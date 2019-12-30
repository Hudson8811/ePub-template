$(document).ready(function () {
    $('.accordion-menu .submenu_show').click(function (e) {
        e.preventDefault();
        $(this).parent().siblings('ul').slideToggle().parent().toggleClass('active');
    });
});