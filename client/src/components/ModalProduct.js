import React from 'react';
import{Card,Modal}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ModalProduct (props) {

  return (
      
      <div className='modalProduct'  key={props.product.key}>
          <Card>
            <Modal.Header
            closeButton onClick={props.closeModal}>
              <Card.Title>{props.product.title}</Card.Title>
            </Modal.Header>
            <Card.Img className='img' variant="top" src={props.product.imgUrl} alt={props.product.title} />
             <Card.Body>           
               <Card.Title> € {props.product.prise}</Card.Title>
               <Card.Text>{props.product.descM}</Card.Text>
             </Card.Body>
          </Card>
      </div>

  )
}
