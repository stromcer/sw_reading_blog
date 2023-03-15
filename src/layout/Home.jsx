import React from "react";
import useStore from "../store/Store";

const Home = () => {
    const test = useStore()


    return(
        <>
           <h1>Hola</h1>
           <p>{test}</p>
        </>)
}


export default Home;