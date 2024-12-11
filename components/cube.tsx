"use client"
import {
    MeshTransmissionMaterial,
    Environment,
    Lightformer,
    RoundedBox,
    Float,
} from "@react-three/drei";
import {memo, useMemo, useCallback} from "react";

export default function Cube() {
    const lightFormers = useMemo(() => (
        <group rotation={[-Math.PI / 2, 0, 0]}>
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]}/>
            {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
                <Lightformer key={i} form="circle" intensity={4} rotation={[Math.PI / 2, 0, 0]}
                             position={[x, 4, i * 4]} scale={[4, 1, 1]}/>
            ))}
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]}/>
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[50, 2, 1]}/>
            <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]}/>
        </group>
    ), []);

    const renderCubeMesh = useCallback((position: [number, number, number], color: string) => (
        <CubeMesh key={position.toString()} position={position} color={color}/>
    ), []);

    return (
        <group>
            <ambientLight/>
            <directionalLight castShadow intensity={0.6} position={[0, 0, 10]}/>
            <Environment resolution={256}>
                {lightFormers}
            </Environment>
            <Float floatIntensity={1} rotationIntensity={1} speed={1}>
                <group position={[0, 1.5, 0]} rotation={[1, -0.5, 0]} scale={1.15}>
                    {renderCubeMesh([0, 0, 0], "black")}
                    {renderCubeMesh([0, 0, 1], "black")}
                    {renderCubeMesh([0, 1, 0], "#F79D25")}
                    {renderCubeMesh([0, 1, 1], "black")}
                    {renderCubeMesh([1, 0, 0], "black")}
                    {renderCubeMesh([1, 0, 1], "black")}
                    {renderCubeMesh([1, 1, 0], "black")}
                    {renderCubeMesh([1, 1, 1], "#2B1EDD")}
                </group>
            </Float>
        </group>
    )
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
                    samples={2}
                    resolution={128}
                    transmission={0}
                    roughness={0.25}
                    clearcoat={0.1}
                    clearcoatRoughness={0.1}
                    thickness={2}
                    backsideThickness={200}
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
})