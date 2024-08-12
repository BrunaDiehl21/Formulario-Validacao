const nomeUser = document.getElementById('nome');
const emailUser = document.getElementById('email')
const telefoneUser = document.getElementById('telefone');
const mensagemUser = document.getElementById('mensagem');
const botaoEnviar = document.getElementById('btn');
const spanDeNome = document.getElementById('nomeSpan');
const spanDeEmail = document.getElementById('emailSpan');
const spanDeTelefone = document.getElementById('telefoneSpan');
const spanDeMensagem = document.getElementById('mensagemSpan');

function verificarInputs() {
    if (nomeUser.value.trim() === "") {
        nomeUser.classList.remove("corCampoCheio");
        nomeUser.classList.add("corCampoVazio");
        spanDeNome.style="visibility: visible";
    } else {
        nomeUser.classList.add("corCampoCheio");
        nomeUser.classList.remove("corCampoVazio");
        spanDeNome.style="visibility: hidden";
    }

    if (emailUser.value.trim() === "") {
        emailUser.classList.remove("corCampoCheio");
        emailUser.classList.add("corCampoVazio");
        spanDeEmail.style="visibility: visible";
    } else {
        emailUser.classList.add("corCampoCheio");
        emailUser.classList.remove("corCampoVazio");
        spanDeEmail.style="visibility: hidden";
    }

    if (telefoneUser.value.trim() === "") {
        telefoneUser.classList.remove("corCampoCheio");
        telefoneUser.classList.add("corCampoVazio");
        spanDeTelefone.style="visibility: visible";
    } else {
        telefoneUser.classList.add("corCampoCheio");
        telefoneUser.classList.remove("corCampoVazio");
        spanDeTelefone.style="visibility: hidden";
    }

    if (mensagemUser.value.trim() === "") {
        mensagemUser.classList.remove("corCampoCheio");
        mensagemUser.classList.add("corCampoVazio");
        spanDeMensagem.style="visibility: visible";
    } else {
        mensagemUser.classList.add("corCampoCheio");
        mensagemUser.classList.remove("corCampoVazio");
        spanDeMensagem.style="visibility: hidden";
    }
}

botaoEnviar.addEventListener('click', verificarInputs);

form.addEventListener('submit', e => {
    e.preventDefault();
});