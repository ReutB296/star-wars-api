import './style.css';
import React, { useContext, useState } from 'react';
import { FilmsContext } from '../../context/FilmsContext';
import {
    Link,
} from "react-router-dom";
import Lightsaber from '../lightsaber';


export default function TOC (){
    const {films} = useContext(FilmsContext);
    const [isClicked, setIsClicked] = useState(false);
  

    return(
        <div className="TOC_container">
            <button id="hamburger" onClick={() => setIsClicked(!isClicked) }></button>
            <div className={isClicked ? "view" : ""} >
                {
                    films.length > 0 ?

                    films.map((film, index) => {return (
                        <Link key={index} to={`/${film.title}`}>
                            <div key={index}>{film.title}</div>
                        </Link>
                    ) })
                    :
                    <h3 className="loading">Loading...</h3>
                }
            </div>

            <Lightsaber/>

        </div>
    )
}