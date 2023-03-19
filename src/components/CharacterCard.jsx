import React from "react";
import "../styles/components/card.css"
import useStore from "../store/Store.js"
import { Link } from "react-router-dom";

const CharacterCard = ({name,id}) => {


    const imgSrc = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`

    const {store, actions} = useStore();
    const {charDetailedList , favoritesList} = store;
    const { handleNewFavorite, handleDelFavorite } = actions;

    const [charData] = charDetailedList ? charDetailedList.filter(item => item.result.uid === id) : null;


    const favorite = favoritesList.filter((item) => item.name === name).length ? true : false

    return(
    <div className="card" >
        <img src={imgSrc} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>

                <p className="card-text"><b>Gender</b> : {charData ? charData.result.properties.gender : "Loading"}</p>
                <p className="card-text"><b>Eye color</b> : {charData ? charData.result.properties.eye_color : "Loading"}</p>
                <p className="card-text"><b>Hair color</b> : {charData ? charData.result.properties.hair_color : "Loading"}</p>

                <div className="d-flex d-row justify-content-between">
                    <Link className="btn btn-primary" to={`/chardetails/${id}`} >Learn more..</Link>
                    <button className={favorite ? "btn btn-danger":"btn btn-secondary" }  onClick={() => !favorite ? handleNewFavorite(name,id,"chardetails") : handleDelFavorite(name)} >&#10084;</button>
                </div>
        </div>
    </div>
    )
}


export default CharacterCard;