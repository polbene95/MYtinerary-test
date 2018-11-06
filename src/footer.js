import React from 'react';
import CityButton from './cityButton.js'

import newYorkImg from './images/cities/new-york.jpg';
import amsterdamImg from './images/cities/amsterdam.jpg';
import barcelonaImg from './images/cities/barcelona.jpg';
import berlinImg from './images/cities/berlin.jpg';
import losAngelesImg from './images/cities/los-angeles.jpg';
import londonImg from './images/cities/london.jpg';
import parisImg from './images/cities/paris.jpg';
import romeImg from './images/cities/rome.jpg';
import buenosAiresImg from './images/cities/buenos-aires.jpg';
import athensImg from './images/cities/athens.jpg';


class DynamicFooter extends React.Component {
    constructor(props) {
        super(props);
        this.allCities =  [{
            name: "Barcelona",
            src: barcelonaImg,
        }, {
            name: "Amsterdam",
            src: amsterdamImg,
        }, {
            name: "Berlin",
            src: berlinImg,
        }, {
            name: "New York",
            src: newYorkImg
        }, {
            name: "Los Angeles",
            src:losAngelesImg,
        }, {
            name: "London",
            src: londonImg,
        }, {
            name: "Paris",
            src: parisImg,
        }, {
            name: "Rome",
            src: romeImg,
        }, {
            name: "Athens",
            src: athensImg,
        }, {
            name: "Buenos Aires",
            src: buenosAiresImg
        }];
        this.cities = [...this.allCities];
        this.state = {
            cityOne: this.getACity(),
            cityTwo: this.getACity(),
            cityThree: this.getACity(),
            cityFour: this.getACity()
        }
    }

    componentDidMount() {
        this.interval = setInterval(() =>this.changeTheCity(), 3000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    changeTheCity() {
        this.cities = [...this.allCities];
        this.setState(() => ({
            cityOne: this.getACity(),
            cityTwo: this.getACity(),
            cityThree: this.getACity(),
            cityFour: this.getACity()
        }))
    }
    getACity() {
        let cities = this.cities;
        let selectedCity = cities[Math.floor(Math.random()*cities.length)];
        let index = cities.indexOf(selectedCity);
        cities.splice(index,1);
        return selectedCity;
    }

    render () {
        return (
            <div className="footer">
                <p>Popular MYtineraries</p>
                <div className="popular-container">
                    <CityButton background={this.state.cityOne.src} name={this.state.cityOne.name} />
                    <CityButton background={this.state.cityTwo.src} name={this.state.cityTwo.name} />
                    <CityButton background={this.state.cityThree.src} name={this.state.cityThree.name} />
                    <CityButton background={this.state.cityFour.src} name={this.state.cityFour.name} />
                </div>
            </div>
        );
    }
};

export default DynamicFooter;