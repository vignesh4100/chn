import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';


const count = 6000;

const BrainParticles = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const raycaster = useRef(new THREE.Raycaster());
  const hoverPoint = useRef(new THREE.Vector3());
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const [positions, setPositions] = useState<THREE.Vector3[]>([]);

  const { scene } = useGLTF('/brain.glb');
  const { mouse, camera } = useThree();

  useEffect(() => {
    const mesh = scene.children.find(
      (child) => child.type === 'Mesh'
    ) as THREE.Mesh;

    if (!mesh || !mesh.geometry) {
      console.error('Brain mesh not found');
      return;
    }

    // Make sure geometry is indexed
    if (!mesh.geometry.index) {
      mesh.geometry = BufferGeometryUtils.mergeVertices(mesh.geometry);
    }

    const sampler = new MeshSurfaceSampler(mesh).build();
    const sampled: THREE.Vector3[] = [];
    const temp = new THREE.Vector3();

    for (let i = 0; i < count; i++) {
      sampler.sample(temp);
      sampled.push(temp.clone());
    }

    setPositions(sampled);
  }, [scene]);

  const dynamicPositions = useRef<THREE.Vector3[]>(
    Array.from({ length: count }, () => new THREE.Vector3())
  );

  useEffect(() => {
    // Copy initial positions once loaded
    if (positions.length > 0) {
      positions.forEach((pos, i) => {
        dynamicPositions.current[i].copy(pos);
      });
    }
  }, [positions]);

  useFrame(() => {
    if (!meshRef.current || positions.length === 0) return;

    raycaster.current.setFromCamera(mouse, camera);
    const brainSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 2);
    const intersection = new THREE.Vector3();

    if (raycaster.current.ray.intersectSphere(brainSphere, intersection)) {
      const localPoint = meshRef.current.worldToLocal(intersection.clone());
      hoverPoint.current.copy(localPoint);
    }

    for (let i = 0; i < count; i++) {
      const original = positions[i];
      const current = dynamicPositions.current[i];

      const dx = current.x - hoverPoint.current.x;
      const dy = current.y - hoverPoint.current.y;
      const dz = current.z - hoverPoint.current.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      const influenceRadius = 0.6;

      if (dist < influenceRadius) {
        const force = 0.07 * (1 - dist / influenceRadius);
        current.x += dx * force;
        current.y += dy * force;
        current.z += dz * force;
      } else {
        current.x += (original.x - current.x) * 0.03;
        current.y += (original.y - current.y) * 0.03;
        current.z += (original.z - current.z) * 0.03;
      }

      dummy.position.copy(current);
      dummy.rotation.set(0, 0, 0);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    meshRef.current.rotation.y += 0.0015;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <coneGeometry args={[0.03, 0.08, 3]} />
      <meshBasicMaterial color={'white'} wireframe />
    </instancedMesh>
  );
};

const BrainParticlesHero = () => (
  <div className="relative w-full h-full">
    <Canvas
      camera={{ position: [0, 0, 4], fov: 75 }}
      style={{ width: '100%', height: '100%' }}
      className="rounded-full overflow-hidden"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />
      <BrainParticles />
    </Canvas>
  </div>
);

export default BrainParticlesHero;
