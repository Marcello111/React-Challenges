import React, { Component } from "react";

class StepCounter extends Component {

    constructor(props) {
    
        super(props);

        this.state = {
            counter: 0,
        };
       
        this.handleIncrementSteps = this.handleIncrementSteps.bind(this);
        this.handleDecrementSteps = this.handleDecrementSteps.bind(this);
    
    }

    handleIncrementSteps() {

        if (this.state.counter < this.props.max) {

            this.setState({
                counter: this.state.counter + this.props.step
            })
        }   
    }

    handleDecrementSteps() {

        if (this.state.counter > 0) {

            this.setState({
            counter: this.state.counter - this.props.step
            })
        }
    }
    
    render() {
       
        return ( 
 
        <div>  
            <button onClick={ this.handleIncrementSteps }> Steps Plus + </button>
            <button onClick={ this.handleDecrementSteps }> Steps Minus - </button>
            <p>{ this.state.counter }</p>  
        </div>

        ); 
    }

}  

export default StepCounter;



// Create a <StepCounter max={ 100 } step={ 5 } /> component. It should consist of a <p> containing a number (start at 0) and two buttons, + and -. When the user clicks the + button, the number should go up by step. When the user clicks the - button the number should go down by step. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.