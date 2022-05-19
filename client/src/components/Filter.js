import React from 'react';
import{Form}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Filter(props) {
  return (
    <div className='filter'>
            
            <h3 > Filter</h3>
          <Form.Select onChange={props.filterType} className='filter_Form_Select' size="lg" >
            <option hidden> Type</option>
            <option>Jeans</option>
            <option>Shoes</option>
            <option>Shirt</option>
          </Form.Select>
          <br />
          <Form.Select onChange={props.filterSize} className='filter_Form_Select' size="lg"  >
            <option hidden> Size</option>
            <option >All</option>
            <option >S</option>
            <option >M</option>
            <option >L</option>
            <option >XL</option>
          </Form.Select>
          <br />
          <Form.Select onChange={props.filterSort} className='filter_Form_Select' size="lg" >
            <option hidden>Sort</option>
            <option >Latest</option>
            <option >Lowest</option>
            <option >Highest</option>
          </Form.Select>



    </div>
  )
}
