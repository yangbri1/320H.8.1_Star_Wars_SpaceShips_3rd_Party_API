import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from 'axios';

export default function GetAllStarships(){

    // URL of Star Wars API w/ "starships" endpoint
    const API_URL = `https://swapi.dev/api/starships/`

    // to hold starship state
    const [ships, setShips] = useState(null);

    // attempting to fetch data from API db
    // req. "async" function & "await" 
    const getData = async () => {
        try {
            // retrieve data in JSON format & place it into setShips fn
            const { data } = await axios.get(API_URL);
            setShips(data);
        } 
        // catch any errors that may arise & console.log() out to CLI
        catch (err) {
            console.error(err);
        }
    }

    // apply useEffect hook -- reload at every mount
    useEffect(() => {
        // trigger getData() after initial render via useEffect hook
        getData();
    }, []); // dependency list/array [] set to empty -- render only on initial load (refresh)


    // helper function to collect starship names
    function spaceship(){
        // declare empty array to collect ship name
        const fleet = [];
        // initialize "ships_db" to hold all ship data
        const ships_db = ships.results;

        /* Should we be using Array.map() in conjunction React? 
        Will this work? ---- Let's test it*/
        // iterate through array of objs (ships)
        ships_db.forEach((ship) => {
            // search for ship's name & append to fleet
            fleet.push(ship.name);
            // fleet.push(ship.name.slice(0, -1));
        });

        return(fleet);
    }

    // normal loading function
    const loading = () => {
        return(<h1>Processing...</h1>)
    };

    // non-React loaded function
    const loaded = () => {
        let single_vessel = spaceship()[0];
        return(
            <>
                {/* https://bobbyhadz.com/blog/react-objects-are-not-valid-as-react-child#:~:text=The%20React.js%20error%20%22Objects%20are%20not%20valid%20as,properties%20on%20the%20object%20in%20your%20JSX%20code. */}
                {/* technically JSON.stringify() method converts obj to String b4 being render fixes error... */}
                {/* {JSON.stringify(ships.results)}; */}
                {spaceship()};
            </>
        )
    }

    return ships && ships.results ? loaded() : loading();
}