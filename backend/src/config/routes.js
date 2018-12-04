const express = require('express')

module.exports = function(server){

    //API Routes
    const router = express.Router()
    server.use('/api',router)

    //Todo Routes
    const TodoService = require('../api/todo/todoService')
    //o metodo register ira utilizar todos os metodos declarados no todoService 
    TodoService.register(router,'/todos')

}