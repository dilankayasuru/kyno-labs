"use client"
import dynamic from "next/dynamic";
const ShimmerButton = dynamic(() => import("@/components/ui/shimmerButton"), {ssr: false});
const NeuralNetwork = dynamic(() => import("@/components/neural-network"), {ssr: false});
import {useInView} from "motion/react";
import {RefObject, useEffect, useRef, useState} from "react";
import {View} from "@react-three/drei";
import useMediaQuery from "@/hooks/customHooks";

export default function Hero() {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref as RefObject<Element>, {once: true});
    const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({
        x: 0,
        y: 0,
    });
    // Add event listener to the document to get current mouse position
    useEffect(() => {
        setMousePosition({
            x: window.innerWidth,
            y: window.innerHeight,
        })
        if (!isDesktop) {
            return;
        }
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };
        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isDesktop]);

    return (
        <div id="home" ref={ref} className="relative h-screen p-4 grid place-content-center">
            <View className="h-screen w-full absolute top-0 left-0 -z-20 overflow-hidden">
                <NeuralNetwork/>
            </View>
            <div
                style={{'background': `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0) 0%, rgba(0,0,0,1) ${isDesktop ? 30 : 50}%)`}}
                className="w-full h-screen absolute top-0 left-0 -z-10"></div>
            <div
                className={`flex flex-col justify-center items-center ${isInView ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'} transition-all duration-300`}>
                <div className="flex flex-col justify-end items-end w-fit mb-4 select-none">
                    <h1 className="font-bold cursor-default text-6xl md:text-8xl">
                        <span className="text-white">Kyno</span> <span className="text-primary-yellow">Labs</span>
                    </h1>
                    <p className="font-medium text-white md:text-2xl">Your Vision, Our Innovation.</p>
                </div>
                <p className="text-secondary-text select-none text-center md:text-xl">
                    We specialize in AI, ML, and software solutions that drive business success.
                </p>
                <ShimmerButton className="mt-8 appearance-none">
                    <span className="text-white">Get a free consultation</span>
                </ShimmerButton>
            </div>
        </div>
    )
};