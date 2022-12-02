import { useState, useContext, useEffect } from 'react';
import { GhibliContext } from '../context/ghibliContext';
const Movies = ({ choice }) => {
  const { data, makeChoice } = useContext(GhibliContext);
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
