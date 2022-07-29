const cadastrar = document.querySelector('#cadastrar')
const servico = document.querySelector('.servico')
const fecharNovoServico = document.querySelectorAll('.close-icon')
const servicoContainer = document.querySelector('#servico')
const servicoForm = document.querySelector('.servico-form')
const servicoInput = document.querySelector('.servico-campo') /*TÁ INDO SÓ NO PRIMEIRO PORQUE TEM QUE USAR O QUERYSELECTORALL. AO USAR ISSO, NÓS TEREMOS COMO RETORNO UM ARRAY, DAÍ DEVEREMOS USAR O FOREACH! */
const salvarServico = document.querySelector('.salvar')
const conteudoContainer = document.querySelector('.conteudo')
const clientesTabela = document.querySelector('.clientes')
 
let dataServico = document.querySelector('#data')
let nomeCliente = document.querySelector('#nome')
let contatoCliente = document.querySelector('#contato')
let servicoFeito = document.querySelector('#servicoRealizado')
let valorTotal = document.querySelector('#valor')
let situacaoCliente = document.querySelector('#situacao')

//ATRIBUINDO O LOCALSTORAGE À UMA VARIÁVEL
let dadosLocalStorage = localStorage.getItem('infos')
//TRANSFORMA O LS EM ARRAY
dadosInformadosCliente = JSON.parse(dadosLocalStorage) || []
console.log(dadosInformadosCliente)

dadosInformadosCliente.forEach((element) => {
    imprimeServicoLocalStorage(element)
})

cadastrar.addEventListener('click', () => {
    servico.classList.toggle('ativar-servico')
}) 

salvarServico.addEventListener('click', () => {

    let infoClientes = {
        "data": dataServico.value,
        "nome": nomeCliente.value,
        "contato": contatoCliente.value,
        "servico": servicoFeito.value,
        "valor": valorTotal.value,
        "situacao": situacaoCliente.value
    }
    
    //VERIFICANDO SE O LOCALSTORAGE JÁ EXISTE
    if(dadosLocalStorage) {
        //ADICIONA AS INFORMAÇÕES DOS CLIENTES À ESSE ARRAY
        dadosInformadosCliente.push(infoClientes)
        //TRANSFORMA O ARRAY EM STRING
        dadosInformadosCliente = JSON.stringify(dadosInformadosCliente)
        //ENVIA OS NOVOS VALORES AO LOCALSTORAGE
        localStorage.setItem('infos', dadosInformadosCliente)
    } else {
        localStorage.setItem('infos', JSON.stringify([infoClientes]))
    }

    servico.classList.toggle('ativar-servico')    
    botaoEditarServico()
})

fecharNovoServico.forEach(servico => {
    servico.addEventListener('click', () => {
        servicoContainer.classList.toggle('ativar-servico')
    })
})

const validarInput = () => servicoInput.value.trim().length > 0

