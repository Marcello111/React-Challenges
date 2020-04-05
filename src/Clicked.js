import React, { Component } from "react";

class Clicked extends Component {

    constructor(props) {
    
        super(props);

        this.state = {
            clicked: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.setState({
            clicked: !this.state.clicked,
        })
    }
    
      render() {
       
        return (
          <button onClick={ this.handleClick }>
            {this.state.clicked ? "Clicked" : "Not Clicked"}
          </button> 
        ); 
      }

}  

export default Clicked; 

// Create a <Clicked> component. It should initially display "Not clicked" in a <p>. Once it's been clicked it should change to "Clicked".