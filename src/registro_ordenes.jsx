const Registro_ordenes = () => {
    return (
        <form class="formulario3">
        <h1 class="titulo">Gestión de paquetes - Registro de ordenes (Recogida)</h1>
        <div class="contenedor">
            <div class="fechas">
                <label for="date">Fecha: </label>
                <input type="date" name="date"/>
                <label for="time"> Hora: </label>
                <input type="time" name="time"/>
            </div>
            <div>
                
            </div>
          

            <div class="input-contenedor" >
                
                <label for="ancho">Ancho</label>
                <input type="number" name="ancho" />
                <label for="alto">Alto</label>
                <input type="number" name="alto" />
                <label for="largo">Largo</label>
                <input type="number" name="largo" />
                <label for="peso">Peso: </label>
                <input type="number" name="peso" />
            </div>
            <div class="select-delicado">
                <label for="">Delicado: </label>
                <select class="tipo_mercancia" name="tipo_mercancia" >
                    <option value="" selected>Elija una opción</option>
                    <option value="">Si</option>
                    <option value="">No</option> 
                </select>
            </div>
            <div class="input-contenedor" >
                <i class="fa-solid fa-location-dot icon"></i>
                <input type="text" name="direccion_reco" placeholder="Dirección recogida"/>
            </div>
            <div class="input-contenedor" >
                <i class="fa-solid fa-city icon"></i>
                <input type="text" name="ciudad_reco" placeholder="Ciudad recogida"/>
            </div>
            <div class="input-contenedor" >
                <i class="fa-solid fa-user icon"></i>
                <input type="text" name="nombre_des" placeholder="Nombre destinatario"/>
            </div>
            <div class="input-contenedor" >
                <i class="fa-solid fa-id-card icon"></i>
                <input type="text" name="cedula_destinatario" placeholder="Cédula o Nit destinatario"/>
            </div>
            <div class="input-contenedor" >
                <i class="fa-solid fa-location-dot icon"></i>
                <input type="text" name="direccion_entrega" placeholder="Dirección entrega"/>
            </div>
            <div class="input-contenedor" >
                <i class="fa-solid fa-city icon"></i>
                <input type="text" name="ciudad_entrega" placeholder="Ciudad entrega"/>
            </div>
            <input class="btn btn-primary boton" type="submit" value="Crear Orden"/>
            
            
        </div>
    </form >
        )
    }
    
    export default Registro_ordenes