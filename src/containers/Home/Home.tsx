import './Home.css'
import Hero from '@/containers/Hero/Hero'
import Projects from '@/containers/Projects/Projects'
import Footer from '@/containers/Footer/Footer'

function Home () {
    return (
        <>
        <div className='wrapper'>
            <Hero />
            <Projects />
        </div>
            <Footer />
        </>
    )
}

export default Home