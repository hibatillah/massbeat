import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <div id="header" className="w-full px-4 pt-5 pb-2 bg-white flex justify-between items-center sticky top-0 left-0 z-50">
            <div className="flex">
                <Link id="back" className="hidden mr-1">
                    <ArrowLeftShort className="text-2xl text-tertiary" />
                </Link>
                <Link to="/">
                    <h1 className="text-xl font-bold text-tertiary pointer-events-none">{brand}</h1>
                </Link>
            </div>
            <div className="flex gap-4">
                <Link to="notification" className="p-3">
                    <BellFill className="text-xl" />
                </Link>
                <Link to="profile" id="pp" className="w-12 h-12 rounded-full border border-primary overflow-hidden">
                    <img src={profile} alt="profile" loading="eager" className="w-full h-full object-cover" />
                </Link>
            </div>
        </div>
    )
}
export default Header;