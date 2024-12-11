"use client";
import dynamic from "next/dynamic";

const ImageSlider = dynamic(() => import("@/components/slider"), {ssr: false});
import {useState} from "react";

const ArrowUp = dynamic(() => import("@/components/icons/arrowup"), {ssr: false});
import variants from "@/components/animation/variants";
import {motion} from "motion/react";

interface ProjectCardProps {
    images: string[],
    title: string,
    description: string,
}

const ProjectCard = (props: ProjectCardProps) => {
    const {images, title, description} = props;
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => setExpanded(!expanded);

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true, amount: 0.5}}
            variants={variants}
            className="overflow-hidden rounded-xl transparent-card max-w-xs relative">
            <ImageSlider images={images}/>
            <div className="p-4 relative bg-[linear-gradient(135deg,_#ffffff21,_#d9d9d900)] bg-black"
                 onClick={toggleExpanded}>
                <p className="text-lg w-full">
                    {title}
                </p>
                <div
                    className={`transition-all duration-300 h-7 w-7 grid place-content-center rounded-full z-20 bg-white bg-opacity-25 absolute right-0 m-4 ${expanded ? 'rotate-0 -top-52' : 'rotate-180 top-0'}`}>
                    <ArrowUp height={24} width={24} color="black"/>
                </div>
            </div>
            <div
                className={`absolute ${expanded ? 'top-0' : 'top-96'} bg-[linear-gradient(135deg,_#ffffff21,_#d9d9d900)] bg-black p-4 duration-300 transition-all rounded-t-xl h-full`}>
                <p
                    className="text-secondary-text pt-10 text-lg"
                    onClick={toggleExpanded}>
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;