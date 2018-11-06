import React from 'react';
import ReactDOM from 'react-dom';
import './index2.css';
import logo from './images/MYtineraryLogo.png';
import start from './images/circled-right-2.png';
import ProfileHeader from './header.js';
import DynamicFooter from './footer.js';


class HomePage extends React.Component {
    render () {
        return (
        <div className="home-div">
            <div className="header">
                <div className="top-header">
                    <ProfileHeader />
                    <div className="login-form dropdown">
                        <div className="dropdown-icon"></div>
                        <div className="dropdown-content">
                            <a href="#root">Log in</a>
                            <a href="#root">Create Account</a>
                        </div>
                    </div>
                </div>
                <div className="bot-header">
                    <img className="logo-img" src={logo} alt="myitinerary logo" mailto=""></img>
                </div>
            </div>
            <div className="section">
                <p>Find your preftect trip, desinged by insiders who know and love their cities.</p>
                <img className="button-img" src={start} alt="circled-right button"></img>
            </div>
            <DynamicFooter />
        </div>
        )
    }
}

ReactDOM.render(<HomePage />, document.getElementById("root"));