// NavBar components are NOT pages
import { Link } from "react-router-dom";

function Nav(){
    return(
        // later will be <Link> to internal pages: starships
        <>
            <h1>STAR WARS STARSHIPS</h1>
            {/* Wrapped around a card of spaceship later */}
            {/* <Link to="/starships">
                <div>Executor</div>
            </Link> */}
        </>
        
    )
}

export default Nav;