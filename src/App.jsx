import { BrowserRouter } from 'react-router'
import './App.css'
import ScrollToTopButton from './components/ScrollToTopButton'
import Homepage from './pages/Homepage'
import NeonCursor from './utils/CustomCursor'
import AppRoutes from './components/AppRoutes'


function App() {

  return (
    <div className='bg-[#F4F4F4] overflow-hidde'>
      <BrowserRouter>
        <NeonCursor />
        <AppRoutes />
        <ScrollToTopButton />
      </BrowserRouter>
    </div>
  )
}

export default App
