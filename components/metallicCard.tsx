"use client"
import {motion} from "motion/react";
import variants from "@/components/animation/variants";
export default function MetallicCard(props: { children: React.ReactNode, className?: string }) {
    const {children, className} = props;
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true, amount: 0.8}}
            variants={variants}
            className={`gradient-border rounded-2xl bg-[linear-gradient(135deg,_#ffffff21,_#d9d9d900)] bg-black ${className}`}>
            {children}
        </motion.div>
    )
}