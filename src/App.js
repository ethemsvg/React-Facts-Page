import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import reactlogo from './images/react-logo.png';
import ReactIconLarge from "./images/react-icon-large.png";
import MainBg from "./components/MainBg.js";



const root = ReactDOM.createRoot(document.getElementById('root'));



function MainPage(){
    return(
        <div class="container col-12 col-lg-6">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <div>
                    <div>
                        <Navbar/>
                    </div>
                    <div>
                        <MainBg/>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    )
}


export default function App(){
  root.render(  <MainPage/> , document.getElementById("root"))

}
