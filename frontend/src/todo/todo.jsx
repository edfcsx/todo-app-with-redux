import React, {Component} from 'react'
import axios from 'axios'
import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

const URL = 'http://127.0.0.1:3003/api/todos'

export default class Todo extends Component{
    
    constructor(props){
        super(props)

        //nesse caso estamos dizendo que independente de quem chame o this
        //apontara para a classe atual todo
        this.handleAdd              = this.handleAdd.bind(this)
        this.handleChange           = this.handleChange.bind(this)
        this.handleRemove           = this.handleRemove.bind(this)
        this.handleMarkAsDone       = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending    = this.handleMarkAsPending.bind(this)
        this.handleSearch           = this.handleSearch.bind(this)
        this.handleClear            = this.handleClear.bind(this)

        //Props é apenas leitura para trabalhar com estado do objeto se faz necessário  usar o objeto state
        this.state = { description : '', list: [] }

        //criando uma chamada do metodo refresh para obter a lista
        this.refresh()
    }

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(response => this.setState({...this.state, description, list: response.data}))
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL,{description}).then(resp => this.refresh())
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done:true})
            .then(response => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done:false})
            .then(response => this.refresh(this.state.description))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleClear(){
        this.refresh()
    }

    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm description={this.state.description}
                    handleAdd={this.handleAdd} 
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                
                <TodoList list={this.state.list} 
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        )
    }

}