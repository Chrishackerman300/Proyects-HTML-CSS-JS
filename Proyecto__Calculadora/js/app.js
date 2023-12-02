document.addEventListener('DOMContentLoaded', () => {

    //Variables
    const buttons = document.querySelectorAll('button')
    const display = document.querySelector('#display')
    const caracteres = ['%', '/', '*', '-', '+', '=',]
    let salida = ''

    //Recorrer los botones
    buttons.forEach(button => {

        //Cuando a nuestro parametro le demos clic en un boton nos mostrara el data valor que tien
        button.addEventListener('click', e => calculator(e.target.dataset.value))
    })

    const calculator = (btn) => {

        //Si el btn tiene el valor de AC limpiamos la pantalla
        if(btn === 'AC'){
            salida = ''
        }
        //Si el btn tiene el valor de DEL le quitamos primer 
        else if(btn === 'DEL'){
            salida = salida.toString().slice(0, -1)
        }
        else{
            //Si contiene uno de los caracteres de nuestra variable retorna el if
            if(salida === '' && caracteres.includes(btn)) return

            //Se mostrara los valores que tengamos en nuestro parametro btn en nuestra variable salida
            salida+= btn
        }

        //Si btn es igual a = nuestra salida evaluara la operacion que tenga nuestro display.value
        if(btn === '='){
            salida = eval(display.value)
        }

        //Mostrara los valores en el display que tenga la variable salida
        display.value = salida
    }
})