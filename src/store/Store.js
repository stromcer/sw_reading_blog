import React, {createContext, useContext, useState,useEffect} from 'react';

import { getFetch, getMultipleFetch } from './externalActions';



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
    const [charDetailedList, setCharDetailedList] = useState([])
    const [vehiclesDetailedList, setVehiclesDetailedList] = useState([])
    const [planetsDetailedList, setPlanetsDetailedList] = useState([])


    useEffect(()=>{
        getFetch(charListUrl)
        .then( res => {
            setCharacters(res)
            return getMultipleFetch(res.results)})
        .then( data =>  setCharDetailedList(data) )
        .catch( err => console.log(err) )        
    }
    ,[charListUrl, charDetailedList])


    useEffect(()=>{
        getFetch(vehicleListUrl)
        .then( res => {
            setVehicles(res)
            return getMultipleFetch(res.results)} )
        .then( data => setVehiclesDetailedList(data))
        .catch( err => console.log(err) )

    },[vehicleListUrl])


    useEffect(()=>{
        getFetch(planetListUrl)
        .then( res => {
            setPlanets(res)
            return getMultipleFetch(res.results)} )
            .then( data => setPlanetsDetailedList(data))
        .catch( err => console.log(err) )

    },[planetListUrl])


    const store = {characters ,vehicles ,planets ,charDetailedList, vehiclesDetailedList, planetsDetailedList }

    const actions = {setCharListUrl, setPlanetListUrl, setVehicleListUrl, setCharDetailedList}


    return(
        <Store.Provider value={{store ,actions ,characters, vehicles, planets, setCharListUrl, setPlanetListUrl, setVehicleListUrl}}>
            {children}
        </Store.Provider>
    )
}

const useStore = () => useContext(Store)


export default useStore;