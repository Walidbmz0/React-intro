import React, { useEffect } from "react";
import { useState } from "react";
import { nextSong, playPause, prevSong } from "../../redux/player/playerSlice";
import { useDispatch, useSelector } from "react-redux";
import Track from "./Track";
import Controls from "./Controls";
import Seekbar from "./Seekbar";


const MusicPlayer = () => {
  //On récupère toutes les données du slice player
  const {
    activeSong,
    currentSongs,
    currentAlbum,
    currentIndex,
    isActive,
    isPlaying,
  } = useSelector((state) => state.player);
  //On définit toutes les constantes pour le player
  const [duration, setDuration] = useState(0); //Durée du titre
  const [seekTime, setSeekTime] = useState(0); //Position de la barre de lecture
  const [appTime, setAppTime] = useState(0); //Position réel de la lecture
  const [volume, setVolume] = useState(0.3); //Volume
  const [repeat, setRepeat] = useState(false); //si on veut activer la fonction boucle ou non
  const [shuffle, setShuffle] = useState(false); //Si on veut activer la lecture aléatoire
  //On appelle le hook de redux
  const dispatch = useDispatch();

  useEffect(() => {
    //Si le store contient un tableau de chanson on passe à true

    if (currentSongs?.length) dispatch(playPause(true));
  }, [currentIndex]); //Si currentIndex change, on "met à jour" le composant

  //On gère le playPause
  const handlePlaypause = () => {
    //Si aucune chanson active, on return
    if (!isActive) return;
    //si une chanson est active
    if (isPlaying) {
      //il doit mettre pause
      dispatch(playPause(false));
    } else {
      //On met sur play
      dispatch(playPause(true));
    }
  };
  //On gère pour avancer d'une piste
  const handleNextSong = () => {
    //Si on est pas en mode aléatoire
    if (!shuffle) {
      //On utilise ici la technique du modulo pour être toujours dans le tableau
      //si chiffre de gauche < chiffre de droite ça retourne donc la valeur du chiffre gauche

      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      //Sinon on récupère un index aléatoire d'a
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  //On gère le recule d'une piste
  const handlePrevSong = () => {
    if (currentIndex === 0) {
      //Si l'index est à 0 on récupère le dernier index du tableau
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      //On enlève 1 à l'index
      dispatch(prevSong(currentIndex - 1));
    }
  };

  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track
        isPlaying={isPlaying}
        isActive={isActive}
        activeSong={activeSong}
        currentAlbum={currentAlbum}
      />

      <Controls
      
        isPlaying={isPlaying}
        isActive={isActive}
        repeat={repeat}
        setRepeat={setRepeat}
        shuffle={shuffle}
        setShuffle={setShuffle} 
        currentSongs={currentSongs}
        handlePlaypause={handlePlaypause}
        handlePrevSong={handlePrevSong}
        handleNextSong={handleNextSong}
      />
      <Seekbar
        value = {appTime}
        min = "0"
        max = {duration}
        onImput= {(event) => setSeekTime(event.target.value)}
        appTime = {appTime}
        setSeekTime = {setSeekTime}

      />
    </div>
  );
};

export default MusicPlayer;
