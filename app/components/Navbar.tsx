import NavbarItem from "@/app/components/NavbarItem";

import { BsSearch, BsBell } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <nav className="w-full fixed z-40">
            <div
                className={`
                    px-1
                    md:px-5
                    lg:px-10
                    py-2
                    flex
                    flex-row
                    items-center
                    transition
                    duration-500
                    ${showBackground ? 'bg-zinc-900/90' : ''}
                `}             
            >
                <img className="h-20 lg:h-24" src="/images/logo.png" alt="Logo" />
                <div
                    className="
                        flex-row
                        ml-8
                        gap-7
                        hidden
                        lg:flex
                    "
                >
                    <NavbarItem label="Боевики"/>
                    <NavbarItem label="Триллеры"/>
                    <NavbarItem label="Детективы"/>
                    <NavbarItem label="Фентези"/>
                    <NavbarItem label="Драмы"/>
                    <NavbarItem label="Приключения"/>
                </div>
                <div className="flex flex-row ml-auto mr-3 gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell />
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;