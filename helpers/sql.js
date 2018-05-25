var getFirstFixture = async function() {

  const mysql = require('mysql');
  const { Client } = require('pg')

  const connectionString = 'postgresql://localhost:5432/football_scores'

  const client = new Client({
    connectionString: connectionString,
  })

  let result = ""

  await client.connect()


  const res = await client.query('SELECT * FROM fixtures')
  result = res.rows[0]
  await client.end()

  return result
}

module.exports = {
  getFirstFixture: getFirstFixture,
};
