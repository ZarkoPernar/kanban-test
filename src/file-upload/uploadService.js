import axios from 'axios'

import { URL_PREFIX } from '../constants'

export default {
    uploadFile(file) {
        let data = new FormData()
        data.set('file', file)

        return axios.put(URL_PREFIX + '/upload', data, {
            headers: {'Content-Type': undefined},
        })
        .then(res => res.data)
    }
}
