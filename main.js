const cadastrar = document.querySelector('#cadastrar')
const servico = document.querySelector('.servico')
const fecharNovoServico = document.querySelectorAll('.close-icon')
/* const fecharNovoServico2 = document.querySelector('.cancelar') */

cadastrar.addEventListener('click', () => {
    servico.classList.toggle('ativar-servico')
})

fecharNovoServico.foreach(servico => {
    servico.addEventListener('click', () => {
        this.classList.toggle('ativar-servico')
    })
})

/* fecharNovoServico2.addEventListener('click', () => {
    servico.classList.toggle('ativar-servico')
}) */