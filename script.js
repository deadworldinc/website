let descriptions = document.getElementsByClassName("toggle");

var x = setInterval(function(){
    let releaseDate = Date.parse("Jan 12, 2024 00:00:00");
    let todayDate = new Date();
    let difference = releaseDate - todayDate;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(difference / (1000 * 60 * 60));
    let minutes = Math.floor(difference / (1000 * 60));
    let seconds = Math.floor(difference / 1000);

    let d = days;
    let h = hours - days * 24;
    let m = minutes - hours * 60;
    let s = seconds - minutes * 60;
    
    document.getElementById("numbersContainer").innerHTML =
        '<div>' + d + '</div>' +
        '<div>' + h + '</div>' +
        '<div>' + m + '</div>' +
        '<div>' + s + '</div>';

    if (difference <= 0){
        clearInterval(x);
        document.getElementById("numbersContainer").innerHTML = 
            `<div class="releaseOutNowMessage"><p>DEATH MARCH OUT NOW!</p></div>`;
    }
}, 1000);

window.onload = function(){
    function getRandomNumber(min, max) {
        return Math.round(min - 0.5 + Math.random() * (max - min + 1))
    }

    let randomDescription = getRandomNumber(0, 3);
    descriptions[randomDescription].classList.add('active');
}
