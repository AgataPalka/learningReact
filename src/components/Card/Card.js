import React from 'react';
import {Card as CardKitchen, ListGroup, ListGroupItem} from 'react-bootstrap';

export const Card = () => (

<CardKitchen style={{ width: '18rem' }}>
  <CardKitchen.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <CardKitchen.Body>
    <CardKitchen.Title>Card Title</CardKitchen.Title>
    <CardKitchen.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardKitchen.Text>
  </CardKitchen.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <CardKitchen.Body>
    <CardKitchen.Link href="#">Card Link</CardKitchen.Link>
    <CardKitchen.Link href="#">Another Link</CardKitchen.Link>
  </CardKitchen.Body>
</CardKitchen>
)