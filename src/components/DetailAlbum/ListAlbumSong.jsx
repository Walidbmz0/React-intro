import React from "react";
import { BiTime } from "react-icons/bi";
import { useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";


const ListAlbumSong = ({ dataAlbum }) => {
  // On récupère le tableau de chansons
  const songs = dataAlbum.songs;
  // On déclare un constant isHover
  const [isHover, setIsHover] = useState(-1);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto min-w-full py-2 sm:px-6 lg:px-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Titre
                  </th>
                  <th scope="col" className="px-6 py-4">
                    <BiTime style={{ width: "20px", height: "20px" }} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {songs
                  ? songs.map((row, index) => {
                      // Formatage du temps pour les titres
                      const minutes = Math.floor((row.duration % 3600) / 60);
                      const secondes = row.duration % 60;
                      // On formate la durée du titre
                      const duration =
                        secondes < 10
                          ? minutes + ":0" + secondes
                          : minutes + ":" + secondes;

                      return (
                        <tr key={index}
                          className="border-b transition duration-300 ease-in-out
                            hover:bg-gradient-to-b from-green_top to-transparent"
                          onMouseEnter={() => setIsHover(index)}
                          onMouseLeave={() => setIsHover(-1)}
                        >
                          <td className="whitespace-nowarp px-6 py-4 font-medium m-1">
                            {/* On utilise isHover pour afficher le boutton play */}
                            {isHover !== index && `#${index + 1}`}
                            {isHover === index && (
                              <BsFillPlayCircleFill size={16} />
                            )}
                          </td>

                          <td className="whitespace-nowarp px-6 py-4 font-medium m-1">{row.title}</td>
                          <td className="whitespace-nowarp px-6 py-4 font-medium m-1">{duration}</td>
                        </tr>
                      );
                    })
                  : "pas de titre pour cet album"}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListAlbumSong;
