/**
 * 11-3D水晶文字
 */
import { RGBELoader } from 'three-stdlib';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import {
  Center,
  OrbitControls,
  Text3D,
  AccumulativeShadows,
  RandomizedLight,
  useFBO,
} from '@react-three/drei';
import { MeshRefractionMaterial } from '../../material/MeshRefractionMaterial';


export default function App() {
  return (
    <Canvas
      shadows
      orthographic
      camera={{ position: [10, 20, 20], zoom: 80 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={0.5}></directionalLight>
      <OrbitControls autoRatate={true} />
      <Text />
      {/* 设置软阴影 */}
      <AccumulativeShadows
        // 随着时间推移进行累积阴影
        temporal
        frames={100}
        // 阴影的颜色
        color="blue"
        colorBlend={10}
        toneMapped={true}
        opacity={1}
        scale={30}
        position={[0, -0.45, 0]}
      >
        <RandomizedLight
          amount={4}
          radius={10}
          intensity={1}
          position={[0, 10, -10]}
          size={15}
          mapSize={1024}
          bias={0.0001}
        />
      </AccumulativeShadows>
    </Canvas>
  );
}

function Text() {
  const texture = useLoader(RGBELoader, '../assets/texture/024.hdr');
  let fontUrl = '../assets/font/FangSong_Regular.json';

  const fbo = useFBO(1024);
  let oldBg = null;
  useFrame((state) => {
    state.gl.setRenderTarget(fbo);
    oldBg = state.scene.background;
    state.scene.background = texture;
    state.gl.render(state.scene, state.camera);
    state.scene.background = oldBg;
    state.gl.setRenderTarget(null);
  });

  return (
    <Center>
      <Text3D
        castShadow
        bevelEnabled
        font={fontUrl}
        scale={3}
        letterSpacing={-0.03}
        height={0.25}
        bevelSize={0.01}
        bevelSegments={10}
        curveSegments={128}
        bevelThickness={0.01}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        图馆图馆
        {/* <meshBasicMaterial color={0xff0000} /> */}
        <MeshRefractionMaterial
          uSceneTex={fbo.texture}
          clearcoat={1}
          clearcoatRoughness={0.1}
          uRefractPower={0.5}
          uTransparent={0.5}
          uIntensity={1.3}
          uNoise={0.03}
          uSat={1}
          uColor={0x8284e5}
          gColor={0xa6a6e5}
        ></MeshRefractionMaterial>
      </Text3D>
    </Center>
  );
}
