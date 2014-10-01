$(document).ready(function(){
    $('div').click(function(){
        $(this).fadeOut('fast');
    });
    $('div').hover(function(){
        $(this).addClass('red');
        });
    
});

/*$(document).ready(function(){
    $('div').click(function(){
        $(this).effect('slide', {times:3},500);
        });
    });*/
