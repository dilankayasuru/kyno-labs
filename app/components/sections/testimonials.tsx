"use client"
import GradientText from "@/app/components/gradientText";
import {motion} from "motion/react";
import variants from "@/app/components/variants";

export default function Testimonials() {
    return (
        <div className="px-6 py-9 text-white">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once: true, amount: 0.8}}
                variants={variants}>
                <GradientText text="What our clients are saying"/>
            </motion.div>
            <div className="mt-9">

            </div>
        </div>
    )
}