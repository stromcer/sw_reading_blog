import React from "react";
import Button from 'react-bootstrap/Button';



const ControlsContainer = ({list, handleChange}) => {

    


    return(
        <div>
            { list 
            ? <>
            <Button variant="success" onClick={() => handleChange(list.previous)}>⮘</Button >
            <Button variant="success" onClick={() => handleChange(list.next)}>⮚</Button >
            </>
            :null
            }
        </div>
    )
}

export default ControlsContainer;