// Script para o Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, /* Exibe apenas 1 slide de cada vez */
    spaceBetween: 0, /* Sem espaço entre os slides */
    loop: true, /* Loop infinito */
    autoplay: {
        delay: 3000, /* Tempo de transição de cada slide */
        disableOnInteraction: false, /* Não desabilita a transição ao interagir */
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Função para alternar o tema
const themeToggleButton = document.getElementById("theme-toggle");

// Verifica o tema atual no localStorage (caso exista)
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.body.classList.add(currentTheme);
    // Também aplica o tema nas seções
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        section.classList.add(currentTheme);
    });
}

themeToggleButton.addEventListener("click", () => {
    // Alterna entre os temas claro e escuro
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    // Aplica a mudança de tema também nas seções
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        section.classList.toggle("light-theme");
        section.classList.toggle("dark-theme");
    });

    // Salva a escolha do tema no localStorage
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark-theme");
    } else {
        localStorage.setItem("theme", "light-theme");
    }
});
