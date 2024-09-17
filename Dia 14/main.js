// Seleciona o botão e o corpo da página
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Função para alternar o tema
toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-theme');

  // Verifica o tema atual e atualiza o texto do botão
    if (body.classList.contains('dark-theme')) {
    toggleButton.textContent = 'Mude para Tema Claro';
    } else {
    toggleButton.textContent = 'Mude para Tema Escuro';
    }
});
