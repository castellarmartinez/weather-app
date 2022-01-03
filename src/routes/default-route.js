const express = require('express')

const router = express.Router()

router.get('', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'David R.',
        errorMessage: 'Page not found.'
    })
})

module.exports = router