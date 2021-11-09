const AuthService = require('../services/auth.service');

exports.post = async function (req, res, next) {
  console.log('AUTH_CONTROLLER_POST', req.body);
  const {body} = req;
  try {
    const data = await AuthService.post(body);
    return res.status(200).json({ status: 200, data: data, message: "POST OK" });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}
