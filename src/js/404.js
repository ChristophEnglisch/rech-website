const img_urls = [
    'src/img/fruits/apple/BackgroundApple.jpg',
    'src/img/fruits/pear/BackgroundPear.jpg',
    'src/img/fruits/stonefruit/BackgroundPlum.jpg',
    'src/img/fruits/strawberry/BackgroundStrawberry.jpeg',
];

const header_index = Math.floor(Math.random() * 4);

$(document).ready(function(){
    $('body').css('background-image', 'url(' + img_urls[header_index] + ')');
});

function HomeRedirect(){ window.location.replace("home"); }
