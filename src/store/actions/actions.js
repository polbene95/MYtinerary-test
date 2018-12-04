
export const loading = () => {
    return {
        type: 'LOADING',
    }
}
export const getCitiesData = (cities) => {
    console.log('action asnc')
    return {
        type: "GET_CITIES",
        cities: cities
    }
}

export const fetchCitiesData = () => {
    console.log('action')
    return (dispatch) => {
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
            dispatch(getCitiesData(json))
        })
        .catch(e => console.log(e))
    }
}
