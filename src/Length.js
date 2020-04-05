import React, { Component } from "react";

class Length extends Component {

    constructor(props) {

        super(props);

        this.state = { 
            
            input: "" 

        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {

        this.setState({ input: e.currentTarget.value });

    }   

    render() {
        return (
          <div>
            <input
              style={{ backgroundColor: "lightblue", borderRadius:8, fontStyle: "italic"}}
              onChange={ this.handleChange }
              value={ this.state.input }
              />
            <p> Length: { this.state.input.length } characters </p>
          </div>
        );
    }
}


export default Length;



// Create a <Length> component. It should contain an <input> and tell you how many characters have been typed into the <input>.