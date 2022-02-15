import react from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';
import Header from "./Header";
import Homepage from "./components/Homepage/Homepage";
import Login from './components/Login/Login.js';
import Checkout from './components/Checkout/Checkout.js';

const App = ()=>{
    return(
        <Router>
           
            <div className='app'>
                <Routes>
                    <Route exact path='/' element={<Homepage/>}/>
                    <Route exact path='/checkout' element={<Checkout/>}/>
                    <Route exact path='/login' element={<Login/>}/>
                </Routes>
            </div>
           
        </Router>
    )
}

export default App;