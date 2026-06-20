/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

        document.getElementById("main-content").style.display = "block";

    },2500);

});

/* =========================
   GOLDEN HEARTS
========================= */

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["💛","💖","❤️","💙","💜"];

    heart.innerHTML =
        hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.fontSize =
        Math.random()*20 + 15 + "px";

    heart.style.animationDuration =
        Math.random()*4 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);
}

setInterval(createHeart,400);


/* =========================
   GOLDEN PARTICLES
========================= */

function createParticle(){

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.innerHTML = "✨";

    particle.style.left =
        Math.random()*100 + "vw";

    particle.style.fontSize =
        Math.random()*12 + 12 + "px";

    particle.style.animationDuration =
        Math.random()*4 + 5 + "s";

    document.body.appendChild(particle);

    setTimeout(()=>{
        particle.remove();
    },9000);
}

setInterval(createParticle,500);


/* =========================
   TYPEWRITER
========================= */

function startTypewriter(){

    const target =
        document.getElementById("typing");

    if(!target) return;

    const text =
`Dear Papa,

You are the strongest pillar of our family and the greatest blessing in my life.

Thank you for every sacrifice you made, every dream you supported, every lesson you taught and every smile you brought into our lives.

I may not always express it, but I admire your hard work, your kindness and your endless love.

No matter how old I become, I will always be your little girl.

Happy Father's Day Papa.

Love,
Nishtha ❤️`;

    let i = 0;

    target.innerHTML = "";

    function type(){

        if(i < text.length){

            target.innerHTML += text.charAt(i);

            i++;

            setTimeout(type,40);
        }
    }

    type();
}

window.addEventListener("load",startTypewriter);


/* =========================
   MEMORIES SLIDESHOW
========================= */
function startSlideshow(){

    const slide =
        document.getElementById("slideshow");

    if(!slide) return;

const images = [
    "m1.jpeg",
    "m2.jpeg",
    "m3.jpeg",
    "m4.jpeg",
    "m5.jpeg",
    "m6.jpeg",
    "m7.jpeg",
    "m8.jpeg",
    "m9.jpeg",
    "m10.jpeg",
    "m11.jpeg",
    "m12.jpeg",
    "m13.jpeg",
    "m14.jpeg",
    "m15.jpeg",
    "m16.jpeg",
    "m17.jpeg"
];

    let current = 0;

    setInterval(()=>{

        current++;

        if(current >= images.length){
            current = 0;
        }

        slide.src = images[current];

    },3000);
}

window.addEventListener("load",startSlideshow);


/* =========================
   TIMELINE COUNTER
========================= */

function yearsTogether(){

    const counter =
        document.getElementById("yearCounter");

    if(!counter) return;

    const birthYear = 2005;

    const currentYear =
        new Date().getFullYear();

    const years =
        currentYear - birthYear;

    counter.innerHTML =
        years + " Beautiful Years Together ❤️";
}

window.addEventListener("load",yearsTogether);


/* =========================
   CONFETTI
========================= */

function launchConfetti(){

    if(typeof confetti === "undefined")
        return;

    confetti({
        particleCount:250,
        spread:180,
        origin:{y:0.6}
    });
}

window.addEventListener("load",launchConfetti);


/* =========================
   CURSOR TRAIL
========================= */

document.addEventListener("mousemove",(e)=>{

    const star =
        document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";
    star.style.left = e.clientX + "px";
    star.style.top = e.clientY + "px";
    star.style.pointerEvents = "none";
    star.style.fontSize = "12px";
    star.style.zIndex = "999";

    document.body.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },500);
});


/* =========================
   FINAL SURPRISE
========================= */

function showFinalLove(){

    alert(
`❤️ Dear Papa ❤️

Thank you for every sacrifice,
every lesson,
every smile,
and every moment.

You are not only my father,
you are my first hero,
my strongest support,
and my greatest inspiration.

Whatever I achieve in life,
a part of that success will always belong to you.

Happy Father's Day Papa.

Love Always,
Nishtha ❤️`
    );
}


/* =========================
   BACKGROUND MUSIC
========================= */

function playMusic(){

    const music =
        document.getElementById("bgMusic");

    if(music){

        music.play()
        .catch(err=>console.log(err));
    }
}
