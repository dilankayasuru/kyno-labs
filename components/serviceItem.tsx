"use client"

import {useState} from "react";
import {motion} from "framer-motion";
import ArrowRight from "@/components/icons/arrowRight";

interface ServiceItemProps {
    title: string,
    description: string[],
}

export default function ServiceItem(props: ServiceItemProps) {

    const {title, description} = props;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="z-10 relative py-4" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex justify-between items-center relative z-10 gap-4">
                <p className="text-lg">{title}</p>
                <div
                    className={`transition-all duration-300 h-7 w-7 grid place-content-center rounded-full bg-white ${isOpen ? 'rotate-45' : '-rotate-45'}`}>
                    <ArrowRight height={24} width={24} color="black"/>
                </div>
            </div>
            {isOpen &&
                <motion.div
                    animate={{opacity: 1}}
                    transition={{delay: 0.15}}
                    initial={{opacity: 0}}
                    layout="position"
                    className="text-secondary-text pt-4">
                    <ul>
                        {
                            description.map((item, id) => (<li key={id} className="mb-1">{item}</li>))
                        }
                    </ul>
                </motion.div>
            }
            <motion.span layout="position"
                         className="rounded-full h-px absolute bottom-0 w-11/12 bg-gradient-to-r from-zinc-400 to-transparent"></motion.span>
        </div>
    )
}