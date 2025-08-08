import './Home.css'
import Hero from '@/containers/Hero/Hero'
import Projects from '@/containers/Projects/Projects'
import Footer from '@/containers/Footer/Footer'
import Journey from '../Journey/Journey'

function Home () {
    return (
        <>
            <Hero />
            <Journey />
            <Projects />
            <Footer />
        </>
    )
}

export default Home