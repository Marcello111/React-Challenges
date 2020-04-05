import React, { Component } from "react";

class Password extends Component {

    constructor(props) {

         super(props);

         this.state = { 
            
             input: "",
            

         };

         this.handleChange = this.handleChange.bind(this);
         this.calc = this.calc.bind(this);

    }
    handleChange(e) {

    
    this.setState({ input: e.currentTarget.value });
    
    }

    
    calc() {

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
             <p>Check your Password:</p>  
             <input
               style= { {backgroundColor: this.calc()}}
               onChange={ this.handleChange }
               value={ this.state.input }
               />
           </div>
        );
    }
}

  

 export default Password;




// Create a <PasswordStrength> component. It should contain an <input> with the type password. The background styling should change depending on the length of the password:

//     If it's empty the background shouldn't have styling.
//     If it's less than 9 it should be red.
//     If it's less than 16 it should be orange.
//     If it's 16 or more then it should be green.

