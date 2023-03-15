// command : rafce
import React, { useEffect, useState } from 'react'
import Test from './components/Test'
    
    const App = () => {
    const [data3, setData3] = useState('toto3')
    useEffect(() => {
      setData3('toto4')
    }, [])
    console.log(data3)
    const params = {
      nom: 'toto',
      prenom: 'tutu'  }
    return (
      <Test data={params}
        data2={'toto2'}
      />)
  }
  export default App