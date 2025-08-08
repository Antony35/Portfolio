import './JourneyStep.css'

interface JourneyStepProps {
    img: string,
    alt: string
    name: string,
    date: string
    description: string,
}

function JourneyStep ({img, alt, name, date, description }: JourneyStepProps) {

    return (
        <div className='journey-step__container'>
            <div className='ourney-step__container_text'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className='journey-step_img_and_date'>
                <img src={img} alt={alt} />
                <h2>{date}</h2>
            </div>
        </div>
    )
}

export default JourneyStep
