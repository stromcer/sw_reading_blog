import React from "react";
import "../styles/components/card.css"
import useStore from "../store/Store.js"
import { Link } from "react-router-dom";

const CharacterCard = ({name,id,url}) => {


    const imgSrc = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`

    const {store} = useStore();
    const {charDetailedList} = store;

    const charData = charDetailedList ? charDetailedList.filter(item => item.result.uid === id) : null;


    return(
    <div className="card" >
        <img src={imgSrc} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>

                <p className="card-text"><b>Gender</b> : {charData[0] ? charData[0].result.properties.gender : "Loading"}</p>
                <p className="card-text"><b>Eye color</b> : {charData[0] ? charData[0].result.properties.eye_color : "Loading"}</p>
                <p className="card-text"><b>Hair color</b> : {charData[0] ? charData[0].result.properties.hair_color :"Loading"}</p>
                
            <Link className="btn btn-primary" to={`/chardetails/${id}`} >Learn more..</Link>
        </div>
    </div>
    )
}


export default CharacterCard;