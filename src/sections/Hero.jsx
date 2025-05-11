import { Canvas } from '@react-three/fiber'
import Hand from '../../public/images/waving-hand.svg'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from './components/HackerRoom'
import { Suspense } from 'react'
import CanvasLoader from './components/CanvasLoader'
import { Leva, useControls } from 'leva'

const Hero = () => {
  const x = useControls('HackerRoom',{
    positionX:{
      value:2.50,
      min:-10,
      max:10
    },
    positionY:{
      value:2.50,
      min:-10,
      max:10
    },
    positionZ:{
      value:2.50,
      min:-10,
      max:10
    },
    rotationX:{
      value:2.50,
      min:-10,
      max:10
    },
    rotationY:{
      value:2.50,
      min:-10,
      max:10
    },
    rotationZ:{
      value:2.50,
      min:-10,
      max:10
    },
    scale:{
      value:1,
      min:0.1,
      max:10
    }
  })
  return(
    <section className='min-h-screen w-full flex flex-col relative'>

    <div className="flex flex-col w-full mx-auto sm:mt-30 mt-20 c-space gap-3 items-center">
      <p className="sm:text-3xl text-2xl font-medium text-white text-center font-dm relative">Hi, I am Nuruddin <img src={Hand} className=" w-6.5 sm:w-7.5 sm:absolute sm:left-60 waving-hand absolute left-50  text-center" alt="Waving-hand" /></p>
      <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
    </div>

    <div className=' w-full h-full absolute inset-0 '>
          <Leva className=""/>
      <Canvas className='w-full h-full'>
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <HackerRoom 
          // scale={0.07} 
          // position={[0, 0, 0]} 
          // rotation={[0, 120 / 2, 0]} 
          position={[1.5, -9.3, 2.5]} 
          rotation={[-9.2, 6.31, 3.13]} 
          scale={[0.1, 0.1, 0.1]}
          />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  </section>
  )
}
export default Hero