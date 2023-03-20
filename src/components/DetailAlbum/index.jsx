
import React from 'react'
import HeaderDetail from './HeaderDetail'
import ListAlbumSong from './ListAlbumSong'
import ToolBarDetail from './ToolBarDetail'


const DetailAlbum = ({dataAlbum}) => {
  console.log(dataAlbum)
  return (
    <>
   <HeaderDetail dataAlbum={dataAlbum}/>
   <ToolBarDetail dataAlbum={dataAlbum}/>
   <ListAlbumSong dataAlbum={dataAlbum}/>
   

   </>
  )
}

export default DetailAlbum