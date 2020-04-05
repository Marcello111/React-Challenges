import React, { Component } from "react";

class RollCall extends Component {

    constructor(props) {
    
        super(props);

        this.state = {

            name: 0,
        };
       
        this.handleClick = this.handleClick.bind(this);
    
    }

    handleClick() {

        this.setState({
               
            name: this.state.name + 1,

        })
          
    }

    render() {

        let { names } = this.props;

        return ( 
 
        <div>  
            <br></br>
            <button style={{ color: "red",}} onClick={ this.handleClick }> Next Name </button> 
            <p>{ names[this.state.name % names.length] }</p> 
            <hr></hr>
        </div>

        ); 
    }

}  

export default RollCall;


// Create a <RollCall names={ names }> component. It should have a button "Next". When the component first loads it should show the first name in the array. Every time you click "Next" it should show the next name in the array. It should loop back to the beginning.