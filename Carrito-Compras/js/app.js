//Varaibles Menu
const openMenu = document.querySelector('#open-menu')
const closeMenu = document.querySelector('#close-menu')
const sidebar = document.querySelector('.navegation__hero')

//Varaibles Dark Mode
const btnDark = document.querySelector('#dark-btn')
const body = document.querySelector('body')

//Variables Footer
const btnFooter = document.querySelector('#information')
const footer = document.querySelector('#footer')

//Variables Carrito
const carrito = document.querySelector('#carrito')
const listaCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarrito = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')
let itemsCursos = []

cargarEventos()

function cargarEventos(){
    openMenu.addEventListener('click', showMenu)
    closeMenu.addEventListener('click', menuClose)
    btnDark.addEventListener('click', showDarkMode)
    btnFooter.addEventListener('click', showFooter)
    listaCursos.addEventListener('click', agregarCurso)
    carrito.addEventListener('click', eliminarCurso)
    vaciarCarrito.addEventListener('click', () => {
        itemsCursos = []

        limpiar()
    })
    
}

//Function Open Menu
function showMenu(){
    sidebar.classList.add('show-menu')
    console.log('Abriendo menu')
}

//Function Close Menu
function menuClose(){
    if(sidebar.classList.contains('show-menu')){
        sidebar.classList.remove('show-menu')
        console.log('Cerrando menu')
    }
}

//Function Footer
function showFooter(){
    if(footer.classList.contains('show-footer')){
        footer.classList.remove('show-footer')
        btnFooter.classList.remove('active')
    }
    else{
        footer.classList.add('show-footer')
        btnFooter.classList.add('active')
    }
}

//Function Dark Mode
function showDarkMode(){
    if(body.classList.contains('darkmode')){
        body.classList.remove('darkmode')
        console.log('Borrando dark mode')
    }
    else{
        body.classList.add('darkmode')
        console.log('Agregando dark mode')
    }
}

//Function Agregar Curso
function agregarCurso(e){
    e.preventDefault()

    if(e.target.classList.contains('agregar-carrito')){
        const contenido = e.target.parentElement.parentElement

        datosCurso(contenido)
    }
}

//Function Datos del Curso
function datosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('.card__img').src,
        title: curso.querySelector('.titulo').textContent,
        precio: curso.querySelector('.descount').textContent,
        id: curso.querySelector('.cta').getAttribute('data-id'),
        cantidad: 1
    }

    const exist = itemsCursos.some(curso => curso.id === infoCurso.id)

    if(exist){
        const cursos = itemsCursos.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++
                return curso
            }
            else{
                return curso
            }
        })
    }
    else{
        itemsCursos  = [...itemsCursos, infoCurso]
    }

    mostrarCarrito()
}

//Function Mostrar el Carrito
function mostrarCarrito(){
    limpiar()

    itemsCursos.forEach(curso => {
        const {imagen, title, precio, id, cantidad} = curso

        const fila = document.createElement('tr')

        fila.innerHTML = `
            <td>
                <img src="${imagen}" width="90px">
            </td>
            <td>${title}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `

        listaCarrito.appendChild(fila)
    })
}

//Function Limpiar 
function limpiar(){
    while(listaCarrito.firstChild){
        listaCarrito.removeChild(listaCarrito.firstChild)
    }
}

//Function Eliminar Curso
function eliminarCurso(e){
    e.preventDefault()

    if(e.target.classList.contains('borrar-curso')){
        const identifier = e.target.getAttribute('data-id')
        
        itemsCursos = itemsCursos.filter(curso => curso.id !== identifier)
        
    }

    mostrarCarrito()
}