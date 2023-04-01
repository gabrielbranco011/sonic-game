const sonic = document.querySelector(".sonic");

const jump = () => {
    sonic.classList.add("jump");
    sonic.src = "./arquivos/Sonic-Jump.gif"

    setTimeout(() => {
        sonic.classList.remove("jump");
        sonic.src = "./arquivos/Sonic.gif"
    }, 900);
}

document.addEventListener("click", jump);