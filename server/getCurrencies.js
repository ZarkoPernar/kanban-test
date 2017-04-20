const url = require('url')
const axios = require('axios')
const { format, subDays } = require('date-fns')

const AVAILABLE_CURRENCIES = ['EUR', 'USD', 'JPY', 'CAD', 'CHF', 'GBP']
const SYMBOLS = AVAILABLE_CURRENCIES.join(',')
const API_KEY = '6b195662af1f4e7fbce8830a8c12dafe'
const CURRENCY_URL = 'https://openexchangerates.org/api'
const TODAY = new Date()
const DATE_FORMAT = 'YYYY-MM-DD'

module.exports = function getCurrencies(request, response) {
    const urlParts = url.parse(request.url, true)
    const query = urlParts.query

    axios.get(CURRENCY_URL + '/historical/' + query.date + '.json', {
        params: {
            app_id: API_KEY,
            base: query.currency,
            symbols: SYMBOLS,
        },
    })
    .then(res => res.data)
    .then((res) => {
        response.json(res)
    })
    .catch((err) => {
        response.status(412).json({
            message: err.message,
            description: err.description,
        })
    })
}

