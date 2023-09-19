
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import  '../styles/Footer.css'


const Footer = () => {
    return(
        <div className="footer"> 
            <h1>My socials</h1>
            <ul>
                <Link to="https://www.linkedin.com/in/saraalvaradoduran/"  target="_blank"> <FontAwesomeIcon icon={faLinkedin} /></Link>
                <Link to="https://github.com/perfildesara" target="_blank"> <FontAwesomeIcon icon={faGithub} /></Link>
                <Link to="https://www.instagram.com/perfildesara/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
            </ul>
        </div>
    );
}
export default Footer