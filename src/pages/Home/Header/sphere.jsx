import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import img from "./texture/earth4.jpg"
import { useTexture } from '@react-three/drei'

function Scene() {
  const texture = useTexture(img)
  const ref = useRef()
  useFrame((state, delta) => (ref.current.rotation.y += 0.004))
  // useFrame((state, delta) => (ref.current.rotation.y += 0.004))
  // console.log(ref.current)
  const material = ({
    roughness: 1,
    transmission: 0.5,
    thickness: 5
  })
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight />
      <mesh 
        ref={ref}
        scale={2.5}
      >
        <sphereGeometry args={[1, 64, 64]}/>
        <meshPhysicalMaterial {...material} map={texture}/>
        {/* <meshStandardMaterial transmission={0.5}/> */}
      </mesh>
    </>
  )
}

export default function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}