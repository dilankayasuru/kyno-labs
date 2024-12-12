"use client"
import {Canvas} from "@react-three/fiber";
import {OrthographicCamera, View} from "@react-three/drei";
import {Suspense} from "react";

export default function CanvasView() {
    return (
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
            shadows
            dpr={[1, 1.5]}
            gl={{
                powerPreference: "high-performance",
                antialias: true
            }}
        >
            <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={60} />
            <Suspense fallback={null}>
                <View.Port/>
            </Suspense>
        </Canvas>
    )
}