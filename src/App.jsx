import { Route, Routes } from 'react-router-dom'

import React from 'react'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import StirFries from './pages/StirFries/StirFries'
import Salad from './pages/Salad/Salad'
import Soup from './pages/Soup/Soup'
import Grilled from './pages/Grilled/Grilled'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" Component={Home}/>.
                <Route path="/About" Component={About}/>.
                <Route path="/StirFries" Component={StirFries}/>.
                <Route path="/Salad" Component={Salad}/>.
                <Route path="/Soup" Component={Soup}/>.
                <Route path="/Grilled" Component={Grilled}/>.
            </Routes>
            <Footer/> 
        </div>
    );
}

export default App