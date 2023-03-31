const sonic = document.querySelector(".sonic");

const jump = () => {
    sonic.classList.add("jump");
    setTimeout(() => {
        sonic.classList.remove("jump");
    }, 900)
}

document.addEventListener("click", jump);