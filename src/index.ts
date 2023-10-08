interface I_pessoa { //criando os atributos de cada pessoa
    cpf            : string | null,
    nome_pessoa    : string | null,
    data_nascimento: Date | null,
    nome_vacina    : string | null,
    data_vacina    : Date | null,
    data_reforco   : Date | null
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
    /*capturando as informações do formulário e fazendo um cast para converter a variável
    de HTMLElement para string ou null*/
    const c_cpf             = ((<HTMLInputElement>document.getElementById('cpf')).value).toString()
    const c_nome_pessoa     = ((<HTMLInputElement>document.getElementById('nome_pessoa')).value).toString()
    const c_data_nascimento = new Date((<HTMLInputElement>document.getElementById('data_nascimento')).value)
    const c_nome_vacina     = ((<HTMLInputElement>document.getElementById('nome_vacina')).value).toString()
    let   c_data_vacina     = new Date((<HTMLInputElement>document.getElementById('data_vacina')).value)
    



    if(verificarData(c_data_vacina) == true){
        let data_reforco = <Date>c_data_vacina
        let calc_dias : string = (data_reforco.setDate(data_reforco.getDate() + 30)).toString()
        data_reforco = new Date(calc_dias)
        

        array_pessoas.push({cpf: c_cpf, nome_pessoa: c_nome_pessoa, data_nascimento: c_data_nascimento, 
            nome_vacina: c_nome_vacina, data_vacina: c_data_vacina, data_reforco: data_reforco})
    }
    console.log(array_pessoas)
    
}



const formulario : HTMLElement = document.getElementById("cadastro-form")!;
formulario.addEventListener("submit", function(evento) { //verifica se o cadastro foi enviado
    evento.preventDefault()
    salvarCadastro()
})
