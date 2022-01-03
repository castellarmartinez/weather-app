const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'David R.'
    })
})

module.exports = router
