import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import Homepage from '../pages/Homepage'
import GetToKnowUs from '../pages/GetToKnowUs'
import InnnovationExpo from '../pages/InnnovationExpo'
import Jukebox from '../pages/Jukebox'
import CoWorkingSpace from '../pages/CoWorkingSpace'
import Bootcamp from '../pages/Bootcamp'
import { ToastContainer } from 'react-toastify'
import Terms from '../pages/Terms'
import Contact from '../pages/Contact'
import BookNowPage from '../pages/BookNowPage'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import JukeboxUploads from '../pages/JukeboxUploads'
import usePageTracking from '../hooks/usePageTracking'
import ApplyCoworkingSolo from '../pages/ApplyCoworkingSolo'
import ApplyDigitalHq from '../pages/ApplyDigitalHq'
import ApplyTeamCatalyst from '../pages/ApplyTeamCatalyst'
import NotFound from '../pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const AppRoutes = () => {

  usePageTracking()

  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/get-to-know-us' element={<GetToKnowUs />} />
        <Route path='/innovation-expo' element={<InnnovationExpo />} />
        <Route path='/jukebox'>
          <Route index element={<Jukebox />} />
          <Route path='apply' element={<JukeboxUploads />} />
        </Route>
       

        <Route path="/co-working-space">
          <Route index element={<CoWorkingSpace />} />
          <Route path="solo-inovator/apply" element={<ApplyCoworkingSolo />} />
          <Route path="digital-hq/apply" element={<ApplyDigitalHq />} />
          <Route path="team-catalyst/apply" element={<ApplyTeamCatalyst />} />

          <Route path="solo-inovator" element={<Navigate to="apply" replace />} />
          <Route path="digital-hq" element={<Navigate to="apply" replace />} />
          <Route path="team-catalyst" element={<Navigate to="apply" replace />} />
        </Route>

        <Route path='/bootcamps-and-training' element={<Bootcamp />} />

        <Route path='/terms-of-service' element={<Terms />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <ToastContainer />
    </div>
  )
}

export default AppRoutes