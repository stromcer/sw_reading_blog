import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import useStore from "../store/Store";
import { Link } from "react-router-dom";

const FavoritesDropwdown = () => {

  const {store} = useStore();
  const {favoritesList} = store;
  


    return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Favorites {favoritesList.length ? favoritesList.length :null }
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {favoritesList.length 
        ? favoritesList.map( item => <Dropdown.ItemText key={item.name}><Link to={item.url}>  {item.name} </Link></Dropdown.ItemText> )
        : <Dropdown.Item > Nothing added yet. </Dropdown.Item> }
      </Dropdown.Menu>
    </Dropdown>
    )
}


export default FavoritesDropwdown;