function imprimeServicoLocalStorage(servico) {
    //CRIANDO TABELA DINAMICA
    let informacoes = document.createElement('tbody')
    informacoes.classList.add('tabelaDiv')

    clientesTabela.appendChild(informacoes)

    //CONTEUDO DA TABELA
    let infoServico = document.createElement('tr')
    let dadosCliente_data = document.createElement('td')
    dadosCliente_data.innerText = servico.data
    let dadosClientes_nome = document.createElement('td')
    dadosClientes_nome.innerText = servico.nome
    let dadosClientes_contato = document.createElement('td')
    dadosClientes_contato.innerText = servico.contato
    let dadosClientes_servico = document.createElement('td')
    dadosClientes_servico.innerText = servico.servico
    let dadosClientes_valor = document.createElement('td')
    dadosClientes_valor.innerText = servico.valor
    let dadosClientes_situacao = document.createElement('td')
    dadosClientes_situacao.innerText = servico.situacao
    let dadosClientes_acao = document.createElement('td')
    

    infoServico.appendChild(dadosCliente_data)
    infoServico.appendChild(dadosClientes_nome)
    infoServico.appendChild(dadosClientes_contato)
    infoServico.appendChild(dadosClientes_servico)
    infoServico.appendChild(dadosClientes_valor)
    infoServico.appendChild(dadosClientes_situacao)
    informacoes.appendChild(infoServico)

    //BOTÕES DE EDITAR E EXCLUIR
    const editarServico = document.createElement('i')
    editarServico.classList.add('fa-solid')
    editarServico.classList.add('fa-check')
    const excluirServico = document.createElement('i')
    excluirServico.classList.add('fa-regular')
    excluirServico.classList.add('fa-trash-can')
    dadosClientes_acao.appendChild(editarServico)
    dadosClientes_acao.appendChild(excluirServico)
    infoServico.appendChild(dadosClientes_acao)

    editarServico.addEventListener('click', () => botaoEditarServico())

    excluirServico.addEventListener('click', () => {
        let excluir = excluirServico.parentNode.parentNode
        console.log(excluir)
        excluir.remove()
        
        localStorage.removeItem('infos') //TODO: ASSIM ESTOU EXCLUINDO TODO O ARRAY COM TODAS AS INFORMAÇÕES, E NÃO UMA EM ESPECÍFICO 
    })
}

const botaoEditarServico = (editarServico) => {
    servico.classList.toggle('ativar-servico')
    /*TODO: Desenvolver aqui uma lógica para a pág. servico abrir com os dados já preenchidos.  */

    /*TODO: Além disso, preciso desenvolver uma forma desse novo valor substituir a linha inteira e não criar uma nova*/
    
     
}

const adicionarServico = () => {
    const inputValido = validarInput()
    
    if(!inputValido) {
        return servicoInput.classList.add('erro')
    }

    //CRIANDO TABELA DINAMICA
    let informacoes = document.createElement('tbody')
    informacoes.classList.add('tabelaDiv')

    clientesTabela.appendChild(informacoes)

    //CONTEUDO DA TABELA
    let infoServico = document.createElement('tr')
    let dadosCliente_data = document.createElement('td')
    dadosCliente_data.innerText = dataServico.value
    let dadosClientes_nome = document.createElement('td')
    dadosClientes_nome.innerText = nomeCliente.value
    let dadosClientes_contato = document.createElement('td')
    dadosClientes_contato.innerText = contatoCliente.value
    let dadosClientes_servico = document.createElement('td')
    dadosClientes_servico.innerText = servicoFeito.value
    let dadosClientes_valor = document.createElement('td')
    dadosClientes_valor.innerText = valorTotal.value
    let dadosClientes_situacao = document.createElement('td')
    dadosClientes_situacao.innerText = situacaoCliente.value
    let dadosClientes_acao = document.createElement('td')
    

    infoServico.appendChild(dadosCliente_data)
    infoServico.appendChild(dadosClientes_nome)
    infoServico.appendChild(dadosClientes_contato)
    infoServico.appendChild(dadosClientes_servico)
    infoServico.appendChild(dadosClientes_valor)
    infoServico.appendChild(dadosClientes_situacao)
    informacoes.appendChild(infoServico)

    //BOTÕES DE EDITAR E EXCLUIR
    const editarServico = document.createElement('i')
    editarServico.classList.add('fa-solid')
    editarServico.classList.add('fa-check')
    const excluirServico = document.createElement('i')
    excluirServico.classList.add('fa-regular')
    excluirServico.classList.add('fa-trash-can')
    dadosClientes_acao.appendChild(editarServico)
    dadosClientes_acao.appendChild(excluirServico)
    infoServico.appendChild(dadosClientes_acao)

    dataServico.value = ''
    nomeCliente.value = ''
    contatoCliente.value = ''
    servicoFeito.value = ''
    valorTotal.value = ''

    botaoEditarServico()
}

const mudarEstadoInput = () => {
    const inputValido = validarInput()

    if(inputValido) {
        return servicoInput.classList.remove('erro')
    }
}

salvarServico.addEventListener('click', () => adicionarServico())
servicoInput.addEventListener('change', () => mudarEstadoInput())