/**
 * 03-使用react-three-fiber库
 */
import { Canvas } from '@react-three/fiber';


function App() {
  return (
    <div className='App'>
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshPhongMaterial />
        </mesh>
        <ambientLight args={[0xffffff]} intensity={0.5} />
        <directionalLight args={[0xffffff]} position={[0, 5, 5]} intensity={0.5} />
      </Canvas>
    </div>
  );
}

export default App;
