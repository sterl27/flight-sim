import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';
import { Vector3 } from 'three';
import { useGameStore } from '../state/gameStore';

export default function Aircraft() {
  const [ref, api] = useBox(() => ({
    mass: 1000,
    position: [0, 10, 0],
    material: { friction: 0.1, restitution: 0.1 },
    angularDamping: 0.9,
    linearDamping: 0.1
  }));

  const {
    rotation,
    throttle,
    velocity,
    setPosition,
    setRotation,
    setVelocity,
    setThrottle
  } = useGameStore();

  const velocityUnsubscribeRef = useRef<(() => void) | null>(null);

  // Set up velocity subscription once
  useEffect(() => {
    const unsubscribe = api.velocity.subscribe((velocity) => {
      setVelocity(velocity);
    });
    velocityUnsubscribeRef.current = unsubscribe;

    return () => {
      if (velocityUnsubscribeRef.current) {
        velocityUnsubscribeRef.current();
      }
    };
  }, [api, setVelocity]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          // Pitch up - apply angular velocity instead of direct rotation
          api.angularVelocity.set(rotation.x - 0.5, 0, 0);
          setRotation({ ...rotation, x: rotation.x - 0.1 });
          break;
        case 'KeyS':
        case 'ArrowDown':
          // Pitch down
          api.angularVelocity.set(rotation.x + 0.5, 0, 0);
          setRotation({ ...rotation, x: rotation.x + 0.1 });
          break;
        case 'KeyA':
        case 'ArrowLeft':
          // Roll left
          api.angularVelocity.set(0, 0, rotation.z - 0.5);
          setRotation({ ...rotation, z: rotation.z - 0.1 });
          break;
        case 'KeyD':
        case 'ArrowRight':
          // Roll right
          api.angularVelocity.set(0, 0, rotation.z + 0.5);
          setRotation({ ...rotation, z: rotation.z + 0.1 });
          break;
        case 'KeyQ':
          // Yaw left
          api.angularVelocity.set(0, rotation.y - 0.5, 0);
          setRotation({ ...rotation, y: rotation.y - 0.1 });
          break;
        case 'KeyE':
          // Yaw right
          api.angularVelocity.set(0, rotation.y + 0.5, 0);
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
          api.angularVelocity.set(0, 0, 0);
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

    // Apply continuous thrust based on throttle
    if (throttle > 0) {
      // Get current rotation from physics body
      const currentRotation = ref.current.rotation;
      const thrust = throttle * 2000; // Reduced thrust for better control

      // Calculate thrust direction based on aircraft orientation
      const direction = new Vector3(0, 0, -1);
      direction.applyEuler(currentRotation);
      direction.multiplyScalar(thrust);

      // Apply force at the center of mass
      api.applyForce([direction.x, direction.y, direction.z], [0, 0, 0]);
    }

    // Add lift based on speed and angle of attack (simplified)
    const speed = Math.sqrt(velocity[0] ** 2 + velocity[1] ** 2 + velocity[2] ** 2);
    if (speed > 5) { // Minimum speed for lift
      const lift = speed * 50; // Simplified lift calculation
      api.applyForce([0, lift, 0], [0, 0, 0]);
    }

    // Update store with current position
    const currentPosition = ref.current.position;
    setPosition([currentPosition.x, currentPosition.y, currentPosition.z]);
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