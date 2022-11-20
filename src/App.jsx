
import './App.css';
import './index.css';
import Login from './login';
import Home from './home';
import Registro_usuarios from './registro_usuarios';
import Registro_ordenes from './registro_ordenes';
import Actualizacion_ordenes from './actualizacion_ordenes';
import Nosotros from './nosotros';
import Listado_ordenes from './listado_ordenes';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/Home" element={<Home />} />  
                <Route path="/Registro_usuarios" element={<Registro_usuarios />} /> 
                <Route path="/Registro_ordenes" element={<Registro_ordenes />} />
                <Route path="/Actualizacion_ordenes" element={<Actualizacion_ordenes />} />
                <Route path="/Nosotros" element={<Nosotros />} /> 
                <Route path="/Listado_ordenes" element={<Listado_ordenes />} /> 
            </Routes>    
        </BrowserRouter>
        
    </div>  
  )
}

export default App;
