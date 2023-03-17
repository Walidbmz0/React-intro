import {AiOutlineHome,AiOutlineSearch,AiOutlineAppstoreAdd,} from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { apiRoot } from "./apiConstant";
//On construit 2 tableaux avec les données pour la navbar
// Le 1er pour la gestion des albums
export const dataAlbumNav = [
  { title: "Accueil", path: "/", icon: AiOutlineHome },
  { title: "Rechercher", path: "/Search", icon: AiOutlineSearch },
  { title: "Bibliothéque", path: "/Library", icon: AiOutlineAppstoreAdd },
];

//Le 2ème pour les options utilisateur
export const dataUserNav = [
  { title: "Créer une playlist", path: "/add-playlist", icon: BiLibrary },
  { title: "Album likés", path: "/wishlist", icon: MdFavoriteBorder },
];

//On récupère le logo d'appli
export const imgLogo = `${apiRoot}/images/logo1.png`;
