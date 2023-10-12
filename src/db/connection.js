const mongoose = require('mongoose')

const db_option = {
    dbName: "schooldb",
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.set("strictQuery", false);


const connectDB = async (db_url) => {
    mongoose.connect(db_url, db_option)
        .then(() => console.log("connection successful...."))
        .catch((err) => console.log(err));
}

module.exports = connectDB;