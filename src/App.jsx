// rafce
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

const App = () => {

  return (
    <div className='relative flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col bg-gradient-to-b from-[#1D1D1D] to-[#121212]'>
        <Topbar/>

        <div className='h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse'>
          <div className='flex-1 h-fit pb-40 text-white'>
            <Outlet/>
          </div>
          <div className='xl:sticky relative top-0 h-fit'>
            {/* //TODO ici le player */}

          </div>
        </div>
      </div>
    </div>

  )
}

export default App
