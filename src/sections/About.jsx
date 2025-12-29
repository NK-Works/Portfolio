import { Suspense, lazy, useEffect, useRef, useState } from 'react';

import Button from '../components/Button.jsx';

// Lazy-load Globe to avoid executing browser-only APIs (navigator.gpu) during SSR/build
const Globe = lazy(() => import('react-globe.gl'));

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText('anneshunag@gmail.com');
      setHasCopied(true);

      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    }
  };

  const globeRef = useRef();

  useEffect(() => {
    // Focus the globe on India's coordinates
    const globe = globeRef.current;
    if (globe) {
      globe.pointOfView({ lat: 21.1458, lng: 78.8718, altitude: 2 }, 1000); // Sets initial point of view
    }
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.webp" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I&apos;m Anneshu Nag</p>
              <p className="grid-subtext">
                I&apos;m a software developer focused on creating practical, efficient solutions in areas like Fullstack, AI, IoT and Web3
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.webp" alt="grid-2" className="w-full sm:h-[279px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable web/AI
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Suspense fallback={<div className="text-white">Loading globe...</div>}>
                <Globe
                  height={326}
                  width={326}
                  ref={globeRef}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.webp"
                  labelsData={[{ lat: 21.1458, lng: 78.8718, text: 'India', color: 'white', size: 15 }]}
                />
              </Suspense>
            </div>
            <div>
              <p className="grid-headtext">I&apos;m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Punjab, India and open to remote work worldwide.</p>
              <a href="#contact">
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.webp" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
              I am a programmer who loves solving problems and bringing ideas to life through code. I&apos;m excited to learn, explore new technologies, and grow my skills every day.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.webp"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">anneshunag@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
