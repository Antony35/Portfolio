import './Projects.css'
import Project from '@/components/Project/Projet'
import tripShareImage from '@/assets/images/TripShare.webp'
import survivalGameImage from '@/assets/images/survival-react.webp'
import pcAgencyImage from '@/assets/images/pc-agency.webp'
import inProgressImage from '@/assets/images/under_construction.webp'

function Projects () {
    return (
        <section className='projects'>
            <h2>Mes projets</h2>
            <div className='projects__container'>
                <Project name="TripShare" image={tripShareImage}/>
                <Project name="Survival Game" image={survivalGameImage}/>
                <Project name="PC agency" image={pcAgencyImage}/>
                <Project name="In progress" image={inProgressImage}/>
            </div>
        </section>
    )
}

export default Projects