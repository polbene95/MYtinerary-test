import React from 'react';
import { connect } from 'react-redux';
import * as  actionCreator  from './store/actions/actions';

class CitiesList extends React.Component { 
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            allCities: this.props.cities,
            cities: this.props.cities,
            inputValue: ""
        }
    }
    render() {

        
        return(
            <div>
            <div><input value={this.state.inputValue} onChange={this.filterCitiesByInput}></input></div>
            <div className="cityList">
                {this.state.cities.map(city => this.createCityNode({name: city.name, src: city.src}))}
            </div>
        </div>
        )
        
        
    }



    filterCitiesByInput(ev) {
        this.updateInputValue(ev)
        let array = this.state.allCities.forEach(city => {
            if (city.nametoLowerCase().indexOf(this.state.inputValue) !== -1 || 
            city.country.toLowerCase().indexOf(this.state.inputValue) !== -1 ||
            this.state.inputValue === "") {
                return city;
            }
        })
        this.setState({
            cities: array
        })
    }

    updateInputValue(event) {
        this.setState({
          inputValue: event.target.value
        });
    }

    componentDidMount() {
        this.props.fetchData();
    }

    createCityNode(props) {
        return (
        <div style={{backgroundImage: 'url(' + props.src + ')'}}>
            <div>
                <div style={{backgroundImage: 'url(' + props.src + ')'}}>
                    <p className="city-name">{props.name}</p>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(actionCreator.fetchCitiesData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);