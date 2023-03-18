import React from "react";
import "../styles/components/card.css"
import useStore from "../store/Store";
import { Link } from "react-router-dom";

const PlanetCard = ({name ,id , url}) => {
    
    const imgSrc = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg `
    
    const {store, actions} = useStore();
    const {planetsDetailedList, favoritesList} = store;
    const {handleNewFavorite, handleDelFavorite} = actions;

    const [planetData] = planetsDetailedList ? planetsDetailedList.filter(item => item.result.uid === id) : null;
   
    const favorite = favoritesList.filter((item) => item.name === name).length ? true : false

    return(
    <div className="card" >
        <img src={imgSrc} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text"><b>Diameter</b> : {planetData ? planetData.result.properties.diameter : "Loading"}</p>
            <p className="card-text"><b>Gravity</b> : {planetData ? planetData.result.properties.gravity : "Loading"}</p>
            <p className="card-text"><b>Climate</b> : {planetData ? planetData.result.properties.climate : "Loading"}</p>
            <div className="d-flex d-row justify-content-between">
                <Link to={`/planetdetails/${planetData?.result.uid}`} className="btn btn-primary">Learn More...</Link>
                <button className={favorite ? "btn btn-danger" : "btn btn-secondary" }  onClick={() => !favorite ? handleNewFavorite(name,id,"planetdetails") : handleDelFavorite(name) } >&#10084;</button>
            </div>
        </div>
    </div>
    )
}





export default PlanetCard;