$(document).ready(function () {
    $('.fancybox_cation_right [data-fancybox="gallery"]').fancybox({
        baseClass: "fancybox-custom-layout-right",
        infobar: false,
        touch: {
            vertical: false
        },
        buttons: ["close", "thumbs", "share"],
        animationEffect: "fade",
        transitionEffect: "fade",
        preventCaptionOverlap: false,
        idleTime: false,
        gutter: 0,
    });

    $('.fancybox_cation_left [data-fancybox="gallery"]').fancybox({
        baseClass: "fancybox-custom-layout-left",
        infobar: false,
        touch: {
            vertical: false
        },
        buttons: ["close", "thumbs", "share"],
        animationEffect: "fade",
        transitionEffect: "fade",
        preventCaptionOverlap: false,
        idleTime: false,
        gutter: 0,
    });
});