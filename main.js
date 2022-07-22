const cadastrar = document.querySelector('#cadastrar')
const servico = document.querySelector('.servico')
const fecharNovoServico = document.querySelectorAll('.close-icon')
const servicoContainer = document.querySelector('#servico')
const servicoForm = document.querySelector('.servico-form')
const servicoInput = document.querySelector('.servico-campo') /*TÁ INDO SÓ NO PRIMEIRO PORQUE TEM QUE USAR O QUERYSELECTORALL. AO USAR ISSO, NÓS TEREMOS COMO RETORNO UM ARRAY, DAÍ DEVEREMOS USAR O FOREACH! */
const salvarServico = document.querySelector('.salvar')
const conteudoContainer = document.querySelector('.conteudo')

let dataServico = document.querySelector('#data')
let nomeCliente = document.querySelector('#nome')
let contatoCliente = document.querySelector('#contato')
let servicoFeito = document.querySelector('#servicoRealizado')
let valorTotal = document.querySelector('#valor')
let situacaoCliente = document.querySelector('#situacao')

cadastrar.addEventListener('click', () => {
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
    let tabela = document.createElement('table')
    let cabecalho = document.createElement('thead')
    let conteudo = document.createElement('tbody')

    tabela.appendChild(cabecalho)
    tabela.appendChild(conteudo)

    conteudoContainer.appendChild(tabela)

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
    infoServico.appendChild(dadosClientes_servico)
    infoServico.appendChild(dadosClientes_valor)
    infoServico.appendChild(dadosClientes_contato)
    infoServico.appendChild(dadosClientes_situacao)
    conteudo.appendChild(infoServico)

    //BOTÕES DE EDITAR E EXCLUIR
    const editarServico = document.createElement('i')
    editarServico.classList.add('fa-solid')
    editarServico.classList.add('fa-floppy-disk')
    const excluirServico = document.createElement('i')
    excluirServico.classList.add('fa-solid')
    excluirServico.classList.add('fa-xmark')
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