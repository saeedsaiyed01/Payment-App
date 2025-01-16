// backend/db.js
const mongoose = require('mongoose');
const { number } = require('zod');

mongoose.connect('mongodb+srv://saeed:saeed123@test.0shsa.mongodb.net/mypaytm')
const db = mongoose.connection


db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});
db.once('open', () => {
    console.log('Connected to MongoDB');
});
db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});


const accountSchema = new mongoose.Schema({
userId:{
    type :mongoose.mongoose.Schema.Types.ObjectId,
    ref:'User',
    require:true

},

balance:{
    type: Number,
    required: true
}

});


// Create a model from the schema
const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
	User,
    Account,
};