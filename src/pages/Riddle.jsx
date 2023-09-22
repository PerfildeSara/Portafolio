import { useState } from "react";
import '../styles/Riddle.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear  } from '@fortawesome/free-solid-svg-icons';


const Riddle = () => {
    const [riddle, setRiddle] = useState(false);
    const [clean, setClean] = useState(false);

    const handleOnChange = (event) => {
        const selectedOption = event.target.value;
        const isLie = selectedOption === "opcion3";
        setRiddle(!isLie);
        setClean(true); // Establecer clean en true cuando se selecciona cualquier opción
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Formulario enviado");
    };

    const handleReset = () => {
        document.getElementById("miFormulario").reset();
        setRiddle(false);
        setClean(false); // Establecer clean en false al limpiar el formulario
    };

    return (
        <div className="riddle_page">
            <h1>In progress</h1>
            <FontAwesomeIcon className="icon" icon={faGear} spin />
            
           
        </div>
    );
}

export default Riddle;
