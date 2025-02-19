import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";
import AboutUs from "./Pages/AboutUs/AboutUs";

import Error404 from "./Pages/Error404/Error404";

function App(){
    return(
    <Router>
        <Routes>
            <Route path="/" element={<Homepage/>}/>

            <Route path="/nosotros/" element={<AboutUs/>}/>

            <Route path="*" element={<Navigate to="/404"/>}/>
            <Route path="/404" element={<Error404/>}/>
        </Routes>
    </Router>
    );
}

export default App;
