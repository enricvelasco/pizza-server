const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');


const {port} = require('./config/environment');
const router = require('./api/routes/demo.route')
const demo2router = require('./api/routes/demo2.route')
const auth = require('./api/routes/auth.route')

const app = express()

// const serviceAccount = require('./pizza-server-bbdd-firebase-adminsdk-keckw-0c47ef2484.json');

/* admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
}); */

/*
const db = admin.firestore();

const docRef = db.collection('pizza');

docRef.add({
  name: 'Margaretta'
}).then(r => console.log('DATA_ADD'));*/

app.use(cors());
app.options('*', cors());
app.use(express.static(__dirname + '/'));

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(
  router,
  demo2router,
  auth
);


// app.use('/', router);

/* app.get('/', (req, res) => {
  res.send('Hello World!')
}) */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
