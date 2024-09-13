import React from 'react'
import NavBar from './NavBar'
import logo from '../assets/logo.jpg'

export default function Header() {
  return (
    <>
    <div className='flex'>
    <div >
    <img src={logo} alt="" className='w-40'/>
    </div>
    <h2 className='w-320px'>SINDICATO DE TRABAJADORES
        MUNICIPALES DE SAN MIGUEL
        JOSE C PAZ Y MALVINAS ARGENTINAS</h2>
    <NavBar />,
   
    </div>
    </>
      )
}
