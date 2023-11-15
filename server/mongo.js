const mongoose = require('mongoose');

let db;

const connectDB = async () => {
    if (!db) {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        db = conn.connection;
        console.log(`Database Connected: ${db.host}`);
    }
    return db;
};

const getDB = () => {
    if (!db) {
        throw new Error('Connect to the database first.');
    }
    return db;
};

module.exports = {connectDB, getDB};
