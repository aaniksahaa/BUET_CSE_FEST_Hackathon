
const musicRouter = require('express').Router()

const {
    getMusic
} = require('./controllers')


musicRouter.get('/', getMusic)

module.exports =  musicRouter