/* eslint-disable max-len */
module.exports = {
    apps: [{
        name: 'API',
        script: 'npm run start',
        autorestart: true,
        watch: false,
        env: {
            NODE_ENV: 'development'
        },
        env_stagin: {
            NODE_ENV: 'stagin',
            PORT: 9900,
            PG_HOST: '35.234.56.218',
            PG_PORT: 5432,
            PG_USER: 'postgres',
            PG_PASSWORD: 'password',
            PG_DB: 'carrental'
        }
    }]
};
