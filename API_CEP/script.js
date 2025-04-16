// função que será chamada ao clicar no botão
function consultarCep() {
    // obtém o valor do campo CEP
    const cep = document.getElementById('cep').value;

    // verifica se o cep tem 8 dígitos
    if (cep.length !== 8) {
        alert("Por favor, insira um CEP válido de 8 dígitos.");
        return; // interrompe a execução da função se o cep for inválido
    }

    // URL da API de CEP (usando o serviço ViaCEP como exemplo)
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    // faz uma requisição de API para obter os dados do cep
    fetch(url)
        .then(response => response.json()) // converte a resposta em JSON
        .then(data => {
            // verifica se o cep foi encontrado
            if (data.erro) {
                alert("CEP não encontrado.");
                return;
            }

            // atualiza os campos no formulário com os dados retornados pela API
            document.getElementById('rua').textContent = data.logradouro;
            document.getElementById('bairro').textContent = data.bairro;
            document.getElementById('cidade').textContent = data.localidade;
            document.getElementById('estado').textContent = data.uf;
        })
        .catch(error => {
            console.error("Erro ao consultar o CEP", error);
            alert("Ocorreu um erro ao consultar o CEP.");
        });
}
