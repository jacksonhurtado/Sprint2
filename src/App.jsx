import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body id="page-top">
        
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container px-5">
                <img class="logo" src="./public/logo.png" alt="Logo-empresa"/>
                <a class="navbar-brand" href="#page-top">Envios InstaYa</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="./index/registro_usuarios.html">Registrarse</a></li>
                        <li class="nav-item"><a class="nav-link" href="./index/login.html">Iniciar Sesión</a></li>
                        <li class="nav-item"><a class="nav-link" href="./index/nosotros.html">Nosotros</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <header class="masthead text-center text-white">
            <div class="masthead-content">
                <div class="container px-5">
                    <h1 class="masthead-heading mb-0">Envios InstaYa</h1>
                    <h2 class="masthead-subheading mb-0">Plataforma de recogida de paquetes</h2>
                    <a class="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Leer más</a>
                </div>
            </div>
            <div class="bg-circle-1 bg-circle"></div>
            <div class="bg-circle-2 bg-circle"></div>
            <div class="bg-circle-3 bg-circle"></div>
            <div class="bg-circle-4 bg-circle"></div>
        </header>
        
        <section id="scroll">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><img class="img-fluid rounded-circle" src="./public/04.png" alt="..." /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">Programa la recogida de tus paquetes...</h2>
                            <p>Llegamos hasta la puerta de tu casa a recoger tu paquete y transportarlo de manera segura hasta su destino. Esto permite tratar de manera individualizada cada pedido y, así, poder tomar las decisiones más adecuadas en cada momento para poder garantizar que el despacho se realiza tanto en tiempo como en forma.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="p-5"><img class="img-fluid rounded-circle" src="./public/05.png" alt="..." /></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <h2 class="display-4">Puedes cambiar la fecha para recoger tus paquetes!</h2>
                            <p>Algunos productos requieren una entrega programada debido al tamaño y al peso. Para actualizar la fecha y la   hora de entrega programadas de los pedidos que no ingresaron en el proceso de envío te brindamos todas las facilidades desde nuestra aplicación web, para hacerte la vida mas facil.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><img class="img-fluid rounded-circle" src="./public/06.png" alt="..." /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">Hazle seguimiento al envio de tus paquetes.</h2>
                            <p>El seguimiento de los productos es un concepto que permite localizar un producto o artículo comercial en cualquier momento, incluida toda la información sobre la fecha, el lugar y el responsable del suministro, la fabricación, el procesamiento, el almacenamiento, el transporte, el uso o la eliminación de los productos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <footer class="py-5 bg-black">
            <div class="container px-5"><p class="m-0 text-center text-white small">Copyright &copy; InstaYa 2022</p></div>
        </footer>
      </body>   
  )
}

export default App
