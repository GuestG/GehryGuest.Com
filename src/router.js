
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import Navbar from "./components/Navbar";
import Home from './components/Home';
import Rito from './components/Rito';
import LAFitness from "./components/LAFitness";
import Kiwi from "./components/Kiwi";
import AlgoAcademy from './components/AlgoAcademy';


export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AlgoAcademy" element={<AlgoAcademy />} />
                <Route path="/Rito" element={<Rito />} />
                <Route path="/LAFitness" element={<LAFitness />} />
                <Route path="/Kiwi" element={<Kiwi />} />
            </Routes>
        </BrowserRouter>
    );
}