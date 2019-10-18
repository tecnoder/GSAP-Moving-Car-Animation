(function() {

    var car = document.getElementById("car"),
        count = 0;

     TweenMax.to(car, 1, {x:1250, repeat:-1, repeatDelay:0.2, ease:Linear.easeNone, onRepeat:repeatHandler, delay:1});

    function repeatHandler() {
        count++;
        TweenMax.set(car, {backgroundPosition:"0px -=160px"});
    }

})();