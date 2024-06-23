import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../edit/Styles2.css';

const ProductDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://6656157b9f970b3b36c43cee.mockapi.io/desafionuevo/productos/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        navigate('/');
      } else {
        console.error('Error al eliminar producto');
      }
    } catch (error) {
      console.error('Error en la solicitud: ', error);
    }
  };

  return (
    <div className="container delete-container">
      <h1>Eliminar Producto</h1>
      <p>¿Estás seguro de que deseas eliminar este producto?</p>
      <button onClick={handleDelete} className="btn btn-danger">Eliminar</button>
      <Link to={`/productos`} className="btn btn-secondary">Volver</Link>
    </div>
  );
};

export default ProductDelete;
