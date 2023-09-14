// import { OrbitControls, PerspectiveCamera, useGLTF  } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber'
// import React, { Suspense } from 'react';
import React, { Suspense, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const Experience = () => {
  const { scene } = useGLTF('city_grid_block2.glb');
  const { camera, gl } = useThree(); // Access the camera and WebGLRenderer instances

  // Set the far property of the camera to a large value for infinite visibility
  camera.far = 200000;

  useEffect(() => {
    const handleResize = () => {
      // Update camera aspect ratio based on the window's aspect ratio
      const aspect = window.innerWidth / window.innerHeight;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      gl.setSize(window.innerWidth, window.innerHeight);
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Initial setup
    handleResize();

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, [camera, gl]);

  useEffect(() => {
    // Log the camera position when the component mounts
    console.log('Camera Position:', camera.position);
    
  }, [camera]);

  return (
    <group>
      {/* Add lights, camera, or any other scene elements */}
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[10, 10, 10]} />

      {/* Render the loaded GLB model */}
      <primitive object={scene} />
    </group>
  );
};

export default Experience;


// function Experience(){
//     return(
//       <>
//         <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45}/>
  
//         <PerspectiveCamera makeDefault fov={50} position={[3,2,5]} />
  
//         <mesh>
//           <boxGeometry args={[1,1,1]} />
//           <meshBasicMaterial color={"red"} />
//         </mesh>
//       </>
//     );
//   }

//   export default Experience;


// const Experience = () => {
//     return (
//         <mesh>
//             <boxGeometry />
//             <meshNormalMaterial />
//         </mesh>
//     );
// }

// export default Experience;