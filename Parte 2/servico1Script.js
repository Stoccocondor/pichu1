    const toggleButton = document.getElementById('theme-toggle');
        const body = document.body;

        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
            toggleButton.textContent = '☀️';
        }

        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                toggleButton.textContent = '☀️';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                toggleButton.textContent = '🌙';
            }
        });