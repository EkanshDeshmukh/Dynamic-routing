import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../components/Home'
import User from '../components/User'
import About from '../components/About'



const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/User" element={<User />} />
            </Routes>
        </>
    );
};

export default Routing;
