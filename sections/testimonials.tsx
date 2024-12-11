"use client"
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import variants from "@/components/animation/variants";
const TestimonialsSlider = dynamic(() => import("@/components/testimonialsSlider"), { ssr: false });

export default function Testimonials() {
    return (
        <div className="px-6 py-8 text-white">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={variants}>
                <p className="gradient-title">What our clients are saying</p>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={variants}
                className="mt-8">
                <TestimonialsSlider />
            </motion.div>
        </div>
    );
}