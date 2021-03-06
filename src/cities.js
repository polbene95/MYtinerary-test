import React from 'react';
import { connect } from 'react-redux';
import * as  actionCreator  from './store/actions/actions';

class CitiesList extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            searchValue: "",
        }
    }
    render() {
 
        return(
        <React.Fragment>
        <input value={this.state.searchValue} onChange={ e => this.changeSearchValue(e.target.value)}></input>
        <button> Click me </button>
        <div className="cityList">
            {this.filterCities().map(city => this.createCityNode({name: city.name, src: city.src}))}
        </div>
        </React.Fragment>
        )
        
        
    }
    changeSearchValue(value) {
        this.setState({searchValue:value})
        console.log(this.state.searchValue)
    }
    filterCities() {
        return this.props.cities.filter(city => this.state.searchValue === "" || city.name.toLowerCase().indexOf(this.state.searchValue) !== -1 || city.country.toLowerCase().indexOf(this.state.searchValue) !== -1)
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