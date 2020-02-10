module.exports = {
  apps : [{
    name: "Boilerplate",
    script: "./server.js",
    "cwd": "./",
    "max_memory_restart": "512M",
    "env": {
      "NODE_ENV": "production"
    }
  }]
}
