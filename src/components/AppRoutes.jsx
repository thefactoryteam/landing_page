import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from '../pages/Homepage'
import GetToKnowUs from '../pages/GetToKnowUs'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/get-to-know-us' element={<GetToKnowUs />} />
        </Routes>
    </div>
  )
}

export default AppRoutes