"use client";
import ImageSlider from "@/app/components/slider";
import {FaAngleUp} from "react-icons/fa6";
import {useState} from "react";
import variants from "@/app/components/variants";
import { motion } from "motion/react";

interface ProjectCardProps {
    images: string[],
    title: string,
    description: string,
}

export default function ProjectCard(props: ProjectCardProps) {
    const {images, title, description} = props;
    const [expanded, setExpanded] = useState(false);
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true, amount: 0.8}}
            variants={variants}
            className="overflow-hidden rounded-xl transparent-card max-w-xs relative">
            <ImageSlider images={images}/>
            <div className="p-4 relative bg-[linear-gradient(135deg,_#ffffff21,_#d9d9d900)] bg-black" onClick={() => setExpanded(!expanded)}>
                <p className="text-lg w-full">
                    {title}
                </p>
                <div
                    onClick={() => setExpanded(!expanded)}
                    className={`transition-all duration-300 h-7 w-7 grid place-content-center rounded-full z-20 bg-white bg-opacity-25 absolute right-0 m-4 ${expanded ? 'rotate-180 -top-52' : 'rotate-0 top-0'}`}>
                    <FaAngleUp className="text-black"/>
                </div>
            </div>
            <div
                className={`absolute ${expanded ? 'top-0' : 'top-96'} bg-[linear-gradient(135deg,_#ffffff21,_#d9d9d900)] bg-black p-4 duration-300 transition-all rounded-t-xl h-full`}>
                <p
                    onClick={() => setExpanded(!expanded)}
                    className="text-secondary-text pt-10 text-lg">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}