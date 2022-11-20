const listado_ordenes = () => {
    return (
        <div className="formulario_listado">
        <h1 clasName="titulo-listado">Gestión de paquetes - Listados de Ordenes</h1>
        <button type="button" class="btn btn-secondary boton-crear">Crear orden</button>
        <br/>
        <table class="table">
         <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
        <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
        </tr>
    </tbody>
</table>

        </div>
        )
    }
    
    export default listado_ordenes;