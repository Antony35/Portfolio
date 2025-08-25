import './App.css'
import Loader from '@/components/Loading/Loader'
import Home from '@/containers/Home/Home'
import { useState } from 'react'

function App() {

  const [showLoader, setShowLoader] = useState(true);
  const [transition, setTransition] = useState(false);

  const isLoad = () => {
    setTransition(true)
    setTimeout(() => {
      setShowLoader(false)
    }, 400)
  }

  return (
    <div className={(showLoader) ? 'app-container' : ''}>
      {showLoader && (
         <Loader isLoad={isLoad} fadeOut={transition} />
      )}
      <div className={transition ? 'fade-in' : ''}>
        <Home />
      </div>
    </div>
  )
}

export default App