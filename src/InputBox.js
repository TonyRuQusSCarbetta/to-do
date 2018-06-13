import React, { Component } from "react";
import ToDos from "./ToDos"
// import './App.css';
class InputBox extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: null,
        };
    }

//HOW TO GET THE VALUE OF AN INPUT USING onChange()?
//#1 figure out where the event is taking place(THE TARGET), in this case it's the input & we know this because  we added a listener in the render section inside the input which looks like this onChange={this.OnChange}

// #2  Check to value of the target in the console

//#3 Set the state 
    onChange = (e) => {
        console.log(e.target); //checking what we are targetting (input)
        console.log(e.target.value); //checking if we are getting the value of the target
        this.setState({ newTodo: e.target.value }); //the POINT of this ONCHANGE function was to set the state based on the user's input,
                                                    //so now the newToDo STATE (located in the constructor) is whatever the user typed instead of null
    };

//onClick Function which pushes user input to the empty array in the state (located above)
    addToList = () => {
        this.state.todos.push(this.state.newTodo);
        console.log(this.state.todos);//checks the empty array to see that the user input was stored
    };

    render() {
        return (
            <div>
                <input
                    onChange={this.onChange}
                    placeholder="Enter ToDo"
                    type="text"
                />
                <button onClick={this.addToList}>Add Todo</button>
                <ToDos newList={this.state.todos} />
            </div>
        );
    }
}

export default InputBox;
