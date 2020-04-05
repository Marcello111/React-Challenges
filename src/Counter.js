import React, { Component } from "react";

class Counter extends Component {

    constructor(props) {
    
        super(props);

        this.state = {
            counter: this.props.initial,
        };
       
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    
    }

    handleIncrement() {

        if (this.state.counter < this.props.max) {

            this.setState({
                counter: this.state.counter + 1
            })
        }   
    }

    handleDecrement() {

        if (this.state.counter > 0) {

            this.setState({
            counter: this.state.counter -1
            })
        }
    }
    
    render() {
       
        return ( 
 
        <div>  
            <button onClick={ this.handleIncrement }> Plus + </button>
            <button onClick={ this.handleDecrement }> Minus - </button>
            <p>{ this.state.counter }</p> 
            <hr></hr>   
        </div>

        ); 
    }

}  

export default Counter;


// Create a <Counter initial={ 5 } max={ 10 } /> component. It should consist of a <p> containing a number (which starts at the initial value) and two buttons, + and -. When the user clicks the + button, the number should go up. When the user clicks the - button the number should go down. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.