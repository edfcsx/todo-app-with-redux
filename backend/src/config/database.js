const mongoose = require('mongoose')

//Aqui estamos dizendo que o mongoose irá utilizar a Api de promises do proprio node
//pode dá uma advertencia caso não seja feito devido que a api de promises do mongoose foi descontinuada
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')