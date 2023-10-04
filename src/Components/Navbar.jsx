import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import nupsgLogo from '../Assets/nupsgLogo.png';
import akuafoLogo from '../Assets/akuafoLogo.png';
import { Menu } from 'primereact/menu';
import { Button } from "primereact/button";
import { SlideMenu } from 'primereact/slidemenu';
import 'primeicons/primeicons.css';


const UserNavBar = ( {fullName, nameShortcut} ) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menu = useRef(null);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const items = [
        {
            label: 'logout',
            icon: 'pi pi-sign-out',
            command: () => navigate('/')
        }
    ]

    return (
        <nav>
            <div className="flex justify-between items-center bg-[rgb(0,150,255)] w-full fixed z-50 px-[5%] md:px-[100px] h-[60px]">
                <div className="flex justify-evenly w-[100px]">
                    <img className="w-[45%] h-[45%]" src={nupsgLogo} alt="NUPS-G Logo" />
                    <img className="w-[45%] h-[45%]" src={akuafoLogo} alt="Akuafo Logo" />
                </div>
                <div className="text-[#fff] font-bold text-center">
                    { fullName }
                </div>
                <div className="bg-[#fff] flex justify-center cursor-pointer w-[50px] h-3/4  items-center rounded-full"
                onClick={(event) => menu.current.toggle(event)}
                >
                    {/* <span> { nameShortcut } </span> */}
                    <span> kk </span>
                </div>
            </div>
            <div>
                <SlideMenu ref={menu} model={items} popup viewportHeight={50} menuWidth={200}></SlideMenu>
            </div>
        </nav>
    )
}


const LandingNavBar = () => {
    const navigate = useNavigate();


    return (
        <nav>
            <div className="flex justify-between items-center bg-[rgb(0,150,255)] w-full fixed z-50 px-[5%] md:px-[100px] h-[60px]">
                <div className="flex justify-evenly w-[100px]">
                    <img className="w-[45%] h-[45%]" src={nupsgLogo} alt="NUPS-G Logo" />
                    <img className="w-[45%] h-[45%]" src={akuafoLogo} alt="Akuafo Logo" />
                </div>
                <div>
                    <Button label="Sign In" icon="pi pi-sign-in" onClick={() => navigate('/SignIn')} className="h-[40px]"/>
                </div>
            </div>
        </nav>
    )
}


export {
    UserNavBar,
    LandingNavBar
}