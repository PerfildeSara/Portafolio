import { Routes, Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMobileScreen, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/ContactMe.css'


const ContactMe = () => {
    const contacts = [
        {
            icon: <FontAwesomeIcon icon={faMobileScreen} />,
            name:'+57 3123685048',
            link:null
        },
        {
            icon: <FontAwesomeIcon icon={faEnvelope} />,
            name:'saraalvaradoderecho@gmail.com',
            link:null
        },
        {
            icon: <FontAwesomeIcon icon={faGlobe} />,
            name:'Colombia',
            link:null
        },
        {
            icon: <FontAwesomeIcon icon={faLinkedin} />,
            name:'LinkedIn',
            link:'https://www.linkedin.com/in/saraalvaradoduran/'
        },
        {
            icon: <FontAwesomeIcon icon={faGithub} />,
            name:'Github',
            link:'https://github.com/perfildesara'
        }
    ]
    let mappingContacts = contacts.map((contact, index) => (
        <a key={index}  href={contact.link} target='_blank'><li key={index} type='none'><h2 className="icon">{contact.icon}</h2><h2>{contact.name}</h2></li></a>
    ));
    return(
        <div className="contactme"> 
            <h1>Please don't hesitate to say hi!</h1>
            <ul>
                {mappingContacts}
            </ul>
        </div>
    );
}
export default ContactMe