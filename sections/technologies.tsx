"use client"
import dynamic from "next/dynamic";
import {useEffect, useState} from "react";
import {motion} from "motion/react";
import variants from "@/components/animation/variants";
import {technologies} from "@/public/assets";

const IconCloud = dynamic(() => import("@/components/ui/techStackCloud").then(mod => mod.IconCloud), {ssr: false});

export default function Technologies() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="md:flex md:justify-between md:py-9 px-6 py-8 text-white md:max-w-screen-xl md:mx-auto md:my-0" id="technologies">
            <div className="md:w-full md:pt-9">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true, amount: 0.8}}
                    variants={variants}>
                    <p className="gradient-title md:pb-4">Technologies</p>
                </motion.div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true, amount: 0.8}}
                    variants={variants}
                    className="mt-8 md:w-full md:max-w-xl">
                    <p className="text-secondary-text md:text-xl">
                        {technologies.text}
                    </p>
                </motion.div>
            </div>
            {mounted &&
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true, amount: 0.8}}
                    variants={variants}
                    className="max-w-xs mx-auto my-0 md:w-full md:max-w-md">
                    <IconCloud

                        iconSlugs={technologies.icons}/>
                </motion.div>
            }
        </div>
    );
}