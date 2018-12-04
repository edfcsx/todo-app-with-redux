const Todo = require('./todo')

//Habilitação da api rest pelo node restful
Todo.methods(['get', 'post', 'put', 'delete'])

//metodo para quando atualizar um registro ele retorne o registro atualizado e nao o antigo
//e o runValidators para aplicar as validações também no update
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo

