# 🚀 Mega Flight Simulator Ecosystem

[![Build Status](https://github.com/sterl27/flight-sim/workflows/Flight%20Sim%20CI/CD/badge.svg)](https://github.com/sterl27/flight-sim/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?logo=three.js&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

A comprehensive, modern 3D flight simulation ecosystem built with cutting-edge web technologies. Experience realistic flight dynamics, multiplayer capabilities, AI systems, and advanced cockpit instrumentation in your browser.

![Flight Simulator Demo](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Flight+Simulator+Screenshot)

## ✨ Features

### 🛩️ Core Flight Simulation
- **3D Aircraft**: Custom-built fighter jet model with fuselage, wings, tail, and engines
- **Physics-Based Flight**: Realistic movement using @react-three/cannon physics engine
- **Terrain & Environment**: Ground plane with collision detection and atmospheric effects
- **Dynamic Lighting**: Directional lighting with shadows for realistic rendering

### 🎮 Flight Controls
- **WASD / Arrow Keys**: Pitch up/down, roll left/right
- **Q/E Keys**: Yaw left/right
- **Space Bar**: Increase throttle
- **Shift Key**: Decrease throttle
- **R Key**: Reset aircraft to starting position
- **Mouse**: Orbit camera controls

### 📊 Real-Time HUD
- **Flight Data Display**: Altitude, airspeed, throttle percentage, and position
- **Visual Indicators**: Active throttle gauge and status displays
- **Control Instructions**: On-screen help for all flight controls
- **Status Monitoring**: Active/paused state and camera mode

### 🛠️ Technical Features
- **State Management**: Zustand store for aircraft state and game data
- **3D Rendering**: Three.js with React Three Fiber for smooth performance
- **Physics Simulation**: Realistic gravity, thrust, and collision detection
- **Responsive UI**: Overlay interface that doesn't interfere with 3D scene

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sterl27/flight-sim.git
   cd flight-sim
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or use the CLI tool
   flight-sim dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production
```bash
npm run build
npm run preview
```

### Deploy
```bash
# Using the deploy script
./deploy.sh

# Or manually with Vercel
npm run build
vercel deploy --prod
```

## 📁 Project Structure

```
flight-sim/
├── src/
│   ├── components/    # React components
│   │   ├── Aircraft.tsx   # 3D aircraft with physics
│   │   ├── Ground.tsx     # Terrain with collision
│   │   └── UI.tsx         # HUD and controls overlay
│   ├── state/         # State management
│   │   └── gameStore.ts   # Zustand store for game state
│   ├── ai/            # (Planned) AI systems
│   ├── sam/           # (Planned) Missile systems
│   ├── radio/         # (Planned) Communication systems
│   ├── world/         # (Planned) Environment management
│   ├── utils/         # (Planned) Utility functions
│   ├── cockpit/       # (Planned) Cockpit systems
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── assets/            # 3D models, textures (placeholder)
├── tools/             # Development CLI tools
├── public/            # Static assets
├── .github/           # CI/CD workflows
└── dist/              # Build output
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `flight-sim dev` | CLI development server |
| `flight-sim build` | CLI build command |
| `flight-sim deploy` | CLI deployment |
| `make dev` | Makefile development |
| `make build` | Makefile build |
| `make deploy` | Makefile deployment |

## 🎮 Usage

### Basic Flight Controls
- **WASD**: Pitch and roll
- **Mouse**: Camera control
- **Space**: Throttle up
- **Shift**: Throttle down
- **Tab**: Toggle cockpit view

### Advanced Features
- **Radio Communications**: Press `R` to open radio panel
- **Mission Planning**: Access via cockpit MFD
- **AI Assistant**: Toggle with `A` key
- **Multiplayer**: Join sessions via network panel

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_APP_ENV=development
PEERJS_HOST=localhost
PEERJS_PORT=9000
```

### Customization
- **Aircraft Models**: Add new models to `assets/`
- **Terrain Data**: Modify world generation in `src/world/`
- **Cockpit Layout**: Customize in `src/cockpit/`

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Setup
```bash
# Install dependencies
npm install

# Run tests
npm run test

# Run linting
npm run lint

# Build and test
npm run build
```

## 📚 Documentation

- [API Reference](docs/api.md)
- [Flight Physics](docs/physics.md)
- [Network Protocol](docs/network.md)
- [Contributing Guide](CONTRIBUTING.md)

## 🐛 Issues & Support

- **Bug Reports**: [GitHub Issues](https://github.com/sterl27/flight-sim/issues)
- **Discussions**: [GitHub Discussions](https://github.com/sterl27/flight-sim/discussions)
- **Wiki**: [Project Wiki](https://github.com/sterl27/flight-sim/wiki)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - 3D graphics library
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - React renderer for Three.js
- [React Three Drei](https://github.com/pmndrs/drei) - Useful helpers
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [PeerJS](https://peerjs.com/) - WebRTC library

---

**Fly High, Code Hard!** ✈️💻

Made with ❤️ by the Flight Sim Community
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
