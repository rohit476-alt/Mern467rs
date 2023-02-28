$(document).ready(function(){


    $('#menu').click(function(){
        $(this).toggleclass('fa-times');
        $('header').toggleclass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeclass('fa-times');
        $('header').removeclass('toggle');

    });

});
