const assert = require("assert").strict;

exports.insertDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection); //.collection is a method of the db object passed in
  // the collection argument passed is a string like 'campsites'
  coll.insertOne(document,(err, result)=>{
    assert.strictEqual(err, undefined);
    callback(result);
  });
};

exports.findDocuments = (db, collection, callback) => {
  const coll = db.collection(collection);
  coll.find().toArray((err, docs)=>{
    assert.strictEqual(err, undefined);
    callback(docs);
  });
};

exports.removeDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection);
  coll.deleteOne(document, (err, result)=>{
    assert.strictEqual(err, undefined);
    callback(result);
  });
};

exports.updateDocument = (db, document, update, collection, callback) => {
  const coll = db.collection(collection);
  coll.updateOne(document, { $set: update },null, (err, result)=>{ //third argument is for configuration options that we are not using, and therefore pass null
    assert.strictEqual(err, undefined);
    callback(result);
  });
};
