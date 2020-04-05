import React from 'react';
import { SketchPicker } from 'react-color'

class Headline extends React.Component {


  constructor(props) {
      
    super(props);
    this.state = {
    background: '',
  };

  this.handleClick = this.handleClick.bind(this);
  this.handleChangeComplete = this.handleChangeComplete.bind(this);

}

  handleClick() {
    console.log(this.state.background);
  }

  handleChangeComplete = (col) => {
    console.log(col);
    this.setState({ background: col.hex });
  };

  render() {
    return (

        <div>  
            <h1 style= { {color: this.state.background }} onClick={ this.handleClick }>Changing Text</h1>
            <SketchPicker
                color={ this.state.background }
                onChangeComplete={ this.handleChangeComplete }
            />
        </div>

    );
  }
}

export default Headline;


// Use React Color to create a <Headline> component with a message prop. It should display the message with massive lettering. When you click on the headline it should show a colour picker. When you select a colour the text colour of the message should change.