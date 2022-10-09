$(document).ready(function(){

    $('.top-container__burger').click(function() {
        $('.top-container__navbar,.top-container__burger').toggleClass('active');
        $('body').toggleClass('lock');
    });

});