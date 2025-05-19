import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Homepage from '../pages/Homepage'
import GetToKnowUs from '../pages/GetToKnowUs'
import InnnovationExpo from '../pages/InnnovationExpo'
import Jukebox from '../pages/Jukebox'
import CoWorkingSpace from '../pages/CoWorkingSpace'
import Bootcamp from '../pages/Bootcamp'
import { ToastContainer } from 'react-toastify'
import Terms from '../pages/Terms'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const AppRoutes = () => {
  
  return (
    <div>
        <ScrollToTop />
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/get-to-know-us' element={<GetToKnowUs />} />
            <Route path='/innovation-expo' element={<InnnovationExpo />} />
            <Route path='/jukebox' element={<Jukebox />} />
            <Route path='/co-working-space' element={<CoWorkingSpace />} />
            <Route path='/bootcamps-and-training' element={<Bootcamp />} />
            <Route path='/terms-of-service' element={<Terms />} />
        </Routes>
        <ToastContainer />
    </div>
  )
}

export default AppRoutes