import './style.css';
import React, { useContext, useState, useEffect } from 'react';
import { FilmsContext } from '../../context/FilmsContext';
import {
    useParams,
} from "react-router-dom";


export default function Film (){

    const {films} = useContext(FilmsContext);
    const { title } = useParams();
    const [isColored, setIsColored] = useState(false);
    const [selectedFilm, setselectedFilm] = useState(null);
 

    const handleClick = () =>{
        setIsColored(!isColored);
    }

    useEffect(() =>{  
        if(isColored){ //add to localStorage and to favoritesList
            localStorage.setItem(selectedFilm?.episode_id, selectedFilm?.title);
        }else{  //remove 
            localStorage.removeItem(selectedFilm?.episode_id);
        } 
    }, [isColored, selectedFilm]);

    
    const heartColor =  isColored ?  '#f20089' : '#808080'  ;  //GRAY OR PINK

    useEffect(() =>{ 
        const selectedIndex = films.findIndex(film => film.title === title);
        setselectedFilm(films[selectedIndex]);
        setIsColored(localStorage.getItem(films[selectedIndex]?.episode_id) ? true : false)
    }, [films, title]); 



    return(
     <>
               { selectedFilm ? 
                    <div className="film_container">
                        <button className="AddToFavBttn" onClick={handleClick}> 
                            <svg height="24px" viewBox="0 0 24 24" width="24px" fill={heartColor}><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                        </button>
                        <h1> {selectedFilm.title} </h1>
                        <h5>{selectedFilm.director}</h5>
                        <div className="img_container">
                            <img src={selectedFilm.img}/>
                        </div>

                    </div>
                :
                <h1 className="headline">Loading...</h1>

               }
     </>
    )
}