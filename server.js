const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//parse aplication/json
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//panggil routes
var routes = require('./routes')
routes(app)


app.listen(8888, () => {
    console.log(`Server started on port`);
});
