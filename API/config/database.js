module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'hire_breeze'),
        username: env('DATABASE_USERNAME', 'hire_breeze_admin'),
        password: env('DATABASE_PASSWORD', 'Hirebreeze$'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
