// --- Modo Escuro --- ///
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById('theme-toggle');
  const scrollToTopBtn = document.getElementById("scroll-to-top");
  const form = document.getElementById("form-contato");
  const popup = document.getElementById("popup");
  const fecharPopup = document.getElementById("fechar-popup");
  const body = document.body;
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '🌙';
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    toggleButton.textContent = theme === 'dark' ? '☀️' : '🌙';
  });


  // --- Scroll para o Topo --- ///
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  scrollToTopBtn.addEventListener("click", function () {
    scrollToTopSmoothly();
  });

  function scrollToTopSmoothly() {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollToTopSmoothly);
      window.scrollTo(0, currentScroll - currentScroll / 10);
    }
  }

  // --- Formulário e Popup (Menu) --- ///
  if (form && popup && fecharPopup) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      popup.classList.remove("hidden");
      form.reset();
    });

    fecharPopup.addEventListener("click", function () {
      popup.classList.add("hidden");
    });
  }
});
