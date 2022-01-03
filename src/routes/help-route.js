const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'David R.'
    })
})

router.get('/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'David R.',
        errorMessage: 'Help article not found.'
    })
})

module.exports = router