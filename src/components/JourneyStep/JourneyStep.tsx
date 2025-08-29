import './JourneyStep.css'

interface JourneyStepProps {
    img: string;
    alt: string;
    name: string;
    date: string;
    description: string;
    index: number;
    isIntersecting: boolean;
}
function JourneyStep ({img, alt, name, date, description, index, isIntersecting }: JourneyStepProps) {
    return (
        <div 
            className={`journey-step__container ${isIntersecting ? 'animate' : ''}`}
            style={{
                animationDelay: isIntersecting ? `${index * 0.3}s` : '0s'
            }}
        >
            <div className='journey-step__container_text'>
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
