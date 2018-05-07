import React, { Component } from 'react';

class FormAdd extends Component {
    state = {
        todo: "",
    }
    componentDidMount =()=>{
        console.log('')
    }
    ChangeTodo = (event) => {
        this.setState({ todo: event.target.value })
    }
    addlistForm =(event)=>{
        event.preventDefault()
        const todo = this.state.todo
        if(todo){
            this.props.addlist(todo)
            this.setState({todo:''})
        }  
    }
    componentWillReceiveProps =(nextProps)=>{

    }

    render() {
        return (
            <div>
                <form onSubmit={this.addlistForm} >
                    <input
                        type="text"
                        value={this.state.todo}
                        onChange={this.ChangeTodo}
                    />
                    <button type="submit" >เพิ่ม</button>
                </form>
            </div>
        );
    }
}

export default FormAdd;