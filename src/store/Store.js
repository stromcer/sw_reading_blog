import React, {createContext, useContext, useState} from 'react';



const Store = createContext();

export const StoreProvider = ({children}) => {
    const [state, setState] = useState("se");


    return(
        <Store.Provider value={state}>
            {children}
        </Store.Provider>
    )
}

const useStore = () => useContext(Store)


export default useStore;