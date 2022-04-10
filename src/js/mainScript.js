const main_url = window.location.pathname.replace('/', '');

function HomeRedirect() {
    if (main_url !== 'home'){
        window.location.replace("home");
    }
}

$(document).ready(function () {
    $('.site-redirect-elements').click(function() {

        var redirect_key = $(this).data('redirect-key');
        console.log(redirect_key);
        if(redirect_key !== "active"){
            window.location.replace(redirect_key);
        }
    });

    var header_index = 0;

    var header_css_path = [
        'src/css/sub_css/header/apple.css',
        'src/css/sub_css/header/pear.css',
        'src/css/sub_css/header/plum.css',
        'src/css/sub_css/header/strawberry.css',
    ];

    var img_urls = [
        'src/img/background_apple.jpg',
        'src/img/background_pear.jpg',
        'src/img/background_plum.jpg',
        'src/img/background_strawberry.jpeg',
    ];

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
