import React from "react";

// class Square extends Component {

//     constructor(props) {
    
//         super(props);

//         this.state = {
//             blue: true,
//         };
       
//         this.handleClick = this.handleClick.bind(this);
    
//     }


//     handleClick() {
//         this.setState({
//             blue: !this.state.blue,
//         })
//     }
    

//       render() {
       
//         return (
//             <div
//                 onClick={ this.handleClick }
//                 style={{
//                     height: 100,
//                     width: 100,
//                     background: this.state.blue ? "blue" : this.props.colour,
//                 }}
//             />
//         ); 
//       }

// }  


//component, prop
const Square = ({ squareColour }) => (
     <div> 
      <br></br>
      <div style={{
                    height: 100,
                    width: 100,
                   background: squareColour,}}>
      </div>
     </div>
     
);

export default Square;


// Create a route /squares/:colour which will show your Squares component using the colour provided in the URL








  
//   const Square = props => (

//     props.square ? 

//     <div style={ { 
//         backgroundColor: props.colour,
//         width: '200px',
//         height: '200px',
//         } }>
//     </div> : <p>no square</p>

//   );

//   Square.defaultProps = {
//     colour: "#32CD32",
// };

//   export default Square;