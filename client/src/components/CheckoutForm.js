import React, { useState } from 'react';
import{Form,Button}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Input';

export default function CheckoutForm(props) {

    const subnmitOrder = (e)=>{
        e.preventDefault();

        const order = {
            name:value.name,
            email:value.email
        }
        console.log(order)
    }

    const[value,setValue]=useState("");

    const hanedleChange = (e)=>{
        setValue((oldValue) =>({ ...oldValue, [e.target.name] : e.target.value}) )
    }
    
  return (
<>
{props.showForm &&
    <div className='checkoutForm' >
    <Form onSubmit={subnmitOrder}>
        <span className='closeIcon' onClick={()=>props.setShowForm(false)}> &times; </span>
        <Input
            label="Name"
            type="text"
            placeholder="Enter name"
            hanedleChange={hanedleChange}
            name="name"
            formText=""
          
         />
         <Input
            label="Email address"
            type="email"
            placeholder="Enter email"
            hanedleChange={hanedleChange}
            name="email"
            formText="We'll never share your email with anyone else."

          />
     
        <Button variant="primary" type="submit" className=' button'>
            Checkout
        </Button>
    </Form>
</div>}
</>
  )
}
