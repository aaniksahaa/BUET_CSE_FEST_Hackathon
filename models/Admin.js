const { Schema, model } = require('mongoose')

const adminSchema = new Schema({
    secretkey: String,
    password: String
})

const Admin = model('Admin', adminSchema)

module.exports = Admin