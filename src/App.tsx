import './App.css'
import Home from '@/containers/Home/Home'
import FollowingMouse from './components/Mouse/FollowingMouse'
import { useEffect, useState } from 'react'
import Loader from './components/Loading/Loader'

function App() {

  const [loading, setIsLoading] = useState(true)
  const [fade, setFade] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setFade(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }, 1000)
  }, [])

  return (
    <>
        <FollowingMouse />
        {loading ? <Loader fadeOut={fade} /> : <Home  fadeIn={fade} />}
    </>
  )
}

export default App