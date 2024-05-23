import { Cloud, Clouds, Sky as SkyImpl } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function SkyCanvas() {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1] sky-canvas light-theme'>
      <Canvas camera={{ position: [0, -10, 10], fov: 75 }}>
        <Sky />
        <ambientLight intensity={Math.PI / 1.5} />
        <spotLight position={[0, 40, 0]} decay={0} distance={45} penumbra={1} intensity={100} />
        <spotLight position={[-20, 0, 10]} color="red" angle={0.15} decay={0} penumbra={-1} intensity={30} />
        <spotLight position={[20, -10, 10]} color="red" angle={0.2} decay={0} penumbra={-1} intensity={20} />
      </Canvas>
    </div>
  );
}

function Sky() {
  const ref = useRef();
  const cloud0 = useRef();

  const config = useMemo(() => ({
    seed: 1,
    segments: 20,
    volume: 6,
    opacity: 0.8,
    fade: 10,
    growth: 4,
    speed: 0.1,
    x: 6,
    y: 1,
    z: 1,
    color: "white",
  }), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 2;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 2;
    }
    if (cloud0.current) {
      cloud0.current.rotation.y -= delta;
    }
  });

  return (
    <>
      <SkyImpl />
      <group ref={ref}>
        <Clouds material={THREE.MeshLambertMaterial} limit={400} range={config.range}>
          <Cloud ref={cloud0} {...config} bounds={[config.x, config.y, config.z]} color={config.color} />
          <Cloud {...config} bounds={[config.x, config.y, config.z]} color="#eed0d0" seed={2} position={[15, 0, 0]} />
          <Cloud {...config} bounds={[config.x, config.y, config.z]} color="#d0e0d0" seed={3} position={[-15, 0, 0]} />
          <Cloud {...config} bounds={[config.x, config.y, config.z]} color="#a0b0d0" seed={4} position={[0, 0, -12]} />
          <Cloud {...config} bounds={[config.x, config.y, config.z]} color="#c0c0dd" seed={5} position={[0, 0, 12]} />
          <Cloud
            concentrate="outside"
            growth={100}
            color="#ffccdd"
            opacity={1.25}
            seed={0.3}
            bounds={[200, 200, 200]}
            volume={200}
          />
        </Clouds>
      </group>
    </>
  );
}
