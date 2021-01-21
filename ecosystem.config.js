module.exports = {
  apps: [
    {
      name: 'graphql-pm2-deploy',
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
      repo: 'https://github.com/joyja/graphql-pm2-deploy.git',
      path: '/usr/local/bin/graphql-pm2-deploy',
      'post-deploy':
        'sudo npm install && sudo pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
}
