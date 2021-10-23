exports.get = async function (query, page, limit) {
  try {
    const demo = {name: 'demo_results_2'};
    return demo;
  } catch (e) {
    // Log Errors
    throw Error('Error while Paginating Users')
  }
};
