import React from 'react'

const Article = ({ imagen, titulo, descripcion }) => {
  return (
    <div className="border p-4 shadow-md rounded">
      <img src={imagen} alt="Artículo" className="w-full h-auto rounded" /> 
      <h2 className="text-xl font-bold mt-2">{titulo}</h2> {/* Título resaltado */} 
      <p className="mt-2 text-gray-700">{descripcion}</p>  
    </div>
  )
}

export default Article
