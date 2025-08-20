let displays = document.querySelectorAll(".num");
let interval = 4000;

displays.forEach((displays) => {
    let beginValue = 0;
    let endValue = parseInt(displays.getAttribute("data-val"));

    let duration = Math.floor (interval / endValue);
    let counter = setInterval(function(){
        beginValue += 1;
        displays.textContent = beginValue;
        if (beginValue == endValue){
            clearInterval(counter);
        }


    }, duration);
});