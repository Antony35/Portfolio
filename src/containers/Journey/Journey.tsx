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
                description="Apprenti dans une équipe de 3. Plongé dans l'électricité et aux côtés des différents corps de métier de la construction."
                />
                <JourneyStep img={fourtyTwo} alt="fourtyTwo" name="École 42" date="2016"
                description="Mes première ligne de code en C++ lors de la piscine 2016. Une expérience intense qui m'a ouvert de nouvelles perspectives."
                />
                <JourneyStep img={key} alt="key" name="Responsable Maintenance" date="2017"
                description="Deux ans à Val Thorens. Organisation, réparations et dénichage de fournisseurs pour redonner vie à une résidence." 
                />
                <JourneyStep img={plane} alt="plane" name="Voyage" date="2020"
                description="Trois ans d'aventures en Nouvelle-Zélande et Australie via PVT. Puis cap sur le Vietnam, Cambodge et Laos avant le retour." 
                />
                <JourneyStep img={computer} alt="computer" name="Développeur web" date="2023"
                description="Reconversion réussie avec le CEFIM et TLD. Apprentissage des bases : HTML, CSS, JS, PHP et Figma." 
                />
                <JourneyStep img={copy} alt="copy" name="Concepteur d'application" date="2024"
                description="Direction sur Symfony, Vue et React. Gestion de projet et automatisation avec mise en place d'outils devOp." 
                />
            </div>
        </section>
    )
}

export default Journey