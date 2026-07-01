// =======================
// Typing Effect
// =======================

const text = "Happy Birthday Nidhi ❤️";

let i = 0;

function typing() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 120);

    }

}

typing();


// =======================
// Countdown
// =======================

const birthday = new Date("July 7, 2026 00:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

},1000);


// =======================
// Music
// =======================

const music=document.getElementById("music");

const btn=document.getElementById("musicBtn");

let playing=false;

btn.onclick=()=>{

if(playing){

music.pause();

btn.innerHTML="🎵";

}

else{

music.play();

btn.innerHTML="⏸️";

}

playing=!playing;

}


// =======================
// Start Button
// =======================

document.getElementById("startBtn").onclick=()=>{

music.play();

playing=true;

btn.innerHTML="⏸️";

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

}
