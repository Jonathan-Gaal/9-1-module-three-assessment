import { createContext, useState } from 'react';

export const GhibliContext = createContext();

const GhibliProvider = (props) => {
  const [data, setData] = useState([]);

  const makeChoice = (c) => {
    fetch(`${c}.json`)
      .then((res) => res.json())
      .then((resJson) => setData(resJson || []))
      .catch((err) => {
        console.error(err);
      });
  };

  // the value prop below must be called 'value' and is the one attribute/prop of the Provider. It always takes an object. This is how you pass the data, functions etc to the the context object.
  return (
    <GhibliContext.Provider value={{ data, setData, makeChoice }}>
      {/* render whatever I put inside the opening and closing of this Provider */}
      {props.children}
    </GhibliContext.Provider>
  );
};
export default GhibliProvider;
