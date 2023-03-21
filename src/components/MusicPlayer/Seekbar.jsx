import React from 'react'
import { TiMediaRewindOutline, TiMediaFastForwardOutline } from 'react-icons/ti'

const Seekbar = ({value, min, max, onImput, setSeekTime, appTime}) => {
    //Convertir la durée de lecture au format 0:00
    const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;
  return (
    <div className='hidden sm:flex items-center'>
        {/* Bouton pour reculer de 5sec  */}
        <button type='button'
        onClick={()=> setSeekTime(appTime - 5)}
        className='hidden lg:mr-4 lg:block text-white'
        >
            <TiMediaRewindOutline/>


        </button>
        {/* Temps réel écoulé de la chanson */}
        <p className='text-white'>{value === 0 ? '0:00' : getTime(appTime)}</p>
        {/* Barre de progression de lecture */}
        <input 
        type  = 'range'
        step  = 'any'
        value = {value}
        min   = {min}
        max   = {max} 
        onImput = {onImput}
        className='md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg'
        />
        
        {/* Temps total de la chanson formaté */}
        <p className='text-white'>{max === 0 ? '0:00' : getTime(max)}</p>
        {/* Bouton pour avancer de 5sec */}
        <button type='button'
        onClick={()=> setSeekTime(appTime + 5)}
        className='hidden lg:ml-4 lg:block text-white'

        >
            <TiMediaFastForwardOutline/>
        </button>
        
        
        
        
       
    </div>
  )
}

export default Seekbar