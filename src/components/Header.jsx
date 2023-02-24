import React, { useState } from "react";
import { ArrowLeftShort, BellFill } from "react-bootstrap-icons";
import team from "../assets/team.jpg"

const Header = (props) => {
    const [brand, setBrand] = useState("MassBeat");
    const profile = team;
    const back = document.querySelector("#back");
    const pp = document.querySelector("#pp");
    if (props.back === true) {
        back.classList.remove("hidden");
    }
    if (props.pp === true) {
        pp.classList.add("hidden");
    }

    return (
        <div id="header" className="w-full px-2 pt-5 pb-2 bg-white flex items-center sticky top-0 left-0 z-50">
            <div id="back" className="hidden mr-1">
                <ArrowLeftShort className="text-2xl text-tertiary" />
            </div>
            <h1 className="text-lg font-bold text-tertiary flex-auto pointer-events-none">{brand}</h1>
            <a href="notification" className="mr-3 p-1">
                <BellFill />
            </a>
            <a href="profile" id="pp" className="w-8 h-8 rounded-full border border-primary overflow-hidden">
                <img src={profile} alt="profile" loading="eager" className="w-full h-full object-cover" />
            </a>
        </div>
    )
}
export default Header;