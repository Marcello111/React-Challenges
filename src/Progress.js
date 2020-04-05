import React, { Component } from "react";

import { Button, ProgressBar } from "react-bootstrap";

class Progress extends Component {
    constructor(props) {
        super(props);

        this.state = {

            value: 0,
            
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        
        this.setState({

            value: this.state.value < 100 ? this.state.value + 10 : 0,
        });
    }

    render() {
        return (
            <>
                <ProgressBar
                    className="mt-4 mb-4"
                    animated now={ this.state.value }
                />
                <Button
                    onClick={ this.handleClick }
                >More!</Button>
            </>
        );
    }
}

export default Progress;


// Using only React Bootstrap components (there shouldn't be any HTML elements), create a <Progress> component. It should have a progress bar and a "More!" button. The progress bar should start at 0. Each time the button is pressed it should move 10% further along until it reaches 100%. Once it reaches 100% the button should become disabled.