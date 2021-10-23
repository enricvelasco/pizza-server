const Demo2Service = require('../services/demo2.service');

exports.get = async function (req, res, next) {
  console.log('ENTER_TO_CONTROLLER');
  // Validate request parameters, queries using express-validator
  try {
    const demo = await Demo2Service.get({}, 0, 1);
    console.log('ENTER_TO_CONTROLLER_2::', demo);
    return res.send(`${demo.name}`);

    // return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}
