import React from "react";
import "../styles/components/card.css"
import useStore from "../store/Store";
import { Link } from "react-router-dom";

const PlanetCard = ({name ,id , url}) => {
    
    const imgSrc = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg `
    
    const {store} = useStore();
    const {planetsDetailedList} = store;

    const planetData = planetsDetailedList ? planetsDetailedList.filter(item => item.result.uid === id) : null;
   
    return(
    <div className="card" >
        <img src={imgSrc} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{name}</h5>

                <p className="card-text"><b>Diameter</b> : {planetData[0] ? planetData[0].result.properties.diameter : "Loading"}</p>
                <p className="card-text"><b>Gravity</b> : {planetData[0] ? planetData[0].result.properties.gravity : "Loading"}</p>
                <p className="card-text"><b>Climate</b> : {planetData[0] ? planetData[0].result.properties.climate :"Loading"}</p>
            
        <Link to={`/planetdetails/${planetData[0]?.result.uid}`} className="btn btn-primary">Learn More...</Link>
        </div>
    </div>
    )
}





export default PlanetCard;