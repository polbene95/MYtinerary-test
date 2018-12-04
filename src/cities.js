import React from 'react';
import { connect } from 'react-redux';
import * as  actionCreator  from './store/actions/actions';

class CitiesList extends React.Component { 
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {

        
        return(
        <div className="cityList">
            {this.props.cities.map(city => this.createCityNode({name: city.name, src: city.src}))}
        </div>
        )
        
        
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