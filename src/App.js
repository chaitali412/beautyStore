
import './App.css';
import Nav from './components/NavCompo/Nav';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wish from './components/WishlistCompo/Wish';
import Track from './components/TrackCompo/Track';
import Profile from './components/ProfileCompo/Profile';
import Cart from './components/CartCompo/Cart';

const App= ()=> {
  return (
    <Router>
            <Nav></Nav>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/track' element={<Track />} />
      <Route path='/wish' element={<Wish />} />
      <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
