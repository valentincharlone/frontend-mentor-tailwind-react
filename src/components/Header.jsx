import React, { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const initialStateMode = localStorage.getItem('theme') === 'dark' 

const Header = () => {

    const [darkMode, setDarkMode] = useState(initialStateMode)

    useEffect(() => {

        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')

        } else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }

    }, [darkMode])


    return (
        <header className="container mx-auto pt-8 md:max-w-xl">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold uppercase tracking-[0.5em] text-white">
                    TODO
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>

                    {
                        darkMode ? <SunIcon /> : <MoonIcon  />
                    }
                    
                </button>
            </div>
        </header>
    );
};

export default Header;
