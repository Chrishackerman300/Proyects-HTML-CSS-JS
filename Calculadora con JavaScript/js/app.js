document.addEventListener('DOMContentLoaded', () => {

    //Variables
    const buttons = document.querySelectorAll('button')
    const display = document.querySelector('#display')
    const btnDark = document.querySelector('#checkbox')
    const body = document.querySelector('body')
    const operadores = ["/", "*", "-", "*", "="]
    let salida = ""

    caargarEventos()

    function caargarEventos(){
        buttons.forEach(button => {
            button.addEventListener('click', calculadora)
        })

        btnDark.addEventListener('click', showDarkmode)
    }

    function calculadora(e){
        const btn = e.target.dataset.value

        if(btn === 'AC'){
            salida = ""
        }
        else if(btn === 'DEL'){
            salida = salida.toString().slice(0, -1)
        }
        else{
            if(salida === "" && operadores.includes(btn)) return

            salida += btn
        }

        if(btn === '='){
            salida = eval(display.value)
        }

        display.value = salida
    }

    function showDarkmode(){
        if(body.classList.contains('show-darkmode')){
            body.classList.remove('show-darkmode')
        }
        else{
            body.classList.add('show-darkmode')
        }
    }
})