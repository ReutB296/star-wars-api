import './style.css';
import React, { useContext } from 'react';
import { FilmsContext } from '../../context/FilmsContext';
import { Spinner } from 'react-bootstrap';
import {
    Link,
} from "react-router-dom";


export default function TOC (){
    const {films} = useContext(FilmsContext);
  

    return(
        <div className="TOC_container">
            {
                films.length > 0 ?

                films.map((film, index) => {return (
                    <Link key={index} to={`/${film.title}`}>
                         <div key={index}>{film.title}</div>
                    </Link>
                 ) })
                :
                <Spinner animation="border" role="status"></Spinner>
            }

        <section className="the-demo">
                <div className="example-item">
                    <div className="lightsaber">
                        <label htmlFor="yoda-example"></label>
                        <input type="checkbox" id="yoda-example" defaultChecked={true}/>
                        <div className="switch"></div>
                        <div className="plasma yoda"></div>
                    </div>
                </div>
	    </section>


        </div>
    )
}