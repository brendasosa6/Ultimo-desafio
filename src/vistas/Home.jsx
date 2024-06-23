import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Navbar from "../componentes/Navbar";
import Carusel from "../componentes/Carusel";
import "../vistas/Styles1.css";


const Home = () => {
    return (
      <>
        <Navbar />
        <main className="home-main">
          <section className="hero-section">
            <h1 className="text-center">Bienvenido a Nuestro Sitio</h1>
            <p className="text-center">
              Aquí encontrarás los mejores productos y servicios.
            </p>
          </section>
  
          <Carusel />
  
        </main>
      </>
    );
  }
  
  export default Home;