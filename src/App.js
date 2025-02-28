import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Homepage from "./Pages/Homepage/Homepage";

import Services from "./Pages/Services/Services";

import AboutUs from "./Pages/AboutUs/AboutUs";
import Machinery from "./Pages/AboutUs/Machinery/Machinery";

import Contact from "./Pages/Contact/Contact";

import Error404 from "./Pages/Error404/Error404";

function App(){
    return(
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>

                    <Route path="/nosotros/" element={<AboutUs/>}/>
                    <Route path="/maquinaria/" element={<Machinery/>}/>

                    <Route path="/servicios/" element={<Services/>}/>

                    <Route path="/contacto" element={<Contact/>}/>

                    <Route path="*" element={<Navigate to="/404"/>}/>
                    <Route path="/404" element={<Error404/>}/>
                </Routes>
            </Router>
        </HelmetProvider>
    );
}

export default App;
