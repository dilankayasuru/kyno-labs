"use client"
import dynamic from "next/dynamic";
import {motion} from "motion/react";
import variants from "@/components/animation/variants";
import {services} from "@/public/assets";
import {View} from "@react-three/drei";

const ServiceItem = dynamic(() => import("@/components/serviceItem"), {ssr: false});
const Cube = dynamic(() => import("@/components/cube"), {ssr: false});

export default function Services() {
    return (
        <div className="relative">
            <View className="w-full h-screen absolute top-0 backdrop-blur-sm -z-10 bg-black bg-opacity-15">
                <Cube/>
            </View>
            <div className="px-6 py-9 text-white ">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true, amount: 0.8}}
                    variants={variants}>
                    <p className="gradient-title">Our services</p>
                </motion.div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true, amount: 0.8}}
                    variants={variants}
                    className="mt-9">
                    {services.map((service, id) => <ServiceItem key={id} {...service} />)}
                </motion.div>
            </div>
        </div>

    );
}