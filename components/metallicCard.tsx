"use client"
import { motion } from "framer-motion";
import variants from "@/components/animation/variants";
import {memo} from "react";

const MetallicCard = memo(function MetallicCard(props: { children: React.ReactNode, className?: string }) {
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
});

MetallicCard.displayName = "MetallicCard";

export default MetallicCard;