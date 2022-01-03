const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'David R.'
    })
})

module.exports = router

