/* =========================
   VARIABLES PRINCIPALES
========================= */

const envelope = document.getElementById("envelope");
const letterText = document.getElementById("typewriter");
const openButton = document.getElementById("openLetter");

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let playing = false;
let musicStarted = false;


/* =========================
   ABRIR SOBRE
========================= */

envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

    if(letterText.innerHTML === ""){
        startTyping();
    }

    // iniciar música
    if(!playing){
        music.play();
        musicButton.innerHTML="❚❚";
        playing=true;
    }

    createHeartBurst();

});


/* =========================
   BOTÓN HERO
========================= */

openButton.addEventListener("click",()=>{

    document
    .getElementById("letterSection")
    .scrollIntoView({
        behavior:"smooth"
    });

    if(!playing){
        music.play();
        musicButton.innerHTML="❚❚";
        playing=true;
    }

});


/* =========================
   EFECTO MÁQUINA DE ESCRIBIR
========================= */

const text = `

Feliz cumpleaños, mi amor ❤️

Hoy quería regalarte algo diferente.

No solamente un regalo,
sino un pequeño pedacito de todo
lo que siento por vos.

Cada detalle de esta página fue hecho
pensando en vos.

Gracias por llegar a mi vida,
por cada sonrisa, especialmente las que me sacas vos, por estar en mis dias buenos y malos,
por cada momento compartido
y por hacer mis días más felices.

Espero seguir creando recuerdos,
celebrando tus logros
y acompañándote en cada etapa.

Nunca olvides lo especial que sos.

Te amo muchísimo mi amor bello ❤️‍🩹
`;

let index = 0;

function startTyping(){

    if(index < text.length){

        letterText.innerHTML += text.charAt(index);

        index++;

        setTimeout(startTyping, 35);

    }

}


/* =========================
   CONTADOR RELACIÓN
========================= */

const relationshipDate = new Date("2025-05-20T00:00:00");
const counter = document.getElementById("timeTogether");

function updateCounter(){

    const now = new Date();
    const diff = now - relationshipDate;

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor(diff / (1000*60*60)) % 24;
    const minutes = Math.floor(diff / (1000*60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    counter.innerHTML = `

    <div class="time-box">
        <span>${days}</span>
        <small>días</small>
    </div>

    <div class="time-box">
        <span>${hours}</span>
        <small>hs</small>
    </div>

    <div class="time-box">
        <span>${minutes}</span>
        <small>min</small>
    </div>

    <div class="time-box">
        <span>${seconds}</span>
        <small>seg</small>
    </div>

    `;

}

setInterval(updateCounter, 1000);
updateCounter();


/* =========================
   MÚSICA
========================= */

music.volume = 0.6;

musicButton.addEventListener("click",()=>{

    if(!playing){

        music.play();
        musicButton.innerHTML="❚❚";
        playing=true;

    }else{

        music.pause();
        musicButton.innerHTML="♫";
        playing=false;

    }

});

// autoplay en primer click de la página
function startMusicOnce(){

    if(!musicStarted){

        music.play().catch(()=>{});

        musicButton.innerHTML="❚❚";
        playing = true;
        musicStarted = true;

    }

}

document.addEventListener("click", startMusicOnce);


/* =========================
   CORAZONES FLOTANTES
========================= */

const heartsContainer = document.querySelector(".hearts-container");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML="❤️";

    heart.style.left = Math.random()*100 + "%";
    heart.style.fontSize = (Math.random()*20+15)+"px";
    heart.style.animationDuration = (Math.random()*5+5)+"s";

    heartsContainer.appendChild(heart);

    setTimeout(()=> heart.remove(), 10000);

}

setInterval(createHeart, 800);


/* =========================
   EXPLOSIÓN DE CORAZONES
========================= */

function createHeartBurst(){

    for(let i = 0; i < 15; i++){

        setTimeout(()=>{

            const heart = document.createElement("div");

            heart.classList.add("heart");
            heart.innerHTML = "❤️";

            heart.style.left = (50 + (Math.random()*40-20)) + "%";
            heart.style.top = (50 + (Math.random()*40-20)) + "%";

            heart.style.position = "absolute";
            heart.style.transform = "translate(-50%, -50%)";

            heart.style.fontSize = (Math.random()*25+15)+"px";
            heart.style.animationDuration = (Math.random()*2+2)+"s";

            heartsContainer.appendChild(heart);

            setTimeout(()=> heart.remove(), 3000);

        }, i * 80);

    }

}


/* =========================
   ANIMACIONES SCROLL
========================= */

const reveals = document.querySelectorAll(".reveal");
const finalSection = document.querySelector(".final-letter");

function revealOnScroll(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            section.classList.add("active");
        }

    });

    if(finalSection.getBoundingClientRect().top < window.innerHeight - 100){
        finalSection.classList.add("active");
    }

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* =========================
   EFECTO DE ENTRADA
========================= */

window.addEventListener("load", ()=>{

    setTimeout(()=>{

        document
        .querySelector(".hero")
        .classList.add("active");

    },300);

});


/* =========================
   GALERÍA MODAL
========================= */

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

const photos = document.querySelectorAll(".photo img");

photos.forEach(img => {

    img.addEventListener("click", () => {

        modal.classList.add("active");
        modalImg.src = img.src;

    });

});

modal.addEventListener("click", () => {

    modal.classList.remove("active");

});