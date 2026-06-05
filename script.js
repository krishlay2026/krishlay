// Typing Effect
const words = [
    "Web Developer",
    "UI Designer",
    "JavaScript Developer",
    "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let currentChar = "";

const typing = document.querySelector(".typing");

function type() {

    if(wordIndex < words.length){

        currentWord = words[wordIndex];
        currentChar = currentWord.slice(0, ++charIndex);

        typing.textContent = currentChar;

        if(currentChar.length === currentWord.length){
            wordIndex++;
            charIndex = 0;

            if(wordIndex === words.length){
                wordIndex = 0;
            }
        }
    }

    setTimeout(type, 150);
}

type();


// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message Sent Successfully!");
    this.reset();
});


// Scroll Animation
const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition="0.6s";
});