import React, { Component } from 'react';
// import './App.css';

class ToDos extends Component {
  constructor () {
    super()
    this.state = {

    };
  }

//Passing Props from the InputBox component, we named it newList here, than defined it in the InputBox Component
//Here we are taking the new array (aka todo) and mapping it
//Map loops each index of the array and runs a function that returns it as an li
  render() {
    return (
      <div>
        {this.props.newList.map((todo, idx) => {
          return <li key={idx}>{todo}</li>;
        })}
      </div>
    );
  }
}

export default ToDos;
