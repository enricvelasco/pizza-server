const {setLoginWithEmailAndPassword} = require('../../firebase/actions/auth')

exports.post = async function (body) {
  try {
    console.log('ON_AUTH_SERVICE', body)
    const user = setLoginWithEmailAndPassword(body.email, body.password)
    return user;
  } catch (e) {
    // Log Errors
    throw Error('Error while Paginating Users')
  }
};
