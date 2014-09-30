//launch js's jquery
$(document).ready(function() {
//launch initial action
    $('div').mouseenter(function() {
//launch behaviour
        $(this).animate({
            height: '+=10px'
            });
        });
//launch second action
    $('div').mouseover(function() {
//launch behaviour
        $(this).animate({
            height: '-=10px'
        });
    });
    //launch second action
    $('div').click(function(){
        //launch behaviour
        $(this).toggle(1000);
        });
    });
