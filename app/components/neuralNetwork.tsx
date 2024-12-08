"use client"

import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {useEffect, useMemo, useRef, useState} from "react";
import {Group, BufferGeometry, Vector3, AdditiveBlending} from "three";

export default function NeuralNetwork() {

    // Keep track of mouse position
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
        if (window.innerWidth < 600 ) {
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
    }, []);

    return (
        <div className="w-full h-dvh absolute top-0 left-0 -z-10">
            <Scene/>
            <div
                // Added gradient to control the visibility of neural network animation
                // Spotlight gradient for mobile view
                style={{'background': `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 50%)`}}
                // style={{'background': `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0) 5%, rgba(0,0,0,1) 30%)`}}
                className="w-dvw h-dvh absolute top-0 left-0"></div>
        </div>
    )
}

function Scene() {
    return (
        <Canvas id="neural-network-canvas" camera={{position: [0, 0, 10]}} gl={{alpha: false}}>
            <directionalLight position={[5, 5, 5]} intensity={1}/>
            <ambientLight intensity={0.5}/>
            <Renderer/>
        </Canvas>
    )
}

function Renderer() {

    // References to the group, particles, and lines
    const groupRef = useRef<Group>(null);
    const particlesRef = useRef<BufferGeometry>(null);
    const linesRef = useRef<BufferGeometry>(null);

    // Constants
    const maxParticleCount = 1000;
    const particleCount = 650;
    const r = 17;
    const maxConnections = 10;
    const maxDistance = 2.5;
    let vertexPos = 0;
    let colorPos = 0;
    let numConnected = 0;

    // Arrays for positions and colors
    const segments = maxParticleCount * maxParticleCount;
    const positions = useMemo(() => new Float32Array(segments * 3), [segments]);
    const colors = useMemo(() => new Float32Array(segments * 3), [segments]);

    // Array for particle positions
    const particlePositions = useMemo(() => new Float32Array(maxParticleCount * 3), [maxParticleCount]);

    // Interface for particle data
    interface ParticleData {
        velocity: Vector3;
        numConnections: number;
    }

    // Array for particle data
    const particlesData = useMemo(() =>
            new Array<ParticleData>(maxParticleCount).fill({velocity: new Vector3(), numConnections: 0}),
        [maxParticleCount]
    );

    // Vector for calculations
    const v = useMemo(() => new Vector3(), []);

    // State for mouse position
    const [mousePosition, setMousePosition] = useState<Vector3>(new Vector3());

    // Get size and viewport from useThree hook
    const {size, viewport} = useThree();

    // Effect to handle mouse movement
    useEffect(() => {
        if (window.innerWidth < 600 ) {
            return;
        }
        const handleMouseMove = (event: MouseEvent) => {
            const x = (event.clientX / size.width) * 2 - 1;
            const y = -(event.clientY / size.height) * 2 + 1;
            const z = 0;
            setMousePosition(new Vector3(x * viewport.width / 2, y * viewport.height / 2, z));
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [size, viewport]);

    // Effect to initialize particle positions and velocities
    useEffect(() => {
        for (let i = 0; i < maxParticleCount; i++) {
            const x = Math.random() * r * 2 - r;
            const y = Math.random() * r * 2 - r;
            const z = 0; // Constrain to the XY plane

            particlePositions[i * 3] = x;
            particlePositions[i * 3 + 1] = y;
            particlePositions[i * 3 + 2] = z;

            const v = new Vector3(
                -1 + Math.random() * 2,
                -1 + Math.random() * 2,
                0 // Constrain to the XY plane
            );
            particlesData[i] = {velocity: v.normalize().divideScalar(300), numConnections: 0};
        }

        if (particlesRef.current) {
            particlesRef.current.setDrawRange(0, particleCount);
        }
    }, [maxParticleCount, particlePositions, particlesData, r, particleCount]);

    // useFrame hook to update the animation on each frame
    useFrame(() => {
        vertexPos = 0;
        colorPos = 0;
        numConnected = 0;

        for (let i = 0; i < particleCount; i++) particlesData[i].numConnections = 0;

        // Update the position of the first particle to follow the mouse
        particlePositions[0] = mousePosition.x;
        particlePositions[1] = mousePosition.y;
        particlePositions[2] = mousePosition.z;

        for (let i = 0; i < particleCount; i++) {
            const particleData = particlesData[i];

            if (i !== 0) {
                v.set(
                    particlePositions[i * 3],
                    particlePositions[i * 3 + 1],
                    particlePositions[i * 3 + 2]
                )
                    .add(particleData.velocity);
                particlePositions[i * 3] = v.x;
                particlePositions[i * 3 + 1] = v.y;
                particlePositions[i * 3 + 2] = v.z;

                if (particlePositions[i * 3 + 1] < -r || particlePositions[i * 3 + 1] > r)
                    particleData.velocity.y = -particleData.velocity.y;

                if (particlePositions[i * 3] < -r || particlePositions[i * 3] > r)
                    particleData.velocity.x = -particleData.velocity.x;
            }

            if (particleData.numConnections >= maxConnections) continue;

            for (let j = i + 1; j < particleCount; j++) {
                const particleDataB = particlesData[j];
                if (particleDataB.numConnections >= maxConnections) continue;

                const dx = particlePositions[i * 3] - particlePositions[j * 3];
                const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
                const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < maxDistance) {
                    particleData.numConnections++;
                    particleDataB.numConnections++;

                    const alpha = Math.max(0.1, 1.0 - dist / maxDistance); // Ensure minimum alpha value

                    positions[vertexPos++] = particlePositions[i * 3];
                    positions[vertexPos++] = particlePositions[i * 3 + 1];
                    positions[vertexPos++] = particlePositions[i * 3 + 2];

                    positions[vertexPos++] = particlePositions[j * 3];
                    positions[vertexPos++] = particlePositions[j * 3 + 1];
                    positions[vertexPos++] = particlePositions[j * 3 + 2];

                    colors[colorPos++] = alpha;
                    colors[colorPos++] = alpha;
                    colors[colorPos++] = alpha;

                    colors[colorPos++] = alpha;
                    colors[colorPos++] = alpha;
                    colors[colorPos++] = alpha;

                    numConnected++;
                }
            }
        }

        if (linesRef.current) {
            linesRef.current.setDrawRange(0, numConnected * 2);
            linesRef.current.attributes.position.needsUpdate = true;
            linesRef.current.attributes.color.needsUpdate = true;
        }

        if (particlesRef.current) {
            particlesRef.current.attributes.position.needsUpdate = true;
        }
    });

    return (
        <group ref={groupRef} dispose={null}>
            <points>
                <bufferGeometry ref={particlesRef}>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particleCount}
                        array={particlePositions}
                        itemSize={3}
                        args={[particlePositions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    color={'#6c64d1'}
                    size={2}
                    blending={AdditiveBlending}
                    transparent={true}
                    sizeAttenuation={false}
                />
            </points>
            <lineSegments>
                <bufferGeometry ref={linesRef}>
                    <bufferAttribute
                        attach="attributes-position"
                        count={positions.length / 3}
                        array={positions}
                        itemSize={3}
                        args={[positions, 3]}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        count={colors.length / 3}
                        array={colors}
                        itemSize={3}
                        args={[colors, 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    vertexColors={true}
                    blending={AdditiveBlending}
                    transparent={true}
                    color={"#6c64d1"}
                />
            </lineSegments>
        </group>
    )
}