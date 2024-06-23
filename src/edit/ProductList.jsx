import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../componentes/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../edit/Styles2.css'; // Importa el archivo CSS aquí

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const url = 'https://6656157b9f970b3b36c43cee.mockapi.io/desafionuevo/productos';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        console.log('Fetched products:', data);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Productos</h1>
        <div className="card-container">
          {loading ? (
            <h2>Cargando...</h2>
          ) : (
            products.map((product) => (
              <div className="card" key={product.id}>
                <img src={product.imagen} className="card-img-top img-fluid" alt={product.nombre} />
                <div className="card-body">
                  <h5 className="card-title">{product.nombre}</h5>
                  <p className="card-text">{product.precio}</p>
                  <Link to={`/products/${product.id}`} className="btn btn-primary">
                    Ver Detalles
                  </Link>
                  <Link to="#" className="btn btn-primary">
                    Comprar
                  </Link>                  
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;


