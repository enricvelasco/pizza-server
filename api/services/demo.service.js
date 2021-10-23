exports.getDemo = async function (query, page, limit) {
  try {
    const demo = {name: 'demo_results'};
    return demo;
  } catch (e) {
    // Log Errors
    throw Error('Error while Paginating Users')
  }
};
