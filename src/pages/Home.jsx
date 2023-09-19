import { Routes } from "react-router-dom"
import saraImg from '../../public/saraImg.png'
import '../styles/Home.css'


const Home = () => {
    return(
        <div className="home">
            <div className="title">
                <span >Hello, I am Sara Alvarado.</span><br />
                <span className="my_name">Certified Tech </span>
                <span  className="my_name">Developer</span>
            </div>
            <div className="sara_image">
                <img src={saraImg} alt="Sara's image" />
            </div>
        </div>
    )
}
export default Home