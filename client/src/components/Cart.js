import React ,{useState} from 'react';
import{Figure,Button}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckoutForm from './CheckoutForm';

export default function Cart(props) {
    const [showForm,setShowForm]=useState(false)
  return (
   
        <div className='cart'>
            <h3 className='cartHeader'>
            {props.cartItems.length === 0 ? 'Cart Empty' : 
            <p>{props.cartItems.length === 1 ? 'There is 1 Product in Cart' :
            <p>There is {props.cartItems.length} Products in Cart</p>}
            </p>}
            </h3>
            {props.cartItems.map(item =>(
            <div className='cartItem' key={item.key}>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={item.imgUrl}
                    />
                    <div className='cartInfo'>
                        <div>
                        <div className='cardInfoTitle'> <h4>{item.title} :</h4><p>{item.desc}</p> </div>
                            <p>Qty : {item.qty}</p>
                            <p>Prise : € {item.prise*item.qty}</p>
                        </div> 
                        
                        <Button className='button'  variant="primary" onClick={()=>props.removeFormCart(item)}>Remove</Button>
                    </div>
            
            
            </div>
            ))}
            {props.cartItems.length !== 0 && (<div className='cartFooter'>
                <h3>
                Total Price : € {props.cartItems.reduce(
                    (acc,item)=>{
                        return (acc + item.prise*item.qty)
                    }, 0
                )}
                </h3>
                
                <Button className='button'  variant="primary" onClick={()=> setShowForm(true)} >Select Products</Button>

            </div>)  }  
            <CheckoutForm showForm={showForm} setShowForm={setShowForm} />
        </div>
       
    
  )
}
