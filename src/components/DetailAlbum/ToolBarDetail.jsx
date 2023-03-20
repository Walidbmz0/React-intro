import React from 'react'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import {AiFillHeart, AiFillInfoCircle, AiOutlineHeart, AiOutlineInfoCircle} from 'react-icons/ai'
import { Collapse } from 'react-collapse'
import InfoAlbum from './InfoAlbum'


const ToolBarDetail = ({dataAlbum}) => {


const [isInList, setIsInList] = React.useState(false) //Todo récupérer la vrai valeur en bdd
    
    const toggleFavorite = () => {

        setIsInList(!isInList)
        
    }
    const [isCollapse, setIsCollapse] = React.useState(true) //Todo récupérer la vrai valeur en bdd
    const handleCollapseClick = () => {
        setIsCollapse(!isCollapse);
    }

  return (
    <>
    <div className='flex items-center ml-5'>

        {/* Bouton play */}
<div className='cursor-pointer mr-3'>

<BsFillPlayCircleFill size='60px' className='text-green'/>


    </div>

    <div className='cursor-pointer' onClick={()=> toggleFavorite()}>
        {isInList ?
         <AiFillHeart className='text-green m-3' style={{fontSize: '30px'}}/> 
         :
         <AiOutlineHeart className='text-green m-3' style={{fontSize: '30px'}}/>
         }


    </div>
    {/* bouton d'information */}
    <div className='cursor-pointer' onClick={handleCollapseClick}>
    {!isCollapse ?
         <AiFillInfoCircle className='text-green m-3' style={{fontSize: '30px'}}/> 
         :
         <AiOutlineInfoCircle className='text-green m-3' style={{fontSize: '30px'}}/>
         }
         </div>
    </div>

        {/* on va récuperer les infos du Collapse */}
        <div>
            <Collapse isOpened={!isCollapse}>
            
                {/* On importe le composant infoAlbum */}
                <InfoAlbum dataAlbum={dataAlbum}/>
                </Collapse>
                

        </div> 
        </>
    
  )
}

export default ToolBarDetail