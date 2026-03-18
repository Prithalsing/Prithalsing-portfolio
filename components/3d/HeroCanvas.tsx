"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function GeometricCenterpiece() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.rotation.z = t * 0.1;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = t * 0.15;
      wireframeRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <group>
      {/* Inner Distorted Core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 10]} />
        <MeshDistortMaterial
          color="#1a1a1a"
          speed={2}
          distort={0.3}
          roughness={0}
          metalness={1}
        />
      </mesh>

      {/* Outer Wireframe Shell */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[2.05, 10]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Floating Orbital Rings */}
      {[1, 2, 3].map((i) => (
        <Float
          key={i}
          speed={2}
          rotationIntensity={1}
          floatIntensity={1}
          position={[0, 0, 0]}
        >
          <mesh rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
            <torusGeometry args={[2.5 + i * 0.3, 0.005, 16, 100]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function SubtleEnvironment() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#444444" />
      
      {/* Deep Space Background gradient effect */}
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial 
          side={THREE.BackSide} 
          color="#000000" 
          transparent 
          opacity={1}
        />
      </mesh>
    </>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <SubtleEnvironment />
        <GeometricCenterpiece />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  );
}
