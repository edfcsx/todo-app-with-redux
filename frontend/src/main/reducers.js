import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description : 'Ler livro',
        list: [{
            _id: 1,
            description: 'O principe maquiavel',
            done: true
        },
        {
            _id: 2,
            description: 'Como se tornar o pior aluno da escola',
            done: true
        },
        {
            _id: 3,
            description: 'Kamasutra',
            done: true
        }
    ]
    })
})

export default rootReducer