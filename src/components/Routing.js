import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Wish from '../components/WishlistCompo/Wish';
import Track from '../components/TrackCompo/Track';
import Profile from '../components/ProfileCompo/Profile';
import Cart from '../components/CartCompo/Cart';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/track" element={<Track />} />
            <Route path="/wish" element={<Wish />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
};

export default Routing;
