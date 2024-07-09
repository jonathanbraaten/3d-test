import { Canvas } from '@react-three/fiber';
import { ReactNode } from 'react';
import { Environment } from '@react-three/drei';
export default function Scene({ children }: { children: ReactNode }) {
  return (
    <Canvas style={{ background: 'black', width: '100%', height: '100%' }}>
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset="city" />
      {children}
    </Canvas>
  );
}
