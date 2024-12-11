"use client"
import {Canvas} from "@react-three/fiber";
import {
    MeshTransmissionMaterial,
    Environment,
    Lightformer,
    RoundedBox,
    Float,
} from "@react-three/drei";
import {memo} from "react";

export default function Cube() {
    return (
        <div className="w-full h-screen absolute top-0 left-0 -z-50">
            <CubeScene/>
        </div>
    )
}

function CubeScene() {

    return (
        <Canvas frameloop="always" shadows camera={{position: [1, -5, 15], fov: 35, near: 1, far: 50}}>
            <ambientLight/>
            <directionalLight castShadow intensity={0.6} position={[0, 0, 10]}/>
            <Environment resolution={256}>
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
            </Environment>
            <Float floatIntensity={0.5} rotationIntensity={0.5} speed={1}>
                <group position={[0, 0, 0]} rotation={[1, -0.5, 0]}
                       scale={1.25}>
                    <MemoizedCubeMesh position={[0, 0, 0]} color="black"/>
                    <MemoizedCubeMesh position={[0, 0, 1]} color="black"/>
                    <MemoizedCubeMesh position={[0, 1, 0]} color="#F79D25"/>
                    <MemoizedCubeMesh position={[0, 1, 1]} color="black"/>
                    <MemoizedCubeMesh position={[1, 0, 0]} color="black"/>
                    <MemoizedCubeMesh position={[1, 0, 1]} color="black"/>
                    <MemoizedCubeMesh position={[1, 1, 0]} color="black"/>
                    <MemoizedCubeMesh position={[1, 1, 1]} color="#2B1EDD"/>
                </group>
            </Float>
        </Canvas>
    )
}

function CubeMesh(props: { position: [number, number, number], color: string }) {
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
                    resolution={256}
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

        </mesh>
    )
}

const MemoizedCubeMesh = memo(CubeMesh);