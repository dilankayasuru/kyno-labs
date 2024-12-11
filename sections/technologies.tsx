"use client"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import variants from "@/components/animation/variants";
import { technologies } from "@/public/assets";
const IconCloud = dynamic(() => import("@/components/ui/techStackCloud").then(mod => mod.IconCloud), { ssr: false });

export default function Technologies() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="px-6 py-8 text-white" id="technologies">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={variants}>
                <p className="gradient-title">Technologies</p>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={variants}
                className="mt-8">
                <p className="text-secondary-text">
                    {technologies.text}
                </p>
            </motion.div>
            {mounted &&
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={variants}
                    className="max-w-xs mx-auto my-0">
                    <IconCloud iconSlugs={technologies.icons} />
                </motion.div>
            }
        </div>
    );
}