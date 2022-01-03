const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.use('/', require('./routes/index-route'))
app.use('/about', require('./routes/about-route'))
app.use('/help', require('./routes/help-route'))
app.use('/weather', require('./routes/weather-route'))
app.use('*', require('./routes/default-route'))

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})