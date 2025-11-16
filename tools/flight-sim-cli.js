#!/usr/bin/env node

const { execSync } = require("child_process");

function run(cmd) {
  console.log("➡ Running: " + cmd);
  execSync(cmd, { stdio: "inherit" });
}

const arg = process.argv[2];

switch(arg) {
  case "dev": run("npm run dev"); break;
  case "build": run("npm run build"); break;
  case "deploy": run("./deploy.sh"); break;
  case "docker": run("docker build -t flight-sim ."); break;
  default:
    console.log("Flight Sim CLI Commands:");
    console.log("  flight-sim dev");
    console.log("  flight-sim build");
    console.log("  flight-sim deploy");
    console.log("  flight-sim docker");
}