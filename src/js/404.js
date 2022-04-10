$(document).ready(function(){
    var img_urls = [
        'src/img/background_apple.jpg',
        'src/img/background_pear.jpg',
        'src/img/background_plum.jpg',
        'src/img/background_strawberry.jpeg',
    ];
    var header_index = Math.floor(Math.random() * 4);
    $('body').css('background-image', 'url(' + img_urls[header_index] + ')');
});

function HomeRedirect(){ window.location.replace("home"); }
