"use client"
import {
    MeshTransmissionMaterial,
    RoundedBox, Float, Environment,
} from "@react-three/drei";
import {memo} from "react";
import {Vector3} from "three";

interface CubeProps {
    position: {
        x: number,
        y: number,
    }
}

const CubeMesh = memo(function CubeMesh(props: { position: Vector3, color: string }) {
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
    const {position = {x: 0, y: 0}} = props;

    return (
        <group>
            <ambientLight/>
            <directionalLight castShadow intensity={0.6} position={[0, 0, 10]}/>
            <Float
                speed={1}
                rotationIntensity={1.5}
                floatIntensity={1.2}>
                <group
                    position={new Vector3(position.x, position.y, 0)}
                    rotation={[0, 0.05, 1]}
                    scale={2.3}>
                    <CubeMesh position={new Vector3(0, 0, 0)} color="black"/>
                    <CubeMesh position={new Vector3(0, 0, 1)} color="#F79D25"/>
                    <CubeMesh position={new Vector3(0, 1, 0)} color="black"/>
                    <CubeMesh position={new Vector3(0, 1, 1)} color="black"/>
                    <CubeMesh position={new Vector3(1, 0, 0)} color="black"/>
                    <CubeMesh position={new Vector3(1, 0, 1)} color="black"/>
                    <CubeMesh position={new Vector3(1, 1, 0)} color="black"/>
                    <CubeMesh position={new Vector3(1, 1, 1)} color="#2B1EDD"/>
                </group>
            </Float>
            <Environment preset="city" environmentIntensity={0.5}/>
        </group>
    )
}