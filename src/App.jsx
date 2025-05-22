import { BrowserRouter } from 'react-router'
import './App.css'
import ScrollToTopButton from './components/shared/ScrollToTopButton'
import Homepage from './pages/Homepage'
import NeonCursor from './utils/CustomCursor'
import AppRoutes from './components/AppRoutes'


function App() {

  return (
    <div className='bg-[#FBFBFB] overflow-hidde'>
      <BrowserRouter>
        {/* <NeonCursor /> */}
        <AppRoutes />
        <ScrollToTopButton />
      </BrowserRouter>
    </div>
  )
}

export default App
