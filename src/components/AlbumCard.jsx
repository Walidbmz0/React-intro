import React from 'react'
import { apiImage } from '../constants/apiConstant';



const AlbumCard = ({data}) => {
   //afficher les infos des albums 
  const imgPath = `${apiImage}/${data.imagePath}`;

  return (
    //On se créer notre div principale de la card
    //animate-slideup est définit dans tailwind.config
    <div className='
    flex flex-col w-[250px] p-4
    bg-white_01 
    hover:bg-white_05
    transition-all 
    ease-out
    duration-500
    animate-slideup
    rounded-lg
    cursor-pointer

    
    '>

        <div>AlbumCard</div>

    </div>
  )
}

export default AlbumCard