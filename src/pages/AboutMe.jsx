import { Routes } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faHandshake, faLeaf, faScaleBalanced, faCalendarDays, faChalkboardUser  } from '@fortawesome/free-solid-svg-icons';
import {faJava,faJs,faReact,faGithub, faHtml5, faSass, faCss3, faFigma } from '@fortawesome/free-brands-svg-icons';

import '../styles/AboutMe.css'
import { useState } from "react";



const AboutMe = () => {
    const [hardSkillsButtom, setHardSkillsButtom] = useState(true);

    const handleHardSkillsChange = () => {
        setHardSkillsButtom(!hardSkillsButtom);
    }

    const [softSkillsButtom, setSoftSkillsButtom] = useState(true);
    
    const handleSoftSkillsChange  = () =>{
        setSoftSkillsButtom(!softSkillsButtom);
    }
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
            icon:<FontAwesomeIcon icon={faDatabase} />,
            name: "Mysql"
        },
        {
            icon:<FontAwesomeIcon icon={faReact} />,
            name: "React.js"
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
            icon: <FontAwesomeIcon icon={faFigma} />,
            name: "Figma"
        }
   ]
   let mappingSkills = skills.map((skill, index) => (
        <li key={index} type='none'> <span className="icon">{skill.icon}</span><span className="icon_name">{skill.name}</span></li>
        )
    );

    const softSkills = [
        {
            icon:<FontAwesomeIcon icon={faHandshake} />,
            name:"Collaboration and Teamwork"
        }, 
        {
            icon:<FontAwesomeIcon icon={faLeaf} />,
            name:"Adaptability"
        }, 
        {
            icon:<FontAwesomeIcon icon={faScaleBalanced} />,
            name: "Critical Thinking"
        }, 
        {
            icon:<FontAwesomeIcon icon={faCalendarDays} />,
            name: "Time Management"
        }, 
        {
            icon:<FontAwesomeIcon icon={faChalkboardUser} />,
            name: "Enthusiastic learner"
        }, 
    ]

    let mappingSoftSkills = softSkills.map((habilitie, index) => (
        <li key={index} type='none'> <span className="icon_softskills">{habilitie.icon}</span><span className="icon_name">{habilitie.name}</span></li>
        )
    );
    
    return(
        <div className="aboutMe">
             <h1 className="title">Technical and soft skills</h1>
                <div className="skills">
                    <div className="aboutMe_left"> 
                        <h1>About me</h1>
                        <h2>Hello! At one point in my life, what I was most passionate about was society and its issues, that's why I decided to become a lawyer and specialize in Human Rights. Over time, I made a change in my life and decided to study programming. I have loved this journey, being able to see what I can create through code. This process has been about learning to be patient and persevering, staying up late and facing frustrations, but it has certainly been rewarding, motivating, and empowering.</h2>
                    </div>
                    {hardSkillsButtom ? (
                            <div className="trueHardSkills">
                                <h1>Certified Tech Developer <h2>Digital House   |   Aug 2022 - Jul 2023</h2> </h1>
                                   
                                <ul>{mappingSkills}</ul>
                                <button onClick={handleHardSkillsChange}>See more</button> 
                            </div>) :
                            <div className="falseHardSkills"> 
                                <h2>I'm a certified developer with skills in Java and JavaScript programming, MySQL database management, dynamic UI development using React.js, and version control with GitHub. Additionally, I design attractive user experiences with HTML5 and CSS, enhance aesthetics with Sass, and use Figma for creating prototypes and layouts to ensure exceptional user experiences in every project I undertake</h2>  
                                <button onClick={handleHardSkillsChange}>Back</button>
                            </div>
                    }
                     
                    
                        {softSkillsButtom ? (
                            <div className="trueSoftSkills">
                               <h1>My soft Skills</h1>
                                <ul>{mappingSoftSkills}</ul>
                                <button onClick={handleSoftSkillsChange}>See more</button> 
                            </div>) :
                            <div className="falseSoftSkills">
                                <h2>My profession as a lawyer has taught me many soft skills. I consider myself a person with a strong sense of humanity, and I continuously strive to improve my interpersonal skills in all aspects of my life. I have learned that assertive communication builds bridges. Additionally, from my work and educational experiences, I've come to appreciate the importance of teamwork, the enrichment that interdisciplinary teams bring, and what it takes to achieve a common goal.</h2> 

                                 <h1>Postgraduate in Human Rights and International Humanitarian Law</h1><h3>Universidad de Antioquia  |  Jan 2019 - Jan 2020 </h3>
                                 <h1>Bachelor in Law </h1> <h3>Universidad de Antioquia  | Jun 2008 - Dec 2017 </h3>
                                
                                <button onClick={handleSoftSkillsChange}>Back</button>
                            </div>
                        }                 
                </div>
            
        </div>
    )
}
export default AboutMe