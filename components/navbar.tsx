"use client"
import dynamic from "next/dynamic";
import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import MenuClose from "./icons/menuClose";
import MenuOpen from "./icons/menuOpen";
import {useMotionValueEvent, useScroll} from "motion/react";

const MotionDiv = dynamic(
    () => import("framer-motion").then(mod => mod.motion.div), {ssr: false}
)

export default function Navbar() {
    return (
        <MobileNav/>
    )
}

function MobileNav() {

    const [menuOpened, setMenuOpened] = useState(false);
    const {scrollY} = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latestValue) => {
        const prevValue = scrollY.getPrevious() || 0;
        setHidden(latestValue > prevValue && latestValue > 150 && !menuOpened);
    })

    return (
        <div>
            <MotionDiv
                variants={{
                    visible: {y: 0},
                    hidden: {y: "-150%"}
                }}
                animate={hidden? "hidden" : "visible"}
                transition={{duration: 0.3, ease: "easeInOut"}}
                className="z-50 fixed top-6 text-white w-full">
                <div
                    className="rounded-full mx-4 p-1 flex justify-between items-center backdrop-blur bg-black bg-opacity-70 transparent-border">
                    <div className="h-11 w-11 rounded-full overflow-hidden">
                        <Image src="/logo.jpg" alt="logo" width={44} height={44} className="h-full w-full"/>
                    </div>
                    <div className="px-2" onClick={() => setMenuOpened(!menuOpened)}>
                        {menuOpened ?
                            <MenuClose width={32} height={32} color="white"/> :
                            <MenuOpen width={32} height={32} color="white"/>
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
            </MotionDiv>
            <div
                className={`${menuOpened ? 'h-screen w-full top-0 backdrop-blur bg-black bg-opacity-70' : 'w-[calc(100vw-32px)] top-6 h-0'} fixed z-40 left-1/2 -translate-x-1/2 transition-all duration-300`}>
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
    return (
        <div className="bg-gradient-to-br from-transparent to-zinc-400 rounded-full p-px">
            <button className="text-xl bg-primary-blue rounded-full w-full px-4 py-2">
                Contact us
            </button>
        </div>

    )
}