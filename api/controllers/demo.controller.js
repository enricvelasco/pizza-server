const DemoService = require('../services/demo.service');

exports.getDemo = async function (req, res, next) {
  // Validate request parameters, queries using express-validator
  try {
    const demo = await DemoService.getDemo({}, 0, 1);
    return res.status(200).json({ status: 200, data: demo, message: "Succesfully Users Retrieved" });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}
