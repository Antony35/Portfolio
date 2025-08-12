import './Footer.css'
import github from '@/assets/images/github.webp'
import linkedin from '@/assets/images/linkedin.webp'
import email from '@/assets/images/email.webp'
import cv from '@/assets/images/CV.pdf'

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__decorative-element"></div>
            <div className="footer__decorative-element"></div>
            <div className="footer__decorative-element"></div>
            <div className="footer__decorative-element"></div>
            <h3>Découvrez Mon Parcours</h3>
            <a href={cv} className="button--cv">Télécharger Mon CV</a>
            <div className='footer__social'>
                <a href="mailto:antony.huart37@gmail.com"><img src={email} alt="email" /></a>
                <a href="https://github.com/Antony35"><img src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/antony-huart/"><img src={linkedin} alt="linkedin" /></a>
            </div>
            <p>&copy; 2025 - Huart Antony - Tous droits réservés</p>
            <p>&copy; header Designed by Freepik</p>
        </footer>
    )
}

export default Footer