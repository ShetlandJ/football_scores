const mysql = require('mysql');
const { Client } = require('pg')
const connectionString = 'postgresql://localhost:5432/football_scores'

export function openConnection() {

  const client = new Client({
    connectionString: connectionString,
  })

  return client

}
