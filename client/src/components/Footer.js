import React from 'react';
import{Card}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Footer() {
  return (
<footer className='footer'>
<Card className="bg-dark text-white">
  <Card.Img src="/Img/logo.png" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title></Card.Title>
    <Card.Text>

    </Card.Text>
    <Card.Text></Card.Text>
  </Card.ImgOverlay>
</Card>
</footer>
  )
}
