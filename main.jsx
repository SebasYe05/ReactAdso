import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './components/Login.jsx';
import Principal from './pages/Principal.jsx';
import Contenido from './pages/Contenido.jsx';
import ContenidoDos from './pages/ContenidoDos.jsx';
import Holi from './components/Holi.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Principal></Principal>}></Route>
          <Route path="contenido" element={<Contenido></Contenido>}></Route>
          <Route path="contenido-dos" element={<ContenidoDos></ContenidoDos>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/holi" element={<Holi></Holi>}></Route>
        <Route path="*" element={<h1>404 - Not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
