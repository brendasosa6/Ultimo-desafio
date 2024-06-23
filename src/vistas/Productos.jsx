import React from 'react';
import "../vistas/Styles1.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../edit/Styles2.css'; // Asegúrate de que el archivo CSS esté correctamente importado
import CargarProducto from '../edit/CargarProducto';
import ProductList from '../edit/ProductList';

const Productos = () => {
    return (
        <div className="productos-container">
            <ProductList></ProductList>
            <div className='cargar'>
                <CargarProducto></CargarProducto>
            </div>
            
        </div>
    );
};

export default Productos;
