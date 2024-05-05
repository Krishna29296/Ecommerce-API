const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB
mongoose.connect("mongodb+srv://Vipin:VIP95in04@cluster0.zwij1ed.mongodb.net/Ecommerce_API", {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;