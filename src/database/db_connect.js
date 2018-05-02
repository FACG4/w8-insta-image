const { Pool } = require('pg');
<<<<<<< HEAD
const url = require('url');

require('env2')('./config.env');

let DB_URL = process.env.DB_URL;
if (process.env.NODE_ENV === "test") {
  DB_URL = process.env.TEST_DB_URL;
}
if (!DB_URL)
  throw new Error('Enviroment variable DB_URL must be set');

const params = url.parse(DB_URL);
const [username, password] = params.auth.split(':');

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password: password
};

options.ssl = options.host !== 'localhost';

module.exports = new Pool(options);
=======
require('env2')('./config.env');

if (!process.env.DATABASE_URL) {
  throw new Error ('DB url not found ');
}else {
  module.exports= new Pool ({connectionString:process.env.DATABASE_URL});
}
>>>>>>> e75a9347da7fadb8888bb053458692e7786c0d12
