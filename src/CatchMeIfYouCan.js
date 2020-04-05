import React, { Component } from "react";

import { Button } from "react-bootstrap";

class CatchMeIfYouCan extends Component {
    constructor(props) {
        super(props);

        this.state = {

            top: 0,
            
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        
        this.setState({
            top: this.state.top + this.props.jump,
        });
    }

    render() {
        return (
            <>
                <Button style={{ position: "relative", top: this.state.top + "px" }}onClick={ this.handleClick }> Jump 100px down Button </Button>
            </>
        );
    }
}

export default CatchMeIfYouCan;

// Using only React Bootstrap components (there shouldn't be any HTML elements), create a <CatchMeIfYouCan jump={ 100 }> component. It should have a button that when clicked moves jump pixels down the screen.