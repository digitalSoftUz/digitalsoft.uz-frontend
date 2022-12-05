import React, {useRef, Suspense } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";

import { useGLTF } from "@react-three/drei";
import { useAnimations, OrbitControls } from "@react-three/drei";

const Model = () =>{
  // const gltf = useGLTF("/Earth3d.gltf", true);
  const { scene } = useGLTF("Earth3d.gltf")
  // const { scene, animations } = useGLTF("Earth3d.gltf")
  // const { actions } = useAnimations(animations, scene)
  return <primitive object={scene} dispose={null}/>
}
const Render = () => {
  const ref = useRef()
  // console.log(ref.current)
  useFrame((state, delta) => (ref.current.rotation.y += 0.003))
  useFrame((state, delta) => (ref.current.rotation.x = 0))
  return(
    <mesh
      ref={ref}
    >
      <Model/>
    </mesh>
  )
 
}

export default function Earth() {
  return(
    <Canvas
      colorManagement
      camera={{position: [0,0,2], fov: 70}}
    >
      <Suspense fallback={null}>
        <OrbitControls  enablePan={false} enableZoom={false}/>
        <Render/>
      </Suspense>
    </Canvas>
  )
}