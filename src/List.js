import React, { Component } from "react";

class List extends Component {

    constructor(props) {

         super(props);

         this.state = { 
            
            value:"",    

            input: [],


         };

         this.handleChange = this.handleChange.bind(this);
         this.handleClick = this.handleClick.bind(this);
        

    }
    handleChange(e) {

    
    this.setState({ value: e.currentTarget.value });  


    }

    handleClick () {        
        // this.setState({input: this.state.input.push(this.state.value)});
        this.setState({ input: [...this.state.input, this.state.value], value:""});       
    }
 

    render() {

        let input = this.state.input;
       
        return (
           <div>
             <br></br>
             <input value={ this.state.value} onChange={ this.handleChange }></input>
             <button onClick={ this.handleClick }>Add</button>
             <ul>   {
            input.map((input, i) =>(
            <li key={ i }>{ input }</li>
            ))}
            </ul>
           </div>
        );
    }
}


export default List;



// Create a <List> component that consists of a <ul>, an <input>, and a <button>Add</button>. When you click the "Add" button, whatever is in the <input> should get added to the <ul>.


