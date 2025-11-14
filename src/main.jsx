import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './components/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
