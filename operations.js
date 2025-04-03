
exports.insertDocument = (db, document, collection) => {
  const coll = db.collection(collection); //.collection is a method of the db object passed in
  // the collection argument passed is a string like 'campsites'
  return coll.insertOne(document);
};

exports.findDocuments = (db, collection) => {
  const coll = db.collection(collection);
  return coll.find().toArray();
};

exports.removeDocument = (db, document, collection) => {
  const coll = db.collection(collection);
  return coll.deleteOne(document);
};

exports.updateDocument = (db, document, update, collection) => {
  const coll = db.collection(collection);
  return coll.updateOne(document, { $set: update },null);
};
