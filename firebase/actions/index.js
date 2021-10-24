const {firestore} = require('../../config/firebase');

const docRef = collection => firestore.collection(collection);

const setData = ({collection, data}) => {
  docRef(collection).add(data).then(r => console.log('DATA_ADD'));
}

const getList = async collection => {
  const snapshot = await docRef(collection).get();
  const list = [];
  snapshot.forEach((doc) => {
    list.push({id: doc.id, ...doc.data()});
  });
  return list;
}

const firebaseActions = {
  setData,
  getList,
}

module.exports = {
  firebaseActions
}
