import React from "react";
import { useParams } from "react-router-dom";
import useStore from "../store/Store";

const DetailedPlanet = () =>{
    
    const { planet } = useParams()
    const imgSrc = `https://starwars-visualguide.com/assets/img/planets/${planet}.jpg `

    const {store} = useStore();
    const {planetsDetailedList} = store;

    const [planetData] = planetsDetailedList ? planetsDetailedList.filter(item => item.result.uid === planet) : null;


    return(
        <div className="container d-flex flex-row">
            <img src={imgSrc} alt={`planet ${planetData?.result.properties.name}`} />
            <div className="d-flex flex-column">
                <h1>{planetData?.result.properties.name}</h1>
                <p>{planetData?.result.description}</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor arcu quis ipsum interdum, ut cursus leo eleifend. Fusce urna nunc, varius at convallis at, viverra vitae orci. Ut efficitur, massa vitae viverra congue, nibh diam suscipit magna, ac aliquet arcu magna sed diam. Pellentesque nec hendrerit risus, nec maximus massa. Quisque quis tortor risus. Nullam scelerisque, diam in convallis volutpat, odio mauris ullamcorper nunc, sed pretium nibh lorem vestibulum purus. Pellentesque aliquet lacus tincidunt erat mollis faucibus. In hendrerit massa suscipit quam euismod auctor. Duis ut risus sed orci hendrerit vulputate. Suspendisse massa odio, placerat sed libero quis, volutpat dictum velit. Nullam in nibh et libero efficitur suscipit quis nec dui. Vivamus eu lectus eget massa imperdiet dapibus. In mattis gravida leo, nec consectetur dui varius vitae.
                </p>`
            </div>
        </div>
        )

}


export default DetailedPlanet