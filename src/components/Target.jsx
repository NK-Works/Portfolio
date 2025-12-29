import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* Target stand base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 1, 0.15, 32]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Stand pole */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 1.2, 16]} />
        <meshStandardMaterial color="#16213e" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Target rings - outer to inner */}
      <mesh position={[0, 1.2, 0.02]} rotation={[0, 0, 0]}>
        <ringGeometry args={[0.55, 0.7, 32]} />
        <meshStandardMaterial color="#e94560" side={2} />
      </mesh>
      
      <mesh position={[0, 1.2, 0.03]} rotation={[0, 0, 0]}>
        <ringGeometry args={[0.4, 0.55, 32]} />
        <meshStandardMaterial color="#ffffff" side={2} />
      </mesh>
      
      <mesh position={[0, 1.2, 0.04]} rotation={[0, 0, 0]}>
        <ringGeometry args={[0.25, 0.4, 32]} />
        <meshStandardMaterial color="#e94560" side={2} />
      </mesh>
      
      <mesh position={[0, 1.2, 0.05]} rotation={[0, 0, 0]}>
        <ringGeometry args={[0.1, 0.25, 32]} />
        <meshStandardMaterial color="#ffffff" side={2} />
      </mesh>
      
      {/* Bullseye center */}
      <mesh position={[0, 1.2, 0.06]} rotation={[0, 0, 0]}>
        <circleGeometry args={[0.1, 32]} />
        <meshStandardMaterial color="#e94560" side={2} />
      </mesh>
      
      {/* Target backing board */}
      <mesh position={[0, 1.2, 0]}>
        <circleGeometry args={[0.72, 32]} />
        <meshStandardMaterial color="#0f3460" side={2} />
      </mesh>
    </group>
  );
};

export default Target;
