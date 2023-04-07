const mongoose = require('mongoose');

const users = new mongoose.Schema({
    username: { type: String, require: true, unique: true},
    email: { type: String, require: true, unique: true},
    password: { type: String, require: true},
    id: { type: String, require: true},
    servers: { type: Array},
    isVerified: { type: Boolean},
    verifyCode: { type: String},
    role: { type: String},
    ip: { type: String}
})

const model = mongoose.model('users', users)

module.exports = model;