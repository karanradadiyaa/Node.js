const mongoose = require('mongoose');

// DB Connection
const connectDB = async () => {
    mongoose.connect("mongodb+srv://karanradadiya1132_db_user:<db_password>@cluster0.u6xy8zp.mongodb.net/")
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));
}

module.exports = connectDB;
