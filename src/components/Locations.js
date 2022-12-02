import { useState, useContext, useEffect } from 'react';
import { GhibliContext } from '../context/ghibliContext';

const Locations = ({ choice }) => {
  //You are now pulling state, the state setter and a reusable function from the context which means you only have one data state for every component
  const { data, setData, makeChoice } = useContext(GhibliContext);
  //it is good practice to keep state, like below, that is only used in one component inside that component only
  const [show, setShow] = useState(false);

  //This will allow the data to reset again when I hide the location
  //It will also call the function after the very first render since the initial state for show is false
  useEffect(() => {
    if (show === false) {
      makeChoice(choice);
    }
  }, [show]);

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
