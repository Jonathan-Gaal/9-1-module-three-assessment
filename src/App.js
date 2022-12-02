import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import People from './components/People';
import Locations from './components/Locations';
import Movies from './components/Movies';
import GhibliProvider from './context/ghibliContext';

const App = () => {
  return (
    // Wrap my whole application with my Ghibli Context
    <GhibliProvider>
      /* Beleive it or not, Browser Router uses context */
      <Router>
        <div className="app">
          <Nav />
        </div>
        {/* passing the choice prop in each route so that I can use in the fetch call */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People choice="people" />} />
          <Route path="/locations" element={<Locations choice="locations" />} />
          <Route path="/movies" element={<Movies choice="films" />} />
        </Routes>
      </Router>
    </GhibliProvider>
  );
};

export default App;
