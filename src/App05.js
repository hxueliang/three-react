/**
 * 05.useFrame设置动画
 */
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Canvas>
        <BoxRotation></BoxRotation>
        <ambientLight args={[0xffffff]} intensity={0.5} />
        <directionalLight args={[0xffffff]} position={[0, 5, 5]} intensity={0.5} />
      </Canvas>
    </div>
  );
}

function BoxRotation() {
  return (
    <mesh>
      <boxGeometry />
      <meshPhongMaterial />
    </mesh>
  );
}

export default App;
