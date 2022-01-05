const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cors = require("cors");
const multer = require('multer');
const route = require('./routes');
const db = require('./database');
const app = express();
const port = 8000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine("html", require("ejs").renderFile);
app.set('views', './src/views')
app.use(methodOverride('_method'));

// app.all('/', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next()
// });

const corsOptions = {
  origin: '*',
  credentials: true,       //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration

route(app);

db.connect();


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
