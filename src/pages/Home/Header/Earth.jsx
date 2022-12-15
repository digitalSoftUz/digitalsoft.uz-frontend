import React, {useRef, Suspense } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
// import img from "./earth.png"

import { useGLTF } from "@react-three/drei";
import { Loader } from "@react-three/drei"
// import { useAnimations, OrbitControls } from "@react-three/drei";

const Model = () =>{
  // const gltf = useGLTF("/Earth3d.gltf", true);
  const { scene } = useGLTF("models/scene.gltf")
  // const texture = useTexture(img)
  // const { scene, animations } = useGLTF("Earth3d.gltf")
  // const { actions } = useAnimations(animations, scene)
  return <primitive object={scene} dispose={null}/>
}
const Render = () => {
  const ref = useRef()
  // console.log(ref.current)
  useFrame((state, delta) => (ref.current.rotation.y += 0.004))
  useFrame((state, delta) => (ref.current.rotation.x = 0.25))
  return(
    <mesh
      ref={ref}
      scale={0.015}
      // scale={2.2}
    >
      <Model/>
    </mesh>
  )
 
}

export default function Earth() {
  return(
    <React.Fragment>
      <Canvas
        // colorManagement
        camera={{position: [0,0,2], fov: 70}}
      >
        <Suspense fallback={null}>
          {/* <OrbitControls  enablePan={false} enableZoom={false}/> */}
          <Render/>
        </Suspense>
      </Canvas>
      <Loader />
    </React.Fragment>
  )
}