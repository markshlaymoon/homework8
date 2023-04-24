import React, { Component } from "react";
import {
    Route,
    Routes,
    NavLink,
    HashRouter
    } from "react-router-dom";
    import Plato from "./plato.js";
    import Aristotle from "./aristotle.js";
    import Pythagoras from "./pythagoras.js";

class Main extends Component {
    render() {
        return (
            <HashRouter>
    <div>
        <h1>Favorite Philosophers</h1>
            <ul className="header">
            <li><NavLink to="/">Plato</NavLink></li>
            <li><NavLink to="/Aristotle">Aristotle</NavLink></li>
            <li><NavLink to="/Pythagoras">Pythagoras</NavLink></li>
        </ul>
            <div className="content">
                <Routes>
                <Route path="/" element={<Plato />}/>
                <Route path="/Aristotle" element={<Aristotle />}/>
                <Route path="/Pythagoras" element={<Pythagoras />}/>
                </Routes>
        </div>
    </div>
    </HashRouter>
        );
    }
}

export default Main;