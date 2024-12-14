"use client"
import {Canvas} from "@react-three/fiber";
import {View} from "@react-three/drei";
import {Suspense} from "react";
import useMediaQuery from "@/hooks/customHooks";

export default function CanvasView() {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (isDesktop &&
        <Canvas
            style={{
                position: "fixed",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: -10,
            }}
            dpr={[1, 1.5]}
            orthographic={true}
            camera={{
                position: [0, 0, 5],
                zoom: 60,
            }}
        >
            <Suspense fallback={null}>
                <View.Port/>
            </Suspense>
        </Canvas>
    )
}