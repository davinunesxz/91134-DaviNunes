//funcaopara validar o formulario
function validateForm(){
    //obtem os valores dos campos de input pelo id
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    //obtem o elemento para exibir mensagens de erro
    let errorMessage = document.getElementById('error-message'); 

    //limpa qualquer mensagem de erro anterior
    errorMessage.textContent = ''; 

    //verifica se o campo "nome" esta vazio
    if (name == '') {
        //exibe uma mensage, de erro e interrompe o envio do formulario
        errorMessage.textContent = 'por favor insira seu nome';
        return false; // retorna false para impedir o envio do formulario
    }

    //verifica se o campo 'email' esta vazio
    if (email == '') {
        //exibe uma mensage, de erro e interrompe o envio do formulario
        errorMessage.textContent = 'por favor insira seu email';
        return false; // retorna false para impedir o envio do formulario
    }

    //verifica se o campo 'senha' esta vazio
    if (password == '') {
        //exibe uma mensage, de erro e interrompe o envio do formulario
        errorMessage.textContent = 'por favor insira sua senha';
        return false; // retorna false para impedir o envio do formulario
    }

    //verifica se o campo 'confirma senha' corresponde a senha
    if (password !== confirmPassword) {
        //exibe uma mensage, de erro e interrompe o envio do formulario
        errorMessage.textContent = 'as senhas nao coincidem';
        return false; // retorna false para impedir o envio do formulario
    }

    //se todas as verificacoes forem bem sucessedidas, o formulario pode ser enviado
    return true; //permite o envio do formulario
}