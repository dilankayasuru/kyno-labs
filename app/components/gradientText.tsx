"use client"

import { motion } from "motion/react";
import variants from "@/app/components/variants";

export default function GradientText(props: {
    text: string,
    className?: string,
}) {

    const {text, className="from-white to-primary-blue text-4xl font-semibold"} = props;
    // const {text, className="from-white from-75% via-primary-blue via-100% to-white text-4xl font-semibold"} = props;

    return (
        <motion.p
            variants={variants}
            className={`bg-gradient-to-r pb-1 inline-block text-transparent bg-clip-text ${className}`}>
            {text}
        </motion.p>
    )
}