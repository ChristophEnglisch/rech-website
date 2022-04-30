const img_urls = [
    'src/img/background_apple.jpg',
    'src/img/background_pear.jpg',
    'src/img/background_plum.jpg',
    'src/img/background_strawberry.jpeg',
];

const header_index = Math.floor(Math.random() * 4);

$(document).ready(function(){
    $('body').css('background-image', 'url(' + img_urls[header_index] + ')');
});

function HomeRedirect(){ window.location.replace("home"); }
