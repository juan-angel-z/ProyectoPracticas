const toggleButton = document.getElementById('cambiar_tema');

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleButton.querySelector('button').textContent = 'Modo Claro';
}

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }

    toggleButton.querySelector('button').textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';

});