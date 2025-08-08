import './Journey.css'
import fourtyTwo from '@/assets/images/42.png'
import bulb from '@/assets/images/bulb.png'
import computer from '@/assets/images/computer.png'
import copy from '@/assets/images/copy.png'
import key from '@/assets/images/key.png'
import plane from '@/assets/images/plane.png'
import JourneyStep from '@/components/JourneyStep/JourneyStep'

function Journey () {
    return (
        <section className='journey'>
            <h2>Mon parcours</h2>
            <div className='journey__container'>
                <JourneyStep img={bulb} alt="bulb" name="Electricien" date="2010"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.." 
                />
                <JourneyStep img={fourtyTwo} alt="fourtyTwo" name="École 42" date="2016"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.." 
                />
                <JourneyStep img={key} alt="key" name="Responsable Maintenance" date="2017"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.." 
                />
                <JourneyStep img={plane} alt="plane" name="Voyage" date="2020"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.." 
                />
                <JourneyStep img={computer} alt="computer" name="Développeur web" date="2023"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.." 
                />
                <JourneyStep img={copy} alt="copy" name="Concepteur d'application" date="2024"
                description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.." 
                />
            </div>
        </section>
    )
}

export default Journey