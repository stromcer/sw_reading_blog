import React, {createContext, useContext, useState,useEffect} from 'react';

import { getCharacters ,getVehicles ,getPlanets } from './config';
//Creamos el contexto
const Store = createContext();
//ZONA TEMPORAL (ESTAS FUNCIONES ME LAS LLEVARE A OTRO ARCHIVO)




export const StoreProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [charListUrl, setCharListUrl] = useState("https://www.swapi.tech/api/people");
    const [vehicleListUrl, setVehicleListUrl] = useState("https://www.swapi.tech/api/vehicles");
    const [planetListUrl, setPlanetListUrl] = useState("https://www.swapi.tech/api/planets")

    useEffect(()=>{
        getCharacters(charListUrl)
        .then( res => setCharacters(res) )        
        .catch( err => console.log(err) )        
    }
    ,[charListUrl])


    useEffect(()=>{
        getVehicles(vehicleListUrl)
        .then( res => setVehicles(res) )
        .catch( err => console.log(err) )

    },[vehicleListUrl])


    useEffect(()=>{
        getPlanets(planetListUrl)
        .then( res => setPlanets(res) )
        .catch( err => console.log(err) )

    },[planetListUrl])


    return(
        <Store.Provider value={{characters, vehicles, planets, setCharListUrl, setPlanetListUrl, setVehicleListUrl}}>
            {children}
        </Store.Provider>
    )
}

const useStore = () => useContext(Store)


export default useStore;