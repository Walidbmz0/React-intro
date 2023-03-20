import React from 'react'
import { BsPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs'

const PlayPause = ({
    size = '60px', // On donne une taille d'icone par défaut, on peut surcharger si besoin
    isPlaying, //Gère l'état si on est en mode play ou pause
    songs, 
    activeSong,
    handlePause,
    index

}) => {
    return (
        // On va checker si on est en mode 'play' &&
        //Si le titre de la chanson == au titre de la chanson du tableau à l'index donné 
        isPlaying && activeSong?.title === songs[index]?.title 
        ? // Si vrai on va afficher l'icone pause avec la méthode handlePause
        <BsPauseCircleFill size={size} className='text-green shadow-md cursor-pointer'
        onClick={handlePause}

        />
        : // Sinon on affiche l'icone play avec la méthode handlePlay
        <BsPlayCircleFill 
        size={size}
        className='text-green shadow-md cursor-pointer'
        onClick={handlePlay}
        />

       
    )
}

export default PlayPause