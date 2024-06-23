/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles2.css'; // Asegúrate de que este archivo CSS exista y esté correctamente vinculado

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'price') setPrice(value);
    else if (name === 'img') setImg(value);
  };

  const handleCreate = async () => {
    if (name.trim() === '' || price.trim() === '' || img.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

    try {
      const response = await fetch('https://664bfe9435bbda10987ea2c9.mockapi.io/users/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre: name, precio: price, img: img }),
      });

      if (!response.ok) {
        throw new Error('Error al crear el producto');
      }

      const nuevoProductoCreado = await response.json();

      // Limpiar los campos después de agregar el producto
      setName('');
      setPrice('');
      setImg('');

      // Redirigir a la lista de productos
      navigate('/productos');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container">
      <h2>Agregar Producto</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="precio" className="form-label">Precio</label>
          <input
            type="text"
            className="form-control"
            id="precio"
            name="price"
            value={price}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">Imagen (url)</label>
          <input
            type="text"
            className="form-control"
            id="img"
            name="img"
            value={img}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleCreate}>
          Cargar Producto
        </button>
      </form>
    </div>
  );
};

export default ProductForm;*/

