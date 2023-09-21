/**
 * 08.useLoader与模型加载
 */
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Canvas>
        <InfoThree></InfoThree>
        <OrbitControls></OrbitControls>
        <ambientLight args={[0xffffff]} intensity={0.5} />
        <directionalLight args={[0xffffff]} position={[0, 5, 5]} intensity={0.5} />
      </Canvas>
    </div>
  );
}

function InfoThree() {
  const three = useThree();
  const { camera, gl } = three;
  console.log(three, camera, gl);
}

export default App;
