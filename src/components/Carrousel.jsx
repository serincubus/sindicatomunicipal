import React, { useState, useEffect } from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';  
import cabañas from '../assets/cabañas.jpg';  
import fotosanisidro from '../assets/fotosanisidro.jpg';  
import bicisorteo from '../assets/bicisorteo.jpg';  
import asamblea2024 from '../assets/asamblea2024.jpg';  
import firmacamed from '../assets/firmacamed.jpg';  

const images = [cabañas, fotosanisidro, asamblea2024, bicisorteo, firmacamed];  
const titles = [  
    "Cabañas, Cosquin, Cordoba",  
    "Movilización a Municipalidad de San Isidro",  
    "Asamblea Extraordinaria, memoria y balance 2024",  
    "Dia de la Niñez 2024",  
    "Firma de convenio con Camed"  
  ];

const Carrousel = () => {  
  const [currentIndex, setCurrentIndex] = useState(0);  

  useEffect(() => {  
    const interval = setInterval(() => {  
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);  
    }, 3000); // Cambia la imagen cada 3 segundos  

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente  
  }, []); // Se ejecuta una vez cuando el componente se monta  

  const nextImage = () => {  
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);  
  };  

  const prevImage = () => {  
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);  
  };  

  return (  
    <div className="relative flex flex-col items-center">  
      <div className="w-96 h-60 overflow-hidden">  
        <img   
          src={images[currentIndex]}   
          alt={`carousel-image-${currentIndex}`}   
          className="w-full h-full object-cover rounded-lg"   
        />  
        <div className="absolute top-2 left-2 bg-white p-1 rounded shadow">  
          {titles[currentIndex]}  
        </div>  
        <button   
          onClick={prevImage}   
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-full"  
        >  
          <FontAwesomeIcon icon={faChevronLeft} />  
        </button>  
        <button   
          onClick={nextImage}   
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-full"  
        >  
          <FontAwesomeIcon icon={faChevronRight} />  
        </button>  
      </div>  
    </div>  
  );  
}  

export default Carrousel;

