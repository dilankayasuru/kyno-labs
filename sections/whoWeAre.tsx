"use client"
import dynamic from "next/dynamic";
import {motion} from "motion/react";
import {Preload, View} from "@react-three/drei";

const Cube = dynamic(() => import("@/components/cube"), {ssr: false});
import variants from "@/components/animation/variants";
import Image from "next/image";
import useMediaQuery from "@/hooks/customHooks";

const MetallicCard = dynamic(() => import("@/components/metallicCard"), {ssr: false});

export default function WhoWeAre() {

    const isDesktop = useMediaQuery('(min-width: 768px)');
    const hidden = true;

    return (
        <div className="text-white py-9 md:relative" id="about">
            {isDesktop &&
                <View visible={isDesktop} className="md:w-full md:h-full md:absolute">
                    <Cube position={{x: 0, y: -3}}/>
                    <Preload all/>
                </View>
            }
            <div className="md:text-center md:grid md:place-content-center px-6">
                <motion.div
                    style={{willChange: "transform, scale, opacity"}}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true, amount: 0.8}}
                    variants={variants}>
                    <p className="gradient-title">Who we are</p>
                    <p className="mt-4 text-lg md:mt-8 md:text-xl">Welcome to Kyno Labs: Your vision, Our innovation</p>
                </motion.div>
                <motion.p
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true, amount: 0.8}}
                    variants={variants}
                    className="text-secondary-text my-8 md:max-w-4xl">
                    At Kyno Labs, we specialize in AI, ML, DL, and software development. With 3 years of experience and
                    over 10 successful projects, we deliver cutting-edge AI solutions and data-driven insights to drive
                    growth and improve efficiency for businesses.
                </motion.p>
            </div>
            <div
                className="grid gap-4 place-content-center md:grid-cols-8 md:max-w-screen-lg md:mx-auto md:my-0 md:min-h-96">
                <div
                    className={`${hidden ? 'md:row-end-3 md:row-start-1 md:col-start-2 md:col-end-5' : 'md:col-start-1 md:col-end-4'}`}>
                    <MetallicCard
                        className="md:bg-black md:bg-opacity-25 md:h-full md:backdrop-blur-lg p-4 max-w-xs min-h-40 grid place-content-center md:max-w-none md:bg-transparent">
                        <div className="text-center">
                            <p className="text-2xl font-medium">3+ Years</p>
                            <p className="text-secondary-text">3 Years of Expertise in AI & Software Development</p>
                        </div>
                    </MetallicCard>
                </div>
                {!hidden &&
                    <div className="md:col-start-1 md:backdrop-blur-lg md:col-end-4 md:row-start-2 md:row-end-3">
                        <MetallicCard
                            className="md:bg-black md:bg-opacity-25 md:max-w-none md:bg-transparent p-4 max-w-xs min-h-40 grid place-content-center">
                            <div className="text-center">
                                <div className="grid place-content-center">
                                    <Image src="/map.png" alt="map" height={160} width={160} className="h-40 w-auto"/>
                                </div>
                                <p className="text-secondary-text">Serving Clients Worldwide</p>
                            </div>
                        </MetallicCard>
                    </div>
                }
                <div
                    className={`${hidden ? 'md:col-start-5 md:col-end-8' : 'md:col-start-4 md:col-end-7'} md:row-start-1 md:row-end-3`}>
                    <MetallicCard
                        className="md:bg-black md:bg-opacity-25 md:backdrop-blur-lg md:h-full md:max-w-none md:bg-transparent p-4 max-w-xs min-h-40 grid place-content-center">
                        <div className="text-center">
                            <p className="text-2xl font-medium">10+ Projects</p>
                            <p className="text-secondary-text">
                                Having completed over 10 successful projects, Kyno Labs
                                empowers businesses with cutting-edge AI and data-driven solutions.
                            </p>
                            <div className="grid place-content-center mt-4 max-w-xs">
                                <Image src="/brain.png" alt="brain" height={160} width={160} className="h-40 w-auto"/>
                            </div>
                        </div>
                    </MetallicCard>
                </div>
                {!hidden &&
                    <>
                        <div
                            className="md:bg-black md:bg-opacity-25 md:col-start-7 md:col-end-9 md:row-start-1 md:row-end-2">
                            <MetallicCard
                                className=" md:backdrop-blur-lg md:max-w-none md:bg-transparent p-4 max-w-xs min-h-40 grid place-content-center">
                                <div className="text-center">
                                    <div className="grid place-content-center">
                                        <Image src="/placeholder-company1.png" alt="company 1 logo" height={160}
                                               width={160}
                                               className="h-40 w-auto"/>
                                    </div>
                                    <p className="text-secondary-text">Trusted by Company 1</p>
                                </div>
                            </MetallicCard>
                        </div>
                        <div className="md:col-start-7 md:col-end-9 md:row-start-2 md:row-end-3">
                            <MetallicCard
                                className="md:bg-black md:bg-opacity-25 md:backdrop-blur-lg md:max-w-none md:bg-transparent p-4 max-w-xs min-h-40 grid place-content-center">
                                <div className="text-center">
                                    <div className="grid place-content-center">
                                        <Image src="/placeholder-company2.png" alt="company 2 logo" height={160}
                                               width={160}
                                               className="h-40 w-auto"/>
                                    </div>
                                    <p className="text-secondary-text">Trusted by Company 2</p>
                                </div>
                            </MetallicCard>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}