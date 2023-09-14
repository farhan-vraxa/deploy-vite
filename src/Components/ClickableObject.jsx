import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

const ClickableObject = ({ onClick }) => {
  const meshRef = useRef();
  const { camera } = useThree();

  // Create a raycaster and set up mouse coordinates
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  // Update the raycaster and check for intersections on each frame
  useFrame(() => {
    // Update the mouse coordinates based on the mouse position
    raycaster.setFromCamera(mouse, camera);

    // Check for intersections with the mesh
    const intersects = raycaster.intersectObject(meshRef.current);

    if (intersects.length > 0) {
      // If the mesh is clicked, trigger the onClick function
      onClick();
    }
  });

  return (
    <mesh ref={meshRef} onClick={onClick}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color="red" />
    </mesh>
  );
};

export default ClickableObject;
