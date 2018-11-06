import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './images/MYtineraryLogo.png';
import start from './images/circled-right-2.png'


class HomePage extends React.Component {
    render () {
        return (
        <div className="home-div">
            <div className="header">
                <img className="logo-img" src={logo} alt="myitinerary logo" mailto=""></img>
            </div>
            <div className="section">
                <p>Find your preftect trip, desinged by insiders who know and love their cities.</p>
                <img className="button-img" src={start} alt="circled-right button"></img>
            </div>
            <div className="footer">
                <p>Want to build your own MYitinerary</p>
                <div className="login-form">
                    <a href="#root">Log in</a>
                    <a href="#root">Create Account</a>
                </div>
            </div>
        </div>
        )
    }
}


//eactDOM.render(<HomePage />, document.getElementById("root"));