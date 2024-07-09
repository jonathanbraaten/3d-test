// @ts-nocheck
import React, { useRef } from 'react';
import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
export const Model = () => {
  const { nodes } = useGLTF('/LovhaLogo01.glb');
  const { viewport } = useThree();
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.02;
  });
  return (
    <group scale={viewport.width / 3.5}>
      <Text fontSize={'0.2'}>Lovha Studio</Text>

      <mesh ref={mesh} {...nodes.Logo_Geo}>
        {/*         <MeshTransmissionMaterial transmissionSampler /> */}
      </mesh>
    </group>
  );
};
