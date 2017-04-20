const currencyHandler = require('./getCurrencies')
const fileUploadHandler = require('./fileUpload')

const PREFIX = '/api'
const API_VERSION = 'v1'

const ROUTES = {
    CURRENCY: PREFIX + '/' + API_VERSION + '/rates',
    UPLOAD: PREFIX + '/' + API_VERSION + '/upload',
}

module.exports = function(app) {
    app.get(ROUTES.CURRENCY, currencyHandler)

    app.put(ROUTES.UPLOAD, fileUploadHandler)
}
