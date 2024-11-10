import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div class="flex flex-col mt-5">
            <div class="flex flex-row justify-around">
                <nav class="font-MostraNuova text-xl bg-black pt-3 pb-3 px-0">
                    <img
                        class="w-fit h-fit pl-7 pt-5 pb-0"
                        src="https://ronismacbar.com/wp-content/uploads/2022/07/Ronis-Black-2.png"
                    ></img>
                </nav>
                <div class="w-full flex flex-col font-MostraNuova bg-black text-white pl-20 pt-2 pb-2">
                    <h1 class="font-MostraNuovaHeavy text-3xl pb-3">
                        Shortcuts
                    </h1>
                    <NavLink
                        to="/statistics"
                        exact={true}
                        className={`${
                            location.pathname == "/statistics"
                                ? "text-white"
                                : ""
                        } hover:text-primary text-2xl hover:underline`}
                    >
                        Stats
                    </NavLink>
                    <NavLink
                        to="/recommendations"
                        exact={true}
                        className={`${
                            location.pathname == "/recommendations"
                                ? "text-white"
                                : ""
                        } hover:text-primary text-2xl hover:underline`}
                    >
                        Recommendations
                    </NavLink>
                    <NavLink
                        to="/"
                        exact={true}
                        className={`${
                            location.pathname == "/" ? "text-white" : ""
                        } hover:text-primary text-2xl hover:underline`}
                    >
                        Chat Box
                    </NavLink>
                </div>
                <div class="w-full flex flex-col font-MostraNuova bg-black text-white pt-2 pb-2">
                    <h1 class="font-MostraNuovaHeavy text-3xl pb-3 px-0">
                        Contact
                    </h1>
                    <h2 class="text-2xl hover:text-primary">
                        711 University Dr #200, College Station, TX 77840
                    </h2>
                    <h2 class="text-2xl hover:text-primary">ronismacbar.com</h2>
                    <h2 class="text-2xl hover:text-primary">(979) 450-7753</h2>
                </div>
            </div>
            <div class="w-full font-MostraNuova text-center bg-black text-primary text-2xl border-t pt-1 pb-2 border-primary">
                &copy; 2024 Roni's Mac Bar. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
