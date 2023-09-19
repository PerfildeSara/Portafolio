import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava,faJs, faReact,faDatabase, faGithub, faFigma, faHtml5, faSass, faCss3  } from 'react-share'; 


const Skill = () => {
    const skills =[
        {
            icon:<FontAwesomeIcon icon={faJava} />,
            name: "Java"
            },
        {
            icon:<FontAwesomeIcon icon={faJs} />,
            name: "Javascript"
        },
        {
            icon:<FontAwesomeIcon icon={faReact} />,
            name: "React.js"
        },
        {
            icon:<FontAwesomeIcon icon={faDatabase} />,
            name: "Mysql"
        },
        {
            icon:<FontAwesomeIcon icon={faGithub} />,
            name: "Github"
        },
        
        {
            icon:<FontAwesomeIcon icon={faHtml5} />,
            name: "HTML5"
        },       
        {
            icon:<FontAwesomeIcon icon={faSass} />,
            name: "Sass"
        },
        {
            icon:<FontAwesomeIcon icon={faCss3} />,
            name: "Css"
        },
        {
            icon:<FontAwesomeIcon icon={faFigma} />,
            name: "Figma"
        },
        {
            icon:<FontAwesomeIcon icon={faHtml5} />,
            name: "HTML5"
        }       
   ]
   let mappingSkills = skills.map((skill, index) => (
        <li>
            <div key={index}>{skill.icon}</div>
            <div key={index}>{skill.name}</div>
        </li>
        )
    );
    
    return(
        <div>
            <div>My skills</div>
            <ul>{mappingSkills}</ul>
        </div>
    )
}
export default Skill