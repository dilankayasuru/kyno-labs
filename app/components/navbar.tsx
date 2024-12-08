"use client"

import {IoClose, IoMenu} from "react-icons/io5";
import {useState} from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <MobileNav/>
    )
}

function MobileNav() {

    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div>
            <div className="z-50 fixed top-6 text-white w-full">
                <div
                    className="rounded-full mx-4 p-1 flex justify-between items-center backdrop-blur bg-black bg-opacity-70 transparent-card">
                    <div className="h-11 w-11 rounded-full overflow-hidden">
                        <img src="/logo.png" alt="logo" className="h-full w-full"/>
                    </div>
                    <div className="px-2" onClick={() => setMenuOpened(!menuOpened)}>
                        {menuOpened ?
                            <IoClose className="text-white h-8 w-8"/> :
                            <IoMenu className="text-white h-8 w-8"/>
                        }
                    </div>
                </div>
                <div className={`${menuOpened ? 'block' : 'hidden invisible'} px-4`}>
                    <ul className="mt-8">
                        <li><MobileNavItem name="Home"/></li>
                        <li><MobileNavItem name="Services"/></li>
                        <li><MobileNavItem name="Projects"/></li>
                        <li><MobileNavItem name="Tech"/></li>
                        <li><MobileNavItem name="Testimonials"/></li>
                        <li>
                            <div className="p-6 mt-2">
                                <ContactUsBtn/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className={`${menuOpened ? 'h-dvh w-full top-0 backdrop-blur bg-black bg-opacity-70' : 'w-[calc(100vw-32px)] top-6 h-dvh invisible'} fixed z-10 left-1/2 -translate-x-1/2 transition-all duration-300`}>
            </div>
        </div>

    )
}

function MobileNavItem(props: { name: string, link?: string }) {
    const {name, link = "#"} = props;
    return (
        <Link href={link}>
            <div className="relative p-6">
                <p className="text-2xl">{name}</p>
                <span
                    className="rounded-full h-px absolute bottom-0 w-11/12 bg-gradient-to-r from-zinc-400 to-transparent"></span>
            </div>
        </Link>
    )
}

function ContactUsBtn() {
    return(
        <div className="bg-gradient-to-br from-transparent to-zinc-400 rounded-full p-px">
            <button className="text-xl bg-primary-blue rounded-full w-full px-4 py-2">
                Contact us
            </button>
        </div>

    )
}