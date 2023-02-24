import React, { useState } from 'react';
import nt from "../assets/404.png"

const NT = () => {
    const [img, setImg] = useState(nt);
    
    return ( 
        <div className="absolute z-40 top-0 left-0 w-full h-full bg-white">
            <div className="w-full h-full grid place-items-center">
                <div className="w-40 text-center space-y-2">
                    <img src={img} alt="" />
                    <h1 className="font-bold text-tertiary text-xl">
                        <span className="text-primary">"</span>
                        Not Found
                        <span className="text-primary">"</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}
 
export default NT;