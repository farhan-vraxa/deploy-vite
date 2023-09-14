import { Canvas } from '@react-three/fiber'
import './App.css'
import React, { Suspense, useState } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Experience from './Components/Experience';
import Overlay from './Components/Overlay';

function App() {
  const [cameraPosition, setCameraPosition] = useState(null);

  const handleGetCameraPositionClick = () => {
    if (cameraPosition) {
      console.log('Camera Position:', cameraPosition);
    } else {
      console.log('Camera Position is not available.');
    }
  };

  const handleOpenGoogleClick = () => {
    window.open('https://www.google.com', '_blank');
  };


  return (
    <Suspense fallback={null}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[6, 3, 5]} onUpdate={(c) => setCameraPosition(c.position)} />
        <OrbitControls />
        <Experience />
      </Canvas>
      <Overlay
        onOpenGoogleClick={handleOpenGoogleClick}
        onGetCameraPositionClick={handleGetCameraPositionClick}
      />
    </Suspense>
  );
}

export default App;





// function Experience(){
//   return(
//     <>
//       <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45}/>

//       <PerspectiveCamera makeDefault fov={50} position={[3,2,5]} />

//       <mesh>
//         <boxGeometry args={[1,1,1]} />
//         <meshBasicMaterial color={"red"} />
//       </mesh>
//     </>
//   );
// }
















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
