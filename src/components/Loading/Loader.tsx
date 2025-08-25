import { useEffect } from 'react';
import './Loader.css'
import preloadImage from "../../utils/PreloadImage"
import avatar from '@/assets/images/avatar-min.webp'
import bgLeaf from '@/assets/images/bg-leaf.svg'

interface ILoaderProps {
  imagesToPreload?: string[];
  isLoad: () => void;
  fadeOut: boolean;
}

function Loader({
  imagesToPreload = [avatar, bgLeaf],
  isLoad,
  fadeOut
}: ILoaderProps) {

  useEffect(() => {
    const loadEverything = async (): Promise<void> => {
        try {
          const imagePromises = imagesToPreload.map(src => preloadImage(src))
        
          await Promise.all([
            new Promise<void>(resolve => setTimeout(resolve, 2000)),
            import('@/containers/Home/Home'),
            ...imagePromises
          ])

          isLoad()
          
        } catch (error) {
          console.error('Error when loading images', error)
        }
      }
      loadEverything()
  }, [isLoad, imagesToPreload])

  return (
    <div className={fadeOut ? 'loader fade-out' : 'loader'}>
      {/* Floating geometric shapes */}
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      {/* Main content */}
      <div className="loader-content">
        {/* Code-style animation */}
        <div className="code-loader">
          <div className="code-line">  status: 'loading...'</div>
        </div>

        {/* Geometric spinner */}
        <div className="geometric-loader"></div>

        {/* Progress bar */}
        <div className="progress-container">
          <div className="progress-bar"></div>
        </div>

        {/* Loading text */}
        <div className="loading-text">Loading Portfolio</div>
      </div>
    </div>
  );
}

export default Loader;