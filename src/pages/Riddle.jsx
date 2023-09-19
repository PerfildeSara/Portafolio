import { useState } from "react";
import '../styles/Riddle.css';

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
            <h1>Two truths and a lie</h1>
            <form id="miFormulario" onSubmit={handleSubmit}>
                <input type="radio" id="opcion1" name="opcion" value="opcion1" onChange={handleOnChange} />
                <label>I love plants. I have 45 different plants in my house, and I love to see how they grow.</label>
                <br />
                <input type="radio" id="opcion2" name="opcion" value="opcion2" onChange={handleOnChange} />
                <label>I love The Sims 4, I really enjoy building houses and decorating them. I love all the modern and minimalist furniture.</label>
                <br />
                <input type="radio" id="opcion3" name="opcion" value="opcion3" onChange={handleOnChange} />
                <label>I prefer to go to the mountains on vacation rather than the beach. There's nothing like a good hot chocolate when you're freezing.</label>
                <br />
                
            </form>
            {clean && <button type="button" onClick={handleReset}>Clean</button>}
            {riddle !== false && (
                <p>{riddle ? "¡Has acertado!" : "Respuesta incorrecta."}</p>
            )}
        </div>
    );
}

export default Riddle;
