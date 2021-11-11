import React, { useEffect, useState } from 'react';
import axios from 'axios';


export const FilmsContext = React.createContext({
    films: [],
  
});


export default function FilmsProvider({ children }) {
    const [films, setFilms] = useState([]);

    useEffect(() => {  
        axios.get('https://swapi.dev/api/films')
        .then(response => {
            const ArrayWithImg= response.data.results.map(film => ({...film, img:`/${film.episode_id}.jpg`}));
            setFilms(ArrayWithImg);
        }, error => {
          console.log(error);
        });
    }, []);

    console.log("films", films)
    
    return (
        <FilmsContext.Provider value={{
          films,
        }}>
          {children}
        </FilmsContext.Provider>
      );
}
    