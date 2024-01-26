const { Pool } = require('pg');

const pool = new Pool({
  user: 'geomais_user',
  host: 'localhost',
  database: 'geomais_db',
  password: 'senha123',
  port: 5432,
});

const query = async (text, params) => {
  const client = await pool.connect();
  try {
    return await client.query(text, params);
  } finally {
    client.release();
  }
};

module.exports = {
  pool,
  query
};