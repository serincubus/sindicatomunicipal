import React from 'react'
import Carrousel from '../components/Carrousel'
import Article from '../components/Article'

const articles = [  
  {  
      imagenArt: "url_de_imagen_1.jpg",   
      titulo: "Título del Artículo 1",  
      descripcion: "Descripción del artículo 1"  
  },  
  {  
      imagenArt: "url_de_imagen_2.jpg",   
      titulo: "Título del Artículo 2",  
      descripcion: "Descripción del artículo 2"  
  },  
  {  
      imagenArt: "url_de_imagen_3.jpg",   
      titulo: "Título del Artículo 3",  
      descripcion: "Descripción del artículo 3"  
  }  
];  


export default function Main() {
  return (
    <main className='flex flex-col gap-10 items-center'>
      <div className="mt-10">
          <Carrousel />
      </div>    
      <div className="flex flex-col gap-4 items-center px-3.5 w-full">  
    {articles.map((article, index) => (  
        <Article   
            key={index}   
            imagen={article.imagenArt}   
            titulo={article.titulo}   
            descripcion={article.descripcion}   
        />  
    ))}  
</div>  

    

    </main>
  )
}
