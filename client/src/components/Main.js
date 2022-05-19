import React,{useEffect, useState} from 'react';
import Filter from './Filter';
import Products from './Products';
import data from '../data.json';
import{Carousel, Container,}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';


export default function Main() {

   //    **Products**

  const[products,setProducts]=useState(data)

  // ** filter by size **
  const filterSize = (e)=>{
     if(e.target.value === 'All'){
       setProducts(data)
    }else{
        let productsClone=[...data];
    let newProducts = productsClone.filter(p=>p.sizes.indexOf(e.target.value) !== -1);
       setProducts(newProducts)
     }
      }
  // ** filter by sort **
  const filterSort = (e)=>{
      let order = e.target.value;
      let productsClone=[...data];
      let newProducts = productsClone.sort( function (a,b) {
         if(order === 'Lowest'){
          return (a.prise - b.prise)
         }
         else if(order === 'Highest'){
           return (b.prise - a.prise)
         }
         else{
           return( a.key > b.key ? 1 : -1)
         }
      });
      setProducts(newProducts)
      
  }
  // ** filter by type **
  const filterType = (e)=>{
   let productsClone=[...data];
   let newProducts = productsClone.filter(p=>p.type.indexOf(e.target.value) !== -1);
      setProducts(newProducts)
  }

  //  ** Cart Items **

  const [cartItems,setCartItems]=useState(JSON.parse(localStorage.getItem('cartItem')) || []);

  const addToCart = (product) => {
    let cartItemsColne = [...cartItems] ;
    let productIsItem = false;
    cartItemsColne.forEach(item =>{ if(item.key === product.key){
         item.qty++;
         productIsItem = true}
      });

    if(!productIsItem){ cartItemsColne.push({...product,qty:1})}
             

      setCartItems(cartItemsColne)
  }

    
 //  ** Remove from Cart **

 const removeFormCart = (i) => {
    const cartItemsColne = [...cartItems];
    const cartItemsRemove = cartItemsColne.filter( item =>item.key !== i.key);
    
    setCartItems(cartItemsRemove)

 }
 //  ** useEffect - cartItems **

useEffect(()=>{
   localStorage.setItem('cartItem',JSON.stringify(cartItems))
},[cartItems])


  return (
   
    <main>
      <Container>  
            <section className='carousel'>

               <Carousel>
                  <Carousel.Item>
                     <img height={400}
                     className="d-block "
                     src="/Img/s1.png"
                     alt="First slide"
                     />
                     <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                     </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                     <img height={400}
                     className="d-block "
                     src="Img/s2.png"
                     alt="Second slide"
                     />

                     <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                     </Carousel.Caption>
                  </Carousel.Item>    
               </Carousel>

            </section>
               
            <section className='products_filter'>
               <Products products={products} addToCart={addToCart}  />
               <Filter filterSize={filterSize} filterSort={filterSort} filterType={filterType} />
            </section>

            <section>
               <Cart cartItems={cartItems} removeFormCart={removeFormCart} />
            </section>

      </Container>            

      
   </main>
 
  )
}
