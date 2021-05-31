const request = require("request")

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoicml0aWthcGF0ZWwiLCJhIjoiY2twOG5oNW1tMGM1NjJucDdlN2FyNDY4ciJ9.QMux652k3GtIOLZxPFg2xg'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect to location service', undefined)
        } else if (body.features.length === 0) {
            callback('Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude:body.features[0].center[0],
                location: body.features[0].place_name
            })
        }

    })
}
module.exports = geocode

