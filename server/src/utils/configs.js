const fetch = require('node-fetch')
require('dotenv').config()

const configs = {
  dbPassword: null,
  dbName: null,
  port: null,
}

if (process.env.NODE_ENV === 'development') {
  configs.dbName = process.env.DB_NAME_DEV // team1 or team2
  configs.dbPassword = process.env.DB_PASSWORD_DEV
  configs.port = process.env.PORT_DEV

  configs.accessTokenSecret = process.env.ACCESS_TOKEN_DEV

  // db connection example
  configs.mainDbUri = `mongodb+srv://yang:${configs.dbPassword}@cluster0.25c9p.mongodb.net/${configs.dbName}?readPreference=secondaryPreferred&w=1`
} else if (process.env.NODE_ENV === 'production') {
  configs.dbName = process.env.DB_NAME_PROD // team1 or team2
  configs.dbPassword = process.env.DB_PASSWORD_PROD
  configs.port = process.env.PORT_PROD

  configs.accessTokenSecret = process.env.ACCESS_TOKEN_PROD

  // db connection example
  configs.mainDbUri = `mongodb+srv://yang:${configs.dbPassword}@cluster0.25c9p.mongodb.net/${configs.dbName}?readPreference=secondaryPreferred&w=1`
}

module.exports = configs
