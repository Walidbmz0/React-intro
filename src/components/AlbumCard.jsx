import React from 'react'
import { Link } from 'react-router-dom';
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

    
    <div className='relative w-full h-56 flex flex-col'>
      {/* On passe les paramètres à travers la route grâce à state*/}
      <Link to='/detail' state={{params : data}}>
        <img src={imgPath} className='object-cover rounded-lg' alt={data.title}/>
      </Link>
</div>
<Link to='/detail' state={{params : data}}>
<div className='mt-4 flex flex-col'>

</div>

</Link>
        <div>AlbumCard</div>

    </div>
  )
}

export default AlbumCard