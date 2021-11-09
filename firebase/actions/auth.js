const {auth} = require('../../config/firebase');

const setLoginWithEmailAndPassword = async (email, password) => (
  await auth.createSessionCookie()
)

module.exports = {
  setLoginWithEmailAndPassword
}
