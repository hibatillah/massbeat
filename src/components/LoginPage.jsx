import { useState, useEffect } from "react";
import { Envelope, EnvelopeFill, Key, KeyFill, PersonFill } from "react-bootstrap-icons";

const Login = () => {
    // const menu = document.querySelector('menu');
    // const button = menu.querySelectorAll('button');
    const activeMenu = (e) => {
        e.target.classList.toggle('bg-white');
    }
    
    return (
        <div className="min-w-screen min-h-screen lg:grid lg:grid-cols-2">
            <div className="col-span-1 flex flex-col gap-4 justify-center items-center h-full">
                <div id="menu" className="relative w-64 flex gap-1 bg-gray-200 p-1 rounded-md text-sm overflow-hidden">
                    <button id="login" value="Login" className="flex-auto rounded-sm h-full p-1.5">Login</button>
                    <button id="signUp" value="Sign Up" className="flex-auto rounded-sm h-full p-1.5">Sign Up</button>
                    {/* <span id="active" className="absolute h-8 w-1/2 bg-white rounded-sm text-slate-800 transition-all flex justify-center items-center">h</span> */}
                </div>
                <div className="form flex gap-4 w-64 overflow-hidden">
                    <form action="" method="post" id="login" className="flex-none w-64 space-y-2">
                        <label htmlFor="username" className="cursor-pointer px-3 py-2 flex gap-2 items-center rounded-md border border-slate-400">
                            <PersonFill className="text-slate-500 text-sm" />
                            <input type="text" name="username" id="username" placeholder="username" className="w-full text-sm focus:outline-none bg-inherit" />
                        </label>
                        <label htmlFor="password" className="cursor-pointer px-3 py-2 flex gap-2 items-center rounded-md border border-slate-400">
                            <KeyFill className="text-slate-500 text-sm" />
                            <input type="password" name="password" id="password" placeholder="password" className="w-full text-sm focus:outline-none bg-inherit" />
                        </label>
                        <button type="submit" className="w-full pt-1.5 pb-2 bg-primary rounded-md text-sm font-semibold text-white tracking-wide">LOGIN</button>
                    </form>
                    <form action="" method="post" id="signUp" className="flex-none w-64 space-y-2">
                        <label htmlFor="username" className="cursor-pointer px-3 py-2 flex gap-2 items-center rounded-md border border-slate-400">
                            <PersonFill className="text-slate-500 text-sm" />
                            <input type="text" name="username" id="username" placeholder="username" className="w-full text-sm focus:outline-none bg-inherit" />
                        </label>
                        <label htmlFor="email" className="cursor-pointer px-3 py-2 flex gap-2 items-center rounded-md border border-slate-400">
                            <EnvelopeFill className="text-slate-500 text-sm" />
                            <input type="email" name="email" id="email" placeholder="email" className="w-full text-sm focus:outline-none bg-inherit" />
                        </label>
                        <label htmlFor="password" className="cursor-pointer px-3 py-2 flex gap-2 items-center rounded-md border border-slate-400">
                            <KeyFill className="text-slate-500 text-sm" />
                            <input type="password" name="password" id="password" placeholder="password" className="w-full text-sm focus:outline-none bg-inherit" />
                        </label>
                        <button type="submit" className="w-full pt-1.5 pb-2 bg-primary rounded-md text-sm font-semibold text-white tracking-wide">SIGN UP</button>
                    </form>
                </div>
            </div>
            <div className="col-span-1 pattern">
                {/* <img src="" alt="login" className="img-cover" /> */}
            </div>
        </div>
    )
}
export default Login;