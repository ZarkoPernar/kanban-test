import axios from 'axios'

import { URL_PREFIX } from './constants'

export default {
    getRates({ date, currency }) {
        return axios.get(URL_PREFIX + '/rates', {
            params: {
                currency,
                date: date.format('YYYY-MM-DD')
            }
         })
            .then(res => res.data)
    }
}

