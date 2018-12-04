const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./cors')

//server será uma instancia do express
const server = express()

//Toda vez que chegar uma requisição quem irá fazer o parse será o body parser
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

//habilitando o middleware do cors
server.use(allowCors)

server.listen(port, function(){
    console.log(`Backend is running in port ${port}`)
})

module.exports = server