interface I_pessoa { //criando os atributos de cada pessoa
    cpf            : string,
    nome_pessoa    : string,
    data_nascimento: Date,
    nome_vacina    : string,
    data_vacina    : Date,
    data_reforco   : Date
}
const array_pessoas : I_pessoa[] = [] //criando um Array de pessoas

function verificarData(data_marcada : Date | null) : boolean{
    let data_atual : Date =  new Date()

    if(<Date>data_marcada < data_atual || typeof(data_marcada) == null){
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
        const c_data_reforco = new Date((c_data_vacina.setDate(c_data_vacina.getDate() + 30)).toString())
        
        array_pessoas.push({cpf: c_cpf, nome_pessoa: c_nome_pessoa, data_nascimento: c_data_nascimento, 
            nome_vacina: c_nome_vacina, data_vacina: c_data_vacina, data_reforco: c_data_reforco})
    }
    console.log(array_pessoas)
    
}



const formulario : HTMLElement = document.getElementById("cadastro-form")!;
formulario.addEventListener("submit", function(evento) { //verifica se o cadastro foi enviado
    evento.preventDefault()
    salvarCadastro()
})
