import React from "react";
import { BsFillPauseFill, BsFillPlayFill, BsShuffle } from "react-icons/bs";
import { FiRepeat } from "react-icons/fi";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

//Ici on aura tous les boutons de controle
//Play, Pause, avancer reculer lecture aléatoire...

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => {
  return (
    <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
      {/* Ici on affiche le bouton repeat */}
      <FiRepeat
        size={20}
        color={repeat ? "rgba(30,215,96,1)" : "#ffff "}
        className="cursor-pointer hidden sm:block"
        onClick={() => setRepeat((prev) => !prev)}
      />
      {/* Si on a un tableau de chanson on affiche l'icone reculer */}
      {currentSongs?.length && (
        <MdSkipPrevious
          size={30}
          color="#fff"
          className="cursor-pointer"
          onClick={handlePrevSong}
        />
      )}

      {/* Si la chanson est en cours de lecture */}
      {isPlaying ? (
        // On affiche l'icone pause
        <BsFillPauseFill
          size={45}
          color="#fff"
          onClick={handlePlayPause}
          className="cursor-pointer"
        />
      ) : (
        // On affiche l'icone play
        <BsFillPlayFill
          size={45}
          color="#fff"
          onClick={handlePlayPause}
          className="cursor-pointer"
        />
      )}
      {/* Si on a un tableau de chanson on affiche l'icone avancer */}
      {currentSongs?.length && (
        <MdSkipNext
          size={30}
          color="#fff"
          className="cursor-pointer"
          onClick={handleNextSong}
        />
      )}

      {/* Si on a un tableau de chanson on affiche l'icone avancer */}

      <BsShuffle
        size={20}
        color={shuffle ? "rgba(30,215,96,1)" : "#ffff "}
        className="cursor-pointer hidden sm:block"
        onClick={() => setShuffle((prev) => !prev)}
      />
    </div>
  );
};

export default Controls;
