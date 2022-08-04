const router = require('express').Router()

const {
    getAllNews,
    getSingleNews,
    createNews,
    updateNews,
    deleteNews
} = require('./controllers')


router.get('/', getAllNews)
router.get('/:id', getSingleNews)
router.post('/', createNews)
router.put('/:id', updateNews)
router.delete('/:id', deleteNews)


module.exports = router