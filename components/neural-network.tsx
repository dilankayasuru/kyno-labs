"use client"

import {useFrame, useThree} from "@react-three/fiber";
import {useEffect, useMemo, useRef, useState} from "react";
import {Group, BufferGeometry, Vector3, AdditiveBlending} from "three";
import useMediaQuery from "@/hooks/customHooks";

export default function NeuralNetwork() {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    // References to the group, particles, and lines
    const groupRef = useRef<Group>(null);
    const particlesRef = useRef<BufferGeometry>(null);
    const linesRef = useRef<BufferGeometry>(null);

    // Constants
    const maxParticleCount = 700;
    const particleCount = 600;
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

    const particlesData = useMemo(() =>
            new Array<ParticleData>(maxParticleCount).fill({velocity: new Vector3(), numConnections: 0}),
        [maxParticleCount]
    );

    const v = useMemo(() => new Vector3(), []);

    const [mousePosition, setMousePosition] = useState<Vector3>(new Vector3());

    const {size, viewport} = useThree();

    useEffect(() => {
        const handleMove = (event: MouseEvent | TouchEvent) => {
            const x = (event instanceof MouseEvent ? event.clientX : event.touches[0].clientX) / size.width * 2 - 1;
            const y = -(event instanceof MouseEvent ? event.clientY : event.touches[0].clientY) / size.height * 2 + 1;
            setMousePosition(new Vector3(x * viewport.width / 2, y * viewport.height / 2, 0));
        };
        const eventType = isDesktop ? 'mousemove' : 'touchmove';
        window.addEventListener(eventType, handleMove);
        return () => window.removeEventListener(eventType, handleMove);
    }, [size, viewport, isDesktop]);

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
                0
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

        particlePositions[0] = mousePosition.x;
        particlePositions[1] = mousePosition.y;
        particlePositions[2] = mousePosition.z;

        for (let i = 0; i < particleCount; i++) {
            const particleData = particlesData[i];

            if (i !== 0) {
                const index = i * 3;
                v.set(
                    particlePositions[index],
                    particlePositions[index + 1],
                    particlePositions[index + 2]
                ).add(particleData.velocity);

                particlePositions[index] = v.x;
                particlePositions[index + 1] = v.y;
                particlePositions[index + 2] = v.z;

                if (v.y < -r || v.y > r) particleData.velocity.y = -particleData.velocity.y;
                if (v.x < -r || v.x > r) particleData.velocity.x = -particleData.velocity.x;
            }

            if (particleData.numConnections >= maxConnections) continue;

            for (let j = i + 1; j < particleCount; j++) {
                const particleDataB = particlesData[j];
                if (particleDataB.numConnections >= maxConnections) continue;

                const indexJ = j * 3;
                const dx = particlePositions[i * 3] - particlePositions[indexJ];
                const dy = particlePositions[i * 3 + 1] - particlePositions[indexJ + 1];
                const dz = particlePositions[i * 3 + 2] - particlePositions[indexJ + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < maxDistance) {
                    particleData.numConnections++;
                    particleDataB.numConnections++;

                    const alpha = Math.max(0.1, 1.0 - dist / maxDistance);

                    positions[vertexPos++] = particlePositions[i * 3];
                    positions[vertexPos++] = particlePositions[i * 3 + 1];
                    positions[vertexPos++] = particlePositions[i * 3 + 2];

                    positions[vertexPos++] = particlePositions[indexJ];
                    positions[vertexPos++] = particlePositions[indexJ + 1];
                    positions[vertexPos++] = particlePositions[indexJ + 2];

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