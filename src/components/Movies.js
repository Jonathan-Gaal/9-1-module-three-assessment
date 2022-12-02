import { useState, useContext, useEffect } from 'react';
import { GhibliContext } from '../context/ghibliContext';
const Movies = ({ choice }) => {
  //You are now pulling state and a reusable function from the context which means you only have one data state for every component
  const { data, makeChoice } = useContext(GhibliContext);
  //it is good practice to keep state that is only used in one component inside that component only
  const [filmInfo, setFilmInfo] = useState([]);

  useEffect(() => {
    makeChoice(choice);
  }, []);

  const handleChange = (e) => {
    const choice = e.target.value;
    const foundFilm = data.find((film) => film.id === choice);
    setFilmInfo(foundFilm || []);
  };

  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <select className="movies-select" onChange={handleChange}>
        <option value=""></option>
        {data?.map((film) => (
          <option key={film.id} value={film.id}>
            {film.title}
          </option>
        ))}
      </select>
      <hr />

      {filmInfo.length !== 0 ? (
        <div className="film-info">
          <h2>{filmInfo.title}</h2>
          <p>
            <strong>Release Date:</strong>
            {filmInfo.release_date}
          </p>
          <p>
            <strong>Description:</strong>
            {filmInfo.description}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Movies;
