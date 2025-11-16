import { useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';
import { Vector3 } from 'three';
import { useGameStore } from '../state/gameStore';

export default function Aircraft() {
  const [ref, api] = useBox(() => ({
    mass: 1000,
    position: [0, 10, 0],
    material: { friction: 0.1, restitution: 0.3 }
  }));

  const {
    rotation,
    throttle,
    setPosition,
    setRotation,
    setVelocity,
    setThrottle
  } = useGameStore();

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          // Pitch up
          api.rotation.set(rotation.x - 0.1, rotation.y, rotation.z);
          setRotation({ ...rotation, x: rotation.x - 0.1 });
          break;
        case 'KeyS':
        case 'ArrowDown':
          // Pitch down
          api.rotation.set(rotation.x + 0.1, rotation.y, rotation.z);
          setRotation({ ...rotation, x: rotation.x + 0.1 });
          break;
        case 'KeyA':
        case 'ArrowLeft':
          // Roll left
          api.rotation.set(rotation.x, rotation.y, rotation.z - 0.1);
          setRotation({ ...rotation, z: rotation.z - 0.1 });
          break;
        case 'KeyD':
        case 'ArrowRight':
          // Roll right
          api.rotation.set(rotation.x, rotation.y, rotation.z + 0.1);
          setRotation({ ...rotation, z: rotation.z + 0.1 });
          break;
        case 'KeyQ':
          // Yaw left
          api.rotation.set(rotation.x, rotation.y - 0.1, rotation.z);
          setRotation({ ...rotation, y: rotation.y - 0.1 });
          break;
        case 'KeyE':
          // Yaw right
          api.rotation.set(rotation.x, rotation.y + 0.1, rotation.z);
          setRotation({ ...rotation, y: rotation.y + 0.1 });
          break;
        case 'Space':
          // Throttle up
          setThrottle(Math.min(throttle + 0.1, 1));
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          // Throttle down
          setThrottle(Math.max(throttle - 0.1, 0));
          break;
        case 'KeyR':
          // Reset aircraft
          api.position.set(0, 10, 0);
          api.rotation.set(0, 0, 0);
          api.velocity.set(0, 0, 0);
          setPosition([0, 10, 0]);
          setRotation({ x: 0, y: 0, z: 0 });
          setVelocity([0, 0, 0]);
          setThrottle(0.5);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [api, rotation, throttle, setPosition, setRotation, setVelocity, setThrottle]);

  // Physics and movement
  useFrame(() => {
    if (!ref.current) return;

    // Apply thrust based on throttle and orientation
    const thrust = throttle * 5000;
    const direction = new Vector3(0, 0, -1);
    direction.applyEuler(ref.current.rotation);
    direction.multiplyScalar(thrust);

    api.applyForce([direction.x, direction.y, direction.z], [0, 0, 0]);

    // Update store with current position
    const currentPosition = ref.current.position;
    setPosition([currentPosition.x, currentPosition.y, currentPosition.z]);

    // Get velocity from physics API
    api.velocity.subscribe((velocity) => {
      setVelocity(velocity);
    });
  });

  return (
    <mesh ref={ref} castShadow receiveShadow>
      {/* Fuselage */}
      <boxGeometry args={[0.3, 0.2, 2]} />
      <meshStandardMaterial color="#ff4444" />

      {/* Wings */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[3, 0.1, 0.5]} />
        <meshStandardMaterial color="#ff6666" />
      </mesh>

      {/* Tail */}
      <mesh position={[0, 0.3, 0.8]} castShadow>
        <boxGeometry args={[0.8, 0.3, 0.1]} />
        <meshStandardMaterial color="#ff6666" />
      </mesh>

      {/* Engines */}
      <mesh position={[-0.2, -0.1, -0.8]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.3]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      <mesh position={[0.2, -0.1, -0.8]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.3]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
    </mesh>
  );
}