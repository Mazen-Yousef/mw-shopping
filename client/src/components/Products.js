import React, { useState } from 'react';
import{Card,Button}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Modal  from 'react-modal';
import ModalProduct from './ModalProduct';

export default function Products(props) {

  //         **ModalProduct**
  const[product,setProduct]=useState("");

   const openModal =(Product)=>{
    setProduct(Product)
   }
   const closeModal =()=>{
     setProduct(false)
   }
 
  return (
    <div className='products'> {props.products.map(product => (
      <div  key={product.key}>
          <Card >
             <Card.Img onClick={()=>openModal(product)} variant="top" src={product.imgUrl} alt={product.title} />
             <Card.Body>
               <Card.Title>{product.title}</Card.Title>
               <Card.Text className='cardText'>{product.desc}</Card.Text>
               <Button className='button'   variant="primary" onClick={()=>props.addToCart(product)}>Add To Cart</Button>
             </Card.Body>
          </Card>
      </div>
    ))}

   <Modal isOpen={product} onRequestClose={closeModal}>

       <ModalProduct product={product} closeModal={closeModal} />
       
   </Modal>


    </div>
  )
}
