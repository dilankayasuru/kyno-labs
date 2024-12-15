"use client"
import dynamic from "next/dynamic";
import {motion} from "motion/react";
import {services} from "@/public/assets";
import variants from "@/components/animation/variants";
const ServiceItem = dynamic(() => import("@/components/serviceItem"), {ssr: false});
import {useRef} from "react";
import Image from "next/image";

export default function Services() {

    // const isDesktop = useMediaQuery('(min-width: 768px)');
    const ref = useRef(null);


    return (
        <div ref={ref}
             className="px-6 py-9 text-white md:max-w-screen-xl md:mx-auto md:my-0"
             id="services">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once: true, amount: 0.8}}
                variants={variants}
                className="md:text-center">
                <p className="gradient-title">Our services</p>
            </motion.div>
            <div className="md:flex md:gap-4 md:justify-center md:w-full md:h-full md:relative">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true, amount: 0.8}}
                    variants={variants}
                    className="invisible hidden md:block md:visible h-full w-full sticky top-0">
                    <Image src="/services.png" width={512} height={512} alt="our services image" className="pointer-events-none animate-floating"/>
                </motion.div>
                <div className="md:flex md:justify-center md:items-center md:w-full">
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{once: true, amount: 0.8}}
                        variants={variants}
                        className="mt-9 md:w-full md:mt-0">
                        {services.map((service, id) => <ServiceItem key={id} {...service} />)}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}