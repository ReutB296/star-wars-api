import './style.css';
import vader from '../../img/Vaderz.png';

export default function Home(){

   return(
       <div className="home_container">
               <div className="text_container">
                    <h1 className="head">Welcome to the galaxy of Star Wars movies </h1>
                    <p className="text">Choose a movie from the list to explore more</p>
               </div>
               <div className="img_container">
                   <img className="img_veder" src={vader} alt="veder"/>
               </div>
       </div>
   )
}