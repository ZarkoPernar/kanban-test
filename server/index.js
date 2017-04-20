const express = require('express')
// const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

require('dotenv').config()

const app = express()
const PUBLIC_DIR = 'public'
const initRoutes = require('./routes')

// init mongo db
// require('./db')

// heroku automatically asssigns the port to .env PORT
app.set('port', (process.env.PORT || 5000))

app.use(express.static(PUBLIC_DIR))
// app.use(bodyParser.json())
app.use(fileUpload())


app.listen(app.get('port'), () => {
    console.log('Node app listening on port: ' + app.get('port'))
})

initRoutes(app)
