const main_url = window.location.pathname.replace('/', '');

const header_css_path = [
    'src/css/elements/header/apple.css',
    'src/css/elements/header/pear.css',
    'src/css/elements/header/plum.css',
    'src/css/elements/header/strawberry.css',
];

const img_urls = [
    'src/img/fruits/apple/BackgroundApple.jpg',
    'src/img/fruits/pear/BackgroundPear.jpg',
    'src/img/fruits/stonefruit/BackgroundPlum.jpg',
    'src/img/fruits/strawberry/BackgroundStrawberry.jpeg',
];

function HomeRedirect() {
    if (main_url !== 'home'){
        window.location.replace("home");
    }
}

$(document).ready(function () {
    $('.touchEventListener').on('tap',function () {
        alert('test');
        const touchAim = $(this).data('touch-aim')
        $('.' + touchAim).show();
    });

    $('.site-redirect-elements').click(function() {
        const redirectKey = $(this).data('redirect-key');
        if(redirectKey !== "active"){
            window.location.replace(redirectKey);
        }
    });

    let header_index = 0;

    switch (main_url) {
        case 'home' :
            header_index = 2;
            break;
        case 'apple' :
            header_index = 0;
            break;
        case 'pear' :
            header_index = 1;
            break;
        case 'stonefruit' :
            header_index = 2;
            break;
        case 'strawberry' :
            header_index = 3;
            break;
        default:
            header_index = Math.floor(Math.random() * 4);
            break;
    }

    //preload einbauen
    $('header').css('background-image', 'url(' + img_urls[header_index] + ')');

    //preload einbauen
    $("<link/>", {
        rel: "stylesheet",
        type: "text/css",
        href: header_css_path[header_index]
    }).appendTo("head");
});
