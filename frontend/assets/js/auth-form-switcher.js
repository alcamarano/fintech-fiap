// Alternar entre Entrar e Cadastrar
const secLogin = document.getElementById('secLogin');
const secRegister = document.getElementById('secRegister');
const btnLogin = document.getElementById('btnLogin');
const btnRegister = document.getElementById('btnRegister');

btnLogin.addEventListener('click', () => {
    secLogin.hidden = true;
    secRegister.hidden = false;
});

btnRegister.addEventListener('click', () => {
    secLogin.hidden = false;
    secRegister.hidden = true;
});