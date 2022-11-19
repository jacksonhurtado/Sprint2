import { useState } from 'react'

import './App.css'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <form class="formulario">
        <h1>Login</h1>
        <div class="contenedor">
            <div class="input-contenedor" >
                <i class="fa-solid fa-user icon"></i>
                <input type="text" name="usuario" placeholder="Digite su usuario"/>
            </div>
            <div class="input-contenedor" >
                <i class="fa-solid fa-key icon"></i>
                <input type="password" name="password" placeholder="Contraseña"/>
            </div>
            <input class="btn btn-primary boton" type="submit" value="Login"/>
            <p>Al registrarte aceptas nuestras Condiciones de uso y Politicas de privacidad.</p>
            <p>¿No tienes cuenta?<a class="link" href="/startbootstrap-one-page-wonder-gh-pages/index/registro_usuarios.html"> Registrate</a></p>
        </div>
    </form>
  )
}

export default Login