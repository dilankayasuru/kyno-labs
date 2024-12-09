"use client"
import NeuralNetwork from "@/app/components/neuralNetwork";
import ShimmerButton from "@/components/ui/shimmer-button";
import { useInView } from "motion/react";
import {useRef} from "react";

export default function Hero() {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <div ref={ref} className="relative h-dvh p-4 grid place-content-center">
            <NeuralNetwork/>
            <div className={`flex flex-col justify-center items-center ${isInView ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0' } transition-all duration-300`}>
                <div className="flex flex-col justify-end items-end w-fit mb-4 select-none">
                    <h1 className="font-bold cursor-default text-6xl">
                        <span className="text-white">Kyno</span> <span className="text-primary-yellow">Labs</span>
                    </h1>
                    <p className="font-medium text-white">Your Vision, Our Innovation.</p>
                </div>
                <p className="text-secondary-text select-none">
                    We specialize in AI, ML, and software solutions that drive business success.
                </p>
                <ShimmerButton className="mt-8">
                    <span>Get a free consultation</span>
                </ShimmerButton>
            </div>
        </div>
    )
};