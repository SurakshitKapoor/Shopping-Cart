import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            Navbar Component

            <nav>

                <NavLink to='/'>
                    <div>
                        <p> Home </p>
                    </div>
                </NavLink>
                
                <NavLink to='/cart'>
                    <div>
                        <img src="" alt="cart_image"/>
                    </div>
                </NavLink>
            </nav>
        </div>
    )
}

export default Navbar;