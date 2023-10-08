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
    /*capturando as informações do formulário e fazendo um cast para converter a para string ou Date*/
    const c_cpf = (document.getElementById('cpf').value).toString();
    const c_nome_pessoa = (document.getElementById('nome_pessoa').value).toString();
    const c_data_nascimento = new Date(document.getElementById('data_nascimento').value);
    const c_nome_vacina = (document.getElementById('nome_vacina').value).toString();
    const c_data_vacina = new Date(document.getElementById('data_vacina').value);
    if (verificarData(c_data_vacina) == true) {
        console.log(c_data_vacina);
        let c_data_reforco = new Date(c_data_vacina); //copiando a data de vacinação
        c_data_reforco.setDate(c_data_vacina.getDate() + 30); // adicionando 30 dias
        console.log(c_data_reforco);
        array_pessoas.push({ cpf: c_cpf, nome_pessoa: c_nome_pessoa, data_nascimento: c_data_nascimento,
            nome_vacina: c_nome_vacina, data_vacina: c_data_vacina, data_reforco: c_data_reforco });
    }
    console.log(array_pessoas);
}
const formulario = document.getElementById("cadastro-form");
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    salvarCadastro();
});
