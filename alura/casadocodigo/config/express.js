let express = require('express')
let load = require('express-load')
let bodyParser = require('body-parser')
let expressValidator = require('express-validator')


module.exports = function () {
    let app = express()

    app.set('view engine', 'ejs')
    app.set('views', './app/views')

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(expressValidator())

    load('routes', { cwd: 'app' })
        .then('infra')
        .into(app)

    return app
}