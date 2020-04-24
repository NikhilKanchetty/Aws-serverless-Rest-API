const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  console.log('=> using new database connection');
  return mongoose.connect('mongodb://nikhilk:gMnYBHEzPdMpSCBR@cluster0-shard-00-00-lsgpe.mongodb.net:27017,cluster0-shard-00-01-lsgpe.mongodb.net:27017,cluster0-shard-00-02-lsgpe.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true})
    .then(db => { 
      isConnected = db.connections[0].readyState;
    });
};