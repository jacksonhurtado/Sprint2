
        const Registro_usuarios = () => {
            return (
                <div clasName="body-formulario2">
                <form class="formulario2">
                <h1>Registrarse</h1>
                <div class="contenedor">
                    <div class="input-contenedor" >
                        <i class="fa-solid fa-user icon"></i>
                        <input type="text" name="nombres" placeholder="Digite su Nombre"/>
                    </div>
                    <div class="input-contenedor" >
                        <i class="fa-solid fa-user icon"></i>
                        <input type="text" name="usuario" placeholder="Digite su Usuario"/>
                    </div>
                    <div class="input-contenedor" >
                        <i class="fa-solid fa-key icon"></i>
                        <input type="password" name="password" placeholder="Digite su Contraseña"/>
                    </div>
                    <div class="input-contenedor" >
                        <i class="fa-solid fa-envelope icon"></i>
                        <input type="email" name="email" placeholder="Digite su Email"/>
                    </div>
                    <input class="btn btn-primary boton" type="submit" value="Crear"/>
                    <p>Al registrarte aceptas nuestras Condiciones de uso y Politicas de privacidad.</p>
                    <p>¿Ya tienes cuenta?<a class="link" href="/login"> Inicio sesion</a></p>
                </div>
            </form>
            </div>
        
            )
        }
        
        export default Registro_usuarios
        

   
