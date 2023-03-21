import React from 'react'
import { useState } from 'react'
const MusicPlayer = () => {
    //On récupère toutes les données du slice player
    const {activeSong,
           currentSongs,
           currentAlbum,
           currentIndex,
           isActive,
           isPlaying,
        
    
    } = useSelector((state) => state.player) 
    //On définit toutes les constantes pour le player
    const [duration, setDuration] = useState(0)//Durée du titre
    const [seekTime, setSeekTime] = useState(0)//Position de la barre de lecture
    const [appTime, setAppTime] = useState(0)//Position réel de la lecture
    const [volume, setVolume] = useState(0.3)//Volume
    const [repeat, setRepeat] = useState(false)//si on veut activer la fonction boucle ou non

}
const index = () => {
  return (
    <div>PIPI</div>
  )
}

export default index