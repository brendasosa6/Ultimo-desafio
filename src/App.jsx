import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import Contacto from './vistas/Contacto';
import Home from './vistas/Home';


import ProductDetails from './edit/ProductDetails';
import ProductEdit from './edit/ProductEdit';
import ProductDelete from './edit/ProductDelete';
import ProductList from './edit/ProductList';
import CargarProducto from './edit/CargarProducto';
import { ProveedorProductos } from './Context/ProveedorProductos';
import Productos from './vistas/Productos';





function App() {
  
  return (
    <>
    
    <ProveedorProductos>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />

        <Route path="/productos" element={<Productos></Productos>} />            
        <Route path="/products/:id" element={<ProductDetails></ProductDetails>} />       
        <Route path="/create" element={<CargarProducto></CargarProducto>} />      
        <Route path="/edit/:id" element={<ProductEdit></ProductEdit>} />
        <Route path="/delete/:id" element={<ProductDelete></ProductDelete>} />

        <Route path="/contacto" element={<Contacto></Contacto>} />
      </Routes>
     </BrowserRouter>
    </ProveedorProductos>
    </>
  )
}

export default App;
