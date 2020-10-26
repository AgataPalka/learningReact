import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap';
import drinksImage from '/Users/agatapalka/Desktop/test2/src/assets/drinksImage.jpg';
import '/Users/agatapalka/Desktop/test2/src/components/Jumbotron.css';

export const Jumbotron = () => (


<Jumbo className='HomePageJumbo' fluid> 
  <Container className='HomePageContainer'>
    <div className ='HomePageText'><h1>Happy Times!</h1>
    <p>
      Welcome and have fun!
    </p>
    </div>
    <img src={drinksImage} width= '550' height='350' alt='drinks'/>
  </Container>
</Jumbo>
)