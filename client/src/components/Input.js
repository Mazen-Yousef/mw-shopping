import React from 'react';
import{Form}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Input(props) {
  return (
    <Form.Group className="mb-3 input" controlId="formBasicEmail" >
    <Form.Label><h5>{props.label}</h5></Form.Label>
    <Form.Control type={props.type} placeholder={props.placeholder} onChange={props.hanedleChange} name={props.name}/>
    <Form.Text className="text-muted">
    {props.formText}
    </Form.Text>
</Form.Group>
  )
}
