
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import Navbar from "./components/Navbar";
import Home from './components/Home';

import Rito from './components/Rito';

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Rito" element={<Rito />} />
            </Routes>
        </BrowserRouter>
    );
}