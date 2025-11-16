import { useGameStore } from '../state/gameStore';

export default function UI() {
  const {
    position,
    velocity,
    throttle,
    isPaused,
    cameraMode
  } = useGameStore();

  const speed = Math.sqrt(
    velocity[0] * velocity[0] +
    velocity[1] * velocity[1] +
    velocity[2] * velocity[2]
  );

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      fontFamily: 'monospace',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
      zIndex: 100
    }}>
      {/* HUD Display */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #444'
      }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#00ff00' }}>FLIGHT DATA</h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#aaa' }}>ALTITUDE</div>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
              {Math.round(position[1])} ft
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', color: '#aaa' }}>SPEED</div>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
              {Math.round(speed * 2)} kts
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', color: '#aaa' }}>THROTTLE</div>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
              {Math.round(throttle * 100)}%
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', color: '#aaa' }}>POSITION</div>
            <div style={{ fontSize: '14px' }}>
              X: {Math.round(position[0])}<br />
              Z: {Math.round(position[2])}
            </div>
          </div>
        </div>
      </div>

      {/* Controls Help */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #444',
        maxWidth: '400px'
      }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#00ff00' }}>CONTROLS</h4>

        <div style={{ fontSize: '14px', lineHeight: '1.4' }}>
          <div><strong>WASD / Arrow Keys:</strong> Pitch & Roll</div>
          <div><strong>Q/E:</strong> Yaw Left/Right</div>
          <div><strong>Space:</strong> Increase Throttle</div>
          <div><strong>Shift:</strong> Decrease Throttle</div>
          <div><strong>R:</strong> Reset Aircraft</div>
          <div><strong>Mouse:</strong> Camera Control</div>
        </div>
      </div>

      {/* Status Indicators */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #444'
      }}>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <div style={{
            color: isPaused ? '#ff4444' : '#44ff44',
            fontWeight: 'bold'
          }}>
            {isPaused ? 'PAUSED' : 'ACTIVE'}
          </div>

          <div style={{ color: '#aaa' }}>
            Camera: {cameraMode.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Throttle Indicator */}
      <div style={{
        position: 'absolute',
        right: '20px',
        bottom: '20px',
        width: '30px',
        height: '200px',
        background: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '15px',
        border: '1px solid #444',
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '5px'
      }}>
        <div style={{
          width: '20px',
          height: `${throttle * 180}px`,
          background: `linear-gradient(to top, #ff4444, #44ff44)`,
          borderRadius: '10px',
          transition: 'height 0.2s ease'
        }} />
        <div style={{
          position: 'absolute',
          top: '5px',
          fontSize: '10px',
          color: '#fff',
          fontWeight: 'bold'
        }}>
          THR
        </div>
      </div>
    </div>
  );
}