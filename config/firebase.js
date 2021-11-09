const admin = require('firebase-admin');
const serviceAccount = require('../pizza-server-bbdd-firebase-adminsdk-keckw-0c47ef2484.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();
const auth = admin.auth();

module.exports = {
  firestore,
  auth
}
