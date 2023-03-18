import React from "react";
import "../styles/components/card.css"
import useStore from "../store/Store";
import { Link } from "react-router-dom";

const VehicleCard = ({name, id, url}) => {
    
    const imgSrc = `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg `

    const {store, actions} = useStore();
    const {vehiclesDetailedList,favoritesList } = store;
    const {handleNewFavorite, handleDelFavorite} = actions;

    const [vehicleData] = vehiclesDetailedList ? vehiclesDetailedList.filter(item => item.result.uid === id) : null;

    const favorite = favoritesList.filter((item) => item.name === name).length ? true : false


    return(
    <div className="card" >
        <img src={imgSrc} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{name}</h5>
            <p className="card-text"><b>Manufacturer</b> : {vehicleData ? vehicleData.result.properties.manufacturer : "Loading"}</p>
            <p className="card-text"><b>Price (credits)</b> : {vehicleData ? vehicleData.result.properties.cost_in_credits : "Loading"}</p>
            <p className="card-text"><b>Passengers</b> : {vehicleData ? vehicleData.result.properties.passengers :"Loading"}</p>
            <div className="d-flex d-row justify-content-between">
                <Link to={`/vehicledetails/${id}`} className="btn btn-primary">Learn More...</Link>
                <button className={favorite ? "btn btn-danger":"btn btn-secondary" }  onClick={() => !favorite ? handleNewFavorite(name,id,"vehicledetails") : handleDelFavorite(name) } >&#10084;</button>
            </div>
        </div>
    </div>
    )
}


export default VehicleCard;


