module.exports = {
  apps : [
    {
      "name": "Boilerplate",
      "script": "./dist/index.js",
      "cwd": "./",
      "max_memory_restart": "512M",
      "env": {
        "NODE_ENV": "production"
      },
      "env_dev": {
        "NODE_ENV": "development"
      }
    }
  ]
};
