import React from "react";
import useStore from "../store/Store";
import CharacterCard from "../components/CharacterCard";
import VehicleCard from "../components/VehicleCard";
import PlanetCard from "../components/PlanetCard";
import ControlsContainer from "../components/ControlsContainer";
import "../styles/views/home.css"



const Home = () => {
    const {characters, vehicles, planets, setCharListUrl, setVehicleListUrl, setPlanetListUrl } = useStore()


    return(
        <>
          <div className="headerCards">
            { characters 
            ? <ControlsContainer list={characters} handleChange={setCharListUrl}/>
            : null
            }
            <h1>Personajes</h1>
          </div>
          <div className="homeCardContainer">
            { Boolean(characters?.results)
            ? characters.results.map( character => <CharacterCard key={character.uid} url={character.url} id={character.uid} name={character.name}/> )
            : null
            }
          </div>
          <div className="headerCards">
            { vehicles 
            ? <ControlsContainer list={vehicles} handleChange={setVehicleListUrl}/>
            : null
            }
            <h1>Vehiculos</h1>
          </div>
          <div className="homeCardContainer">
            {  Boolean(vehicles?.results)
            ? vehicles.results.map( vehicle => <VehicleCard key={vehicle.uid} url={vehicle.url} id={vehicle.uid} name={vehicle.name} /> )
            : null                    
            }
          </div>
          <div className="headerCards">
            { planets 
            ? <ControlsContainer list={planets} handleChange={setPlanetListUrl}/>
            : null
            }
            <h1>Planetas</h1>
          </div> 
          <div className="homeCardContainer">
            { Boolean(planets?.results)
            ? planets.results.map( planet => <PlanetCard key={planet.uid} url={planet.url} id={planet.uid} name={planet.name} />)
            : null}
          </div>
        </>)
}


export default Home;