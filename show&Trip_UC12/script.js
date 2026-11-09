/*CADASTRO*/

const botoesSenha = document.querySelectorAll(".eye-button");

botoesSenha.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const campo = document.getElementById(botao.dataset.target);

        if (campo.type === "password") {
            campo.type = "text";
        } else {
            campo.type = "password";
        }
    });
});

const tipos = document.querySelectorAll(".type-option");

tipos.forEach(function(tipo) {
    tipo.addEventListener("click", function() {
        tipos.forEach(function(item) {
            item.classList.remove("selected");
        });

        tipo.classList.add("selected");
    });
});

const formulario = document.getElementById("registerForm");
const feedback = document.getElementById("feedback");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (senha !== confirmarSenha) {
        feedback.textContent = "As senhas não coincidem.";
        return;
    }

    feedback.textContent = "Cadastro validado! Conecte o formulário ao seu backend.";
});

