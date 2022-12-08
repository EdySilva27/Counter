// contador inicial
let count = 0;

// selecinar valores e botões
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const style = e.currentTarget.classList //identifica qual botão foi clicado e qual o conteudo do botão pelo nome da classe

        if (style.contains('decrease')) {
            count--
            value.style.color = 'red'
        } else if (style.contains('increase')) {
            count++
            value.style.color = 'green'
        } else {
            count = 0
            value.style.color = 'rgb(55, 55, 62)'
        }

        value.textContent = count
    }) 
});