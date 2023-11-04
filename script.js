var button = document.getElementById('read_button');

button.addEventListener('click', function() {
     var cardi = document.querySelector('.cardi');
     cardi.classList.toggle('active');

     if (cardi.classList.contains('active')) {
        return button.textContent = 'Ver menos';
     }

     button.textContent = 'Continuar lendo';
});