import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../edit/Styles2.css/';



const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://6656157b9f970b3b36c43cee.mockapi.io/desafionuevo/productos/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Error en la solicitud: ', error);
    }
  };

  return (
    <div className="container">
      <div className="product-details">
        <h1>Detalles del Producto</h1>
        <p>ID: {product.id}</p>
        <p>Nombre: {product.nombre}</p>
        <p>Precio: {product.precio}</p>
        <Link to={`/delete/${product.id}`} className="btn btn-danger">Eliminar Producto</Link>
        <Link to={`/edit/${product.id}`} className="btn btn-warning">Editar Producto</Link>
        <Link to={`/productos`} className="btn btn-secondary">Volver</Link>
      </div>
    </div>
  );
};

export default ProductDetails;

