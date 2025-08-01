import './Footer.css'
import github from '@/assets/images/github.webp'
import linkedin from '@/assets/images/linkedin.webp'

function Footer() {
    return (
        <footer className='footer'>
            <a href="#" className="button">CV</a>
            <div className='footer__social'>
                <a href="https://github.com/Antony35"><img src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/antony-huart/"><img src={linkedin} alt="linkedin" /></a>
            </div>
            </footer>
    )
}

export default Footer