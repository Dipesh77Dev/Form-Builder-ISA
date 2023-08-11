const mongoose = require('mongoose');

const MongoDBConnection = process.env.Mongo_uri;

const connectDB = () => {
    try {
        mongoose.connect(MongoDBConnection, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`Database had been succesfully connected`);
    }
    catch (err) {
        console.log(`Database had not been connected`);
    }
};


module.exports = connectDB;
