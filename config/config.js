require('dotenv').config()
module.exports = {
  development: {
    database: 'photo_pocket_development',
    dialect: 'postgres'
  },
  test: {
    database: 'photo_pocket_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
