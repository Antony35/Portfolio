import './Hero.css'
import avatar from '@/assets/images/avatar-min.webp'


function Hero () {
    return (
        <>
            <header className="hero-section">
                <div className="hero-section__text">
                    <h1>ANTONY<br />HUART</h1>
                    <h2>Concepteur<br />Développeur<br />D'application<br /></h2>
                </div>
                <img className='hero-section__image' src={avatar} alt="visage" />
            </header>
            <section className='introduction'>
                <p>Développeur web junior passionné, je travaille avec Symfony pour le backend et React pour le frontend.</p>
                <p>J'aime apprendre, relever des défis techniques et participer à la création d'applications web modernes et efficaces. </p>
                <p>Mon objectif : progresser chaque jour et contribuer à des projets concrets en équipe.</p>
            </section>
        </>
    )

}
        
export default Hero