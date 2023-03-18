import React from "react";
import "../styles/components/card.css"
import useStore from "../store/Store";
import { Link } from "react-router-dom";

const VehicleCard = ({name, id, url}) => {
    
    const imgSrc = `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg `

    const {store} = useStore();
    const {vehiclesDetailedList} = store;

    const vehicleData = vehiclesDetailedList ? vehiclesDetailedList.filter(item => item.result.uid === id) : null;


    return(
    <div className="card" >
        <img src={imgSrc} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{name}</h5>
        
                 <p className="card-text"><b>Manufacturer</b> : {vehicleData[0] ? vehicleData[0].result.properties.manufacturer : "Loading"}</p>
                <p className="card-text"><b>Price (credits)</b> : {vehicleData[0] ? vehicleData[0].result.properties.cost_in_credits : "Loading"}</p>
                <p className="card-text"><b>Passengers</b> : {vehicleData[0] ? vehicleData[0].result.properties.passengers :"Loading"}</p>

        <Link to={`/vehicledetails/${id}`} className="btn btn-primary">Learn More...</Link>
        </div>
    </div>
    )
}


export default VehicleCard;


