import { Routes, Link } from "react-router-dom"
import '../styles/Experience.css'

const Experience = () => {
    return(
        <div className="experience_box">
         <div className="experience">
                <h1>My experience</h1>
                
                <p>
                    <h2>Front-End Developer Project</h2>
                    <h4><Link to="http://www.eventplace.s3-website.us-east-2.amazonaws.com/" target="_blank">Event Place </Link>  | Jun 2023 - Aug 2023</h4>
                    <h3>Central role in interactive web development project, collaborating with cross-functional team to achieve project goals. Expertise in Responsive Design, Front-End Development, and API Integration.</h3>
                </p>
                <br/>
                <br />
                
               <p>
                    <h2>Point Leader in the Pre-Registration Support Project with Migración Colombia.</h2>
                    <h4><Link to="https://opcionlegal.org/" target="_blank">Corporación Opción Legal </Link>| Jun 2021 - Feb 2022</h4>
                    <h3>Execute citizen service following Migración Colombia guidelines, providing support throughout the Pre-Registration and biometric registration stages for migrants.</h3>
                </p>
                <br />
                <br />
                <p>
                    <h2>Legal Advisor</h2>
                    <h4>Freelance | Sept 2020 - Jun 2021</h4>
                    <h3>Advice on inheritance, alimony, commercial leasing, co-ownership, dissolution and liquidation of companies.</h3>
                </p>
                <br />
                <br />
                <p>
                    <h2> Volunteer experience as Ad-Honorem Judgeship</h2>
                    <h4> <Link to="https://www.inpec.gov.co/institucion/organizacion/establecimientos-penitenciarios/regional-noreste/epmsc-medelin" target="_blank">INPEC Medellín</Link>  | Apr 2017 - Oct 2017</h4>
                    <h3>Issuance of inmate documentation related to criminal subrogation, alternative sentencing mechanisms and electronic surveillance. </h3>
                </p>
                <br />
            </div>
        </div>
    )
}
export default Experience