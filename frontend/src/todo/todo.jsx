import React, {Component} from 'react'

/*________Components__________*/
import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'


export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro'/>
        <TodoForm/>
        <TodoList/>
    </div>
)