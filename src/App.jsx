import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../src/index.css'
import Header from './components/Header'
import Main from './components/main'
import asamblea2024 from './assets/asamblea2024.jpg'
import bicisorteo from './assets/bicisorteo.jpg'
import firmacamed from './assets/firmacamed.jpg'

const images = [
    
   
asamblea2024,
bicisorteo,
firmacamed
      
     
 
  ];
  

function App() {
  
  return (
    <>
    < Header />
    <Main />
    <div>
      <h1>Carrusel de Imágenes</h1>
      <Carrusel images={images} />
    </div>
    </>
  )
}

export default App
