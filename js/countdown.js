$(document).ready(function () {

    // set the date we're counting down to
    var target_date = new Date('04, 22, 2016').getTime();

    // variables for time units
    var days, hours, minutes, seconds;

    // get tag element
    var countdown = $('#countdown');

    // update the tag with id "countdown" every 1 second
    setInterval(function () {

        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        // format countdown string + set tag value
        countdown.html( '<span class="days">' + days +  ' jour' + (days<2 ? '':'s') +'</span> <span class="hours">' + hours + ' heure' + (hours<2 ? '':'s') +'</span> <span class="minutes">'
        + minutes + ' minute' + (minutes<2 ? '':'s') +'</span> <span class="seconds">' + seconds + ' seconde' + (seconds<2 ? '':'s') +'</span>');  

    }, 1000);
    
    
});
 
