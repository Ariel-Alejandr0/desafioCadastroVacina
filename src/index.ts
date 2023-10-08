interface I_pessoa { //criando os atributos de cada pessoa
    cpf            : string,
    nome_pessoa    : string,
    data_nascimento: string,
    nome_vacina    : string,
    data_vacina    : string,
    data_reforco   : string
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

function formataData(data : Date) : string{
    const formato: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    }
    const formatoLocal : Intl.DateTimeFormat = new Intl.DateTimeFormat('pt-BR', formato)

    return formatoLocal.format(data)
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
        
        const pessoa : I_pessoa = {cpf: c_cpf, nome_pessoa: c_nome_pessoa, data_nascimento: formataData(c_data_nascimento), 
            nome_vacina: c_nome_vacina, data_vacina: formataData(c_data_vacina), data_reforco: formataData(c_data_reforco)}
        
        //adicionando pessoas no array
        array_pessoas.push(pessoa) 
        
        mostrarNaPagina(pessoa)
    }
    console.log(array_pessoas)

}


function mostrarNaPagina(pessoa : I_pessoa) : void{
    const pessoa_cadastrada : HTMLDivElement  = document.createElement("div")

    document.getElementById('dados_cadastrados')!.appendChild(pessoa_cadastrada)
    const n_cpf             = document.createTextNode("CPF: " + pessoa.cpf)
    const n_nome_pessoa     = document.createTextNode("NOME: " + pessoa.nome_pessoa)
    const n_data_nascimento = document.createTextNode("DATA DE NASCIMENTO: " + pessoa.data_nascimento)
    const n_nome_vacina     = document.createTextNode("VACINA: " + pessoa.nome_vacina)        
    const n_data_vacina     = document.createTextNode("DATA DE VACINAÇÃO: " + pessoa.data_vacina)
    const n_data_reforco    = document.createTextNode("DATA DE REFORCO: " + pessoa.data_reforco)
        
    const nodes : Text[] = [n_cpf, n_nome_pessoa, n_data_nascimento, n_nome_vacina, n_data_vacina, n_data_reforco]

        

    for(let n = 0; n < nodes.length; n++){
        const paragrafo : HTMLParagraphElement = document.createElement("p")
        paragrafo.appendChild(nodes[n])
        pessoa_cadastrada.appendChild(paragrafo) 
            
    }
    pessoa_cadastrada.appendChild(document.createElement("hr"))
    

}
const formulario : HTMLElement = document.getElementById("cadastro-form")!;
formulario.addEventListener("submit", function(evento) : void { //verifica se o cadastro foi enviado
    evento.preventDefault()
    salvarCadastro()
})
