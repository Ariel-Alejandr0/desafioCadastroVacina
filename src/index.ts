interface I_pessoa { //criando os atributos de cada pessoa
    cpf            : string,
    nome_pessoa    : string,
    data_nascimento: Date,
    nome_vacina    : string,
    data_vacina    : Date,
    data_reforco   : Date
}
const array_pessoas : I_pessoa[] = [] //criando um Array de pessoas

function verificarData(data_marcada : Date) : boolean{
    const data_atual : Date =  new Date()

    if(data_marcada < data_atual){
        alert("Selecione uma data válida")
        return false
    }
    return true
}

function salvarCadastro() : void{
    /*capturando as informações do formulário e fazendo um cast para converter a para string ou Date*/
    const c_cpf             = ((<HTMLInputElement>document.getElementById('cpf')).value).toString()
    const c_nome_pessoa     = ((<HTMLInputElement>document.getElementById('nome_pessoa')).value).toString()
    const c_data_nascimento = new Date((<HTMLInputElement>document.getElementById('data_nascimento')).value)
    const c_nome_vacina     = ((<HTMLInputElement>document.getElementById('nome_vacina')).value).toString()
    const c_data_vacina     = new Date((<HTMLInputElement>document.getElementById('data_vacina')).value)
    



    if(verificarData(c_data_vacina) == true){
        c_data_nascimento.setDate(c_data_nascimento.getDate() + 1) // ajustando bug de fuzo-horário
        let c_data_reforco : Date  = new Date(c_data_vacina) //copiando a data de vacinação
        c_data_reforco.setDate(c_data_vacina.getDate() + 30) // adicionando 30 dias
        
        
        array_pessoas.push({cpf: c_cpf, nome_pessoa: c_nome_pessoa, data_nascimento: c_data_nascimento, 
            nome_vacina: c_nome_vacina, data_vacina: c_data_vacina, data_reforco: c_data_reforco})
    }
    console.log(array_pessoas)
}

function mostrarNaPagina() : void{
    const pessoa_cadastrada = document.createElement("div")
    for (let index = 0; index < array_pessoas.length; index++) {
        const pessoa  = array_pessoas[index];
        const c_cpf             = document.createTextNode("CPF: " + pessoa.cpf)
        const c_nome_pessoa     = document.createTextNode("NOME: " + pessoa.nome_pessoa)
        const c_data_nascimento = document.createTextNode("DATA DE NASCIMENTO: " + pessoa.data_nascimento)
        const c_nome_vacina     = document.createTextNode("VACINA: " + pessoa.nome_vacina)
        const c_data_vacina     = document.createTextNode("DATA DE VACINAÇÃO: " + pessoa.data_vacina)
        const c_data_reforco    = document.createTextNode("DATA DE REFORCO: " + pessoa.data_reforco)
        
        const nodes : Text[] = [c_cpf, c_nome_pessoa, c_data_nascimento, c_nome_vacina, c_data_vacina, c_data_reforco]

        for(let n = 0; n < nodes.length; n++){
            document.getElementById("dados_cadastrados")?.appendChild(nodes[n]) 
        }
    }
    
}


const formulario : HTMLElement = document.getElementById("cadastro-form")!;
formulario.addEventListener("submit", function(evento) : void { //verifica se o cadastro foi enviado
    evento.preventDefault()
    salvarCadastro()
    mostrarNaPagina()
})
