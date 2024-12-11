"use client"
import {MouseEventHandler, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import MenuClose from "./icons/menuClose";
import MenuOpen from "./icons/menuOpen";
import {motion, useMotionValueEvent, useScroll} from "motion/react";
import useMediaQuery from "@/hooks/customHooks";

export default function Navbar() {

    const isDesktop = useMediaQuery('(min-width: 768px)');

    const [menuOpened, setMenuOpened] = useState(false);
    const {scrollY} = useScroll();
    const [hidden, setHidden] = useState(false);

    const [activeLink, setActiveLink] = useState<string>("");

    useMotionValueEvent(scrollY, "change", (latestValue) => {
        const prevValue = scrollY.getPrevious() || 0;
        setHidden(latestValue > prevValue && latestValue > 150 && !menuOpened);
    })

    return (
        <div>
            <motion.div
                variants={{
                    visible: {y: 0},
                    hidden: {y: "-150%"}
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{duration: 0.3, ease: "easeInOut"}}
                className="z-50 fixed top-6 text-white w-full">
                <div
                    className="md:max-w-screen-md md:mx-0 md:left-1/2 md:-translate-x-1/2 rounded-full mx-4 p-1 flex justify-between items-center backdrop-blur bg-black bg-opacity-50 transparent-border">
                    <div className="overflow-hidden md:w-full">
                        <Image src="/logo.jpg" alt="logo" width={44} height={44} className="h-11 w-11 rounded-full"/>
                    </div>
                    {/* Mobile menu button */}
                    {!isDesktop &&
                        <div className="px-2" onClick={() => setMenuOpened(!menuOpened)}>
                            {menuOpened ?
                                <MenuClose width={32} height={32} color="white"/> :
                                <MenuOpen width={32} height={32} color="white"/>
                            }
                        </div>
                    }
                    {isDesktop &&
                        <>
                            <ul className="flex justify-between gap-4 w-full">
                                <li><Link
                                    onClick={() => setActiveLink('home')}
                                    className={`nav-link ${activeLink === 'home' ? 'text-primary-yellow' : ''}`}
                                    href="#home">
                                    Home
                                </Link></li>
                                <li><Link
                                    onClick={() => setActiveLink('service')}
                                    className={`nav-link ${activeLink === 'service' ? 'text-primary-yellow' : ''}}`}
                                    href="#services">
                                    Services
                                </Link></li>
                                <li><Link
                                    onClick={() => setActiveLink('projects')}
                                    className={`nav-link ${activeLink === 'projects' ? 'text-primary-yellow' : ''}`}
                                    href="#projects">
                                    Projects
                                </Link></li>
                                <li><Link
                                    onClick={() => setActiveLink('technologies')}
                                    className={`nav-link ${activeLink === 'technologies' ? 'text-primary-yellow' : ''}`}
                                    href="#technologies">
                                    Tech
                                </Link></li>
                                <li><Link
                                    onClick={() => setActiveLink('testimonials')}
                                    className={`nav-link ${activeLink === 'testimonials' ? 'text-primary-yellow' : ''}`}
                                    href="#testimonials">
                                    Testimonials
                                </Link></li>
                            </ul>
                            <div className="w-full">
                                <Link href="#contact">
                                    <ContactUsBtn/>
                                </Link>
                            </div>
                        </>
                    }
                </div>
                {!isDesktop &&
                    <div className={`${menuOpened ? 'block' : 'hidden invisible'} px-4`}>
                        <ul className="mt-8">
                            <li onClick={() => setMenuOpened(!menuOpened)}><MobileNavItem name="Home" link="#home"/>
                            </li>
                            <li onClick={() => setMenuOpened(!menuOpened)}><MobileNavItem name="Services"
                                                                                          link="#services"/>
                            </li>
                            <li onClick={() => setMenuOpened(!menuOpened)}><MobileNavItem name="Projects"
                                                                                          link="#projects"/>
                            </li>
                            <li onClick={() => setMenuOpened(!menuOpened)}><MobileNavItem name="Tech"
                                                                                          link="#technologies"/>
                            </li>
                            <li onClick={() => setMenuOpened(!menuOpened)}><MobileNavItem name="Testimonials"
                                                                                          link="#testimonials"/></li>
                            <li onClick={() => setMenuOpened(!menuOpened)}>
                                <Link href="#contact" className="p-6 mt-2">
                                    <ContactUsBtn/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                }
            </motion.div>
            {!isDesktop &&
                < div
                    className={`${menuOpened ? 'h-screen w-full top-0 backdrop-blur bg-black bg-opacity-70' : 'w-[calc(100vw-32px)] top-6 h-full invisible'} fixed z-40 left-1/2 -translate-x-1/2 transition-all duration-300`}>
                </div>
            }
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
    return (
        <div
            className="bg-gradient-to-br from-transparent to-zinc-400 rounded-full p-px md:max-w-fit md:justify-self-end">
            <button className="text-xl md:text-[16px] bg-primary-blue rounded-full w-full px-4 py-2">
                Contact us
            </button>
        </div>

    )
}