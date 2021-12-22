const express = require('express');
const methodOverride = require('method-override');
const route = require('./routes');
const db = require('./database');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("html", require("ejs").renderFile);
app.use(methodOverride('_method'));

route(app);

db.connect();

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
