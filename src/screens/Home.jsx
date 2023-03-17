import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchAlbums} from '../redux/album/albumSlice'
import {selectAlbumsData} from '../redux/album/albumSelector'
import Loader from '../components/Loader'
import AlbumCard from '../components/AlbumCard'



const Home = () => {

    //constant qui récupère le hook de react-redux
    const dispatch = useDispatch();
    // on utilise le hook useEffect pour "dispatcher" lors du montage du composant
    useEffect(() => {
      dispatch(fetchAlbums())


    
    }, [dispatch])//Dans l'update on rappelle dispatch pour mettre à jour les infos

    const {albums, loading} = useSelector(selectAlbumsData)

    const dataAlbum = albums['hydra:member']

    console.log('ALBUM', albums['hydra:member'])
    
    
  return (
    loading ? <Loader/> : 
    <div className='flex flex-col'>
        <h2 className='font-bold text-3x1 text-white text-left mt-4 mb-10'>
            Tous les albums
        </h2>
        <div className='flex flex-wrap justify-center gap-8'>
            {/* on va mapper sur dataAlbum dès que les infos sont chargées */}
            {dataAlbum && dataAlbum.map((data, index) => {

                return (
                    <AlbumCard
                    key={index}

                    data={data}

                    />
                )


})}
            

        </div>
        </div>
        
  )
}

export default Home