"use client"
import dynamic from "next/dynamic";
import Image from "next/image";
import variants from "@/components/animation/variants";
import { motion } from "motion/react";
const MetallicCard = dynamic(() => import("@/components/metallicCard"), { ssr: false });

export default function WhoWeAre() {
    return (
        <div className="px-6 py-9 text-white" id="about">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={variants}>
                <p className="gradient-title">Who we are</p>
                <p className="mt-4 text-lg">Welcome to Kyno Labs: Your vision, Our innovation</p>
            </motion.div>
            <motion.p
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={variants}
                className="text-secondary-text my-8">
                At Kyno Labs, we specialize in AI, ML, DL, and software development. With 3 years of experience and
                over 10 successful projects, we deliver cutting-edge AI solutions and data-driven insights to drive
                growth and improve efficiency for businesses.
            </motion.p>
            <div className="mt-8 grid gap-4 place-content-center">
                <MetallicCard className="p-4 max-w-xs min-h-40 grid place-content-center">
                    <div className="text-center">
                        <p className="text-2xl font-medium">3+ Years</p>
                        <p className="text-secondary-text">3 Years of Expertise in AI & Software Development</p>
                    </div>
                </MetallicCard>
                <MetallicCard className="p-4 max-w-xs min-h-40 grid place-content-center">
                    <div className="text-center">
                        <div className="grid place-content-center">
                            <Image src="/map.png" alt="map" height={160} width={160} className="h-40 w-auto" />
                        </div>
                        <p className="text-secondary-text">Serving Clients Worldwide</p>
                    </div>
                </MetallicCard>
                <MetallicCard className="p-4 max-w-xs min-h-40 grid place-content-center">
                    <div className="text-center">
                        <p className="text-2xl font-medium">10+ Projects</p>
                        <p className="text-secondary-text">
                            Having completed over 10 successful projects, Kyno Labs
                            empowers businesses with cutting-edge AI and data-driven solutions.
                        </p>
                        <div className="grid place-content-center mt-4 max-w-xs">
                            <Image src="/brain.png" alt="brain" height={160} width={160} className="h-40 w-auto" />
                        </div>
                    </div>
                </MetallicCard>
                <MetallicCard className="p-4 max-w-xs min-h-40 grid place-content-center">
                    <div className="text-center">
                        <div className="grid place-content-center">
                            <Image src="/placeholder-company1.png" alt="company 1 logo" height={160} width={160} className="h-40 w-auto" />
                        </div>
                        <p className="text-secondary-text">Trusted by Company 1</p>
                    </div>
                </MetallicCard>
                <MetallicCard className="p-4 max-w-xs min-h-40 grid place-content-center">
                    <div className="text-center">
                        <div className="grid place-content-center">
                            <Image src="/placeholder-company2.png" alt="company 2 logo" height={160} width={160} className="h-40 w-auto" />
                        </div>
                        <p className="text-secondary-text">Trusted by Company 2</p>
                    </div>
                </MetallicCard>
            </div>
        </div>
    );
}