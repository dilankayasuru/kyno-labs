"use client"

import {motion} from "framer-motion";

export default function Background() {

    const gradients = [
        'radial-gradient(circle at 0% 0%, rgba(40,30,221, 0.20), rgb(0,0,0))',
        'radial-gradient(circle at 0% 100%, rgba(40,30,221, 0.25), rgb(0,0,0))',
        'radial-gradient(circle at 50% 50%, rgba(40,30,221, 0.20), rgb(0,0,0))',
        'radial-gradient(circle at 100% 0%, rgba(40,30,221, 0.25), rgb(0,0,0))',
        'radial-gradient(circle at 100% 100%, rgba(40,30,221, 0.20), rgb(0,0,0))',
        'radial-gradient(circle at 50% 50%, rgba(40,30,221, 0.25), rgb(0,0,0))',
        'radial-gradient(circle at 0% 0%, rgba(40,30,221, 0.20), rgb(0,0,0))',
    ]

    return (
        <motion.div
            style={{backgroundColor: "black"}}
            animate={{
                backgroundImage: gradients
            }}
            transition={{
                duration: 20,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
            }}
            className="h-dvh w-full fixed -z-20 bg-opacity-0 top-0 left-0"
        />
    );
}