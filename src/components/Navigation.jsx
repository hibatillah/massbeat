import React from 'react';
import { NavLink } from "react-router-dom";
import { ChatLeftText, ChatSquareText, ChatSquareTextFill, Clipboard2Data, Clipboard2DataFill, FileEarmarkText, FileEarmarkTextFill, Grid1x2, Grid1x2Fill, House, HouseFill } from "react-bootstrap-icons";

const Navigation = () => {
    const items = document.querySelectorAll("NavLink");
    
    items.forEach((item) => {
        if (item.classList.contains("active")){
            const el = item.children[0].children;
            el.forEach((e) => {
                e.target.classList.toggle("hidden");
            })
        }
    })
    
    return (
        <nav className="w-full p-4 bg-tertiary fixed bottom-0 left-0 z-50">
            <div className="flex navs-center justify-between">
                <NavLink
                    to='/'
                    className={({ isActive }) => isActive ? 'active' : undefined}
                >
                    <div id="nav" className="p-2 text-white text-2xl">
                        <House className='' />
                        <HouseFill className='hidden' />
                    </div>
                </NavLink>
                <NavLink
                    to='articles'
                    className={({ isActive }) => isActive ? 'active' : undefined}
                >
                    <div id="nav" className="p-2 text-white text-2xl">
                        <FileEarmarkText className='' />
                        <FileEarmarkTextFill className='hidden' />
                    </div>
                </NavLink>
                <NavLink
                    to='program'
                    className={({ isActive }) => isActive ? 'active' : undefined}
                >
                    <div id="nav" className="p-3 rounded bg-primary text-white text-2xl">
                        <Grid1x2 className='' />
                        <Grid1x2Fill className='hidden' />
                    </div>
                </NavLink>
                <NavLink
                    to='record'
                    className={({ isActive }) => isActive ? 'active' : undefined}
                >
                    <div id="nav" className="p-2 text-white text-2xl">
                        <Clipboard2Data className='' />
                        <Clipboard2DataFill className='hidden' />
                    </div>
                </NavLink>
                <NavLink
                    to='chat'
                    className={({ isActive }) => isActive ? 'active' : undefined}
                >
                    <div id="nav" className="p-2 text-white text-2xl">
                        <ChatSquareText className='' />
                        <ChatSquareTextFill className='hidden' />
                    </div>
                </NavLink>

            </div>
        </nav>
    )
}
export default Navigation;