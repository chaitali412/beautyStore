import './App.css';
import Nav from './components/NavCompo/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './components/Routing';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routing /> {/* Use the routing component */}
    </Router>
  );
};

export default App;
