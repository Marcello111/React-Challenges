import React, { Component } from "react";
import { ListGroup, Button, InputGroup, FormControl } from "react-bootstrap";

class List2 extends Component {

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

        this.setState({ input: [...this.state.input, this.state.value], value:""});       
    }
 

    render() {

        let input = this.state.input;
       
        return (
           <div>
            <br></br>   
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Please type here: </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl value={ this.state.value} onChange={ this.handleChange }
               aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <Button onClick={ this.handleClick } >Add</Button>
            <ListGroup> {
            input.map((input, i) =>(
                <ListGroup.Item key={ i }>{ input }</ListGroup.Item>
                ))}
            </ListGroup>

           </div>
        );
    }
}


export default List2;

// Using only React Bootstrap components (there shouldn't be any HTML elements), create a <List> component that consists of a list group, an input, and an "Add" button. When you click the button, whatever is in the input should get added to the list group.