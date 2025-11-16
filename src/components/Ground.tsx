import { usePlane } from '@react-three/cannon';

export default function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
    material: { friction: 0.8, restitution: 0.1 }
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial
        color="#4a5d23"
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  );
}