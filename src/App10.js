/**
 * 10.纹理材质
 */
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, Environment } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Canvas camera={{ position: [0, 2, 5] }}>
        <InfoThree></InfoThree>
        <OrbitControls></OrbitControls>
        <ambientLight args={[0xffffff]} intensity={0.5} />
        <directionalLight args={[0xffffff]} position={[0, 5, 5]} intensity={0.5} />

        <Suspense fallback={null}>
          <Model></Model>
        </Suspense>
      </Canvas>
    </div>
  );
}

function Model() {
  const BASE_URL = './assets/texture/';
  const [
    colorMap,
    displacementMap,
    normalMap,
    roughnessMap,
    aoMap
  ] = useLoader(THREE.TextureLoader, [
    `${BASE_URL}PavingStones092_1K_Color.jpg`,
    `${BASE_URL}PavingStones092_1K_Displacement.jpg`,
    `${BASE_URL}PavingStones092_1K_Normal.jpg`,
    `${BASE_URL}PavingStones092_1K_Roughness.jpg`,
    `${BASE_URL}PavingStones092_1K_AmbientOcclusion.jpg`,
  ]);
  return <mesh>
    <sphereGeometry args={[1, 100, 100]}></sphereGeometry>
    <meshStandardMaterial
      map={colorMap}
      displacementMap={displacementMap} displacementScale={0.5}
      normalMap={normalMap}
      roughnessMap={roughnessMap}
      aoMap={aoMap}
    />
  </mesh>;
}

function InfoThree() {
  const three = useThree();
  const { camera, gl } = three;
  console.log(three, camera, gl);
}

export default App;
