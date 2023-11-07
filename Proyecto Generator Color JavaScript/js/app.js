//Variables
const btn = document.querySelector('.button')
const color = document.querySelector('.window__color')

//Nuestra funcion que Generara el color Hexadecimal
function colorChange(){

    //Varaibles Locales
    const codeColor = '0123456789ABCDEF' //todos los caracteres del colores hexadecimal
    let colorHex = '#' //Donde se almacenaran los caracteres aleatorios

    for(let i = 0; i < 6; i++){ //Recorrido para los 6 digitos hexadecimales
        let item = Math.floor(Math.random() * 16) //Generara caracteres minimo 16 veces
        colorHex += codeColor[item] //Alamacenara los caracteres alaeatorios de codeColor y los almacenara el colorHex
    }

    return colorHex //Esta funcion retornara lo que almacena esa varaible
}

//Cuando le demos click al boton ejecutara este evento
btn.addEventListener('click', () => {
    
    //Creamos una varaible local la cual almacenara la funcion
    let nuevoColor = colorChange() 

    //Cambiamos el contenido del texto al codigo generado de nuestra funcion
    color.textContent = nuevoColor

    //Cambiaremos el color del body con el color generedao de nuestra funcion
    document.body.style.backgroundColor = nuevoColor
})