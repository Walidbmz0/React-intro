import React from "react";
import { RiArticleLine } from "react-icons/ri";
import { FaCompactDisc } from "react-icons/fa";
import { GiMicrophone } from "react-icons/gi";
import { BsCalendar2Week } from "react-icons/bs";
import parse from "html-react-parser";
import InfoIconLabel from "./InfoIconLabel";

const InfoAlbum = ({ dataAlbum }) => {
  //Formatage de la date de sortie
  const date = new Date(dataAlbum.releaseDate);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const dateFormat = date.toLocaleDateString("fr-FR", options);
  //On crée une console de style pour les icones
  const styleIcon = { width: "25px", height: "25px" };

  return (
    <>
      <h2 className="text-xl my-5">Informations</h2>

      <div className="w-screen flex justify-start items-start bg-gradient-to-b from-transparent via-green_top pt-5 pb-10">
        {/* container de gauche */}
        <div
          className="flex items-start justify-start"
          style={{ width: "60%" }}
        >
          <div className="flex-col" style={{ maxWidth: "80%" }}>
            <div className="p-1 m-1 flex">
              <RiArticleLine className="mr-1" style={styleIcon} />
              <span className="font-bold mr-1">Biographie de l'artiste</span>
            </div>

            <div className="p-1 m-1 pb-5">
              {dataAlbum?.artist?.biography
                ? parse(dataAlbum.artist.biography)
                : "Pas de biographie pour cet artiste"}
            </div>
          </div>
        </div>
        {/* Container de droite */}

        {/* <div className="flex-col" style={{ minWidth: "20%" }}> */}
        {/* titre album */}
        {/* <div className="flex items-center p-1 m-1 pb-5">
            <FaCompactDisc className="mr-1" style={styleIcon} />
            <span className="font-bold mr-1">Album : {dataAlbum.title}
            
            </span>
          </div> */}
        <div className="flex-col">
          <InfoIconLabel
            icon={{ icon: FaCompactDisc }}
            label={"Album"}
            value={dataAlbum.title}
          />

          {/* nom d'artiste */}
          <InfoIconLabel
            icon={{ icon: GiMicrophone }}
            label={"Artiste"}
            value={dataAlbum.artist.name}
          />

          {/* date de sortie */}
          <InfoIconLabel
            icon={{ icon: BsCalendar2Week }}
            label={"Sortie le"}
            value={dateFormat}
          />
        </div>
      </div>
    </>
  );
};

export default InfoAlbum;
