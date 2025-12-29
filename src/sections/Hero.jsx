import { Leva } from 'leva';
import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';

// Lazy load 3D components
const Cube = lazy(() => import('../components/Cube.jsx'));
const Rings = lazy(() => import('../components/Rings.jsx'));
const ReactLogo = lazy(() => import('../components/ReactLogo.jsx'));
const Target = lazy(() => import('../components/Target.jsx'));
const HackerRoom = lazy(() => import('../components/HackerRoom.jsx').then(module => ({ default: module.HackerRoom })));

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="hero_tag w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-20">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-500">Anneshu</span> <span className="waving-hand">👋</span>
        </p>
        <p className="text-gray_gradient">Building Products to Inspire</p>
      </div>

      <div className="mt-5 w-full h-full absolute inset-0">
        <Canvas className="w-full h-full" dpr={[1, 2]}>
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
