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
    const [planetListUrl, setPlanetListUrl] = useState("https://www.swapi.tech/api/planets");
    const [charDetailedList, setCharDetailedList] = useState([]);
    const [vehiclesDetailedList, setVehiclesDetailedList] = useState([]);
    const [planetsDetailedList, setPlanetsDetailedList] = useState([]);
    const [favoritesList, setFavoritesList] = useState([]);


    useEffect(()=>{
        getFetch(charListUrl)
        .then( res => {
            setCharacters(res)
            return getMultipleFetch(res.results)})
        .then( data =>  setCharDetailedList(data) )
        .catch( err => console.log(err) )        
    }
    ,[charListUrl]);


    useEffect(()=>{
        getFetch(vehicleListUrl)
        .then( res => {
            setVehicles(res)
            return getMultipleFetch(res.results)} )
        .then( data => setVehiclesDetailedList(data))
        .catch( err => console.log(err) )

    },[vehicleListUrl]);


    useEffect(()=>{
        getFetch(planetListUrl)
        .then( res => {
            setPlanets(res)
            return getMultipleFetch(res.results)} )
            .then( data => setPlanetsDetailedList(data))
        .catch( err => console.log(err) )

    },[planetListUrl]);

    const handleCharUrl = (url) => {
        setCharListUrl(url)
    };

    const handlePlanetUrl = (url) => {
        setPlanetListUrl(url)
    };

    const handleVehicleUrl = (url) => {
        setVehicleListUrl(url)
    };

    const handleNewFavorite = ( name, itemID, itemType ) => {
        setFavoritesList(prev => {
            const url = `/${itemType}/${itemID}`
            const newItem = {name, url};
            let newList = [...prev, newItem]
            return newList
        })
    }

    const handleDelFavorite = (name) => {
        setFavoritesList(prev => {
            const newList = prev.filter( item => item.name !== name)
            return newList
        })
    }


    const store = {characters ,vehicles ,planets ,charDetailedList, vehiclesDetailedList, planetsDetailedList ,favoritesList }

    const actions = {handleCharUrl, handlePlanetUrl, handleVehicleUrl, handleNewFavorite, handleDelFavorite}


    return(
        <Store.Provider value={{store , actions}}>
            {children}
        </Store.Provider>
    )};


const useStore = () => useContext(Store);


export default useStore;