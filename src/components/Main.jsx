import React from 'react'
import Carrousel from '../components/Carrousel'
import cabañas from '../assets/cabañas.jpg'
import fotosanisidro from '../assets/fotosanisidro.jpg'
import bicisorteo from '../assets/bicisorteo.jpg'
import asamblea2024 from '../assets/asamblea2024.jpg'
import firmacamed from '../assets/firmacamed.jpg'


const images = [       
  cabañas,
  fotosanisidro,
  asamblea2024,
  bicisorteo,
  firmacamed
           
    ];


export default function Main() {
  return (
    <main>
      <div className=''>
         <div className='flex'>
          <Carrousel/>
          {images.map((i)=>(
            <img src={i} />
          ))}  

         </div>   
      </div>  





    </main>
  )
}
