const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const {port} = require('./config/environment');
const router = require('./api/routes/demo.route')
const demo2router = require('./api/routes/demo2.route')

const app = express()

app.use(cors());
app.options('*', cors());
app.use(express.static(__dirname + '/'));

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(router, demo2router);


// app.use('/', router);

/* app.get('/', (req, res) => {
  res.send('Hello World!')
}) */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
