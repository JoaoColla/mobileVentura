const inputEmail = document.getElementById('compoEmail');
const inputSenha = document.getElementById('compoSenha');
const btn = document.getElementById('botao');;

btn.addEventListener('click', function(){
    if (inputEmail.value === 'joao552@gmail.com' && inputSenha.value === '123'){
        window.location.href = 'main.html';
    } else {
        alert('Email ou senha incorretos! Por favor tente novamente.')

        inputEmail.value = '';
        inputSenha.value = '';
    }
});
