document.addEventListener("DOMContentLoaded", function() {
    const botaoDark = document.createElement("button");
    botaoDark.textContent = "Alternar Modo Escuro";
    botaoDark.style.position = "fixed";
    botaoDark.style.top = "10px";
    botaoDark.style.right = "10px";
    botaoDark.style.padding = "10px 15px";
    botaoDark.style.backgroundColor = "#0073e6";
    botaoDark.style.color = "white";
    botaoDark.style.border = "none";
    botaoDark.style.borderRadius = "5px";
    botaoDark.style.cursor = "pointer";
    botaoDark.style.zIndex = "1000";

    botaoDark.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    document.body.prepend(botaoDark);
});