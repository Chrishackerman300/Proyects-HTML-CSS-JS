//Variables
const carrito = document.querySelector('#carrito')
const contenidoCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarrito = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')
let articulosCarrito = []

//Llamamos a nuestra funcion que contiene todos los eventos
cargarEventos()

//Funcion para cargar todos los eventos
function cargarEventos(){
    listaCursos.addEventListener('click', agregarCurso)
    carrito.addEventListener('click', eliminarCurso)
    vaciarCarrito.addEventListener('click', () => {

        //Vaciando el arrya
        articulosCarrito = []

        //Llamando a nuestra funcion de limpiar carrito
        limpiarCarrito()
    })
}

//Agregar Cursos Function
function agregarCurso(e){
    e.preventDefault()

    //Si nuestro button contiene la clase "agregar-carrito"
    if(e.target.classList.contains('agregar-carrito')){
        const contenido = e.target.parentElement.parentElement

        //Llamndo a la function datosCurso
        datosCurso(contenido)
    }
}

//Datos del Curso Function
function datosCurso(curso){
    //Creando el objeto obtener sus datos
    const infoCurso = {
        imagen: curso.querySelector('.card__img').src,
        titulo: curso.querySelector('.info-title').textContent,
        precio: curso.querySelector('.price').textContent,
        id: curso.querySelector('.cta').getAttribute('data-id'),
        cantidad: 1
    }

    //Si un curso ya se encuentra repetido mas de una vez en el carrito de compras
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)

    if(existe){
        //Actualizar informacion del carrito
        const curss = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++ //Incrementa el numero de cursos 
                return curso //Retorna el array actualizado
            }
        })
    }
    else{
        //Agregar la informacion del objeto en el array
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    //Agregando el array a nuestro carrito de compras
    carritoCompras()
}

//Carrito de Compras Function
function carritoCompras(){
    //Limpiar contenido basura del carrito de compras Function
    limpiarCarrito()

    //Iterar cada elemento de nuestro array
    articulosCarrito.forEach(curso => {
        //Destructurin del nuestro Objeto
        const {imagen, titulo, precio, cantidad, id} = curso
        //Cada que itere un elemento creara un table row (tr)
        const fila = document.createElement('tr')

        fila.innerHTML = `
            <td>
                <img src="${imagen}" width="100px">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id"${id}"> X </a>
            </td>
        `

        //Agregando el curso al carrito de compras
        contenidoCarrito.appendChild(fila)

    })
}

//Limpiar Carrito Function
function limpiarCarrito(){
    while(contenidoCarrito.firstChild){
        contenidoCarrito.removeChild(contenidoCarrito.firstChild)
    }
}

//Eliminar Curso Function
function eliminarCurso(e){
    console.log(e.target.classList)

    if(e.target.classList.contains('borrar-curso')){
        const iD = e.target.getAttribute('data-id')
        articulosCarrito = articulosCarrito.filter(curso => curso.id != iD)
    }

    carritoCompras()
}