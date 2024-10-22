var countDown = new Date("October 30,2024 00:00:00");

var x =setInterval(function (){
    var now = new Date();
    var distance = countDown - now;
    var days =Math.floor(distance/(1000*60*60*24));
    var hours =Math.floor((distance % (1000*60*60*24)) /(1000*60*60));
    var minutes =Math.floor((distance % (1000*60*60)) /(1000*60));
    var seconds =Math.floor((distance % (1000*60)) /(1000));

     document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
    
},1000)

