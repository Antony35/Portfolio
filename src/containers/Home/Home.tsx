import './Home.css'
import Hero from '@/containers/Hero/Hero'
import Projects from '@/containers/Projects/Projects'
import Footer from '@/containers/Footer/Footer'

function Home () {
    return (
        <>
            <Hero />
            <Projects />
            <Footer />
        </>
    )
}

export default Home