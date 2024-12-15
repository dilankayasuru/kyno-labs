"use client"
import dynamic from "next/dynamic";

const ShimmerButton = dynamic(() => import("@/components/ui/shimmerButton"), {ssr: false});
const NeuralNetwork = dynamic(() => import("@/components/neural-network"), {ssr: false});
const ConsultationForm = dynamic(() => import("@/components/consultationForm"), {ssr: false});
import {useInView, useMotionValue, useMotionTemplate, motion} from "motion/react";
import {RefObject, useEffect, useRef, useState} from "react";
import useMediaQuery from "@/hooks/customHooks";
import {Canvas} from "@react-three/fiber";
import {Preload} from "@react-three/drei";

export default function Hero() {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const [formOpened, setFormOpened] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref as RefObject<Element>, {once: true});
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMove = (event: MouseEvent | TouchEvent) => {
            if (event instanceof MouseEvent) {
                mouseX.set(event.clientX);
                mouseY.set(event.clientY);
            } else {
                mouseX.set(event.touches[0].clientX);
                mouseY.set(event.touches[0].clientY);
            }
        };

        if (!isDesktop) {
            mouseY.set(window.innerHeight);
            mouseX.set(window.innerWidth);
            window.addEventListener('touchmove', handleMove);
        } else {
            mouseY.set(window.innerHeight / 2);
            mouseX.set(window.innerWidth / 2);
            window.addEventListener('mousemove', handleMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchmove', handleMove);
        };
    }, [mouseX, mouseY, isDesktop]);

    const gradient = useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0) 0%, rgba(0,0,0,1) ${isDesktop ? 30 : 50}%)`;

    return (
        <>
            {formOpened && <ConsultationForm onClose={() => setFormOpened(false)}/>}
            <div id="home" ref={ref} className="relative h-screen p-4 grid place-content-center">
                <Canvas
                    style={{
                        height: "100vh",
                        width: "100%",
                        position: "absolute",
                        zIndex: -10,
                    }}
                    camera={{position: [0, 0, 10]}} gl={{alpha: false}}>
                    <NeuralNetwork/>
                    <Preload/>
                </Canvas>
                <motion.div
                    style={{
                        background: gradient
                    }}
                    className="will-change-contents w-full h-screen absolute top-0 left-0 -z-10 pointer-events-none"></motion.div>
                <div
                    className={`will-change-transform flex flex-col justify-center items-center ${isInView ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'} transition-all duration-300`}>
                    <div className="flex flex-col justify-end items-end w-fit mb-4 select-none">
                        <h1 className="font-bold cursor-default text-6xl md:text-8xl">
                            <span className="text-white">Kyno</span> <span className="text-primary-yellow">Labs</span>
                        </h1>
                        <p className="font-medium text-white md:text-2xl">Your Vision, Our Innovation.</p>
                    </div>
                    <p className="text-secondary-text select-none text-center md:text-xl">
                        We specialize in AI, ML, and software solutions that drive business success.
                    </p>
                    <ShimmerButton
                        onClick={() => setFormOpened(!formOpened)}
                        className="mt-8 appearance-none">
                        <span className="text-white">Get a free consultation</span>
                    </ShimmerButton>
                </div>
            </div>
        </>

    )
};