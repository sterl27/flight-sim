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
- **Realistic Physics**: Advanced flight dynamics with @react-three/cannon
- **Multiple Aircraft**: F-16, Cessna, and custom aircraft models
- **Terrain & Environment**: Dynamic landscapes with realistic textures
- **Weather Systems**: Atmospheric effects and environmental conditions

### 🎮 Advanced Systems
- **Cockpit Instrumentation**: Full MFD (Multi-Function Display), HUD, and gauges
- **AI Systems**: Intelligent co-pilots and automated flight assistants
- **Radio Communications**: Realistic ATC and pilot communications
- **Mission Planning**: SAM (Surface-to-Air Missile) systems and combat scenarios

### 🌐 Multiplayer & Networking
- **Peer-to-Peer**: Real-time multiplayer using PeerJS
- **World State**: Shared simulation environment
- **Voice Chat**: Integrated communication systems

### 🛠️ Developer Experience
- **Modern Stack**: React 18, TypeScript, Vite, Three.js
- **State Management**: Zustand for efficient state handling
- **Build Tools**: Optimized bundling and deployment
- **CI/CD**: Automated testing and deployment pipelines

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
│   ├── game/           # Core game logic
│   ├── ai/            # AI systems and behaviors
│   ├── sam/           # Surface-to-Air Missile systems
│   ├── radio/         # Communication systems
│   ├── world/         # World/environment management
│   ├── utils/         # Utility functions
│   ├── state/         # Global state management
│   ├── ui/            # User interface components
│   ├── cockpit/       # Cockpit systems
│   │   ├── Gauges/    # Flight instruments
│   │   ├── MFD/       # Multi-Function Displays
│   │   └── HUD/       # Heads-Up Display
│   ├── components/    # Reusable React components
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── assets/            # 3D models, textures, sounds
├── tools/             # Development tools and CLI
├── public/            # Static assets
├── .github/           # CI/CD workflows
├── dist/              # Build output
└── docs/              # Documentation
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
