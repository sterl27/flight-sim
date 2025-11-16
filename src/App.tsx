import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Suspense } from 'react';
import Aircraft from './components/Aircraft';
import Ground from './components/Ground';
import UI from './components/UI';
import './App.css';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        shadows
        camera={{ position: [0, 5, 10], fov: 60 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <Physics gravity={[0, -9.81, 0]}>
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight
              position={[50, 50, 25]}
              intensity={1}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-far={100}
              shadow-camera-left={-50}
              shadow-camera-right={50}
              shadow-camera-top={50}
              shadow-camera-bottom={-50}
            />

            {/* Environment */}
            <Sky sunPosition={[100, 20, 100]} />
            <fog attach="fog" args={['#87CEEB', 50, 200]} />

            {/* Scene Objects */}
            <Aircraft />
            <Ground />
          </Physics>
        </Suspense>

        {/* Camera Controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minDistance={5}
          maxDistance={100}
        />
      </Canvas>

      {/* UI Overlay */}
      <UI />
    </div>
  );
}

export default App;
