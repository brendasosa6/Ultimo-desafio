import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../edit/Styles2.css';

const ProductEdit = () => {
  const [product, setProduct] = useState({});
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://6656157b9f970b3b36c43cee.mockapi.io/desafionuevo/productos/${id}`);
      const data = await response.json();
      setProduct(data);
      setName(data.nombre); 
      setPrice(data.precio); 
    } catch (error) {
      console.error('Error en la solicitud: ', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`https://6656157b9f970b3b36c43cee.mockapi.io/desafionuevo/productos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre: name, precio: price }), 
      });
      if (response.ok) {
        navigate(`/products/${id}`);
      } else {
        console.error('Error al actualizar producto');
      }
    } catch (error) {
      console.error('Error en la solicitud: ', error);
    }
  };

  return (
    <div className="container edit-container">
      <h1>Editar Producto</h1>
      <div className="form-group">
        <label>Nombre: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Precio: </label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
        />
      </div>
      <button onClick={handleUpdate} className="btn btn-primary">Actualizar</button>
    </div>
  );
};

export default ProductEdit;
