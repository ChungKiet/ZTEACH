const express = require('express')
const route = require('./routes')
const db = require('./database')
const app = express()
const port = 8000

route(app);

db.connect();


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
