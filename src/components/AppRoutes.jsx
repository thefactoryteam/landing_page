import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from '../pages/Homepage'
import GetToKnowUs from '../pages/GetToKnowUs'
import InnnovationExpo from '../pages/InnnovationExpo'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/get-to-know-us' element={<GetToKnowUs />} />
            <Route path='/innovation-expo' element={<InnnovationExpo />} />
        </Routes>
    </div>
  )
}

export default AppRoutes