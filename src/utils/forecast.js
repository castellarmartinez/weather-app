const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=`
    + `91869c19a13df16cd1c5573d7c8ad560&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } 
        else if (body.error) {
            callback('Unable to find location', undefined)
        } 
        else {
            callback(undefined, 'It is currently ' + body.current.temperature
            + ' degrees out and it feels like '+ body.current.feelslike + ' degrees'
            + ' and relative humidity of ' + body.current.humidity + '%.'
            + ' It is ' + body.current.weather_descriptions[0] + '.')
        }
    })
}

module.exports = forecast