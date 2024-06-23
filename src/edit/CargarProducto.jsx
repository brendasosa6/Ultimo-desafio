import React, { useContext, useState } from "react";
import { ProductosContext } from "../Context/ProveedorProductos";
import 'bootstrap/dist/css/bootstrap.min.css';

const CargarProducto = () => {
    const { agregarProducto, setProductos } = useContext(ProductosContext);
    const [nuevoProducto, setNuevoProducto] = useState({ precio: "", nombre: "", imagen: "" }); // Cambia 'name' por 'nombre'

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoProducto((prevProducto) => ({
            ...prevProducto,
            [name]: value,
        }));
    };

    const handleSubmitProducto = () => {
        // Validar y enviar el nuevo producto al servidor
        if (nuevoProducto.nombre.trim() === '' || nuevoProducto.precio.trim() === '' || nuevoProducto.imagen.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        fetch("https://6656157b9f970b3b36c43cee.mockapi.io/desafionuevo/productos/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoProducto),
        })
            .then((response) => response.json())
            .then((nuevoProductoCreado) => {
                // Agregar el producto creado al contexto
                agregarProducto(nuevoProductoCreado);
                // Limpiar los campos después de agregar el producto
                setNuevoProducto({ precio: "", nombre: "", imagen: "" });
                // Actualizar la lista de productos
                return fetch("https://6656157b9f970b3b36c43cee.mockapi.io/desafionuevo/productos/");
            })
            .then((response) => response.json())
            .then((data) => setProductos(data))
            .catch((error) => console.error(error.message));
    };

    return (
        <div className="container">
            <h2>Agregar Producto</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre" // Cambia 'name' por 'nombre'
                        value={nuevoProducto.nombre}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="precio"
                        name="precio"
                        value={nuevoProducto.precio}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="imagen" className="form-label">Imagen (url):</label>
                    <input
                        type="text"
                        className="form-control"
                        id="imagen"
                        name="imagen"
                        value={nuevoProducto.imagen}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSubmitProducto}>
                    Cargar Producto
                </button>
            </form>
        </div>
    );
};

export default CargarProducto;

