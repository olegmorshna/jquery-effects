$(document).ready(function(){
$('.header-menu__link-jquery').on('click', function(e){
    e.preventDefault();
    let href = $(this).attr('href');
    let offset = $(href).offset().top;
    $('html, body').animate({
        scrollTop: offset,
    }, 1000);
})

function scrollButtonTop(){
let button = $(".back");
$(window).on('scroll', () =>{
    if($(this).scrollTop() >= 533){
        button.fadeIn();
    } else {
        button.fadeOut();
    };
});
button.on('click', (e) => {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0,
    }, 2000);
})
};
scrollButtonTop();

function hideBlock(){
    $('.buttonToggle').on('click', function(){
        $('.section__most-popular-clients').slideToggle(1000);
    });
};

hideBlock();




});