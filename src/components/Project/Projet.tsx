import '../Embla/css/embla.css'
import './Project.css'

interface ProjectProps {
    index: number,
    name: string,
    image: string,
    selectedIndex: number
}

function Project ({index, name, image, selectedIndex}: ProjectProps) {

    return (
        <article className="embla__slide">
            <img className='project__image' src={image} alt="project" />
            <h3 className={selectedIndex === index ? 'project__name' : 'project__name--none'}>{name}</h3>
        </article>
    )
}

export default Project
