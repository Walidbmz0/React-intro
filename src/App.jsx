// command : rafce
import React, { useEffect, useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'




function App() {
  return (

    <div className='relative flex'>

      <Sidebar />
      <div className='flex-1 flex-col bg-gradient-to-b from-[#1D1D1D] to-[#121212]'>
        {/* ici on aura la future topbar */}
        <Topbar>
          
        </Topbar>

        <div className='h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar'>
          <div className='flex-1 h-fit pb-40 text-white'>
            <Outlet />

          </div>

          <div className='xl:sticky relative top-0 h-fit '>
          </div>
        </div>
      </div>


    </div>




  )
}

export default App