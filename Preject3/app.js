const text = document.querySelectorAll(".thePaths");

for (let i=0; i<text.length; i++){
    console.log(`text number ${i} is ${text[i].getTotalLength()}`)
}

const lastWord = document.querySelector("#w11");
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend", () => {
    animation.style = "transition: all 0.5s ease; opacity: 0; pointer-events: none;";
})
