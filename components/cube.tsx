"use client"
import {
    MeshTransmissionMaterial,
    RoundedBox, Float, Environment,
} from "@react-three/drei";
import {memo, useCallback, useEffect, useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {useSpring} from "motion/react";
import {Group} from "three";

interface CubeProps {
    position: {
        x: number,
        y: number,
    }
}

const CubeMesh = memo(function CubeMesh(props: { position: [number, number, number], color: string }) {
    const {position, color} = props;

    return (
        <mesh position={position}>
            <RoundedBox
                radius={0.10}
                smoothness={4}
                bevelSegments={4}
                creaseAngle={0.4}
                args={[1, 1, 1]}>
                <MeshTransmissionMaterial
                    backside={false}
                    samples={5}
                    resolution={1024}
                    transmission={0}
                    roughness={0.2}
                    thickness={1}
                    backsideThickness={100}
                    ior={1.5}
                    chromaticAberration={1}
                    anisotropy={1}
                    distortion={0}
                    distortionScale={0.2}
                    temporalDistortion={0}
                    attenuationDistance={0.5}
                    attenuationColor='#ffffff'
                    color={color}
                    toneMapped={false}/>
            </RoundedBox>
        </mesh>)
});

export default function Cube(props: CubeProps) {
    const {position} = props;

    const ref = useRef<Group>(null);
    const x = useSpring(0, {damping: 15});
    const y = useSpring(0, {damping: 15});

    useEffect(() => {
        if (position) {
            x.set(position.x);
            y.set(position.y);
        }
    }, [position, x, y]);

    const renderCubeMesh = useCallback((position: [number, number, number], color: string) => (
        <CubeMesh key={position.toString()} position={position} color={color}/>
    ), []);

    useFrame(() => {
        if (ref.current) {
            ref.current.position.x = x.get();
            ref.current.position.y = y.get();
            ref.current.position.z = -5;
        }
    });

    return (
        <group>
            <ambientLight/>
            <directionalLight castShadow intensity={0.6} position={[0, 0, 10]}/>
            <Float
                speed={1}
                rotationIntensity={2}
                floatIntensity={1}>
                <group
                    ref={ref}
                    rotation={[0, 0.05, 1]}
                    scale={2.3}>
                    {renderCubeMesh([0, 0, 0], "black")}
                    {renderCubeMesh([0, 0, 1], "#F79D25")}
                    {renderCubeMesh([0, 1, 0], "black")}
                    {renderCubeMesh([0, 1, 1], "black")}
                    {renderCubeMesh([1, 0, 0], "black")}
                    {renderCubeMesh([1, 0, 1], "black")}
                    {renderCubeMesh([1, 1, 0], "black")}
                    {renderCubeMesh([1, 1, 1], "#2B1EDD")}
                </group>
            </Float>
            <Environment preset="city" environmentIntensity={0.5}/>
        </group>
    )
}