document.addEventListener('DOMContentLoaded', () => {

    //Varaibles
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
    const formulario = document.querySelector('#formulario')
    const btnSubmit = document.querySelector('#btn-submit')
    const spinner = document.querySelector('.spinner__container')
    const btnReset = document.querySelector('#btn-reset')

    //Objeto
    infoEmail = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    cargarEventos()

    function cargarEventos(){
        inputEmail.addEventListener('blur', validar)
        inputAsunto.addEventListener('blur', validar)
        inputMensaje.addEventListener('blur', validar)
        formulario.addEventListener('submit', enviarEmail)
        btnReset.addEventListener('click', eliminarEmail)
    }

    //Funcion Validar Emails
    function validar(e){
        if(e.target.value.trim() === ''){
           showAlert(`El input ${e.target.id} esta vacio`, e.target.parentElement)
           infoEmail[e.target.name] = ''
           comprobarEmail()
           return
        }

        //Validando email
        if(e.target.id === 'email'){
            const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
            const resultado = regex.test(e.target.value)

            if(resultado === true){
                showAlert(`El campo ${e.target.id} ES VALIDO`, e.target.parentElement)

                setTimeout(() => {
                    alertaReptida(e.target.parentElement)
                }, 1500);
                infoEmail[e.target.name] = e.target.value.trim().toLowerCase()
                console.log(infoEmail)
                comprobarEmail()
                return
            }
            else{
                showAlert(`El campo ${e.target.id} NO ES VALIDO`, e.target.parentElement)
                return
            }
        }

        alertaReptida(e.target.parentElement)

        infoEmail[e.target.name] = e.target.value.trim().toLowerCase()
        console.log(infoEmail)

        comprobarEmail()
    }

    //Funcion showAlert
    function showAlert(mensaje, referencia){

        alertaReptida(referencia)

        const aviso = document.createElement('div')
        aviso.textContent = mensaje
        aviso.classList.add('alerta')

        referencia.appendChild(aviso)
    }

    //Funcion Eliminar Alerta Repetida
    function alertaReptida(ref){
        const alerta = ref.querySelector('.alerta')

        if(alerta){
            alerta.remove()
        }
    }

    //Funcion Comprobar Email
    function comprobarEmail(){
        if(Object.values(infoEmail).includes('')){
            btnSubmit.classList.remove('freeSubmit')
            btnSubmit.disabled = true
        }
        else{
            btnSubmit.classList.add('freeSubmit')
            btnSubmit.disabled = false
        }
    }

    //Funcion Enviar Email
    function enviarEmail(e){
        e.preventDefault()

        spinner.classList.add('showSpinner')

        setTimeout(() => {
            spinner.classList.remove('showSpinner')
        }, 2000);
    }

    //Funcion Eliminar Email
    function eliminarEmail(e){
        e.preventDefault()

        infoEmail.email = ''
        infoEmail.asunto = ''
        infoEmail.mensaje = ''

        formulario.reset()

        comprobarEmail()
    }
})