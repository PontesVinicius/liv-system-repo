import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from './Pages/Contact';
import Home from "./Pages/Home";

const RoutesIndex = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about-us' element={<About />} />
        </Routes>
    )
}

export default RoutesIndex