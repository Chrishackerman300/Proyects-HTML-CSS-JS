//Varaibles
const menuBtn = document.querySelector('.open-menu')
const sidebarMenu = document.querySelector('#navegation')
const onFooter = document.querySelector('#footer')
const footerBtn = document.querySelector('.show-footer')
const darkBtn = document.querySelector('.dark-button')
const body = document.querySelector('body')

//Función todos los Eventos
cargarEvents()

function cargarEvents(){

    menuBtn.addEventListener('click', showMenu)

    footerBtn.addEventListener('click', showFooter)

    darkBtn.addEventListener('click', darkMode)
}

//Funciones

//Sidebar Menu
function showMenu(){
    if(sidebarMenu.classList.contains('active')){
        //Si contiene la clase active eliminara esta clase
        sidebarMenu.classList.remove('active')
    }
    else{
        //Sino tiene la clase active la agregara
        sidebarMenu.classList.add('active')
    }
}

//Mostrar Footer
function showFooter(){
    if(onFooter.classList.contains('show')){
        onFooter.classList.remove('show')
        footerBtn.classList.remove('change-color')
    }
    else{
        onFooter.classList.add('show')
        footerBtn.classList.add('change-color')
    }
}

//Cambiando a Dark Mode
function darkMode(){
    if(body.classList.contains('darkmode')){
        body.classList.remove('darkmode')
    }
    else{
        body.classList.add('darkmode')
    }
}