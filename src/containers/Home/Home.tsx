import './Home.css'
import Hero from '@/containers/Hero/Hero'
import Projects from '@/containers/Projects/Projects'
import Footer from '@/containers/Footer/Footer'
import Journey from '../Journey/Journey'

interface IHome {
    fadeIn: boolean
}

function Home ({fadeIn}: IHome) {
 
    return (
        <div className={fadeIn ? 'home fade-in' : ''}>
            <Hero />
            <div>
                <Journey />
                <Projects />
                <Footer />
            </div>
            
        </div>
    )
}

export default Home