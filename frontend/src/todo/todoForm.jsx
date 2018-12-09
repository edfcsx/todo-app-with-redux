import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component{
    
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    //call methods before initialize component
    componentWillMount(){
        this.props.search()
    }

    keyHandler(e){
        //destruct for extract methods
        const {add , search, description, clear} = this.props
        if(e.key === 'Enter'){
            e.shiftKey ? search() : add(description)
        }else if(e.key === 'Escape'){
            clear()
        }
    }

    render(){
        //destruct for extract methods and status
        const { add, search, description, clear } = this.props
        return (
                <div role='form' className='todoForm'>
                    <Grid cols='12 9 10'>
                        <input id='description' className='form-control' placeholder='Adicione uma tarefa' 
                        value={description} onChange={this.props.changeDescription} onKeyUp={this.keyHandler}/>
                    </Grid>
                    <Grid cols='12 3 2'>
                        <IconButton style='primary' icon='plus' onClick={() => add(description)}/>
                        {/*as method search don't receive parameters , don't need use arrow function*/}
                        <IconButton style='info' icon='search' onClick={search}/>
                        <IconButton style='default' icon='close' onClick={() => clear()}/>
                    </Grid>
                </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)
