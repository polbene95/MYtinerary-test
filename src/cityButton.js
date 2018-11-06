import React from 'react';

class CityButton extends React.Component {

    render () {
        return (
        <div className="city" style={{backgroundImage: 'url(' + this.props.background + ')'}}>
            <p>{this.props.name}</p>
        </div>
        )
    }
};

export default CityButton;