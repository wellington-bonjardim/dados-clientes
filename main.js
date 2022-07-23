const cadastrar = document.querySelector('#cadastrar')
const servico = document.querySelector('.servico')
const fecharNovoServico = document.querySelectorAll('.close-icon')
const servicoContainer = document.querySelector('#servico')
const servicoForm = document.querySelector('.servico-form')
const servicoInput = document.querySelector('.servico-campo') /*TÁ INDO SÓ NO PRIMEIRO PORQUE TEM QUE USAR O QUERYSELECTORALL. AO USAR ISSO, NÓS TEREMOS COMO RETORNO UM ARRAY, DAÍ DEVEREMOS USAR O FOREACH! */
const salvarServico = document.querySelector('.salvar')
const conteudoContainer = document.querySelector('.conteudo')
//const clientesTabela = document.querySelector('.clientes')
 
let dataServico = document.querySelector('#data')
let nomeCliente = document.querySelector('#nome')
let contatoCliente = document.querySelector('#contato')
let servicoFeito = document.querySelector('#servicoRealizado')
let valorTotal = document.querySelector('#valor')
let situacaoCliente = document.querySelector('#situacao')

cadastrar.addEventListener('click', () => {
    servico.classList.toggle('ativar-servico')
})

salvarServico.addEventListener('click', () => {
    servico.classList.toggle('ativar-servico')
})

fecharNovoServico.forEach(servico => {
    servico.addEventListener('click', () => {
        servicoContainer.classList.toggle('ativar-servico')
    })
})

const validarInput = () => servicoInput.value.trim().length > 0

const adicionarServico = () => {
    const inputValido = validarInput()
    
    if(!inputValido) {
        return servicoInput.classList.add('erro')
    }

    //CRIANDO TABELA DINAMICA
    let tabelaDiv = document.createElement('div')
    tabelaDiv.classList.add('tabelaDiv')
    let tabela = document.createElement('table')
    let cabecalho = document.createElement('thead')
    let informacoes = document.createElement('tbody')

    tabelaDiv.appendChild(tabela)
    tabela.appendChild(cabecalho)
    tabela.appendChild(informacoes)

    conteudoContainer.appendChild(tabelaDiv)

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
    infoServico.appendChild(editarServico)
    infoServico.appendChild(excluirServico)

    dataServico.value = ''
    nomeCliente.value = ''
    contatoCliente.value = ''
    servicoFeito.value = ''
    valorTotal.value = ''
}

const mudarEstadoInput = () => {
    const inputValido = validarInput()

    if(inputValido) {
        return servicoInput.classList.remove('erro')
    }
}

/* servicoInput.forEach(salvarServico => {
    salvarServico.addEventListener('click', () => {
        const inputValido = validaInput()
    
        if(!inputValido) {
            return servicoInput.classList.add('erro')
        }
    })
}) */

salvarServico.addEventListener('click', () => adicionarServico())
servicoInput.addEventListener('change', () => mudarEstadoInput())