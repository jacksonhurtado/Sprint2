
const Login = () => {
    return (
        <body>
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
            <p>¿No tienes cuenta?<a class="link" href="/registro_usuarios"> Registrate</a></p>
        </div>
    </form>
    </body>
    )
}

export default Login



    
