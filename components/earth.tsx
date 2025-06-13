// 'use client';
// import { Canvas, useLoader } from '@react-three/fiber'
// import { useScroll } from 'framer-motion';
// import { motion } from 'framer-motion-3d';
// import { useRef } from 'react';
// import { TextureLoader } from 'three'

// export default function Earth() {
//     const scene = useRef(null);

//     const { scrollYProgress } = useScroll({
//         target: scene,
//         offset: ['start end', 'end start']
//     })

//     const [color, normal, aoMap] = useLoader(TextureLoader, [
//         '/color.webp',
//         '/normal.webp'
//     ])

//     return (
//         <Canvas>
//             <ambientLight intensity={0.1} />
//             <directionalLight intensity={3.5} position={[1, 0, -.50]} />
//             <motion.mesh scale={2} rotation-y={scrollYProgress}>
//                 <sphereGeometry args={[1, 64, 64]}/>
//                 <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap}/>
//             </motion.mesh>
//         </Canvas>
//     )
// }
'use client';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { useRef, useEffect } from 'react';
import { TextureLoader, BackSide, ShaderMaterial, Vector2, Color } from 'three';
import { Suspense } from 'react';
import * as THREE from 'three';

// Vertex and Fragment Shaders for Corona Effect
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform float opacity;
  void main() {
    float dist = distance(vUv, vec2(0.5, 0.5)); // Distance from center
    float alpha = smoothstep(0.4, 0.7, 0.5) * opacity; // Create a gradient
    gl_FragColor = vec4(2.0, 0.9, 0.6, alpha); // Yellow-orange glow
  }
`;

const atmosphereVertexShader = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const atmosphereFragmentShader = `
  varying vec3 vNormal;
  uniform vec3 glowColor;
  uniform float opacity;
  void main() {
    float intensity = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
    gl_FragColor = vec4(glowColor, opacity * intensity);
  }
`;

function EarthMesh() {
  const earthRef = useRef<THREE.Mesh>(null);
  const [color, normal] = useLoader(TextureLoader, [
    '/color.webp',
    '/normal.webp',
  ], (loader) => {
    loader.setCrossOrigin('anonymous');
  });

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <motion.mesh ref={earthRef as any} position={[0, 0, 0]} scale={2}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={color} normalMap={normal} />
    </motion.mesh>
  );
}

function SunMesh() {
  const coronaMaterial = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      opacity: { value: 0.8 },
    },
    transparent: true,
    side: BackSide,
  });

  return (
    <motion.mesh position={[0, 0, 0]}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshBasicMaterial color="yellow" transparent opacity={0.9} />
      <pointLight intensity={5} distance={6} color="white" />

      <motion.mesh scale={[2, 2, 2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <primitive object={coronaMaterial} attach="material" />
      </motion.mesh>
    </motion.mesh>
  );
}

function Atmosphere() {
  const atmosphereRef = useRef<THREE.Mesh>(null);

  const atmosphereMaterial = new ShaderMaterial({
    vertexShader: atmosphereVertexShader,
    fragmentShader: atmosphereFragmentShader,
    uniforms: {
      glowColor: { value: new Color(0xFFFFFF) }, // White atmosphere
      opacity: { value: 1 }, // Adjust opacity for glow intensity
    },
    transparent: true,
    side: BackSide,
    blending: THREE.AdditiveBlending,
  });

  useFrame(() => {
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += 0.001; // Slight rotation for effect
    }
  });

  return (
    <motion.mesh ref={atmosphereRef as any} scale={[1.2, 1.2, 1.2]}>
      <sphereGeometry args={[1, 64, 64]} />
      <primitive object={atmosphereMaterial} attach="material" />
    </motion.mesh>
  );
}

export default function Earth({ style }: { style?: React.CSSProperties }) {
  useEffect(() => {
    console.log('Earth component mounted');
    return () => console.log('Earth component unmounted');
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, outputColorSpace: 'srgb', alpha: true }}
      style={style || { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <EarthMesh />
        <SunMesh />
        <Atmosphere />
      </Suspense>
    </Canvas>
  );
}