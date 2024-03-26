import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../components/Home'
import User from '../components/User'
import About from '../components/About'
import UserDetail from '../components/UserDetail';



const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/user" element={<User />}>
                 <Route path='/user/:name' element={<UserDetail/>}></Route>
                </Route>
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
};

export default Routing;
