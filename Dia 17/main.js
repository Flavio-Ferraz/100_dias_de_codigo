let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

// Incluindo letras maiúsculas, minúsculas, números e símbolos
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
let novaSenha = "";

// Atualiza o valor do span ao carregar a página
sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function gerarSenha() {
    let senha = "";
    for (let i = 0; i < sliderElement.value; i++) {
        senha += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = senha;
}

function copiarSenha(){
    alert("Senha copiada com sucesso!");
    navigator.copboard.writeText(senha);
}