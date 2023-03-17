import React,{useEffect , useState} from "react";
import "../styles/components/card.css"

const VehicleCard = ({name, id, url}) => {
    
    const imgSrc = `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg `

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
                <p className="card-text"><b>Manufacturer</b> : {data.manufacturer}</p>
                <p className="card-text"><b>Price (credits)</b> : {data.cost_in_credits}</p>
                <p className="card-text"><b>Passengers</b> : {data.passengers}</p>
                
            </>
            : null
            }
        <button className="btn btn-primary">Learn More...</button>
        </div>
    </div>
    )
}


export default VehicleCard;