import { Routes, Link } from "react-router-dom"
import '../styles/Projects.css'
import EventPlace from '../../public/EventPlace.webp'

const Projects = () => {
    const projects =[
        {
            name:"Event Place",
            img:EventPlace ,
            text:"This website offers a platform for searching and booking venues for various events, such as weddings and corporate gatherings. It provides the convenience of finding the ideal venue or listing your own property for others to use. The platform provides four user types, each with their own unique functionalities and permissions: anonymous, basic, owner, and administrator. It utilizes a cloud-based database to ensure data security and accessibility, incorporates Java, MySQL, React.js, and AWS. Additionally, it has a responsive design, ensuring an optimal user experience across different devices and screen sizes."
        }
    ]
    let mappingProjects = projects.map((project, index) =>(
        <div key={index} className="project_card">
            <div className="project_card_left">
                <h1>{project.name}</h1>
                <img src={project.img} />
            </div>
            <h3>{project.text}</h3>
        </div>
    ) );
    return(
        <>
        <div className="page">
            <h1> My Projects</h1>
            <div className="projects">
                <h3>I am a junior front-end and back-end developer, and I am thrilled by the journey I've embarked on so far. I am highly motivated to continue advancing in this field, learning, and applying all the knowledge I've gained. My passion for programming drives me to constantly seek new challenges and opportunities for growth, and I am committed to honing my skills and making meaningful contributions in both front-end and back-end development. I am excited about the possibilities that lie ahead on this path of continuous learning and development.</h3>
                {mappingProjects} 
            </div>
        </div>
         </>
    )
}
export default Projects