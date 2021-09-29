const formulario = document.querySelector('form')
const userErrorDisplay = document.querySelector('.usuario .error')
const passErrorDisplay = document.querySelector('.password .error')

const Exito = document.querySelector('.exito')
const mensaje = document.querySelector('.mensaje')

Exito.style.display = 'none'

//validaciones
const validarUsuario = (usuario)=>{
    if(usuario.trim().length === 0) return "Campo obligatorio"
    if(!usuario.trim().includes("@")) return "Usuario debe contener @"
}
const validarPass = (pass)=>{
    if(pass.trim().length === 0) return "Campo obligatorio"
    if(pass.trim().length < 4) return "Clave debe contener mas de 3 caracteres"
}

//limpiar errores
const clearErrors = ()=>{
    userErrorDisplay.innerHTML = ''
    passErrorDisplay.innerHTML = ''
}

//formulario
const formSuccess = (nombre)=>{
    Exito.style.display = 'block'
    formulario.style.display = 'none'
    mensaje.textContent = `Hola ${nombre}, Bienvenido!`
} 

formulario.addEventListener('submit', e=>{
    e.preventDefault()
    const errors = {
        userError: validarUsuario(e.target.elements.usuario.value),
        passError: validarPass(e.target.elements.clave.value)
    }
    clearErrors()

    if(errors.userError || errors.passError){
        const pUser = document.createElement('p')
        const pPass = document.createElement('p')
        pUser.textContent = errors.userError
        pPass.textContent = errors.passError
        userErrorDisplay.appendChild(pUser)
        passErrorDisplay.appendChild(pPass)
        return
    }
       
    formSuccess(e.target.elements.usuario.value)
})
