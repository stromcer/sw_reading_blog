

export const getCharacters = (charListUrl) => {
    return fetch(charListUrl)
    .then( res => res.json() )
}


export const getVehicles = (vehicleListUrl) => {
    return fetch(vehicleListUrl)
    .then( res => res.json() )
}

export const getPlanets = (planetListUrl) => {
    return fetch(planetListUrl)
    .then( res => res.json() )
}
