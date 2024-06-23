import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css';
import '../componentes/Styles.css';



const Carusel = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://6656157b9f970b3b36c43cee.mockapi.io/desafionuevo/img");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setImages(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div id="carouselExample" className="carousel-slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {loading ? (
          <div className="carousel-item active">
            <img src="https://loremflickr.com/640/480/city" className="d-block w-100" alt="Loading slide" />
          </div>
        ) : (
          images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={image.imagen} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))
        )}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carusel;
