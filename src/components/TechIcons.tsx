import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const icons = [
  { position: [2, 0, 0] },
  { position: [-2, 0, 0] },
  { position: [0, 2, 0] },
  { position: [0, -2, 0] },
  { position: [1.5, 1.5, 0] },
  { position: [-1.5, -1.5, 0] },
];

const TechIcons = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {icons.map((icon, i) => (
        <mesh key={i} position={icon.position}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="#00FFFF" />
        </mesh>
      ))}
    </group>
  );
};

export default TechIcons;
