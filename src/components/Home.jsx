import dicesImg from '../assets/dices.png'
import {NavLink} from 'react-router-dom';

const Home = () => {

  return (
    <div className="homeContainer">
        <div className="homeImage">
            <img src={dicesImg} alt="dices" />
        </div>
        <div className="homeInfo">
            <h1>DICE GAME</h1>
            <div className="playBtn">
                <NavLink to="/gamepage"><button>Play Now</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Home