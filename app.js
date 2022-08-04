
const express = require('express')
const morgan = require('morgan')

const router = require('./routes')
const musicRouter = require('./musicRoutes')

const app = express()

app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/news', router)

app.use('/music', musicRouter)

app.get('/', (req,res) => {
    res.send('Hello World')
})

const PORT = process.env.PORT || 8070

app.listen(PORT, () => {console.log(`SERVER IS RUNNING ON PORT ${PORT}`)})