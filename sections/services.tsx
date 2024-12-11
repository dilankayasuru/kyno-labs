"use client"
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import variants from "@/components/animation/variants";
import { services } from "@/public/assets";
const ServiceItem = dynamic(() => import("@/components/serviceItem"), { ssr: false });

export default function Services() {
    return (
        <div className="px-6 py-9 text-white">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={variants}>
                <p className="gradient-title">Our services</p>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={variants}
                className="mt-9">
                {services.map((service, id) => <ServiceItem key={id} {...service} />)}
            </motion.div>
        </div>
    );
}