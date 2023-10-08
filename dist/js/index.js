"use strict";
const array_pessoas = []; //criando um Array de pessoas
function verificarData(data_marcada) {
    let data_atual = new Date();
    if (data_marcada < data_atual || typeof (data_marcada) == null) {
        alert("Selecione uma data válida");
        return false;
    }
    return true;
}
function salvarCadastro() {
    /*capturando as informações do formulário e fazendo um cast para converter a variável
    de HTMLElement para string ou null*/
    const c_cpf = (document.getElementById('cpf').value).toString();
    const c_nome_pessoa = (document.getElementById('nome_pessoa').value).toString();
    const c_data_nascimento = new Date(document.getElementById('data_nascimento').value);
    const c_nome_vacina = (document.getElementById('nome_vacina').value).toString();
    let c_data_vacina = new Date(document.getElementById('data_vacina').value);
    if (verificarData(c_data_vacina) == true) {
        let data_reforco = c_data_vacina;
        let calc_dias = (data_reforco.setDate(data_reforco.getDate() + 30)).toString();
        data_reforco = new Date(calc_dias);
        array_pessoas.push({ cpf: c_cpf, nome_pessoa: c_nome_pessoa, data_nascimento: c_data_nascimento,
            nome_vacina: c_nome_vacina, data_vacina: c_data_vacina, data_reforco: data_reforco });
    }
    console.log(array_pessoas);
}
const formulario = document.getElementById("cadastro-form");
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    salvarCadastro();
});
