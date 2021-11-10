import './style.css';
import React, { useContext } from 'react';
import { FilmsContext } from '../../context/FilmsContext';
import {
    useParams,
} from "react-router-dom";
import { Spinner } from 'react-bootstrap';


export default function Film (){
    const {films} = useContext(FilmsContext);
    const { title } = useParams();
    const selectedIndex = films.findIndex(film => film.title === title);
    const selectedFilm = films[selectedIndex];


    return(
     <>
               { selectedFilm ? 
                    <div className="film_container">
                        <h1> {selectedFilm.title} </h1>
                        <h5>{selectedFilm.director}</h5>

                    </div>
                :
                <Spinner animation="border" role="status"></Spinner>

               }
     </>
    )
}