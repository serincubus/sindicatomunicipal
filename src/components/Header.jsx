import React, {useState} from 'react'
import NavBar from './NavBar'
import logo from '../assets/logo.jpg'
import '../index.css'

export default function Header() {
  return (
    <>
    <header className='bg-blue-500 text-white p-4'>
      <div className='flex flex-col h-auto'>
        {/* Contenedor para la imagen y el título */}
        <div className='flex flex-grow items-center'>
          <figure className='w-1/4'>
            <img src={logo} alt="Logo" className='w-full' />
          </figure>
          <h2 className='w-3/4 text-center text-xl font-semibold'>
            SINDICATO DE TRABAJADORES MUNICIPALES DE 
            SAN MIGUEL JOSE C PAZ Y MALVINAS ARGENTINAS
          </h2>
        </div>
        
        {/* Contenedor para el NavBar */}
        <div className='mt-4'>
          <NavBar />
        </div>
      </div>
    </header>
    </>
      )
}
