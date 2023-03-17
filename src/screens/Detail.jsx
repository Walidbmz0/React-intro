import React from 'react'
import { useLocation } from 'react-router-dom';
import DetailAlbum from '../components/DetailAlbum';

const Detail = () => {

  // On appelle le hook de react-rooter-dom

  const location = useLocation();
  // On récupère les DATAS depuis la route
  const data = location.state.params;
  return (

    <DetailAlbum dataAlbum={data}/>//On passe les datas à index.jsx de DetailAlbum
  )
}

export default Detail