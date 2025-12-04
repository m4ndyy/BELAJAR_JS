const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const color = getComputedStyle(btn).background;
        document.body.style.background = color;
    });
});
