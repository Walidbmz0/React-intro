import React from 'react'
import { MdDangerous } from 'react-icons/md';
import { useRouteError } from 'react-router-dom'


const ErrorPage = () => {
    // On appelle le hook de react router pour gerer les root
const error = useRouteError();
  return (
    <div id='error-page' className='flex flex-col items-center justify-center h-screen bg-black text-white'>
        <MdDangerous style={{fontSize: 300, color: 'red'}}/>
        <h1>Quelles est cette mélodie ?!</h1>
        <p>Ah y'en a pas</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        <a href ='/' className='text-green_06 hover:text-green'> Retour à l'accueil</a>
        
        </div>
  )
}

export default ErrorPage