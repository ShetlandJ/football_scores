const express = require('express');
const app = express();

var sql = require('./helpers/sql')

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api', async function(req, res) {

  var info = await sql.getFirstFixture()
  res.json(info)

});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
