import React, { Component } from "react";

import { InputGroup, FormControl } from "react-bootstrap";

class PasswordStrength extends Component {

    constructor(props) {

         super(props);

         this.state = { 
            
            input: "",
         };

         this.handleChange = this.handleChange.bind(this);
         this.calculate = this.calculate.bind(this);

    }
    handleChange(e) {

    
    this.setState({ input: e.currentTarget.value });
    
    }

    calculate() {

        let length = this.state.input.length

        if (length < 1) {

            return "none";

        }
        else if (length < 9) {

            return "red";

        } else if (length < 16) {
            
            return "orange";

        } else

        return "green";
        
    }  


    render() {
       
        return ( 

        <div>
            <br></br>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Password Strength</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl style= { {backgroundColor: this.calculate()}}  
               onChange={ this.handleChange }
               aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <br></br>
        </div>     

        );
    }
}

  

 export default PasswordStrength;


 //  Using only React Bootstrap components (there shouldn't be any HTML elements), create a <PasswordStrength> component. It should contain an <input> with the type password. The background styling should change depending on the length of the password:

// If it's empty the background shouldn't have styling.
// If it's less than 9 it should be red.
// If it's less than 16 it should be orange.
// If it's 16 or more then it should be green.