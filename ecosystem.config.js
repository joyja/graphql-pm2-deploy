module.exports = {
  apps: [
    {
      name: 'edge-nat-deploy',
      script: './src/index.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: 'localhost',
      ref: 'origin/main',
      repo: 'https://github.com/joyja/edge-nat-deploy.git',
      path: '/usr/local/bin/edge-nat-deploy',
      'post-deploy':
        'sudo npm install && sudo pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
}
