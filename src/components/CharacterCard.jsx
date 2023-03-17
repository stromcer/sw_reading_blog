import React, {useEffect , useState} from "react";
import "../styles/components/card.css"

const CharacterCard = ({name,id,url}) => {


    const imgSrc = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg `

    const [data, setData] = useState([]);


    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(res => {  
            setData(res.result.properties)})
        .catch(err => console.log(err))
    },[url])




    return(
    <div className="card" >
        <img src={imgSrc} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
                { Boolean(data)
                ? <>
                <p className="card-text"><b>Gender</b> : {data.gender}</p>
                <p className="card-text"><b>Eye color</b> : {data.eye_color}</p>
                <p className="card-text"><b>Hair color</b> : {data.hair_color}</p>
                </>
                : null
                }
            <button className="btn btn-primary">Learn more..</button>
        </div>
    </div>
    )
}


export default CharacterCard;