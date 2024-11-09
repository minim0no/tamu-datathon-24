import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="flex justify-between font-MostraNuova text-xl bg-white/50 pt-3 pb-3 px-7">
            <img class="h-20" src="https://www.ezcater.com/db_images/show_img/286566"></img>           
            <ul class="flex flex-row space-x-7 place-items-center">
                <li><NavLink to="/statistics" exact={true} className="hover:text-primary active:text-primary">STATS</NavLink></li>
                <li><NavLink to="/recommendations" className="hover:text-primary active:text-primary">RECOMMENDATIONS</NavLink></li>
                <li><NavLink to="/" exact={true} className="hover:text-primary active:text-primary">CHAT BOX</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;