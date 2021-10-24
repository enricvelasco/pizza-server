const {firebaseActions} = require('../../firebase/actions')

exports.getDemo = async function (query, page, limit) {
  try {
    /* firebaseActions.setData({collection: 'pizza', data: {name: 'demo-1'}})
    const demo = {name: 'demo_results'};
    return demo; */
    return await firebaseActions.getList('pizza');
  } catch (e) {
    // Log Errors
    throw Error('Error while Paginating Users')
  }
};
