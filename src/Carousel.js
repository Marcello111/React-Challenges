import React from "react";

import { Card } from "react-bootstrap";
import Carousel from 'react-images';


const images = [
    { source: "https://images.unsplash.com/photo-1499898595565-f424ed1d075c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" },
    { source: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"},
    { source: "https://images.unsplash.com/photo-1443397646383-16272048780e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" }
];

class Images extends React.Component {
    render() {
      return (
      
      <Card className="text-center">
        <Card.Header>Best Photos</Card.Header>
        <Card.Body>
            <Carousel views={images} />
        </Card.Body>
        <Card.Footer className="text-muted">&#169;React Challenges, 2020</Card.Footer>
      </Card>
     ); 
    }
}

export default Images;

// Use React Images to create a carousel.