$(document).ready(function () {

    $(".player").mb_YTPlayer();
    $(".player").YTPApplyFilters({
        blur: 1
    });
    /*
    //flipclock.js : désactivée pour le moment (TODO : nettoyer les chargements de css et js)
    var target_date = new Date('04, 22, 2016').getTime();//.getTime();
    //var seconds = targetDate - Date.now();
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
    
    var clock = $('.countdown').FlipClock(seconds_left,{
        // ... your options here
        autoStart: true,
        countdown: true,
        defaultLanguage: 'french',
        clockFace: 'DailyCounter'
    });
    clock.start(function() {
    // this (optional) callback will fire each time the clock flips
    });
    */
});