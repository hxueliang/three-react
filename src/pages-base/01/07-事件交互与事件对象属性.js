/**
 * 07-事件交互与事件对象属性
 */
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

function App() {
  return (
    <div className='App'>
      <Canvas>
        <InfoThree></InfoThree>
        <BoxRotation></BoxRotation>
        <ambientLight args={[0xffffff]} intensity={0.5} />
        <directionalLight args={[0xffffff]} position={[0, 5, 5]} intensity={0.5} />
      </Canvas>
    </div>
  );
}

function BoxRotation() {
  const mesh = useRef();

  useFrame(({ clock }) => {
    mesh.current.rotation.x = clock.getElapsedTime();
    mesh.current.rotation.y = clock.getElapsedTime();
  });

  const handlerClick = event => {
    console.log(event);
    event.eventObject.material.color.set('blue');
  };

  return (
    <mesh ref={mesh} onClick={handlerClick}>
      <boxGeometry />
      <meshPhongMaterial />
    </mesh>
  );
}

function InfoThree() {
  const three = useThree();
  const { camera, gl } = three;
  console.log(three, camera, gl);
}

export default App;
