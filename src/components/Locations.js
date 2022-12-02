import { useState, useContext, useEffect } from 'react';
import { GhibliContext } from '../context/ghibliContext';

const Locations = ({ choice }) => {
  const { data, setData, makeChoice } = useContext(GhibliContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    makeChoice(choice);
  }, []);

  const showLocations = () => {
    setShow(!show);
  };

  const sortData = (btnE) => {
    const mapData = data.slice().sort((a, b) => (a[btnE] > b[btnE] ? 1 : -1));
    setData(mapData);
  };

  const handleClick = (e) => {
    let btnE = `${e.target.value}`;
    sortData(btnE);
  };

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <button onClick={showLocations}>
        {!show ? 'Show Locations' : 'Hide Locations'}
      </button>
      {show ? (
        <>
          {' '}
          <button value="name" onClick={handleClick}>
            Sort Locations by Name
          </button>
          <button value="climate" onClick={handleClick}>
            Sort Locations by Climate
          </button>
          <button value="terrain" onClick={handleClick}>
            Sort Locations by Terrain
          </button>
        </>
      ) : null}

      <hr />
      <ul>
        {show &&
          data &&
          data?.map((location) => (
            <li key={location.id}>
              <ul>
                <li>
                  <strong>Name: </strong>
                  {location.name}
                </li>
                <li>
                  <strong>Climate: </strong>
                  {location.climate}
                </li>
                <li>
                  <strong>Terrain: </strong>
                  {location.terrain}
                </li>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Locations;
