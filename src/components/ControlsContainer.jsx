import React from "react";

const ControlsContainer = ({list, handleChange}) => {

    


    return(
        <div>
            { list 
            ? <>
            <button className="btn btn-success" onClick={() => handleChange(list.previous)}>⮘</button>
            <button  className="btn btn-success" onClick={() => handleChange(list.next)}>⮚</button>
            </>
            :null
            }
        </div>
    )
}

export default ControlsContainer;