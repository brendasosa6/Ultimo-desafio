import React from "react";

import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Navbar from "../componentes/Navbar";


const Contacto = () => {
    return (
      <>
        <Navbar />
        <main className="contacto-main">
          <h1>Contacto</h1>
          <div className="contacto-container">
            <form className="contacto-form">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" className="form-control" placeholder="Tu nombre" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Tu email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" className="form-control" rows="5" placeholder="Tu mensaje"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
        </main>
      </>
    );
  }
  
  export default Contacto;