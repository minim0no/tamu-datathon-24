import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
        <nav class="flex justify-between font-MostraNuova text-2xl bg-white pt-3 pb-3 px-7">
            <img class="h-20" src="https://www.ezcater.com/db_images/show_img/286566"></img>           
            <ul class="flex flex-row space-x-7 place-items-center">
                <li><NavLink to="/statistics" exact={true} className={`${location.pathname == "/statistics" ? "text-primary": ""} hover:text-primary active:text-primary`}>STATS</NavLink></li>
                <li><NavLink to="/recommendations" className={`${location.pathname == "/recommendations" ? "text-primary": ""} hover:text-primary active:text-primary`}>RECOMMENDATIONS</NavLink></li>
                <li><NavLink to="/" exact={true} className={`${location.pathname == "/" ? "text-primary": ""} hover:text-primary active:text-primary`}>CHAT BOX</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;