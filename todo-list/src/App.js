import React, { Component } from 'react';
import './app.css'
import FormAdd from './FormAdd'



class App extends Component {

  state = {
    list: ['a', 'b', 'c']
  }
  componentDidMount =()=>{
    alert('ok')
  }


  addlist = (todo) => {
    const list = this.state.list
    list.push(todo)
    this.setState({
      list,
    })
  }


  render() {
    return (
      <div className="app">
        <h1>Hello My Todo List</h1>
        <ul className="list">
          {
            this.state.list.map((val, index) =>
              <li key={index}>{val}</li>
            )
          }
        </ul>
        
  <FormAdd addlist={this.addlist}/>
      </div>
    );
  }
}

export default App;
