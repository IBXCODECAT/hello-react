import { Component } from "react";

class Counter extends Component
{
    //state must be initialized in the constructor
    constructor()
    {
        // Call the constructor of the Component class
        super();

        // Set the initial state of the component
        this.state = {
            count: 0
        };

        // Bind the this keyword to the component so 
        // that it can be used in the methods
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    // This method will be called when the button is clicked
    increment()
    {
        // This will print udnefined because the this keyword is not bound to the component
        console.log(this);

        // This will not work, state is read-only
        //this.state.count += 1;

        // Use the setState() method to update the state
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement()
    {
        // This will not work, state is read-only
        //this.state.count -= 1;

        // Use the setState() method to update the state
        this.setState({
            count: this.state.count - 1
        });
    }

    render()
    {
        return (
            // JSX
            <div>
                <h3>Count value is: {this.state.count}</h3>
                <button onClick={this.increment}>Increment Counter</button>
                <button onClick={this.decrement}>Decrement Counter</button>
            </div>
        );
    }
}

export default Counter;