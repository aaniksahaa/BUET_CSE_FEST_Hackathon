const { Schema, model } = require('mongoose')

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 30
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

const Contact = model('Contact', contactSchema)

module.exports = Contact