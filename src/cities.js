import React from 'react';



class CitiesList extends React.Component { 

    constructor(props) {
        super(props);
        this.getCitiesList();
        this.state = {
            data: [],
        }
    }
    render() {
        return(<div></div>)
    }
    getCitiesList() {
        fetch("/api/city", {
            method: "GET",
            mode: "no-cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        .then(r => r.json())
        .then(json => {
            CitiesList.setState({data: json});
            console.log(json)
        })
        .catch(e => console.log(e))
    }
}

export default CitiesList;