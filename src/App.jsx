import './App.css'
import ScrollToTopButton from './components/ScrollToTopButton'
import Homepage from './pages/Homepage'
import NeonCursor from './utils/CustomCursor'


function App() {

  return (
    <div className='bg-[#FBFBFBCC] overflow-hidde'>
      <NeonCursor />
      <Homepage />
      <ScrollToTopButton />
    </div>
  )
}

export default App
