const sonic = document.querySelector(".sonic");
const eggman = document.querySelector(".eggman");

const jump = () => {
    sonic.classList.add("jump");
    sonic.src = "./arquivos/Sonic-Jump.gif"

    setTimeout(() => {
        sonic.classList.remove("jump");
        sonic.src = "./arquivos/Sonic.gif"
    }, 900);
}

const loop = setInterval(() => {
   const eggmanPosition = eggman.offsetLeft;
   const sonicPosition = +window
   .getComputedStyle(sonic)
   .bottom.replace("px", "");

   if (eggmanPosition < 110 && eggmanPosition > 0 && sonicPosition < 200) {
    eggman.style.animation = "none";
    eggman.style.left = `${eggmanPosition}px`;

    sonic.style.animation = "none";
    sonic.src = "./arquivos/Sonic-Loss.gif";
   }
},10)

document.addEventListener("click", jump);