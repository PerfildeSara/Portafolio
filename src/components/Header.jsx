import { routes } from "../Routes"
import { useState } from "react";
import { Link, Routes } from 'react-router-dom';
import  '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark,faBars } from '@fortawesome/free-solid-svg-icons';

 



const Header = () => {
let [burgerMenu, setBurheMenu] = useState(true)
function handleMenu (){
    setBurheMenu(!burgerMenu);
}
function hanbleSelected (){
    setBurheMenu(!burgerMenu);
}

return(
    <div className="header">
        <div className="header_laptop">
            <div className="name">
                
                <div className="contact"><Link to={routes.home}>Sara Alvarado</Link></div>
            </div>
                <nav>
                    <ul>
                        <Link to={routes.home}>Home</Link>
                        <Link to={routes.aboutMe}>About me</Link>
                        <Link to={routes.experience}>Experience</Link>
                        <Link to={routes.projects}>Projects</Link>
                        <Link to={routes.twoThruthsAndOneLie}>Two thruths and a lie</Link>
                        <Link to={routes.contact}>Contact</Link>

                    </ul>
                </nav>
            </div>
            <div className="header_responsive">
                <div className="name_responsive">
                    
                    <div className="contact"><Link to={routes.home}>Sara Alvarado</Link></div>
                </div>
                {burgerMenu ? (
                    <div>
                    <button onClick={handleMenu}><FontAwesomeIcon icon={faBars} /></button>
                </div>) : ( 
                <div className="open_menu">
                    <button onClick={handleMenu}><FontAwesomeIcon icon={faXmark} /></button>
                    <nav>
                        <ul>
                            <Link to={routes.home} onClick={hanbleSelected}>Home</Link>
                            <Link to={routes.aboutMe} onClick={hanbleSelected}>About me</Link>
                            <Link to={routes.experience} onClick={hanbleSelected}>Experience</Link>
                            <Link to={routes.projects} onClick={hanbleSelected}>Projects</Link>
                            <Link to={routes.twoThruthsAndOneLie} onClick={hanbleSelected}>Two thruths and a lie</Link>
                            <Link to={routes.contact} onClick={hanbleSelected}>Contact</Link>
                        </ul>
                    </nav>
                </div>)}
                
            </div>
    </div>

)
}
export default Header