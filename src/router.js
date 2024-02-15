
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

import Navbar from "./components/Navbar";
import Home from './components/Home';
import Rito from './components/Rito';
import MoneyMentor from "./components/MoneyMentor";
import Techinterviews from './components/Techinterviews';
import Braphics from './components/Braphics';
import ThankYou from './components/ThankYou';


export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Techinterviews" element={<Techinterviews />} />
                <Route path="/Rito" element={<Rito />} />
                <Route path="/MoneyMentor" element={<MoneyMentor />} />
                <Route path="/Braphics" element={<Braphics />} />
                <Route path="/ThankYou" element={<ThankYou />} />
            </Routes>
        </BrowserRouter>
    );
}