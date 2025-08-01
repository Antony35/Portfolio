import './Project.css'

interface ProjectProps {
    name: string,
    image: string
}

function Project ({name, image}: ProjectProps) {
    return (
        <article className="project">
            <h3>{name}</h3>
            <img src={image} alt="project" />
        </article>
    )
}

export default Project
