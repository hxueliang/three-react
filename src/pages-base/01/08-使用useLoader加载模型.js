/**
 * 08-使用useLoader加载模型
 */
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import { useRef, Suspense } from 'react';

function App() {
  return (
    <div className='App'>
      <Canvas camera={{ position: [0, 3, 5] }}>
        <InfoThree></InfoThree>
        <OrbitControls></OrbitControls>
        <ambientLight args={[0xffffff]} intensity={0.5} />
        <directionalLight args={[0xffffff]} position={[0, 5, 5]} intensity={0.5} />

        <Suspense>
          <Model></Model>
        </Suspense>
      </Canvas>
    </div>
  );
}

function Model() {
  const gltf = useLoader(GLTFLoader, '../assets/model/pad.gltf');
  return <primitive object={gltf.scene} scale="10" />;
}

function InfoThree() {
  const three = useThree();
  const { camera, gl } = three;
  console.log(three, camera, gl);
}

export default App;
